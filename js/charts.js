
// var chartUI = {
//     // Creating variables and functions for chart options
//     hourlyBtn: $('#option-hourly'),
//     dailyBtn: $('#option-daily'),
//     weeklyBtn: $('#option-weekly'),
//     monthlyBtn: $('#option-monthly'),
//     hourlyActive: function() {
//         this.hourlyBtn.addClass('active-option');
//         this.dailyBtn.removeClass('active-option');
//         this.weeklyBtn.removeClass('active-option');
//         this.monthlyBtn.removeClass('active-option');
//     },
//     dailyActive: function() {
//         this.dailyBtn.addClass('active-option');
//         this.hourlyBtn.removeClass('active-option');
//         this.weeklyBtn.removeClass('active-option');
//         this.monthlyBtn.removeClass('active-option');
//     },
//     weeklyActive: function() {
//         this.weeklyBtn.addClass('active-option');
//         this.dailyBtn.removeClass('active-option');
//         this.hourlyBtn.removeClass('active-option');
//         this.monthlyBtn.removeClass('active-option');
//     },
//     monthlyActive: function() {
//         this.monthlyBtn.addClass('active-option');
//         this.dailyBtn.removeClass('active-option');
//         this.weeklyBtn.removeClass('active-option');
//         this.hourlyBtn.removeClass('active-option');
//     }
// };
//
//
//
//
//
// var data = {
//     labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
//     datasets: [
//
//
//
//
//
//
//
//         {
//             label: "2013 Deliveries",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "#d2ab10",
//             borderColor: "#d2ab1A",
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2769, 3157],
//         },
//         {
//             label: "2014 Deliveries",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "#ee8616",
//             borderColor: "#ee8611",
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [3547, 4023, 4789, 5456, 6241, 7002, 7798, 9125, 9963, 11203, 12006, 12578],
//         },
//         {
//             label: "2015 Deliveries",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "#8A211D",
//             borderColor: "#8A211A",
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [13572, 14326, 15123, 16512, 17496, 19635, 22567, 24594, 26652, 27125, 27652, 28112],
//         },
//         {
//             label: "2016 Deliveries",
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: "#440400",
//             borderColor: "#44040C",
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: "rgba(75,192,192,1)",
//             pointBackgroundColor: "#fff",
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: "rgba(75,192,192,1)",
//             pointHoverBorderColor: "rgba(220,220,220,1)",
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [28952, 29741, 31256, 32831, 33497, 34513, 0, 0, 0, 0, 0, 0],
//         }
//     ]
// };
//
//
//
//
// var deliveryChart = document.getElementById('deliveries-chart').getContext('2d');
//
//
//
//
//
// function checkSizeSmScreens(width) {
//         if ($(window).width() <= width) {
//             var myBarChart = new Chart(deliveryChart, {
//                 type: 'radar',
//                 data: data,
//                 options: {
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     legend : {
//                         labels : {
//                             fontFamily: 'Arial',
//                             fontSize: 18,
//                             padding: 20
//                         }
//                     },
//                     // animationDuration: 1000
//                 }
//
//             });
//         } else {
//             var myRadarChart = new Chart(deliveryChart, {
//                 type: 'bar',
//                 data: data,
//                 options: {
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     legend : {
//                         labels : {
//                             fontFamily: 'Arial',
//                             fontSize: 18,
//                             padding: 20
//                         }
//                     },
//                     // animationDuration: 1000
//                 }
//
//             });
//         }
//     }
// $(window).resize(checkSizeSmScreens(767));
// $(window).resize( myBarChart.resize());
