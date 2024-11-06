// script.js

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate random salary data for demonstration
const randomSalaries = Array.from({ length: 6 }, () => getRandomInt(2000, 10000));

// Create labels for the past 6 months
const months = ['Jun, 2024', 'Jul, 2024', 'Aug, 2024', 'Sep, 2024', 'Oct, 2024', 'Nov, 2024'];

const ctx = document.getElementById('salaryChart').getContext('2d');
const salaryChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Gross Salary',
            data: randomSalaries,
            borderColor: '#4a90e2',
            backgroundColor: 'rgba(74, 144, 226, 0.2)',
            fill: true,
            tension: 0.4 // Smooth curves
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Salary (₹)'
                }
            }
        }
    }
});
