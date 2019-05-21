const dareQuestions = {
  questions: [
    { shorttitle : 'Once upon a time',
    key : 1,
    longtitle : 'Make up an exciting story about the person to your right.' }
    ,{ shorttitle : 'Hello moooooom',
    key : 2,
    longtitle : 'Call a relative on the phone and moo like a cow.' }
    ,{ shorttitle : 'I am you',
    key : 3,
    longtitle : 'Pretend to be another ‘Stacker for  seconds' }
    ,{ shorttitle : 'No hands',
    key : 4,
    longtitle : 'For the rest of the game wear your shoes on your hands.' }
    ,{ shorttitle : 'No eyes',
    key : 5,
    longtitle : 'Keep your eyes closed until it is your turn again.' }
    ,{ shorttitle : 'Does not compute',
    key : 6,
    longtitle : 'Pretend that you are a robot until your next turn.' }
    ,{ shorttitle : 'Qué?',
    key : 7,
    longtitle : 'Tell us about Formstack with a fake accent for  seconds.' }
    ,{ shorttitle : 'Just dance',
    key : 8,
    longtitle : 'Dance with no music for one minute' }
    ,{ shorttitle : 'Funny face',
    key : 9,
    longtitle : 'Take a funny group photo' }
    ,{ shorttitle : 'Look no hands',
    key : 10,
    longtitle : 'Eat something without using your hands' }
    ,{ shorttitle : 'The tea is hot',
    key : 11,
    longtitle : 'Sing "I’m a Little Teapot" with all the actions.' }
    ,{ shorttitle : 'Gobble gobble',
    key : 12,
    longtitle : 'Make sounds like a turkey for  seconds.' }
    ,{ shorttitle : 'Fame',
    key : 13,
    longtitle : 'Do your best famous person impression or famous character impression.' }
    ,{ shorttitle : 'Oink',
    key : 14,
    longtitle : 'Give us your best snort!' }
    ,{ shorttitle : 'One man band',
    key : 15,
    longtitle : 'Give a concert with your air guitar. (we could have a song queued)' }
    ,{ shorttitle : 'Butter',
    key : 16,
    longtitle : 'Eat a teaspoon of butter.' }
    ,{ shorttitle : 'stilettos',
    key : 17,
    longtitle : 'For guys: briefly walk like a lady in high heels.' }
    ,{ shorttitle : 'Sing with me',
    key : 18,
    longtitle : 'Sing the alphabet without moving your mouth.' }
    ,{ shorttitle : 'POTUS',
    key : 19,
    longtitle : 'Do your best presidential impression.' }
    ,{ shorttitle : 'Don’t think',
    key : 20,
    longtitle : 'Yell out the first word that comes to your mind right now.' }
    ,{ shorttitle : 'Storytime!',
    key : 21,
    longtitle : 'Make up a story about the item to your right.' }
    ,{ shorttitle : 'Copycat',
    key : 22,
    longtitle : 'Stand up and do your best impersonation of the person on your right.' }
    ,{ shorttitle : 'Puppy love',
    key : 23,
    longtitle : 'Imagine the person to your left is your pet talk to them as though you just got home.' }
    ,{ shorttitle : 'Spicy',
    key : 24,
    longtitle : 'Eat a spoonful of hot sauce.' }
    ,{ shorttitle : 'Prank call',
    key : 25,
    longtitle : 'Call Burger King and ask if they sell big macs.' }
    ,{ shorttitle : 'Arms wide open',
    key : 26,
    longtitle : 'Sing happy birthday in the style of Creed and/or Pearl Jam' }
    ,{ shorttitle : 'Belieber',
    key : 27,
    longtitle : 'Call someone and confess your new-found love for Justin Beiber.' }
    ,{ shorttitle : 'Molly Shannon',
    key : 28,
    longtitle : 'Rub your armpits and then smell your fingers.' }
    ,{ shorttitle : 'Do it.',
    key : 29,
    longtitle : 'Change your Slack name to @captainbedwetter' }
    ,{ shorttitle : 'Goofy',
    key : 30,
    longtitle : 'Hang your socks from your ears until the end of the game.' }
    ,{ shorttitle : 'Kris Kross',
    key : 31,
    longtitle : 'Wear your shirt backward for the duration of the game.' }
    ,{ shorttitle : 'I love you',
    key : 32,
    longtitle : 'Get down on one knee and propose to the person on your left.' }
    ,{ shorttitle : 'Don’t barf',
    key : 33,
    longtitle : 'Spin around 5 times and then stand on one leg while touching your nose with your fingertip.' }
    ,{ shorttitle : 'So much air',
    key : 34,
    longtitle : 'Describe what the sky looks like without using the words blue or white.' }
    ,{ shorttitle : 'CEO',
    key : 35,
    longtitle : 'Do your best Byers impression' }
    ,{ shorttitle : 'MJ',
    key : 36,
    longtitle : 'Do the moonwalk' }
    ,{ shorttitle : 'I will call you...',
    key : 37,
    longtitle : 'Give the person to your left a nickname.' }
    ,{ shorttitle : 'Whaaaat?',
    key : 38,
    longtitle : 'Sing your favorite song as loud as you can.' }
    ,{ shorttitle : 'Drink up',
    key : 39,
    longtitle : 'Spill a glass of water on your head' }
    ,{ shorttitle : 'Lennon/McCartney',
    key : 40,
    longtitle : 'Make up your own song about the rest of the group.' }
    ,{ shorttitle : 'standup',
    key : 41,
    longtitle : 'Tell everyone your best joke.' }
    ,{ shorttitle : 'JT',
    key : 42,
    longtitle : 'Beatbox for 10 seconds' }
    ,{ shorttitle : 'Dancing Ben Franklin',
    key : 43,
    longtitle : 'Invent a new dance move.' }
    ,{ shorttitle : 'Wrong way',
    key : 44,
    longtitle : 'Sing the alphabet backwards' }
    ,{ shorttitle : 'Blink182',
    key : 45,
    longtitle : 'Do not blink for 20 seconds' }
    ,{ shorttitle : 'I love lamp',
    key : 46,
    longtitle : 'Have a  second 20 conversation with something sitting on your desk.' }
    ,{ shorttitle : 'Motley Crue',
    key : 47,
    longtitle : 'Describe this group of people in 5 words or less.' }
    ,{ shorttitle : 'So nice',
    key : 48,
    longtitle : 'Give a compliment to the person on your left.' }
    ,{ shorttitle : 'Spooning',
    key : 49,
    longtitle : 'Balance a spoon on your nose for as long as you can' }
    ,{ shorttitle : 'Who’s who',
    key : 50,
    longtitle : 'Imitate another ‘Stacker and let the group guess who you are.' }
    ,{ shorttitle : 'Disembody',
    key : 51,
    longtitle : 'Show us your weirdest body trick (e.g. curling your tongue bending double jointed thumb)' }
    ,{ shorttitle : 'Coordination station',
    key : 52,
    longtitle : 'Rub your stomach in a circle and pat your head at the same time' }
    ,{ shorttitle : 'ABCD',
    key : 53,
    longtitle : 'Sing the alphabet without moving your mouth' }
    ,{ shorttitle : 'King Kong',
    key : 54,
    longtitle : 'Pound on your chest and act like a gorilla for the next 30 seconds' }
    ,{ shorttitle : 'Rhyme time',
    key : 55,
    longtitle : 'Make a poem using the words orange and moose' }
    ,{ shorttitle : 'Feel the burn',
    key : 56,
    longtitle : 'Keep your arms raised above your head for the next 5 people’s turns. At the end unmute and yell a victory word.' }
    ,{ shorttitle : 'What’s my name again',
    key : 57,
    longtitle : 'Use the letters of the name of another player to describe them (ex. SAM : S – Silly ; A – Awesome ; M – Merry)' }
    ,{ shorttitle : 'My watercooler',
    key : 58,
    longtitle : 'Take a selfie next to your toilet and post it to the watercooler with no caption' }
    ,{ shorttitle : 'Poetic',
    key : 59,
    longtitle : 'Write A Haiku Describing Your Boss. (5/7/5)' }
    ,{ shorttitle : 'Descriptive',
    key : 60,
    longtitle : 'Describe what the sky looks like without using the words blue or white.' }
    ,{ shorttitle : 'Good deals',
    key : 61,
    longtitle : 'Pick up something off your desk and sell it to us in under a minute. The group will raise their hands if they’d buy it.' }
    ,{ shorttitle : 'I am food',
    key : 62,
    longtitle : 'Using no words pretend to be a food. Don’t pretend to eat the food—pretend to be the food. Keep pretending until someone in the group guesses the food you are.' }
    ,{ shorttitle : 'Brown noser',
    key : 63,
    longtitle : 'Compliment Byers in the watercooler' }
    ,{ shorttitle : 'Roast the host',
    key : 64,
    longtitle : 'Roast the host(s) of the game' }
    ,{ shorttitle : 'Toast the host',
    key : 65,
    longtitle : 'Compliment the host(s) of the game' }
    ,{ shorttitle : 'Bad joke eel',
    key : 66,
    longtitle : 'Tell a bad joke in a really enthusiastic way.' }
    ,{ shorttitle : 'Tasty',
    key : 67,
    longtitle : 'Try to lick your elbow' }
    ,{ shorttitle : 'Face plant',
    key : 68,
    longtitle : 'Eat a snack without using your hands.' }
    ,{ shorttitle : 'Mummy Fashion',
    key : 69,
    longtitle : 'Make a headdress out of toilet paper and wear it for the rest of the game' }
    ,{ shorttitle : 'Vogue',
    key : 70,
    longtitle : 'Pretend zoom is a fashion photographer and pose like a model dahling!' }
    ,{ shorttitle : 'Fibre',
    key : 71,
    longtitle : 'Pull out one of your hairs and eat it' }
    ,{ shorttitle : 'Aaaaaiiii',
    key : 72,
    longtitle : 'Do the macarena (if you don’t know what that is floss)' }
    ,{ shorttitle : 'Dramatis Personae',
    key : 73,
    longtitle : 'Show us your best crocodile tears' }
    ,{ shorttitle : 'Shoop',
    key : 74,
    longtitle : 'Eat a spoonful of salt and pepper' }
    ,{ shorttitle : 'Slay',
    key : 75,
    longtitle : 'Let’s see your best runway walk' }
    ,{ shorttitle : 'Belch',
    key : 76,
    longtitle : 'Try your best to burp on command' }
  ],
};

export default dareQuestions;