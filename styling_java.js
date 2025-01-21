//Question 3 Task 2

function changeColor() {
    const box = document.getElementById('box');
    const colors = ['lightblue', 'lightgreen', 'lightyellow', 'lightcoral', 'lightpink'];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
}

function changeBackgroundColor() {
    const colors = ['#f0f8ff', '#f5f5dc', '#ffebcd', '#ffebf0', '#e6e6fa'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}