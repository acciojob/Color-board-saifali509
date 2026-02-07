//your JS code here. If required.
const container = document.getElementById('container');

// Fixed set of hover colors (none of these are rgb(29,29,29))
const hoverColors = [
  '#FF5733', '#33FF57', '#3357FF', '#F1C40F', '#9B59B6', '#E67E22', '#1ABC9C'
];

// Create 800 squares
for (let i = 0; i < 800; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  // Default color
  square.style.backgroundColor = 'rgb(29, 29, 29)';

  // Hover effect
  square.addEventListener('mouseenter', () => {
    // Pick a random hover color (never dark gray)
    const color = hoverColors[Math.floor(Math.random() * hoverColors.length)];
    square.style.backgroundColor = color;

    // Revert back to default after 1 second
    setTimeout(() => {
      square.style.backgroundColor = 'rgb(29, 29, 29)';
    }, 1000);
  });

  container.appendChild(square);
}