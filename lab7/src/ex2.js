input = {
    user: prompt('Enter your name:'),
    num: Number(prompt('Please enter a number between 1 and 100:'))
}

const userName = document.getElementById('name');
const num = document.getElementById('num');
const tell = document.getElementById('tell');




do {
    if (input.num < 1 || input.num > 100) {
        input.num = Number(prompt('Please enter a number between 1 and 100:'));
    }
} while (!(1 <= input.num && input.num <= 100));

if (1 <= input.num && input.num <= 20) {
    tell.innerHTML = 'You have a bright future ahead filled with exciting adventures.';
} else if (21 <= input.num && input.num <= 40) {
    tell.innerHTML = 'Unexpected challenges may arise, but you’ll handle them with grace.';
} else if (41 <= input.num && input.num <= 60) {
    tell.innerHTML = 'Your hard work will soon pay off, bringing success and happiness.';
} else if (61 <= input.num && input.num <= 80) {
    tell.innerHTML = 'A pleasant surprise is on the horizon, bringing joy and laughter.';
} else if (81 <= input.num && input.num <= 100) {
    tell.innerHTML = 'Great things are coming your way, and luck is on your side.';
}

userName.innerHTML = input.user;
num.innerHTML = input.num;