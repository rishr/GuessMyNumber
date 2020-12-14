'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'correct Number';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;


// we wan to listen to the event

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector
            ('.guess').value);
        console.log(typeof guess);


        // When player wins
        if (!guess) {
            document.querySelector('.message').textContent
                = 'No Number';

        } else if (guess === secretNumber) {
            document.querySelector('.message')
                .textContent = 'correct Number';
            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.
                backgroundColor = '#60b347';

            document.querySelector('.number').style.width =
                '30rem';


            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }

        }

        // when the guess is greater than the number
        else if (guess > secretNumber) {

            if (score > 1) {
                document.querySelector('.message')
                    .textContent = 'Yo! too High';
                score--;
                document.querySelector('.score')
                    .textContent = score;
            } else {
                document.querySelector('.message')
                    .textContent = 'Hey! Looser';
                document.querySelector('.score')
                    .textContent = 0;
            }

            // when guess is tooo low

        } else if (guess < secretNumber) {
            if (score > 1) {
                document.querySelector('.message')
                    .textContent = 'Yo! Low low low';
                score--;
                document.querySelector('.score')
                    .textContent = score;
            } else {
                document.querySelector('.message')
                    .textContent = 'Hey! Looser';
                document.querySelector('.score')
                    .textContent = 0;
            }


        }

    });

document.querySelector('.again').addEventListener
    ('click', function () {

        score = 20;
        secretNumber = Math.trunc(Math.random() * 20) + 1;

        document.querySelector('.message')
            .textContent = 'Start the GUESS....';

        document.querySelector('.score')
            .textContent = score;
        document.querySelector('.number')
            .textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.
            backgroundColor = '#222';

        document.querySelector('.number').style.width =
            '15rem';

    })







