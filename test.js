﻿//'use strict';

var tmpl = global.tmpl || (global.tmpl = {}); // в глобальной чтобы в каждом шаблоне не подключать require('./master.js');
var master = require('./master.js');

require('./tmpl/tmpl.test_bench.js'); // даблон для теста


var bench_vars = {
	adverts : [
	    {
		"title" : "Walter",
		"text" : "You see what happens, Larry?",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Walter",
		"text" : "I don't roll on Shabbos!",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Blond Thug",
		"text" : "Where's the money, Lebowski?",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Nihilist",
		"text" : "We believe in nothing, Lebowski.",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Walter",
		"text" : "Is this your homework, Larry?",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    },
	    {
		"title" : "Nihilist",
		"text" : "Ve vant ze money, Lebowski",
		"url" : "http://www.imdb.com/title/tt0118715/quotes"
	    }
	],

	sections : [
	    {
		"id" : 1234,
		"title" : "The Dude",
		"rip" : 0
	    },
	    {
		"id" : 2345,
		"title" : "Walter Sobchak",
		"rip" : 0
	    },
	    {
		"id" : 3456,
		"title" : "Donny",
		"rip" : 1
	    },
	    {
		"id" : 4567,
		"title" : "Maude Lebowski",
		"rip" : 0
	    },
	    {
		"id" : 5678,
		"title" : "The Big Lebowski",
		"rip" : 0
	    },
	    {
		"id" : 6789,
		"title" : "Brandt",
		"rip" : 0
	    },
	    {
		"id" : 7890,
		"title" : "Jesus Quintana",
		"rip" : 0
	    }
	],

	"total" : 654329,
	"online" : [
	       { "name" : "true"      },
	       { "name" : "false"     },
	       { "name" : "short"     },
	       { "name" : "long"      },
	       { "name" : "apha"      },
	       { "name" : "omega"     },
	       { "name" : "drag"      },
	       { "name" : "drop"      },
	       { "name" : "make"      },
	       { "name" : "clean"     },
	       { "name" : "east"      },
	       { "name" : "west"      },
	       { "name" : "up"        },
	       { "name" : "down"      },
	       { "name" : "sun"       },
	       { "name" : "rain"      },
	       { "name" : "secondary" },
	       { "name" : "main"      }
	    ],

	"news" : [
	    {
		"time" : "03:45",
		"id" : 987,
		"title" : "The Stranger",
		"text" : "See, they call Los Angeles the \"City Of Angels\"; but I didn't find it to be that, exactly. But I'll allow it as there are s ome nice folks there. 'Course I ain't never been to London, and I ain't never seen France. And I ain't never seen no queen in her damned undies, so the feller says. But I'll tell you what - after seeing Los Angeles, and this here story I'm about to unfold, well, I guess I seen somethin' every bit as stupefyin' as you'd seen in any of them other places. And in English , too. So I can die with a smile on my face, without feelin' like the good Lord gypped me. Now this here story I'm about to unfold took place in the early '90s - just about the time of our conflict with Sad'm and the I-raqis. I only mention it be cause sometimes there's a man..."
	    },
	    {
		"time" : "03:48",
		"id" : 876,
		"title" : "The Stranger",
		"text" : "...I won't say a hero, 'cause, what's a hero? Sometimes, there's a man. And I'm talkin' about the Dude here - the Dude from Los Angeles. Sometimes, there's a man, well, he's the man for his time and place. He fits right in there. And that's the Dude. The Dude, from Los Angeles. And even if he's a lazy man - and the Dude was most certainly that. Quite possibly the laziest in all of Los Angeles County, which would place him high in the runnin' for laziest worldwide. Sometimes there's a man , sometimes, there's a man. Well, I lost my train of thought here. But... aw, hell. I've done introduced it enough."
	    },
	    {
		"time" : "03:50",
		"id" : 765,
		"title" : "Walter Sobchak",
		"text" : "Donny was a good bowler, and a good man. He was one of us. He was a man who loved the outdoors... and bowling, and as a surfer he explored the beaches of Southern California, from La Jolla to Leo Carrillo and... up to... Pismo. He died, like so many young men of his generation, he died before his time. In your wisdom, Lord, you took him, as you took so many bright flowering young men at Khe Sanh, at Langdok, at Hill 364. These young men gave their lives. And so would Donny. Donny, who loved bowling. And so, Theodore Donald Karabotsos, in accordance with what we think your dying wishes might well have been, we commit your final mortal remains to the bosom of the Pacific Ocean, which you loved so well. Good night, sweet prince."
	    },
	    {
		"time" : "03:52",
		"id" : 654,
		"title" : "The Dude",
		"text" : "God damn you Walter! You fuckin' asshole! Everything's a fuckin' travesty with you, man! And what was all that shit about Vietnam? What the FUCK, has anything got to do with Vietnam? What the fuck are you talking about?"
	    },
	    {
		"time" : "03:57",
		"id" : 543,
		"title" : "Jesus Quintana",
		"text" : "What's this day of rest shit? What's this bullshit? I don't fuckin' care! It don't matter to Jesus. But you're not foolin'me, man. You might fool the fucks in the league office, but you don't fool Jesus. This bush league psyche-out stuff. Laughable, man - ha ha! I would have fucked you in the ass Saturday. I fuck you in the ass next Wednesday instead. Wooo! You gotadate Wednesday, baby!"
	    },
	    {
		"time" : "03:59",
		"id" : 432,
		"title" : "Jesus Quintana",
		"text" : "Let me tell you something, pendejo. You pull any of your crazy shit with us, you flash a piece out on the lanes, I'll take it away from you, stick it up your ass and pull the fucking trigger 'til it goes \"click.\""
	    },
	    {
		"time" : "04:01",
		"id" : 321,
		"title" : "The Dude",
		"text" : "Let me explain something to you. Um, I am not \"Mr. Lebowski\". You're Mr. Lebowski. I'm the Dude. So that's what you call me. You know, that or, uh, His Dudeness, or uh, Duder, or El Duderino if you're not into the whole brevity thing."
	    }
	]
};



;(function() {
	var T1, max = 10000, x = max, tx='';

	T1 = new Date();
	

	while(x--) {
		tx = master.render('tmpl:bench', bench_vars);
	};

	T1 = new Date() - T1; 

	//console.log(tx);
	console.log(tx.lenght > 1000 ? '...'+tx.substr(-800) : tx);
	
	console.log( 'fps  '+(max/T1*1000) +'  time: '+(T1/max)+'   full time:'+ (T1/1000))

})()






