const jobTitles = [
    {
        "id": 1,
        "name": "3D Artist"
    },
    {
        "id": 1341,
        "name": "Academic Advisor"
    },
    {
        "id": 298,
        "name": "Access Field Technician"
    },
    {
        "id": 299,
        "name": "Accommodation Manager"
    },
    {
        "id": 4,
        "name": "Accountant"
    },
    {
        "id": 1342,
        "name": "Account Coordinator"
    },
    {
        "id": 2,
        "name": "Account Executive"
    },
    {
        "id": 1343,
        "name": "Accounting"
    },
    {
        "id": 302,
        "name": "Accounting Assistant"
    },
    {
        "id": 1344,
        "name": "Accounting Manager"
    },
    {
        "id": 1345,
        "name": "Accounting Supervisor"
    },
    {
        "id": 3,
        "name": "Account Manager"
    },
    {
        "id": 1346,
        "name": "Account Representative"
    },
    {
        "id": 303,
        "name": "Accounts Assistant"
    },
    {
        "id": 304,
        "name": "Accounts Executive"
    },
    {
        "id": 305,
        "name": "Accounts Manager"
    },
    {
        "id": 306,
        "name": "Accounts Payable"
    },
    {
        "id": 1347,
        "name": "Accounts Payable Assistant"
    },
    {
        "id": 307,
        "name": "Account Specialist"
    },
    {
        "id": 1348,
        "name": "Accounts Receivable"
    },
    {
        "id": 1349,
        "name": "Account Strategist"
    },
    {
        "id": 1350,
        "name": "Account Supervisor"
    },
    {
        "id": 1352,
        "name": "Actuarial"
    },
    {
        "id": 310,
        "name": "Actuarial Analyst"
    },
    {
        "id": 311,
        "name": "Actuarial Consultant"
    },
    {
        "id": 1353,
        "name": "Actuarial Trainnee"
    },
    {
        "id": 1354,
        "name": "Actuary"
    },
    {
        "id": 313,
        "name": "Addiction Support Worker"
    },
    {
        "id": 1355,
        "name": "Admin"
    },
    {
        "id": 1356,
        "name": "Admin Assistant"
    },
    {
        "id": 314,
        "name": "Administration"
    },
    {
        "id": 1357,
        "name": "Administration Support"
    },
    {
        "id": 6,
        "name": "Administrative Assistant"
    },
    {
        "id": 1358,
        "name": "Administrative Coordinator"
    },
    {
        "id": 1359,
        "name": "Administrative Manager"
    },
    {
        "id": 1360,
        "name": "Administrative Officer"
    },
    {
        "id": 315,
        "name": "Administrator"
    },
    {
        "id": 1361,
        "name": "Admissions Counselor"
    },
    {
        "id": 316,
        "name": "Ad Ops Executive"
    },
    {
        "id": 317,
        "name": "Advanced Consultant"
    },
    {
        "id": 318,
        "name": "Advanced Design Engineer"
    },
    {
        "id": 319,
        "name": "Advisor"
    },
    {
        "id": 320,
        "name": "Aerospace Engineer"
    },
    {
        "id": 321,
        "name": "Agent"
    },
    {
        "id": 322,
        "name": "Agile Transformation Manager"
    },
    {
        "id": 323,
        "name": "Aircraft Mechanic"
    },
    {
        "id": 325,
        "name": "Airline Pilot"
    },
    {
        "id": 326,
        "name": "Air Traffic Controller"
    },
    {
        "id": 327,
        "name": "Air Traffic Services Assistant"
    },
    {
        "id": 328,
        "name": "Algorithm Engineer"
    },
    {
        "id": 330,
        "name": "Ambassador"
    },
    {
        "id": 1362,
        "name": "AML Analyst"
    },
    {
        "id": 332,
        "name": "Analyst"
    },
    {
        "id": 333,
        "name": "Analyst Consultant"
    },
    {
        "id": 1363,
        "name": "Analyst Programmer"
    },
    {
        "id": 334,
        "name": "Analytics Consultant"
    },
    {
        "id": 335,
        "name": "Analytics Manager"
    },
    {
        "id": 1364,
        "name": "Android Developer"
    },
    {
        "id": 205,
        "name": "Android Engineer"
    },
    {
        "id": 336,
        "name": "Animator"
    },
    {
        "id": 1365,
        "name": "Applications Development Programmer Analyst"
    },
    {
        "id": 339,
        "name": "Applications Engineer"
    },
    {
        "id": 1366,
        "name": "Applications Support Analyst"
    },
    {
        "id": 1367,
        "name": "Applications Support Engineer"
    },
    {
        "id": 1368,
        "name": "Applications Support Specialist"
    },
    {
        "id": 340,
        "name": "Appointment Setter"
    },
    {
        "id": 342,
        "name": "Approved Electrician"
    },
    {
        "id": 343,
        "name": "Architect"
    },
    {
        "id": 344,
        "name": "Architectural Assistant"
    },
    {
        "id": 1369,
        "name": "Architectural Designer"
    },
    {
        "id": 1370,
        "name": "Architecture Consultant"
    },
    {
        "id": 346,
        "name": "Area Manager"
    },
    {
        "id": 347,
        "name": "Area Sales Manager"
    },
    {
        "id": 348,
        "name": "Area Supervisor"
    },
    {
        "id": 349,
        "name": "Artworker"
    },
    {
        "id": 1372,
        "name": "Asbestos Analyst P401"
    },
    {
        "id": 352,
        "name": "Assembly Line Operative"
    },
    {
        "id": 353,
        "name": "Assessor"
    },
    {
        "id": 354,
        "name": "Asset Investment Manager"
    },
    {
        "id": 1373,
        "name": "Asset Manager"
    },
    {
        "id": 355,
        "name": "Assistant"
    },
    {
        "id": 1374,
        "name": "Assistant Account Executive"
    },
    {
        "id": 356,
        "name": "Assistant Branch Manager"
    },
    {
        "id": 1375,
        "name": "Assistant Brand Manager"
    },
    {
        "id": 357,
        "name": "Assistant Buyer"
    },
    {
        "id": 2068,
        "name": "Assistant Case Manager"
    },
    {
        "id": 358,
        "name": "Assistant Category Manager"
    },
    {
        "id": 359,
        "name": "Assistant Civil Engineer"
    },
    {
        "id": 360,
        "name": "Assistant Consultant"
    },
    {
        "id": 1376,
        "name": "Assistant Controller"
    },
    {
        "id": 361,
        "name": "Assistant Cost Consultant"
    },
    {
        "id": 1377,
        "name": "Assistant Cost Manager"
    },
    {
        "id": 362,
        "name": "Assistant Design Engineer"
    },
    {
        "id": 1378,
        "name": "Assistant Designer"
    },
    {
        "id": 1379,
        "name": "Assistant Design Manager"
    },
    {
        "id": 364,
        "name": "Assistant Engineer"
    },
    {
        "id": 1380,
        "name": "Assistant Front Office Manager"
    },
    {
        "id": 366,
        "name": "Assistant General Manager"
    },
    {
        "id": 367,
        "name": "Assistant Geotechnical Engineer"
    },
    {
        "id": 1381,
        "name": "Assistant Manager"
    },
    {
        "id": 368,
        "name": "Assistant Manager Accountant"
    },
    {
        "id": 1382,
        "name": "Assistant Marketing Manager"
    },
    {
        "id": 369,
        "name": "Assistant Market Manager"
    },
    {
        "id": 1383,
        "name": "Assistant Media Planner"
    },
    {
        "id": 370,
        "name": "Assistant Planner"
    },
    {
        "id": 1384,
        "name": "Assistant Professor"
    },
    {
        "id": 1385,
        "name": "Assistant Project Manager"
    },
    {
        "id": 1386,
        "name": "Assistant Property Manager"
    },
    {
        "id": 372,
        "name": "Assistant Scientist"
    },
    {
        "id": 1387,
        "name": "Assistant Store Manager"
    },
    {
        "id": 1388,
        "name": "Assistant  Vice President"
    },
    {
        "id": 375,
        "name": "Associate"
    },
    {
        "id": 1389,
        "name": "Assurance Associate"
    },
    {
        "id": 1390,
        "name": "Assurance Staff"
    },
    {
        "id": 392,
        "name": "Attorney"
    },
    {
        "id": 1391,
        "name": "Auction Clerk"
    },
    {
        "id": 1392,
        "name": "Audiologist"
    },
    {
        "id": 393,
        "name": "Audit Assistant"
    },
    {
        "id": 1393,
        "name": "Audit Assistant Manager"
    },
    {
        "id": 394,
        "name": "Audit Associate"
    },
    {
        "id": 395,
        "name": "Audit Manager"
    },
    {
        "id": 1394,
        "name": "Auditor"
    },
    {
        "id": 1395,
        "name": "Audit Staff"
    },
    {
        "id": 399,
        "name": "Automation Engineer"
    },
    {
        "id": 400,
        "name": "Azure Cloud Architect"
    },
    {
        "id": 9,
        "name": "Back-end Developer"
    },
    {
        "id": 401,
        "name": "Back-end Engineer"
    },
    {
        "id": 1396,
        "name": "Banker"
    },
    {
        "id": 403,
        "name": "Bank Teller"
    },
    {
        "id": 11,
        "name": "Barista"
    },
    {
        "id": 404,
        "name": "Bartender"
    },
    {
        "id": 405,
        "name": "Beauty Consultant"
    },
    {
        "id": 1397,
        "name": "BI Consultant"
    },
    {
        "id": 407,
        "name": "Bicycle Courier"
    },
    {
        "id": 408,
        "name": "Bid Manager"
    },
    {
        "id": 409,
        "name": "Big Data Architect"
    },
    {
        "id": 410,
        "name": "Big Data Engineer"
    },
    {
        "id": 1398,
        "name": "Billing Executive"
    },
    {
        "id": 411,
        "name": "Biomedical Scientist"
    },
    {
        "id": 1399,
        "name": "Biostatistician"
    },
    {
        "id": 412,
        "name": "Biotechnologist"
    },
    {
        "id": 1400,
        "name": "Bookkeeper"
    },
    {
        "id": 1401,
        "name": "BPM Consultant"
    },
    {
        "id": 414,
        "name": "Branch Manager"
    },
    {
        "id": 415,
        "name": "Branch Rental Manager"
    },
    {
        "id": 12,
        "name": "Brand Ambassador"
    },
    {
        "id": 416,
        "name": "Brand Analyst"
    },
    {
        "id": 417,
        "name": "Brand Associate"
    },
    {
        "id": 418,
        "name": "Brand Enforcement Analyst"
    },
    {
        "id": 13,
        "name": "Brand Manager"
    },
    {
        "id": 1402,
        "name": "Brand Manager Assistant"
    },
    {
        "id": 2069,
        "name": "Brand Marketing Manager"
    },
    {
        "id": 419,
        "name": "Brand Protection Analyst"
    },
    {
        "id": 1403,
        "name": "Brand Strategist"
    },
    {
        "id": 420,
        "name": "Broadcast Journalist"
    },
    {
        "id": 421,
        "name": "Broker"
    },
    {
        "id": 1404,
        "name": "Budget Analyst"
    },
    {
        "id": 422,
        "name": "Bus Driver"
    },
    {
        "id": 1405,
        "name": "Business"
    },
    {
        "id": 423,
        "name": "Business Administrator"
    },
    {
        "id": 15,
        "name": "Business Analyst"
    },
    {
        "id": 425,
        "name": "Business Centre Executive"
    },
    {
        "id": 426,
        "name": "Business Consultant"
    },
    {
        "id": 1406,
        "name": "Business Control Manager"
    },
    {
        "id": 428,
        "name": "Business Data Analyst"
    },
    {
        "id": 166,
        "name": "Business Developer"
    },
    {
        "id": 1407,
        "name": "Business Development"
    },
    {
        "id": 1408,
        "name": "Business Development Analyst"
    },
    {
        "id": 1409,
        "name": "Business Development Assistant"
    },
    {
        "id": 1410,
        "name": "Business Development Associate"
    },
    {
        "id": 1411,
        "name": "Business Development Executive"
    },
    {
        "id": 1412,
        "name": "Business Development Manager"
    },
    {
        "id": 1413,
        "name": "Business Development Representative"
    },
    {
        "id": 1414,
        "name": "Business Development Specialist"
    },
    {
        "id": 1415,
        "name": "Business Intelligence Analyst"
    },
    {
        "id": 1416,
        "name": "Business Intelligence Developer"
    },
    {
        "id": 1417,
        "name": "Business Intelligence Engineer"
    },
    {
        "id": 16,
        "name": "Business Manager"
    },
    {
        "id": 434,
        "name": "Business Manager Manager"
    },
    {
        "id": 435,
        "name": "Business Operations"
    },
    {
        "id": 1418,
        "name": "Business Operations Analyst"
    },
    {
        "id": 1419,
        "name": "Business Operations Manager"
    },
    {
        "id": 436,
        "name": "Business Program Manager"
    },
    {
        "id": 1420,
        "name": "Business Support Analyst"
    },
    {
        "id": 1421,
        "name": "Business Support Executive"
    },
    {
        "id": 1422,
        "name": "Business Support Manager"
    },
    {
        "id": 438,
        "name": "Business Systems Analyst"
    },
    {
        "id": 439,
        "name": "Business Travel Consultant"
    },
    {
        "id": 441,
        "name": "Buyer"
    },
    {
        "id": 442,
        "name": "Cabin Crew"
    },
    {
        "id": 443,
        "name": "Cabin Crew Crewlink Contract"
    },
    {
        "id": 1424,
        "name": "CAD Engineer"
    },
    {
        "id": 1425,
        "name": "CAE Engineer"
    },
    {
        "id": 446,
        "name": "Call Centre"
    },
    {
        "id": 1429,
        "name": "Campaign Manager"
    },
    {
        "id": 1430,
        "name": "Campus Recruiter"
    },
    {
        "id": 448,
        "name": "Candidate"
    },
    {
        "id": 19,
        "name": "Care Assistant"
    },
    {
        "id": 1431,
        "name": "Care Coordinator"
    },
    {
        "id": 1432,
        "name": "Care Manager"
    },
    {
        "id": 449,
        "name": "Cargo Agent"
    },
    {
        "id": 450,
        "name": "Carrier Product Specialist"
    },
    {
        "id": 1434,
        "name": "Case Manager"
    },
    {
        "id": 451,
        "name": "Cashier"
    },
    {
        "id": 452,
        "name": "Cassandra Consultant"
    },
    {
        "id": 454,
        "name": "Category Executive"
    },
    {
        "id": 455,
        "name": "Category Manager"
    },
    {
        "id": 1436,
        "name": "Category Manager FMCG"
    },
    {
        "id": 456,
        "name": "Category Specialist"
    },
    {
        "id": 457,
        "name": "Caterer"
    },
    {
        "id": 200,
        "name": "CEO"
    },
    {
        "id": 458,
        "name": "Certified Nursing Assistant"
    },
    {
        "id": 1437,
        "name": "CGI Artist"
    },
    {
        "id": 460,
        "name": "Channel Account Manager"
    },
    {
        "id": 461,
        "name": "Channel Manager"
    },
    {
        "id": 1438,
        "name": "Chemical Engineer"
    },
    {
        "id": 1439,
        "name": "Chemist"
    },
    {
        "id": 1440,
        "name": "Chief Executive Officer"
    },
    {
        "id": 1441,
        "name": "Chief of Staff"
    },
    {
        "id": 168,
        "name": "Civil Engineer"
    },
    {
        "id": 463,
        "name": "Claim Professional"
    },
    {
        "id": 464,
        "name": "Claims Adjuster"
    },
    {
        "id": 465,
        "name": "Claims Handler"
    },
    {
        "id": 1442,
        "name": "Claims Specialist"
    },
    {
        "id": 21,
        "name": "Cleaner"
    },
    {
        "id": 466,
        "name": "Clerk"
    },
    {
        "id": 1444,
        "name": "Client Account Manager"
    },
    {
        "id": 468,
        "name": "Client Advisor"
    },
    {
        "id": 1445,
        "name": "Client Associate"
    },
    {
        "id": 1446,
        "name": "Client Delivery Consultant"
    },
    {
        "id": 471,
        "name": "Client Engagement Manager"
    },
    {
        "id": 472,
        "name": "Client Executive"
    },
    {
        "id": 1447,
        "name": "Client Manager"
    },
    {
        "id": 474,
        "name": "Client Partner"
    },
    {
        "id": 1449,
        "name": "Client Service Associate"
    },
    {
        "id": 1450,
        "name": "Client Service Representative"
    },
    {
        "id": 1451,
        "name": "Client Services"
    },
    {
        "id": 1452,
        "name": "Client Services Administrator"
    },
    {
        "id": 1453,
        "name": "Client Services Assistant Accountant"
    },
    {
        "id": 1454,
        "name": "Client Services Manager"
    },
    {
        "id": 1455,
        "name": "Client Service Specialist"
    },
    {
        "id": 1456,
        "name": "Client Solutions Manager"
    },
    {
        "id": 477,
        "name": "Client Strategist"
    },
    {
        "id": 478,
        "name": "Client Success"
    },
    {
        "id": 1457,
        "name": "Client Success Manager"
    },
    {
        "id": 1458,
        "name": "Client Success Specialist"
    },
    {
        "id": 2070,
        "name": "Client Support Associate"
    },
    {
        "id": 1459,
        "name": "Client Support Coordinator"
    },
    {
        "id": 2071,
        "name": "Clinical Data Manager"
    },
    {
        "id": 1460,
        "name": "Clinical Pharmacist"
    },
    {
        "id": 480,
        "name": "Clinical Research Associate"
    },
    {
        "id": 1461,
        "name": "Clinical Research Coordinator"
    },
    {
        "id": 1462,
        "name": "Clinical Social Worker"
    },
    {
        "id": 1463,
        "name": "Clinical Specialist"
    },
    {
        "id": 481,
        "name": "Clinical Support Specialist"
    },
    {
        "id": 482,
        "name": "Clinical Trial Assistant"
    },
    {
        "id": 1465,
        "name": "Clinical Trial Coordinator"
    },
    {
        "id": 483,
        "name": "Cloud Architect"
    },
    {
        "id": 484,
        "name": "Cloud Solution Architect"
    },
    {
        "id": 1466,
        "name": "CNC Machinist"
    },
    {
        "id": 1467,
        "name": "Coach"
    },
    {
        "id": 486,
        "name": "Coffee Specialist"
    },
    {
        "id": 487,
        "name": "Collections"
    },
    {
        "id": 1468,
        "name": "College Captain"
    },
    {
        "id": 1469,
        "name": "Commercial"
    },
    {
        "id": 488,
        "name": "Commercial Analyst"
    },
    {
        "id": 490,
        "name": "Commercial Finance Analyst"
    },
    {
        "id": 492,
        "name": "Commercial Manager"
    },
    {
        "id": 493,
        "name": "Commissioning Editor"
    },
    {
        "id": 1470,
        "name": "Commissioning Editorial Assistant"
    },
    {
        "id": 1471,
        "name": "Communications"
    },
    {
        "id": 1472,
        "name": "Communications Assistant"
    },
    {
        "id": 1473,
        "name": "Communications Associate"
    },
    {
        "id": 1474,
        "name": "Communications Coordinator"
    },
    {
        "id": 1475,
        "name": "Communications Manager"
    },
    {
        "id": 1476,
        "name": "Communications Officer"
    },
    {
        "id": 1477,
        "name": "Communications Specialist"
    },
    {
        "id": 495,
        "name": "Community Banker"
    },
    {
        "id": 1478,
        "name": "Community Engagement Manager"
    },
    {
        "id": 499,
        "name": "Community Manager"
    },
    {
        "id": 500,
        "name": "Company Accountant"
    },
    {
        "id": 1479,
        "name": "Compensation Analyst"
    },
    {
        "id": 501,
        "name": "Compliance Analyst"
    },
    {
        "id": 1480,
        "name": "Compliance Associate"
    },
    {
        "id": 502,
        "name": "Compliance Executive"
    },
    {
        "id": 1481,
        "name": "Compliance Manager"
    },
    {
        "id": 1482,
        "name": "Compliance Officer"
    },
    {
        "id": 503,
        "name": "Computer Engineer"
    },
    {
        "id": 504,
        "name": "Conference Producer"
    },
    {
        "id": 1483,
        "name": "Construction Laborer"
    },
    {
        "id": 1484,
        "name": "Construction Project Manager"
    },
    {
        "id": 23,
        "name": "Consultant"
    },
    {
        "id": 506,
        "name": "Consultant Engineer"
    },
    {
        "id": 1485,
        "name": "Consulting"
    },
    {
        "id": 1486,
        "name": "Consulting Analyst"
    },
    {
        "id": 507,
        "name": "Consulting Systems Engineer"
    },
    {
        "id": 265,
        "name": "Content Contributor"
    },
    {
        "id": 508,
        "name": "Content Creator"
    },
    {
        "id": 509,
        "name": "Content Development Manager"
    },
    {
        "id": 2072,
        "name": "Content Editor"
    },
    {
        "id": 511,
        "name": "Content Manager"
    },
    {
        "id": 169,
        "name": "Content Marketing"
    },
    {
        "id": 1488,
        "name": "Content Marketing Manager"
    },
    {
        "id": 1489,
        "name": "Content Moderator"
    },
    {
        "id": 513,
        "name": "Content Producer"
    },
    {
        "id": 514,
        "name": "Content Program Manager"
    },
    {
        "id": 1490,
        "name": "Content Specialist"
    },
    {
        "id": 1491,
        "name": "Content Strategist"
    },
    {
        "id": 515,
        "name": "Content Translator"
    },
    {
        "id": 170,
        "name": "Content Writer"
    },
    {
        "id": 516,
        "name": "Contract Assistant Accountant"
    },
    {
        "id": 517,
        "name": "Contract Engineer"
    },
    {
        "id": 1492,
        "name": "Contract IT"
    },
    {
        "id": 1493,
        "name": "Contract Manager"
    },
    {
        "id": 519,
        "name": "Contractor"
    },
    {
        "id": 520,
        "name": "Contractor Care"
    },
    {
        "id": 521,
        "name": "Contracts Manager"
    },
    {
        "id": 1494,
        "name": "Contract Specialist"
    },
    {
        "id": 522,
        "name": "Contract Support Officer"
    },
    {
        "id": 1495,
        "name": "Controller"
    },
    {
        "id": 523,
        "name": "Controls Engineer"
    },
    {
        "id": 524,
        "name": "Coordinator"
    },
    {
        "id": 525,
        "name": "Copywriter"
    },
    {
        "id": 526,
        "name": "Corporate Account Manager"
    },
    {
        "id": 527,
        "name": "Corporate Assistant"
    },
    {
        "id": 1496,
        "name": "Corporate Recruiter"
    },
    {
        "id": 1497,
        "name": "Corporate Trainer"
    },
    {
        "id": 529,
        "name": "Cost Consultant"
    },
    {
        "id": 530,
        "name": "Cost Manager"
    },
    {
        "id": 1498,
        "name": "Counselor"
    },
    {
        "id": 531,
        "name": "Country Manager"
    },
    {
        "id": 1500,
        "name": "Co-worker"
    },
    {
        "id": 532,
        "name": "Creative Producer"
    },
    {
        "id": 26,
        "name": "Creative Solutions Specialist"
    },
    {
        "id": 2073,
        "name": "Creative Strategist"
    },
    {
        "id": 534,
        "name": "Credit Analyst"
    },
    {
        "id": 1501,
        "name": "Credit Controller"
    },
    {
        "id": 536,
        "name": "Credit Risk Analyst"
    },
    {
        "id": 1502,
        "name": "Crew Member"
    },
    {
        "id": 1503,
        "name": "CRM Campaign Manager"
    },
    {
        "id": 1504,
        "name": "CRM Manager"
    },
    {
        "id": 539,
        "name": "Croupier"
    },
    {
        "id": 1505,
        "name": "C++ Software Engineer"
    },
    {
        "id": 541,
        "name": "Currency Expert"
    },
    {
        "id": 542,
        "name": "Customer Advisor"
    },
    {
        "id": 27,
        "name": "Customer Assistant"
    },
    {
        "id": 543,
        "name": "Customer Business Analyst"
    },
    {
        "id": 544,
        "name": "Customer Care"
    },
    {
        "id": 1506,
        "name": "Customer Care Agent"
    },
    {
        "id": 1507,
        "name": "Customer Care Coordinator"
    },
    {
        "id": 1508,
        "name": "Customer Care Executive"
    },
    {
        "id": 1509,
        "name": "Customer Care Manager"
    },
    {
        "id": 1510,
        "name": "Customer Care Professional"
    },
    {
        "id": 1511,
        "name": "Customer Delight Specialist"
    },
    {
        "id": 1512,
        "name": "Customer Development Manager"
    },
    {
        "id": 546,
        "name": "Customer Engineer"
    },
    {
        "id": 1513,
        "name": "Customer Experience Manager"
    },
    {
        "id": 547,
        "name": "Customer Operations"
    },
    {
        "id": 548,
        "name": "Customer Project Manager"
    },
    {
        "id": 550,
        "name": "Customer Satisfaction Manager"
    },
    {
        "id": 551,
        "name": "Customer Service"
    },
    {
        "id": 1515,
        "name": "Customer Service Administrator"
    },
    {
        "id": 1516,
        "name": "Customer Service Advisor"
    },
    {
        "id": 1517,
        "name": "Customer Service Agent"
    },
    {
        "id": 1518,
        "name": "Customer Service Assistant"
    },
    {
        "id": 1519,
        "name": "Customer Service Associate"
    },
    {
        "id": 1520,
        "name": "Customer Service Consultant"
    },
    {
        "id": 1521,
        "name": "Customer Service Executive"
    },
    {
        "id": 1522,
        "name": "Customer Service Manager"
    },
    {
        "id": 1523,
        "name": "Customer Service Officer"
    },
    {
        "id": 28,
        "name": "Customer Service Representative"
    },
    {
        "id": 1524,
        "name": "Customer Services Engineer"
    },
    {
        "id": 552,
        "name": "Customer Solutions Analyst"
    },
    {
        "id": 1526,
        "name": "Customer Solutions Architect"
    },
    {
        "id": 171,
        "name": "Customer Success"
    },
    {
        "id": 1527,
        "name": "Customer Success Architect"
    },
    {
        "id": 1528,
        "name": "Customer Success Associate"
    },
    {
        "id": 29,
        "name": "Customer Success Manager"
    },
    {
        "id": 1529,
        "name": "Customer Success Representative"
    },
    {
        "id": 1530,
        "name": "Customer Success Specialist"
    },
    {
        "id": 30,
        "name": "Customer Support"
    },
    {
        "id": 1531,
        "name": "Customer Support Agent"
    },
    {
        "id": 1532,
        "name": "Customer Support Associate"
    },
    {
        "id": 1533,
        "name": "Customer Support Coordinator"
    },
    {
        "id": 1534,
        "name": "Customer Support Engineer"
    },
    {
        "id": 268,
        "name": "Customer Support Executive"
    },
    {
        "id": 1535,
        "name": "Customer Support Specialist"
    },
    {
        "id": 1536,
        "name": "Customer Support Team"
    },
    {
        "id": 554,
        "name": "Customer Value Manager"
    },
    {
        "id": 1537,
        "name": "Cybersecurity Engineer"
    },
    {
        "id": 32,
        "name": "Data Analyst"
    },
    {
        "id": 1538,
        "name": "Database Administrator"
    },
    {
        "id": 1539,
        "name": "Database Administrator Oracle"
    },
    {
        "id": 33,
        "name": "Data Engineer"
    },
    {
        "id": 34,
        "name": "Data Entry"
    },
    {
        "id": 556,
        "name": "Data Entry Clerk"
    },
    {
        "id": 557,
        "name": "Data Manager"
    },
    {
        "id": 558,
        "name": "Data Manager Analyst"
    },
    {
        "id": 560,
        "name": "Data Processor"
    },
    {
        "id": 35,
        "name": "Data Scientist"
    },
    {
        "id": 1541,
        "name": "Data Specialist"
    },
    {
        "id": 562,
        "name": "Data Strategist"
    },
    {
        "id": 1542,
        "name": "Dedicated Staff"
    },
    {
        "id": 563,
        "name": "Delivery Consultant"
    },
    {
        "id": 36,
        "name": "Delivery Driver"
    },
    {
        "id": 564,
        "name": "Delivery Executive"
    },
    {
        "id": 565,
        "name": "Delivery Manager"
    },
    {
        "id": 566,
        "name": "Demand Planner"
    },
    {
        "id": 1543,
        "name": "Dental Assistant"
    },
    {
        "id": 1544,
        "name": "Dental Hygienist"
    },
    {
        "id": 37,
        "name": "Dental Nurse"
    },
    {
        "id": 38,
        "name": "Dentist"
    },
    {
        "id": 1545,
        "name": "Department Manager"
    },
    {
        "id": 567,
        "name": "Deployment Strategist"
    },
    {
        "id": 568,
        "name": "Deputy Editor"
    },
    {
        "id": 569,
        "name": "Deputy General Manager"
    },
    {
        "id": 570,
        "name": "Deputy Manager"
    },
    {
        "id": 572,
        "name": "Design"
    },
    {
        "id": 573,
        "name": "Design Engineer"
    },
    {
        "id": 39,
        "name": "Designer"
    },
    {
        "id": 2074,
        "name": "Design Manager"
    },
    {
        "id": 574,
        "name": "Design Services"
    },
    {
        "id": 1546,
        "name": "Developer"
    },
    {
        "id": 2075,
        "name": "Developer Advocate"
    },
    {
        "id": 576,
        "name": "Developer Relations Engineer"
    },
    {
        "id": 1547,
        "name": "Development Associate"
    },
    {
        "id": 1548,
        "name": "Development Coordinator"
    },
    {
        "id": 1549,
        "name": "Development Engineer"
    },
    {
        "id": 578,
        "name": "Development Manager"
    },
    {
        "id": 1550,
        "name": "Devops Engineer"
    },
    {
        "id": 1551,
        "name": "Dietitian"
    },
    {
        "id": 1552,
        "name": "Digital Designer"
    },
    {
        "id": 1553,
        "name": "Digital Library Assistant"
    },
    {
        "id": 41,
        "name": "Digital Marketing"
    },
    {
        "id": 1554,
        "name": "Digital Marketing Assistant"
    },
    {
        "id": 1555,
        "name": "Digital Marketing Associate"
    },
    {
        "id": 1556,
        "name": "Digital Marketing Coordinator"
    },
    {
        "id": 1557,
        "name": "Digital Marketing Executive"
    },
    {
        "id": 173,
        "name": "Digital Marketing Manager"
    },
    {
        "id": 1558,
        "name": "Digital Marketing Specialist"
    },
    {
        "id": 1559,
        "name": "Digital Marketing Strategist"
    },
    {
        "id": 582,
        "name": "Digital Media Engineer"
    },
    {
        "id": 1560,
        "name": "Digital Producer"
    },
    {
        "id": 583,
        "name": "Digital Project Manager"
    },
    {
        "id": 1561,
        "name": "Digital Strategist"
    },
    {
        "id": 1562,
        "name": "Director Account Manager"
    },
    {
        "id": 1563,
        "name": "Director Customer Marketing"
    },
    {
        "id": 1564,
        "name": "Director of Communications"
    },
    {
        "id": 1565,
        "name": "Director of Development"
    },
    {
        "id": 1566,
        "name": "Director of Engineering"
    },
    {
        "id": 1567,
        "name": "Director of Finance"
    },
    {
        "id": 1568,
        "name": "Director of Marketing"
    },
    {
        "id": 1569,
        "name": "Director of Operations"
    },
    {
        "id": 1570,
        "name": "Director of Product"
    },
    {
        "id": 1571,
        "name": "Director of Product Manager"
    },
    {
        "id": 1572,
        "name": "Director of Sales"
    },
    {
        "id": 1573,
        "name": "Director Service Operations"
    },
    {
        "id": 1574,
        "name": "Director Structured Credit Trading"
    },
    {
        "id": 1575,
        "name": "Director Technology"
    },
    {
        "id": 591,
        "name": "Directory Manager"
    },
    {
        "id": 592,
        "name": "Disability Advisor"
    },
    {
        "id": 593,
        "name": "Dispatcher"
    },
    {
        "id": 1576,
        "name": "Distribution Assistant"
    },
    {
        "id": 595,
        "name": "District Manager"
    },
    {
        "id": 1577,
        "name": "District Manager In Training"
    },
    {
        "id": 596,
        "name": "District Sales Manager"
    },
    {
        "id": 597,
        "name": "Divisional Human Resources Manager"
    },
    {
        "id": 598,
        "name": "Division Manager"
    },
    {
        "id": 599,
        "name": "Doctor"
    },
    {
        "id": 600,
        "name": "Dphil Student"
    },
    {
        "id": 42,
        "name": "Driver"
    },
    {
        "id": 2076,
        "name": "Drug and Alcohol Counselor"
    },
    {
        "id": 1578,
        "name": "DSP Engineer"
    },
    {
        "id": 602,
        "name": "Duty Manager"
    },
    {
        "id": 1579,
        "name": "Ecommerce Administrator"
    },
    {
        "id": 1580,
        "name": "Ecommerce Manager"
    },
    {
        "id": 603,
        "name": "Ecommerce Marketplace Specialist"
    },
    {
        "id": 604,
        "name": "Economist"
    },
    {
        "id": 199,
        "name": "Editor"
    },
    {
        "id": 605,
        "name": "Editorial Assistant"
    },
    {
        "id": 1581,
        "name": "EDS Engineer"
    },
    {
        "id": 1582,
        "name": "EDS Launch Engineer"
    },
    {
        "id": 608,
        "name": "Educator"
    },
    {
        "id": 174,
        "name": "Electrical Engineer"
    },
    {
        "id": 1583,
        "name": "Electro-Mechanical Technician"
    },
    {
        "id": 1584,
        "name": "Elementary Teacher"
    },
    {
        "id": 1585,
        "name": "Email Marketing Manager"
    },
    {
        "id": 1586,
        "name": "Email Marketing Specialist"
    },
    {
        "id": 1587,
        "name": "Embedded Software Engineer"
    },
    {
        "id": 1588,
        "name": "EMEA Recruiter"
    },
    {
        "id": 613,
        "name": "Emergency Medical Technician"
    },
    {
        "id": 614,
        "name": "Employment Consultant"
    },
    {
        "id": 615,
        "name": "Energy Specialist"
    },
    {
        "id": 616,
        "name": "Enforcement Agent"
    },
    {
        "id": 617,
        "name": "Engagement Manager"
    },
    {
        "id": 45,
        "name": "Engineer"
    },
    {
        "id": 1589,
        "name": "Engineering Intern"
    },
    {
        "id": 620,
        "name": "Engineering Manager"
    },
    {
        "id": 1590,
        "name": "Engineering Placement"
    },
    {
        "id": 1591,
        "name": "Engineering Project Manager"
    },
    {
        "id": 622,
        "name": "Engineering Technician"
    },
    {
        "id": 623,
        "name": "Engineer Surveyor"
    },
    {
        "id": 624,
        "name": "Enhanced Content Tagger"
    },
    {
        "id": 626,
        "name": "Enterprise Account Executive"
    },
    {
        "id": 627,
        "name": "Enterprise Business Development"
    },
    {
        "id": 628,
        "name": "Enterprise Client Manager"
    },
    {
        "id": 629,
        "name": "Enterprise Sales"
    },
    {
        "id": 1592,
        "name": "Enterprise Sales Executive"
    },
    {
        "id": 1593,
        "name": "Environmental Consultant"
    },
    {
        "id": 1594,
        "name": "Environmental Engineer"
    },
    {
        "id": 1595,
        "name": "Environmental Scientist"
    },
    {
        "id": 1596,
        "name": "Environmental Specialist"
    },
    {
        "id": 1597,
        "name": "Epidemiologist"
    },
    {
        "id": 1598,
        "name": "Esthetician"
    },
    {
        "id": 631,
        "name": "Estimator"
    },
    {
        "id": 634,
        "name": "European Sales Representative"
    },
    {
        "id": 46,
        "name": "Event Coordinator"
    },
    {
        "id": 47,
        "name": "Event Manager"
    },
    {
        "id": 1599,
        "name": "Event Planner"
    },
    {
        "id": 1600,
        "name": "Events Manager"
    },
    {
        "id": 637,
        "name": "Executive"
    },
    {
        "id": 48,
        "name": "Executive Assistant"
    },
    {
        "id": 1601,
        "name": "Executive Assistant to CEO"
    },
    {
        "id": 640,
        "name": "Executive Engineer"
    },
    {
        "id": 641,
        "name": "Executive Officer"
    },
    {
        "id": 642,
        "name": "Experimental Officer"
    },
    {
        "id": 643,
        "name": "Facilities Engineer"
    },
    {
        "id": 644,
        "name": "Facilities Manager"
    },
    {
        "id": 1602,
        "name": "Family Admissions"
    },
    {
        "id": 647,
        "name": "Fashion Advisor"
    },
    {
        "id": 648,
        "name": "Field Engineer"
    },
    {
        "id": 649,
        "name": "Field Marketing Manager"
    },
    {
        "id": 650,
        "name": "Field Sales Executive"
    },
    {
        "id": 651,
        "name": "Field Sales Manager"
    },
    {
        "id": 652,
        "name": "Field Sales Representative"
    },
    {
        "id": 653,
        "name": "Field Service Engineer"
    },
    {
        "id": 1603,
        "name": "Field Service Manager"
    },
    {
        "id": 1604,
        "name": "Field Services Coordinator"
    },
    {
        "id": 1605,
        "name": "Field Service Technician"
    },
    {
        "id": 654,
        "name": "Field Test Engineer"
    },
    {
        "id": 656,
        "name": "Finance Administrator"
    },
    {
        "id": 657,
        "name": "Finance Analyst"
    },
    {
        "id": 658,
        "name": "Finance Assistant"
    },
    {
        "id": 1606,
        "name": "Finance Associate"
    },
    {
        "id": 1607,
        "name": "Finance Business Partner"
    },
    {
        "id": 49,
        "name": "Finance Manager"
    },
    {
        "id": 1608,
        "name": "Financial Advisor"
    },
    {
        "id": 50,
        "name": "Financial Analyst"
    },
    {
        "id": 662,
        "name": "Financial Data Analyst"
    },
    {
        "id": 1609,
        "name": "Financial Planner"
    },
    {
        "id": 1610,
        "name": "Financial Reporting Manager"
    },
    {
        "id": 1611,
        "name": "Financial Sales and Analytics"
    },
    {
        "id": 1612,
        "name": "Firefighter"
    },
    {
        "id": 665,
        "name": "First Line Manager"
    },
    {
        "id": 666,
        "name": "Fixed Income Sales Support"
    },
    {
        "id": 51,
        "name": "Flight Attendant"
    },
    {
        "id": 1613,
        "name": "FLT Operator"
    },
    {
        "id": 1614,
        "name": "Food and Beverage Assistant"
    },
    {
        "id": 1615,
        "name": "Food and Beverage Associate"
    },
    {
        "id": 1616,
        "name": "Food and Beverage Manager"
    },
    {
        "id": 669,
        "name": "Food Processing Technician"
    },
    {
        "id": 670,
        "name": "Forward Deployed Engineer"
    },
    {
        "id": 1617,
        "name": "Forward Deployed Software Engineer"
    },
    {
        "id": 1618,
        "name": "Fraud Analyst"
    },
    {
        "id": 672,
        "name": "Freelancer"
    },
    {
        "id": 673,
        "name": "Front Desk Agent"
    },
    {
        "id": 674,
        "name": "Front Desk Receptionist"
    },
    {
        "id": 52,
        "name": "Front-end Developer"
    },
    {
        "id": 675,
        "name": "Front-end Engineer"
    },
    {
        "id": 1619,
        "name": "Front-office IT"
    },
    {
        "id": 1620,
        "name": "Front of House"
    },
    {
        "id": 1621,
        "name": "Front of House Staff"
    },
    {
        "id": 677,
        "name": "Fulfillment Associate"
    },
    {
        "id": 2035,
        "name": "Full-stack Developer"
    },
    {
        "id": 53,
        "name": "Full-stack Engineer"
    },
    {
        "id": 679,
        "name": "Functional Assessor"
    },
    {
        "id": 680,
        "name": "Functional Consultant"
    },
    {
        "id": 681,
        "name": "Fund Accountant"
    },
    {
        "id": 682,
        "name": "General Assistant"
    },
    {
        "id": 1622,
        "name": "General Counsel"
    },
    {
        "id": 683,
        "name": "General Manager"
    },
    {
        "id": 1623,
        "name": "Geologist"
    },
    {
        "id": 684,
        "name": "Geophysicist"
    },
    {
        "id": 1624,
        "name": "Geotechnical Engineer"
    },
    {
        "id": 1625,
        "name": "GIS Specialist"
    },
    {
        "id": 1627,
        "name": "Global Account Manager"
    },
    {
        "id": 1628,
        "name": "Global PR Manager"
    },
    {
        "id": 1629,
        "name": "GM Sales Europe"
    },
    {
        "id": 54,
        "name": "Graduate"
    },
    {
        "id": 693,
        "name": "Graduate Analyst"
    },
    {
        "id": 694,
        "name": "Graduate Associate"
    },
    {
        "id": 695,
        "name": "Graduate Civil Engineer"
    },
    {
        "id": 696,
        "name": "Graduate Consultant"
    },
    {
        "id": 697,
        "name": "Graduate Control Systems Engineer"
    },
    {
        "id": 698,
        "name": "Graduate Energy Specialist"
    },
    {
        "id": 699,
        "name": "Graduate Engineer"
    },
    {
        "id": 1630,
        "name": "Graduate Manager"
    },
    {
        "id": 701,
        "name": "Graduate Mechanical Engineer"
    },
    {
        "id": 702,
        "name": "Graduate Operation Scheme"
    },
    {
        "id": 703,
        "name": "Graduate Process Engineer"
    },
    {
        "id": 1631,
        "name": "Graduate Project Manager"
    },
    {
        "id": 705,
        "name": "Graduate Recruitment Consultant"
    },
    {
        "id": 706,
        "name": "Graduate Scheme"
    },
    {
        "id": 1632,
        "name": "Graduate Software Developer"
    },
    {
        "id": 1633,
        "name": "Graduate Software Engineer"
    },
    {
        "id": 1634,
        "name": "Graduate Student"
    },
    {
        "id": 708,
        "name": "Graduate Surveyor"
    },
    {
        "id": 1635,
        "name": "Graphic Design"
    },
    {
        "id": 55,
        "name": "Graphic Designer"
    },
    {
        "id": 713,
        "name": "Group Marketing Manager"
    },
    {
        "id": 714,
        "name": "Growth"
    },
    {
        "id": 715,
        "name": "Growth Manager"
    },
    {
        "id": 1636,
        "name": "Growth Marketing Manager"
    },
    {
        "id": 1637,
        "name": "Growth Operations Freelancer"
    },
    {
        "id": 1638,
        "name": "Hairstylist"
    },
    {
        "id": 1639,
        "name": "Head of Engineering and Operations"
    },
    {
        "id": 1640,
        "name": "Head of Enterprise"
    },
    {
        "id": 1641,
        "name": "Head of Events"
    },
    {
        "id": 1642,
        "name": "Head Office Employee"
    },
    {
        "id": 1643,
        "name": "Head of HR"
    },
    {
        "id": 1644,
        "name": "Head of Internal Communications"
    },
    {
        "id": 1645,
        "name": "Head of Marketing"
    },
    {
        "id": 1646,
        "name": "Head of.NETwork Expansion"
    },
    {
        "id": 1647,
        "name": "Head of Operations"
    },
    {
        "id": 1648,
        "name": "Head of Pr"
    },
    {
        "id": 1649,
        "name": "Head of Product"
    },
    {
        "id": 1650,
        "name": "Head of Project Manager"
    },
    {
        "id": 1651,
        "name": "Head of Research"
    },
    {
        "id": 1652,
        "name": "Head of Retail"
    },
    {
        "id": 1653,
        "name": "Head of Sales"
    },
    {
        "id": 1654,
        "name": "Head of Sales and Marketing"
    },
    {
        "id": 1655,
        "name": "Healthcare Assistant"
    },
    {
        "id": 1656,
        "name": "Healthcare Consultant"
    },
    {
        "id": 717,
        "name": "Health Economist"
    },
    {
        "id": 718,
        "name": "Hearing Aid Technician"
    },
    {
        "id": 719,
        "name": "Heavy Lift Engineer"
    },
    {
        "id": 720,
        "name": "Helpdesk Operator"
    },
    {
        "id": 1657,
        "name": "HGV Driver"
    },
    {
        "id": 2077,
        "name": "Highschool Teacher"
    },
    {
        "id": 722,
        "name": "Home Manager"
    },
    {
        "id": 723,
        "name": "Hostess"
    },
    {
        "id": 58,
        "name": "HR Administrator"
    },
    {
        "id": 1659,
        "name": "HR Analyst"
    },
    {
        "id": 1660,
        "name": "HR Assistant"
    },
    {
        "id": 1661,
        "name": "HR Associate"
    },
    {
        "id": 1662,
        "name": "HR Business Partner"
    },
    {
        "id": 1663,
        "name": "HR Consultant"
    },
    {
        "id": 1664,
        "name": "HR Coordinator"
    },
    {
        "id": 1665,
        "name": "HR Generalist"
    },
    {
        "id": 1666,
        "name": "HRis Analyst"
    },
    {
        "id": 59,
        "name": "HR Manager"
    },
    {
        "id": 1667,
        "name": "HR Officer"
    },
    {
        "id": 1668,
        "name": "HR Specialist"
    },
    {
        "id": 726,
        "name": "Human Resources"
    },
    {
        "id": 1669,
        "name": "Human Resources Administrator"
    },
    {
        "id": 1670,
        "name": "Human Resources Adviser"
    },
    {
        "id": 1671,
        "name": "Human Resources Advisor"
    },
    {
        "id": 1672,
        "name": "Human Resources Assistant"
    },
    {
        "id": 1673,
        "name": "Human Resources Business Partner"
    },
    {
        "id": 1674,
        "name": "Human Resources Coordinator"
    },
    {
        "id": 1675,
        "name": "Human Resources Generalist"
    },
    {
        "id": 1676,
        "name": "Human Resources Generalist Assistant"
    },
    {
        "id": 1677,
        "name": "Human Resources Manager"
    },
    {
        "id": 1678,
        "name": "Human Resources Officer"
    },
    {
        "id": 1680,
        "name": "Human Resources Specialist"
    },
    {
        "id": 1681,
        "name": "Human Resourcing"
    },
    {
        "id": 727,
        "name": "Hygiene Operator"
    },
    {
        "id": 1682,
        "name": "ICT Assistant"
    },
    {
        "id": 1683,
        "name": "ICT Engineer"
    },
    {
        "id": 734,
        "name": "Implementation Consultant"
    },
    {
        "id": 1684,
        "name": "Implementation Manager"
    },
    {
        "id": 1685,
        "name": "Implementation Specialist"
    },
    {
        "id": 1686,
        "name": "Industrial Designer"
    },
    {
        "id": 735,
        "name": "Industrial Engineer"
    },
    {
        "id": 736,
        "name": "Industrial Placement"
    },
    {
        "id": 1687,
        "name": "Industrial Placement Student"
    },
    {
        "id": 175,
        "name": "Influencer"
    },
    {
        "id": 1688,
        "name": "Influencer Marketing Manager"
    },
    {
        "id": 737,
        "name": "Information Analyst"
    },
    {
        "id": 738,
        "name": "Information Security Analyst"
    },
    {
        "id": 1689,
        "name": "Infrastructure Project Manager"
    },
    {
        "id": 740,
        "name": "Innovation Manager"
    },
    {
        "id": 742,
        "name": "Inside Sales Account Manager"
    },
    {
        "id": 743,
        "name": "Inside Sales Representative"
    },
    {
        "id": 744,
        "name": "Inspector"
    },
    {
        "id": 1690,
        "name": "Institutional Advancement Assistant"
    },
    {
        "id": 1691,
        "name": "Institutional Fixed Income"
    },
    {
        "id": 1692,
        "name": "Institutional Sales Assistant"
    },
    {
        "id": 1693,
        "name": "Institutional Sales Supervisor"
    },
    {
        "id": 1694,
        "name": "Instructional Designer"
    },
    {
        "id": 1695,
        "name": "Instructor"
    },
    {
        "id": 746,
        "name": "Insurance Agent"
    },
    {
        "id": 747,
        "name": "Insurance Broker"
    },
    {
        "id": 1696,
        "name": "Insurance Verification Specialist"
    },
    {
        "id": 1697,
        "name": "Interaction Designer"
    },
    {
        "id": 60,
        "name": "Interior Designer"
    },
    {
        "id": 1698,
        "name": "Intermediate Applications Developer"
    },
    {
        "id": 61,
        "name": "Intern"
    },
    {
        "id": 750,
        "name": "Internal Auditor"
    },
    {
        "id": 1699,
        "name": "Internal Communications Manager"
    },
    {
        "id": 752,
        "name": "Internal Recruiter"
    },
    {
        "id": 1700,
        "name": "Internal Sales Executive"
    },
    {
        "id": 1701,
        "name": "Internal Sales Representative"
    },
    {
        "id": 754,
        "name": "Internal Technical Engineer"
    },
    {
        "id": 1702,
        "name": "Internal Technical Support Engineer"
    },
    {
        "id": 1703,
        "name": "International Manager"
    },
    {
        "id": 756,
        "name": "Internship"
    },
    {
        "id": 2078,
        "name": "Interviewer"
    },
    {
        "id": 757,
        "name": "Intramural Supervisor"
    },
    {
        "id": 760,
        "name": "Inventory Buyer"
    },
    {
        "id": 1704,
        "name": "Inventory Control"
    },
    {
        "id": 762,
        "name": "Inventory Coordinator"
    },
    {
        "id": 763,
        "name": "Investigator"
    },
    {
        "id": 62,
        "name": "Investment Analyst"
    },
    {
        "id": 1705,
        "name": "Investment Associate"
    },
    {
        "id": 764,
        "name": "Investment Banking Analyst"
    },
    {
        "id": 1706,
        "name": "Investment Banking Associate"
    },
    {
        "id": 1707,
        "name": "Investment Banking Summer Analyst"
    },
    {
        "id": 1708,
        "name": "Investor Relations"
    },
    {
        "id": 1709,
        "name": "Investor Relations Executive"
    },
    {
        "id": 767,
        "name": "Invited Lecturer"
    },
    {
        "id": 1710,
        "name": "IOS Developer"
    },
    {
        "id": 272,
        "name": "IOS Engineer"
    },
    {
        "id": 1711,
        "name": "IP Associate"
    },
    {
        "id": 1712,
        "name": "IP Expert"
    },
    {
        "id": 1713,
        "name": "IP Project Manager"
    },
    {
        "id": 1714,
        "name": "IT Analyst"
    },
    {
        "id": 1715,
        "name": "IT Auditor"
    },
    {
        "id": 1716,
        "name": "IT Business Analyst"
    },
    {
        "id": 1717,
        "name": "IT Consultant"
    },
    {
        "id": 1718,
        "name": "IT Desktop Support Engineer"
    },
    {
        "id": 1719,
        "name": "IT Engineer"
    },
    {
        "id": 63,
        "name": "IT Manager"
    },
    {
        "id": 1720,
        "name": "IT Project Manager"
    },
    {
        "id": 1721,
        "name": "IT Recruitment Consultant"
    },
    {
        "id": 1722,
        "name": "IT Resourcer"
    },
    {
        "id": 1723,
        "name": "IT Service Delivery Manager"
    },
    {
        "id": 1724,
        "name": "IT Site Manager"
    },
    {
        "id": 1725,
        "name": "IT Specialist"
    },
    {
        "id": 1726,
        "name": "IT Support"
    },
    {
        "id": 1727,
        "name": "IT Support Engineer"
    },
    {
        "id": 1728,
        "name": "IT Technical Analyst"
    },
    {
        "id": 1729,
        "name": "IT Technical Support Engineer"
    },
    {
        "id": 1730,
        "name": "IVR Engineer"
    },
    {
        "id": 1731,
        "name": "Java Developer"
    },
    {
        "id": 792,
        "name": "Java Engineer"
    },
    {
        "id": 1732,
        "name": "Javascript Developer"
    },
    {
        "id": 793,
        "name": "Job Manager"
    },
    {
        "id": 794,
        "name": "Joiner"
    },
    {
        "id": 64,
        "name": "Journalist"
    },
    {
        "id": 796,
        "name": "Key Account Manager"
    },
    {
        "id": 1734,
        "name": "Kindergarten Teacher"
    },
    {
        "id": 798,
        "name": "Kyc Analyst"
    },
    {
        "id": 1735,
        "name": "Lab Manager"
    },
    {
        "id": 799,
        "name": "Laboratory Technician"
    },
    {
        "id": 800,
        "name": "Laborer"
    },
    {
        "id": 801,
        "name": "Labourer"
    },
    {
        "id": 1736,
        "name": "Lab Tech"
    },
    {
        "id": 65,
        "name": "Lab Technician"
    },
    {
        "id": 1737,
        "name": "Law Clerk"
    },
    {
        "id": 66,
        "name": "Lawyer"
    },
    {
        "id": 802,
        "name": "Layout Engineer"
    },
    {
        "id": 804,
        "name": "Learner Recruitment Consultant"
    },
    {
        "id": 1738,
        "name": "Learning and Development Manager"
    },
    {
        "id": 806,
        "name": "Learning Consultant"
    },
    {
        "id": 1739,
        "name": "Leasing Consultant"
    },
    {
        "id": 1740,
        "name": "Leasing Manager"
    },
    {
        "id": 807,
        "name": "Lecturer"
    },
    {
        "id": 1741,
        "name": "Legal Administrative Assistant"
    },
    {
        "id": 67,
        "name": "Legal Assistant"
    },
    {
        "id": 68,
        "name": "Legal Counsel"
    },
    {
        "id": 1742,
        "name": "Legal PA"
    },
    {
        "id": 809,
        "name": "Legal Professional"
    },
    {
        "id": 810,
        "name": "Legal Secretary"
    },
    {
        "id": 811,
        "name": "Lending Assistant"
    },
    {
        "id": 812,
        "name": "Lettings Negotiator"
    },
    {
        "id": 813,
        "name": "Level Designer"
    },
    {
        "id": 1743,
        "name": "Level Software Engineer"
    },
    {
        "id": 814,
        "name": "Licensed Practical Nurse"
    },
    {
        "id": 815,
        "name": "Line Operator"
    },
    {
        "id": 816,
        "name": "Linguistic Project Manager"
    },
    {
        "id": 817,
        "name": "Loan Officer"
    },
    {
        "id": 1744,
        "name": "Loan Officer Assistant"
    },
    {
        "id": 1745,
        "name": "Loan Processor"
    },
    {
        "id": 1746,
        "name": "Localisation QA Tester"
    },
    {
        "id": 819,
        "name": "Logistics"
    },
    {
        "id": 820,
        "name": "Logistics Coordinator"
    },
    {
        "id": 1747,
        "name": "Logistics Manager"
    },
    {
        "id": 1748,
        "name": "Logistics Specialist"
    },
    {
        "id": 69,
        "name": "Machine Learning Engineer"
    },
    {
        "id": 1750,
        "name": "Machine Learning Researcher"
    },
    {
        "id": 823,
        "name": "Machine Operator"
    },
    {
        "id": 826,
        "name": "Maintenance Engineer"
    },
    {
        "id": 827,
        "name": "Maintenance Technician"
    },
    {
        "id": 828,
        "name": "Maintenance Worker"
    },
    {
        "id": 830,
        "name": "Manager"
    },
    {
        "id": 838,
        "name": "Managing Consultant"
    },
    {
        "id": 1753,
        "name": "Managing Editor"
    },
    {
        "id": 840,
        "name": "Managing Partner"
    },
    {
        "id": 1754,
        "name": "Manual QA Engineer"
    },
    {
        "id": 841,
        "name": "Manufacturing"
    },
    {
        "id": 1755,
        "name": "Manufacturing Engineer"
    },
    {
        "id": 1756,
        "name": "Manufacturing Staff"
    },
    {
        "id": 1757,
        "name": "Manufacturing Technician"
    },
    {
        "id": 1758,
        "name": "Market Access Writer"
    },
    {
        "id": 843,
        "name": "Market Associate"
    },
    {
        "id": 844,
        "name": "Market Coordinator"
    },
    {
        "id": 845,
        "name": "Market Development"
    },
    {
        "id": 846,
        "name": "Market Executive"
    },
    {
        "id": 71,
        "name": "Marketing"
    },
    {
        "id": 1759,
        "name": "Marketing Analyst"
    },
    {
        "id": 847,
        "name": "Marketing Assistant"
    },
    {
        "id": 72,
        "name": "Marketing Associate"
    },
    {
        "id": 1760,
        "name": "Marketing Communications Manager"
    },
    {
        "id": 1761,
        "name": "Marketing Communications Specialist"
    },
    {
        "id": 1762,
        "name": "Marketing Consultant"
    },
    {
        "id": 849,
        "name": "Marketing Coordinator"
    },
    {
        "id": 850,
        "name": "Marketing Department"
    },
    {
        "id": 852,
        "name": "Marketing Executive"
    },
    {
        "id": 1763,
        "name": "Marketing Intern"
    },
    {
        "id": 73,
        "name": "Marketing Manager"
    },
    {
        "id": 1764,
        "name": "Marketing Operations Manager"
    },
    {
        "id": 1765,
        "name": "Marketing Project Manager"
    },
    {
        "id": 853,
        "name": "Marketing Specialist"
    },
    {
        "id": 1766,
        "name": "Marketing Strategist"
    },
    {
        "id": 854,
        "name": "Marketing Supervisor"
    },
    {
        "id": 855,
        "name": "Market Manager"
    },
    {
        "id": 856,
        "name": "Marketplace Manager"
    },
    {
        "id": 1767,
        "name": "Market Research Analyst"
    },
    {
        "id": 74,
        "name": "Massage Therapist"
    },
    {
        "id": 1768,
        "name": "Matcher"
    },
    {
        "id": 858,
        "name": "Material Handler"
    },
    {
        "id": 859,
        "name": "Material Planner"
    },
    {
        "id": 860,
        "name": "Mathematical Modeler"
    },
    {
        "id": 861,
        "name": "Mathematics Content Writer"
    },
    {
        "id": 1769,
        "name": "Math Teacher"
    },
    {
        "id": 862,
        "name": "Mechanical"
    },
    {
        "id": 863,
        "name": "Mechanical Design Engineer"
    },
    {
        "id": 75,
        "name": "Mechanical Engineer"
    },
    {
        "id": 864,
        "name": "Mechanical Fitter"
    },
    {
        "id": 866,
        "name": "Media"
    },
    {
        "id": 867,
        "name": "Media Account Manager"
    },
    {
        "id": 868,
        "name": "Media Analyst"
    },
    {
        "id": 176,
        "name": "Media Buyer"
    },
    {
        "id": 1770,
        "name": "Media Manager"
    },
    {
        "id": 1771,
        "name": "Media Planner"
    },
    {
        "id": 869,
        "name": "Media Project Manager"
    },
    {
        "id": 1772,
        "name": "Media Supervisor"
    },
    {
        "id": 870,
        "name": "Medical Advisor"
    },
    {
        "id": 871,
        "name": "Medical Assistant"
    },
    {
        "id": 1773,
        "name": "Medical Doctor"
    },
    {
        "id": 872,
        "name": "Medical Officer"
    },
    {
        "id": 873,
        "name": "Medical Sales Representative"
    },
    {
        "id": 874,
        "name": "Medical Science Liaison"
    },
    {
        "id": 875,
        "name": "Medical Technologist"
    },
    {
        "id": 876,
        "name": "Medical Writer"
    },
    {
        "id": 877,
        "name": "Mentor"
    },
    {
        "id": 1774,
        "name": "MEP Engineer"
    },
    {
        "id": 1775,
        "name": "Merchandise Planner"
    },
    {
        "id": 879,
        "name": "Merchandiser"
    },
    {
        "id": 1776,
        "name": "Merchant"
    },
    {
        "id": 1777,
        "name": "MES Engineer"
    },
    {
        "id": 881,
        "name": "Metering Technician"
    },
    {
        "id": 882,
        "name": "Meter Reader"
    },
    {
        "id": 883,
        "name": "Microbiologist"
    },
    {
        "id": 884,
        "name": "Microbiology Technician"
    },
    {
        "id": 885,
        "name": "Middle Manager"
    },
    {
        "id": 1778,
        "name": "Middle School Teacher"
    },
    {
        "id": 886,
        "name": "Mobile Cleaning Operative"
    },
    {
        "id": 76,
        "name": "Mobile Engineer"
    },
    {
        "id": 887,
        "name": "Modeler"
    },
    {
        "id": 2079,
        "name": "Moderator"
    },
    {
        "id": 888,
        "name": "Motor Assistance Coordinator"
    },
    {
        "id": 889,
        "name": "Mudlogger"
    },
    {
        "id": 1779,
        "name": "Nanny"
    },
    {
        "id": 1780,
        "name": "National Account Executive"
    },
    {
        "id": 1781,
        "name": "National Account Manager"
    },
    {
        "id": 892,
        "name": "National Supply Chain Manager"
    },
    {
        "id": 893,
        "name": "Negotiator"
    },
    {
        "id": 2080,
        "name": "Net Developer"
    },
    {
        "id": 1783,
        "name": "Network Consulting Engineer"
    },
    {
        "id": 77,
        "name": "Network Engineer"
    },
    {
        "id": 897,
        "name": "Network Security Advisor"
    },
    {
        "id": 1784,
        "name": "Network Security  Analyst"
    },
    {
        "id": 898,
        "name": "Network Support Engineer"
    },
    {
        "id": 899,
        "name": "New Business Development"
    },
    {
        "id": 900,
        "name": "New Business Sales Executive"
    },
    {
        "id": 1785,
        "name": "New Hire"
    },
    {
        "id": 902,
        "name": "Night Auditor"
    },
    {
        "id": 903,
        "name": "Night Support Worker"
    },
    {
        "id": 2081,
        "name": "NOC Engineer"
    },
    {
        "id": 78,
        "name": "Nurse"
    },
    {
        "id": 1786,
        "name": "Nurse Practitioner"
    },
    {
        "id": 1787,
        "name": "Nursing"
    },
    {
        "id": 79,
        "name": "Occupational Therapist"
    },
    {
        "id": 906,
        "name": "Office Administrator"
    },
    {
        "id": 907,
        "name": "Office Assistant"
    },
    {
        "id": 908,
        "name": "Office Coordinator"
    },
    {
        "id": 80,
        "name": "Office Manager"
    },
    {
        "id": 910,
        "name": "Officer"
    },
    {
        "id": 911,
        "name": "Oil Trader"
    },
    {
        "id": 912,
        "name": "On Air Planner"
    },
    {
        "id": 1788,
        "name": "Onboarding Specialist"
    },
    {
        "id": 913,
        "name": "Online Marketing Executive"
    },
    {
        "id": 1789,
        "name": "Online Parts Lister"
    },
    {
        "id": 177,
        "name": "Online Teacher"
    },
    {
        "id": 914,
        "name": "Operational Support"
    },
    {
        "id": 81,
        "name": "Operations"
    },
    {
        "id": 915,
        "name": "Operations Analyst"
    },
    {
        "id": 1790,
        "name": "Operations Associate"
    },
    {
        "id": 1791,
        "name": "Operations Coordinator"
    },
    {
        "id": 918,
        "name": "Operations Executive"
    },
    {
        "id": 82,
        "name": "Operations Manager"
    },
    {
        "id": 919,
        "name": "Operations Project Manager"
    },
    {
        "id": 1792,
        "name": "Operations Specialist"
    },
    {
        "id": 920,
        "name": "Operations Supervisor"
    },
    {
        "id": 1794,
        "name": "Operations Support"
    },
    {
        "id": 1795,
        "name": "Operations Team"
    },
    {
        "id": 1796,
        "name": "Operations Technician"
    },
    {
        "id": 2082,
        "name": "Operations Troubleshooter"
    },
    {
        "id": 922,
        "name": "Optical Assistant"
    },
    {
        "id": 1798,
        "name": "Optician"
    },
    {
        "id": 83,
        "name": "Optometrist"
    },
    {
        "id": 923,
        "name": "Oracle Database Administrator"
    },
    {
        "id": 924,
        "name": "Oral Care Consultant"
    },
    {
        "id": 1799,
        "name": "Outbound Sales Representative"
    },
    {
        "id": 1800,
        "name": "Outbound Specialist"
    },
    {
        "id": 1801,
        "name": "Outreach Specialist"
    },
    {
        "id": 1802,
        "name": "Owner"
    },
    {
        "id": 1803,
        "name": "Packaging Engineer"
    },
    {
        "id": 2083,
        "name": "Paid Social Manager"
    },
    {
        "id": 85,
        "name": "Paralegal"
    },
    {
        "id": 1804,
        "name": "Paramedic"
    },
    {
        "id": 927,
        "name": "Paraplanner"
    },
    {
        "id": 1805,
        "name": "Partner"
    },
    {
        "id": 928,
        "name": "Partner Manager"
    },
    {
        "id": 929,
        "name": "Partner Marketing Manager"
    },
    {
        "id": 930,
        "name": "Partnership Manager"
    },
    {
        "id": 1806,
        "name": "Partnerships Manager"
    },
    {
        "id": 931,
        "name": "Partner Success Consultant"
    },
    {
        "id": 932,
        "name": "Part Time Assistant Supervisor"
    },
    {
        "id": 1807,
        "name": "Part Time Sales Advisor"
    },
    {
        "id": 933,
        "name": "Passenger Service Agent"
    },
    {
        "id": 1808,
        "name": "Patient Care Coordinator"
    },
    {
        "id": 1809,
        "name": "Patient Care Technician"
    },
    {
        "id": 934,
        "name": "Payment Negotiator"
    },
    {
        "id": 935,
        "name": "Payroll Administrator"
    },
    {
        "id": 2084,
        "name": "Payroll Manager"
    },
    {
        "id": 936,
        "name": "Payroll Specialist"
    },
    {
        "id": 938,
        "name": "Penetration Tester"
    },
    {
        "id": 939,
        "name": "Pension Administrator"
    },
    {
        "id": 1810,
        "name": "People Operations Manager"
    },
    {
        "id": 1811,
        "name": "Performance Adviser"
    },
    {
        "id": 941,
        "name": "Performance Coach"
    },
    {
        "id": 1812,
        "name": "Performance Marketing Manager"
    },
    {
        "id": 86,
        "name": "Personal Assistant"
    },
    {
        "id": 1813,
        "name": "Personal Banker"
    },
    {
        "id": 943,
        "name": "Pest Control Technician"
    },
    {
        "id": 944,
        "name": "Petroleum Engineer"
    },
    {
        "id": 1814,
        "name": "Pharmaceutical Sales Representative"
    },
    {
        "id": 88,
        "name": "Pharmacist"
    },
    {
        "id": 946,
        "name": "Pharmacist Manager"
    },
    {
        "id": 1815,
        "name": "Pharmacy Manager"
    },
    {
        "id": 948,
        "name": "Pharmacy Technician"
    },
    {
        "id": 949,
        "name": "Phd Researcher"
    },
    {
        "id": 950,
        "name": "Phd Student"
    },
    {
        "id": 1816,
        "name": "Phlebotomist"
    },
    {
        "id": 90,
        "name": "Photographer"
    },
    {
        "id": 1817,
        "name": "Php Developer"
    },
    {
        "id": 1818,
        "name": "Physical Therapist"
    },
    {
        "id": 1819,
        "name": "Physical Therapist Assistant"
    },
    {
        "id": 1820,
        "name": "Physician"
    },
    {
        "id": 1821,
        "name": "Physician Assistant"
    },
    {
        "id": 952,
        "name": "Physicist"
    },
    {
        "id": 91,
        "name": "Physiotherapist"
    },
    {
        "id": 953,
        "name": "Picker"
    },
    {
        "id": 1822,
        "name": "Pilot"
    },
    {
        "id": 2085,
        "name": "Pipefitter"
    },
    {
        "id": 955,
        "name": "Placement Student"
    },
    {
        "id": 956,
        "name": "Planner"
    },
    {
        "id": 957,
        "name": "Platform Administrator"
    },
    {
        "id": 958,
        "name": "Platform Engineer"
    },
    {
        "id": 1823,
        "name": "PMO Manager"
    },
    {
        "id": 1824,
        "name": "Police Officer"
    },
    {
        "id": 1825,
        "name": "Policy Analyst"
    },
    {
        "id": 960,
        "name": "Policy Manager"
    },
    {
        "id": 961,
        "name": "Portfolio Manager"
    },
    {
        "id": 1826,
        "name": "Postdoctoral Fellow"
    },
    {
        "id": 1827,
        "name": "Postdoctoral Research Associate"
    },
    {
        "id": 1828,
        "name": "Postdoctoral Researcher"
    },
    {
        "id": 1829,
        "name": "Postdoctoral Research Fellow"
    },
    {
        "id": 1830,
        "name": "Postdoctoral Research Scientist"
    },
    {
        "id": 1831,
        "name": "Post Doctoral Scientist"
    },
    {
        "id": 1832,
        "name": "PPC Analyst"
    },
    {
        "id": 178,
        "name": "PPC Specialist"
    },
    {
        "id": 1833,
        "name": "PR Account Executive"
    },
    {
        "id": 1834,
        "name": "Practice Manager"
    },
    {
        "id": 1835,
        "name": "Presales"
    },
    {
        "id": 1836,
        "name": "Presales Consultant"
    },
    {
        "id": 1837,
        "name": "Presales Engineer"
    }
];

export default jobTitles;