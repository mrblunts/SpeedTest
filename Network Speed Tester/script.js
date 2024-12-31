document.getElementById("startTest").addEventListener("click", function () {
    runSpeedTest();
  });
  
  function runSpeedTest() {
    const downloadSpeedEl = document.getElementById("downloadSpeed");
    const uploadSpeedEl = document.getElementById("uploadSpeed");
    const ctx = document.getElementById("speedChart").getContext("2d");
  
    // Simulated speed test data
    const downloadSpeeds = [];
    const uploadSpeeds = [];
    const labels = [];
    
    for (let i = 1; i <= 10; i++) {
      labels.push(`Test ${i}`);
      downloadSpeeds.push((Math.random() * 100).toFixed(2)); // Random download speed
      uploadSpeeds.push((Math.random() * 50).toFixed(2));    // Random upload speed
    }
  
    // Calculate average speeds
    const avgDownloadSpeed = (
      downloadSpeeds.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) /
      downloadSpeeds.length
    ).toFixed(2);
    const avgUploadSpeed = (
      uploadSpeeds.reduce((a, b) => parseFloat(a) + parseFloat(b), 0) /
      uploadSpeeds.length
    ).toFixed(2);
  
    // Update summary
    downloadSpeedEl.textContent = avgDownloadSpeed;
    uploadSpeedEl.textContent = avgUploadSpeed;
  
    // Create chart
    new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Download Speed (Mbps)",
            data: downloadSpeeds,
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(75, 192, 192, 0.2)",
            borderWidth: 2,
            fill: true,
          },
          {
            label: "Upload Speed (Mbps)",
            data: uploadSpeeds,
            borderColor: "rgba(153, 102, 255, 1)",
            backgroundColor: "rgba(153, 102, 255, 0.2)",
            borderWidth: 2,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          x: {
            title: {
              display: true,
              text: "Test Iteration",
            },
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: "Speed (Mbps)",
            },
          },
        },
      },
    });
  }
  