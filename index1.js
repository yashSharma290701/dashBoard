const myChart = new Chart("myChart", {
    type: "line",
    data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Sales",
          data: [10, 50, 20, 40, 15, 50, 30],
          fill: false,
          borderColor: "rgb(0, 128, 0)",
          tension: 0.1
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  