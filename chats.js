//This file is about messages exchanged between two persons.
//Every message is an object in JSON format. Has all basic details like properties 
//All messages wrapped in one array. Used by functions to extract info.
let msg = 	[					 
						{														
							"id":1,
							"sender_id": 1,
							"receiver_id": 2 ,
							"text" : " How are you?  ",
							"time" : 1528865658225,
							"status":"unseen"
						},
						{														
							"id":2,
							"sender_id":2 ,
							"receiver_id":  1,
							"text" : " I am very fine.  ",
							"time" : 1528865659225,
							"status":"unseen"
						},
						{														
							"id":3,
							"sender_id":1 ,
							"receiver_id":  3,
							"text" : " How are you?  ",
							"time" : 1528181146267,
							"status":"unseen"
						},
						{														
							"id":4,
							"sender_id":1 ,
							"receiver_id": 4 ,
							"text" : " How are you?  ",
							"time" : 1528181147267,
							"status":"unseen"
						},
						{														
							"id":5,
							"sender_id": 4,
							"receiver_id": 1 ,
							"text" : " Javascript is enriched with many framworks. ",
							"time" : 1528181148267,
							"status":"seen"
						},
						{														
							"id":6,
							"sender_id": 1,
							"receiver_id":  6,
							"text" : " How are you?  ",
							"time" : 1528181149267,
							"status":"seen"
						},
						{														
							"id":7,
							"sender_id":1 ,
							"receiver_id":  7,
							"text" : " How are you?  ",
							"time" : 1528181154267,
							"status":"seen"
						},
						{														
							"id":8,
							"sender_id": 1,
							"receiver_id": 8 ,
							"text" : " maze mein .  apni sunao  ",
							"time" : 1528181164267,
							"status":"seen"
						},
						{														
							"id":9,
							"sender_id":1 ,
							"receiver_id":  9,
							"text" : " Very fine thank you. How are you  ",
							"time" : 1528181174267,
							"status":"seen"
						},
						{														
							"id":10,
							"sender_id": 1,
							"receiver_id": 10 ,
							"text" : " How are you?  ",
							"time" : 1528181184267,
							"status":"seen"
						},
						{														
							"id":11,
							"sender_id": 1,
							"receiver_id": 11 ,
							"text" : " Did you attempt assignment-4?  ",
							"time" : 1528181194267,
							"status":"seen"
						},
						{														
							"id":12,
							"sender_id":1 ,
							"receiver_id":  2,
							"text" : " Oh No, Yaar! I understand Bootstrap a little.  ",
							"time" : 1528181244267,
							"status":"seen"
						},
						{														
							"id":13,
							"sender_id": 1,
							"receiver_id": 3 ,
							"text" : " What is the problem? ",
							"time" : 1528181344267,
							"status":"seen"
						},
						{														
							"id":14,
							"sender_id":1 ,
							"receiver_id":  4,
							"text" : "I find problem in positioning of images.  ",
							"time" : 1528181444267,
							"status":"seen"
						},
						{														
							"id":15,
							"sender_id": 1,
							"receiver_id": 5 ,
							"text" : " Then what to do?  ",
							"time" : 1528181544267,
							"status":"seen"
						},
						{														
							"id":16,
							"sender_id":1 ,
							"receiver_id":  6,
							"text" : " Posting my problem at website platform  ",
							"time" : 1528181644267,
							"status":"seen"
						},
						{														
							"id":17,
							"sender_id": 1,
							"receiver_id": 7 ,
							"text" : " if you understand how to attempt , please help me. ",
							"time" : 1528181744267,
							"status":"seen"
						},
						{														
							"id":18,
							"sender_id":1 ,
							"receiver_id":  8,
							"text" : "Oh , sure.  ",
							"time" : 1528181844267,
							"status":"seen"
						},
						{														
							"id":19,
							"sender_id": 1,
							"receiver_id":  9,
							"text" : " How are you?  ",
							"time" : 1528181944267,
							"status":"seen"
						},
						{														
							"id":20,
							"sender_id":1 ,
							"receiver_id":  2,
							"text" : " How are you?  ",
							"time" : 1528181954267,
							"status":"seen"
						},
						{														
							"id":21,
							"sender_id": 2,
							"receiver_id": 1 ,
							"text" : " maze mein .  apni sunao  ",
							"time" : 1528982024003,
							"status":"seen"
						},
						{														
							"id":22,
							"sender_id":2 ,
							"receiver_id":  3,
							"text" : " Very fine thank you. How are you  ",
							"time" : 1528181974267,
							"status":"seen"
						},
						{														
							"id":23,
							"sender_id": 2,
							"receiver_id": 3 ,
							"text" : " How are you?  ",
							"time" : 1528181984267,
							"status":"seen"
						},
						{														
							"id":24,
							"sender_id":2 ,
							"receiver_id":  4,
							"text" : " I am very fine.  ",
							"time" : 1528181994267,
							"status":"seen"
						},						
						{														
							"id":25,
							"sender_id": 2,
							"receiver_id": 5 ,
							"text" : " How are you?  ",
							"time" : 1528182144267,
							"status":"seen"
						},
						{														
							"id":26,
							"sender_id": 2,
							"receiver_id":  6,
							"text" : " How are you?  ",
							"time" : 1528182244267,
							"status":"seen"
						},
						{														
							"id":27,
							"sender_id":2,
							"receiver_id":  7,
							"text" : " How are you?  ",
							"time" : 1528182344267,
							"status":"seen"
						},
						{														
							"id":28,
							"sender_id": 2,
							"receiver_id": 8 ,
							"text" : " maze mein .  apni sunao  ",
							"time" : 1528182444267,
							"status":"seen"
						},
						{														
							"id":29,
							"sender_id":2 ,
							"receiver_id":  9,
							"text" : " Very fine thank you. How are you  ",
							"time" : 1528182544267,
							"status":"seen"
						},
						{														
							"id":30,
							"sender_id": 3,
							"receiver_id": 9 ,
							"text" : " How are you?  ",
							"time" : 1528182644267,
							"status":"seen"
						},
						{														
							"id":31,
							"sender_id": 3,
							"receiver_id": 1 ,
							"text" : " Did you attempt assignment-4?  ",
							"time" : 1528181144267,
							"status":"unseen"
						},
						{														
							"id":32,
							"sender_id":3 ,
							"receiver_id":  2,
							"text" : " Oh No, Yaar! I understand Bootstrap a little.  ",
							"time" : 1528182744267,
							"status":"unseen"
						},
						{														
							"id":33,
							"sender_id": 3,
							"receiver_id": 4 ,
							"text" : " What is the problem? ",
							"time" : 1528182844267,
							"status":"unseen"
						},
						{														
							"id":34,
							"sender_id":3 ,
							"receiver_id":  1,
							"text" : "I find problem in positioning of images.  ",
							"time" : 1528182944267,
							"status":"unseen"
						},
						{														
							"id":35,
							"sender_id": 3,
							"receiver_id": 5 ,
							"text" : " Then what to do?  ",
							"time" : 1528183044267,
							"status":"unseen"
						},
						{														
							"id":36,
							"sender_id":3 ,
							"receiver_id":  6,
							"text" : " Posting my problem at website platform  ",
							"time" : 1528183144267,
							"status":"unseen"
						},
						{														
							"id":37,
							"sender_id": 3,
							"receiver_id": 7 ,
							"text" : " if you understand how to attempt , please help me. ",
							"time" : 1528183244267,
							"status":"unseen"
						},
						{														
							"id":38,
							"sender_id":3 ,
							"receiver_id":  8,
							"text" : "Oh , sure.  ",
							"time" : 1528183344267,
							"status":"unseen"
						},
						{														
							"id":39,
							"sender_id": 3,
							"receiver_id":  9,
							"text" : " How are you?  ",
							"time" : 1528183444267,
							"status":"unseen"
						},
						{														
							"id":40,
							"sender_id":4 ,
							"receiver_id":  5,
							"text" : " How are you?  ",
							"time" : 1528183544267,
							"status":"unseen"
						},
						{														
							"id":41,
							"sender_id": 4,
							"receiver_id": 1 ,
							"text" : " Did you attempt assignment-4?  ",
							"time" : 1528181144267,
							"status":"unseen"
						},
						{														
							"id":42,
							"sender_id":4 ,
							"receiver_id":  2,
							"text" : " Oh No, Yaar! I understand Bootstrap a little.  ",
							"time" : 1528182744267,
							"status":"unseen"
						},
						{														
							"id":43,
							"sender_id": 4,
							"receiver_id": 3 ,
							"text" : " What is the problem? ",
							"time" : 1528182844267,
							"status":"unseen"
						},
						{														
							"id":44,
							"sender_id":4 ,
							"receiver_id":  3,
							"text" : "I find problem in positioning of images.  ",
							"time" : 1528182944267,
							"status":"unseen"
						},
						{														
							"id":45,
							"sender_id": 4,
							"receiver_id": 5 ,
							"text" : " Then what to do?  ",
							"time" : 1528183044267,
							"status":"unseen"
						},
						{														
							"id":46,
							"sender_id":4 ,
							"receiver_id":  6,
							"text" : " Posting my problem at website platform  ",
							"time" : 1528183144267,
							"status":"unseen"
						},
						{														
							"id":47,
							"sender_id": 4,
							"receiver_id": 7 ,
							"text" : " if you understand how to attempt , please help me. ",
							"time" : 1528183244267,
							"status":"unseen"
						},
						{														
							"id":48,
							"sender_id":4 ,
							"receiver_id":  8,
							"text" : "Oh , sure.  ",
							"time" : 1528183344267,
							"status":"unseen"
						},
						{														
							"id":49,
							"sender_id": 4,
							"receiver_id":  9,
							"text" : " How are you?  ",
							"time" : 1528183444267,
							"status":"unseen"
						},
						{														
							"id":50,
							"sender_id":5 ,
							"receiver_id":  8,
							"text" : " freecodecamp is also a useful site. ",
							"time" : 1528183544267,
							"status":"unseen"
						},
						{														
							"id":51,
							"sender_id": 5,
							"receiver_id": 1 ,
							"text" : " pick problems from codewars like websites.  ",
							"time" : 1528181144267,
							"status":"unseen"
						},
						{														
							"id":52,
							"sender_id":5 ,
							"receiver_id":  2,
							"text" : " youtube learning gives you a false confidence.  ",
							"time" : 1528182744267,
							"status":"unseen"
						},
						{														
							"id":53,
							"sender_id": 5,
							"receiver_id": 3 ,
							"text" : " Competitive programming is also a way to learn. ",
							"time" : 1528182844267,
							"status":"unseen"
						},
						{														
							"id":54,
							"sender_id":5 ,
							"receiver_id":  4,
							"text" : "Projects throw challenges and you learn by getting them over.  ",
							"time" : 1528182944267,
							"status":"unseen"
						},
						{														
							"id":55,
							"sender_id": 5,
							"receiver_id": 6 ,
							"text" : " By creating projects you get confidence.  ",
							"time" : 1528183044267,
							"status":"unseen"
						},
						{														
							"id":56,
							"sender_id":5 ,
							"receiver_id":  6,
							"text" : " Project based learning is a good way to learn. ",
							"time" : 1528183144267,
							"status":"unseen"
						},
						{														
							"id":57,
							"sender_id": 5,
							"receiver_id": 7 ,
							"text" : " if you understand how to attempt , please help me. ",
							"time" : 1528183244267,
							"status":"unseen"
						},
						{														
							"id":58,
							"sender_id":5 ,
							"receiver_id":  8,
							"text" : "Oh , sure.  ",
							"time" : 1528183344267,
							"status":"unseen"
						},
						{														
							"id":59,
							"sender_id": 5,
							"receiver_id":  9,
							"text" : " unseen msg are messages to be seen yet. ",
							"time" : 1528183444267,
							"status":"unseen"
						},
						{														
							"id":60,
							"sender_id":5 ,
							"receiver_id":  6,
							"text" : " A quick brown fox jumps over the lazy little dog.  ",
							"time" : 1528183544267,
							"status":"unseen"
						},						
						{														
							"id":61,
							"sender_id": 6,
							"receiver_id": 1 ,
							"text" : "if you give up easily you can not be a good programmer.  ",
							"time" : 1528181144267,
							"status":"unseen"
						},
						{														
							"id":62,
							"sender_id":6 ,
							"receiver_id":  2,
							"text" : " Never say die.  ",
							"time" : 1528182744267,
							"status":"unseen"
						},
						{														
							"id":63,
							"sender_id": 6,
							"receiver_id": 3 ,
							"text" : " You have draw shapes using canvas in HTML ",
							"time" : 1528182844267,
							"status":"unseen"
						},
						{														
							"id":64,
							"sender_id":6 ,
							"receiver_id":  4,
							"text" : "Canvas in HTML is a interesting thing. ",
							"time" : 1528182944267,
							"status":"unseen"
						},
						{														
							"id":65,
							"sender_id": 6,
							"receiver_id": 5 ,
							"text" : "Javascript games are also  interesting to code. ",
							"time" : 1528183044267,
							"status":"unseen"
						},
						{														
							"id":66,
							"sender_id":6 ,
							"receiver_id":  2,
							"text" : " HTML is a mark up language. ",
							"time" : 1528183144267,
							"status":"unseen"
						},
						{														
							"id":67,
							"sender_id": 6,
							"receiver_id": 7 ,
							"text" : " CSS helps to give shape to a page and to beautify it. ",
							"time" : 1528183244267,
							"status":"unseen"
						},
						{														
							"id":68,
							"sender_id":6 ,
							"receiver_id":  8,
							"text" : "soul travels from one body to another. ",
							"time" : 1528183344267,
							"status":"unseen"
						},
						{														
							"id":69,
							"sender_id": 6,
							"receiver_id":  9,
							"text" : " variable is body and value is soul ",
							"time" : 1528183444267,
							"status":"unseen"
						},
						{														
							"id":70,
							"sender_id":6 ,
							"receiver_id":  7,
							"text" : " functions make programming easy. ",
							"time" : 1528183544267,
							"status":"unseen"
						},
						
						{														
							"id":71,
							"sender_id": 7,
							"receiver_id": 1 ,
							"text" : " functions are a beautiful tool in programming. ",
							"time" : 1528181144267,
							"status":"unseen"
						},
						{														
							"id":72,
							"sender_id":7 ,
							"receiver_id":  2,
							"text" : " Catch the logic before you write code.  ",
							"time" : 1528182744267,
							"status":"unseen"
						},
						{														
							"id":73,
							"sender_id": 7,
							"receiver_id": 3 ,
							"text" : " Understand , plan , prepare and then programme",
							"time" : 1528182844267,
							"status":"unseen"
						},
						{														
							"id":74,
							"sender_id":7 ,
							"receiver_id":  4,
							"text" : "Never give up if you are a programmer.  ",
							"time" : 1528182944267,
							"status":"unseen"
						},
						{														
							"id":75,
							"sender_id": 7,
							"receiver_id": 5 ,
							"text" : " Python is easy to learn.  ",
							"time" : 1528183044267,
							"status":"unseen"
						},
						{														
							"id":76,
							"sender_id":7 ,
							"receiver_id":  6,
							"text" : " C++ is not in great use today. ",
							"time" : 1528183144267,
							"status":"unseen"
						},
						{														
							"id":77,
							"sender_id": 7,
							"receiver_id": 7 ,
							"text" : " Jquery has very limited usage. ",
							"time" : 1528183244267,
							"status":"unseen"
						},
						{														
							"id":78,
							"sender_id":7 ,
							"receiver_id":  8,
							"text" : "Oh , sure.  ",
							"time" : 1528183344267,
							"status":"unseen"
						},
						{														
							"id":79,
							"sender_id": 7,
							"receiver_id":  9,
							"text" : "Nothing can replace hard work.  ",
							"time" : 1528183444267,
							"status":"unseen"
						},
						{														
							"id":80,
							"sender_id":8 ,
							"receiver_id":  7,
							"text" : "internet has changed the world like never before. ",
							"time" : 1528183544267,
							"status":"unseen"
						},												
						{														
							"id":81,
							"sender_id": 8,
							"receiver_id": 1 ,
							"text" : " Did you attempt assignment-4?  ",
							"time" : 1528181144267,
							"status":"unseen"
						},
						{														
							"id":82,
							"sender_id":8 ,
							"receiver_id":  2,
							"text" : " Web development is here to stay .  ",
							"time" : 1528182744267,
							"status":"unseen"
						},
						{														
							"id":83,
							"sender_id": 8,
							"receiver_id": 3 ,
							"text" : " What is the problem? ",
							"time" : 1528182844267,
							"status":"unseen"
						},
						{														
							"id":84,
							"sender_id":8 ,
							"receiver_id":  4,
							"text" : "I find problem in positioning of images.  ",
							"time" : 1528182944267,
							"status":"unseen"
						},
						{														
							"id":85,
							"sender_id": 8,
							"receiver_id": 5 ,
							"text" : " Then what to do?  ",
							"time" : 1528146044267,
							"status":"unseen"
						},
						{														
							"id":86,
							"sender_id":8 ,
							"receiver_id":  6,
							"text" : " Posting my problem at website platform  ",
							"time" : 1528147144267,
							"status":"unseen"
						},
						{														
							"id":87,
							"sender_id": 8,
							"receiver_id": 7 ,
							"text" : " Before asking a question , invest some time to solve it. ",
							"time" : 1528148244267,
							"status":"unseen"
						},
						{														
							"id":88,
							"sender_id":8 ,
							"receiver_id":  2,
							"text" : "Don't run after shortcuts if you wish to be a programmer. ",
							"time" : 1528149344267,
							"status":"unseen"
						},
						{														
							"id":89,
							"sender_id": 8,
							"receiver_id":  9,
							"text" : " Learn  How things are happening under the hood.  ",
							"time" : 1528150444267,
							"status":"unseen"
						},
						{														
							"id":90,
							"sender_id":9 ,
							"receiver_id":  8,
							"text" : " Prgogramming is a thing that comes to you naturally.  ",
							"time" : 1528151544267,
							"status":"unseen"
						},						
						{														
							"id":91,
							"sender_id": 9,
							"receiver_id": 1 ,
							"text" : " It takes time to learn web development.  ",
							"time" : 1528152144267,
							"status":"unseen"
						},
						{														
							"id":92,
							"sender_id":9 ,
							"receiver_id":  2,
							"text" : " Oh No, Yaar! I understand Bootstrap a little.  ",
							"time" : 1528153744267,
							"status":"unseen"
						},
						{														
							"id":93,
							"sender_id": 9,
							"receiver_id": 3 ,
							"text" : " Web development is not easy to learn.",
							"time" : 1528155844267,
							"status":"unseen"
						},
						{														
							"id":94,
							"sender_id":9 ,
							"receiver_id":  4,
							"text" : "I find problem in positioning of images.  ",
							"time" : 1528157944267,
							"status":"unseen"
						},
						{														
							"id":95,
							"sender_id": 9,
							"receiver_id": 5 ,
							"text" : " Angular  and React are two competitors . ",
							"time" : 1528158044267,
							"status":"unseen"
						},
						{														
							"id":96,
							"sender_id":9 ,
							"receiver_id":  6,
							"text" : " Posting my problem at website platform  ",
							"time" : 1528159144267,
							"status":"unseen"
						},
						{														
							"id":97,
							"sender_id": 9,
							"receiver_id": 7 ,
							"text" : " NodeJs will help you in back end development. ",
							"time" : 1528160244267,
							"status":"unseen"
						},
						{														
							"id":98,
							"sender_id":9 ,
							"receiver_id":  8,
							"text" : "Oh , sure.  ",
							"time" : 1528161344267,
							"status":"unseen"
						},
						{														
							"id":99,
							"sender_id": 9,
							"receiver_id":  1,
							"text" : " Some knowledge of Web design is helpful for front end.  ",
							"time" : 1528162444267,
							"status":"unseen"
						},
						{														
							"id":100,
							"sender_id":9 ,
							"receiver_id":  10,
							"text" : " How are you?  ",
							"time" : 1528163544267,
							"status":"unseen"
						},						
						{														
							"id":101,
							"sender_id": 10,
							"receiver_id": 1 ,
							"text" : " Did you attempt assignment-4?  ",
							"time" : 1528164144267,
							"status":"unseen"
						},
						{														
							"id":102,
							"sender_id":10 ,
							"receiver_id":  2,
							"text" : " Oh No, Yaar! I understand Bootstrap a little.  ",
							"time" : 1528165744267,
							"status":"unseen"
						},
						{														
							"id":103,
							"sender_id": 10,
							"receiver_id": 3 ,
							"text" : " What is the problem? ",
							"time" : 1528166844267,
							"status":"unseen"
						},
						{														
							"id":104,
							"sender_id":10 ,
							"receiver_id":  4,
							"text" : "Javascript is the language of internet.  ",
							"time" : 1528167944267,
							"status":"unseen"
						},
						{														
							"id":105,
							"sender_id": 10,
							"receiver_id": 5 ,
							"text" : " Then what to do?  ",
							"time" : 1528168044267,
							"status":"unseen"
						},
						{														
							"id":106,
							"sender_id":10 ,
							"receiver_id":  6,
							"text" : " Posting my problem at website platform  ",
							"time" : 1528169144267,
							"status":"unseen"
						},
						{														
							"id":107,
							"sender_id": 10,
							"receiver_id": 7 ,
							"text" : " if you understand how to attempt , please help me. ",
							"time" : 1528170244267,
							"status":"unseen"
						},
						{														
							"id":108,
							"sender_id":10 ,
							"receiver_id":  8,
							"text" : "Oh , sure.  ",
							"time" : 1528171344267,
							"status":"unseen"
						},
						{														
							"id":109,
							"sender_id": 10,
							"receiver_id":  9,
							"text" : " Albelo ka mastano ka ",
							"time" : 1528172444267,
							"status":"unseen"
						},
						{														
							"id":110,
							"sender_id":10,
							"receiver_id":  11,
							"text" : " Ye desh hai veer jawano ka  ",
							"time" : 1528173544267,
							"status":"unseen"
						},
						
						{														
							"id":111,
							"sender_id": 11,
							"receiver_id": 1 ,
							"text" : " Insan ki aulad hai insan banega ",
							"time" : 1528174144267,
							"status":"unseen"
						},
						{														
							"id":112,
							"sender_id":11 ,
							"receiver_id":  2,
							"text" : " Na hindu banega na musalman banega  ",
							"time" : 1528175744267,
							"status":"unseen"
						},
						{														
							"id":113,
							"sender_id": 11,
							"receiver_id": 3 ,
							"text" : " Ye desh hai tumhara neta tumhi ho kal ke",
							"time" : 1528176844267,
							"status":"unseen"
						},
						{														
							"id":114,
							"sender_id":11 ,
							"receiver_id":  4,
							"text" : "Insaaf ke dagar pe bachcho dikhao chal ke ",
							"time" : 1528177944267,
							"status":"unseen"
						},
						{														
							"id":115,
							"sender_id": 11,
							"receiver_id": 5 ,
							"text" : " Sab mile huye hai ji ",
							"time" : 1528178044267,
							"status":"unseen"
						},
						{														
							"id":116,
							"sender_id":11 ,
							"receiver_id":  6,
							"text" : " Sab ke khate mein 15 lakh  ",
							"time" : 1528179144267,
							"status":"unseen"
						},
						{														
							"id":117,
							"sender_id": 11,
							"receiver_id": 7 ,
							"text" : " Saaf Neeyat Sahi Vikas ",
							"time" : 1528180244267,
							"status":"unseen"
						},
						{														
							"id":118,
							"sender_id":11,
							"receiver_id":  8,
							"text" : "congress ka  haath Garib ke saath ",
							"time" : 1528181344267,
							"status":"unseen"
						},
						{														
							"id":119,
							"sender_id": 11,
							"receiver_id":  9,
							"text" : " Aaloo se sona banaye , Rahul ko PM laye ",
							"time" : 1528182444267,
							"status":"unseen"
						},
						{														
							"id":120,
							"sender_id":11 ,
							"receiver_id":  10,
							"text" : " Baar Baar Modi Sarkar  ",
							"time" : 1528209816923,
							"status":"unseen"
						}
						
				]
