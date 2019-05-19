const truthQuestions = {
  questions: [
    { shorttitle : 'Mall walking', 
    key : 1, 
    longtitle : 'What was the funniest thing that happened to you at a mall?' }, 
    { shorttitle : 'Gratitude', 
    key : 2, 
    longtitle : 'What is the best thing about your life right now?' }, 
    { shorttitle : 'You oughta know', 
    key : 3, 
    longtitle : 'What is one talent most people here don’t know that you have?' }, 
    { shorttitle : 'Secrets', 
    key : 4, 
    longtitle : 'What is a secret that you kept from your parents when you were growing up?' }, 
    { shorttitle : 'Nail biter', 
    key : 5, 
    longtitle : 'What is a bad habit that you have?' }, 
    { shorttitle : 'Don’t eat this', 
    key : 6, 
    longtitle : 'What was the worst thing you ever cooked or baked?' }, 
    { shorttitle : 'There’s no time', 
    key : 7, 
    longtitle : 'If your house was burning what three things would you grab?' }, 
    { shorttitle : 'So mean', 
    key : 8, 
    longtitle : 'What’s the meanest thing you’ve ever said to someone?' }, 
    { shorttitle : 'switcheroo', 
    key : 9, 
    longtitle : 'Of the people in this room who do you most want to switch lives with and why?' }, 
    { shorttitle : 'The opposite sex', 
    key : 10, 
    longtitle : 'If you were the opposite sex for one hour what would you do?' }, 
    { shorttitle : 'Oh man', 
    key : 11, 
    longtitle : 'What was the most embarrassing moment of your life?' }, 
    { shorttitle : 'That’s not chlorine', 
    key : 12, 
    longtitle : 'Have you ever peed in a pool?' }, 
    { shorttitle : 'Hey sugar', 
    key : 13, 
    longtitle : 'What was the most embarrassing thing that you ever did while on a date?' }, 
    { shorttitle : '...thaaaanks...', 
    key : 14, 
    longtitle : 'What was the worst gift you ever received?' }, 
    { shorttitle : 'Dance minion', 
    key : 15, 
    longtitle : 'If you had a remote control that would operate anything what would you control?' }, 
    { shorttitle : 'Delicious nuggets', 
    key : 16, 
    longtitle : 'Have you ever eaten dog or cat food?' }, 
    { shorttitle : 'Buried treasure', 
    key : 17, 
    longtitle : 'If you were to bury a time capsule what is one thing you would put in it?' }, 
    { shorttitle : 'I quit', 
    key : 18, 
    longtitle : 'Have you ever quit a job? What’s the story?' }, 
    { shorttitle : 'I can’t even', 
    key : 19, 
    longtitle : 'What was the one thing you could never learn how to do no matter how hard you tried?' }, 
    { shorttitle : 'Never ever', 
    key : 20, 
    longtitle : 'What is that one thing you would never do even if someone offered you all of the money in the world?' }, 
    { shorttitle : 'Intimidation', 
    key : 21, 
    longtitle : 'Who intimidates you the most?' }, 
    { shorttitle : 'Public poop', 
    key : 22, 
    longtitle : 'Have you ever pooped your pants in public?' }, 
    { shorttitle : 'Toilet zoom', 
    key : 23, 
    longtitle : 'Have you ever joined a zoom incognito while on the toilet?' }, 
    { shorttitle : 'Fashion police', 
    key : 24, 
    longtitle : 'Who is wearing the best outfit in the room and why?' }, 
    { shorttitle : 'Triple dog dare', 
    key : 25, 
    longtitle : 'What is the stupidest thing you’ve done because someone dared you to?' }, 
    { shorttitle : 'It’s still good', 
    key : 26, 
    longtitle : 'After you have dropped a piece of food what is the longest time you have left it on the ground and then ate it?' }, 
    { shorttitle : 'Taste like chicken', 
    key : 27, 
    longtitle : 'Have you ever tasted a booger?' }, 
    { shorttitle : 'Cow tongue', 
    key : 28, 
    longtitle : 'What is the weirdest thing you’ve ever eaten?' }, 
    { shorttitle : 'Smooch', 
    key : 29, 
    longtitle : 'Have you ever practiced kissing in a mirror?' }, 
    { shorttitle : 'Bitter', 
    key : 30, 
    longtitle : 'Have you ever tasted ear wax?' }, 
    { shorttitle : 'B & E', 
    key : 31, 
    longtitle : 'What is the most illegal thing you have ever done?' }, 
    { shorttitle : 'Lawless', 
    key : 32, 
    longtitle : 'Have you ever been arrested?' }, 
    { shorttitle : 'Choose', 
    key : 33, 
    longtitle : 'Who is your favorite? Mom or Dad?' }, 
    { shorttitle : 'No regrets', 
    key : 34, 
    longtitle : 'If you could go back in time in erase one thing you said or did what would it be?' }, 
    { shorttitle : 'Last day on earth', 
    key : 35, 
    longtitle : 'The world ends next week and you can do anything you want (even if it is illegal). What would you do?' }, 
    { shorttitle : 'Fender bender', 
    key : 36, 
    longtitle : 'Have you ever accidentally hit something or someone with your car?' }, 
    { shorttitle : 'Sick shades', 
    key : 37, 
    longtitle : 'What is something you’ve done to try to be ‘cooler’?' }, 
    { shorttitle : 'Hotter Potter', 
    key : 38, 
    longtitle : 'Who is the hottest? Hagrid | Dumbledore | or Dobby?' }, 
    { shorttitle : 'Abs of steel', 
    key : 39, 
    longtitle : 'If you could be reincarnated into anyones body who would you want to become?' }, 
    { shorttitle : 'Heath Ledger', 
    key : 40, 
    longtitle : 'Who in the room would make the best super villain and why?' }, 
    { shorttitle : 'Tardy', 
    key : 41, 
    longtitle : 'Which of your fellow ‘Stackers is most likely to be late to a meeting.' }, 
    { shorttitle : 'MisMatch.com', 
    key : 42, 
    longtitle : 'Tell us about the worst date you’ve ever been on' }, 
    { shorttitle : 'Lifechanger', 
    key : 43, 
    longtitle : 'If you could do any other job other than the one you have now what would it be?' }, 
    { shorttitle : 'See no hear no evil', 
    key : 44, 
    longtitle : 'What’s worse losing your sight or losing your hearing?' }, 
    { shorttitle : 'Pumpkin face', 
    key : 45, 
    longtitle : 'What was your Parents’ childhood nickname for you?' }, 
    { shorttitle : 'Poot', 
    key : 46, 
    longtitle : 'What’s the most awkward place you’ve farted?' }, 
    { shorttitle : 'Aladdin', 
    key : 47, 
    longtitle : 'If a genie appeared out of a lamp would your three wishes be?' }, 
    { shorttitle : 'Peeper', 
    key : 48, 
    longtitle : 'If you were invisible for a day who would you spy on?' }, 
    { shorttitle : 'Pants on fire', 
    key : 49, 
    longtitle : 'When was the last time you told a lie?' }, 
    { shorttitle : 'Today years old', 
    key : 50, 
    longtitle : 'How old were you when you found out Santa isn’t real?' }, 
    { shorttitle : 'Let the rain fall down', 
    key : 51, 
    longtitle : 'What movie or tv show do you cry watching every time?' }, 
    { shorttitle : 'Close call', 
    key : 52, 
    longtitle : 'Was there ever a time in your life that you thought you were going to die?' }, 
    { shorttitle : 'Speed demon', 
    key : 53, 
    longtitle : 'Have you ever tried to get out of a speeding ticket?' }, 
    { shorttitle : '50 shades', 
    key : 54, 
    longtitle : 'What book are you embarrassed to have read?' }, 
    { shorttitle : 'Broken', 
    key : 55, 
    longtitle : 'What was your worst injury? What happened?' }, 
    { shorttitle : 'Dictator', 
    key : 56, 
    longtitle : 'If you could write your own law that everyone had to follow what would it be?' }, 
    { shorttitle : 'Not it', 
    key : 57, 
    longtitle : 'Have you ever broken something and blamed someone else?' }, 
    { shorttitle : 'Tacos', 
    key : 58, 
    longtitle : 'When was the last time you did something nice for someone else?' }, 
    { shorttitle : 'Scaredy cat', 
    key : 59, 
    longtitle : 'What is something you have always wanted to try but have been too scared of?' }, 
    { shorttitle : 'Let them eat cake', 
    key : 60, 
    longtitle : 'If you were a king of your own kingdom what would be your first order?' }, 
    { shorttitle : 'Woof', 
    key : 61, 
    longtitle : 'Would you rather be able to play any musical instrument in the world or speak with animals?' }, 
    { shorttitle : 'So cute', 
    key : 62, 
    longtitle : 'Tell us about your first crush.' }, 
    { shorttitle : 'Lucky penny', 
    key : 63, 
    longtitle : 'If you found a $1000 bill on the street what would you do with it?' }, 
    { shorttitle : 'Pizza', 
    key : 64, 
    longtitle : 'If you could only eat one food for the rest of your life what would it be?' }, 
    { shorttitle : 'Becoming', 
    key : 65, 
    longtitle : 'If your life were a book what would it be called?' }, 
    { shorttitle : 'Dead or alive', 
    key : 66, 
    longtitle : 'Who would you invite to your dream dinner party living or dead?' }, 
    { shorttitle : 'Chunks', 
    key : 67, 
    longtitle : 'Tell us your best vomit-related story.' }, 
    { shorttitle : 'Chicken dance', 
    key : 68, 
    longtitle : 'What is the most embarrassing thing that you have done to attract the attention of someone of the opposite sex?' }, 
    { shorttitle : 'Derp', 
    key : 69, 
    longtitle : 'What is the stupidest thing you’ve ever done?' }, 
    { shorttitle : 'Blankie', 
    key : 70, 
    longtitle : 'What is the silliest thing you have an emotional attachment to?' }, 
    { shorttitle : 'Best day ever', 
    key : 71, 
    longtitle : 'What was the best day of your life?' }, 
    { shorttitle : 'Bare it all', 
    key : 72, 
    longtitle : 'Have you ever gone skinny dipping?' }, 
    { shorttitle : 'The letter F', 
    key : 73.0, 
    longtitle : 'What was the lowest grade you received in school and for which subject?' }, 
    { shorttitle : 'Megabyte', 
    key : 74.0, 
    longtitle : 'If you could live your life in a video game which game would you choose?' }
  ],
};

export default truthQuestions;