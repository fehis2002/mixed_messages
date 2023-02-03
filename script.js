// An array that contains random messages
const randomMessages = [
    'Lebron James is the greatest player of all time!', 
    'The referees in the 2022-2023 season are not officiating the game well.',
    'The Dunk Contest of 2022 was very disappointing.'
]

// This function generates a cohesive message
function generateMessage(){
    const cohesiveMessage = [];
    // Add random messages to cohesiveMessage
    for(let i = 0; i < randomMessages.length; i++){
        cohesiveMessage.push(randomMessages[Math.floor(Math.random() * randomMessages.length)]);
    }
    // remove duplicates
    cohesiveMessage.filter((v, i, a) => a.indexOf(v) === i);

    return cohesiveMessage.join(' ');
}

console.log(generateMessage());