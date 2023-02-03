// Ask user to give me a topic
const prompt = require("prompt-sync")();
var answer = prompt(
    'Give me a topic and i will generate a message regarding a topic. You can chose between basketball, school and Programming. '
    );
// An object that contains random messages of various topics
const topicMessages = {
    'basketball': [
        'Lebron James is the greatest player of all time!', 
        'The referees in the 2022-2023 season are not officiating the game well.',
        'The Dunk Contest of 2022 was very disappointing.'
    ],

    'school': [
        'School is an instution for educting children, teens and adults.', 
        'There are sorts of institutions, like elementary school, middle school, high school, college and university.',
        'Some people love school, some people hate school.',
        'School is fun!!!'
    ],

    'programming': [
        'Programming is the process of activity of writing computers according to Oxford Languages.',
        'HTML is not a programming language!!! It is a Hyper Text Markup Language.',
        'Computers can only read 1\'s and 0\'s. Because of that code needs to be compiled so that the computer understands what is being coded and execute the code.'
    ]
}

// This function generates a cohesive message
function generateMessage(array){
    const cohesiveMessage = [];
    // Add random messages to cohesiveMessage
    for(let i = 0; i < array.length; i++){
        cohesiveMessage.push(array[Math.floor(Math.random() * array.length)]);
    }
    // remove duplicates
    cohesiveMessage.filter((v, i, a) => a.indexOf(v) === i);

    return cohesiveMessage.join(' ');
}

// This function receives a topic and generates a cohesive message
function generateMessageTopic() {
    if(Object.keys(topicMessages).includes(answer)){
        return generateMessage(topicMessages[answer]);
    } else {
        return 'The word you entered was not an option.';
    }
}

console.log(generateMessageTopic());