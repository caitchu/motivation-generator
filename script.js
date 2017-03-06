//NOTES:
// ADD SMOOTH SCROLL
// change fonts depending of tone - All fonts look kinda handwriting
// background of text should be a sheet of paper

	var salutations = {
			monday:{ 
			sarcastic: [", on this fineass frickin’ Monday, just remember:", ", yeah. I know you fuckin' love Mondays so... here.",", you’re such a scrooge. This one's for you. "],
			deep:[", you beautiful soul, don’t forget: ", ", if you’re feeling down, try remembering:", ", I just wanted to remind you this week:"],
			rude:[", yeeshc. Why you salty AF?!", ", your attitude REALLY needs a facelift.", ", so what if it’s a @#$!ing Monday?!"],
			uplifting:[", just a reminder for an incredible person like you:", ", don’t let last week get to you and remember:", ", keep this piece of positivity with you through the day:"]			
		},

		fitness:{
			sarcastic: [", sorry but,", ", really now,", ", please,"],
			deep:[", don’t feel discouraged,", ", here's some food for thought.", ", it's okay. Everyone feels tired once in a while. Don’t forget:"],
			rude:[", seriously! Get the @#$! off your ass!", ", it’s training time ya BIG SLOTH!", ", DROP THE DAMN BROWNIE AND PICK UP SOME WEIGHTS!"],
			uplifting:["! Time to hustle for that muscle! Remember:", ", your only limitation is yourself. Today’s little reminder is:", ", 3 months from now you’ll thank yourself for getting started. Here’s something to think about today:"]

		},
		work:{
			sarcastic: [", did you think the bills were totally gonna pay themselves? Anyway, this is for you:", ", it's time to see all of your AMAZING coworkers! Well either way... just keep in mind:", ", productive as ever. I thought you might need this:"],
			deep:[", I know work can suck, but don’t let it get to you. Just keep in mind:", ", if you’re tired, I hope this refreshes you.", ", you’ve got this. I hope this perks your motivation up:"],
			rude:[", time to get up for work you maggot!", "!!! Rise and shine buttercup, it’s work time!", ", you’re late for work, wake the F@#$ up!!"],
			uplifting:[", you lovely, awesome thing you. I just wanted to remind you:", ",  don’t forget how utterly awesome you are. I'm passing this down to you:", ", I thought you’d appreciate this."]
		},
		school:{ 
			sarcastic: [", S.C.H.O.O.L. stands for Seven Crappy Hours Of Our Lives, but just remember:",", don’t you look pumped. Thought you could use this:",", did ya know?"],
			deep:[", just a little something to chew on.",", here’s something I think you’d appreciate:",", thought you could use this reminder:"],
			rude:[", WAKE THE @#$! up, you have school!",", your attitude needs a major facelift.",", damn that face says it all..."],
			uplifting:[", I just wanted an awesome person to know...",", thought I’d send you some positivity:",", you looked like you could use a boost:"]			
		},
	}//salutations

	var quotes = {
		monday:{ 
			sarcastic: ["Mondays always pass. They might pass like a kidney stone, but the point is they pass.", "There might not be enough coffee for our favourite day of the week, but middle fingers are unlimited and free!", "An apple a day keeps people away, if you learn how to chuck it at them properly!"],
			deep:["Things will always turn out best for the people who make the best out of the way things turn out.", "Two things define you: your patience when you have nothing, and your attitude when you have everything.", "You miss 100% of the shots you don’t take (Wayne Gretzky), so don’t miss your shots."],
			rude:["Do sharks complain about Monday? No. They’re up early, biting shit, chasing stuff, being scary — reminding everyone that they’re a fucking shark.", "You’ve gotten through 100% of the days in your past, today's not any different.", "Everything happens for a reason. Sometimes it’s because you were stupid. So just don’t be stupid next time okay?!"],
			uplifting:["Mondays are the perfect day to correct last week’s mistakes! Cheer up soon and forgive yourself.", "It may be Monday, but whatever obstacle you’re facing, it’s not permanent!", "The less you respond to negative people, the more peaceful your life will become. Don’t worry about the people who do you wrong today."]
		},

		fitness:{
			sarcastic: ["Did you think you'd totally get the ass you want by sitting on it? Nice. 👍", "There’s no such thing as a diet where you eat everything and pray for a miracle!", "If you burned calories for every excuse you had, you’d be a supermodel.", "Your beach body TOTALLY isn't ready. You better move it."],
			deep:["Success is not built on success. It’s built on failure, frustration, and sometimes catastrophe.", "Fitness isn’t about being better than anyone else, it’s about being better than who you used to be.", "When you lose all your excuses, you’ll find all of your results."],
			rude:["Need motivation to lose weight? Just eat in front of a mirror... NAKED. Seriously...", "If your pants could speak, they'd be saying \"I see you've been eating whatever you want and not exercising.\"", "Life's just not about avoiding the bruises. It’s about collecting the scars to prove you showed up for it. GEEZ."],
			uplifting:["The pain you feel today will be the strength you feel tomorrow! Keep at it and don’t give up.", "Beauty may be skin deep, but fit is to the bone. GET 'EM!", "Think of your workouts as important meetings you’ve scheduled with yourself. Bosses don’t cancel."]
		},
		work:{
            sarcastic: ["Even if you don’t work with your favourite people, be kind to unkind people. Those suckers need it the most.", "Be the reason why someone smiles today. Or the reason they drink. Whatever works."],
            deep:["Work for a cause, not for applause. Life life to express, not to impress.", "Being a leader is more about unlocking people's potential to work better.", "It's better to be at the bottom of the ladder you want than to be at the top of the one you don't."],
            rude:["Nobody cares about your excuses. Nobody pities you for procrastinating. Nobody’s gonna cuddle you because you’re lazy!", "NOBODY CARES THAT YOU ARE TIRED! BETTER GET YOUR ASS UP TO WORK IF YOU DON’T WANT TO BE LIVING UNDER A BRIDGE NEXT MONTH...", "EVEN THOUGH YOU ARE GREAT AT IT, SITTING ON YOUR ASS WON’T PAY THE BILLS!"],
            uplifting:["If you’re persistent, you’ll get it. If you’re consistent, you’ll keep it. Stay persistent, and consistent today!", "Never stop doing your best, just because someone doesn’t give you credit. Give yourself credit.", "A little progress each day adds up to big results!"]
        },
        school:{
            sarcastic: ["This too, a school day, shall pass. It might pass like a kidney stone, but trust me. It'll pass.", "Science says the universe is made up of protons, neurons, and electrons. They forget to mention morons!"],
            deep:["Everyone’s a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it’s stupid (Einstein). ", "Just because it took you a little longer to figure something out, doesn’t mean you failed!", "Work hard in silence, let the success make the noise."],
            rude:["Like seriously!!! If you think your teacher's tough, wait till you get a boss. HANDLE IT!", "Grades don’t define intelligence, but they’ll determine your escape from this HELL.", "No matter how you feel, you're the one still responsible for how you act!"],
			uplifting:["Mistakes are proof that you're trying! Go easy on yourself.", "Success is the sum of all small efforts, repeated day in and day out.", "The more that you read, the more things you will know. The more that you learn, the more places you'll go!"]
		}
	}//quotes

	var signature = {
			sarcastic: ["Ummm... yeah. - "],
			deep:["Hope this reached you, - "],
			rude:["Suck it up. With love, "],
			uplifting:["Cheers, your friend, "]
		}


