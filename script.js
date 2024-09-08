

      var multipleChoiceQuestions = [
        {
            question: "What is the capital of France?",
            choices: ["Berlin", "Madrid", "Paris", "Lisbon"],
            correctAnswerIndex: 2
        },
        {
            question: "Which planet is known as the Red Planet?",
            choices: ["Earth", "Mars", "Jupiter", "Saturn"],
            correctAnswerIndex: 1
        },
        {
            question: "Who wrote 'To Kill a Mockingbird'?",
            choices: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
            correctAnswerIndex: 0
        },
        {
            question: "What is the smallest prime number?",
            choices: ["0", "1", "2", "3"],
            correctAnswerIndex: 2
        },
        {
            question: "Which element has the chemical symbol 'O'?",
            choices: ["Osmium", "Oxygen", "Gold", "Oganesson"],
            correctAnswerIndex: 1
        }
    ];
    
    // Example of accessing a question and its choices
    console.log(multipleChoiceQuestions[0].question); // "What is the capital of France?"
    console.log(multipleChoiceQuestions[0].choices);  // ["Berlin", "Madrid", "Paris", "Lisbon"]
    console.log(multipleChoiceQuestions[0].choices[multipleChoiceQuestions[0].correctAnswerIndex]); // "Paris"