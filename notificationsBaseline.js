function Notifications(brwsr, env, password, username, sendNotif)
{
    //login to XA
    LogIN(brwsr, env, password, username);
    
    //setup browser variable
    browser = Sys.Browser(brwsr);
    
    //page variables
    var page = browser.ToURL("https://" + env + ".xactware.com/apps/xnadmin/Contractors.jsp");
    var contractorPage;
    
    //declare variables
    var contractorBreadcrumb;
    var XNAddress;
    if(env == "test" || env == "itest")
        XNAddress = "JCM.XWR.TST";
    else
        XNAddress = "QAVM.275.US.XWR.PRD";
    
    
    //type in XN address
    page.NativeWebObject.Find("name", "xnAddrFilter", "input").SetText(XNAddress);
    //click search
    page.NativeWebObject.Find("name", "Submit", "input").Click();
    page.Wait();
    aqUtils.Delay(2000);
    contractorPage = browser.Page("https://" + env + ".xactware.com/apps/xnadmin/Contractors.jsp?subpage*");
    //log breadcrumb verify its the contractor page
    contractorBreadcrumb = contractorPage.FindChildByXPath("//DIV[contains(@class, 'breadcrumbs')]");
    aqString.StrMatches("Contractors", contractorBreadcrumb.contentText) ? PrintSuccess("Successfully navigated to: " + contractorBreadcrumb.contentText) : PrintError("Did NOT successfully navigate to: " + contractorBreadcrumb);
    
    
    //create variable to store javascript alert function - for debugging purposes
    var popup = contractorPage.contentDocument.Script.alert;
    
    
    //array used to store contact methods - the last element EMAIL is for text messages
    var contactType = [1, 3, 0, 1];//used as indexes for the contact method drop down
    //regular expression strings to match contact option
    var contactIds = ["jcmillett(\w\W\d)*", "(\w\W\d)*7646\W*", "(\w\W\d)*3451\W*", "8019213451(\w\W\d)*"];
    
    for(var index = 0; index < 4; index++)
    {
      //click "ADD NEW" under contractor notifications
      contractorPage.FindChildByXPath("//INPUT[contains(@onclick, 'ShowNewNotificationRow')]").Click();
      PrintInfo("ADD NEW button clicked");
    
      //select all days of the week
      daysOfWeek = contractorPage.EvaluateXPath("//TR[@id='editNotification-new']/td/span");
      var daysOfWeek = new VBArray(daysOfWeek).toArray();
      for(i in daysOfWeek)
          daysOfWeek[i].Click();
          
      aqUtils.Delay(1500);
      
      //select the contact method
      var contactMethod = contractorPage.contentDocument.Script.$("select[name=contactMethod_type]");
      contactMethod.prop('selectedIndex', contactType[index]).change();
      var selectedOption = contractorPage.NativeWebObject.Find("name", "contactMethod_type", "select");
      PrintInfo("Contact Method: " + selectedOption.wText + " was selected");
          
      aqUtils.Delay(1000);
      
      //get length of the contact options
      dataOptions = contractorPage.EvaluateXPath("//SELECT[@name='contactMethod_id']/option");
      var dataOptions = VBArray(dataOptions).toArray();
      
      //popup(dataOptions[0].text);
      
      //setup the regular expression for the contact option
      var re = RegExp(contactIds[index]);
      
      //find the option in the drop down that matches the regular expression
      for(var j = 0; j < dataOptions.length; j++)
      {
        if(re.test(dataOptions[j].text))
        {
            //select the option
            var contactOption = contractorPage.contentDocument.Script.$("select[name=contactMethod_id]");
            contactOption.prop('selectedIndex', j).change();
            var contactOptionText = contractorPage.NativeWebObject.Find("name", "contactMethod_id", "select");
            PrintInfo("Contact Option: " + contactOptionText.wText + " was selected");
            break;
        }
      }
    
      //click save button
      contractorPage.FindChildByXPath("//A[contains(@href, 'CreateNewNotification')]").Click();
      contractorPage.Wait();
      PrintInfo("Save button was clicked");
    }
    

    if(sendNotif)
    {
        //click "SEND A TEST NOTIFICATION" button
        contractorPage.NativeWebObject.Find("value", "SEND A TEST NOTIFICATION", "input").Click();
        PrintInfo("Send Test Notification button clicked");
        
        var testNotBrows = Sys.Browser(brwsr);
        var testNotPage = testNotBrows.Page("https://" + env + ".xactware.com/apps/shared/dlg_testNotify.jsp*");
        testNotPage.Wait();
        var contactMethodCount = testNotPage.NativeWebObject.Find("name", "paramStr", "select").wItemCount;
        var cmText = ["Jace Millett", "jcmillett", "3451", "7646"];
        
        //send test notifications to all contact methods
        for(var i = 0; i < contactMethodCount; i++)
        {
                var testNotType = testNotPage.contentDocument.Script.$("select[name=paramStr]");
                testNotType.prop('selectedIndex', i).change();
                var testNotTypeText = testNotPage.NativeWebObject.Find("name", "paramStr", "select");
                var notifyText = testNotTypeText.wText;
                //PrintInfo("Test Notification: " + notifyText + " was selected");
            
                //click SEND NOTIFICATION button
                if(aqString.StrMatches(cmText[0], notifyText) || aqString.StrMatches(cmText[1], notifyText) || aqString.StrMatches(cmText[2], notifyText) || aqString.StrMatches(cmText[3], notifyText))
                {
                    testNotPage.NativeWebObject.Find("value", "SEND NOTIFICATION", "input").Click();
                    aqUtils.Delay(800);
                    PrintInfo("Test notification was sent to: " + notifyText);
            
                    //click back button
                    var testNotFinishPage = testNotBrows.Page("https://" + env + ".xactware.com/apps/shared/dlg_testNotifyFinish.jsp*");
                    testNotFinishPage.Wait();
                    testNotPage.NativeWebObject.Find("value", "BACK", "input").Click();
                    aqUtils.Delay(800);
                }

    
        }
            //close send test notification browser
            testNotPage.NativeWebObject.Find("contentText", "close", "a").Click();
    }

        
        //delete all notifications
        for(j = 0; j < 4; j++)
        {    
            var dlt = contractorPage.NativeWebObject.Find("contentText", "Delete", "a");
            dlt.Click();
            aqUtils.Delay(1000);
        
            //click ok at the nag screen to delete notification
            var nagScreen = contractorPage.NativeWebObject.Find("ObjectType", "Confirm");
            nagScreen.Child(1).Click();
            
            PrintInfo("Notification was deleted");
        }
        
        //verify that all notifications were deleted
        notifyTable = contractorPage.EvaluateXPath("//TABLE[@id='notificationsTable']/tbody/tr");
        var notifyTable = new VBArray(notifyTable).toArray();
        
        if(notifyTable.length == 3)
            PrintSuccess("All notifications were deleted successfully");
        else
            PrintError(notifyTable.length-3 + " notifications weren't deleted");
            
        
        //verify that the email test notification was sent successfully
        var receiver = "jcmillett@xactware.com";
        var receiverName = "Jace Millett";
        var sender = "XactAnalysis";
        var subject = "Contact John Smith";
        findEmail(receiver, receiverName, sender, subject);
        
        logout(brwsr);
}