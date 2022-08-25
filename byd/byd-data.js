var allFacs = ["ARCH & DESIGN", "COMMERCE", "EDUCATION", "ENGINEERING", "HEALTH", "HSS", "SCIENCE"];

var allSubjects = [{"Code":"ACCY","Color":"#FFA7A4","Faculty":"COMMERCE","Y1T1":[{"Code":"ACCY130","Description":"Accounting for Accountability and Decision,Making","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"ACCY130","Description":"Accounting for Accountability and Decision,Making","Pts":15,"Preqs":""},{"Code":"ACCY131","Description":"Fundamentals of Accounting","Pts":15,"Preqs":"ACCY 130"}],"Y2T1":[{"Code":"ACCY223","Description":"Management Accounting","Pts":15,"Preqs":"ACCY 131 (or ACCY 115) and ECON 130"},{"Code":"ACCY231","Description":"Financial Accounting","Pts":15,"Preqs":"ACCY 131 (or ACCY 115)"}],"Y2T2":[{"Code":"ACCY223","Description":"Management Accounting","Pts":15,"Preqs":"ACCY 131 (or ACCY 115) and ECON 130"},{"Code":"ACCY225","Description":" Introduction to Accounting Systems","Pts":15,"Preqs":"ACCY 131 (or ACCY 115) and INFO 101"}],"Y3T1":[{"Code":"ACCY302","Description":"Accounting for Strategy, Performance, and Value","Pts":15,"Preqs":"ACCY 223"},{"Code":"ACCY308","Description":"External Reporting and Accountability","Pts":15,"Preqs":"ACCY 231 (or ACCY 221) "},{"Code":"ACCY330","Description":"Auditing","Pts":15,"Preqs":"ACCY 231 and COML 204 "}],"Y3T2":[{"Code":"ACCY302","Description":"Accounting for Strategy, Performance, and Value","Pts":15,"Preqs":"ACCY 223"},{"Code":"ACCY306","Description":"Data Analytics for Financial Statements","Pts":15,"Preqs":"ACCY 231, and FINA 201 (or 211) "},{"Code":"ACCY308","Description":"External Reporting and Accountability","Pts":15,"Preqs":"ACCY 231 (or ACCY 221) "},{"Code":"ACCY330","Description":"Auditing","Pts":15,"Preqs":"ACCY 231 and COML 204 "}],"Y8T1":[]},{"Code":"ACTS","Color":"#FFE4A4","Faculty":"COMMERCE","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"ACTS201","Description":"Financial Mathematics","Pts":15,"Preqs":"QUAN 102 (or STAT 193 or MATH 177)and QUAN 111 (or MATH 141/142, 151) "}],"Y2T2":[],"Y3T1":[],"Y3T2":[{"Code":"ACTS301","Description":"Actuarial Science","Pts":15,"Preqs":"ACTS 201, ECON 141, and MATH 277 "},{"Code":"ACTS336","Description":"General Insurance Techniques","Pts":15,"Preqs":""}],"Y8T1":[]},{"Code":"ANFX","Color":"#FFA4A4","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"ANFX201","Description":"Animation and Visual Effects II /,Pakiwaituhi me ng? Mariko Ataata II","Pts":15,"Preqs":"DSDN 132 CGRA 151 or acceptance into the ANFX major"}],"Y2T2":[{"Code":"ANFX211","Description":"Character Animation I /,Pakiwaituhi Kiripuaki I","Pts":15,"Preqs":"75 points including DSDN 132 15 further points from the BDI or BAS Schedules"},{"Code":"ANFX221","Description":"Digital 2D Animation I /,Pakiwaituhi Matihiko Ahurua I","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedule or CGRA/COMP courses"}],"Y3T1":[{"Code":"ANFX301","Description":"Animation and Visual Effects III /,Pakiwaituhi me ng? Mariko Ataata III","Pts":15,"Preqs":"60 200-level points including ANFX 201"},{"Code":"ANFX311","Description":"Character Animation II /,Pakiwaituhi ?-Kiripuaki II","Pts":15,"Preqs":"60 200-level points including ANFX 211"}],"Y3T2":[{"Code":"ANFX390","Description":"Animation and Visual Effects Capstone","Pts":30,"Preqs":"60 200-level points including ANFX 201 and acceptance into the ANFX major"}],"Y8T1":[]},{"Code":"ANTH","Color":"#FFB6A4","Faculty":"HSS","Y1T1":[{"Code":"ANTH101","Description":"Foundations of Society and Culture","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"ANTH102","Description":"Social and Cultural Diversity","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"ANTH210","Description":"Environmental Anthropology","Pts":20,"Preqs":"ANTH 101 or ANTH102, plus 20 further points from Part A of the BA Schedule "},{"Code":"ANTH215","Description":"Special Topic:,Anthropology, Education and Social Change","Pts":20,"Preqs":""}],"Y2T2":[{"Code":"ANTH204","Description":"Modern Anthropological Thought","Pts":20,"Preqs":"ANTH 101 or ANTH102, plus 20 further points from Part A of the BA Schedule "},{"Code":"ANTH213","Description":"Ritual and Collective Life","Pts":20,"Preqs":"ANTH 101 or ANTH102, plus 20 further points from Part A of the BA Schedule "}],"Y3T1":[{"Code":"ANTH307","Description":"Medical Anthropology","Pts":20,"Preqs":"You must have completed 20 points from ANTH 200-level courses. "},{"Code":"ANTH314","Description":"Special Topic: The Social Lives of,Infrastructure","Pts":20,"Preqs":"You must have completed 20 points from ANTH 200-level courses. "}],"Y3T2":[{"Code":"ANTH315","Description":"Special Topic: Anthropology for,Liberation","Pts":20,"Preqs":"You must have completed 20 points from ANTH 200-level courses. "},{"Code":"ANTH316","Description":"Visual Anthropology","Pts":20,"Preqs":"You must have completed 20 points from ANTH 200-level courses. "}],"Y8T1":[]},{"Code":"ARCI","Color":"#FFF4A4","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"ARCI211","Description":"Architecture Design I / Te Whakar?kei Whare I","Pts":15,"Preqs":"BAS Part 1 "},{"Code":"ARCI251","Description":"History and Theory of Architecture / Ng? K?rero,Tuku Iho","Pts":15,"Preqs":"SARC 151 "}],"Y2T2":[{"Code":"ARCI212","Description":"Architecture Design Integration I / Te,Whakakotahitanga o ng? Tikanga Whakar?kei Whare I","Pts":30,"Preqs":"ARCI 211, SARC 223"},{"Code":"ARCI222","Description":"Structural Systems for Architecture /?Te,Whakamahinga?o?ng??Rauemi?m? Hoahoanga","Pts":15,"Preqs":"SARC 121, SARC 122"}],"Y3T1":[{"Code":"ARCI311","Description":"Architecture Design II / Te Whakar?kei Whare II","Pts":15,"Preqs":"ARCI 212 "}],"Y3T2":[{"Code":"ARCI312","Description":"Architecture Design Integration Capstone / Te,Whakakotahitanga o ng? Tikanga-T?tohu o te,Whakar?kei Whare","Pts":30,"Preqs":"ARCI 311 and ARCI 222. Corequisite: SARC 321"}],"Y8T1":[]},{"Code":"ARTH","Color":"#FFC9A4","Faculty":"HSS","Y1T1":[{"Code":"ARTH101","Description":"Art, Creativity and Identity","Pts":20,"Preqs":""},{"Code":"ARTH103","Description":"Art, Creativity and Identity","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"ARTH102","Description":"Art, Revolution and Crisis","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"ARTH219","Description":"Art and Modernity","Pts":20,"Preqs":"You must have completed 15 100-level ARTH points "}],"Y2T2":[{"Code":"ARTH222","Description":"Neoclassicism to Impressionism","Pts":20,"Preqs":"You must have completed 15 100-level ARTH points "},{"Code":"ARTH226","Description":"Special Topic: Art and Environment","Pts":20,"Preqs":""}],"Y3T1":[{"Code":"ARTH336","Description":"Topics in Pacific Art","Pts":20,"Preqs":"You must have completed 40 200-level ARTH points "}],"Y3T2":[{"Code":"ARTH334","Description":"Special Topic: Cultures of Surrealism","Pts":20,"Preqs":""}],"Y8T1":[]},{"Code":"ASIA","Color":"#FFE1A4","Faculty":"HSS","Y1T1":[{"Code":"ASIA101","Description":"New Zealand and Asia","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"ASIA111","Description":"Introduction to Asian Histories and Cultures","Pts":20,"Preqs":""}],"Y2T1":[],"Y2T2":[{"Code":"ASIA201","Description":"Contemporary Asian Society","Pts":20,"Preqs":"ASIA 101 or ASIA 111, or 40points from Part A of the BA Schedule "}],"Y3T1":[{"Code":"ASIA301","Description":"Nation and Nationalism in Asia","Pts":20,"Preqs":"40 points from Part A of the BA Schedule, including at least 20 pts from (ASIA, HIST, INTP)"},{"Code":"ASIA302","Description":"Selected Topic: Directed Individual Study","Pts":20,"Preqs":""}],"Y3T2":[{"Code":"ASIA302","Description":"Selected Topic: Directed Individual Study","Pts":20,"Preqs":""}],"Y8T1":[]},{"Code":"BILD","Color":"#FFFFA4","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"BILD222","Description":"Structural Systems for Building Science /?Te,Whakamahinga o ng? Rauemi m? Hanga p?taiao","Pts":15,"Preqs":"SARC 121, SARC 122"},{"Code":"BILD261","Description":"Building Project Management Economics / Te,Whakahaere i te ?hanga o ng? Mahi Waihanga Whare","Pts":15,"Preqs":"60 100-level SARC points "}],"Y2T2":[{"Code":"BILD231","Description":"Environmental Design / Hoahoa Taiao","Pts":15,"Preqs":"SARC 122 "},{"Code":"BILD232","Description":"Sustainable Architecture / Ng? Whare Toit?","Pts":15,"Preqs":"SARC 131 "},{"Code":"BILD251","Description":"History of Building Technology / Ng?,Whanaketanga a te Ao Hangahanga","Pts":15,"Preqs":"SARC 121 or SARC 151 "},{"Code":"BILD262","Description":"Building Project Management Cost Planning /,Te Whakahaere me te Whakamahere ?-utu i ng? Mahi Waihanga,Whare","Pts":15,"Preqs":"SARC 121 "}],"Y3T1":[{"Code":"BILD331","Description":"Sustainable and Regenerative Design / Te,Whakarauoratanga o ng? Mahi Whakar?kei","Pts":15,"Preqs":"BILD 232 "},{"Code":"BILD362","Description":"Construction Law / Ng? Ture Waihanga","Pts":15,"Preqs":"60 200-level ARCI/BILD/INTA/LAND/SARC points "},{"Code":"BILD364","Description":"Building Code Compliance / Ng? Ture,Whakaruruhau","Pts":15,"Preqs":"one of LAND 221 or SARC 221 "}],"Y3T2":[{"Code":"BILD321","Description":"Sustainable Engineering Systems Design / Ng?,Punaha Whakarauora i te Taiao","Pts":15,"Preqs":"BILD 231 and BILD 232 "},{"Code":"BILD322","Description":"Structures / Ng? ?huatanga Whare","Pts":15,"Preqs":"BILD 222 "},{"Code":"BILD361","Description":"Project Management / Ng? Kaupapa Whakahaere","Pts":15,"Preqs":"60 200-level ARCI/BILD/INTA/LAND/SARC points "}],"Y8T1":[]},{"Code":"BIOL","Color":"#FFBAA4","Faculty":"SCIENCE","Y1T1":[{"Code":"BIOL113","Description":"Biology of Plants","Pts":15,"Preqs":""},{"Code":"BIOL114","Description":"Biology of Animals","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"BIOL111","Description":"Cell Biology","Pts":15,"Preqs":""},{"Code":"BIOL132","Description":"Biodiversity and Conservation","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"BIOL222","Description":" Ecology and Environment","Pts":20,"Preqs":"STAT 193, and 30 points from (BIOL 111, BIOL 113, BIOL114, BIOL 132, ENVI/GEOG 114, ESCI/GEOG 111, ESCI 112)"},{"Code":"BIOL228","Description":"Animal Diversity","Pts":20,"Preqs":"BIOL 114"},{"Code":"BIOL244","Description":"Introductory Biochemistry","Pts":20,"Preqs":"BIOL 111, as well as CHEM 113 or CHEM 114"},{"Code":"BIOL252","Description":"Cell and Developmental Biology","Pts":20,"Preqs":"BIOL 111 and BIOL 114"}],"Y2T2":[{"Code":"BIOL219","Description":"New Zealand Flora and Fauna","Pts":15,"Preqs":"60 points "},{"Code":"BIOL227","Description":"Plants and Algae: Function and Diversity","Pts":20,"Preqs":"BIOL 113"},{"Code":"BIOL234","Description":"Special Topic: Microbes and their Environments","Pts":20,"Preqs":"60 approved points "},{"Code":"BIOL241","Description":"Genetics","Pts":20,"Preqs":"BIOL 111"},{"Code":"BIOL243","Description":"Physiology and Pharmacology","Pts":20,"Preqs":"BIOL 111 and BIOL 114, as well as CHEM 113 or CHEM 114"},{"Code":"BIOL253","Description":"Physiology and Pharmacology for Health","Pts":15,"Preqs":"BIOL 111, 114 CHEM 113 or 114Corequisite: 60 MIDW points"},{"Code":"BIOL271","Description":"Introductory Marine Ecology","Pts":20,"Preqs":"60 points, including BIOL 114"}],"Y3T1":[{"Code":"BIOL314","Description":"Island Ecology & Evolution - International,Field Course in Biological Sciences","Pts":15,"Preqs":"BIOL/GEOG 222 as well as 15 200-level BIOL, ENVI or STAT points. "},{"Code":"BIOL325","Description":"Global Change Biology: The Ecology of Our Planet,Under Stress","Pts":20,"Preqs":"40 200-level BIOL points"},{"Code":"BIOL327","Description":"Population and Community Ecology","Pts":20,"Preqs":"BIOL/GEOG 222 as well as 15 200-level BIOL, ENVI or STAT points. "},{"Code":"BIOL340","Description":"Genes and Genomes","Pts":20,"Preqs":"BIOL/BMSC 241 and BIOL/BMSC 244"},{"Code":"BIOL370","Description":"Field Marine Ecolog","Pts":20,"Preqs":"BIOL 271 and STAT 292"},{"Code":"BIOL371","Description":"Marine Ecology","Pts":20,"Preqs":"BIOL 271 and STAT 292"}],"Y3T2":[{"Code":"BIOL328","Description":"Behaviour and Conservation Ecology","Pts":20,"Preqs":"BIOL/GEOG 222 as well as 15 200-level BIOL, ENVI or STAT points. "},{"Code":"BIOL329","Description":"Evolution","Pts":20,"Preqs":"40 200-level BIOL, BMSC, BTEC points"},{"Code":"BIOL372","Description":"Applied Marine Biology","Pts":20,"Preqs":"BIOL 228 and BIOL 271"}],"Y8T1":[]},{"Code":"BMSC","Color":"#FFFFA4","Faculty":"SCIENCE","Y1T1":[{"Code":"BMSC116","Description":"Sex and Evolution","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"BMSC117","Description":"The Biology of Disease","Pts":15,"Preqs":""}],"Y2T1":[],"Y2T2":[],"Y3T1":[{"Code":"BMSC301","Description":"Medical Microbiology","Pts":20,"Preqs":"BIOL/BMSC 244 or BTEC 201"},{"Code":"BMSC335","Description":"Advanced Physiology","Pts":20,"Preqs":"BIOL/BMSC 243"},{"Code":"BMSC343","Description":"Advanced Genetics","Pts":20,"Preqs":"BIOL/BMSC 241"}],"Y3T2":[{"Code":"BMSC323","Description":"Systems Pathology","Pts":20,"Preqs":"BIOL/BMSC 335"},{"Code":"BMSC334","Description":"Cell and Immunobiolog","Pts":20,"Preqs":"BIOL/BMSC 241 and BIOL 252"},{"Code":"BMSC339","Description":" Cellular Regulation","Pts":20,"Preqs":"BIOL/BMSC 244 and BIOL 252"},{"Code":"BMSC354","Description":"Pharmacology","Pts":20,"Preqs":"35 pts from (BIOL/BMSC 243, BIOL/BMSC 244, CHEM 115, CHEM 201"}],"Y8T1":[]},{"Code":"BTEC","Color":"#FFFFA4","Faculty":"SCIENCE","Y1T1":[{"Code":"BTEC101","Description":"Introduction to Biotechnology","Pts":15,"Preqs":""}],"Y1T2":[],"Y2T1":[],"Y2T2":[{"Code":"BTEC201","Description":"Molecular Biotechnology","Pts":20,"Preqs":"BIOL 111 and BTEC 101"}],"Y3T1":[{"Code":"BTEC301","Description":"Biotechnological Techniques and Processes","Pts":20,"Preqs":"BTEC 201"}],"Y3T2":[],"Y8T1":[]},{"Code":"CGRA","Color":"#FFFFA4","Faculty":"ENGINEERING","Y1T1":[],"Y1T2":[{"Code":"CGRA151","Description":"Introduction to Computer Graphics","Pts":15,"Preqs":"COMP 102 or COMP 112 or DSDN 142 15 points from (ENGR 121, MATH 100-199) or 16 AS credits NCEA level 3 mathematics (or equivalent)"}],"Y2T1":[],"Y2T2":[{"Code":"CGRA251","Description":"Computer Graphics","Pts":15,"Preqs":"CGRA 151, NWEN 241 ENGR 121 or MATH 151 or permission of Head of School"}],"Y3T1":[{"Code":"CGRA352","Description":"Image-based Graphics","Pts":15,"Preqs":"CGRA 251 COMP 261 or NWEN 241"}],"Y3T2":[{"Code":"CGRA350","Description":"Real-time 3D Computer Graphics","Pts":15,"Preqs":"CGRA 251, COMP 261, NWEN 241"}],"Y8T1":[]},{"Code":"CHEM","Color":"#D6FFA4","Faculty":"SCIENCE","Y1T1":[{"Code":"CHEM113","Description":"Concepts of Chemistry","Pts":15,"Preqs":""},{"Code":"CHEM114","Description":"Principles of Chemistry","Pts":15,"Preqs":"CHEM 113 or 18 AS credits at NCEA Level 3 in Chemistry including: AS91390, AS91391 and AS91392 or equivalent background in Chemistry "}],"Y1T2":[{"Code":"CHEM114","Description":"Principles of Chemistry","Pts":15,"Preqs":"CHEM 113 or 18 AS credits at NCEA Level 3 in Chemistry including: AS91390, AS91391 and AS91392 or equivalent background in Chemistry "},{"Code":"CHEM115","Description":"Structure and Spectroscopy","Pts":15,"Preqs":"CHEM 114 or (A- or better in CHEM 113 and concurrent enrolment in CHEM 114. "}],"Y2T1":[{"Code":"CHEM202","Description":"Inorganic and Materials Chemistry","Pts":15,"Preqs":"CHEM 114 and 115. Or equivalent background. "},{"Code":"CHEM206","Description":"Chemical Methods and Processes - Laboratory,Component","Pts":15,"Preqs":"CHEM 114 and 115. Or equivalent background. "}],"Y2T2":[{"Code":"CHEM201","Description":"Organic Chemistry","Pts":15,"Preqs":"CHEM 114 and 115. Or equivalent background. "},{"Code":"CHEM203","Description":"Physical and Process Chemistry","Pts":15,"Preqs":"CHEM 114 and 115. Or equivalent background. "},{"Code":"CHEM205","Description":"Chemical Synthesis - Laboratory Component","Pts":15,"Preqs":"CHEM 114 and 115. Or equivalent background. "}],"Y3T1":[{"Code":"CHEM301","Description":"Organic Chemistry","Pts":15,"Preqs":"CHEM 201"},{"Code":"CHEM303","Description":"Physical and Process Chemistry","Pts":15,"Preqs":"CHEM 203"},{"Code":"CHEM305","Description":"Chemistry Synthesis Laboratory","Pts":15,"Preqs":"CHEM 201, CHEM 205"}],"Y3T2":[{"Code":"CHEM302","Description":"Inorganic and Materials Chemistry","Pts":15,"Preqs":"CHEM 202"},{"Code":"CHEM306","Description":"Chemistry Materials and Methods Laboratory","Pts":15,"Preqs":"CHEM 202, CHEM 203, CHEM 206"}],"Y8T1":[]},{"Code":"CHIN","Color":"#FFF4A4","Faculty":"HSS","Y1T1":[{"Code":"CHIN101","Description":"Chinese Language 1A","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"CHIN102","Description":"Chinese Language 1B","Pts":20,"Preqs":"CHIN 101"}],"Y2T1":[{"Code":"CHIN201","Description":"Chinese Language 2A","Pts":20,"Preqs":"CHIN 102"},{"Code":"CHIN213","Description":"Chinese Culture Through Literature and Film","Pts":20,"Preqs":"40 points"}],"Y2T2":[{"Code":"CHIN202","Description":"Chinese Language 2B","Pts":20,"Preqs":"CHIN 201 or CHIN 211"}],"Y3T1":[{"Code":"CHIN301","Description":"Chinese Language 3A","Pts":20,"Preqs":"CHIN 202 or CHIN 212"}],"Y3T2":[{"Code":"CHIN302","Description":"Chinese Language 3B","Pts":20,"Preqs":"CHIN 301 or CHIN 311"},{"Code":"CHIN313","Description":"Classical Chinese Language and Literature","Pts":20,"Preqs":"CHIN 202 or CHIN 212"}],"Y8T1":[]},{"Code":"CLAS","Color":"#FFFFA4","Faculty":"HSS","Y1T1":[{"Code":"CLAS111","Description":"Myth and Mythologies","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"CLAS106","Description":"Ancient Civilisations: the Greeks and the,Romans","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"CLAS207","Description":"Roman Social History","Pts":20,"Preqs":"40 points. "},{"Code":"CLAS212","Description":"Special Topic: Animals and Monsters,in Ancient Greece and Rome","Pts":20,"Preqs":"40 points. "}],"Y2T2":[{"Code":"CLAS214","Description":"Special Topic:,Sex and Gender in the Ancient World","Pts":20,"Preqs":"40 points. "}],"Y3T1":[{"Code":"CLAS312","Description":"Special Topic: Playing with the Ancient World:,Ancient Greece and Rome in Video Games","Pts":20,"Preqs":"20 points from CLAS/GREE/LATI 200-299 20 further points from Part A of the BA Schedule."}],"Y3T2":[{"Code":"CLAS310","Description":"Greek and Roman Epic","Pts":20,"Preqs":"40 points from CLAS/GREE/LATI 200-299. "},{"Code":"CLAS314","Description":"Special Topic:,Foundations of Western Political Thought","Pts":20,"Preqs":"40 points from CLAS/GREE/LATI/POLS 200-299"}],"Y8T1":[]},{"Code":"CMPO","Color":"#FFFFA4","Faculty":"HSS","Y1T1":[{"Code":"CMPO130","Description":"Introduction to Writing for,Orchestral Instruments","Pts":15,"Preqs":"approved theory qualification or entrance test or B or better in MUSC 160 "},{"Code":"CMPO185","Description":"Introduction to Digital Music, Sound Synthesis,and Audio Effects","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"CMPO101","Description":"Introduction to Composition, Sonic Arts and,Film Scoring","Pts":15,"Preqs":"approved theory qualification or entrance test or B or better in MUSC 160 "},{"Code":"CMPO186","Description":"Introduction to Recording, Production,and Sound Engineering","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"CMPO210","Description":"Electronic Music and Experimental Sound Design","Pts":15,"Preqs":"CMPO 101 or CMPO 181 or CMPO 186, or entry by portfolio"},{"Code":"CMPO232","Description":"Composing/Arranging for Small Ensembles,(Classical/Jazz)","Pts":15,"Preqs":"CMPO 130 or MUSC 164"}],"Y2T2":[{"Code":"CMPO201","Description":"Projects in Composition,(Classical/Jazz)","Pts":15,"Preqs":"Either (MUSC 164 and MUSC 165) or (CMPO 101 and CMPO 130) "},{"Code":"CMPO285","Description":"Interactive Sound Art","Pts":15,"Preqs":""},{"Code":"CMPO286","Description":"Studio Recording and Production","Pts":15,"Preqs":""}],"Y3T1":[{"Code":"CMPO305","Description":"Topic in Composition/Sonic Arts: Sample-based,Orchestration and Creative Live Instrumentation for Film","Pts":20,"Preqs":"two of CMPO 181, CMPO 186, CMPO 201, CMPO 210, CMPO 230"},{"Code":"CMPO332","Description":"Composing/Arranging for Large Ensembles,(Classical/Jazz)","Pts":20,"Preqs":"One of CMPO 230-235 "},{"Code":"CMPO386","Description":"Audio Post-Production and Recording for Film","Pts":20,"Preqs":""}],"Y3T2":[{"Code":"CMPO301","Description":"Advanced Projects in Composition,(Classical/Jazz)","Pts":20,"Preqs":"CMPO 201, and one of CMPO 230-235"},{"Code":"CMPO310","Description":"Electronic Music, Sound Design and,Spatial Audio","Pts":20,"Preqs":"CMPO 210"},{"Code":"CMPO385","Description":"Projects in Creative Audio Coding","Pts":20,"Preqs":"one of (CMPO 281, 285, COMP 200-299, SWEN 200-299)"}],"Y8T1":[]},{"Code":"COMD","Color":"#F9FFA4","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"COMD201","Description":"Typography I / T?tai Momotuhi I","Pts":15,"Preqs":"Acceptance into the COMD major"},{"Code":"COMD211","Description":"Drawing II /,Tuhi Pikitia II","Pts":15,"Preqs":"75 points including DSDN 152 15 further points from the BDI or BAS Schedules"},{"Code":"COMD231","Description":"Illustration /,Pikitia Whakaari","Pts":15,"Preqs":"75 points including 30 points from the BDI or BAS Schedules or permission of Head of School"},{"Code":"COMD241","Description":"Visual Narratives /,Ng? Paki Ataata","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedule or FILM courses or permission of Head of School"},{"Code":"COMD261","Description":"Motion Design I /,Hoahoa ?-Nekehanga I","Pts":15,"Preqs":"75 points including 30 points from the BDI or BAS Schedules or CGRA/COMP/FILM courses or permission of Head of School"}],"Y2T2":[{"Code":"COMD231","Description":"Illustration /,Pikitia Whakaari","Pts":15,"Preqs":"75 points including 30 points from the BDI or BAS Schedules or permission of Head of School"},{"Code":"COMD241","Description":"Visual Narratives /,Ng? Paki Ataata","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedule or FILM courses or permission of Head of School"}],"Y3T1":[{"Code":"COMD335","Description":"Comics and Graphic Novels /,Pukawaituhi me ng? Pakimaero Waituhi","Pts":15,"Preqs":"60 200-level points including 30 from the BDI or BAS Schedule or FILM/THEA/WRIT courses or permission of Head of School"},{"Code":"COMD351","Description":"Writing for Design /,Tuhituhi m? te Hoahoa","Pts":15,"Preqs":"60 200-level points including 30 from the BDI Schedule, or permission of Head of School"}],"Y3T2":[{"Code":"COMD302","Description":"Typography II / T?tai Momotuhi II","Pts":15,"Preqs":"60 200-level points including COMD 201"},{"Code":"COMD390","Description":"Communication Design Capstone: Plan, Produce,,Publish / Whakatinana ?-Wheako K?rero Hoahoa: Whakamahere,,Whakatinana, Whakaputa","Pts":30,"Preqs":"60 200-level points including COMD 201"}],"Y8T1":[]},{"Code":"COML","Color":"#FFFFA4","Faculty":"COMMERCE","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"COML203","Description":"Legal Environment of Business","Pts":15,"Preqs":"FCOM 111"},{"Code":"COML204","Description":"Law of Organisations","Pts":15,"Preqs":"COML 203 or 35 LAW points "}],"Y2T2":[{"Code":"COML203","Description":"Legal Environment of Business","Pts":15,"Preqs":"FCOM 111"},{"Code":"COML204","Description":"Law of Organisations","Pts":15,"Preqs":"COML 203 or 35 LAW points "},{"Code":"COML205","Description":"Consumer Law","Pts":15,"Preqs":"COML 203 or 35 LAW points "}],"Y3T1":[{"Code":"COML302","Description":"The Law of Work","Pts":15,"Preqs":"(COML 111, 15 200-level BCOM pts) or COML203 or 30 LAWS pts "},{"Code":"COML309","Description":"Banking Law and Regulation in New Zealand","Pts":15,"Preqs":"(COML 111, 15 200-level BCOM pts) or COML203 or 30 LAWS pts "},{"Code":"COML310","Description":"Business Contracts","Pts":15,"Preqs":"COML 203 or 35 LAW points "},{"Code":"COML312","Description":"Intellectual Property and Business Innovation","Pts":15,"Preqs":"COML 203 or 30 LAW points or 15 approved 200-level points"}],"Y3T2":[{"Code":"COML306","Description":"Law of International Business","Pts":15,"Preqs":"(COML 111, 15 200-level BCOM pts) or COML203 or 30 LAWS pts "},{"Code":"COML308","Description":"Marketing Law","Pts":15,"Preqs":"(COML 111, 15 200-level BCOM pts) or COML203 or 30 LAWS pts "},{"Code":"COML310","Description":"Business Contracts","Pts":15,"Preqs":"COML 203 or 35 LAW points "}],"Y8T1":[]},{"Code":"COMP","Color":"#FFFFA4","Faculty":"ENGINEERING","Y1T1":[{"Code":"COMP102","Description":"Introduction to Computer Program Design","Pts":15,"Preqs":""},{"Code":"COMP112","Description":"Introduction to Computer Science","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"COMP103","Description":"Introduction to Data Structures and Algorithms","Pts":15,"Preqs":"COMP 102 or COMP 112"},{"Code":"COMP132","Description":"Programming for the Natural and Social Sciences","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"COMP261","Description":"Algorithms and Data Structures","Pts":15,"Preqs":"COMP 103, and ENGR 123 or MATH 161 "}],"Y2T2":[],"Y3T1":[{"Code":"COMP304","Description":"Programming Language","Pts":15,"Preqs":"COMP 261"},{"Code":"COMP307","Description":"Introduction to Artificial Intelligenc","Pts":15,"Preqs":"COMP 261 or NWEN 241 or SWEN 221 ENGR 123 or MATH 151 or MATH 161 "},{"Code":"COMP312","Description":"Simulation and Stochastic Models","Pts":15,"Preqs":"one course from (COMP 102, 112, 132, DATA 202) one course from (ENGR 123, MATH 177, MATH 277, STAT 292), 15 further 200-level COMP, DATA, MATH, NWEN, STAT or SWEN pts"},{"Code":"COMP361","Description":"Design and Analysis of Algorithms","Pts":15,"Preqs":"COMP 261 "}],"Y3T2":[{"Code":"COMP309","Description":"Machine Learning Tools and Techniques","Pts":15,"Preqs":"COMP 261 or (DATA 201 and DATA 202) or NWEN 241 orSWEN 221"},{"Code":"COMP313","Description":"Computer Game Development","Pts":15,"Preqs":"30 points from COMP 261, NWEN 241, NWEN 243, SWEN 222, SWEN 225 "}],"Y8T1":[]},{"Code":"COMS","Color":"#FFFFA4","Faculty":"HSS","Y1T1":[{"Code":"COMS101","Description":"Introduction to Communication Studies","Pts":20,"Preqs":""}],"Y1T2":[],"Y2T1":[{"Code":"COMS201","Description":"Approaches to Communication Research","Pts":20,"Preqs":"COMS 101"}],"Y2T2":[{"Code":"COMS202","Description":"Communication and Society","Pts":20,"Preqs":"COMS 101"},{"Code":"COMS203","Description":"Organisational Communication","Pts":20,"Preqs":"COMS 101"}],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"CREW","Color":"#FFFFA4","Faculty":"HSS","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"CREW254","Description":"Short Fiction Workshop - He K?rero Paki","Pts":20,"Preqs":"40 pts and an appropiate standard in written composition "},{"Code":"CREW255","Description":"Writing for the Young- He Tuhinga,m? ng? Tamariki","Pts":20,"Preqs":"40 pts and an appropiate standard in written composition "},{"Code":"CREW257","Description":"Creative Nonfiction Workshop- He K?rero Pono","Pts":20,"Preqs":"40 pts and an appropiate standard in written composition "}],"Y2T2":[{"Code":"CREW253","Description":"Poetry Workshop - He Rotarota","Pts":20,"Preqs":"40 pts and an appropiate standard in written composition"},{"Code":"CREW254","Description":"Short Fiction Workshop - He K?rero Paki","Pts":20,"Preqs":"40 pts and an appropiate standard in written composition "},{"Code":"CREW260","Description":"M?ori and Pasifika Creative Writing Workshop-,Te Hiringa a Tuhi","Pts":20,"Preqs":"40 200-level pts and approval of Programme Director "}],"Y3T1":[{"Code":"CREW351","Description":"Writing for Television Workshop - He,Tuhinga m? te Pouaka Whakaata","Pts":20,"Preqs":"40 pts and an appropiate standard in written composition "},{"Code":"CREW354","Description":"Long-Form Fiction","Pts":20,"Preqs":"40 pts at 200-level and approval of the Programme Director"},{"Code":"CREW355","Description":"World-Building Creative Writing Workshop","Pts":20,"Preqs":"40 pts at 200-level and approval of the Programme Director "}],"Y3T2":[{"Code":"CREW353","Description":"Writing for Theatre Workshop - He,Tuhinga Whakaari","Pts":20,"Preqs":"40 200-level pts and permission of Programme Director "}],"Y8T1":[]},{"Code":"CRIM","Color":"#FFFFA4","Faculty":"HSS","Y1T1":[],"Y1T2":[{"Code":"CRIM111","Description":"Introduction to Criminology","Pts":20,"Preqs":"20 ANTH, HIST, LAWS, MDIA, PUBL, SOSC or SPOL pts, or 15 PSYC pts, or RELI 108 or RELI 114 "}],"Y2T1":[{"Code":"CRIM202","Description":"Crime in Aotearoa New Zealand","Pts":20,"Preqs":"CRIM 111"},{"Code":"CRIM204","Description":"Current Issues in Criminology","Pts":20,"Preqs":"CRIM 111"}],"Y2T2":[{"Code":"CRIM203","Description":"Criminal Justice in Aotearoa New Zealand","Pts":20,"Preqs":"CRIM 111"},{"Code":"CRIM217","Description":"Criminal Psychology","Pts":20,"Preqs":"CRIM 111"}],"Y3T1":[{"Code":"CRIM311","Description":"Policing","Pts":20,"Preqs":"20 pts from CRIM 200-299 one further 200-level course from (ANTH, CRIM, HIST, LAWS, MDIA, PSYC, PUBL, RELI, SACS, SOSC or SPOL) "},{"Code":"CRIM313","Description":"Women, Crime and Social Control","Pts":20,"Preqs":"20 pts from CRIM 200-299 one further 200-level course from (ANTH, CRIM, HIST, LAWS, MDIA, PSYC, PUBL, SACS, SOSC or SPOL) "},{"Code":"CRIM326","Description":"Criminological Research Methods","Pts":20,"Preqs":"20 pts from CRIM 200-299 one further 200-level course from (ANTH, CRIM, HIST, LAWS, MDIA, PSYC, PUBL, RELI, SACS, SOSC or SPOL) "}],"Y3T2":[{"Code":"CRIM310","Description":"Prisons in Aotearoa New Zealand","Pts":20,"Preqs":"20 pts from CRIM 200-299 one further 200-level course from (ANTH, CRIM, HIST, LAWS, MDIA, PSYC, PUBL, RELI, SACS, SOSC or SPOL) "},{"Code":"CRIM316","Description":"Criminological Theory","Pts":20,"Preqs":"20 pts from CRIM 200-299 one further 200-level course from (ANTH, CRIM, HIST, LAWS, MDIA, PSYC, PUBL, RELI, SACS, SOSC or SPOL) "},{"Code":"CRIM325","Description":"Drugs, Risk and Play","Pts":20,"Preqs":"20 pts from CRIM 200-299 one further 200-level course from (ANTH, CRIM, HIST, LAWS, MDIA, PSYC, PUBL, RELI, SACS, SOSC or SPOL) "}],"Y8T1":[]},{"Code":"CYBR","Color":"#C3FFA4","Faculty":"ENGINEERING","Y1T1":[{"Code":"CYBR171","Description":"Cybersecurity Fundamentals","Pts":15,"Preqs":""}],"Y1T2":[],"Y2T1":[],"Y2T2":[{"Code":"CYBR271","Description":"Secure Programming","Pts":15,"Preqs":"CYBR 171, NWEN 241"}],"Y3T1":[{"Code":"CYBR371","Description":"System and Network Security","Pts":15,"Preqs":"CYBR 171, NWEN 241, NWEN 243"}],"Y3T2":[{"Code":"CYBR372","Description":"Applications of Cryptography","Pts":15,"Preqs":"CYBR 171 CYBR 271 or COMP 261 NWEN 243"},{"Code":"CYBR373","Description":"Human and Organisational Security","Pts":15,"Preqs":"CYBR 371"}],"Y8T1":[]},{"Code":"DATA","Color":"#FFFFA4","Faculty":"COMMERCE","Y1T1":[{"Code":"DATA101","Description":"Introduction to Data Science","Pts":15,"Preqs":""}],"Y1T2":[],"Y2T1":[{"Code":"DATA202","Description":"Data Management and Programming","Pts":15,"Preqs":"one of (COMP 102, 112, 132) or Corequisite: INFO 226"}],"Y2T2":[{"Code":"DATA201","Description":"Techniques of Data Science","Pts":15,"Preqs":" (DATA 101 or SPCE 201), one of (COMP 102, 112, 132, INFO 103 (or 151), one of (ENGR 123, MATH 177, PHYS 245, QUAN 102, SPCE 245, STAT 193)"}],"Y3T1":[{"Code":"DATA303","Description":"Statistics for Data Science","Pts":15,"Preqs":"STAT 293 or (DATA 202 (or SCIE 201 in 2017/18), one of (MATH 277, QUAN 203, STAT 292))"},{"Code":"DATA304","Description":"Simulation and Stochastic Models","Pts":15,"Preqs":"one course from (COMP 102, 112, 132, DATA 202) one course from (ENGR 123, MATH 177, MATH 277, STAT 292), 15 further 200-level COMP, DATA, MATH, NWEN, STAT or SWEN pts"}],"Y3T2":[{"Code":"DATA301","Description":"Data Science in Practice","Pts":15,"Preqs":"DATA 201, and one of (DATA 202, SCIE 201 in 2017/8), DATA 303 "},{"Code":"DATA351","Description":"Data Science Internship","Pts":15,"Preqs":"DATA 201, one of (MATH 277, STAT 292), one of (DATA 202, QUAN 203, SCIE 201 in 2017/18), 15 further 200-levelpoints all with B+ average"}],"Y8T1":[]},{"Code":"DEAF","Color":"#FFFFA4","Faculty":"HSS","Y1T1":[],"Y1T2":[],"Y2T1":[],"Y2T2":[],"Y3T1":[],"Y3T2":[],"Y8T1":[{"Code":"DEAF804","Description":"Principles of Teaching NZ Sign Language","Pts":20,"Preqs":""},{"Code":"DEAF805","Description":"Curriculum Design and Materials Development","Pts":20,"Preqs":""},{"Code":"DEAF806","Description":"Deaf Studies Teaching Practicum","Pts":20,"Preqs":""}]},{"Code":"DSDN","Color":"#A8FFA4","Faculty":"ARCH & DESIGN","Y1T1":[{"Code":"DSDN101","Description":"Design Visualisation / Pohewatanga ?-Hoahoa","Pts":15,"Preqs":""},{"Code":"DSDN111","Description":"Fundamental Principles of Design /,Te T??papa o te Hoahoa","Pts":15,"Preqs":""},{"Code":"DSDN132","Description":"Animation and Visual Effects I /,Pakiwaituhi me ng? Atataunaki I","Pts":15,"Preqs":""},{"Code":"DSDN144","Description":"Photographics / Ng? Whakaahuatanga","Pts":15,"Preqs":""},{"Code":"DSDN151","Description":"Graphic Design / Hoahoa ?-Whakairoiro","Pts":15,"Preqs":""},{"Code":"DSDN152","Description":"Drawing I / Pikitia I","Pts":15,"Preqs":""},{"Code":"DSDN171","Description":"Design in a Global Context /,Hoahoa i te Horopaki o te Ao Wh?nui","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"DSDN104","Description":"Object Codes: 3D Printing / Ng? Waehere,?-M?t?oroko: T?nga Ahu-Toru","Pts":15,"Preqs":""},{"Code":"DSDN112","Description":"Interaction Design I /,Hoahoa ?-P?hekoheko I","Pts":15,"Preqs":"DSDN 101 "},{"Code":"DSDN141","Description":"Experimental Mediums /,Ng? Huarahi Hei Whakam?tau","Pts":15,"Preqs":""},{"Code":"DSDN142","Description":"Creative Coding I /,Waehere ?-Auaha I","Pts":15,"Preqs":""},{"Code":"DSDN144","Description":"Photographics / Ng? Whakaahuatanga","Pts":15,"Preqs":""},{"Code":"DSDN151","Description":"Graphic Design / Hoahoa ?-Whakairoiro","Pts":15,"Preqs":""},{"Code":"DSDN152","Description":"Drawing I / Pikitia I","Pts":15,"Preqs":""},{"Code":"DSDN153","Description":"Fashion Design Studio I / Taupuni,Waihanga K?kahu I","Pts":15,"Preqs":""},{"Code":"DSDN172","Description":"Cultural Narratives: Storytelling for Design /,K?rero Ahurea: Pakiwaitara Hei Hoahoa","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"DSDN271","Description":"Pathways to Research /,Ng? Ara Rangahau","Pts":15,"Preqs":"75 points including DSDN 171"}],"Y2T2":[{"Code":"DSDN271","Description":"Pathways to Research /,Ng? Ara Rangahau","Pts":15,"Preqs":"75 points including DSDN 171"}],"Y3T1":[{"Code":"DSDN381","Description":"Directed Individual Study /,Ako Arahanga Takitahi","Pts":20,"Preqs":""}],"Y3T2":[],"Y8T1":[]},{"Code":"ECEN","Color":"#A4FFE3","Faculty":"ENGINEERING","Y1T1":[],"Y1T2":[],"Y2T1":[],"Y2T2":[],"Y3T1":[{"Code":"ECEN315","Description":"Control Systems Engineering","Pts":15,"Preqs":"ECEN 203 (or ECEN 220 prior to 2016"},{"Code":"ECEN321","Description":"Engineering Statistics","Pts":15,"Preqs":"(ENGR 121 and ENGR 122) or (MATH 142 and MATH 151), 30 200-level ECEN pts"}],"Y3T2":[{"Code":"ECEN301","Description":"Embedded Systems","Pts":15,"Preqs":"ECEN 202 and ECEN 203"}],"Y8T1":[]},{"Code":"ECON","Color":"#E6FFA4","Faculty":"COMMERCE","Y1T1":[{"Code":"ECON130","Description":"Microeconomic Principles","Pts":15,"Preqs":""},{"Code":"ECON141","Description":"Macroeconomic Principles","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"ECON130","Description":"Microeconomic Principles","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"ECON201","Description":"Intermediate Microeconomics","Pts":15,"Preqs":"ECON 130, and QUAN 111 (or MATH 141/142, 151) "}],"Y2T2":[{"Code":"ECON202","Description":"Open-economy Macroeconomics","Pts":15,"Preqs":"ECON 141 (or ECON 140)"}],"Y3T1":[{"Code":"ECON301","Description":"Econometrics","Pts":15,"Preqs":"QUAN 201, QUAN 203 (or MATH 277), and one of (ECON 201, ECON 202, FINA 201, FINA 202)"},{"Code":"ECON305","Description":"Advanced Macroeconomics","Pts":15,"Preqs":"ECON 202, and QUAN 111 (or MATH 141/142, 151) "},{"Code":"ECON333","Description":"Labour Economics","Pts":15,"Preqs":"ECON 130, 15 200-level ACCY, ECON or FINA pts "},{"Code":"ECON339","Description":"Information Economics","Pts":15,"Preqs":"ECON 201 "},{"Code":"ECON340","Description":"Environmental and Resource Economics","Pts":15,"Preqs":"ECON 201"}],"Y3T2":[{"Code":"ECON303","Description":"Applied Econometrics","Pts":15,"Preqs":"QUAN 201"},{"Code":"ECON307","Description":"Public Sector Economics","Pts":15,"Preqs":"ECON 201 (or ECON 130, PUBL 203/209) "},{"Code":"ECON330","Description":"Law and Economics","Pts":15,"Preqs":"ECON 130, 15 pts from COML/ECON 201:299 "},{"Code":"ECON350","Description":"Special Topic: Development Economics","Pts":15,"Preqs":""}],"Y8T1":[]},{"Code":"EDUC","Color":"#FFABA4","Faculty":"EDUCATION","Y1T1":[{"Code":"EDUC101","Description":"Education, Society and Culture","Pts":20,"Preqs":""},{"Code":"EDUC102","Description":"Te Ao Hurihuri 1: Te Tiriti—History and,transformative education","Pts":15,"Preqs":""},{"Code":"EDUC141","Description":"Human Development and Learning","Pts":20,"Preqs":""},{"Code":"EDUC191","Description":"Special Topic: Introduction to Academic Studies","Pts":25,"Preqs":""}],"Y1T2":[{"Code":"EDUC103","Description":"Te Ao Hurihuri 2: Ng? Auahatanga—Innovations in,Care and Education","Pts":20,"Preqs":""},{"Code":"EDUC104","Description":"Te Ao Hurihuri 3: Ng? Ari?—Theories of growth,and learning in context","Pts":20,"Preqs":""},{"Code":"EDUC136","Description":"Professional knowledge for Mathematics,Education","Pts":20,"Preqs":""},{"Code":"EDUC141","Description":"Human Development and Learning","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"EDUC215","Description":"The Early Years Debates","Pts":15,"Preqs":"one of (EDUC 101, EDUC 115, EDUC 141, EPOL 113, EPOL 181, EPSY 113, EPSY 141, EPSY 142) "},{"Code":"EDUC221","Description":"Youth, Society and Education","Pts":20,"Preqs":"20 100-level EDUC/EPOL/EPSY/FEDU/KURA/SOSC pts"},{"Code":"EDUC243","Description":"Learning and Motivation","Pts":20,"Preqs":"one of (EDUC 116, EDUC 141, EPSY 113, EPSY 141, PSYC 121, PSYC 122)"}],"Y2T2":[{"Code":"EDUC223","Description":"Education, Ethnicity and Culture","Pts":20,"Preqs":"20 100-level EDUC/EPOL/EPSY/FEDU/KURA/MAOR/PASI pts"},{"Code":"EDUC224","Description":"Pacific Nations Education","Pts":20,"Preqs":"20 100-level EDUC/EPOL/EPSY/FEDU/KURA/MAOR/PASI pts"},{"Code":"EDUC244","Description":"Issues in Child and Adolescent Development","Pts":20,"Preqs":"one of (EDUC 116, EDUC 141, EPSY 113, EPSY 141, PSYC 121, PSYC 122)"}],"Y3T1":[{"Code":"EDUC321","Description":"The Politics of Education","Pts":20,"Preqs":"40 200-level EDUC/EPOL/EPSY/KURA pts"},{"Code":"EDUC322","Description":"Multi-ethnic Education","Pts":20,"Preqs":"40 200-level EDUC/EPOL/EPSY/KURA/ANTH/HIST/ "},{"Code":"EDUC341","Description":"Learning Environments","Pts":20,"Preqs":"40 200-level pts, incl 20 approved EDUC/EPSY/KURA pts"}],"Y3T2":[{"Code":"EDUC323","Description":"Contemporary Issues in Indigenous Education,Aotearoa","Pts":20,"Preqs":"40 200-level pts, including 20 EDUC/EPOL/EPSY/KURA pts"},{"Code":"EDUC342","Description":"Exceptional Learners: Special Education","Pts":20,"Preqs":"40 200-level pts, incl one of (EDUC 243, EDUC 244, "},{"Code":"EDUC343","Description":"Youth and Life Challenges","Pts":20,"Preqs":"40 200-level pts, incl one of (EDUC 243, EDUC 244, "}],"Y8T1":[]},{"Code":"EEEN","Color":"#A4FFFF","Faculty":"ENGINEERING","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"EEEN202","Description":"Digital Electronics and Microprocessors","Pts":15,"Preqs":"one of (COMP 102, COMP 112, ENGR 101, ENGR 121, MATH 161) "},{"Code":"EEEN203","Description":"Circuit Analysis","Pts":15,"Preqs":"ENGR 122 or MATH 142, and ENGR 142 or PHYS 142"}],"Y2T2":[{"Code":"EEEN201","Description":"Mechatronic Design and Prototyping","Pts":15,"Preqs":"COMP 102 or 112 ENGR 101, ENGR 110 ENGR 121 or MATH 141 or equivalent"},{"Code":"EEEN204","Description":"Electronic Devices","Pts":15,"Preqs":"ENGR 122 or MATH 142, and ENGR 142 or PHYS 142"},{"Code":"EEEN220","Description":"Signals, Systems and Statistics 1","Pts":15,"Preqs":"(ENGR 121 and ENGR 122) or (MATH 142 and MATH 151)"}],"Y3T1":[],"Y3T2":[{"Code":"EEEN313","Description":"Power Electronics and Electrical Machines","Pts":15,"Preqs":"EEEN 203 (or ECEN 203), EEEN 204 (or ECEN 204)"}],"Y8T1":[]},{"Code":"ENGL","Color":"#FFFFA4","Faculty":"HSS","Y1T1":[{"Code":"ENGL117","Description":"Introduction to Narrative","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"ENGL114","Description":"Popular Literature: Convention, Innovation,and Resistance","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"ENGL203","Description":"Modernist Literature","Pts":20,"Preqs":"You must have completed 20 100-level ENGL points, and 20 further points from Part A of the BA Schedule."},{"Code":"ENGL208","Description":"Shakespeare","Pts":20,"Preqs":"You must have completed 20 100-level ENGL points, and 20 further points from Part A of the BA Schedule."},{"Code":"ENGL231","Description":"Modern Poetry","Pts":20,"Preqs":"You must have completed 20 100-level ENGL points, and 20 further points from Part A of the BA Schedule."}],"Y2T2":[{"Code":"ENGL209","Description":"The Realist Novel","Pts":20,"Preqs":"You must have completed 20 100-level ENGL points, and 20 further points from Part A of the BA Schedule."},{"Code":"ENGL211","Description":"Science Fiction","Pts":20,"Preqs":"You must have completed 20 100-level ENGL points, and 20 further points from Part A of the BA Schedule."}],"Y3T1":[{"Code":"ENGL307","Description":"Troy and Troilus","Pts":20,"Preqs":"Complete 20 pts from ENGL 200:299, 20 further pts from ENGL 200:299, CREW 200:299, THEA 205, THEA 211  "},{"Code":"ENGL336","Description":"Literature of Ecology and Climate Change","Pts":20,"Preqs":"20 points from ENGL 200-299, 15 further points from BIOL 200:399, CREW 200:399,ENGL 200:299, GEOG 200I399, SCIS 200:399, THEA 205, THEA 211"}],"Y3T2":[{"Code":"ENGL312","Description":"Victorian Literature","Pts":20,"Preqs":"Complete 20 pts from ENGL 200:299, 20 further pts from ENGL 200:299, CREW 200:299, THEA 205, THEA 211 "},{"Code":"ENGL329","Description":"Special Topic: Gender and Literature","Pts":20,"Preqs":"You must complete 40 200-level points from (Part A of the BA Schedule, LCCM 200:299)."},{"Code":"ENGL331","Description":"New Zealand Literature","Pts":20,"Preqs":"Complete 20 pts from ENGL 200:299, 20 further pts from ENGL 200:299, CREW 200:299, THEA 205, THEA 211 "}],"Y8T1":[]},{"Code":"ENGR","Color":"#A4EFFF","Faculty":"ENGINEERING","Y1T1":[{"Code":"ENGR101","Description":" Engineering Technology","Pts":15,"Preqs":""},{"Code":"ENGR121","Description":"Engineering Mathematics Foundations","Pts":15,"Preqs":"16 AS credits NCEA Level 3 Mathematics (or equivalent) or MATH 132 "},{"Code":"ENGR141","Description":"Engineering Science","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"ENGR110","Description":"Engineering Design","Pts":15,"Preqs":"COMP 102 or 112, ENGR 101"},{"Code":"ENGR121","Description":"Engineering Mathematics Foundations","Pts":15,"Preqs":"16 AS credits NCEA Level 3 Mathematics (or equivalent) or MATH 132 "},{"Code":"ENGR122","Description":"Engineering Mathematics with Calculus","Pts":15,"Preqs":"ENGR 121 or MATH 141"},{"Code":"ENGR123","Description":"Engineering Mathematics with Logic and,Statistics","Pts":15,"Preqs":"ENGR 121"},{"Code":"ENGR142","Description":"Engineering Physics for Electronics and Computer,Systems","Pts":15,"Preqs":"either ENGR 141 and (ENGR 121 or MATH 141) or approved levels of achievement in NCEA Level 3 Physics and Calculus or equivalent"}],"Y2T1":[{"Code":"ENGR222","Description":"Computational Algebra and Calculus","Pts":15,"Preqs":"You need to take (ENGR 121, ENGR 122) or (MATH 142, MATH 151) before ENGR 222. "}],"Y2T2":[{"Code":"ENGR201","Description":"Engineering in Context","Pts":15,"Preqs":""}],"Y3T1":[{"Code":"ENGR301","Description":"Engineering Project Management 1","Pts":15,"Preqs":"Admission to Part 2 of the BE(Hons), ENGR 201 and 60 200-level pts from (CYBR, COMP, ECEN, NWEN, RESE, SWEN)"}],"Y3T2":[{"Code":"ENGR302","Description":"Engineering Project Management 2","Pts":15,"Preqs":"ENGR 301"}],"Y8T1":[]},{"Code":"ENSC","Color":"#A4FFC4","Faculty":"SCIENCE","Y1T1":[],"Y1T2":[],"Y2T1":[],"Y2T2":[],"Y3T1":[{"Code":"ENSC301","Description":"Topics in Environmental Science","Pts":20,"Preqs":"90 pts of 200-level study in approved subjects from the Science schedule. Corequisite: ENSC 302 or ENSC303, and admission to the Environmental Science major "}],"Y3T2":[{"Code":"ENSC302","Description":"Directed Individual Study","Pts":20,"Preqs":""}],"Y8T1":[]},{"Code":"ESCI","Color":"#A4FFFF","Faculty":"SCIENCE","Y1T1":[{"Code":"ESCI111","Description":"The Earth System: Understanding our Dynamic,Earth and Environment","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"ESCI112","Description":"Earth Science for a Changing Planet","Pts":15,"Preqs":""},{"Code":"ESCI132","Description":"Antarctica: Unfreezing the Continent","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"ESCI202","Description":"Sedimentology and Palaeontology","Pts":20,"Preqs":"ESCI 111, ESCI 112 15 MATH, PHYS, QUAN or STAT pts or approved equivalent."},{"Code":"ESCI203","Description":"Earth Structures and Deformation","Pts":20,"Preqs":"(ESCI 111, ESCI 112 15 MATHS, PHYS, QUAN or STAT pts or approved equivalent) or (ESCI 112 (or 111), MATH 142)"},{"Code":"ESCI241","Description":"Introductory Field Geology","Pts":10,"Preqs":"Prereq: (ESCI 111, ESCI 112 15 MATH/PHYS/QUAN/STAT pts) or (ESCI112 (or ESCI 111), MATH142)"}],"Y2T2":[{"Code":"ESCI204","Description":"Petrology and Microscopy","Pts":20,"Preqs":"ESCI 111, ESCI 112 15 MATHS, PHYS, QUAN or STAT pts or approved equivalent."}],"Y3T1":[{"Code":"ESCI301","Description":" Global Change: Earth Processes and Histor","Pts":20,"Preqs":"ESCI 202 15 MATH, PHYS, QUAN, STAT pts or an approved equivalent 15 further points from (CHEM 113-115, MATH 141-177, PHYS 114-115, STAT 193)Corequisite: ESCI 341 or GEOG 323 "},{"Code":"ESCI305","Description":" Environmental and Applied Geophysics","Pts":20,"Preqs":"ESCI 112 or 203; 15 MATH, PHYS, QUAN, or STAT pts or an approved equivalent; 15 further pts from (CHEM 113–115, MATH 141–177, PHYS 142 or 145, SPCE 201, STAT 193)"},{"Code":"ESCI341","Description":"Sedimentary Field Geology","Pts":10,"Preqs":"ESCI 204, ESCI 241 15 MATH, PHYS,QUAN, STAT pts or an approved equivalent 15 further points from (CHEM 113-115, MATH 141-177, PHYS 142-145, STAT 193)"},{"Code":"ESCI342","Description":"Structural Field Geology","Pts":10,"Preqs":"ESCI 202, ESCI 203, ESCI 241 15 MATH, PHYS,QUAN, STAT pts or an approved equivalent 15 further points from (CHEM 113-115, MATH 141-177, PHYS 142-145, STAT 193)"},{"Code":"ESCI343","Description":"Volcanic Field Geology","Pts":10,"Preqs":"ESCI 204, ESCI 241 15 MATH, PHYS,QUAN, STAT pts or an approved equivalent 15 further points from (CHEM 113-115, MATH 141-177, PHYS 142-145, STAT 193)"},{"Code":"ESCI344","Description":"Field Geophysics","Pts":10,"Preqs":"ESCI 112 or ESCI 203 15 MATH, PHYS,QUAN, STAT pts or an approved equivalent 15 further points from (CHEM 113-115, MATH 141-177, PHYS 142-145, STAT 193) Corequisite: ESCI 305"}],"Y3T2":[{"Code":"ESCI302","Description":"Tectonics and Structural Geology","Pts":20,"Preqs":"ESCI 203, ESCI 341, ESCI 342 15 MATH, PHYS, QUAN, STAT pts or an approved equivalent 15 further points from (CHEM 113-115, MATH 141-177, PHYS 142-145, STAT 193)"},{"Code":"ESCI303","Description":"Petrology and Geochemistry","Pts":20,"Preqs":"ESCI 204 15 MATH, PHYS, QUAN, STAT pts or an approved equivalent 15 further points from (CHEM 113-115, MATH 141-177, PHYS 142-145, STAT 193)"}],"Y8T1":[]},{"Code":"FADN","Color":"#A4FFEF","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"FADN201","Description":"Fashion Design Studio II / Taupuni,Waihanga K?kahu II","Pts":15,"Preqs":"DSDN 153 acceptance into the FADN major"}],"Y2T2":[{"Code":"FADN202","Description":"Fashion Design Studio III /,Taupuni Waihanga K?kahu III","Pts":15,"Preqs":"75 points including FADN 201"},{"Code":"FADN242","Description":"Generative Textiles /,Ng? Papanga ?-Waihanga","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules or permission of Head of School"}],"Y3T1":[{"Code":"FADN301","Description":"Fashion Design Studio IV / Taupuni,Waihanga K?kahu IV","Pts":15,"Preqs":"60 200-level points including FADN 202"}],"Y3T2":[{"Code":"FADN321","Description":"Costume Design","Pts":15,"Preqs":"60 200-level points including 30 pts from the BDI or BAS schedules or permission of Head of School"},{"Code":"FADN390","Description":"Fashion Design Technology Capstone","Pts":30,"Preqs":"60 200-level points including FADN 301"}],"Y8T1":[]},{"Code":"FCOM","Color":"#A4FFA4","Faculty":"COMMERCE","Y1T1":[{"Code":"FCOM111","Description":"Government, Law and Business","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"FCOM111","Description":"Government, Law and Business","Pts":15,"Preqs":""}],"Y2T1":[],"Y2T2":[],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"FHSS","Color":"#EDFFA4","Faculty":"HSS","Y1T1":[{"Code":"FHSS103","Description":"Great Ideas","Pts":20,"Preqs":""},{"Code":"FHSS107","Description":"Mental Health and Disorder: Inter-disciplinary,Perspectives","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"FHSS103","Description":"Great Ideas","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"FHSS207","Description":"The Future of Work","Pts":20,"Preqs":"60 points"},{"Code":"FHSS211","Description":"Directed Individual Study","Pts":15,"Preqs":""}],"Y2T2":[],"Y3T1":[],"Y3T2":[{"Code":"FHSS302","Description":"FHSS Internship","Pts":20,"Preqs":"120 pts, including 60 200-level pts, and including 60 points from Part A of the BA Schedule, B+ average"},{"Code":"FHSS311","Description":"Directed Individual Study","Pts":20,"Preqs":""}],"Y8T1":[]},{"Code":"FILM","Color":"#DAFFA4","Faculty":"HSS","Y1T1":[{"Code":"FILM101","Description":"Introduction to Film Analysis","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"FILM102","Description":"Film Movements and Contexts","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"FILM204","Description":"Documentary Histories","Pts":20,"Preqs":"FILM 101 or FILM 102 (or FILM 231)"},{"Code":"FILM205","Description":"Film Genre","Pts":20,"Preqs":"FILM 101 or FILM 102 (or FILM 231)"}],"Y2T2":[{"Code":"FILM203","Description":"Film Cultures A","Pts":20,"Preqs":"FILM 101 or FILM 102 (or FILM 231)"},{"Code":"FILM210","Description":"Introduction to Film Production","Pts":20,"Preqs":"FILM 101 or FILM 102 (or FILM 231)"}],"Y3T1":[{"Code":"FILM302","Description":"Cinema and Representation","Pts":20,"Preqs":"40 200-level FILM pts or 40 PASI points"},{"Code":"FILM304","Description":"Film Cultures B","Pts":20,"Preqs":"40 200-level FILM points"},{"Code":"FILM310","Description":"Short Film Production","Pts":30,"Preqs":"40 200-level FILM points"}],"Y3T2":[{"Code":"FILM311","Description":"Documentary Film Production","Pts":30,"Preqs":"40 200-level FILM points"},{"Code":"FILM320","Description":"Special Topic: Suggestive and,Psychological Horror","Pts":20,"Preqs":"40 200-level FILM points"}],"Y8T1":[]},{"Code":"FINA","Color":"#A4FFDF","Faculty":"COMMERCE","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"FINA201","Description":"Introduction to Corporate Finance","Pts":15,"Preqs":"ECON 130, ECON 141 (or ECON 140), QUAN 102 (or MATH 177 or STAT 193) QUAN 111 (or MATH 141/142, 151) "},{"Code":"FINA211","Description":"Corporate Finance for Accounting and Business","Pts":15,"Preqs":"ECON 130, QUAN 102 (or MATH 177 or STAT 193)"}],"Y2T2":[{"Code":"FINA202","Description":"Introduction to Investments","Pts":15,"Preqs":"ECON 130, ECON 141 (or ECON 140), QUAN 102 (or MATH 177 or STAT 193) QUAN 111 (or MATH 141/142, 151) "}],"Y3T1":[{"Code":"FINA301","Description":"Corporate Finance","Pts":15,"Preqs":"FINA 201 and FINA 202"},{"Code":"FINA306","Description":"Financial Economics","Pts":15,"Preqs":"B or better in ECON 201, QUAN 102 (or MATH 177 or STAT 193) QUAN 111 (or MATH 141/142, 151) "},{"Code":"FINA351","Description":"Special Topic : New Zealand Financial System","Pts":15,"Preqs":"FINA 202"}],"Y3T2":[{"Code":"FINA303","Description":"Derivatives","Pts":15,"Preqs":"FINA 201 and FINA 202"},{"Code":"FINA304","Description":"Financial Econometrics","Pts":15,"Preqs":"FINA 202, QUAN 201, 203 or MATH 277"},{"Code":"FINA305","Description":"Investments","Pts":15,"Preqs":"FINA 201 and FINA 202"},{"Code":"FINA350","Description":"Special Topic: Behavioural Finance","Pts":15,"Preqs":"FINA 201 and FINA 202"}],"Y8T1":[]},{"Code":"FREN","Color":"#C3FFA4","Faculty":"HSS","Y1T1":[{"Code":"FREN101","Description":"French Language 1A","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"FREN102","Description":"French Language 1B","Pts":20,"Preqs":"FREN 101 or at least 14 credits at NCEA Level 2 or NCEA Level 3 French, or equivalent, as determined by the academic staff teaching French"}],"Y2T1":[{"Code":"FREN201","Description":"French Language 2A","Pts":20,"Preqs":"FREN 102 or 14 credits at NCEA Level 3 French with merit or excellence, or equivalent,as determined by the academic staff teaching French "}],"Y2T2":[{"Code":"FREN202","Description":"French Language 2B","Pts":20,"Preqs":"FREN 201 or 20 credits at NCEA Level 3 French with merit or excellence, or equivalent, as determined by the academic staff teaching French"}],"Y3T1":[{"Code":"FREN301","Description":"French Language 3A","Pts":20,"Preqs":"FREN 202"}],"Y3T2":[{"Code":"FREN302","Description":"French Language 3B","Pts":20,"Preqs":"FREN 301"},{"Code":"FREN331","Description":"19th & 20th-Century French Literature","Pts":20,"Preqs":"FREN 202, or equivalent, as determined by the academic staff teaching French"}],"Y8T1":[]},{"Code":"GEOG","Color":"#A4FFFF","Faculty":"SCIENCE","Y1T1":[{"Code":"GEOG114","Description":"Environment and Resources: the Foundations","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"GEOG112","Description":"Introduction to Human Geography and Development,Studies","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"GEOG212","Description":"Worlds of Development","Pts":20,"Preqs":"GEOG 112 or approved course"},{"Code":"GEOG222","Description":"Ecology and Environment","Pts":20,"Preqs":"STAT 193, and 30 points from (BIOL 111, BIOL 113, BIOL114, BIOL 132, ENVI/GEOG 114, ESCI/GEOG 111, ESCI 112)"},{"Code":"GEOG224","Description":"Geomorphology","Pts":20,"Preqs":"ESCI/GEOG 111, 15 pts from (MATH 132-177, PHYS 131, STAT 193, STAT 292)"}],"Y2T2":[{"Code":"GEOG214","Description":"Environment and Resources: New Zealand,Perspectives","Pts":20,"Preqs":"ENVI/GEOG 114 or 15 approved pts "},{"Code":"GEOG215","Description":"Introduction to Geographic Information Systems,(GIS) and Science","Pts":20,"Preqs":"60 100-level points"},{"Code":"GEOG217","Description":"Human Geography: Approaching Our World","Pts":20,"Preqs":"GEOG 112 ENVI/GEOG 114 or 15 approved 100-level pts "},{"Code":"GEOG220","Description":"Hydrology and Climate","Pts":20,"Preqs":"ENVI/GEOG 114, ESCI/GEOG 111, 15 pts from (MATH 132-177, PHYS 131, STAT 193 or equivalent)"}],"Y3T1":[{"Code":"GEOG316","Description":"Geographies of Globalisation","Pts":20,"Preqs":"(GEOG 212, 20 further 200-level GEOG pts) or 40 approved 200-level pts "},{"Code":"GEOG318","Description":"Quaternary Environmental Change","Pts":20,"Preqs":"BIOL/GEOG 222, one of (GEOG 220, GEOG 224)"},{"Code":"GEOG319","Description":"Applied Geomorphology","Pts":20,"Preqs":"GEOG 224, one of (GEOG 220, BIOL/GEOG 222), 15 pts from MATH 132-177, PHYS 131 (or STAT 193 or equivalent)"},{"Code":"GEOG322","Description":"Islands and Oceans: People, Power and Place","Pts":20,"Preqs":"40 200-level points from ANTH, DEVE, ENVI, GEOG, MAOR, PASI or POLS"},{"Code":"GEOG324","Description":"Research Design","Pts":10,"Preqs":"40 200-level GEOG pts or 40 approved 200-level pts "}],"Y3T2":[{"Code":"GEOG312","Description":"Race, Gender and Development","Pts":20,"Preqs":"(GEOG 212, 20 further 200-level GEOG pts) or 40 approved 200-level pts "},{"Code":"GEOG314","Description":"Advanced Environment and Resources: Global,Issues","Pts":20,"Preqs":"ENVI 214 or GEOG 214"},{"Code":"GEOG315","Description":"Advanced Geographic Information Systems (GIS)","Pts":20,"Preqs":"GEOG 215, 20 further approved 200-level pts"},{"Code":"GEOG321","Description":"Ice and Climate","Pts":20,"Preqs":"GEOG 220, one of (GEOG/BIOL222), GEOG 223, GEOG 224), 15 points from MATH 141-177, PHYS 131 (or STAT 193 or equivalent)"},{"Code":"GEOG325","Description":"Field Methods","Pts":10,"Preqs":"GEOG 324"}],"Y8T1":[]},{"Code":"GERM","Color":"#B0FFA4","Faculty":"HSS","Y1T1":[{"Code":"GERM101","Description":"Introduction to the German Language","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"GERM102","Description":"Elementary German","Pts":20,"Preqs":"GERM 101 or GERM 103 or equivalent"}],"Y2T1":[{"Code":"GERM201","Description":"German Language 2A","Pts":20,"Preqs":"GERM 102 or GERM 104 or NCEA Level 3 German or equivalent"}],"Y2T2":[{"Code":"GERM202","Description":"German Language 2B","Pts":20,"Preqs":"GERM 201 or GERM 217"}],"Y3T1":[{"Code":"GERM301","Description":"German Language 3A","Pts":20,"Preqs":"GERM 202 or GERM 218"}],"Y3T2":[{"Code":"GERM302","Description":"German Language 3B","Pts":20,"Preqs":"GERM 202 or GERM 218"},{"Code":"GERM314","Description":"Topics in German Culture","Pts":20,"Preqs":"40 points from GERM 200-299"}],"Y8T1":[]},{"Code":"GREE","Color":"#A4FFAD","Faculty":"HSS","Y1T1":[{"Code":"GREE101","Description":"Introduction to Greek","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"GREE102","Description":"Elementary Greek","Pts":20,"Preqs":"One class in GREE 101 OR 112"}],"Y2T1":[{"Code":"GREE201","Description":"Intermediate Greek","Pts":20,"Preqs":"GREE 102 OR 113"}],"Y2T2":[{"Code":"GREE202","Description":"Greek Literature","Pts":20,"Preqs":"GREE 201 or 215"}],"Y3T1":[{"Code":"GREE301","Description":"Advanced Greek Literature A","Pts":20,"Preqs":"GREE 202 or 216"}],"Y3T2":[{"Code":"GREE302","Description":"Advanced Greek Literature B","Pts":20,"Preqs":"GREE 202 or GREE 216"}],"Y8T1":[]},{"Code":"HIST","Color":"#A4FFC0","Faculty":"HSS","Y1T1":[{"Code":"HIST112","Description":"Islands and Peoples: Aotearoa New Zealand in,World History","Pts":20,"Preqs":""},{"Code":"HIST117","Description":"Revolutions, Empires and Peoples: The Americas,,1600-1865","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"HIST113","Description":"Between the Wars:,The World Re-Made, 1919-1939","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"HIST203","Description":"M?ori Historical Methods: Whakapapa,,M?teatea, Manuscripts & Treaty Settlements","Pts":20,"Preqs":"40 points from HIST, MAOR, ANTH, EDUC, EPOL, EPSY, KURA courses"},{"Code":"HIST208","Description":"Mobilising the Masses: Propaganda in Europe,in the Age of Catastrophe, 1914-1945","Pts":20,"Preqs":"Complete 40 pts from (HIST 100-199, CLAS 104, CLAS 105)"},{"Code":"HIST249","Description":"New Zealand Political History","Pts":20,"Preqs":"40 points from (HIST 100-199, CLAS 104, CLAS 105, POLS 111, POLS 112, POLS 114)"}],"Y2T2":[{"Code":"HIST219","Description":"Pacific Histories: Environments, Peoples,and Empires","Pts":20,"Preqs":"Complete 40 pts from (HIST 100-199, CLAS 104, CLAS 105)"},{"Code":"HIST222","Description":"Australian History","Pts":20,"Preqs":"Complete 40 pts from (HIST 100-199, CLAS 104, CLAS 105)"},{"Code":"HIST245","Description":"Peoples of the Soviet Empire","Pts":20,"Preqs":"Complete 40 pts from (HIST 100-199, CLAS 104, CLAS 105)"}],"Y3T1":[{"Code":"HIST301","Description":"Early Modern Science:,Possessing Nature's Secrets","Pts":20,"Preqs":"40 pts from HIST 200-299 (or 20 pts from HIST 200-299 and one of CLAS 207 or CLAS 208)"},{"Code":"HIST316","Description":"New Zealand Social History","Pts":20,"Preqs":"40 pts from HIST 200-299 (or 20 pts from HIST 200-299 and one of CLAS 207 or CLAS 208)"},{"Code":"HIST334","Description":"World War One: Social and Cultural,Perspectives on 1914 - 1918","Pts":20,"Preqs":"40 pts from HIST 200-299 (or 20 pts from HIST 200-299 and one of CLAS 207 or CLAS 208)"}],"Y3T2":[{"Code":"HIST312","Description":"Working Lives in New Zealand","Pts":20,"Preqs":"40 pts from HIST 200-299 (or 20 pts from HIST 200-299 and one of CLAS 207 or CLAS 208)"},{"Code":"HIST321","Description":"International History: The Cold War World,,1945-1991.","Pts":20,"Preqs":"40 pts from HIST 200-299 (or 20 pts from HIST 200-299 and one of CLAS 207 or CLAS 208)"},{"Code":"HIST331","Description":"The Transatlantic Slave Trade","Pts":20,"Preqs":"40 pts from HIST 200-299 (or 20 pts from HIST 200-299 and one of CLAS 207 or CLAS 208)"}],"Y8T1":[]},{"Code":"HLWB","Color":"#FFB2A4","Faculty":"HEALTH","Y1T1":[{"Code":"HLWB101","Description":"Introduction to Health and Wellbeing","Pts":15,"Preqs":""},{"Code":"HLWB102","Description":"Improving Mental and Physical Health in,Communities","Pts":15,"Preqs":""},{"Code":"HLWB105","Description":"Introduction to Health Psychology","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"HLWB103","Description":"Introduction to Human Biology for Health","Pts":15,"Preqs":""},{"Code":"HLWB104","Description":"Introduction to Health Policy and Services","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"HLWB201","Description":"Global Health and Wellbeing","Pts":15,"Preqs":"30 pts from HLWB 101-110"},{"Code":"HLWB203","Description":"Health Evaluation and Epidemiology","Pts":15,"Preqs":"STAT 193 OR QUAN 102 30 pts from HLWB 101-110"},{"Code":"HLWB205","Description":"Theory and Research in Health Psychology","Pts":15,"Preqs":"HLWB 105, PSYC 121 or 122"},{"Code":"HLWB219","Description":"Directed Individual Study","Pts":15,"Preqs":""}],"Y2T2":[{"Code":"HLWB202","Description":"Health and Wellbeing in Aotearoa New Zealand","Pts":15,"Preqs":"30 pts from HLWB 101-110"},{"Code":"HLWB204","Description":"Advanced Health Policy and Services","Pts":15,"Preqs":"30 pts from HLWB 101-110"},{"Code":"HLWB206","Description":"Foundations of Health Promotion","Pts":15,"Preqs":"30 pts from HLWB 101-110"}],"Y3T1":[{"Code":"HLWB304","Description":"Contemporary Issues in Health and Social,Services","Pts":15,"Preqs":"HLWB 201, 202"},{"Code":"HLWB305","Description":"Health Psychology in Action","Pts":15,"Preqs":"HLWB 205 30 pts from PSYC 200-level"},{"Code":"HLWB306","Description":"Health Promotion Practice","Pts":15,"Preqs":"HLWB 201, 202, 206"},{"Code":"HLWB311","Description":"Pacific Health within the Aotearoa New Zealand,context","Pts":15,"Preqs":"30 200-level pts from EDUC, HLWB, MAOR, PSYC, PUBL, or SOSC or by permission of the course coordinator"}],"Y3T2":[{"Code":"HLWB301","Description":"Research and Enquiry in Health","Pts":15,"Preqs":"HLWB 201, HLWB 202, HLWB 203 or PSYC 232"},{"Code":"HLWB302","Description":"Health Internshi","Pts":15,"Preqs":"HLWB 201, 202 Grade B or higher at 200-level Permission of SoH Selection Committee"},{"Code":"HLWB303","Description":"Advanced Health Statistics and Epidemiology","Pts":15,"Preqs":"HLWB 201, 202, 206"},{"Code":"HLWB310","Description":"Hauora M?ori - M?ori Health Developmen","Pts":15,"Preqs":"30 200-level pts from EDUC, HLWB, MAOR, PSYC, PUBL, or SOSC or by permission of the course coordinator"},{"Code":"HLWB312","Description":"Integrated Care","Pts":15,"Preqs":"HLWB 201, 202"}],"Y8T1":[]},{"Code":"HRER","Color":"#A4FFFF","Faculty":"COMMERCE","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"HRER201","Description":"Managing People and Work","Pts":15,"Preqs":"MGMT 101 or 30 pts from the BA, BCom Schedules"},{"Code":"HRER207","Description":"The Future of Work","Pts":15,"Preqs":"60 points"}],"Y2T2":[],"Y3T1":[{"Code":"HRER301","Description":"Workplace Wellbeing","Pts":15,"Preqs":"30 200 level pts"},{"Code":"HRER302","Description":"Negotiation and Conflict Management,in Organisations","Pts":15,"Preqs":"30 200 level pts"},{"Code":"HRER304","Description":"Issues in Work and Employment","Pts":15,"Preqs":"HRER 201 or equivalent"}],"Y3T2":[{"Code":"HRER303","Description":"Managing People in Global Markets","Pts":15,"Preqs":"30 200 level pts"},{"Code":"HRER305","Description":"Applied HRM: The Individual at Work","Pts":15,"Preqs":"HRER 201 or equivalent"}],"Y8T1":[]},{"Code":"IBUS","Color":"#A4FFFF","Faculty":"COMMERCE","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"IBUS201","Description":"Principles of International Business","Pts":15,"Preqs":"ECON 130 or 30 pts from the BCom, BTM or BA Schedules"},{"Code":"IBUS212","Description":" International Management.","Pts":15,"Preqs":"MGMT 101 or 30 pts from the BCom, BA or BC Schedules"}],"Y2T2":[{"Code":"IBUS205","Description":"SME Internationalisation","Pts":15,"Preqs":"30 pts from the BCom, BTM or BA Schedules"},{"Code":"IBUS212","Description":" International Management.","Pts":15,"Preqs":"MGMT 101 or 30 pts from the BCom, BA or BC Schedules"}],"Y3T1":[{"Code":"IBUS305","Description":"Dynamic Strategy and Structure in,International Business","Pts":15,"Preqs":"IBUS 201 or IBUS 212 or MGMT 205"},{"Code":"IBUS308","Description":"Special Topic: Contemporary Issues in,International Business","Pts":15,"Preqs":"IBUS 201 and IBUS 212"}],"Y3T2":[{"Code":"IBUS305","Description":"Dynamic Strategy and Structure in,International Business","Pts":15,"Preqs":"IBUS 201 or IBUS 212 or MGMT 205"},{"Code":"IBUS312","Description":" Managing and Communicating Across Cultures","Pts":15,"Preqs":"IBUS 201 or IBUS 212"}],"Y8T1":[]},{"Code":"ICOM","Color":"#A4FFD8","Faculty":"HSS","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"ICOM201","Description":"Approaches to Intercultural Communication","Pts":20,"Preqs":"ICOM 101 or 20 points from ANTH, ASIA, CHIN, CLAS, FHSS, FREN, GERM, GREE, ITAL, JAPA, LANG, LATI, MAOR, NZSL, PASI, SAMO, SPAN"}],"Y2T2":[{"Code":"ICOM202","Description":"Intercultural Communication,and Global Citizenship","Pts":20,"Preqs":"20 points from ANTH, ASIA, CHIN, CLAS, FHSS, FREN, GERM, GREE, ITAL, JAPA, LANG, LATI, MAOR, NZSL, PASI, SAMO, SPAN"}],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"INDN","Color":"#A4FFFF","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"INDN211","Description":"Communicative Products /,Ng? Hua o te Whakak?rero","Pts":15,"Preqs":"Acceptance into the INDN major"},{"Code":"INDN241","Description":"Sustainable Mediums /,Ng? Huarahi Toit?tanga","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"},{"Code":"INDN252","Description":"Physiology Codes /,Ng? Waehere ?-M?tai Whaiaroaro","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"}],"Y2T2":[{"Code":"INDN204","Description":"Materialised Codes /,Ng? Waehere i Puta","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"},{"Code":"INDN212","Description":"Responsive Products /,Ng? Hua o te Whakautu","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"}],"Y3T1":[{"Code":"INDN311","Description":"Publishable Products /,Ng? Hua Hei Whakaputanga","Pts":15,"Preqs":"60 200-level points including 30 from the BDI or BAS Schedules"},{"Code":"INDN321","Description":"Interactive Products /,Ng? Hua Hei P?hekohekotanga","Pts":15,"Preqs":"60 200-level points including either 30 from the BDI or BAS schedules or one of (MARK 203, COMP 313, EEEN 302 (or ECEN 302), PSYC 232 (or PSYC 325)"},{"Code":"INDN341","Description":"Innovative Mediums /,Ng? Huarahi Hei Auahatanga","Pts":15,"Preqs":"60 200-level points including 30 from the BDI or BAS Schedules"},{"Code":"INDN381","Description":"Directed Individual Study /,Ako Arahanga Takitahi","Pts":15,"Preqs":"40 200-level points from the BDI Schedule"}],"Y3T2":[{"Code":"INDN332","Description":"Future Under Negotiation /,Te Matapaki i te Anamata","Pts":15,"Preqs":"60 200-level points including 30 from the BDI or BAS Schedules or permission of Head of School"},{"Code":"INDN342","Description":"Fabrication Codes /,Ng? Waehere Hei Waihanga","Pts":15,"Preqs":"60 200-level points including 30 from the BDI or BAS Schedules"},{"Code":"INDN381","Description":"Directed Individual Study /,Ako Arahanga Takitahi","Pts":15,"Preqs":"40 200-level points from the BDI Schedule"},{"Code":"INDN390","Description":"Industrial Design Capstone: Branded Products /,Whakatinana ?-Wheako Hoahoa ?-Ahumahi: Ng? Hua i Waituhia","Pts":30,"Preqs":"60 200-level points including INDN 211"}],"Y8T1":[]},{"Code":"INFO","Color":"#A4EBFF","Faculty":"COMMERCE","Y1T1":[{"Code":"INFO101","Description":"Introduction to Information Systems","Pts":15,"Preqs":""},{"Code":"INFO151","Description":"Databases","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"INFO101","Description":"Introduction to Information Systems","Pts":15,"Preqs":""},{"Code":"INFO141","Description":"Systems Analysis","Pts":15,"Preqs":""},{"Code":"INFO151","Description":"Databases","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"INFO231","Description":"Management of IT Projects","Pts":15,"Preqs":"INFO 101 or INFO 141 or INFO 151 or 15 COMP pts"},{"Code":"INFO234","Description":"Business Process Design","Pts":15,"Preqs":"INFO 101 or INFO 141 or INFO 151"},{"Code":"INFO246","Description":"User Experience Design","Pts":15,"Preqs":"INFO 101 or INFO 141 or INFO 151"}],"Y2T2":[{"Code":"INFO226","Description":"Application Development","Pts":15,"Preqs":"INFO 151"},{"Code":"INFO264","Description":"Business Analytics","Pts":15,"Preqs":"INFO 151"}],"Y3T1":[{"Code":"INFO336","Description":"Social Responsibility in a Digital World","Pts":15,"Preqs":"15 200-level INFO or COMP/NWEN/SWEN points"},{"Code":"INFO386","Description":"Information Technology Architecture","Pts":15,"Preqs":"30 200-level INFO points"},{"Code":"INFO388","Description":"Enterprise Security","Pts":15,"Preqs":"30 200-level INFO points"},{"Code":"INFO391","Description":"Research Paper in Information Systems","Pts":15,"Preqs":"Permission of Head of School, 30 300-level INFO points"}],"Y3T2":[{"Code":"INFO320","Description":"Project in Information Systems","Pts":15,"Preqs":"B+ or better in any two of INFO 226, INFO 231, INFO 234, INFO 246, INFO 264 15 INFO 300-level points"},{"Code":"INFO354","Description":"Digital Strategy","Pts":15,"Preqs":"30 200-level INFO points"},{"Code":"INFO376","Description":"Enterprise Architecture","Pts":15,"Preqs":"30 200-level INFO points"},{"Code":"INFO382","Description":"Directed Individual Study","Pts":15,"Preqs":""},{"Code":"INFO391","Description":"Research Paper in Information Systems","Pts":15,"Preqs":"Permission of Head of School, 30 300-level INFO points"}],"Y8T1":[]},{"Code":"INTA","Color":"#A4FAFF","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"INTA211","Description":"Interior Architecture Studio I / Te,Taupuni Mahi Whakaniko ki R? Whare I","Pts":15,"Preqs":"BAS Part 1 "},{"Code":"INTA261","Description":"Drawing and Modelling for Interior Architecture,/ Te Whakatinanatanga o ng? Mahi Whakaniko Whare","Pts":15,"Preqs":"SARC 161, SARC 162 "}],"Y2T2":[{"Code":"INTA212","Description":"Interior Architecture Studio II / Te,Taupuni Mahi Whakaniko ki R? Whare II","Pts":30,"Preqs":"INTA 211 and SARC 223"},{"Code":"INTA251","Description":"History of Interior Architecture / Ng? Mahi Tuku,Iho","Pts":15,"Preqs":"SARC 151 "}],"Y3T1":[{"Code":"INTA311","Description":"Interior Architecture Studio III / Te Taupuni,Mahi Whakaniko ki R? Whare III","Pts":15,"Preqs":"INTA 212 "}],"Y3T2":[{"Code":"INTA312","Description":"Interior Architecture Studio Capstone / Te,Taupuni Mahi T?tohu Whakaniko ki R? Whare","Pts":30,"Preqs":"INTA 311, SARC 221"},{"Code":"INTA321","Description":"Interior Fit-Out Technologies / Te Mahi,Waihanga Rauemi","Pts":15,"Preqs":"SARC 221"}],"Y8T1":[]},{"Code":"INTP","Color":"#A4FFEB","Faculty":"HSS","Y1T1":[{"Code":"INTP115","Description":"Introduction to Security Studies","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"INTP113","Description":"Introduction to International Relations","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"INTP211","Description":"Special Topic: International Politics of China","Pts":20,"Preqs":""},{"Code":"INTP250","Description":"Cyber Power in International Relations","Pts":20,"Preqs":"40 100-level INTP or POLS points"}],"Y2T2":[{"Code":"INTP244","Description":"New Zealand in the World","Pts":20,"Preqs":"40 100-level INTP or POLS points"},{"Code":"INTP247","Description":"International Relations: Wealth and World,Affairs","Pts":20,"Preqs":"40 100-level INTP or POLS points"}],"Y3T1":[{"Code":"INTP354","Description":"International Relations of East Asia","Pts":20,"Preqs":"40 200-level INTP or POLS points"},{"Code":"INTP363","Description":"Human Rights","Pts":20,"Preqs":"40 200-level INTP or POLS points"},{"Code":"INTP379","Description":"The Rise and Fall of the Great Powers","Pts":20,"Preqs":"40 200-level INTP or POLS points"}],"Y3T2":[{"Code":"INTP302","Description":"International Politics of the Environment","Pts":20,"Preqs":"40 200-level INTP or POLS points"},{"Code":"INTP360","Description":"Special Topic: US Foreign Policy","Pts":20,"Preqs":""}],"Y8T1":[]},{"Code":"ITAL","Color":"#A4FFFF","Faculty":"HSS","Y1T1":[{"Code":"ITAL101","Description":"Introduction to Italian Language and Culture","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"ITAL102","Description":"Elementary Italian Language and Culture","Pts":20,"Preqs":"ITAL 101 or ITAL 114, or prior knowledge"}],"Y2T1":[{"Code":"ITAL201","Description":"Italian Language 2A","Pts":20,"Preqs":"ITAL 102 or ITAL 115"}],"Y2T2":[],"Y3T1":[{"Code":"ITAL301","Description":"Italian Language 3A","Pts":20,"Preqs":"ITAL 202 or ITAL 216"}],"Y3T2":[{"Code":"ITAL302","Description":"Italian Language 3B","Pts":20,"Preqs":"ITAL 301 or ITAL 315"},{"Code":"ITAL306","Description":"Dante's Inferno","Pts":20,"Preqs":"40 points at 200-level from the BA Schedule"}],"Y8T1":[]},{"Code":"IXXN","Color":"#A4A9FF","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"IXXN201","Description":"Design for Experience I /,Hoahoa kia Whai Wheako I","Pts":15,"Preqs":"Acceptance into the IXXN major"}],"Y2T2":[{"Code":"IXXN211","Description":"Design Psychology I /,M?tai Hinengaro ?-Hoahoa I","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules or permission of Head of School"},{"Code":"IXXN221","Description":"Web Design I /,Hoahoa ?-Ipurangi I","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules or permission of Head of School"}],"Y3T1":[{"Code":"IXXN302","Description":"Design for Experience II /,Hoahoa kia Whai Wheako II","Pts":15,"Preqs":"60 200-level points including IXXN 201"},{"Code":"IXXN321","Description":"Web Design II /,Hoahoa ?-Ipurangi II","Pts":15,"Preqs":"60 200-level points including IXXN 221"}],"Y3T2":[{"Code":"IXXN390","Description":"Interaction Design Capstone /,Whakatinana ?-Wheako Hoahoa ?-P?hekoheko","Pts":30,"Preqs":"60 200-level points including IXXN 302"}],"Y8T1":[]},{"Code":"JAPA","Color":"#A4FFFF","Faculty":"HSS","Y1T1":[{"Code":"JAPA101","Description":"Introduction to the Japanese Language","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"JAPA102","Description":"Elementary Japanese","Pts":20,"Preqs":"JAPA 101 or JAPA 111 or NCEA Level 2 Japanese (orequivalent)"}],"Y2T1":[{"Code":"JAPA201","Description":"Japanese Language 2A","Pts":20,"Preqs":"JAPA 102 or JAPA 112 or 14 Japanese credits NCEA Level 3"},{"Code":"JAPA213","Description":"Japanese Culture through Literature and Film","Pts":20,"Preqs":"40 points"}],"Y2T2":[{"Code":"JAPA202","Description":"Japanese Language 2B","Pts":20,"Preqs":"JAPA 115 or JAPA 201 or JAPA 204"}],"Y3T1":[{"Code":"JAPA301","Description":"Japanese Language 3A","Pts":20,"Preqs":"JAPA 202 or JAPA 205"}],"Y3T2":[{"Code":"JAPA302","Description":"Japanese Language 3B","Pts":20,"Preqs":"JAPA 301 or JAPA 304"},{"Code":"JAPA322","Description":"Readings in Japanese Culture, Society,and History","Pts":20,"Preqs":"JAPA 301 or JAPA 304Corequisite: JAPA 302 "}],"Y8T1":[]},{"Code":"LALS","Color":"#A4FFFF","Faculty":"HSS","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"LALS201","Description":"Understanding Language Learning,and Teaching","Pts":20,"Preqs":"40 points"}],"Y2T2":[],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"LAND","Color":"#EDA4FF","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"LAND211","Description":"Landscape Architecture Design Studio I / Te,Taupuni Mahi Pokepoke, Whakar?kei hoki i a Papa-t??-nuku I","Pts":15,"Preqs":"BAS Part 1 "},{"Code":"LAND221","Description":"Landscape Architecture Sites and Systems / Ng?,Tikanga me ng? Tukanga Pokepoke, Whakar?kei hoki i a,Papa-t??-nuku","Pts":15,"Preqs":"SARC 121"},{"Code":"LAND251","Description":"Landscape Architecture History and Theory / Te,T?tari K?rero i ng? Mahi Pokepoke, Whakar?kei hoki i a,Papa-t??-nuku","Pts":15,"Preqs":"SARC 151"},{"Code":"LAND261","Description":"Landscape Architecture Communication / Te,Whakakakau i ng? Mahi Pokepoke, Whakar?kei hoki i a,Papa-t??-nuku","Pts":15,"Preqs":"SARC 162"}],"Y2T2":[{"Code":"LAND212","Description":"Landscape Architecture Design Studio II / Ng?,Mahi Whakar?kei me ng? Mahi Pokepoke i a Papa-t??-nuku II","Pts":30,"Preqs":"LAND 211. Corequisite: LAND 222"},{"Code":"LAND222","Description":"Landscape Architecture Technology:,Landform Manipulation and Construction / Ng?,Hangarau Pokepoke, Whakar?kei hoki i a,Papa-t??-nuku: Te Auaha","Pts":15,"Preqs":"LAND 221"}],"Y3T1":[{"Code":"LAND311","Description":"Landscape Architecture Design Studio III / Te,Taupuni Mahi Pokepoke, Whakar?kei hoki i a Papa-t??-nuku,III","Pts":15,"Preqs":"LAND 212"}],"Y3T2":[{"Code":"LAND312","Description":"Landscape Architecture Design Studio IV / Te,Taupuni Mahi Pokepoke, Whakar?kei hoki i a Papa-t??-nuku IV","Pts":30,"Preqs":"LAND 311. Corequisite: LAND 321"},{"Code":"LAND321","Description":"Landscape Architecture Technology: Structures,and Assembly / Ng? Hangarau Pokepoke, Whakar?kei hoki,i a Papa-t??-nuku: Te Hangahanga","Pts":15,"Preqs":"LAND 222"}],"Y8T1":[]},{"Code":"LANG","Color":"#A4FFFF","Faculty":"HSS","Y1T1":[],"Y1T2":[{"Code":"LANG101","Description":"Shaping the World: Cultural,Forces in Europe and Latin America","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"LANG202","Description":"Moving the World: Artistic,Movements in Context","Pts":20,"Preqs":"40 points"}],"Y2T2":[],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"LATI","Color":"#A4FFFF","Faculty":"HSS","Y1T1":[{"Code":"LATI101","Description":"Introduction to Latin","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"LATI102","Description":"Elementary Latin","Pts":20,"Preqs":"LATI 101 or 103 or a required standard in Latin"}],"Y2T1":[{"Code":"LATI201","Description":"Latin Literature and Language A","Pts":20,"Preqs":"LATI 102 or LATI 104 or a required standard in Latin"}],"Y2T2":[{"Code":"LATI202","Description":"Latin Literature and Language B","Pts":20,"Preqs":"LATI 201 or LATI 213"}],"Y3T1":[{"Code":"LATI301","Description":"Advanced Latin Literature","Pts":20,"Preqs":"LATI 202 or LATI 214"}],"Y3T2":[{"Code":"LATI302","Description":"Advanced Latin Literature","Pts":20,"Preqs":"LATI 202 or LATI 214"}],"Y8T1":[]},{"Code":"LCCM","Color":"#A4FFFF","Faculty":"HSS","Y1T1":[{"Code":"LCCM171","Description":"The Art of Writing: Literary,and Creative Communication","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"LCCM172","Description":"Reading and Writing Literary Texts","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"LCCM271","Description":"Literature and Journalism","Pts":20,"Preqs":"Complete 40 ENGL or LCCM points."}],"Y2T2":[{"Code":"LCCM272","Description":"The Art of the Essay: Critical, Public,,Personal","Pts":20,"Preqs":"Complete 40 ENGL or LCCM points."}],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"LING","Color":"#A4FFFF","Faculty":"HSS","Y1T1":[{"Code":"LING101","Description":"Language and Communication","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"LING111","Description":"Linguistics: The Science of Language","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"LING221","Description":"Sociolinguistics","Pts":20,"Preqs":"LING 111 or 40 points from the BA or BC Schedules"},{"Code":"LING228","Description":"Phonetics and Phonology","Pts":20,"Preqs":"LING 111"}],"Y2T2":[{"Code":"LING227","Description":"Syntax and Morphology","Pts":20,"Preqs":"LING 111 or 30 pts approved by Programme Director"}],"Y3T1":[{"Code":"LING322","Description":"New Zealand English","Pts":20,"Preqs":"one of (LING 221, LING 227, LING 228)"}],"Y3T2":[{"Code":"LING321","Description":"Discourse and Meaning","Pts":20,"Preqs":"LING 221"},{"Code":"LING328","Description":"Advanced Phonetics and Phonology","Pts":20,"Preqs":"LING 228"}],"Y8T1":[]},{"Code":"MAOR","Color":"#A4F6FF","Faculty":"HSS","Y1T1":[{"Code":"MAOR101","Description":"Te T?matanga/Introduction to M?ori Language","Pts":20,"Preqs":""},{"Code":"MAOR111","Description":"Wana te Wanawana/M?ori Language 1A","Pts":20,"Preqs":"MAOR 102"},{"Code":"MAOR123","Description":"Te Iwi M?ori me ?na Tikanga/M?ori Society and,Culture","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"MAOR102","Description":"Te Arumanga/Elementary M?ori Language","Pts":20,"Preqs":"MAOR 101 or NCEA Level 2 Maori or equivalent"},{"Code":"MAOR103","Description":"Whakakokoi M?tauranga / Academic Skills ","Pts":20,"Preqs":""},{"Code":"MAOR104","Description":"Whakakokoi M?tauranga / Academic Skills B","Pts":25,"Preqs":""},{"Code":"MAOR112","Description":"Wanawana te T? / M?ori Language 1B","Pts":20,"Preqs":"MAOR 111"},{"Code":"MAOR123","Description":"Te Iwi M?ori me ?na Tikanga/M?ori Society and,Culture","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"MAOR211","Description":"T? Te Wana Wana/M?ori Language 2","Pts":20,"Preqs":"MAOR 112"},{"Code":"MAOR213","Description":"Te Kawa o te Marae/Marae Etiquette and,Protocols","Pts":20,"Preqs":"MAOR 111 and MAOR 112 and MAOR 123"},{"Code":"MAOR217","Description":"Te P?whenuatanga o Te Moana-nui-a-Kiwa / The,Peopling of Polynesia","Pts":20,"Preqs":"MAOR 123 or HIST 112 or PASI 101"}],"Y2T2":[{"Code":"MAOR202","Description":"Te P?taiao M?ori/M?ori Science","Pts":20,"Preqs":"20 100-level MAOR points"},{"Code":"MAOR216","Description":"Te Tiriti o Waitangi/The Treaty of Waitangi","Pts":20,"Preqs":"40 100-level points"},{"Code":"MAOR221","Description":"T? T? Te Wana/M?ori Language 2B","Pts":20,"Preqs":"MAOR 211"}],"Y3T1":[{"Code":"MAOR301","Description":"T? Te M?ori Whakahaere Rauemi/,M?ori Resource Management","Pts":20,"Preqs":"20 200-level MAOR points"},{"Code":"MAOR302","Description":"Te P?moto o te Tangata Whenua, o te Taiao/,Indigenous Knowledge and Science","Pts":20,"Preqs":"MAOR 124 or 20 200-level MAOR points"},{"Code":"MAOR311","Description":"Tiri Te Wana Wana/M?ori Language 3","Pts":20,"Preqs":"MAOR 211"},{"Code":"MAOR313","Description":"Ng? Tikanga Tuku Iho/M?ori Customary Concepts","Pts":20,"Preqs":"20 pts from MAOR 212-217"}],"Y3T2":[{"Code":"MAOR321","Description":"Te Reo Karanga, Te Reo Whaik?rero/The Language,of Karanga and Whaik?rero","Pts":20,"Preqs":"MAOR 311"}],"Y8T1":[]},{"Code":"MARK","Color":"#A4A9FF","Faculty":"COMMERCE","Y1T1":[{"Code":"MARK101","Description":"Principles of Marketing","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"MARK101","Description":"Principles of Marketing","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"MARK201","Description":"Digital Marketing Management","Pts":15,"Preqs":"MARK 101"},{"Code":"MARK202","Description":"Consumer Behaviour","Pts":15,"Preqs":"MARK 101"},{"Code":"MARK203","Description":"Market Research","Pts":15,"Preqs":"MARK 101, QUAN 102 (or MATH 177 or STAT 193)"}],"Y2T2":[{"Code":"MARK201","Description":"Digital Marketing Management","Pts":15,"Preqs":"MARK 101"},{"Code":"MARK202","Description":"Consumer Behaviour","Pts":15,"Preqs":"MARK 101"},{"Code":"MARK203","Description":"Market Research","Pts":15,"Preqs":"MARK 101, QUAN 102 (or MATH 177 or STAT 193)"}],"Y3T1":[{"Code":"MARK301","Description":"Marketing Communications","Pts":15,"Preqs":"MARK 201 30 points from MARK 202, 203, 211-213, IBUS 212"},{"Code":"MARK302","Description":"International Marketing","Pts":15,"Preqs":"(MARK 201, MARK 202, MARK 203) or (IBUS 201, pass or concurrent enrolment in 15 IBUS 300-level pts"},{"Code":"MARK319","Description":"Special Topic: Brand Management","Pts":15,"Preqs":"MARK 201, MARK 202, MARK 203"},{"Code":"MARK321","Description":"Retail Marketing","Pts":15,"Preqs":"MARK 201, MARK 202"}],"Y3T2":[{"Code":"MARK301","Description":"Marketing Communications","Pts":15,"Preqs":"MARK 201 30 points from MARK 202, 203, 211-213, IBUS 212"},{"Code":"MARK303","Description":"Strategic Marketing Management","Pts":15,"Preqs":"MARK 301 MARK 202, MARK 203 15 further 300-level MARK points"},{"Code":"MARK315","Description":"Services Marketing","Pts":15,"Preqs":"MARK 202"},{"Code":"MARK316","Description":"Social Marketing","Pts":15,"Preqs":"MARK 201, MARK 202"}],"Y8T1":[]},{"Code":"MATH","Color":"#B7A4FF","Faculty":"ENGINEERING","Y1T1":[{"Code":"MATH132","Description":"Introduction to Mathematical Thinking","Pts":15,"Preqs":""},{"Code":"MATH141","Description":"Calculus 1A","Pts":15,"Preqs":"16 AS credits NCEA Level 3 Mathematics (or equivalent) or MATH 132"},{"Code":"MATH151","Description":"Algebra","Pts":15,"Preqs":"16 AS credits NCEA Level 3 Mathematics (or equivalent) or MATH 132"}],"Y1T2":[{"Code":"MATH142","Description":"Calculus 1B","Pts":15,"Preqs":"MATH 141 or QUAN 111 or approved level of achievement in NCEA Level 3 Calculus or anequivalent background in mathematics"},{"Code":"MATH161","Description":"Discrete Mathematics and Logic","Pts":15,"Preqs":"Approved level of achievement in NCEA Level 3 Calculus or one of (ENGR 121-123, B+ or better in MATH 132, MATH 141-177, QUAN 111) or equivalent background in mathematics"},{"Code":"MATH177","Description":"Probability and Decision Modelling","Pts":15,"Preqs":"Approved level of achievement in NCEA Level 3 Calculus or one of (ENGR 122, 123, MATH 141 or QUAN 111) or equivalent background in mathematics"}],"Y2T1":[{"Code":"MATH212","Description":"Introduction to Real Analysis","Pts":15,"Preqs":"(MATH 142, 161) or B+ or better in both(ENGR 122, 123)"},{"Code":"MATH244","Description":"Modelling with Differential Equations","Pts":15,"Preqs":"(ENGR 121, ENGR 122) or (MATH 142, MATH 151)"},{"Code":"MATH261","Description":"Discrete Mathematics 2","Pts":15,"Preqs":"MATH 161 or B+ or better in ENGR 123"},{"Code":"MATH277","Description":"Mathematical Statistics","Pts":15,"Preqs":"(MATH 142, 177) or B+ or better in both(ENGR 122, 123)"}],"Y2T2":[{"Code":"MATH243","Description":"Multivariable Calculus","Pts":15,"Preqs":"(MATH 142, 151) or B+ or better in ENGR 122"},{"Code":"MATH245","Description":"Computational Mathematics","Pts":15,"Preqs":""},{"Code":"MATH251","Description":"Linear Algebra","Pts":15,"Preqs":"(MATH 151, 161) or B+ or better in (ENGR 122 or MATH 151)"}],"Y3T1":[{"Code":"MATH311","Description":"Algebra","Pts":15,"Preqs":"MATH 151, MATH 251 or MATH 261"},{"Code":"MATH317","Description":"Metric Spaces","Pts":15,"Preqs":"MATH 211 or MATH 212"},{"Code":"MATH321","Description":"Applied Mathematics I","Pts":15,"Preqs":"30 200-level MATH points (not including MATH 261) or ENGR 222"},{"Code":"MATH322","Description":"Applied Mathematics II","Pts":15,"Preqs":"30 200-level MATH points (not including MATH 261) or ENGR 222"},{"Code":"MATH323","Description":"Mathematics for Earth Sciences","Pts":15,"Preqs":"30 200-level MATH points (not including MATH 261) or ENGR 222"},{"Code":"MATH335","Description":"Computability and Complexity","Pts":15,"Preqs":"MATH 161, 15 pts from (MATH 211, MATH 212, MATH 251, "},{"Code":"MATH353","Description":"Optimisation","Pts":15,"Preqs":"MATH 243, 15 further 200-level MATH pts"},{"Code":"MATH361","Description":"Graph Theory","Pts":15,"Preqs":"MATH 161 and 15 points from MATH 200-299"},{"Code":"MATH377","Description":"Probability and Random Processes","Pts":15,"Preqs":"MATH 243 and MATH 277"}],"Y3T2":[{"Code":"MATH301","Description":"Differential Equations","Pts":15,"Preqs":"MATH 243, MATH 244"},{"Code":"MATH309","Description":"Mathematical Logic","Pts":15,"Preqs":"MATH 161, 15 pts from (MATH 211, MATH 212, MATH 251, "},{"Code":"MATH318","Description":"Hilbert Spaces","Pts":15,"Preqs":"MATH 211 or MATH 212 MATH 251"},{"Code":"MATH321","Description":"Applied Mathematics I","Pts":15,"Preqs":"30 200-level MATH points (not including MATH 261) or ENGR 222"},{"Code":"MATH322","Description":"Applied Mathematics II","Pts":15,"Preqs":"30 200-level MATH points (not including MATH 261) or ENGR 222"},{"Code":"MATH323","Description":"Mathematics for Earth Sciences","Pts":15,"Preqs":"30 200-level MATH points (not including MATH 261) or ENGR 222"},{"Code":"MATH324","Description":"Coding and Cryptography","Pts":15,"Preqs":"MATH 251 or (ENGR 121 or MATH 151 15 further 200-level MATH points)"}],"Y8T1":[]},{"Code":"MDDN","Color":"#FFA4FF","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"MDDN211","Description":"Digital Video Creation /,Auaha Ata Matihiko","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"},{"Code":"MDDN221","Description":"Game Design I /,Hoahoa ?-K?mu Rorohiko I","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"},{"Code":"MDDN242","Description":"Creative Coding II /,Waehere ?-Auaha II","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules and including one of (DSDN 142, COMP 102, COMP 112)"},{"Code":"MDDN244","Description":"Expanded Photographics /,Whakawh?nui Whakaahua","Pts":15,"Preqs":"75 points including DSDN 144"}],"Y2T2":[{"Code":"MDDN201","Description":"Internet and Social Media Design / Hoahoa,?-Ipurangi me te Arap?ho ?-Papori","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"},{"Code":"MDDN222","Description":"Virtual Reality Studio /,Taupuni Ao Mariko","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedules"},{"Code":"MDDN231","Description":"Physical Computing /,Rorohiko ?-?kiko","Pts":15,"Preqs":""}],"Y3T1":[{"Code":"MDDN314","Description":"Audio-Visual Space /,Whaitua Ataata-Rongo","Pts":15,"Preqs":"60 200-level points including 30 from the BDI or BAS Schedules"},{"Code":"MDDN344","Description":"Game Engines for Design /,P?kaha K?mu m? te Hoahoa","Pts":15,"Preqs":"60 200-level points including 30 points from the BDI or BAS Schedules"}],"Y3T2":[{"Code":"MDDN301","Description":"Mobile Media and Mixed Reality /,Arap?ho ?-Aorau","Pts":15,"Preqs":"60 200-level points including MDDN 201"},{"Code":"MDDN321","Description":"Game Design II /,Hoahoa ?-K?mu Rorohiko II","Pts":15,"Preqs":"60 200-level points including MDDN 221"},{"Code":"MDDN331","Description":"Wearable Technology /,Hangarau Hei K?kahu Mau","Pts":15,"Preqs":""},{"Code":"MDDN342","Description":"Creative Coding III /,Waehere ?-Auaha III","Pts":15,"Preqs":"60 200-level points including MDDN 242"}],"Y8T1":[]},{"Code":"MDIA","Color":"#A4E3FF","Faculty":"HSS","Y1T1":[{"Code":"MDIA103","Description":"Popular Media Culture.","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"MDIA102","Description":"Media, Society and Politics","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"MDIA205","Description":"Popular Music Studies","Pts":20,"Preqs":"20 pts from (MDIA 100-109, MUSC 105-150"},{"Code":"MDIA206","Description":"Media and Digital Cultures.","Pts":20,"Preqs":"20 100-level MDIA points"},{"Code":"MDIA209","Description":"Critical Approaches to Advertising and Consumer Cultur","Pts":20,"Preqs":"20 100-level MDIA points"}],"Y2T2":[{"Code":"MDIA204","Description":"Place, Race, Media","Pts":20,"Preqs":"20 100-level MDIA points"},{"Code":"MDIA207","Description":"Understanding News Content","Pts":20,"Preqs":"20 100-level MDIA points"}],"Y3T1":[{"Code":"MDIA302","Description":"Television Narrative","Pts":20,"Preqs":"40 200-level MDIA points"},{"Code":"MDIA303","Description":"Media, Politics and Crises","Pts":20,"Preqs":"40 points from MDIA 200-299"},{"Code":"MDIA308","Description":" M?ori Media","Pts":20,"Preqs":"40 points from MDIA 200-299 or MAOR 200-299"}],"Y3T2":[{"Code":"MDIA309","Description":"Mobile and Ubiquitous Medi","Pts":20,"Preqs":"40 200-level MDIA points"},{"Code":"MDIA321","Description":"Special Topic: Contemporary Media and Terrorism","Pts":20,"Preqs":"40 pts from MDIA 200-299"}],"Y8T1":[]},{"Code":"MGMT","Color":"#DAA4FF","Faculty":"COMMERCE","Y1T1":[{"Code":"MGMT101","Description":"Introduction to Management","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"MGMT101","Description":"Introduction to Management","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"MGMT202","Description":"Organisational Behaviour","Pts":15,"Preqs":"MGMT 101"},{"Code":"MGMT205","Description":"Strategic Management","Pts":15,"Preqs":"MGMT 101"},{"Code":"MGMT206","Description":"Systems Thinking and Decision Making","Pts":15,"Preqs":"60 points"}],"Y2T2":[{"Code":"MGMT205","Description":"Strategic Management","Pts":15,"Preqs":"MGMT 101"},{"Code":"MGMT208","Description":"Operations Management","Pts":15,"Preqs":"MGMT 101, QUAN 102"}],"Y3T1":[{"Code":"MGMT308","Description":"Supply Chain and Logistics Management","Pts":15,"Preqs":"MGMT 208"},{"Code":"MGMT313","Description":"Operations Strategy","Pts":15,"Preqs":"MGMT 205 or MGMT 206 or MGMT 208"},{"Code":"MGMT317","Description":"Organisational Innovation and Change","Pts":15,"Preqs":"15 200-level MGMT points"},{"Code":"MGMT321","Description":"Organisations and Ethics","Pts":15,"Preqs":"MGMT 202"}],"Y3T2":[{"Code":"MGMT307","Description":"Entrepreneurship in Practice","Pts":15,"Preqs":"30 200-level points"},{"Code":"MGMT311","Description":"Knowledge Management","Pts":15,"Preqs":"15 points from MGMT 200-299"},{"Code":"MGMT312","Description":"Sustainable Operations","Pts":15,"Preqs":"MGMT 208 or (QUAN 102 and one of MGMT 205, MGMT 206"},{"Code":"MGMT316","Description":"Decision Modelling for Managers","Pts":15,"Preqs":"MGMT 208 or (QUAN 102 and MGMT 206)"},{"Code":"MGMT318","Description":"Organisational Analysis and Design","Pts":15,"Preqs":"MGMT 202"}],"Y8T1":[]},{"Code":"MIDW","Color":"#FFA4BA","Faculty":"HEALTH","Y1T1":[{"Code":"MIDW101","Description":"Midwifery Practice 1: Becoming a Midwife","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"MIDW102","Description":"Midwifery Practice 2: Preparation for Practice","Pts":15,"Preqs":"BIOL 114, MIDW 101"}],"Y2T1":[{"Code":"MIDW201","Description":"Anatomy and Physiology: Pregnancy and,Childbirth","Pts":15,"Preqs":"BIOL 114"},{"Code":"MIDW202","Description":"Midwifery Practice 3: Care of the Newborn","Pts":30,"Preqs":"BIOL 114, EDUC 141"},{"Code":"MIDW203","Description":"Transition to Parenthood","Pts":15,"Preqs":"EDUC 141, HLWB 105"}],"Y2T2":[{"Code":"MIDW204","Description":"Professional Frameworks for Midwifery Practice","Pts":15,"Preqs":"MIDW 101, MIDW 102"},{"Code":"MIDW205","Description":"Midwifery Practice 4: Supporting Women","Pts":20,"Preqs":"MIDW 101, MIDW 102"}],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"MUSC","Color":"#A4CCFF","Faculty":"HSS","Y1T1":[{"Code":"MUSC125","Description":"Introduction to Jazz","Pts":20,"Preqs":""},{"Code":"MUSC130","Description":"Hildegard to Avant Garde: Introduction to Western Art Music","Pts":20,"Preqs":""},{"Code":"MUSC164","Description":"Jazz Theory/ Musicianship 1","Pts":20,"Preqs":"approved theory qualification or entrance test or B or better in MUSC 160"},{"Code":"MUSC166","Description":"Classical Theory/Musicianship 1","Pts":20,"Preqs":"approved theory qualification or entrance test or B or better in MUSC 160"}],"Y1T2":[{"Code":"MUSC150","Description":"Music in Global Contexts","Pts":20,"Preqs":""},{"Code":"MUSC165","Description":"Jazz Theory/Musicianship 2","Pts":20,"Preqs":"MUSC 164"},{"Code":"MUSC167","Description":"Classical Theory/Musicianship 2","Pts":20,"Preqs":"MUSC 166"}],"Y2T1":[{"Code":"MUSC229","Description":"Perspectives on Jazz","Pts":20,"Preqs":"20 points from MUSC 105-150"},{"Code":"MUSC236","Description":"Western Art Music 1750–1800:,Enlightenment and Revolution. ","Pts":20,"Preqs":"20 points from MUSC 105-150"},{"Code":"MUSC247","Description":"Film Music","Pts":20,"Preqs":"40 points"},{"Code":"MUSC264","Description":"Jazz Theory/ Musicianship 3","Pts":20,"Preqs":"MUSC 165"},{"Code":"MUSC266","Description":"Classical Theory/Musicianship 3","Pts":20,"Preqs":"MUSC 167"}],"Y2T2":[{"Code":"MUSC237","Description":"Western Art Music 1800–1900: Romanticism and Beyond","Pts":20,"Preqs":"20 points from MUSC 105-150"},{"Code":"MUSC248","Description":"Popular Music Perspectives","Pts":20,"Preqs":"60 points"},{"Code":"MUSC268","Description":"Harmony in late-Romantic Music and Western,Film Scores","Pts":20,"Preqs":""}],"Y3T1":[{"Code":"MUSC331","Description":"Topics in Instrumental Music","Pts":20,"Preqs":"20 points from MUSC 220-259"},{"Code":"MUSC349","Description":"Approaches to Popular Music","Pts":20,"Preqs":"40 pts from (MUSC 220-259, MDIA 205)"}],"Y3T2":[{"Code":"MUSC309","Description":"Special Topic: Music Pedagogy","Pts":20,"Preqs":"20 points from MUSC 230:259"},{"Code":"MUSC347","Description":"Topic in New Zealand Music:,Western Art Music in New Zealand, 1841–1947","Pts":20,"Preqs":"20 points from MUSC 220-259"},{"Code":"MUSC351","Description":"Studies in Music and Dance of Oceania","Pts":20,"Preqs":"40 200-level points"}],"Y8T1":[]},{"Code":"NWEN","Color":"#FFA4FF","Faculty":"ENGINEERING","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"NWEN241","Description":"Systems Programming","Pts":15,"Preqs":"COMP 103"}],"Y2T2":[{"Code":"NWEN243","Description":"Clouds and Networking","Pts":15,"Preqs":"COMP 103"}],"Y3T1":[{"Code":"NWEN303","Description":"Concurrent Programming","Pts":15,"Preqs":"ENGR 123 or MATH 161 SWEN 221 15 points from (COMP 261, CYBR 271, NWEN 241, NWEN 243)"}],"Y3T2":[{"Code":"NWEN301","Description":"Operating Systems Design","Pts":15,"Preqs":"NWEN 241"},{"Code":"NWEN302","Description":"Computer Network Design","Pts":15,"Preqs":"NWEN 241 and NWEN 243 ENGR 123 or (MATH 161 and one of (MATH 177 or QUAN 102 or STAT 193))"},{"Code":"NWEN304","Description":"Advanced Network Applications","Pts":15,"Preqs":"ENGR 123 or MATH 161 NWEN 242 COMP 261 or NWEN 241 or SWEN 221"}],"Y8T1":[]},{"Code":"NZSL","Color":"#A4B9FF","Faculty":"HSS","Y1T1":[{"Code":"NZSL101","Description":"Introduction to New Zealand Sign Language","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"NZSL102","Description":"Elementary New Zealand Sign Languag","Pts":20,"Preqs":"NZSL 101 (or DEAF 101) or equivalent proficiency in NZSL"}],"Y2T1":[{"Code":"NZSL201","Description":"Intermediate New Zealand Sign Language A","Pts":20,"Preqs":"NZSL 102 (or DEAF 102) or equivalent proficiency in NZSL"}],"Y2T2":[{"Code":"NZSL202","Description":"Intermediate New Zealand Sign Language ","Pts":20,"Preqs":"NZSL 201 (or DEAF 201) or equivalent proficiency in NZSL"}],"Y3T1":[],"Y3T2":[{"Code":"NZSL311","Description":"Structure and Use of New Zealand,Sign Language","Pts":20,"Preqs":"40 DEAF, NZSL or LING pts, excluding LING 226 in 2014 and LING 326 in 2015"}],"Y8T1":[]},{"Code":"PASI","Color":"#A4A4FF","Faculty":"HSS","Y1T1":[{"Code":"PASI101","Description":"The Pacific Heritage","Pts":20,"Preqs":""}],"Y1T2":[],"Y2T1":[{"Code":"PASI202","Description":"Globalisation and Popular Culture in the,Pacific","Pts":20,"Preqs":"PASI 101, 20 points from Part A of the BA Schedule"}],"Y2T2":[{"Code":"PASI201","Description":"Comparative History in Polynesi","Pts":20,"Preqs":"PASI 101, 20 points from Part A of the BA Schedule"}],"Y3T1":[],"Y3T2":[{"Code":"PASI301","Description":"Framing the Pacific: Theorising Culture and,Society","Pts":20,"Preqs":"PASI 201, 20 points in Maori, French or Samoan language"}],"Y8T1":[]},{"Code":"PASP","Color":"#B7A4FF","Faculty":"HSS","Y1T1":[],"Y1T2":[{"Code":"PASP102","Description":"Pacific Nations Education","Pts":20,"Preqs":""},{"Code":"PASP103","Description":"Academic Skills A","Pts":20,"Preqs":""},{"Code":"PASP104","Description":"Academic Skills B","Pts":25,"Preqs":""}],"Y2T1":[],"Y2T2":[],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"PCOM","Color":"#CFA4FF","Faculty":"HSS","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"PCOM201","Description":"Introduction to Political Communication","Pts":20,"Preqs":"40 100-level POLS or INTP points"}],"Y2T2":[{"Code":"PCOM202","Description":"Public Relations, Communication Power,and Democracy","Pts":20,"Preqs":"40 100-level POLS or INTP points"}],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"PERF","Color":"#E6A4FF","Faculty":"HSS","Y1T1":[{"Code":"PERF101","Description":"Performance Principal Study 1A","Pts":20,"Preqs":""},{"Code":"PERF105","Description":"Performance Skills 1A","Pts":10,"Preqs":"One of PERF 101, 102, 106, or audition "},{"Code":"PERF165","Description":"Project in Performance 1A","Pts":15,"Preqs":""},{"Code":"PERF166","Description":"Project in Performance 1B","Pts":15,"Preqs":""},{"Code":"PERF167","Description":"Project in Performance 1C","Pts":10,"Preqs":""}],"Y1T2":[{"Code":"PERF102","Description":"Performance Principal Study 1B","Pts":20,"Preqs":"PERF 101 or audition"},{"Code":"PERF106","Description":"Performance Skills 1B","Pts":10,"Preqs":"One of PERF 101, 102, 105 or audition "}],"Y2T1":[{"Code":"PERF201","Description":"Classical Performance Principal Study 2A","Pts":20,"Preqs":"PERF 101 and PERF 102"},{"Code":"PERF205","Description":"Performance Skills 2A","Pts":15,"Preqs":"PERF 105 & 106, or audition"},{"Code":"PERF211","Description":"Jazz Performance Principal Study 2A","Pts":20,"Preqs":"PERF 101 & 102"},{"Code":"PERF266","Description":"Intermediate Project in Performance 2B","Pts":15,"Preqs":""}],"Y2T2":[{"Code":"PERF202","Description":"Classical Performance Principal Study 2B","Pts":20,"Preqs":"PERF 101 and PERF 102"},{"Code":"PERF206","Description":"Performance Skills 2B","Pts":15,"Preqs":"PERF 105 & 106, or audition"},{"Code":"PERF208","Description":"Performance Extended Skills 2A","Pts":10,"Preqs":"PERF 101 & 102, or audition (for latin/fusion) or two of MUSC 166, 167, 266 (for conducting) "},{"Code":"PERF212","Description":"Jazz Performance Principal Study 2B","Pts":20,"Preqs":"PERF 101 & 102"},{"Code":"PERF255","Description":"Performance in Ethnomusicology","Pts":15,"Preqs":"40 100-level points"},{"Code":"PERF266","Description":"Intermediate Project in Performance 2B","Pts":15,"Preqs":""}],"Y3T1":[{"Code":"PERF301","Description":"Classical Performance Principal Study 3A","Pts":20,"Preqs":"PERF 201 & 202"},{"Code":"PERF305","Description":"Performance Skills 3A","Pts":15,"Preqs":"PERF 205 & 206, or audition"},{"Code":"PERF311","Description":"Jazz Performance Principal Study 3A","Pts":20,"Preqs":"PERF 211 & 212 "},{"Code":"PERF365","Description":"Advanced Project in Performance 3A","Pts":20,"Preqs":""},{"Code":"PERF366","Description":"Advanced Project in Performance 3B","Pts":20,"Preqs":""}],"Y3T2":[{"Code":"PERF302","Description":"Classical Performance Principal Study 3B","Pts":20,"Preqs":"PERF 201 & 202"},{"Code":"PERF306","Description":"Performance Skills 3B","Pts":15,"Preqs":"PERF 205 & 206, or audition"},{"Code":"PERF308","Description":"Performance Extended Skills 3B","Pts":10,"Preqs":"PERF 211 & 212, or audition"},{"Code":"PERF312","Description":"Jazz Performance Principal Study 3B","Pts":20,"Preqs":"PERF 211 & 212 "}],"Y8T1":[]},{"Code":"PHIL","Color":"#F9A4FF","Faculty":"HSS","Y1T1":[{"Code":"PHIL104","Description":"Minds, Brains and Persons","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"PHIL106","Description":"Contemporary Ethical Issues","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"PHIL210","Description":"Special Topic: Ethical Theory","Pts":20,"Preqs":"40 100-399 PHIL points"},{"Code":"PHIL265","Description":"Mind and Cognition","Pts":20,"Preqs":"15 100-399 PHIL or PSYC points"}],"Y2T2":[{"Code":"PHIL201","Description":"Knowledge and Reality","Pts":20,"Preqs":"20 100-399 PHIL points"},{"Code":"PHIL211","Description":"Introduction to Logic","Pts":20,"Preqs":"15 100-399 PHIL, ENGR, LING, MATH or STAT points"},{"Code":"PHIL268","Description":"Philosophy of Popular Culture","Pts":20,"Preqs":"20 100-399 PHIL points"}],"Y3T1":[{"Code":"PHIL302","Description":"Ethical Theory","Pts":20,"Preqs":"40 PHIL points, including 20 pts from PHIL 200-399"},{"Code":"PHIL331","Description":"Language and the World.","Pts":20,"Preqs":"40 PHIL points, including 20 pts from PHIL 200-399"}],"Y3T2":[{"Code":"PHIL311","Description":"Special Topic: Existentialism and Phenomenology","Pts":20,"Preqs":""},{"Code":"PHIL373","Description":"Experimental Philosophy","Pts":20,"Preqs":"40 PHIL points, including 20 pts from PHIL 200-399, or 40 pts from 200- or 300-level courses on the BSc Schedule"}],"Y8T1":[]},{"Code":"PHYS","Color":"#A4CCFF","Faculty":"SCIENCE","Y1T1":[{"Code":"PHYS101","Description":"Introduction to Physics","Pts":15,"Preqs":""},{"Code":"PHYS131","Description":"Energy and Environmental Physics","Pts":15,"Preqs":""},{"Code":"PHYS145","Description":"Practical skills for scientists: applications in physics","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"PHYS132","Description":"Introductory Astronom","Pts":15,"Preqs":""},{"Code":"PHYS142","Description":"Calculus-based Physics","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"PHYS243","Description":"Classical Mechanics and Relativity","Pts":15,"Preqs":"(MATH 142, 151) or B+ or better in ENGR 122 PHYS 145 "},{"Code":"PHYS245","Description":"Methods of Experimental Physics","Pts":15,"Preqs":"(MATH 142 (or B+ or better in MATH 141), MATH 151) or B+ or better in ENGR 122 (PHYS 145, 115) or (ENGR 141, 142) "},{"Code":"PHYS260","Description":"Topics in Physics 1","Pts":15,"Preqs":"Permission of the Head of School; X any of PHYS 209-245 as determined by the Head of School"},{"Code":"PHYS261","Description":"Topics in Physics 2","Pts":15,"Preqs":"Permission of the Head of School; X any of PHYS 209-245 as determined by the Head of School"}],"Y2T2":[{"Code":"PHYS241","Description":"Quantum Mechanics and Kinetic Theory","Pts":15,"Preqs":"(MATH 142, 151) or B+ or better in ENGR 122 PHYS 145, 115 "},{"Code":"PHYS242","Description":"Electromagnetism I","Pts":15,"Preqs":"(MATH 142, 151) or B+ or better in ENGR 122 (PHYS 145, 115) or (ENGR 141, 142) "},{"Code":"PHYS260","Description":"Topics in Physics 1","Pts":15,"Preqs":"Permission of the Head of School; X any of PHYS 209-245 as determined by the Head of School"},{"Code":"PHYS261","Description":"Topics in Physics 2","Pts":15,"Preqs":"Permission of the Head of School; X any of PHYS 209-245 as determined by the Head of School"}],"Y3T1":[{"Code":"PHYS305","Description":"Thermal and Statistical Physics","Pts":15,"Preqs":"MATH 243, PHYS 241 (or PHYS 223)"},{"Code":"PHYS307","Description":"Quantum Physics","Pts":15,"Preqs":"MATH 243 (PHYS 241, PHYS 242) or (PHYS 221, PHYS 222)"}],"Y3T2":[{"Code":"PHYS304","Description":"Electromagnetism and Wave Optics","Pts":15,"Preqs":"MATH 243 PHYS 242 (or PHYS 222, PHYS 223)"},{"Code":"PHYS343","Description":"Topics in Applied Physics","Pts":15,"Preqs":"30 200-level PHYS points"},{"Code":"PHYS345","Description":"Advanced Methods of Experimental Physics","Pts":15,"Preqs":"15 pts from PHYS 245, EEEN 201–204; or (MATH 243 and one of PHYS 221-223)"}],"Y8T1":[]},{"Code":"POLS","Color":"#FFA4FF","Faculty":"HSS","Y1T1":[{"Code":"POLS111","Description":"Introduction to,New Zealand Government and Politics","Pts":20,"Preqs":""},{"Code":"POLS114","Description":"Introduction to Comparative Politics","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"POLS112","Description":"Introduction to Political Ideas","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"POLS210","Description":"Contemporary Politics of the Middle East","Pts":20,"Preqs":"40 100-level POLS or INTP points"},{"Code":"POLS212","Description":"Special Topic: Ideas That Shape the World","Pts":20,"Preqs":"40 100-level POLS or INTP points"},{"Code":"POLS231","Description":"Governing Divided Societies","Pts":20,"Preqs":"40 100-level POLS or INTP points"}],"Y2T2":[{"Code":"POLS203","Description":"East Asian Politics","Pts":20,"Preqs":"40 100-level INTP or POLS (or ASIA) points"},{"Code":"POLS211","Description":"Special Topic:,The Politics of Nationalism","Pts":20,"Preqs":"40 100-level POLS or INTP points"},{"Code":"POLS232","Description":"Citizen Politics: Public Opinion and Elections","Pts":20,"Preqs":"40 100-level POLS or INTP points"}],"Y3T1":[{"Code":"POLS362","Description":"A Topic in Political Philosophy:,Feminist Theory","Pts":20,"Preqs":"40 points from POLS or INTP 200-299"},{"Code":"POLS384","Description":"The Comparative Politics of Globalisation","Pts":20,"Preqs":"40 points from POLS or INTP 200-299"}],"Y3T2":[{"Code":"POLS352","Description":"Migration and Identity","Pts":20,"Preqs":"40 points from POLS or INTP 200-299"},{"Code":"POLS355","Description":"Special Topic:,The Politics of the Pacific Islands","Pts":20,"Preqs":""},{"Code":"POLS365","Description":"Special Topic: Politics and Music","Pts":20,"Preqs":""}],"Y8T1":[]},{"Code":"PSYC","Color":"#CFA4FF","Faculty":"SCIENCE","Y1T1":[{"Code":"PSYC121","Description":"Introduction to Psychology 1","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"PSYC101","Description":"Popular Psychology","Pts":15,"Preqs":""},{"Code":"PSYC122","Description":"Introduction to Psychology 2","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"PSYC221","Description":"Social Psychology","Pts":15,"Preqs":"PSYC 121"},{"Code":"PSYC231","Description":"Cognitive Psychology","Pts":15,"Preqs":"PSYC 122"},{"Code":"PSYC232","Description":"Survey and Naturalistic Research Methods","Pts":15,"Preqs":"PSYC 121 or PSYC 122 STAT 193 (or MATH 177 or QUAN 102)"}],"Y2T2":[{"Code":"PSYC233","Description":"Brain and Behaviour","Pts":15,"Preqs":"PSYC 122"},{"Code":"PSYC242","Description":"Experimental Research Methods","Pts":15,"Preqs":"PSYC 121 or PSYC 122 STAT 193 (or MATH 177 or QUAN 102)"},{"Code":"PSYC248","Description":"Lifespan Development","Pts":15,"Preqs":"15 points from PSYC 121, PSYC 122"}],"Y3T1":[{"Code":"PSYC326","Description":"Discourse and Social Psycholog","Pts":15,"Preqs":"PSYC 242 (or PSYC 325) 30 further 200-level PSYC points"},{"Code":"PSYC327","Description":"Cognitive and Behavioural Neuroscience","Pts":15,"Preqs":"PSYC 242 (or PSYC 325) PSYC 233"},{"Code":"PSYC332","Description":"Behaviour Analysis","Pts":15,"Preqs":"PSYC 242 (or PSYC 325) PSYC 231 or PSYC 233 (or EDUC 243)"},{"Code":"PSYC335","Description":"Psychology, Crime and Law","Pts":15,"Preqs":"PSYC 232 15 points from (PSYC 221, PSYC 231, PSYC 233, PSYC 242)"},{"Code":"PSYC338","Description":"Cross-Cultural Psychology","Pts":15,"Preqs":"PSYC 232 or PSYC 242 PSYC 221 or PSYC 248"}],"Y3T2":[{"Code":"PSYC317","Description":"Special Topic: Evolutionary Psychology","Pts":15,"Preqs":""},{"Code":"PSYC324","Description":"Child Cognition and Development","Pts":15,"Preqs":"PSYC 242 (or PSYC 325) PSYC 248 PSYC 231 or EDUC 243"},{"Code":"PSYC325","Description":"Advanced Research Methods in Psychology","Pts":15,"Preqs":"PSYC 232, 30 further 200-level PSYC points, STAT 193 (or MATH 177 or QUAN 102"},{"Code":"PSYC333","Description":"Applied Social Psychology","Pts":15,"Preqs":"PSYC 221 PSYC 232 or PSYC 242"},{"Code":"PSYC340","Description":"Special Topic: Advanced Cognitio","Pts":15,"Preqs":"STAT 193, PSYC 231, one of (PSYC 232, 242)"}],"Y8T1":[]},{"Code":"PUBL","Color":"#FFA4FF","Faculty":"COMMERCE","Y1T1":[{"Code":"PUBL113","Description":"Social and Public Policy: Values and Change","Pts":20,"Preqs":""}],"Y1T2":[],"Y2T1":[{"Code":"PUBL201","Description":"Introduction to Public Policy","Pts":20,"Preqs":"ECON 130 or PUBL 113 or POLS 111"},{"Code":"PUBL203","Description":"Introduction to Public Economics","Pts":20,"Preqs":"ECON 130 or PUBL 201"},{"Code":"PUBL209","Description":"Introduction to Public Economics","Pts":15,"Preqs":"ECON 130 or PUBL 201"},{"Code":"PUBL211","Description":"Introduction to Public Management","Pts":20,"Preqs":"PUBL 201 or at least 35 ECON, ENVI, GEOG, HRER, IBUS, LAWS, MGMT, POLS or SPOL points"}],"Y2T2":[{"Code":"PUBL205","Description":"Development Policy and Management","Pts":20,"Preqs":"at least 35 ECON, IBUS, MGMT, POLS or PUBL points"},{"Code":"PUBL210","Description":"Policy Analysis Methods and Practice","Pts":20,"Preqs":"PUBL 201"}],"Y3T1":[{"Code":"PUBL307","Description":"Environmental Policy and Governance","Pts":20,"Preqs":"15 points from PUBL 201, PUBL 205, PUBL 210, PUBL 211, BIOL 222, ENVI 214, GEOG 214, GEOG 222, LAWS 318, LAWS 325, MGMT 206, SARC 233, TOUR 250"},{"Code":"PUBL310","Description":"Innovations in Public Policy","Pts":20,"Preqs":"PUBL 201, PUBL 210"}],"Y3T2":[{"Code":"PUBL303","Description":"Public Sector Economics","Pts":20,"Preqs":"ECON 201 (or ECON 130 and one of PUBL 203, PUBL 209)"},{"Code":"PUBL304","Description":"Cabinet Government","Pts":20,"Preqs":"at least 20 200-level PUBL or POLS points"},{"Code":"PUBL311","Description":"Emerging Perspectives in Public Management","Pts":20,"Preqs":"PUBL 211 or at least 30 200-level ECON, ENVI,GEOG, HRER, IBUS, LAWS, MGMT, POLS or SPOL points"}],"Y8T1":[]},{"Code":"QUAN","Color":"#FFA4FF","Faculty":"COMMERCE","Y1T1":[{"Code":"QUAN102","Description":"Statistics for Business","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"QUAN102","Description":"Statistics for Business","Pts":15,"Preqs":""},{"Code":"QUAN111","Description":"Mathematics for Economics and Finance","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"QUAN203","Description":"Quantitative Methods for Economics and Finance","Pts":15,"Preqs":"ECON 130, QUAN 102 (MATH 177 or STAT 193)and QUAN 111 (or MATH 141/142, 151)"}],"Y2T2":[{"Code":"QUAN201","Description":"Introduction to Econometrics","Pts":15,"Preqs":"ECON 130, QUAN 102 (MATH 177 or STAT 193)and QUAN 111 (or MATH 141/142, 151)"}],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"RELI","Color":"#FFA4FF","Faculty":"HSS","Y1T1":[{"Code":"RELI108","Description":"The World's Religions: Diverse,and Dynamic Traditions","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"RELI113","Description":"What is Religion","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"RELI229","Description":"Confronting Death","Pts":20,"Preqs":"20 RELI points or 40 points from Part A of the BA Schedule"}],"Y2T2":[{"Code":"RELI221","Description":"Politics, Law and Religion","Pts":20,"Preqs":"20 RELI points or 40 points from Part A of the BA Schedule"},{"Code":"RELI235","Description":"Asian Spiritualities","Pts":20,"Preqs":"20 RELI points or 40 points from Part A of the BA Schedule"}],"Y3T1":[{"Code":"RELI309","Description":"Directed Individual Study","Pts":20,"Preqs":""},{"Code":"RELI335","Description":"Arguing About Religion","Pts":20,"Preqs":"40 200-level points from Part A of the BA Schedule"}],"Y3T2":[{"Code":"RELI309","Description":"Directed Individual Study","Pts":20,"Preqs":""},{"Code":"RELI343","Description":"God, Gods, Godlessness","Pts":20,"Preqs":"40 200-level points from Part A of the BA Schedule"}],"Y8T1":[]},{"Code":"RESE","Color":"#FFA4FF","Faculty":"ENGINEERING","Y1T1":[],"Y1T2":[],"Y2T1":[],"Y2T2":[],"Y3T1":[{"Code":"RESE311","Description":"Energy Economic Analyses","Pts":15,"Preqs":""}],"Y3T2":[{"Code":"RESE312","Description":"Sustainability Modelling Techniques","Pts":15,"Preqs":""},{"Code":"RESE323","Description":"Renewable Energy Policy","Pts":15,"Preqs":""}],"Y8T1":[]},{"Code":"SACS","Color":"#FFA4FF","Faculty":"HSS","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"SACS202","Description":" Gender and Sexuality Studies:,Key Thinkers and Perspectives","Pts":20,"Preqs":"40 points from Part A of the BA Schedule"}],"Y2T2":[],"Y3T1":[],"Y3T2":[],"Y8T1":[]},{"Code":"SAMO","Color":"#FFA4FF","Faculty":"HSS","Y1T1":[{"Code":"SAMO101","Description":"Introduction to Samoan Language","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"SAMO102","Description":"Conversational Samoan","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"SAMO202","Description":"Faasinomaga ma,Tusitusiga Samoa/Samoan Literature","Pts":20,"Preqs":"SAMO 101 or SAMO 102 or equivalent"}],"Y2T2":[{"Code":"SAMO201","Description":"Samoan Language and Oratory.","Pts":20,"Preqs":"SAMO 101 or equivalent"}],"Y3T1":[{"Code":"SAMO301","Description":"Samoan Language and Customs","Pts":20,"Preqs":"SAMO 201 or equivalent"}],"Y3T2":[{"Code":"SAMO302","Description":"Faauigaga ma Faaliliuga / Interpreting,and Translation","Pts":20,"Preqs":"SAMO 202 or other evidence of advanced Samoan, evidence of advanced English Proficiency"}],"Y8T1":[]},{"Code":"SARC","Color":"#FFA4FF","Faculty":"ARCH & DESIGN","Y1T1":[{"Code":"SARC111","Description":"Introduction to Design Processes / He,T?matanga K?rero m? Ng? Mahi Whakar?kei","Pts":15,"Preqs":""},{"Code":"SARC131","Description":"Introduction to Sustainability in the Designed,Environment / He T?matanga K?rero m? Te Whakaora i Te,Taiao Hangahanga","Pts":15,"Preqs":""},{"Code":"SARC151","Description":"Introduction to Design History and Theory / He,T?matanga K?rero m? Ng? K?rero Tuku Iho i te ao Whakar?kei","Pts":15,"Preqs":""},{"Code":"SARC161","Description":"Introduction to Design Communication / He,T?matanga K?rero m? Te Mahi Ng?tahi i Te Ao Whakar?kei","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"SARC112","Description":"Design Processes / Ng? Tukanga","Pts":15,"Preqs":"SARC 111"},{"Code":"SARC121","Description":"Introduction to Built Environment Technology /,He T?matanga K?rero m? Ng? Whare Hangahanga","Pts":15,"Preqs":""},{"Code":"SARC122","Description":"Introduction to Environmental Design,Sciences/,He Timatanga K?rero m? te Taiao Hoahoa","Pts":15,"Preqs":""},{"Code":"SARC162","Description":"Design Communication / Te Whakar?kei me te,Mahi Ng?tahi","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"SARC221","Description":"Building Materials and Construction / Te,Waihanga me ng? Momo Rauemi","Pts":15,"Preqs":"SARC 121, SARC 131"},{"Code":"SARC223","Description":"Human Environmental Science / Te ?hurutanga,o te Taiao","Pts":15,"Preqs":"SARC 121"}],"Y2T2":[{"Code":"SARC261","Description":"Communication / Ng? Kaupapa Hangarau","Pts":15,"Preqs":"SARC 161 and SARC 162"},{"Code":"SARC281","Description":"Special Topic: Seeing Architecture through,Photography","Pts":15,"Preqs":""}],"Y3T1":[{"Code":"SARC311","Description":"Exhibition Design, Construction and,Technologies / Ng? Mahi Whakaaturanga","Pts":15,"Preqs":"SARC 211"},{"Code":"SARC312","Description":"Furniture Design, Construction and Technologies,/ Ng? Tikanga me ng? Tukanga Waihanga Taputapu Whare","Pts":15,"Preqs":"60 200-level points from the BAS or BDI Schedule"},{"Code":"SARC323","Description":"Colour, Pattern, Light / Ng? ?huatanga o te Ata,me te P?","Pts":15,"Preqs":"one of ARCI 212, INTA 212, LAND 212"},{"Code":"SARC351","Description":"Urban Design Theory and Practice / Te Mahi me,ng? K?rero o te Ao Kikokiko","Pts":15,"Preqs":"one of ARCI 251, INTA 251, LAND 251"},{"Code":"SARC362","Description":"Introduction to Practice and Management / He,T?matanga K?rero m? Te Mahi me Te Whakahaere","Pts":15,"Preqs":"60 200-level ARCI/BILD/INTA/LAND/SARC points"},{"Code":"SARC365","Description":"Drawing / He Tuhituhi","Pts":15,"Preqs":"one of ARCI 211, INTA 211, LAND 211"},{"Code":"SARC387","Description":"Independent Study / Kaupapa Rangahau Motuhake","Pts":15,"Preqs":""},{"Code":"SARC388","Description":"Psychology and Behaviour in the Built,Environment / Te M?tai Hinengaro me te Whanonga i ng?,Whare Hangahanga","Pts":15,"Preqs":"60 200-level points from the BAS, BBSC Schedule"}],"Y3T2":[{"Code":"SARC321","Description":"Construction / Te Mahi Waihanga","Pts":15,"Preqs":"SARC 221"},{"Code":"SARC352","Description":"Pacific Designed Environments / Ng? Taiao o Te,Moana-nui-a-Kiwa","Pts":15,"Preqs":"one of ARCI 251, INTA 251, LAND 251"},{"Code":"SARC387","Description":"Independent Study / Kaupapa Rangahau Motuhake","Pts":15,"Preqs":""}],"Y8T1":[]},{"Code":"SCIE","Color":"#FFA4FF","Faculty":"SCIENCE","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"SCIE203","Description":"Directed Individual Study","Pts":15,"Preqs":""}],"Y2T2":[],"Y3T1":[{"Code":"SCIE301","Description":"Directed Individual Study","Pts":20,"Preqs":""},{"Code":"SCIE306","Description":"Directed Individual Study","Pts":15,"Preqs":""},{"Code":"SCIE308","Description":"Directed Individual Study","Pts":30,"Preqs":""}],"Y3T2":[{"Code":"SCIE301","Description":"Directed Individual Study","Pts":20,"Preqs":""},{"Code":"SCIE306","Description":"Directed Individual Study","Pts":15,"Preqs":""},{"Code":"SCIE310","Description":"Innovation and Entrepreneurship in Science","Pts":20,"Preqs":"60 200-level BSc or BBMedSc points"}],"Y8T1":[]},{"Code":"SCIS","Color":"#FFA4FF","Faculty":"SCIENCE","Y1T1":[{"Code":"SCIS101","Description":"Science in Everyday Life","Pts":15,"Preqs":""}],"Y1T2":[],"Y2T1":[{"Code":"SCIS211","Description":"Contemporary Issues in Science, Environment,and Technology","Pts":15,"Preqs":"60 100-level points"}],"Y2T2":[{"Code":"SCIS212","Description":"Energy, Society and the Future","Pts":15,"Preqs":"60 100-level points"},{"Code":"SCIS213","Description":"Principles of Science and Science Communication","Pts":15,"Preqs":"60 100-level points"}],"Y3T1":[{"Code":"SCIS311","Description":"Science Communication","Pts":15,"Preqs":"60 200-level points"},{"Code":"SCIS315","Description":"Historical Issues in Science, Environment and,Technology","Pts":15,"Preqs":"60 200-level points"}],"Y3T2":[{"Code":"SCIS313","Description":"Antarctic Science and Culture","Pts":15,"Preqs":"60 200-level points"},{"Code":"SCIS314","Description":"Science Communication Project","Pts":15,"Preqs":"SCIS 311"}],"Y8T1":[]},{"Code":"SIDN","Color":"#FFA4AB","Faculty":"ARCH & DESIGN","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"SIDN221","Description":"Sustainable Design /,Hoahoa ?-Toit?","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedule, or permission of Head of School"},{"Code":"SIDN233","Description":"Design Ethnography I /,T? te Hoahoa Titiro I","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedule, or permission of Head of School"},{"Code":"SIDN272","Description":"Co-Design I / Hoahoa Mahi Ng?tahi I","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedule, or permission of Head of School"}],"Y2T2":[{"Code":"SIDN242","Description":"Speculative Design /,Hoahoa ?-Whakapae","Pts":15,"Preqs":"75 points including 30 from the BDI or BAS Schedule, or permission of Head of School"}],"Y3T1":[{"Code":"SIDN372","Description":"Service Design / Hoahoa ?-Ratonga","Pts":15,"Preqs":"60 200-level points including 30 from the BDI or BAS Schedule, or permission of Head of School"},{"Code":"SIDN381","Description":"Directed Individual Study /,Ako Arahanga Takitahi","Pts":15,"Preqs":""}],"Y3T2":[{"Code":"SIDN332","Description":"Co-Design II","Pts":15,"Preqs":"60 200-level points including SIDN 272"},{"Code":"SIDN382","Description":"Directed Individual Study /,Ako Arahanga Takitahi","Pts":15,"Preqs":"40 200-level points from the BDI Schedule"},{"Code":"SIDN390","Description":"Design for Social Innovation Capstone: Agents of,Change / Whakatinana ?-Wheako: Kaiwhakatinana Panonitanga","Pts":30,"Preqs":"60 200-level points including SIDN 233 and acceptance into the SIDN major"}],"Y8T1":[]},{"Code":"SOSC","Color":"#FFA4FF","Faculty":"HSS","Y1T1":[{"Code":"SOSC111","Description":"Sociology: Foundations and Concepts","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"SOSC102","Description":"Doing Sociology","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"SOSC217","Description":"Special Topic: Masculinities: Hegemony,and Subversion","Pts":20,"Preqs":"20 pts from SOSC 102-112 20 further points from Part A of the BA Schedule"}],"Y2T2":[{"Code":"SOSC216","Description":"Everyday Life","Pts":20,"Preqs":"20 pts from SOSC 102-112 20 points from Part A of the BA Schedule"},{"Code":"SOSC220","Description":"Sociology of Health and Illness","Pts":20,"Preqs":"40 points from Part A of the BA Schedule or(HLWB 101, HLWB 102, HLWB 105)"},{"Code":"SOSC223","Description":"Reflecting on Violence","Pts":20,"Preqs":"20 pts from SOSC 102-112 20 points from Part A of the BA Schedule"}],"Y3T1":[{"Code":"SOSC301","Description":"Investigations in the Social World","Pts":20,"Preqs":"40 points from SACS 200-299, SOSC 200-299"},{"Code":"SOSC305","Description":"Social Organisation","Pts":20,"Preqs":"40 points from SACS 200-299, SOSC 200-299"},{"Code":"SOSC318","Description":"Social Movements and the State","Pts":20,"Preqs":"40 points from SACS 200-299, SOSC 200-299"}],"Y3T2":[{"Code":"SOSC304","Description":"Interpreting Society","Pts":20,"Preqs":"40 points from SACS 200-299, SOSC 200-299"},{"Code":"SOSC306","Description":"Special Topic: Complicating Resistance","Pts":20,"Preqs":"40 points from SACS 200-299, SOSC 200-299"}],"Y8T1":[]},{"Code":"SPAN","Color":"#FFA4FF","Faculty":"HSS","Y1T1":[{"Code":"SPAN101","Description":"Introduction to the Spanish Language","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"SPAN102","Description":"Elementary Spanish","Pts":20,"Preqs":"SPAN 101 or SPAN 111 or NCEA level 2 in Spanish"}],"Y2T1":[{"Code":"SPAN201","Description":"Spanish Language 2A","Pts":20,"Preqs":"SPAN 102 or SPAN 112 or NCEA Level 3 in Spanish"}],"Y2T2":[{"Code":"SPAN202","Description":"Spanish Language 2B","Pts":20,"Preqs":"SPAN 201 or SPAN 215"}],"Y3T1":[{"Code":"SPAN301","Description":"Spanish Language 3A","Pts":20,"Preqs":"SPAN 202 or SPAN 216"}],"Y3T2":[{"Code":"SPAN302","Description":"Spanish Language 3B","Pts":20,"Preqs":"SPAN 301 or SPAN 315"},{"Code":"SPAN314","Description":"Topic in Hispanic Studies: National,Identities and Cultures in the Hispanic World","Pts":20,"Preqs":"40 200-level points from Part A of the BA Schedule"}],"Y8T1":[]},{"Code":"SPCE","Color":"#FFA4C2","Faculty":"SCIENCE","Y1T1":[{"Code":"SPCE101","Description":"Introduction to Space Science","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"SPCE102","Description":"Introduction to the Universe","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"SPCE201","Description":"Our Dynamic Space Neighbourhood","Pts":15,"Preqs":"SPCE 101, 102; one of (COMP 102, 112, 132)"},{"Code":"SPCE245","Description":"Experiments in Space Science","Pts":15,"Preqs":"SPCE 101, 102; one of (COMP 102, 112, 132)"}],"Y2T2":[],"Y3T1":[{"Code":"SPCE301","Description":"Challenges and Solutions for Space Systems","Pts":15,"Preqs":"SPCE 201; SPCE 245 or PHYS 245"},{"Code":"SPCE360","Description":"Topics in Space Science","Pts":15,"Preqs":"SPCE 201; SPCE 245 or PHYS 245"}],"Y3T2":[{"Code":"SPCE345","Description":"Advanced Experiments in Space","Pts":15,"Preqs":"SPCE 245 or PHYS 245"},{"Code":"SPCE360","Description":"Topics in Space Science","Pts":15,"Preqs":"SPCE 201; SPCE 245 or PHYS 245"}],"Y8T1":[]},{"Code":"SPOL","Color":"#FFA4FF","Faculty":"HSS","Y1T1":[{"Code":"SPOL113","Description":"Social and Public Policy: Values and Change","Pts":20,"Preqs":""}],"Y1T2":[],"Y2T1":[{"Code":"SPOL203","Description":"Special Topic: Social Policy:,Power and Transformation","Pts":20,"Preqs":"40 pts from PUBL 113, ECON 130 or Part A of the BA Schedule"}],"Y2T2":[],"Y3T1":[],"Y3T2":[{"Code":"SPOL306","Description":"Social Inequality","Pts":20,"Preqs":"40 pts from SOSC 200-299, SPOL 200-299"}],"Y8T1":[]},{"Code":"STAT","Color":"#FFA4B6","Faculty":"ENGINEERING","Y1T1":[{"Code":"STAT193","Description":"Statistics in Practice","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"STAT193","Description":"Statistics in Practice","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"STAT292","Description":"Applied Statistics 2A","Pts":15,"Preqs":"STAT 193 or one of (ENGR 123, QUAN 102) or a comparable background in Statistics"}],"Y2T2":[{"Code":"STAT293","Description":"Applied Statistics 2B","Pts":15,"Preqs":"STAT 292"}],"Y3T1":[{"Code":"STAT335","Description":"Statistical Models for Actuarial Science","Pts":15,"Preqs":"MATH 277"},{"Code":"STAT391","Description":"Mathematical Methods for Applied Statistics","Pts":15,"Preqs":"STAT 292"},{"Code":"STAT392","Description":"Sample Surveys","Pts":15,"Preqs":"STAT 193 (or equivalent), 30 approved points from 201-399"}],"Y3T2":[{"Code":"STAT332","Description":"Statistical Inferenc","Pts":15,"Preqs":"MATH 243 and MATH 277"},{"Code":"STAT393","Description":"Linear Models","Pts":15,"Preqs":"(MATH 243, 277) or (STAT 293, STAT 391)"},{"Code":"STAT394","Description":"Multivariate Statistics","Pts":15,"Preqs":"MATH 277 or (STAT 292, STAT 391)"}],"Y8T1":[]},{"Code":"SWEN","Color":"#FFAEA4","Faculty":"ENGINEERING","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"SWEN221","Description":"Software Development","Pts":15,"Preqs":"COMP 103"}],"Y2T2":[{"Code":"SWEN225","Description":"Software Design","Pts":15,"Preqs":"SWEN 221"}],"Y3T1":[{"Code":"SWEN301","Description":"Structured Methods","Pts":15,"Preqs":"SWEN 225 or (SWEN 222 and SWEN 223)"},{"Code":"SWEN303","Description":"User Experience Engineering","Pts":15,"Preqs":"COMP 261 or SWEN 221"},{"Code":"SWEN304","Description":"Database System Engineering","Pts":15,"Preqs":"COMP 261 or SWEN 221 ENGR 123 or MATH 161"},{"Code":"SWEN326","Description":"Safety-Critical Systems","Pts":15,"Preqs":"NWEN 241, SWEN 225 (or SWEN 222)"}],"Y3T2":[{"Code":"SWEN324","Description":"Software Correctness","Pts":15,"Preqs":"COMP 103 ENGR 123 or MATH 161 30 200-level COMP/NWEN/SWEN points"},{"Code":"SWEN325","Description":"Software Development for Mobile Platforms","Pts":15,"Preqs":"NWEN 243, SWEN 225 (or SWEN 222)"}],"Y8T1":[]},{"Code":"TAXN","Color":"#FFA4F0","Faculty":"COMMERCE","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"TAXN201","Description":"Introduction to Taxation","Pts":15,"Preqs":"ACCY 131 (or ACCY 115)"}],"Y2T2":[],"Y3T1":[{"Code":"TAXN301","Description":"Advanced Domestic Taxation","Pts":15,"Preqs":"TAXN 201, COML 204"},{"Code":"TAXN303","Description":"International Taxation 1","Pts":15,"Preqs":"TAXN 201"}],"Y3T2":[{"Code":"TAXN301","Description":"Advanced Domestic Taxation","Pts":15,"Preqs":"TAXN 201, COML 204"},{"Code":"TAXN305","Description":"Tax Policy","Pts":15,"Preqs":"TAXN 301"}],"Y8T1":[]},{"Code":"TCHG","Color":"#FFA4B2","Faculty":"EDUCATION","Y1T1":[{"Code":"TCHG117","Description":"Building Authentic Relationships with Children","Pts":15,"Preqs":"TCHG 116"}],"Y1T2":[{"Code":"TCHG105","Description":"T?taimarau me Te Reo M?ori 2: Kia Rere—The,'100' Languages of Children","Pts":20,"Preqs":"TCHG 102, TCHG 104"}],"Y2T1":[{"Code":"TCHG211","Description":"The Multi-Literate Child","Pts":15,"Preqs":"TCHG 111"},{"Code":"TCHG212","Description":"The Musical & Physical Child","Pts":15,"Preqs":"TCHG 111"},{"Code":"TCHG217","Description":"Planning for Diversity","Pts":15,"Preqs":""}],"Y2T2":[{"Code":"TCHG213","Description":"The Inquiring Child","Pts":15,"Preqs":"TCHG 111"},{"Code":"TCHG214","Description":"Developing Professional Partnerships in ECE","Pts":15,"Preqs":"TCHG 111"},{"Code":"TCHG218","Description":"Te Ao Maori II","Pts":15,"Preqs":"TCHG 118"}],"Y3T1":[{"Code":"TCHG304","Description":"Teaching Models and Strategie","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG305","Description":"Early Development and Relationships","Pts":20,"Preqs":"TCHG 301 (or EPSY 301)"},{"Code":"TCHG311","Description":"Early Childhood Teaching and Pedagogy","Pts":20,"Preqs":"TCHG 301 (or EPSY 301)"},{"Code":"TCHG312","Description":"The Multi-literate Child","Pts":20,"Preqs":"TCHG 301 (or EPSY 301)"},{"Code":"TCHG320","Description":"English Literacy and EAL","Pts":20,"Preqs":"TCHG 301 (or EPSY 301)"},{"Code":"TCHG321","Description":"Mathematics and Statistics Education","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG322","Description":"Science, Social Science and Technology","Pts":20,"Preqs":"TCHG 304, TCHG 320, TCHG 321"},{"Code":"TCHG330","Description":"English Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG336","Description":"Learning Languages Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG338","Description":"Mathematics and Statistics Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG340","Description":"Music Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG342","Description":"Performing Arts Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG344","Description":"Science Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG346","Description":"Social Sciences Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG348","Description":"Technology Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG350","Description":"Visual Arts Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG354","Description":"Health Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG356","Description":"Physical Education Curriculum Study 1","Pts":20,"Preqs":"TCHG 301"},{"Code":"TCHG358","Description":"Enhancing Access in the Secondary Curriculum","Pts":20,"Preqs":"TCHG 301, and permission of the Associate Dean"},{"Code":"TCHG361","Description":"Professional Responsibilities in ECE","Pts":15,"Preqs":"TCHG 216"},{"Code":"TCHG362","Description":"Being a Professional EC Teacher","Pts":15,"Preqs":"TCHG 216"},{"Code":"TCHG363","Description":"Investigating Pedagogical Practices","Pts":15,"Preqs":"TCHG 211, TCHG 212, TCHG 213"}],"Y3T2":[{"Code":"TCHG303","Description":"Matauranga Maori in Education","Pts":20,"Preqs":"TCHG 102"},{"Code":"TCHG322","Description":"Science, Social Science and Technology","Pts":20,"Preqs":"TCHG 304, TCHG 320, TCHG 321"},{"Code":"TCHG323","Description":"The Arts, Health and PE and Learning Languages","Pts":20,"Preqs":"TCHG 304, TCHG 320"},{"Code":"TCHG364","Description":"Learning Together: Young Children and Adults,in Early Years Settings","Pts":20,"Preqs":"TCHG 211, TCHG 212"},{"Code":"TCHG368","Description":"Te Ao Maori III","Pts":15,"Preqs":"TCHG 218"}],"Y8T1":[]},{"Code":"THEA","Color":"#FFA4EC","Faculty":"HSS","Y1T1":[{"Code":"THEA101","Description":"The Live Act: Introduction to Theatre","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"THEA113","Description":"Playing for Real (Acting and Performance Skills","Pts":20,"Preqs":""}],"Y2T1":[{"Code":"THEA204","Description":"Classic Theatre Workshop","Pts":20,"Preqs":"THEA 101, THEA 113"},{"Code":"THEA210","Description":"Scenography: Introduction to Theatre,Technologies and Performance Design","Pts":20,"Preqs":"THEA 101, and 20 100-level ENGL or THEA points"}],"Y2T2":[{"Code":"THEA203","Description":"Devised Performance","Pts":20,"Preqs":"THEA 101, THEA 113"},{"Code":"THEA206","Description":"Dramaturgies of the World: Gender and,Sexualities in Performance","Pts":20,"Preqs":"20 THEA points or 40 points from Part A of the BA Schedule"}],"Y3T1":[{"Code":"THEA301","Description":"Company","Pts":30,"Preqs":"THEA 203 or THEA 204"},{"Code":"THEA316","Description":"Playwriting","Pts":20,"Preqs":"20 THEA points or 40 points from Part A of the BA Schedule"},{"Code":"THEA321","Description":"Special Topic: Theatre for Change","Pts":20,"Preqs":""}],"Y3T2":[{"Code":"THEA302","Description":"Conventions of Drama and Theatre","Pts":30,"Preqs":"THEA 203 or THEA 204"},{"Code":"THEA304","Description":"Directing","Pts":30,"Preqs":"THEA 203 or THEA 204"},{"Code":"THEA306","Description":"Dramaturgies of the World:,Gender and Sexualities in Performance","Pts":20,"Preqs":"20 points from THEA 201-299 or ENGL 201-299"}],"Y8T1":[]},{"Code":"TOUR","Color":"#FFA4AE","Faculty":"COMMERCE","Y1T1":[{"Code":"TOUR101","Description":"Introduction to Tourism","Pts":15,"Preqs":""}],"Y1T2":[{"Code":"TOUR102","Description":"Tourism Trends","Pts":15,"Preqs":""}],"Y2T1":[{"Code":"TOUR202","Description":"Tourism Organisations","Pts":15,"Preqs":"MGMT 101, 15 TOUR points"},{"Code":"TOUR203","Description":"Tourist Destination Management","Pts":15,"Preqs":"15 TOUR points"}],"Y2T2":[{"Code":"TOUR201","Description":"Tourist Behaviour","Pts":15,"Preqs":"MARK 101, 15 TOUR points"}],"Y3T1":[{"Code":"TOUR302","Description":"Tourism Live Project","Pts":15,"Preqs":"30 200-level TOUR points"}],"Y3T2":[{"Code":"TOUR303","Description":"Event Management","Pts":15,"Preqs":"30 200-level points from BCOM schedule"},{"Code":"TOUR304","Description":"Tourism Research and Analytics","Pts":15,"Preqs":"QUAN 102 or STAT 193, 30 200-level TOUR points"}],"Y8T1":[]},{"Code":"TSOL","Color":"#FFA4D5","Faculty":"HSS","Y1T1":[],"Y1T2":[],"Y2T1":[{"Code":"TSOL202","Description":"Vocabulary and Grammar for TESOL","Pts":20,"Preqs":"40 points"}],"Y2T2":[{"Code":"TSOL203","Description":"Text and Cultural Context","Pts":20,"Preqs":"40 points"}],"Y3T1":[{"Code":"TSOL301","Description":"Language Teaching: Principles to Practice","Pts":20,"Preqs":"LALS 201, and TSOL 202 or TSOL 203 20 pts in a language other than English or an equivalent second language learning experience"}],"Y3T2":[{"Code":"TSOL302","Description":"Critical Perspectives on the Second,Language Curriculum","Pts":20,"Preqs":"LING 101 or LING 111, and 60 points from Part A of the BA Schedule or from the BTeach Schedule"}],"Y8T1":[]},{"Code":"WRIT","Color":"#FFA4BE","Faculty":"HSS","Y1T1":[{"Code":"WRIT101","Description":"Writing at University","Pts":20,"Preqs":""},{"Code":"WRIT151","Description":"Writing in English as a Second,Language","Pts":20,"Preqs":""}],"Y1T2":[{"Code":"WRIT101","Description":"Writing at University","Pts":20,"Preqs":""},{"Code":"WRIT151","Description":"Writing in English as a Second,Language","Pts":20,"Preqs":""}],"Y2T1":[],"Y2T2":[{"Code":"WRIT203","Description":"Writing for Media","Pts":20,"Preqs":"65 points"}],"Y3T1":[],"Y3T2":[],"Y8T1":[]}];

var allProgs = [{"Name":"PHYS major minimal","LongName":"PHYS major minimal","Y1T1":["PHYS145","MATH151"],"Y1T2":["PHYS142","MATH142"],"Y2T1":["PHYS243","PHYS245"],"Y2T2":["PHYS241","PHYS242","MATH243"],"Y3T1":["PHYS305","PHYS307"],"Y3T2":["PHYS304","PHYS345"]},{"Name":"PHYS/MATH double major","LongName":"PHYS/MATH double major","Y1T1":["PHYS145","MATH151","COMP102"],"Y1T2":["PHYS142","MATH142","MATH161","COMP103"],"Y2T1":["PHYS243","PHYS245","MATH244","MATH277"],"Y2T2":["PHYS241","PHYS242","MATH243","MATH251"],"Y3T1":["PHYS305","PHYS307","MATH321","MATH377"],"Y3T2":["PHYS304","PHYS345","MATH301","MATH318"]},{"Name":"PHYS/CHEM double major","LongName":"PHYS/CHEM double major","Y1T1":["PHYS145","MATH151","CHEM114","GEOG114"],"Y1T2":["PHYS142","MATH142","CHEM115"],"Y2T1":["PHYS243","PHYS245","CHEM202","CHEM206"],"Y2T2":["PHYS241","PHYS242","CHEM201","CHEM203"],"Y3T1":["PHYS305","PHYS307","CHEM301","CHEM303"],"Y3T2":["PHYS304","PHYS345","CHEM302","CHEM306"]},{"Name":"PHYS/DATA double major","LongName":"PHYS/DATA double major","Y1T1":["DATA101","MATH151","PHYS145"],"Y1T2":["COMP132","MATH142","MATH177","PHYS142"],"Y2T1":["DATA202","MATH277","PHYS243","PHYS245"],"Y2T2":["DATA201","MATH251","PHYS241","PHYS242"],"Y3T1":["DATA303","DATA304","PHYS305","PHYS307"],"Y3T2":["DATA301","COMP309","PHYS304","PHYS345"]},{"Name":"PHYS/COMP double major","LongName":"PHYS/COMP double major (example)","Y1T1":["PHYS145","MATH151","COMP102","STAT193"],"Y1T2":["PHYS142","MATH142","COMP103","MATH161"],"Y2T1":["PHYS243","PHYS245","COMP261","SWEN221"],"Y2T2":["PHYS241","PHYS242","NWEN243","SWEN225"],"Y3T1":["PHYS305","PHYS307","COMP304","COMP307"],"Y3T2":["PHYS304","PHYS345","COMP309","COMP313"]},{"Name":"PHYS/Space double major","LongName":"PHYS/Space double major","Y1T1":["PHYS145","MATH151","SPCE101","STAT193"],"Y1T2":["PHYS142","MATH142","SPCE102","COMP132"],"Y2T1":["PHYS243","PHYS245","SPCE201","MATH244"],"Y2T2":["PHYS241","PHYS242","DATA201","GEOG215"],"Y3T1":["PHYS305","PHYS307","SPCE301","SPCE360"],"Y3T2":["PHYS304","PHYS345","SPCE345","GEOG315"]},{"Name":"PHYS/METEO double major","LongName":"PHYS/METEO double major","Y1T1":["PHYS145","MATH151","ESCI111"],"Y1T2":["PHYS142","MATH142","COMP132"],"Y2T1":["PHYS243","PHYS245","MATH244"],"Y2T2":["PHYS241","PHYS242","MATH243"],"Y3T1":["PHYS305","PHYS307","MATH322"],"Y3T2":["PHYS304","PHYS345","MATH323"]},{"Name":"PHYS/GPHYS double major","LongName":"PHYS/GPHYS Solid Earth double major","Y1T1":["PHYS145","MATH151","COMP102"],"Y1T2":["PHYS142","MATH142","ESCI112"],"Y2T1":["PHYS243","PHYS245","ESCI203"],"Y2T2":["PHYS241","PHYS242","MATH243"],"Y3T1":["PHYS305","PHYS307","ESCI305","ESCI344"],"Y3T2":["PHYS304","PHYS345","MATH323"]},{"Name":"PHYS/STAT double major","LongName":"PHYS/DATA double major","Y1T1":["PHYS145","MATH151","COMP102"],"Y1T2":["PHYS142","MATH142","COMP132","MATH177"],"Y2T1":["PHYS243","PHYS245","MATH277"],"Y2T2":["PHYS241","PHYS242","MATH243"],"Y3T1":["PHYS305","PHYS307","DATA304","MATH321"],"Y3T2":["PHYS304","PHYS345","STAT332","STAT393"]},{"Name":"PHYS/SCI-COMM double major","LongName":"PHYS/SCI-COMM double major","Y1T1":["PHYS145","MATH151","SCIS101","COMS101"],"Y1T2":["PHYS142","MATH142"],"Y2T1":["PHYS243","PHYS245","SCIS211","COMS201"],"Y2T2":["PHYS241","PHYS242","MATH243","SCIS213"],"Y3T1":["PHYS305","PHYS307","SCIS311","SCIS315"],"Y3T2":["PHYS304","PHYS345","SCIS313","SCIS314"]},{"Name":"PHYS/Environment Science (DM)","LongName":"PHYS/Environment Science (DM)","Y1T1":["PHYS145","MATH151","STAT193","GEOG114"],"Y1T2":["PHYS142","MATH142","MATH177","ESCI112"],"Y2T1":["PHYS243","PHYS245","MATH277","ESCI203"],"Y2T2":["PHYS241","PHYS242","MATH243","GEOG214"],"Y3T1":["PHYS305","PHYS307","ENSC301"],"Y3T2":["PHYS304","PHYS345","ENSC302","GEOG314"]}];

// Note: Text is required for "OR" conditions

var allMajors = [
    /////////////////
    // Physics Major
    /////////////////
    {
        "Name": "Physics",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["PHYS145", "PHYS142"],
                    "Text": "Required courses: PHYS145, PHYS142",
                },
                { // Either (MATH 142 and MATH 151) or (ENGR 121 and B+ or better in ENGR 122)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (MATH 142 and MATH 151) or (ENGR 121 and B+ or better in ENGR 122)",
                    "List": [
                        {
                            "Type": "ALL",
                            "List": ["MATH142", "MATH151"],
                        },
                        {
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                {
                                    "Type": "ALL",
                                    "List": ["ENGR121"],
                                },
                                {
                                    "Type": "GRADE",
                                    "Grade": "B+",
                                    "List": ["ENGR122"],
                                }],
                        }
                    ],
                },
                { // Three courses from: PHYS241, PHYS242, PHYS243, PHYS245
                    "Type": "SOME",
                    "List": ["PHYS241", "PHYS242", "PHYS243", "PHYS245"],
                    "Howmany": "3",
                    "Text": "Three courses from: PHYS241, PHYS242, PHYS243, PHYS245",
                },
                { // One further course from EEEN 201-204 or  PHYS 201-259
                    "Type": "SOME",
                    "List": ["PHYS241", "PHYS242", "PHYS243", "PHYS245", "EEEN201", "EEEN202", "EEEN203", "EEEN204"],
                    "Howmany": "4", // because 3 required already
                    "Text": "One further course from EEEN 201-204 or  PHYS 201-259",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["PHYS304", "PHYS305", "PHYS307", "PHYS345"],
                    "Text": "Required courses: PHYS304, PHYS305, PHYS307, PHYS345",
                },
                { // Required courses but optional in some cases (double major)
                    "Type": "SOME", // we use SOME here to have the customized text below
                    "List": ["MATH2??"],
                    "Howmany": "1", 
                    "Text": "One course from MATH2xx is strongly recommended (but could be waived for double majors)",
                },

            ]
        }
    },
    /////////////////
    // Chemistry Major
    /////////////////
    {
        "Name": "Chemistry",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["CHEM114", "CHEM115"],
                    "Text": "Required courses: CHEM114, CHEM115",
                },
                { // One course from MATH100-199 or PHYS 100-199
                    "Type": "SOME",
                    "List": ["MATH1??", "PHYS1??"],
                    "Howmany": 1,
                    "Text": "One course from MATH100-199 or PHYS 100-199",
                },
                { // One course from BIOL111, BMSC117, BTEC101, GEOG114, ESCI111, ESCI112
                    "Type": "SOME",
                    "List": ["BIOL111", "BMSC117", "BTEC101", "GEOG114", "ESCI111", "ESCI112"],
                    "Howmany": 1,
                    "Text": "One course from BIOL111, BMSC117, BTEC101, GEOG114, ESCI111, ESCI112",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["CHEM201", "CHEM202", "CHEM203"],
                    "Text": "Required courses: CHEM201, CHEM202, CHEM203",
                },
                { // Either CHEM205 or CHEM206
                    "Type": "SOME", 
                    "List": ["CHEM205","CHEM206"],
                    "Howmany": "1", 
                    "Text": "Either CHEM205 or CHEM206",
                },
               { // Four courses from CHEM301, CHEM302, CHEM303, CHEM305, CHEM306 
                    "Type": "SOME",
                    "List": ["CHEM301", "CHEM302", "CHEM303", "CHEM305", "CHEM306"],
                    "Howmany": 4,
                    "Text": "Four courses from CHEM301, CHEM302, CHEM303, CHEM305, CHEM306",
                },
 
            ]
        }
    },
    /////////////////
    // Math Major
    /////////////////
    {
        "Name": "Mathematics",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["MATH142", "MATH151", "MATH161"],
                    "Text": "Required courses: MATH142, MATH151, MATH161",
                },
                { // One course from COMP100-199, DATA202, ENGR222, MATH245, STAT293
                    "Type": "SOME",
                    "List": ["COMP1??", "DATA202", "ENGR222", "MATH245", "STAT293"],
                    "Howmany": 1,
                    "Text": "One course from COMP1??, DATA202, ENGR222, MATH245, STAT293",
                },
                { // Eight courses from MATH200-399
                    "Type": "SOME",
                    "List": ["MATH2??", "MATH3??"],
                    "Howmany": 8,
                    "Text": "Eight courses from MATH200-399",
                },
                { // Including Four courses from MATH300-399 
                    "Type": "SOME",
                    "List": ["MATH3??"],
                    "Howmany": 4,
                    "Text": "Four courses from MATH300-399",
                },

            ]
        }
    },
    /////////////////
    // Data Major
    /////////////////
    {
        "Name": "Data Science",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["DATA101", "DATA201", "DATA202"],
                    "Text": "Required courses: DATA101, DATA201, DATA202",
                },
                { // (One course from COMP102, COMP112, COMP132) or (INFO151 and INFO226)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "(One course from COMP102, COMP112, COMP132) or (INFO151 and INFO226)",
                    "List": [
                        {
                            "Type": "SOME",
                            "List": ["COMP102", "COMP112", "COMP132", "INFO151"],
                            "Howmany": 1,
                        },
                        {
                            "Type": "ALL",
                            "List": ["INFO151", "INFO226"],
                        }
                    ]
                },
                { // One course from MATH177, QUAN102, STAT193
                    "Type": "SOME",
                    "List": ["MATH177", "QUAN102", "STAT193"],
                    "Howmany": 1,
                    "Text": "One course from MATH177, QUAN102, STAT193",
                },
                { // One course from MATH277, QUAN203, STAT292
                    "Type": "SOME",
                    "List": ["MATH277", "QUAN203", "STAT292"],
                    "Howmany": 1,
                    "Text": "One course from MATH277, QUAN203, STAT292",
                },
                { // One further course from MATH277, QUAN203, STAT292, COMP261, GEOG215, INFO264, MATH245, MATH251, MATH261, PHIL269, QUAN201, STAT293
                    "Type": "SOME",
                    "List": ["MATH277", "QUAN203", "STAT292", "COMP261", "GEOG215", "INFO264", "MATH245", "MATH251", "MATH261", "PHIL269", "QUAN201", "STAT293"],
                    "Howmany": 2,
                    "Text": "One further course from  MATH277, QUAN203, STAT292, COMP261, GEOG215, INFO264, MATH245, MATH251, MATH261, PHIL269, QUAN201, STAT293",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["DATA301", "DATA303", "COMP309"],
                    "Text": "Required courses: DATA301, DATA303, COMP309",
                },
                { // One further course from DATA304-399, COMP307, ECON303, GEOG315, INFO377, MARK317, MATH353, MGMT315, MGMT316, STAT391, STAT392, STAT394, SWEN304
                    "Type": "SOME",
                    "List": ["COMP309", "DATA3??", "COMP307", "ECON303", "GEOG315", "INFO377", "MARK317", "MATH353", "MGMT315", "MGMT316", "STAT391", "STAT392", "STAT394", "SWEN304"],
                    "Howmany": 4,
                    "Text": "One further course from DATA304-399, COMP307, ECON303, GEOG315, INFO377, MARK317, MATH353, MGMT315, MGMT316, STAT391, STAT392, STAT394, SWEN304",
                },

            ]
        }
    },
    /////////////////
    // Comp Major
    /////////////////
    {
        "Name": "Computer Science",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["COMP103", "COMP261"],
                    "Text": "Required courses: COMP103, COMP261",
                },
                { // Either COMP102 or COMP112
                    "Type": "SOME",
                    "List": ["COMP102", "COMP112"],
                    "Howmany": 1,
                    "Text": "Either COMP102 or COMP112",
                },
                { // Either (ENGR121 and ENGR123) or (MATH161 and one course from MATH177, QUAN102, STAT193)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (ENGR121 and ENGR123) or (MATH161 and one course from MATH177, QUAN102, STAT193)",
                    "List": [
                        {
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                {
                                    "Type": "ALL",
                                    "List": ["MATH161"],
                                },
                                {
                                    "Type": "SOME",
                                    "List": ["MATH177", "QUAN102", "STAT193"],
                                    "Howmany": 1,
                                },
                            ],
                        },
                        {
                            "Type": "ALL",
                            "List": ["ENGR121", "ENGR123"],
                        },
                    ]
                },
                { // Three further courses from CGRA200-299, COMP200-299, CYBR200-299, NWEN200-299, SWEN200-299
                    "Type": "SOME",
                    "List": ["CGRA2??", "COMP2??", "CYBR2??", "NWEN2??", "SWEN2??"],
                    "Howmany": 4,
                    "Text": "Three further courses from CGRA200-299, COMP200-299, CYBR200-299, NWEN200-299, SWEN200-299",
                },
                { // Four courses from CGRA300-399, COMP300-399, CYBR300-399, NWEN300-399, SWEN300-399
                    "Type": "SOME",
                    "List": ["CGRA3??", "COMP3??", "CYBR3??", "NWEN3??", "SWEN3??"],
                    "Howmany": 4,
                    "Text": "Four courses from CGRA300-399, COMP300-399, CYBR300-399, NWEN300-399, SWEN300-399",
                },
            ]
        }
    },
    /////////////////
    // Comp Major with Cybersecurity Specialisation
    /////////////////
    {
        "Name": "Cybersecurity (Sp.)",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["COMP103", "CYBR171"],
                    "Text": "Required courses: COMP103, CYBR171"
                },
                { // Either COMP102 or COMP112
                    "Type": "SOME",
                    "List": ["COMP102", "COMP112"],
                    "Howmany": 1,
                    "Text": "Either COMP102 or COMP112",
                },
                { // Either (ENGR121 and ENGR123) or (MATH161 and one course from MATH177, QUAN102, STAT193)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (ENGR121 and ENGR123) or (MATH161 and one course from MATH177, QUAN102, STAT193)",
                    "List": [
                        {
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                {
                                    "Type": "ALL",
                                    "List": ["MATH161"],
                                },
                                {
                                    "Type": "SOME",
                                    "List": ["MATH177", "QUAN102", "STAT193"],
                                    "Howmany": 1,
                                },
                            ],
                        },
                        {
                            "Type": "ALL",
                            "List": ["ENGR121", "ENGR123"],
                        },
                    ]
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["COMP261", "CYBR271", "NWEN241", "NWEN243"],
                    "Text": "Required courses: COMP261, CYBR271, NWEN241, NWEN243",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["CYBR371", "CYBR372"],
                    "Text": "Required courses: CYBR371, CYBR372",
                },

                { // Two further courses from CGRA300-399, COMP300-399, CYBR300-399, NWEN300-399, SWEN300-399
                    "Type": "SOME",
                    "List": ["CGRA3??", "COMP3??", "CYBR3??", "NWEN3??", "SWEN3??"],
                    "Howmany": 4,
                    "Text": "Four courses from CGRA300-399, COMP300-399, CYBR300-399, NWEN300-399, SWEN300-399",
                },

            ]
        }
    },
    /////////////////
    // Geophysics - Meteorology
    /////////////////
    {
        "Name": "Geophys. Meteo.",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Either ESCI111 or ESCI112
                    "Type": "SOME",
                    "List": ["ESCI111", "ESCI112"],
                    "Howmany": 1,
                    "Text": "Either ESCI111 or ESCI112",
                },
                { // Either (MATH142 and MATH151) or (ENGR121 and ENGR122)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (MATH142 and MATH151) or (ENGR121 and ENGR122)",
                    "List": [
                        {
                            "Type": "ALL",
                            "List": ["MATH142", "MATH151"],
                        },
                        {
                            "Type": "ALL",
                            "List": ["ENGR121", "ENGR122"],
                        },
                    ],
                },
                { // Either (PHYS145 and PHYS142) or (ENGR141 and ENGR142)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (PHYS145 and PHYS142) or (ENGR141 and ENGR142)",
                    "List": [
                        {
                            "Type": "ALL",
                            "List": ["PHYS145", "PHYS142"],
                        },
                        {
                            "Type": "ALL",
                            "List": ["ENGR141", "ENGR142"],
                        },
                    ],
                },
                { // One from COMP102, COMP112, COMP132
                    "Type": "SOME",
                    "List": ["COMP102", "COMP112", "COMP132"],
                    "Howmany": 1,
                    "Text": "One from COMP102, COMP112, COMP132",
                },
                { // Two from ENGR222, MATH200-MATH299 (excluding MATH261)
                    "Type": "SOME",
                    "List": ["ENGR222", "MATH21?", "MATH24?", "MATH25?", "MATH27?"],
                    "Howmany": 2,
                    "Text": "Two from ENGR222, MATH200-MATH299 (excluding MATH261)",
                },
                { // Two from PHYS200-299
                    "Type": "SOME",
                    "List": ["PHYS2??"],
                    "Howmany": 2,
                    "Text": "Two from PHYS200-299",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["MATH322", "MATH323"],
                    "Text": "Required courses: MATH322, MATH323",
                },
                { // Two further courses from DATA300-399, MATH300-399, PHYS300-399
                    "Type": "SOME",
                    "List": ["DATA3??", "MATH3??", "PHYS3??"],
                    "Howmany": 4, // 4 because 2 are required
                    "Text": "Two further courses from DATA300-399, MATH300-399, PHYS300-399",
                },

            ]
        }
    },
    /////////////////
    // Geophysics - Solid Earth
    /////////////////
    {
        "Name": "Geophys. Earth",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // ESCI112 required
                    "Type": "ALL",
                    "List": ["ESCI112"],
                    "Text": "Required course: ESCI112",
                },
                { // Either (MATH142 and MATH151) or (ENGR121 and ENGR122)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (MATH142 and MATH151) or (ENGR121 and ENGR122)",
                    "List": [
                        {
                            "Type": "ALL",
                            "List": ["MATH142", "MATH151"],
                        },
                        {
                            "Type": "ALL",
                            "List": ["ENGR121", "ENGR122"],
                        },
                    ],
                },
                { // Either (PHYS145 and PHYS142) or (PHYS145 and PHYS131) or (ENGR141 and ENGR142)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (PHYS145 and PHYS142) or (PHYS145 and PHYS131) or (ENGR141 and ENGR142)",
                    "List": [
                        {
                            "Type": "ALL",
                            "List": ["PHYS145", "PHYS142"],
                        },
                        {
                            "Type": "ALL",
                            "List": ["PHYS145", "PHYS131"],
                        },
                        {
                            "Type": "ALL",
                            "List": ["ENGR141", "ENGR142"],
                        },
                    ],
                },
                { // One from COMP102, COMP112, COMP132
                    "Type": "SOME",
                    "List": ["COMP102", "COMP112", "COMP132"],
                    "Howmany": 1,
                    "Text": "One from COMP102, COMP112, COMP132",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["ESCI203"],
                    "Text": "Required course: ESCI203",
                },
                { // One from PHYS200-299
                    "Type": "SOME",
                    "List": ["PHYS2??"],
                    "Howmany": 1,
                    "Text": "One from PHYS200-299",
                },
                { // Two further courses from ESCI241, DATA202, ENGR222, MATH200-MATH299 (excluding MATH261), PHYS200-299
                    "Type": "SOME",
                    "List": ["ESCI241", "DATA202", "ENGR222", "MATH21?", "MATH24?", "MATH25?", "MATH27?", "PHYS2??"],
                    "Howmany": 3, // Because already one phys course required
                    "Text": "Two further courses from ESCI241, DATA202, ENGR222, MATH200-MATH299 (excluding MATH261), PHYS200-299",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["ESCI305", "ESCI344", "MATH323"],
                    "Text": "Required courses: ESCI305, ESCI344, MATH323",
                },
                { // One further courses from ESCI300-399, MATH300-399, PHYS300-399
                    "Type": "SOME",
                    "List": ["ESCI3??", "MATH3??", "PHYS3??"],
                    "Howmany": 4, // 4 because 3 are required
                    "Text": "One further courses from ESCI300-399, MATH300-399, PHYS300-399",
                },

            ]
        }
    },
    /////////////////
    // Stat Major
    /////////////////
    {
        "Name": "Statistics",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Either MATH177 or STAT193
                    "Type": "SOME",
                    "List": ["MATH177", "STAT193"],
                    "Howmany": 1,
                    "Text": "Either MATH177 or STAT193",
                },
                { // One further course from MATH100-199, STAT100-199
                    "Type": "SOME",
                    "List": ["MATH1??", "STAT1??"],
                    "Howmany": 2, // because already one required
                    "Text": "One further course from MATH100-199, STAT100-199",
                },
                { // Either (MATH243 and MATH277) or (STAT292 and STAT293)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (MATH243 and MATH277) or (STAT292 and STAT293)",
                    "List": [
                        {
                            "Type": "ALL",
                            "List": ["MATH243", "MATH277"],
                        },
                        {
                            "Type": "ALL",
                            "List": ["STAT292", "STAT293"],
                        },
                    ],
                },
                { // 30 further 200-level points from the science schedule or other approved courses
                    "Type": "PTS",
                    "List": ["BIOL2??", "BMSC2??", "BTEC2??", "CHEM2??", "ENSC2??", "ESCI2??", "GEOG2??", "MATH2??", "PHYS2??", "PSYC2??", "SCIE2??", "SCIS2??", "STAT2??"],
                    "Howmany": 60, // because already 30pts required
                    "Text": "30 further points from the science schedule or other approved courses",
                },
                { // Either STAT332 or STAT393
                    "Type": "SOME",
                    "List": ["STAT332", "STAT393"],
                    "Howmany": 1,
                    "Text": "Either STAT332 or STAT393",
                },
                { // One further course from STAT300-399
                    "Type": "SOME",
                    "List": ["STAT3??"],
                    "Howmany": 2, // because one required already
                    "Text": "One further course from STAT300-399",
                },
                { // Two further courses from DATA303, DATA304, MATH300-399, STAT300-399 
                    "Type": "SOME",
                    "List": ["DATA303", "DATA304", "MATH3??", "STAT3??"],
                    "Howmany": 4, // because 2 required already
                    "Text": "Two further courses from DATA303, DATA304, MATH300-399, STAT300-399",
                },

            ]
        }
    },
    /////////////////
    // Science Communication Major
    /////////////////
    {
        "Name": "Science Commun.",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["COMS101", "SCIS101"],
                    "Text": "Required course: COMS101, SCIS101",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["COMS201", "SCIS211", "SCIS213"],
                    "Text": "Required course: COMS201, SCIS211, SCIS213"
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["SCIS311"],
                    "Text": "Required course: SCIS311"
                },
                { // Either CREW352 or SCIS314 (but CREW352 is not offered)
                    "Type": "ALL",
                    "List": ["SCIS314"],
                    "Text": "Required course: SCIS314"
                },
                { // One further course from SCIS300-399
                    "Type": "SOME",
                    "List": ["SCIS3??"],
                    "Howmany": 3, // because already 2 required
                    "Text": "One further course from SCIS300-399",
                },
                { // 15 further points from COMS300-399 or SCIS300-399
                    "Type": "PTS",
                    "List": ["CREW352", "COMS3??", "SCIS3??"],
                    "Howmany": 60, // because already 45 pts required
                    "Text": "15 further points from COMS300-399 or SCIS300-399",
                },
            ]
        }
    },

    /////////////////
    // Biology Major
    /////////////////
    {
        "Name": "Biology",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL111", "BIOL113", "BIOL114", "STAT193"],
                    "Text": "Required course: BIOL111, BIOL113, BIOL114, STAT193",
                },
                { // Three courses from BIOL200-299, BMSC200-299, BTEC200-299
                    "Type": "SOME",
                    "List": ["BIOL2??", "BMSC2??", "BTEC2??"],
                    "Howmany": 3,
                    "Text": "Three courses from BIOL200-299, BMSC200-299, BTEC200-299",
                },
                { // 60 points from BIOL300-399, BMSC300-399, BTEC300-399
                    "Type": "PTS",
                    "List": ["BIOL3??", "BMSC3??", "BTEC3??"],
                    "Howmany": 60,
                    "Text": "60 points from BIOL300-399, BMSC300-399, BTEC300-399",
                },
            ]
        }
    },

    /////////////////
    // Biotechnology Major
    /////////////////
    {
        "Name": "Biotechnology",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL111", "BTEC101", "CHEM114", "CHEM115"],
                    "Text": "Required courses: BIOL111, BTEC101, CHEM114, CHEM115",
                },
                { // Either PHIL106, SCIS211, or PHIL361
                    "Type": "SOME",
                    "List": ["PHIL106", "SCIS211", "PHIL361"],
                    "Howmany": 1,
                    "Text": "Either PHIL106, SCIS211, or PHIL361",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL241", "BTEC201"],
                    "Text": "Required courses: BIOL241, BTEC201",
                },
                { // Two courses from BIOL244, BIOL252, CHEM201, CHEM205
                    "Type": "SOME",
                    "List": ["BIOL244", "BIOL252", "CHEM201", "CHEM205"],
                    "Howmany": 2,
                    "Text": "Two courses from BIOL244, BIOL252, CHEM201, CHEM205",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BTEC301", "SCIE310"],
                    "Text": "Required courses: BTEC301, SCIE310",
                },
                { // One course from BIOL340, BMSC301, BMSC334, BMSC339, CHEM301, CHEM305
                    "Type": "SOME",
                    "List": ["BIOL340", "BMSC301", "BMSC334", "BMSC339", "CHEM301", "CHEM305"],
                    "Howmany": 1,
                    "Text": "One course from BIOL340, BMSC301, BMSC334, BMSC339, CHEM301, CHEM305",
                },
            ]
        }
    },

    /////////////////
    // Cell and Molecular Bioscience
    /////////////////
    {
        "Name": "Cell & Molecular Bio",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL111", "BIOL113", "BIOL114", "CHEM114"],
                    "Text": "Required courses: BIOL111, BIOL113, BIOL114, CHEM114",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL241", "BIOL243", "BIOL244", "BIOL252"],
                    "Text": "Required courses: BIOL241, BIOL243, BIOL244, BIOL252",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL340", "BMSC339"],
                    "Text": "Required courses: BIOL340, BMSC339",
                },
                { // One course from BMSC334, BMSC335, BMSC343, BMSC354, BTEC301
                    "Type": "SOME",
                    "List": ["BMSC334", "BMSC335", "BMSC343", "BMSC354", "BTEC301"],
                    "Howmany": 1,
                    "Text": "One course from BMSC334, BMSC335, BMSC343, BMSC354, BTEC301",
                },
            ]
        }
    },

    /////////////////
    // Ecology and Biodiversity
    /////////////////
    {
        "Name": "Ecology and Biodiversity",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL111", "BIOL113", "BIOL114", "STAT193"],
                    "Text": "Required courses: BIOL111, BIOL113, BIOL114, STAT193",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL222"],
                    "Text": "Required courses: BIOL222",
                },
                { // Either (BIOL241 and two from BIOL227, BIOL228, BIOL236) or (STAT292 and two from BIOL227, BIOL228, BIOL236, BIOL241)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (BIOL241 and two from BIOL227, BIOL228, BIOL236) or (STAT292 and two from BIOL227, BIOL228, BIOL236, BIOL241)",
                    "List": [
                        { // BIOL241 and two from BIOL227, BIOL228, BIOL236
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                { // BIOL241
                                    "Type": "ALL",
                                    "List": ["BIOL241"],
                                },
                                { // two from BIOL227, BIOL228, BIOL236
                                    "Type": "SOME",
                                    "List": ["BIOL227", "BIOL228", "BIOL236"],
                                    "Howmany": 2,
                                },
                            ]
                        },
                        { // STAT292 and two from BIOL227, BIOL228, BIOL236, BIOL241
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                { // STAT292
                                    "Type": "ALL",
                                    "List": ["STAT292"],
                                },
                                { // two from BIOL227, BIOL228, BIOL236, BIOL241
                                    "Type": "SOME",
                                    "List": ["BIOL227", "BIOL228", "BIOL236", "BIOL241"],
                                    "Howmany": 2,
                                },
                            ]
                        },
                    ],
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL327"],
                    "Text": "Required courses: BIOL327",
                },
                { // Two courses from BIOL325, BIOL328, BIOL329
                    "Type": "SOME",
                    "List": ["BIOL325", "BIOL328", "BIOL329"],
                    "Howmany": 2,
                    "Text": "Two courses from BIOL325, BIOL328, BIOL329",
                },
            ]
        }
    },

    /////////////////
    // Marine Biology
    /////////////////
    {
        "Name": "Marine Biology",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL111", "BIOL113", "BIOL114", "STAT193"],
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL227", "BIOL228", "BIOL271", "STAT292"],
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["BIOL371", "BIOL372"],
                },
                { // Either BIOL370 or BIOL373
                    "Type": "SOME",
                    "List": ["BIOL370", "BIOL373"],
                    "Howmany": 1,
                    "Text": "Either BIOL370 or BIOL373",
                },
            ]
        }
    },

    /////////////////
    // Geography
    /////////////////
    {
        "Name": "Geography",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["ESCI111", "GEOG112", "GEOG114", "STAT193"],
                    "Text": "Required courses: ESCI111, GEOG112, GEOG114, STAT193",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["GEOG215", "GEOG217"],
                    "Text": "Required courses: GEOG215, GEOG217",
                },
                { // One course from GEOG212, GEOG214, GEOG216, GEOG222
                    "Type": "SOME",
                    "List": ["GEOG212", "GEOG214", "GEOG216", "GEOG222"],
                    "Howmany": 1,
                    "Text": "One course from GEOG212, GEOG214, GEOG216, GEOG222",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["GEOG324", "GEOG325"],
                    "Text": "Required courses: GEOG324, GEOG325",
                },
                { // One course from GEOG312-316, GEOG322
                    "Type": "SOME",
                    "List": ["GEOG312", "GEOG313", "GEOG314", "GEOG315", "GEOG316", "GEOG322"],
                    "Howmany": 1,
                    "Text": "One course from GEOG312-316, GEOG322",
                },
                { // One further course from GEOG300-399
                    "Type": "SOME",
                    "List": ["GEOG3??"],
                    "Howmany": 2, // because already one 
                    "Text": "One further course from GEOG300-399",
                },
            ]
        }
    },

    /////////////////
    // Physical Geography
    /////////////////
    {
        "Name": "Physical Geography",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { //  Either ESCI112 or GEOG112 
                    "Type": "SOME",
                    "List": ["ESCI112", "GEOG212"],
                    "Howmany": 1,
                    "Text": "Either ESCI112 or GEOG112",
                },
                { //  ESCI111/GEOG111 is required 
                    "Type": "SOME",
                    "List": ["ESCI111", "GEOG211"],
                    "Howmany": 1,
                    "Text": "ESCI111/GEOG111 is required",
                },
                { //  ESCI114/ENVI114 is required 
                    "Type": "SOME",
                    "List": ["ESCI114", "ENVI114"],
                    "Howmany": 1,
                    "Text": "ESCI114/ENVI114 is required",
                },
                { // One course from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199
                    "Type": "SOME",
                    "List": ["MATH1??", "PHYS1??", "QUAN1??", "STAT1??"],
                    "Howmany": 1,
                    "Text": "One course from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["GEOG222"],
                },
                { // Two courses from GEOG215, GEOG220, GEOG224
                    "Type": "SOME",
                    "List": ["GEOG215", "GEOG220", "GEOG224"],
                    "Howmany": 2,
                    "Text": "Two courses from GEOG215, GEOG220, GEOG224",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["GEOG324", "GEOG325"],
                },
                { // Two courses from GEOG318, GEOG319, GEOG321
                    "Type": "SOME",
                    "List": ["GEOG318", "GEOG3139", "GEOG321"],
                    "Howmany": 2,
                    "Text": "Two courses from GEOG318, GEOG319, GEOG321",
                },
            ]
        }
    },

    /////////////////
    // Geology
    /////////////////
    {
        "Name": "Geology",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["ESCI112"],
                },
                { // Either GEOG111 or ESCI111
                    "Type": "SOME",
                    "List": ["GEOG111", "ESCI111"],
                    "Howmany": 1,
                    "Text": "Either GEOG111 or ESCI111",
                },
                { // One from CHEM113-115, MATH141-177, PHYS145, PHYS142, STAT193
                    "Type": "SOME",
                    "List": ["CHEM113", "CHEM114", "CHEM115", "MATH14?", "MATH15?", "MATH16?", "MATH17?", "PHYS145", "PHYS142", "STAT193"],
                    "Howmany": 1,
                    "Text": "One from CHEM113-115, MATH141-177, PHYS145, PHYS142, STAT193",
                },
                { // One futher course from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "One futher course from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199",
                    "List": [
                        { // one of CHEM113-115 and one from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                { // CHEM113-115
                                    "Type": "SOME",
                                    "List": ["CHEM113", "CHEM114", "CHEM115"],
                                    "Howmany": 1,
                                },
                                { // one from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199
                                    "Type": "SOME",
                                    "List": ["MATH1??", "PHYS1??", "QUAN1??", "STAT1??"],
                                    "Howmany": 1,
                                },
                            ]
                        },
                        { // One of MATH141-177, PHYS145, PHYS142, STAT193 and one futher from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                { // One of MATH141-177, PHYS145, PHYS142, STAT193
                                    "Type": "SOME",
                                    "List": ["MATH14?", "MATH15?", "MATH16?", "MATH17?", "PHYS145", "PHYS142", "STAT193"],
                                    "Howmany": 1,
                                },
                                { // one futher from MATH100-199, PHYS100-199, QUAN100-199, STAT100-199
                                    "Type": "SOME",
                                    "List": ["MATH1??", "PHYS1??", "QUAN1??", "STAT1??"],
                                    "Howmany": 2, // because already one
                                },
                            ]
                        },
                    ],
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["ESCI202", "ESCI203", "ESCI204", "ESCI241"],
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["ESCI301", "ESCI302", "ESCI341", "ESCI342"],
                },
                { // Either ESCI303 or ESCI305
                    "Type": "SOME",
                    "List": ["ESCI303", "ESCI305"],
                    "Howmany": 1,
                    "Text": "Either ESCI303 or ESCI305",
                },
                


            ]
        }
    },

    /////////////////
    // MÄori studies (BA)
    /////////////////
    {
        "Name": "Maori studies (BA)",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["MAOR111", "MAOR112", "MAOR123"],
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["MAOR211", "MAOR221"],
                },
                { // One further course from MAOR200-299
                    "Type": "SOME",
                    "List": ["MAOR2??"],
                    "Howmany": 3, // because already two required
                    "Text": "One further course from MAOR200-299",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["MAOR313"],
                },
                { // One further course from MAOR300-399
                    "Type": "SOME",
                    "List": ["MAOR3??"],
                    "Howmany": 2, // because already one required
                    "Text": "One further course from MAOR300-399",
                },
            ]
        }
    },

    /////////////////
    // MÄori Resource Mgmt (BA)
    /////////////////
    {
        "Name": "Maori Resource Mgmt (BA)",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["MAOR123"],
                },
                { // Two courses from MAOR101, MAOR102, MAOR111, MAOR112
                    "Type": "SOME",
                    "List": ["MAOR101", "MAOR102", "MAOR111", "MAOR112"],
                    "Howmany": 2,
                    "Text": "Two courses from MAOR101, MAOR102, MAOR111, MAOR112",
                },
                { // One course from MAOR202, MAOR203, MAOR217, MAOR222
                    "Type": "SOME",
                    "List": ["MAOR202", "MAOR203", "MAOR217", "MAOR222"],
                    "Howmany": 1,
                    "Text": "One course from MAOR202, MAOR203, MAOR217, MAOR222",
                },
                { // One further course from MAOR202, MAOR203, MAOR217, MAOR222, MGMT200-299
                    "Type": "SOME",
                    "List": ["MAOR202", "MAOR203", "MAOR217", "MAOR222", "MGMT2??"],
                    "Howmany": 2, // because already one
                    "Text": "One further course from MAOR202, MAOR203, MAOR217, MAOR222, MGMT200-299",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["MAOR301"],
                },
                { // Either MAOR302 or MAOR316
                    "Type": "SOME",
                    "List": ["MAOR302", "MAOR316"],
                    "Howmany": 1,
                    "Text": "Either MAOR302 or MAOR316",
                },
            ]
        }
    },

    /////////////////
    // AIML Major (maybe from 2023)
    /////////////////
    {
        "Name": "AI (from 2023)",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["AIML131", "COMP103"],
                    "Text": "Required courses: AIML131, COMP103",
                },
                { // Either COMP102 or COMP112
                    "Type": "SOME",
                    "List": ["COMP102", "COMP112"],
                    "Howmany": 1,
                    "Text": "Either COMP102 or COMP112",
                },
                { // Either (ENGR121 and ENGR123) or (MATH161 and one course from MATH177, QUAN102, STAT193)
                    "Type": "COND",
                    "Bool": "OR",
                    "Text": "Either (ENGR121 and ENGR123) or (MATH161 and one course from MATH177, QUAN102, STAT193)",
                    "List": [
                        {
                            "Type": "COND",
                            "Bool": "AND",
                            "List": [
                                {
                                    "Type": "ALL",
                                    "List": ["MATH161"],
                                },
                                {
                                    "Type": "SOME",
                                    "List": ["MATH177", "QUAN102", "STAT193"],
                                    "Howmany": 1,
                                },
                            ],
                        },
                        {
                            "Type": "ALL",
                            "List": ["ENGR121", "ENGR123"],
                        },
                    ]
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["AIML231", "AIML232"],
                    "Text": "Required courses: AIML231, AIML232",
                },
                { // Either COMP261, NWEN241, or SWEN221
                    "Type": "SOME",
                    "List": ["COMP261", "NWEN241", "SWEN221"],
                    "Howmany": 1,
                    "Text": "Either COMP261, NWEN241, or SWEN221",
                },
                { // Either MATH171 or STAT292
                    "Type": "SOME",
                    "List": ["MATH177", "STAT292"],
                    "Howmany": 1,
                    "Text": "Either MATH177 or STAT292",
                },
                { // Either DATA201, DATA202, or ENGR222
                    "Type": "SOME",
                    "List": ["DATA201", "DATA202", "ENGR222"],
                    "Howmany": 1,
                    "Text": "Either DATA201, DATA202, or ENGR222",
                },
                { // Either AIML335 or AIML339
                    "Type": "SOME",
                    "List": ["AIML335", "AIML339"],
                    "Howmany": 1,
                    "Text": "Either AIML335 or AIML339",
                },
                { // 30 further points from AIML331-335, AIML339
                    "Type": "PTS",
                    "List": ["AIML331", "AIML332", "AIML333", "AIML335", "AIML339"],
                    "Howmany": 45, // as 15 points already from previous req
                    "Text": "30 further points from AIML331-335, AIML339",
                },
                { // 15 further points from AIML331-339, COMP361, SWEN303, SWEN304, DATA301-304
                    "Type": "PTS",
                    "List": ["AIML33?", "COMP361", "SWEN303", "SWEN304", "DATA301", "DATA302", "DATA303", "DATA304"],
                    "Howmany": 60, // as 45 points already from previous req
                    "Text": "15 further points from AIML331-339, COMP361, SWEN303, SWEN304, DATA301-304",
                },

            ]
        }
    },
    /////////////////
    // SPCE Major (from 2023)
    /////////////////
    {
        "Name": "SPCE (from 2023)",
        "Reqs": {
            "Type": "COND",
            "Bool": "AND",
            "List": [
                { // Required courses
                    "Type": "ALL",
                    "List": ["SPCE101", "SPCE102"],
                    "Text": "Required courses: SPCE101, SPCE102",
                },
                { // Either COMP102, COMP112, or COMP132
                    "Type": "SOME",
                    "List": ["COMP102", "COMP112", "COMP132"],
                    "Howmany": 1,
                    "Text": "Either COMP102, COMP112, or COMP132",
                },
                { // One of MATH132, MATH141, MATH142, ENGR121, QUAN111
                    "Type": "SOME",
                    "List": ["MATH132", "MATH141", "MATH142", "ENGR121", "QUAN111"],
                    "Howmany": 1,
                    "Text": "Either COMP102, COMP112, or COMP132",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["SPCE201", "DATA201", "GEOG215"],
                    "Text": "Required course: SPCE201, DATA201, GEOG215",
                },
                { // Either SPCE245 or PHYS245
                    "Type": "SOME",
                    "List": ["SPCE245", "PHYS245"],
                    "Howmany": 1,
                    "Text": "Either SPCE245 or PHYS245",
                },
                { // Required courses
                    "Type": "ALL",
                    "List": ["SPCE301", "SPCE345", "GEOG315"],
                    "Text": "Required course: SPCE201, DATA201, GEOG215",
                },
                { // One of ESCI305, SCIS311, SPCE360
                    "Type": "SOME",
                    "List": ["ESCI305", "SCIS311", "SPCE360"],
                    "Howmany": 1,
                    "Text": "One of ESCI305, SCIS311, SPCE360",
                },
            ]
        }
    },
    /////////////////
    // Next Major here
    /////////////////
];
