var words = [
    'Eric',
    'Jenn',
    'Patrick',
    'Maggie',
];

var hangman = [
    {from: [70,38], to: [72,46]},
    {from: [70,38], to: [68,46]},
    {from: [70,45], to: [72,55]},
    {from: [70,45], to: [72,55]},
    {from: [70,35], to: [72,45]},
    {circle: [70,30], radius: 2},
    {from: [70,5], to: [70,25]},
    {from: [30,5], to: [70,5]},
    {from: [30,95], to: [30,5]},
    {from: [1,95], to: [99,95]},
];

// get stats

var stats = {streak: 0, scores: []};

if (typeof(Storage) !== "undefined") {
    if (localStorage.hangman !== undefined) {
        stats = JSON.parse(localStorage.hangman);
        setScore();
    }
}

var word, currentWord, guessesLeft, guessed;

generateWord();

function generateWord() {
    currentWord = [], guessesLeft = 10, guessed = [];
    document.querySelector('.guessesLeft').querySelector('span').innerHTML = guessesLeft;
    document.querySelector('.guessed').querySelector('span').innerHTML = '';
    document.querySelector('input').style.display = null;
    document.querySelector('button').style.display = 'none';
    document.querySelector('.hangman').innerHTML = '';
    word = words[Math.floor(Math.random() * words.length)];
    console.log(word);

    Let html = '';

    for (Let i = 0; i < word.length; i++) {
        if (word[i] == ' ') {
            currentWord[i] = word[i];
            html += '<span class="hidden" style="border:none;"></span>';
        } else html += '<span class="hidden"></span>';
    }

    document.querySelector('word').innerHTML = html;

    // check input

    document.querySelector('input').addEventListener('change', function() {
        if (this.value !== "" && this.value !== " ") {
            if (this.value.length >1) {
                if (this.value.length !== word.length) alert('Your guess is not the same length as the word!');
                else if (this.value == word) {
                    for (Let i = 0; i < word.length; i++) {
                        document.querySelector('.word').querySelectorAll('span')[i].innerHTML = word[i];
                    }

                    finish();                    
                }

                else {
                    drawHangman();
                    drawHangman();
                    fadeColor('#ff2929');
                }

            } else if (this.value.match(/^[A-Za-z]+$/)) {
                Let alreadyGuessed = false;
                for (Let i = 0; i < guessed.length; i++) {
                    
                }
            }
        }
    })

}