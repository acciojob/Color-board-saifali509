//your JS code here. If required.
const container = document.getElementById('container');

// Function to generate a random color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Create 800 squares
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // Set default color (already set in CSS, but safe to enforce)
  square.style.backgroundColor = 'rgb(29, 29, 29)';

  // Hover effect
  square.addEventListener('mouseenter', () => {
    const color = getRandomColor();
    square.style.backgroundColor = color;

    // Revert back to default after 1 second
    setTimeout(() => {
      square.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
  });

  container.appendChild(square);
}