const ctx = document.getElementById('chart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven'],
        datasets: [{
            label: 'Qualità dell’aria',
            data: [40, 55, 30, 70, 60],
            borderColor: 'cyan'
        }]
    }
});