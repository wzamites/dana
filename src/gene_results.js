//TP53, EGFR, TNF, APOE, VEGFA, IL6, MTHFR, TGFB1, ESR1, ERBB2

const geneHash = {
"TP53" : "7157",
"EGFR" : "1956",
"TNF" : "7124",
"APOE" : "348",
"VEGFA" : "7422",
"IL6" : "3569",
"MTHFR" : "4524",
"TGFB1" : "7040",
"ESR1" : "2099",
"ERBB2" : "2064",
"ACE" : "1636",
"IL10" : "3586",
"HIF1A" : "3091",
"APP" : "351",
"BRCA1" : "672",
"MMP9" : "4318",
"HLA-DRB1" : "3123",
"ADIPOQ" : "9370",
"ABCB1" : "5243",
"NFKB1" : "4790",
"AKT1" : "207",
"CRP" : "1401",
"AR" : "367",
"BDNF" : "627",
"BRAF" : "673",
"STAT3" : "6774",
"KRAS" : "3845",
"CDKN2A" : "1029",
"PTGS2" : "5743",
"IL1B" : "3553",
"VDR" : "7421",
"NOS3" : "4846",
"TLR4" : "7099",
"COMT" : "1312",
"CTNNB1" : "1499",
"PTEN" : "5728",
"CXCL8" : "3576",
"CFTR" : "1080",
"PPARG" : "5468",
"LOC110806262" : "110806262",
"SLC6A4" : "6532",
"HLA-B" : "3106",
"TERT" : "7015",
"SNCA" : "6622",
"GSTT1" : "2952",
"CDH1" : "999",
"IGF1" : "3479",
"MYC" : "4609",
"GSTM1" : "2944",
"BCL2" : "596",
"MTOR" : "2475",
"MAPT" : "4137",
"LEP" : "3952",
"CD4" : "920",
"CXCR4" : "7852",
"IFNG" : "3458",
"MDM2" : "4193",
"JAK2" : "3717",
"BRCA2" : "675",
"MMP2" : "4313",
"MAPK1" : "5594",
"SERPINE1" : "5054",
"CCND1" : "595",
"CCR5" : "1234",
"CDKN1A" : "1026",
"PON1" : "5444",
"CCL2" : "6347",
"BIRC5" : "332",
"NPPB" : "4879",
"F2" : "2147",
"GSTP1" : "2950",
"PIK3CA" : "5290",
"SOD1" : "6647",
"IL17A" : "3605",
"HLA-A" : "3105",
"TLR2" : "7097",
"CTLA4" : "1493",
"F5" : "2153",
"HLA-DQB1" : "3119",
"HFE" : "3077",
"DRD2" : "1813",
"CXCL12" : "6387",
"CD274" : "29126",
"CD44" : "960",
"NOTCH1" : "4851",
"ATM" : "472",
"NFE2L2" : "4780",
"MET" : "4233",
"XRCC1" : "7515",
"CYP2D6" : "1565",
"KIT" : "3815",
"MIR21" : "406991",
"NR3C1" : "2908",
"CYP2C19" : "1557",
"FAS" : "355",
"ADRB2" : "154",
"ICAM1" : "3383",
"SIRT1" : "23411",
"HMOX1" : "3162",
"ESR2" : "2100",
"HMGB1" : "3146",
"RELA" : "5970",
"IL18" : "3606",
"SPP1" : "6696",
"FOXP3" : "50943",
"RB1" : "5925",
"HLA-G" : "3135",
"MAPK14" : "1432",
"IL4" : "3565",
"AGT" : "183",
"LRRK2" : "120892",
"VWF" : "7450",
"APOA1" : "335",
"GSK3B" : "2932",
"GHRL" : "51738",
"IGF1R" : "3480",
"SRC" : "6714",
"AGER" : "177",
"RET" : "5979",
"GJB2" : "2706",
"ITGB3" : "3690",
"NOD2" : "64127",
"CASP3" : "836",
"ITGB1" : "3688",
"CYP1A1" : "1543",
"MLH1" : "4292",
"PRNP" : "5621",
"EZH2" : "2146",
"PARP1" : "142",
"CAV1" : "857",
"INS" : "3630",
"MBL2" : "4153",
"SOD2" : "6648",
"MAPK3" : "5595",
"EDN1" : "1906",
"SLC6A3" : "6531",
"MUC1" : "4582",
"HBB" : "3043",
"CYP2C9" : "1559",
"CDKN1B" : "1027",
"MMP1" : "4312",
"ABCG2" : "9429",
"SP1" : "6667",
"JUN" : "3725",
"RAC1" : "5879",
"AGTR1" : "185",
"TNFSF10" : "8743",
"IL1RN" : "3557",
"FTO" : "79068",
"APC" : "324",
"CFH" : "3075",
"BAX" : "581",
"APOB" : "338",
"KDR" : "3791",
"CYP3A4" : "1576",
"LGALS3" : "3958",
"TP63" : "8626",
"CYP19A1" : "1588",
"LCN2" : "3934",
"LMNA" : "4000",
"LDLR" : "3949",
"PDCD1" : "5133",
"PTK2" : "5747",
"HLA-C" : "3107",
"MGMT" : "4255",
"HGF" : "3082",
"PSEN1" : "5663",
"UGT1A1" : "54658",
"F8" : "2157",
"MIF" : "4282",
"RHOA" : "387",
"CD14" : "929",
"NOS2" : "4843",
"TNFRSF11B" : "4982",
"EP300" : "2033",
"WT1" : "7490",
"PRKN" : "5071",
"FGF2" : "2247",
"FLT3" : "2322",
"COL1A1" : "1277",
"LPL" : "4023",
"MKI67" : "4288",
"ALK" : "238",
"IL1A" : "3552",
"DRD4" : "1815",
"ERCC2" : "2068",
"TCF7L2" : "6934",
"ABCA1" : "19",
"VHL" : "7428",
"HBA1" : "3039",
"IFNL3" : "282617",
"HTR2A" : "3356",
"PGR" : "5241",
"KCNH2" : "3757",
"STAT1" : "6772",
"SCN5A" : "6331",
"FMR1" : "2332",
"TTR" : "7276",
"MECP2" : "4204",
"NAT2" : "10",
"MAPK8" : "5599",
"HSP90AA1" : "3320",
"IDH1" : "3417",
"HRAS" : "3265",
"CETP" : "1071",
"SERPINA1" : "5265",
"ABL1" : "25",
"NPM1" : "4869",
"CASP8" : "841",
"FN1" : "2335",
"IL2" : "3558",
"PRKCA" : "5578",
"HBB-LCR" : "109580095",
"MSH2" : "4436",
"TLR9" : "54106",
"F3" : "2152",
"HTT" : "3064",
"ALB" : "213",
"EGF" : "1950",
"MIR146A" : "406938",
"MPO" : "4353",
"MMP3" : "4314",
"PTPN11" : "5781",
"TARDBP" : "23435",
"ALDH2" : "217",
"CYP3A5" : "1577",
"FLT1" : "2321",
"RUNX1" : "861",
"YAP1" : "10413",
"HDAC1" : "3065",
"UBC" : "7316",
"ERCC1" : "2067",
"CST3" : "1471",
"MAOA" : "4128",
"IGFBP3" : "3486",
"AURKA" : "6790",
"CCL5" : "6352",
"GJA1" : "2697",
"RETN" : "56729",
"LEPR" : "3953",
"IGF2" : "3481",
"OPRM1" : "4988",
"INSR" : "3643",
"NLRP3" : "114548",
"FGFR2" : "2263",
"OGG1" : "4968",
"E2F1" : "1869",
"SLC2A1" : "6513",
"TNFRSF1A" : "7132",
"PPARGC1A" : "10891",
"HLA-DQA1" : "3117",
"BMP2" : "650",
"TP73" : "7161",
"FASLG" : "356",
"CXCL10" : "3627",
"MIR155" : "406947",
"CYP2E1" : "1571",
"MCL1" : "4170",
"SMAD4" : "4089",
"PROM1" : "8842",
"HSPA5" : "3309",
"PLK1" : "5347",
"CDK1" : "983",
"TNFSF11" : "8600",
"FGFR3" : "2261",
"FGF23" : "8074",
"TLR3" : "7098",
"PTPN22" : "26191",
"C3" : "718",
"BSG" : "682",
"APEX1" : "328",
"KCNQ1" : "3784",
"NAMPT" : "10135",
"POU5F1" : "5460",
"TIMP1" : "7076",
"TYMS" : "7298",
"SMAD3" : "4088",
"BCL2L1" : "598",
"CREBBP" : "1387",
"PLAUR" : "5329",
"FGFR1" : "2260",
"GNAS" : "2778",
"AHR" : "196",
"IL13" : "3596",
"DMD" : "1756",
"CHEK2" : "11200",
"CYP17A1" : "1586",
"RAD51" : "5888",
"CCN2" : "1490",
"CD40LG" : "959",
"CASR" : "846",
"PCSK9" : "255738",
"TWIST1" : "7291",
"CD40" : "958",
"CDK2" : "1017",
"CLU" : "1191",
"CSNK2A1" : "1457",
"DPP4" : "1803",
"ADAMTS13" : "11093",
"DNMT1" : "1786",
"NF1" : "4763",
"CYP1B1" : "1545",
"SOX2" : "6657",
"NQO1" : "1728",
"MICA" : "100507436",
"HSPB1" : "3315",
"PRKCD" : "5580",
"MEFV" : "4210",
"FOXO3" : "2309",
"MIR34A" : "407040",
"CNR1" : "1268",
"NRG1" : "3084",
"PPARA" : "5465",
"GRB2" : "2885",
"CREB1" : "1385",
"APOBEC3G" : "60489",
"PCNA" : "5111",
"CALCA" : "796",
"LOC108684022" : "108684022",
"PIK3R1" : "5295",
"PLAU" : "5328",
"BMI1" : "648",
"MMP14" : "4323",
"KLK3" : "354",
"IL2RA" : "3559",
"GRN" : "2896",
"F7" : "2155",
"FOXO1" : "2308",
"CHI3L1" : "1116",
"GBA" : "2629",
"XIAP" : "331",
"SHH" : "6469",
"HSPA4" : "3308",
"IRS1" : "3667",
"RUNX2" : "860",
"CBL" : "867",
"HAMP" : "57817",
"VCAM1" : "7412",
"IL12B" : "3593",
"ENG" : "2022",
"TGM2" : "7052",
"CDC42" : "998",
"RASSF1" : "11186",
"VIM" : "7431",
"FBN1" : "2200",
"LTA" : "4049",
"IL33" : "90865",
"P2RX7" : "5027",
"IDO1" : "3620",
"SQSTM1" : "8878",
"THBS1" : "7057",
"ITGAV" : "3685",
"FCGR2A" : "2212",
"KMT2A" : "4297",
"CD36" : "948",
"TNFSF13B" : "10673",
"EPO" : "2056",
"CALR" : "811",
"PML" : "5371",
"GH1" : "2688",
"TGFBR2" : "7048",
"FLG" : "2312",
"APOA5" : "116519",
"TNNT2" : "7139",
"CYP1A2" : "1544",
"HNF1A" : "6927",
"NFKBIA" : "4792",
"LPA" : "4018",
"PTX3" : "5806",
"PDGFRA" : "5156",
"S100B" : "6285",
"SYK" : "6850",
"EZR" : "7430",
"DICER1" : "23405",
"TSHR" : "7253",
"RAF1" : "5894",
"G6PD" : "2539",
"FOXM1" : "2305",
"ITGB2" : "3689",
"HNF4A" : "3172",
"IL15" : "3600",
"NRAS" : "4893",
"DKK1" : "22943",
"GNB3" : "2784",
"STK11" : "6794",
"HP" : "3240",
"CEBPA" : "1050",
"EPAS1" : "2034",
"PRKACA" : "5566",
"BECN1" : "8678",
"ANGPT2" : "285",
"CYP21A2" : "1589",
"PRKDC" : "5591",
"B2M" : "567",
"AMH" : "268",
"HSPA1A" : "3303",
"TNFRSF1B" : "7133",
"S100A9" : "6280",
"MMP7" : "4316",
"VEGFC" : "7424",
"MC4R" : "4160",
"LGALS1" : "3956",
"MIR145" : "406937",
"TOP2A" : "7153",
"FCGR3A" : "2214",
"ADM" : "133",
"SNAI1" : "6615",
"FYN" : "2534",
"GDF15" : "9518",
"CCR2" : "729230",
"ANXA2" : "302",
"NOTCH3" : "4854",
"XRCC3" : "7517",
"ERBB3" : "2065",
"RBP4" : "5950",
"VKORC1" : "79001",
"CD209" : "30835",
"PROC" : "5624",
"CHEK1" : "1111",
"PDGFRB" : "5159",
"ATP7B" : "540",
"SOCS3" : "9021",
"SCN1A" : "6323",
"SELE" : "6401",
"BCL2L11" : "10018",
"MYCN" : "4613",
"ELAVL1" : "1994",
"PARK7" : "11315",
"EGR1" : "1958",
"PLG" : "5340",
"OXTR" : "5021",
"PIN1" : "5300",
"MC1R" : "4157",
"PAH" : "5053",
"KCNJ11" : "3767",
"TRPV1" : "7442",
"TGFBR1" : "7046",
"ATR" : "545",
"NBN" : "4683",
"H2AFX" : "3014",
"SELP" : "6403",
"PKM" : "5315",
"HPSE" : "10855",
"LCK" : "3932",
"MYD88" : "4615",
"DDX58" : "23586",
"TRAF6" : "7189",
"FHIT" : "2272",
"KL" : "9365",
"C9orf72" : "203228",
"BMP4" : "652",
"HTR1A" : "3350",
"LRP1" : "4035",
"CBS" : "875",
"PAK1" : "5058",
"RUNX3" : "864",
"FGB" : "2244",
"BACE1" : "23621",
"TNFAIP3" : "7128",
"PRKAA1" : "5562",
"AFP" : "174",
"ABCC1" : "4363",
"ERG" : "2078",
"LTF" : "4057",
"CDK4" : "1019",
"COL2A1" : "1280",
"ADRB1" : "153",
"SMAD2" : "4087",
"ITGA2B" : "3674",
"IAPP" : "3375",
"TPMT" : "7172",
"PAX6" : "5080",
"PPIA" : "5478",
"ZEB1" : "6935",
"HMGA2" : "8091",
"APOC3" : "345",
"GATA3" : "2625",
"CAMP" : "820",
"TIMP2" : "7077",
"DNMT3A" : "1788",
"F2R" : "2149",
"CAT" : "847",
"SUMO1" : "7341",
"ADORA2A" : "135",
"FUS" : "2521",
"VCP" : "7415",
"KLF4" : "9314",
"TNNI3" : "7137",
"CEBPB" : "1051",
"SOX9" : "6662",
"HLA-DPB1" : "3115",
"IL6R" : "3570",
"ADAM17" : "6868",
"WNT5A" : "7474",
"BCR" : "613",
"ADRB3" : "155",
"IL21" : "59067",
"UCP2" : "7351",
"STIM1" : "6786",
"SLC4A1" : "6521",
"SHC1" : "6464",
"DRD3" : "1814",
"GHR" : "2690",
"HDAC2" : "3066",
"FSHR" : "2492",
"MYH9" : "4627",
"CYP11B2" : "1585",
"ALDH1A1" : "216",
"PLAT" : "5327",
"NCAM1" : "4684",
"HSPD1" : "3329",
"TF" : "7018",
"YBX1" : "4904",
"KLRK1" : "22914",
"POSTN" : "10631",
"AHSG" : "197",
"IKBKB" : "3551",
"PINK1" : "65018",
"IFNB1" : "3456",
"F2RL1" : "2150",
"IL4R" : "3566",
"FGA" : "2243",
"SHBG" : "6462",
"SPARC" : "6678",
"SMARCB1" : "6598",
"ROCK1" : "6093",
"POLG" : "5428",
"SKP2" : "6502",
"PGF" : "5228",
"PTH" : "5741",
"EIF4E" : "1977",
"EPCAM" : "4072",
"AVP" : "551",
"DNMT3B" : "1789",
"CD34" : "947",
"SERPINF1" : "5176",
"TSC2" : "7249",
"SDC1" : "6382",
"PLA2G7" : "7941",
"NOS1" : "4842",
"ITGA2" : "3673",
"IL23R" : "149233",
"F13A1" : "2162",
"CYP2B6" : "1555",
"RXRA" : "6256",
"TXN" : "7295",
"GC" : "2638",
"GCK" : "2645",
"PNPLA3" : "80339",
"NR1I2" : "8856",
"ADH1B" : "125",
"SOCS1" : "8651",
"SLCO1B1" : "10599",
"FLNA" : "2316",
"XPC" : "7508",
"NPY" : "4852",
"CA9" : "768",
"CALM1" : "801",
"CYP2A6" : "1548",
"CYBB" : "1536",
"CDX2" : "1045",
"SLC26A4" : "5172",
"CACNA1C" : "775",
"CFLAR" : "8837",
"BCL6" : "604",
"CYBA" : "1535",
"RYR1" : "6261",
"GCG" : "2641",
"HOTAIR" : "100124700",
"PIK3CG" : "5294",
"CCNE1" : "898",
"OLR1" : "4973",
"AURKB" : "9212",
"MME" : "4311",
"PTPN6" : "5777",
"ORAI1" : "84876",
"FOS" : "2353",
"HSPA8" : "3312",
"NGF" : "4803",
"EIF2AK2" : "5610",
"SMARCA4" : "6597",
"IL22" : "50616",
"S100A4" : "6275",
"PRL" : "5617",
"NME1" : "4830",
"GLI1" : "2735",
"XPO1" : "7514",
"AQP4" : "361",
"ZAP70" : "7535",
"F9" : "2158",
"ETS1" : "2113",
"CD28" : "940",
"CHRNA7" : "1139",
"TFRC" : "7037",
"MALAT1" : "378938",
"EPHX1" : "2052",
"WRN" : "7486",
"THBD" : "7056",
"SCARB1" : "949",
"MEN1" : "4221",
"GPX1" : "2876",
"MIR122" : "406906",
"CASP9" : "842",
"SREBF1" : "6720",
"NTRK1" : "4914",
"YWHAZ" : "7534",
"HBA2" : "3040",
"IRF3" : "3661",
"AQP1" : "358",
"MUC16" : "94025",
"RARA" : "5914",
"SMN1" : "6606",
"PRKCB" : "5579",
"IL12A" : "3592",
"GP1BA" : "2811",
"TGFBI" : "7045",
"CRYAB" : "1410",
"POLR2A" : "5430",
"NF2" : "4771",
"COL1A2" : "1278",
"PTPN1" : "5770",
"F10" : "2159",
"H19" : "283120",
"MTR" : "4548",
"CCNB1" : "891",
"MUTYH" : "4595",
"UBE2I" : "7329",
"HSF1" : "3297",
"CDKN2B" : "1030",
"PTPRC" : "5788",
"ERBB4" : "2066",
"HAVCR2" : "84868",
"PPARD" : "5467",
"PECAM1" : "5175",
"SOST" : "50964",
"IKBKG" : "8517",
"ITGA5" : "3678",
"NKX2-1" : "7080",
"TOP1" : "7150",
"XRCC6" : "2547",
"ACTB" : "60",
"CTSB" : "1508",
"FGG" : "2266",
"BST2" : "684",
"CHUK" : "1147",
"L1CAM" : "3897",
"FGF21" : "26291",
"TTN" : "7273",
"SERPINC1" : "462",
"CHGA" : "1113",
"MTDH" : "92140",
"RPS6KB1" : "6198",
"BTK" : "695",
"NES" : "10763",
"PDGFB" : "5155",
"FKBP5" : "2289",
"TPH2" : "121278",
"FBXW7" : "55294",
"NGFR" : "4804",
"MSH6" : "2956",
"ANXA1" : "301",
"MYOC" : "4653",
"PKD1" : "5310",
"TNFRSF10B" : "8795",
"NTRK2" : "4915",
"POMC" : "5443",
"UCHL1" : "7345",
"ELN" : "2006",
"GAPDH" : "2597",
"MUC5AC" : "4586",
"CX3CR1" : "1524",
"ABCC2" : "1244",
"MAP2K1" : "5604",
"NOX4" : "50507",
"TSLP" : "85480",
"IDH2" : "3418",
"ABCA4" : "24",
"BGLAP" : "632",
"CXCR2" : "3579",
"ACE2" : "59272",
"ABO" : "28",
"CTSD" : "1509",
"MYH7" : "4625",
"ADAR" : "103",
"CDH2" : "1000",
"EPHA2" : "1969",
"YY1" : "7528",
"MMP13" : "4322",
"XRCC5" : "7520",
"ALOX5" : "240",
"GZMB" : "3002",
"NCL" : "4691",
"CD24" : "100133941",
"STAT6" : "6778",
"FASN" : "2194",
"ITGAM" : "3684",
"HTR2C" : "3358",
"APOH" : "350",
"BCHE" : "590",
"ILK" : "3611",
"CX3CL1" : "6376",
"IL7R" : "3575",
"DISC1" : "27185",
"SAA1" : "6288",
"SERPINB5" : "5268",
"MITF" : "4286",
"PTCH1" : "5727",
"ELANE" : "1991",
"DEFB4A" : "1673",
"LIPC" : "3990",
"NCOA3" : "8202",
"STAT5A" : "6776",
"IGFBP1" : "3484",
"KISS1" : "3814",
"CACNA1A" : "773",
"HLA-E" : "3133",
"TIMP3" : "7078",
"PAPPA" : "5069",
"ADAM10" : "102",
"HDAC6" : "10013",
"LOC109504728" : "109504728",
"HSD11B1" : "3290",
"FABP4" : "2167",
"OPA1" : "4976",
"ALPL" : "249",
"CD38" : "952",
"GJB1" : "2705",
"NPPA" : "4878",
"PLCG1" : "5335",
"ANGPT1" : "284",
"S100A8" : "6279",
"MYB" : "4602",
"NRP1" : "8829",
"MIR126" : "406913",
"CD163" : "9332",
"AXL" : "558",
"CEACAM1" : "634",
"IFNA1" : "3439",
"CPB2" : "1361",
"GRIN2B" : "2904",
"WWOX" : "51741",
"HNF1B" : "6928",
"GPER1" : "2852",
"TNC" : "3371",
"TRAF2" : "7186",
"IRF1" : "3659",
"ADA" : "100",
"ID1" : "3397",
"TLR7" : "51284",
"PDPN" : "10630",
"SRD5A2" : "6716",
"AICDA" : "57379",
"BMPR2" : "659",
"REN" : "5972",
"MTRR" : "4552",
"CRHR1" : "1394",
"LYN" : "4067",
"JAK1" : "3716",
"GLA" : "2717",
"CR1" : "1378",
"LRP5" : "4041",
"BAP1" : "8314",
"CCR7" : "1236",
"STMN1" : "3925",
"JAG1" : "182",
"GFAP" : "2670",
"IL7" : "3574",
"MIR221" : "407006",
"TET2" : "54790",
"HDAC3" : "8841",
"PRKCE" : "5581",
"GSN" : "2934",
"TNFRSF8" : "943",
"IL23A" : "51561",
"PRKCZ" : "5590",
"RHO" : "6010",
"THRB" : "7068",
"IL27" : "246778",
"GLP1R" : "2740",
"TFPI" : "7035",
"ACTA1" : "58",
"CDK5" : "1020",
"ENPP1" : "5167",
"KEAP1" : "9817",
"LHCGR" : "3973",
"IKZF1" : "10320",
"FNDC5" : "252995",
"CDK9" : "1025",
"TBP" : "6908",
"SPHK1" : "8877",
"LOC110806263" : "110806263",
"SNAI2" : "6591",
"TGFB2" : "7042",
"APLN" : "8862",
"BMP7" : "655",
"KRT19" : "3880",
"CSF2" : "1437",
"ABCC8" : "6833",
"KDM1A" : "23028",
"NR3C2" : "4306",
"CEACAM5" : "1048",
"PTHLH" : "5744",
"CTCF" : "10664",
"CXCR3" : "2833",
"NR1H3" : "10062",
"DRD1" : "1812",
"CCN1" : "3491",
"AGO2" : "27161",
"HMGA1" : "3159",
"SMAD7" : "4092",
"STUB1" : "10273",
"SPINK1" : "6690",
"PTTG1" : "9232",
"XBP1" : "7494",
"EPOR" : "2057",
"SFTPD" : "6441",
"NANOG" : "79923",
"KRT18" : "3875",
"HTRA1" : "5654",
"PTGS1" : "5742",
"PEBP1" : "5037",
"SLC19A1" : "6573",
"GATA4" : "2626",
"KAT2B" : "8850",
"DPYD" : "1806",
"COL3A1" : "1281",
"A2M" : "2",
"INHBA" : "3624",
"RIPK1" : "8737",
"BAK1" : "578",
"AKT2" : "208",
"PTK2B" : "2185",
"RACK1" : "10399",
"COL7A1" : "1294",
"TH" : "7054",
"UBE2D1" : "7321",
"PPP2CA" : "5515",
"BTRC" : "8945",
"BLM" : "641",
"IRF5" : "3663",
"CUL1" : "8454",
"PMP22" : "5376",
"GGT1" : "2678",
"NR5A1" : "2516",
"EWSR1" : "2130",
"PXN" : "5829",
"AIFM1" : "9131",
"GPC3" : "2719",
"GATA1" : "2623",
"STAT4" : "6775",
"CD55" : "1604",
"GNAQ" : "2776",
"F11" : "2160",
"PROS1" : "5627",
"MIR200C" : "406985",
"PLA2G2A" : "5320",
"MIR29A" : "407021",
"NDRG1" : "10397",
"TRPV4" : "59341",
"ERCC5" : "2073",
"WAS" : "7454",
"STAT5B" : "6777",
"SLC9A1" : "6548",
"THY1" : "7070",
"ITGA4" : "3676",
"MYBPC3" : "4607",
"IGFBP2" : "3485",
"ETV6" : "2120",
"TEK" : "7010",
"IFIH1" : "64135",
"CD81" : "975",
"MAP3K7" : "6885",
"CASP1" : "834",
"CLOCK" : "9575",
"CTTN" : "2017",
"FADD" : "8772",
"NR1H4" : "9971",
"CSF1" : "1435",
"CNR2" : "1269",
"FOXL2" : "668",
"KITLG" : "4254",
"GCH1" : "2643",
"RARB" : "5915",
"RPA1" : "6117",
"AIRE" : "326",
"APOL1" : "8542",
"P2RY12" : "64805",
"ARRB2" : "409",
"ANXA5" : "308",
"POLB" : "5423",
"MTA1" : "9112",
"MIR27A" : "407018",
"RAN" : "5901",
"TP53BP1" : "7158",
"PDCD4" : "27250",
"CD59" : "966",
"CA2" : "760",
"CD46" : "4179",
"NFKB2" : "4791",
"IGF2BP3" : "10643",
"F12" : "2161",
"SGK1" : "6446",
"TG" : "7038",
"RYR2" : "6262",
"CLDN1" : "9076",
"TPH1" : "7166",
"RBX1" : "9978",
"DAPK1" : "1612",
"PRF1" : "5551",
"DBH" : "1621",
"ADAM12" : "8038",
"ACHE" : "43",
"CCNA2" : "890",
"SLC6A2" : "6530",
"HAVCR1" : "26762",
"PIM1" : "5292",
"ITGA6" : "3655",
"DNM1L" : "10059",
"TOR1A" : "1861",
"MIR210" : "406992",
"SPAST" : "6683",
"CDH5" : "1003",
"FGFR4" : "2264",
"DCN" : "1634",
"ATRX" : "546",
"SERPING1" : "710",
"FABP2" : "2169",
"IL6ST" : "3572",
"MPL" : "4352",
"BRD4" : "23476",
"MFN2" : "9927",
"PLP1" : "5354",
"SIRT3" : "23410",
"COL18A1" : "80781",
"AGTR2" : "186",
"SDHB" : "6390",
"CRH" : "1392",
"CXCL1" : "2919",
"ACTN3" : "89",
"RELN" : "5649",
"CAPN10" : "11132",
"CDK6" : "1021",
"EDNRB" : "1910",
"LOC107980440" : "107980440",
"C5" : "727",
"PRKAR1A" : "5573",
"ADRA2A" : "150",
"ITGB4" : "3691",
"TGFA" : "7039",
"KPNA2" : "3838",
"CIITA" : "4261",
"PROCR" : "10544",
"ATP2A2" : "488",
"FURIN" : "5045",
"FGF1" : "2246",
"IL1RL1" : "9173",
"FXN" : "2395",
"TNFRSF11A" : "8792",
"CCL3" : "6348",
"PSIP1" : "11168",
"IL1R1" : "3554",
"ARID1A" : "8289",
"SAMHD1" : "25939",
"CTSL" : "1514",
"DEFB1" : "1672",
"TBK1" : "29110",
"NAT1" : "9",
"FLT4" : "2324",
"MIR223" : "407008",
"TAP1" : "6890",
"CTNND1" : "1500",
"IQGAP1" : "8826",
"GDNF" : "2668",
"CP" : "1356",
"ALOX15" : "246",
"TJP1" : "7082",
"RHD" : "6007",
"PDE4D" : "5144",
"BAD" : "572",
"ANG" : "283",
"NR4A1" : "3164",
"MDM4" : "4194",
"EIF4EBP1" : "1978",
"DDIT3" : "1649",
"PAX3" : "5077",
"KCNMA1" : "3778",
"HPRT1" : "3251",
"SULT1A1" : "6817",
"CFL1" : "1072",
"TACR1" : "6869",
"MMP8" : "4317",
"WFDC2" : "10406",
"LOX" : "4015",
"MRE11" : "4361",
"UBE3A" : "7337",
"BDKRB2" : "624",
"MIR203A" : "406986",
"NEDD4" : "4734",
"CCNT1" : "904",
"XPA" : "7507"
}

export default geneHash
