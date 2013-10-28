(function(){

//data
//-----------------------------------------------------------------------------------------------------------------
var today=new Date();
var dateString = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()+'_'+today.toTimeString();
var x = Math.ceil((2500*Math.random()-1));
var y = Math.ceil((2500*Math.random()-1));
var z = Math.ceil((2500*Math.random()-1));

//first and last name
var fullName = "";
var firstnamelist = ("James,John,Robert,Michael,William,David,Richard,Charles,Joseph,Thomas,Christopher,Daniel,Paul,Mark,Donald,George,Kenneth,Steven,Edward,Brian,Ronald,Anthony,Kevin,Jason,Matthew,Gary,Timothy,Jose,Larry,Jeffrey,Frank,Scott,Eric,Stephen,Andrew,Raymond,Gregory,Joshua,Jerry,Dennis,Walter,Patrick,Peter,Harold,Douglas,Henry,Carl,Arthur,Ryan,Roger,Joe,Juan,Jack,Albert,Jonathan,Justin,Terry,Gerald,Keith,Samuel,Willie,Ralph,Lawrence,Nicholas,Roy,Benjamin,Bruce,Brandon,Adam,Harry,Fred,Wayne,Billy,Steve,Louis,Jeremy,Aaron,Randy,Howard,Eugene,Carlos,Russell,Bobby,Victor,Martin,Ernest,Phillip,Todd,Jesse,Craig,Alan,Shawn,Clarence,Sean,Philip,Chris,Johnny,Earl,Jimmy,Antonio,Danny,Bryan,Tony,Luis,Mike,Stanley,Leonard,Nathan,Dale,Manuel,Rodney,Curtis,Norman,Allen,Marvin,Vincent,Glenn,Jeffery,Travis,Jeff,Chad,Jacob,Lee,Melvin,Alfred,Kyle,Francis,Bradley,Jesus,Herbert,Frederick,Ray,Joel,Edwin,Don,Eddie,Ricky,Troy,Randall,Barry,Alexander,Bernard,Mario,Leroy,Francisco,Marcus,Micheal,Theodore,Clifford,Miguel,Oscar,Jay,Jim,Tom,Calvin,Alex,Jon,Ronnie,Bill,Lloyd,Tommy,Leon,Derek,Warren,Darrell,Jerome,Floyd,Leo,Alvin,Tim,Wesley,Gordon,Dean,Greg,Jorge,Dustin,Pedro,Derrick,Dan,Lewis,Zachary,Corey,Herman,Maurice,Vernon,Roberto,Clyde,Glen,Hector,Shane,Ricardo,Sam,Rick,Lester,Brent,Ramon,Charlie,Tyler,Gilbert,Gene,Marc,Reginald,Ruben,Brett,Angel,Nathaniel,Rafael,Leslie,Edgar,Milton,Raul,Ben,Chester,Cecil,Duane,Franklin,Andre,Elmer,Brad,Gabriel,Ron,Mitchell,Roland,Arnold,Harvey,Jared,Adrian,Karl,Cory,Claude,Erik,Darryl,Jamie,Neil,Jessie,Christian,Javier,Fernando,Clinton,Ted,Mathew,Tyrone,Darren,Lonnie,Lance,Cody,Julio,Kelly,Kurt,Allan,Nelson,Guy,Clayton,Hugh,Max,Dwayne,Dwight,Armando,Felix,Jimmie,Everett,Jordan,Ian,Wallace,Ken,Bob,Jaime,Casey,Alfredo,Alberto,Dave,Ivan,Johnnie,Sidney,Byron,Julian,Isaac,Morris,Clifton,Willard,Daryl,Ross,Virgil,Andy,Marshall,Salvador,Perry,Kirk,Sergio,Marion,Tracy,Seth,Kent,Terrance,Rene,Eduardo,Terrence,Enrique,Freddie,Wade,Mary,Patricia,Linda,Barbara,Elizabeth,Jennifer,Maria,Susan,Margaret,Dorothy,Lisa,Nancy,Karen,Betty,Helen,Sandra,Donna,Carol,Ruth,Sharon,Michelle,Laura,Sarah,Kimberly,Deborah,Jessica,Shirley,Cynthia,Angela,Melissa,Brenda,Amy,Anna,Rebecca,Virginia,Kathleen,Pamela,Martha,Debra,Amanda,Stephanie,Carolyn,Christine,Marie,Janet,Catherine,Frances,Ann,Joyce,Diane,Alice,Julie,Heather,Teresa,Doris,Gloria,Evelyn,Jean,Cheryl,Mildred,Katherine,Joan,Ashley,Judith,Rose,Janice,Kelly,Nicole,Judy,Christina,Kathy,Theresa,Beverly,Denise,Tammy,Irene,Jane,Lori,Rachel,Marilyn,Andrea,Kathryn,Louise,Sara,Anne,Jacqueline,Wanda,Bonnie,Julia,Ruby,Lois,Tina,Phyllis,Norma,Paula,Diana,Annie,Lillian,Emily,Robin,Peggy,Crystal,Gladys,Rita,Dawn,Connie,Florence,Tracy,Edna,Tiffany,Carmen,Rosa,Cindy,Grace,Wendy,Victoria,Edith,Kim,Sherry,Sylvia,Josephine,Thelma,Shannon,Sheila,Ethel,Ellen,Elaine,Marjorie,Carrie,Charlotte,Monica,Esther,Pauline,Emma,Juanita,Anita,Rhonda,Hazel,Amber,Eva,Debbie,April,Leslie,Clara,Lucille,Jamie,Joanne,Eleanor,Valerie,Danielle,Megan,Alicia,Suzanne,Michele,Gail,Bertha,Darlene,Veronica,Jill,Erin,Geraldine,Lauren,Cathy,Joann,Lorraine,Lynn,Sally,Regina,Erica,Beatrice,Dolores,Bernice,Audrey,Yvonne,Annette,June,Samantha,Marion,Dana,Stacy,Ana,Renee,Ida,Vivian,Roberta,Holly,Brittany,Melanie,Loretta,Yolanda,Jeanette,Laurie,Katie,Kristen,Vanessa,Alma,Sue,Elsie,Beth,Jeanne,Vicki,Carla,Tara,Rosemary,Eileen,Terri,Gertrude,Lucy,Tonya,Ella,Stacey,Wilma,Gina,Kristin,Jessie,Natalie,Agnes,Vera,Willie,Charlene,Bessie,Delores,Melinda,Pearl,Arlene,Maureen,Colleen,Allison,Tamara,Joy,Georgia,Constance,Lillie,Claudia,Jackie,Marcia,Tanya,Nellie,Minnie,Marlene,Heidi,Glenda,Lydia,Viola,Courtney,Marian,Stella,Caroline,Dora,Jo,Vickie,Mattie,Terry,Maxine,Irma,Mabel,Marsha,Myrtle,Lena,Christy,Deanna,Patsy,Hilda,Gwendolyn,Jennie,Nora,Margie,Nina,Cassandra,Leah,Penny,Kay,Priscilla,Naomi,Carole,Brandy,Olga,Billie,Dianne,Tracey,Leona,Jenny,Felicia,Sonia,Miriam,Velma,Becky,Bobbie,Violet,Kristina,Toni,Misty,Mae,Shelly,Daisy,Ramona,Sherri,Erika,Katrina,Claire").split(",");
var choosename = [Math.floor(Math.random() * 600)];
var firstnameout = "";
firstnameout += firstnamelist[choosename];
var lastnamelist = ("Smith,Johnson,Williams,Jones,Brown,Davis,Miller,Wilson,Moore,Taylor,Anderson,Thomas,Jackson,White,Harris,Martin,Thompson,Garcia,Martinez,Robinson,Clark,Rodriguez,Lewis,Lee,Walker,Hall,Allen,Young,Hernandez,King,Wright,Lopez,Hill,Scott,Green,Adams,Baker,Gonzalez,Nelson,Carter,Mitchell,Perez,Roberts,Turner,Phillips,Campbell,Parker,Evans,Edwards,Collins,Stewart,Sanchez,Morris,Rogers,Reed,Cook,Morgan,Bell,Murphy,Bailey,Rivera,Cooper,Richardson,Cox,Howard,Ward,Torres,Peterson,Gray,Ramirez,James,Watson,Brooks,Kelly,Sanders,Price,Bennett,Wood,Barnes,Ross,Henderson,Coleman,Jenkins,Perry,Powell,Long,Patterson,Hughes,Flores,Washington,Butler,Simmons,Foster,Gonzales,Bryant,Alexander,Russell,Griffin,Diaz,Hayes,Myers,Ford,Hamilton,Graham,Sullivan,Wallace,Woods,Cole,West,Jordan,Owens,Reynolds,Fisher,Ellis,Harrison,Gibson,Mcdonald,Cruz,Marshall,Ortiz,Gomez,Murray,Freeman,Wells,Webb,Simpson,Stevens,Tucker,Porter,Hunter,Hicks,Crawford,Henry,Boyd,Mason,Morales,Kennedy,Warren,Dixon,Ramos,Reyes,Burns,Gordon,Shaw,Holmes,Rice,Robertson,Hunt,Black,Daniels,Palmer,Mills,Nichols,Grant,Knight,Ferguson,Rose,Stone,Hawkins,Dunn,Perkins,Hudson,Spencer,Gardner,Stephens,Payne,Pierce,Berry,Matthews,Arnold,Wagner,Willis,Ray,Watkins,Olson,Carroll,Duncan,Snyder,Hart,Cunningham,Bradley,Lane,Andrews,Ruiz,Harper,Fox,Riley,Armstrong,Carpenter,Weaver,Greene,Lawrence,Elliott,Chavez,Sims,Austin,Peters,Kelley,Franklin,Lawson,Fields,Gutierrez,Ryan,Schmidt,Carr,Vasquez,Castillo,Wheeler,Chapman,Oliver,Montgomery,Richards,Williamson,Johnston,Banks,Meyer,Bishop,Mccoy,Howell,Alvarez,Morrison,Hansen,Fernandez,Garza,Harvey,Little,Burton,Stanley,Nguyen,George,Jacobs,Reid,Kim,Fuller,Lynch,Dean,Gilbert,Garrett,Romero,Welch,Larson,Frazier,Burke,Hanson,Day,Mendoza,Moreno,Bowman,Medina,Fowler,Brewer,Hoffman,Carlson,Silva,Pearson,Holland,Douglas,Fleming,Jensen,Vargas,Byrd,Davidson,Hopkins,May,Terry,Herrera,Wade,Soto,Walters,Curtis,Neal,Caldwell,Lowe,Jennings,Barnett,Graves,Jimenez,Horton,Shelton,Barrett,Obrien,Castro,Sutton,Gregory,Mckinney,Lucas,Miles,Craig,Rodriquez,Chambers,Holt,Lambert,Fletcher,Watts,Bates,Hale,Rhodes,Pena,Beck,Newman,Haynes,Mcdaniel,Mendez,Bush,Vaughn,Parks,Dawson,Santiago,Norris,Hardy,Love,Steele,Curry,Powers,Schultz,Barker,Guzman,Page,Munoz,Ball,Keller,Chandler,Weber,Leonard,Walsh,Lyons,Ramsey,Wolfe,Schneider,Mullins,Benson,Sharp,Bowen,Daniel,Barber,Cummings,Hines,Baldwin,Griffith,Valdez,Hubbard,Salazar,Reeves,Warner,Stevenson,Burgess,Santos,Tate,Cross,Garner,Mann,Mack,Moss,Thornton,Dennis,Mcgee,Farmer,Delgado,Aguilar,Vega,Glover,Manning,Cohen,Harmon,Rodgers,Robbins,Newton,Todd,Blair,Higgins,Ingram,Reese,Cannon,Strickland,Townsend,Potter,Goodwin,Walton,Rowe,Hampton,Ortega,Patton,Swanson,Joseph,Francis,Goodman,Maldonado,Yates,Becker,Erickson,Hodges,Rios,Conner,Adkins,Webster,Norman,Malone,Hammond,Flowers,Cobb,Moody,Quinn,Blake,Maxwell,Pope,Floyd,Osborne,Paul,Mccarthy,Guerrero,Lindsey,Estrada,Sandoval,Gibbs,Tyler,Gross,Fitzgerald,Stokes,Doyle,Sherman,Saunders,Wise,Colon,Gill,Alvarado,Greer,Padilla,Simon,Waters,Nunez,Ballard,Schwartz,Mcbride,Houston,Christensen,Klein,Pratt,Briggs,Parsons,Mclaughlin,Zimmerman,French,Buchanan,Moran,Copeland,Roy,Pittman,Brady,Mccormick,Holloway,Brock,Poole,Frank,Logan,Owen,Bass,Marsh,Drake,Wong,Jefferson,Park,Morton,Abbott,Sparks,Patrick,Norton,Huff,Clayton,Massey,Lloyd,Figueroa,Carson,Bowers,Roberson,Barton,Tran,Lamb,Harrington,Casey,Boone,Cortez,Clarke,Mathis,Singleton,Wilkins,Cain,Bryan,Underwood,Hogan,Mckenzie,Collier,Luna,Phelps,Mcguire,Allison,Bridges,Wilkerson,Nash,Summers,Atkins").split(",");
var chooselastname = [Math.floor(Math.random() * 500)];
var lastnameout = "";
lastnameout += lastnamelist[chooselastname];
fullName = firstnameout + " " + lastnameout;

//zip codes and cities
var zipCodes = [[["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["99502", "Anchorage"], ["99504", "Anchorage"], ["99695", "Anchorage"], ["99734", "Prudhoe Bay"], ["99701", "Fairbanks"], ["99788", "Chalkyitsik"], ["99919", "Thorne Bay"], ["99654", "Wasilla"], ["99850", "Juneau"], ["99801", "Juneau"]], [["36204", "Anniston"], ["35810", "Huntsville"], ["35613", "Athens"], ["35246", "Birmingham"], ["35292", "Birmingham"], ["35210", "Birmingham"], ["35233", "Birmingham"], ["35292", "Birmingham"], ["36119", "Montgomery"], ["36111", "Montgomery"]], [["72913", "Fort Smith"], ["72206", "Little Rock"], ["72295", "Little Rock"], ["72115", "North Little Rock"], ["71611", "Pine Bluff"], ["72401", "Jonesboro"], ["72703", "Fayetteville"], ["72919", "Fort Smith"], ["72766", "Springdale"], ["72303", "West Memphis"]], [["85220", "Apache Junction"], ["86004", "Flagstaff"], ["85311", "Glendale"], ["85210", "Mesa"], ["85277", "Mesa"], ["85011", "Phoenix"], ["85082", "Phoenix"], ["86301", "Prescott"], ["85717", "Tucson"], ["85775", "Tucson"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["91301", "Agoura Hills"], ["91896", "Alhambra"], ["92812", "Anaheim"], ["93303", "Bakersfield"], ["95066", "Scotts Valley"], ["91521", "Burbank"], ["92030", "Escondido"], ["93727", "Fresno"], ["94624", "Oakland"], ["95812", "Sacramento"]], [["80044", "Aurora"], ["80323", "Boulder"], ["80911", "Colorado Springs"], ["80222", "Denver"], ["80525", "Fort Collins"], ["81502", "Grand Junction"], ["80538", "Loveland"], ["81010", "Pueblo"], ["81154", "South Fork"], ["81047", "Holly"]], [["06606", "Bridgeport"], ["06138", "East Hartford"], ["06153", "Hartford"], ["06515", "New Haven"], ["06720", "Waterbury"], ["06858", "Norwalk"], ["06243", "East Killingly"], ["06817", "Danbury"], ["06699", "Bridgeport"], ["06238", "Coventry"]], [["19905", "Dover"], ["19725", "Newark"], ["19711", "Newark"], ["19960", "Lincoln"], ["19934", "Camden Wyoming"], ["19810", "Wilmington"], ["19966", "Millsboro"], ["19890", "Wilmington"], ["19966", "Millsboro"], ["19971", "Rehoboth Beach"]], [["20032", "Washington"], ["20411", "Washington"], ["20001", "Washington"], ["20222", "Washington"], ["20577", "Washington"], ["20599", "Washington"], ["20066", "Washington"], ["20222", "Washington"], ["20468", "Washington"], ["20097", "Washington"]], [["32833", "Orlando"], ["33433", "Boca Raton"], ["33426", "Boynton Beach"], ["34210", "Bradenton"], ["34609", "Brooksville"], ["33915", "Cape Coral"], ["33760", "Clearwater"], ["32121", "Daytona Beach"], ["33141", "Miami Beach"], ["33199", "Miami"]], [["31702", "Albany"], ["30022", "Alpharetta"], ["30605", "Athens"], ["30314", "Atlanta"], ["39901", "Atlanta"], ["30912", "Augusta"], ["31906", "Columbus"], ["30098", "Duluth"], ["31211", "Macon"], ["31410", "Savannah"]], [["96810", "Honolulu"], ["96843", "Honolulu"], ["96714", "Hanalei"], ["96762", "Laie"], ["96713", "Hana"], ["96749", "Keaau"], ["96705", "Eleele"], ["96769", "Makaweli"], ["96763", "Lanai City"], ["96772", "Naalehu"]], [["50011", "Ames"], ["50613", "Cedar Falls"], ["52409", "Cedar Rapids"], ["52733", "Clinton"], ["50333", "Des Moines"], ["52099", "Dubuque"], ["52752", "Grandview"], ["52244", "Iowa City"], ["50661", "North Washington"], ["51109", "Sioux City"]], [["83707", "Boise"], ["83802", "Avery"], ["83314", "Bliss"], ["83252", "Malad City"], ["83522", "Cottonwood"], ["83812", "Clarkia"], ["83703", "Boise"], ["83404", "Idaho Falls"], ["83209", "Pocatello"], ["83441", "Rexburg"]], [["60006", "Arlington Heights"], ["60506", "Aurora"], ["60459", "Burbank"], ["62222", "Belleville"], ["61799", "Bloomington"], ["61820", "Champaign"], ["60611", "Chicago"], ["60645", "Chicago"], ["60102", "Algonquin"], ["61636", "Peoria"]], [["46016", "Anderson"], ["47407", "Bloomington"], ["47201", "Columbus"], ["47933", "Crawfordsville"], ["47713", "Evansville"], ["46856", "Fort Wayne"], ["46885", "Fort Wayne"], ["46406", "Gary"], ["47307", "Muncie"], ["46634", "South Bend"]], [["66117", "Kansas City"], ["66045", "Lawrence"], ["66210", "Shawnee Mission"], ["66502", "Manhattan"], ["66061", "Olathe"], ["66251", "Shawnee Mission"], ["67502", "Hutchinson"], ["67218", "Wichita"], ["67735", "Goodland"], ["67868", "Pierceville"]], [["42103", "Bowling Green"], ["40702", "Corbin"], ["41102", "Ashland"], ["42718", "Campbellsville"], ["41015", "Latonia"], ["40503", "Lexington"], ["40619", "Frankfort"], ["40219", "Louisville"], ["40283", "Louisville"], ["41073", "Bellevue"]], [["71303", "Alexandria"], ["70814", "Baton Rouge"], ["70896", "Baton Rouge"], ["71113", "Bossier City"], ["70435", "Covington"], ["70404", "Hammond"], ["70065", "Kenner"], ["70190", "New Orleans"], ["70149", "New Orleans"], ["70615", "Lake Charles"]], [["01719", "Boxborough"], ["01003", "Amherst"], ["02118", "Boston"], ["02293", "Boston"], ["02304", "Brockton"], ["02141", "Cambridge"], ["01027", "Easthampton"], ["01833", "Georgetown"], ["02059", "North Marshfield"], ["02362", "Plymouth"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["21211", "Baltimore"], ["21405", "Annapolis"], ["20814", "Bethesda"], ["20882", "Gaithersburg"], ["20707", "Laurel"], ["20913", "Takoma Park"], ["20719", "Bowie"], ["21504", "Cumberland"], ["20770", "Greenbelt"], ["21648", "Madison"]], [["04210", "Auburn"], ["04336", "Augusta"], ["04007", "Biddeford"], ["04112", "Portland"], ["04402", "Bangor"], ["04921", "Brooks"], ["04743", "Fort Kent"], ["04286", "West Bethel"], ["04013", "Bustins Island"], ["04761", "New Limerick"]], [["48230", "Grosse Pointe"], ["48554", "Flint"], ["48937", "Lansing"], ["48108", "Ann Arbor"], ["49009", "Kalamazoo"], ["49525", "Grand Rapids"], ["49968", "Wakefield"], ["49855", "Marquette"], ["49660", "Manistee"], ["49721", "Cheboygan"]], [["55431", "Minneapolis"], ["55357", "Loretto"], ["55038", "Hugo"], ["55410", "Minneapolis"], ["55599", "Loretto"], ["55126", "Saint Paul"], ["56303", "Saint Cloud"], ["56561", "Moorhead"], ["55816", "Duluth"], ["56265", "Montevideo"]], [["64172", "Kansas City"], ["63116", "Saint Louis"], ["64503", "Saint Joseph"], ["65110", "Jefferson City"], ["64803", "Joplin"], ["65805", "Springfield"], ["64058", "Independence"], ["63702", "Cape Girardeau"], ["65775", "West Plains"], ["63445", "Kahoka"]], [["39533", "Biloxi"], ["39601", "Brookhaven"], ["39710", "Columbus"], ["38632", "Hernando"], ["38703", "Greenville"], ["39505", "Gulfport"], ["39532", "Biloxi"], ["39669", "Woodville"], ["39212", "Jackson"], ["39773", "West Point"]], [["59106", "Billings"], ["59402", "Malmstrom A F B"], ["59482", "Sunburst"], ["59255", "Poplar"], ["59703", "Butte"], ["59353", "Wibaux"], ["59807", "Missoula"], ["59108", "Billings"], ["59405", "Great Falls"], ["59936", "West Glacier"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["28806", "Asheville"], ["27117", "Winston Salem"], ["27420", "Greensboro"], ["27599", "Chapel Hill"], ["28210", "Charlotte"], ["28288", "Charlotte"], ["27616", "Raleigh"], ["27909", "Elizabeth City"], ["28541", "Jacksonville"], ["28412", "Wilmington"]], [["58206", "Grand Forks"], ["58108", "Fargo"], ["58507", "Bismarck"], ["58431", "Dickey"], ["58702", "Minot"], ["58075", "Wahpeton"], ["58458", "Lamoure"], ["58566", "Saint Anthony"], ["58402", "Jamestown"], ["58207", "Grand Forks"]], [["68112", "Omaha"], ["68175", "Omaha"], ["69357", "Mitchell"], ["69033", "Imperial"], ["68514", "Lincoln"], ["68527", "Lincoln"], ["68802", "Grand Island"], ["69001", "Mc Cook"], ["68776", "South Sioux City"], ["69201", "Valentine"]], [["03303", "Concord"], ["03773", "Newport"], ["03804", "Portsmouth"], ["03868", "Rochester"], ["03576", "Colebrook"], ["03266", "Rumney"], ["03756", "Lebanon"], ["03063", "Nashua"], ["03584", "Lancaster"], ["03450", "Harrisville"]], [["08404", "Atlantic City"], ["08006", "Barnegat Light"], ["08721", "Bayville"], ["07827", "Montague"], ["08110", "Pennsauken"], ["08002", "Cherry Hill"], ["07013", "Clifton"], ["07869", "Randolph"], ["08620", "Trenton"], ["08922", "New Brunswick"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["87111", "Albuquerque"], ["87192", "Albuquerque"], ["88024", "Berino"], ["88242", "Hobbs"], ["88202", "Roswell"], ["88101", "Clovis"], ["88311", "Alamogordo"], ["87402", "Farmington"], ["88062", "Silver City"], ["88401", "Tucumcari"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["89704", "Washoe Valley"], ["89509", "Reno"], ["89119", "Las Vegas"], ["89143", "Las Vegas"], ["89103", "Las Vegas"], ["89009", "Henderson"], ["89024", "Mesquite"], ["89446", "Winnemucca"], ["89039", "Cal Nev Ari"], ["88901", "The Lakes"]], [["12214", "Albany"], ["10459", "Bronx"], ["11233", "Brooklyn"], ["14219", "Buffalo"], ["14212", "Buffalo"], ["11691", "Far Rockaway"], ["10111", "New York City"], ["14639", "Rochester"], ["14639", "Rochester"], ["12903", "Plattsburgh"]], [["44313", "Akron"], ["45244", "Cincinnati"], ["45440", "Dayton"], ["44720", "Canton"], ["45215", "Cincinnati"], ["43221", "Columbus"], ["45435", "Dayton"], ["44132", "Euclid"], ["45044", "Middletown"], ["43612", "Toledo"]], [["74012", "Broken Arrow"], ["74402", "Muskogee"], ["73942", "Guymon"], ["74354", "Miami"], ["73506", "Lawton"], ["74745", "Idabel"], ["73648", "Elk City"], ["73143", "Oklahoma City"], ["73070", "Norman"], ["73012", "Bray"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["97207", "Portland"], ["97408", "Eugene"], ["97138", "Seaside"], ["97312", "Salem"], ["97501", "Medford"], ["97814", "Baker City"], ["97710", "Fields"], ["97709", "Bend"], ["97819", "Bridgeport"], ["97124", "Hillsboro"]], [["15225", "Pittsburgh"], ["19121", "Philadelphia"], ["17126", "Harrisburg"], ["16544", "Erie"], ["18507", "Moosic"], ["18104", "Allentown"], ["17130", "Harrisburg"], ["16803", "State College"], ["16105", "New Castle"], ["16927", "Harrison Valley"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["02908", "Providence"], ["02921", "Cranston"], ["02895", "Woonsocket"], ["02830", "Harrisville"], ["02841", "Newport"], ["02808", "Bradford"], ["02825", "Foster"], ["02861", "Pawtucket"], ["02910", "Cranston"], ["02809", "Bristol"]], [["29413", "Charleston"], ["29587", "Myrtle Beach"], ["29479", "Saint Stephen"], ["29926", "Hilton Head Island"], ["29218", "Columbia"], ["29611", "Greenville"], ["29622", "Anderson"], ["29860", "North Augusta"], ["29731", "Rock Hill"], ["29505", "Florence"]], [["57104", "Sioux Falls"], ["57189", "Sioux Falls"], ["57522", "Blunt"], ["57703", "Rapid City"], ["57201", "Watertown"], ["57720", "Buffalo"], ["57551", "Martin"], ["57620", "Bison"], ["57078", "Yankton"], ["57325", "Chamberlain"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]], [["37213", "Nashville"], ["38122", "Memphis"], ["38305", "Jackson"], ["37408", "Chattanooga"], ["37130", "Murfreesboro"], ["37932", "Knoxville"], ["38303", "Jackson"], ["37044", "Clarksville"], ["38261", "Union City"], ["37602", "Johnson City"]], [["78728", "Austin"], ["78246", "San Antonio"], ["77223", "Houston"], ["76120", "Fort Worth"], ["75283", "Dallas"], ["79116", "Amarillo"], ["79712", "Midland"], ["78416", "Corpus Christi"], ["79996", "El Paso"], ["79423", "Lubbock"]], [["84604", "Provo"], ["84057", "Orem"], ["84402", "Ogden"], ["84120", "Salt Lake City"], ["84119", "Salt Lake City"], ["84128", "Salt Lake City"], ["84790", "Saint George"], ["84078", "Vernal"], ["84651", "Payson"], ["84720", "Cedar City"]], [["22203", "Arlington"], ["22802", "Harrisonburg"], ["23238", "Richmond"], ["23515", "Norfolk"], ["24030", "Roanoke"], ["22603", "Winchester"], ["23471", "Virginia Beach"], ["23436", "Suffolk"], ["24209", "Bristol"], ["22604", "Winchester"]], [["05479", "Saint Albans"], ["05603", "Montpelier"], ["05855", "Newport"], ["05201", "Bennington"], ["05304", "Brattleboro"], ["05641", "Barre"], ["05491", "Vergennes"], ["05156", "Springfield"], ["05748", "Hancock"], ["05452", "Essex Junction"]], [["99216", "Spokane"], ["98227", "Bellingham"], ["98170", "Seattle"], ["98421", "Tacoma"], ["98666", "Vancouver"], ["98595", "Westport"], ["98363", "Port Angeles"], ["98226", "Bellingham"], ["98337", "Bremerton"], ["98802", "East Wenatchee"]], [["53207", "Milwaukee"], ["53725", "Madison"], ["54402", "Wausau"], ["54302", "Green Bay"], ["54701", "Eau Claire"], ["54602", "La Crosse"], ["53779", "Madison"], ["54501", "Rhinelander"], ["54904", "Oshkosh"], ["53081", "Sheboygan"]], [["25327", "Charleston"], ["25714", "Huntington"], ["26506", "Morgantown"], ["26104", "Parkersburg"], ["26836", "Moorefield"], ["24740", "Princeton"], ["25776", "Huntington"], ["26034", "Chester"], ["26003", "Wheeling"], ["26847", "Petersburg"]], [["82931", "Evanston"], ["82003", "Cheyenne"], ["82010", "Cheyenne"], ["82602", "Casper"], ["82638", "Hiland"], ["82838", "Parkman"], ["82729", "Sundance"], ["83001", "Jackson"], ["82071", "Laramie"], ["82414", "Cody"]], [["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"], ["1", "1"]]];

//phone num
var RandomPhone = Math.floor(Math.random()*10000);
if (RandomPhone < 1000 && RandomPhone > 100){RandomPhone =  "0" + RandomPhone;
}if (RandomPhone < 100 && RandomPhone > 10) {RandomPhone =  "00" + RandomPhone;
}if (RandomPhone < 10){RandomPhone =  "000" + RandomPhone;
}var phoneNum = "800555" + RandomPhone;


//jQuery
//----------------------------------------------------------------------
//test checkbox
$('[name=test]').attr('checked',false);

//name
$('[name=insured_name]').val(fullName);

//street
var latNum = Math.floor(Math.random()*9999)
var longNum = Math.floor(Math.random()*9999)
var lat = Array('N', 'S');
var longi = Array('W', 'E');
$('[name=insured_street]').val(latNum + " " + lat[Math.floor(Math.random()*lat.length)] + " " + longNum + " " + longi[Math.floor(Math.random()*longi.length)]);

//state
var $insured_state=$('[name=insured_state]');
var randomState = Math.floor(Math.random()*(64) + 1);
while(zipCodes[randomState-1][0][0] == 1){randomState = Math.floor(Math.random()*(64) + 1);
}$insured_state.prop('selectedIndex', randomState);
$insured_state.blur();
$insured_state.change();

//zip code
var randomZipIndex = Math.floor(Math.random()*(10));
var randomZip = zipCodes[randomState-1][randomZipIndex][0];
if(String(randomZip).length == 4)
{temp = randomZip;
randomZip = "0" + temp;
}var $zip=$('[name=insured_zip]');
$zip.val(randomZip);
$zip.blur();
$zip.change();

//city
var $insured_city=$('[name=insured_city]');
$insured_city.val(zipCodes[randomState-1][randomZipIndex][1]);
$insured_city.blur();
$insured_city.change();

//phone
var $phone=$('[name=insured_home_phone]');
$phone.val(phoneNum);
$phone.blur();

//email
var $email=$('[name=insured_email]');
$email.val('email'+y+'@email.com');
$email.blur();

//loss type
var $loss_type=$('select[name=loss_type]');
var maxLossType = ($loss_type.children('option').length) - 1;
var randomLossType = Math.floor(Math.random()*(maxLossType) + 1);
$loss_type.prop('selectedIndex', randomLossType);
$loss_type.change();

window.setTimeout(causeLoss, 1000);

//cause of loss
function causeLoss()
{
	var $causeOLoss=$('select[name=cause_of_loss]');
	if($causeOLoss.length)
	{
		var maxCOL = ($causeOLoss.children('option').length) - 1;
		var randCOL;
		if(maxCOL == 0)
			randCOL = 0;
		else
			randCOL = Math.floor(Math.random()*(maxCOL) + 1);
		$causeOLoss.prop('selectedIndex', randCOL);
		$causeOLoss.change();
	}
}


//job type
var $job_type=$('select[name=job_type]');
var maxJobType = ($job_type.children('option').length) - 1;
var randomJobType;
if(maxJobType == 0)
	randomJobType = 0;
else
	randomJobType = Math.floor(Math.random()*(maxJobType) + 1);
$job_type.prop('selectedIndex', randomJobType);
$job_type.change();

//job size
var $job_size=$('select[name=job_size]');
var max_jobSize = ($job_size.children('option').length) - 1;
var randomJobSize = Math.floor(Math.random()*(max_jobSize) + 1);
$job_size.prop('selectedIndex', randomJobSize);
$job_size.change();

//cat code
var $cat_code=$('[name=cat_code]');
$cat_code.val('CAT'+y);
$cat_code.blur();

//business unit
var $business_unit=$('[name=business_unit]');
var maxBusUnit = ($business_unit.children('option').length) - 1;
var randomBusUnit = Math.floor(Math.random()*(maxBusUnit) + 1);
if(maxBusUnit > 0)
{
	$business_unit.prop('selectedIndex', randomBusUnit);
	$business_unit.change();
}


//loss date
var yesterday=new Date();
yesterday.setDate(yesterday.getDate()-1);
var $loss_date=$('#loss_date_visible');
$loss_date.datepicker().datepicker('setDate',yesterday);
$('#ui-datepicker-div').hide();
$('[name=instructions]').val('');

//policy type
var text = $('select[name=policy_type] option:eq(0)').text();
var $policy_type=$('select[name=policy_type]');
var maxPolicyType = ($policy_type.children('option').length) - 1;
var randomPolicyType = 0;
//need to perform this check because depending on the dataset, some policy type dropdowns have an empty string as first element and others dont.
if(text == "")
{
	randomPolicyType = Math.floor(Math.random()*(maxPolicyType) + 1);
}
else
{
	randomPolicyType = Math.round(Math.random()*maxPolicyType);
}
$policy_type.prop('selectedIndex', randomPolicyType);
$policy_type.change();

//property type
var $property_type=$('select[name=property_type]');
var maxPropType = ($property_type.children('option').length) - 1;
var randomPropType = Math.floor(Math.random()*(maxPropType) + 1);
$property_type.prop('selectedIndex', randomPropType);
$property_type.change();

//coverage name
var $coverage_name=$('[name=coverage_name_i_1]');
$coverage_name.val('Example Coverage Name');
var $coverage_type=$('select[name=coverage_type_1]');
$('option:eq(1)',$coverage_type).attr('selected',true);
$coverage_type.change();

//the rest
$('[name=policy_limit_1]').val('15'+z);
$('[name=deductible_1]').val('3'+y);
var $apply_to_1=$('select[name=apply_to_1]');
$('option:eq(2)',$apply_to_1).attr('selected',true);
$apply_to_1.change();
$('[name=coinsurance_1]').val('25');
$('[name=reserv_amount_1]').val(y);
$('[name=mortgage_holder_1]').val('Mortgage Holder Name');
$('[name=loan_number_1]').val(x+'-'+z+y);
window.location=$('#mortgage_add').attr("href");
})();