// Random Number  Function:
var randomize = function(n){ 
				return Math.floor(Math.random() * n.length);
			}

$(function(){

	// APP IS READY FEEDBACK
	$('form').on('click', 'input', function(){
		if ($('[name=motivationType]').is(':checked') && $('[name=toneType]').is(':checked')) {
			$('input.submit').addClass('ready animated pulse infinite');
		} else {
			$('input.submit').removeClass('ready animated pulse infinite');
		};
	});

	$('form').on('submit', function(e){
		(e).preventDefault();
		// TONE AND TYPE
		var userName = $('input[name=from]').val();
		var recipient = $('input[name=to]').val();
		var type = $('input[name=motivationType]:checked').val();
		var tone = $('input[name=toneType]:checked').val();
		var typeAndTone = quotes[type][tone]; // go to quotes, pull user's type and tone
		var randTypeAndTone = randomize(typeAndTone); 
		// SALUTATIONS
		var salutationTone = salutations[type][tone];
		var randomTone = randomize(salutationTone);
		var randomSig = signature[tone];
		// submit btn changes after click
		$('input[name=submitBtn]').val('TRY ANOTHER');

		// submit results:
		$('.resultsContainer').html(`<h2>Hey <span class="nameCap">${recipient}</span>${salutationTone[randomTone]}</h2><h2>${typeAndTone[randTypeAndTone]}</h2><h2>${randomSig}${userName}</h2><br><button class="reset">RESET <i class="fa fa-refresh" aria-hidden="true"></i></button>`);
		//display results:
		$('.resultsContainer').css('display', 'block');
		
	});//form listener
		
	// reset button
		$('.resultsContainer').on('click', '.reset', function(){
			// empty inputs
			$('input').prop('checked', false);
			//emty container
			$('.resultsContainer').empty();
			// reset submit Button and remove animation
			$('input[name=submitBtn]').val('MOTIVATE ME');
			$('input.submit').removeClass('animated pulse infinite');
			$('.resultsContainer').css('display', 'none');

		});

});//doc ready

  window.fbAsyncInit = function() {
    FB.init({
      appId      : 'your-app-id',
      xfbml      : true,
      version    : 'v2.8'
    });
    FB.AppEvents.logPageView();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
