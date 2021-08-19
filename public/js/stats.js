// Start by fetching all the current workout data from the backend
fetch("/api/workouts/range")
  .then(response => {
    return response.json();
  })
  .then(data => {
    populateChart(data);
  });

API.getWorkoutsInRange()
  //Function that sets the colour pallete of the graphs
  function generatePalette() {
    const arr = [
    "#999999",
    "#777777",
    "#555555",
    "#333333",
    "#111111",
    "#343d46",
    "#4f5b66",
    "#65737e",
    "#a7adba",
    "#c0c5ce",
    "#6e7f80",
    "#536872",
    "#708090",
    "#536878",
  ]
  return arr;
  }
//Function to populate the charts with the data that is passed into it
function populateChart(data) {
  let durations = duration(data);
  let kilograms = calculateTotalWeight(data);
  let workouts = workoutNames(data);
  const colors = generatePalette();

  let line = document.querySelector("#canvas").getContext("2d");
  let bar = document.querySelector("#canvas2").getContext("2d");
  let pie = document.querySelector("#canvas3").getContext("2d");
  let pie2 = document.querySelector("#canvas4").getContext("2d");
  //Creates the linechart
  let lineChart = new Chart(line, {
    type: "line",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      datasets: [
        {
          label: "Workout Duration In Minutes",
          backgroundColor: "black",
          borderColor: "#536878",
          data: durations,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      title: {
        display: true
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true
            }
          }
        ]
      }
    }
  });
  //Creates the bar chart
  let barChart = new Chart(bar, {
    type: "bar",
    data: {
      labels: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      datasets: [
        {
          label: "Kilograms",
          data: kilograms,
          backgroundColor: [
            "rgba(153,153,153)",
            "rgba	(119,119,119)",
            "rgba(85,85,85)",
            "rgba(51,51,51)",
            "rgba	(17,17,17)",
            "rgba(167,173,186)",
            "rgba(192,197,206)"
          ],
          borderColor: [
            "rgba(153,153,153)",
            "rgba	(119,119,119)",
            "rgba(85,85,85)",
            "rgba(51,51,51)",
            "rgba	(17,17,17)",
            "rgba(167,173,186)",
            "rgba(192,197,206)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Kilograms Lifted"
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
  //Creates the pie chart
  let pieChart = new Chart(pie, {
    type: "pie",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Excercises Performed",
          backgroundColor: colors,
          data: durations
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Excercises Performed"
      }
    }
  });
  //Creates the donut chart
  let donutChart = new Chart(pie2, {
    type: "doughnut",
    data: {
      labels: workouts,
      datasets: [
        {
          label: "Excercises Performed",
          backgroundColor: colors,
          data: kilograms
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: "Excercises Performed"
      }
    }
  });
}

//Creates function that stores all the workout durations within an array so that they can be used by the charts 
function duration(data) {
  let durations = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      durations.push(exercise.duration);
    });
  });

  return durations;
}

//Creates function that stores all the workout weights within an array so that they can be used by the charts 
function calculateTotalWeight(data) {
  let total = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      total.push(exercise.weight);
    });
  });

  return total;
}

//Creates function that stores all the workout names within an array so that they can be used by the charts 
function workoutNames(data) {
  let workouts = [];

  data.forEach(workout => {
    workout.exercises.forEach(exercise => {
      workouts.push(exercise.name);
    });
  });
  
  return workouts;
}
