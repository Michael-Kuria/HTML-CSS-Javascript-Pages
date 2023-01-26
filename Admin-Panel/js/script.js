
  const ctx = document.getElementById('lineChart');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Earnings in $',
        data: [20500, 19000, 18000, 21000, 24000, 22500,20500, 19000, 18000, 21000, 24000, 22500],
        borderWidth: 1,
        backgroundColor:[
            'rgba(85,85,85,1)'
          ],
        borderColor: ['rgb(41,155,99)']
      }]
      
    },
    options: {
     responsive:true
    }
  });

  
  const ctx2 = document.getElementById('doughnut');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Academic', 'Non-academic', 'Administration', 'Others'],
      datasets: [{
        label: 'Employees',
        data: [42,12,8,6],
        borderWidth: 1,
        backgroundColor:[
            'rgba(41,155,99,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(120,46,139,1)'
          ],
        borderColor: [
            'rgba(41,155,99,1)',
            'rgba(54,162,235,1)',
            'rgba(255,206,86,1)',
            'rgba(120,46,139,1)']
      }]
    },
    options: {
        responsive:true
       }
  });
