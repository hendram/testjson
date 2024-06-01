document.addEventListener('DOMContentLoaded', (event) => {
    const ctx = document.getElementById('doughnutChart').getContext('2d');

    const data = {
        labels: ['Ladder Score', 'Log GDP per Capita', 'Social Support', 'Healthy Life Expectancy', 'Freedom to Make Life Choices', 'Generosity', 'Perceptions of Corruption'],
        datasets: [{
            label: 'Finland',
            data: [7.741, 1.844, 1.572, 0.695, 0.859, 0.142, 0.413],
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
                'rgba(255, 99, 132, 0.5)',
                'rgba(201, 203, 207, 0.5)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(201, 203, 207, 1)'
            ],
            borderWidth: 1,
            hoverOffset: 20 // This property will create the separation effect on hover
        }]
    };

    const options = {
        responsive: true,
        animation: {
            animateScale: true,
            animateRotate: true,
            duration: 2000 // Duration of the animation in milliseconds
        },
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: true,
                position: 'top'
            }
        }
    };

    const doughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: options
    });
});
