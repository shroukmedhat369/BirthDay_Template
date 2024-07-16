// js/script.js

document.addEventListener('DOMContentLoaded', function() {
    if (document.getElementById('challenge1-form')) {
        document.getElementById('challenge1-form').addEventListener('submit', function(event) {
            event.preventDefault();
            checkAnswer1();
        });
    }

    if (document.getElementById('challenge2-form')) {
        document.getElementById('challenge2-form').addEventListener('submit', function(event) {
            event.preventDefault();
            checkAnswer2();
        });
    }

   

    if (document.getElementById('quiz-form')) {
        document.getElementById('quiz-form').addEventListener('submit', function(event) {
            event.preventDefault();
            checkQuiz();
        });
    }

    if (document.getElementById('star-chart')) {
        generateStars(memories);
    }
});

function checkAnswer1() {
    const form = document.getElementById('challenge1-form');
    const feedback = document.getElementById('challenge1-feedback');
    const correctAnswer = 'Paris';

    if (form.q1.value === correctAnswer) {
        showAlert('Correct! Good job !!',true);
        setTimeout(function() {
            window.location.href = 'challenge2.html';
        }, 3000);
    } else {
        showAlert("Incorrect. Please try again:')", false);
    }
}
function showAlert(message, autoClose) {
    const alertBox = document.getElementById('customAlert');
    const alertText = document.getElementById('alertText');
    alertText.textContent = message;
    alertBox.style.display = 'block';

    if (autoClose) {
        setTimeout(closeAlert, 3000);
    }
}

function closeAlert() {
    const alertBox = document.getElementById('customAlert');
    alertBox.style.display = 'none';
}

function checkAnswer2() {
    const form = document.getElementById('challenge2-form');
    const feedback = document.getElementById('challenge2-feedback');
    const correctAnswer = 'Venus';

    if (form.q2.value === correctAnswer) {
        showAlert('Fantastic bestie!! Proud of youuu!',true);
        setTimeout(function() {
            window.location.href = 'challenge3.html';
        }, 3000);
    } else {
        showAlert('Incorrect. Please try again.',false);
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-spot-difference');
    const feedback = document.getElementById('spot-the-difference-feedback');
    const correctAnswer = "3"; // The value of the correct radio button

    submitButton.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="difference"]:checked');
        
        if (!selectedOption) {
            showAlert('Please select an image before proceeding.',true);
            return;
        }

        if (selectedOption.value === correctAnswer) {
            showAlert('Correct! Proceeding to the next challenge...',true);
            setTimeout(function() {
                window.location.href = 'challenge4.html'; // Proceed to the next challenge
            }, 3000);
        } else {
            showAlert('Incorrect. Try again!',false);
        }
    });
});


function checkQuiz() {
    const quizForm = document.getElementById('quiz-form');
    
    const correctAnswer = 'Nitrogen';
    const userAnswer = quizForm.q1.value;

    if (userAnswer === correctAnswer) {
        showAlert( 'Correct!',true);
        setTimeout(function() {
            window.location.href = 'star-chart.html';
        }, 3000);
    } else {
        showAlert('Incorrect. Please try again.',false);
    }
}

const memories = [
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    { message: "happy birthday " },
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    { message: "Happy birthday " },
    
    // Add more memories as needed
];



function generateStars(memories) {
    const starChart = document.getElementById('star-chart');

    memories.forEach((memory, index) => {
        const starContainer = document.createElement('div');
        starContainer.className = `star-container star-container-${index}`;

        const star = document.createElement('img');
        star.className = 'star';
        star.src = './img/star.png'; // Path to your star image
        star.alt = 'Star';
        star.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click event from propagating to the document
            revealMemory(memory, starContainer);
        });

        starContainer.appendChild(star);
        starChart.appendChild(starContainer);

        // Randomly position the star container within the star chart
        const containerWidth = starChart.offsetWidth;
        const containerHeight = starChart.offsetHeight;
        const randomX = Math.random() * (containerWidth - 50); // 50 is the width of the star
        const randomY = Math.random() * (containerHeight - 50); // 50 is the height of the star
        starContainer.style.left = `${randomX}px`;
        starContainer.style.top = `${randomY}px`;
    });
}

function revealMemory(memory, starContainer) {
    // Close any existing cards
    document.querySelectorAll('.cloud-card').forEach(card => card.remove());

    // Create and display the new card
    const memoryDiv = document.createElement('div');
    memoryDiv.className = 'cloud-card';
    memoryDiv.innerHTML = `<p>${memory.message}</p>`;

    starContainer.appendChild(memoryDiv);

    // Show the next button after all memories are displayed
    if (document.getElementById('star-chart').children.length === memories.length) {
        document.getElementById('next-button').style.display = 'inline';
        document.getElementById('next-button').addEventListener('click', function() {
            window.location.href = 'personalized-newspaper.html';
        });
    }
}

// Close all cards when clicking on the background
document.body.addEventListener('click', function() {
    document.querySelectorAll('.cloud-card').forEach(card => card.remove());
});




document.addEventListener('DOMContentLoaded', function() {
    const newspaperContent = [
        { headline: "Front Page News: Friend Celebrates Birthday!", article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { headline: "Achievement Unlocked: Friend Graduates With Honors", article: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas." },
        { headline: "Funny Stories: Friend's Hilarious Pranks", article: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae." },
        // Add more headlines and articles here
    ];

    const newspaper = document.getElementById('newspaper');
    newspaperContent.forEach(item => {
        const article = document.createElement('div');
        article.classList.add('newspaper-article');
        const headline = document.createElement('h3');
        headline.textContent = item.headline;
        const content = document.createElement('p');
        content.textContent = item.article;
        article.appendChild(headline);
        article.appendChild(content);
        newspaper.appendChild(article);
    });
});

// Memory Mosaic
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('flip'));
            card.classList.add('flip');
        });
    });
});