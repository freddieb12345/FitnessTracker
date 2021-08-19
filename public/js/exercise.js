//Select all the different section from the webpage
const workoutTypeSelect = document.querySelector("#type");
const cardioForm = document.querySelector(".cardio-form");
const resistanceForm = document.querySelector(".resistance-form");
const cardioNameInput = document.querySelector("#cardio-name");
const nameInput = document.querySelector("#name");
const weightInput = document.querySelector("#weight");
const setsInput = document.querySelector("#sets");
const repsInput = document.querySelector("#reps");
const durationInput = document.querySelector("#duration");
const resistanceDurationInput = document.querySelector("#resistance-duration");
const distanceInput = document.querySelector("#distance");
const completeButton = document.querySelector("button.complete");
const addButton = document.querySelector("button.add-another");
const workoutAdded = document.querySelector("#workout-added");
const newWorkout = document.querySelector(".new-workout");

let workoutType = null;
let shouldNavigateAway = false;

//Function to initiate the exercise. 
async function initExercise() {
    let workout;

    if (location.search.split("=")[1] === undefined) {
        workout = await API.createWorkout()
        console.log(workout)
    }
    if (workout) {
        location.search = "?id=" + workout._id;
    }

}
initExercise();

//Function to allow the user to change the type of workout. (Either Cardio worout or resistance)
function handleWorkoutTypeChange(event) {
    workoutType = event.target.value;
    //Changes the form that is presented to the user based on the workout type that was chosen
    if (workoutType === "cardio") {
      cardioForm.classList.remove("d-none");
      resistanceForm.classList.add("d-none");
    } else if (workoutType === "resistance") {
      resistanceForm.classList.remove("d-none");
      cardioForm.classList.add("d-none");
    } else {
      cardioForm.classList.add("d-none");
      resistanceForm.classList.add("d-none");
    }
    //Run the validateInputs function to ensure the user has used valid inputs in the form
    validateInputs();
}

//Function to ensure that all the inputs in the form are valid inputs (i.e. not empty)
function validateInputs() {
    let isValid = true;

    if (workoutType === "resistance") {
        if (nameInput.value.trim() === "") {
        isValid = false;
        }

        if (weightInput.value.trim() === "") {
        isValid = false;
        }

        if (setsInput.value.trim() === "") {
        isValid = false;
        }

        if (repsInput.value.trim() === "") {
        isValid = false;
        }

        if (resistanceDurationInput.value.trim() === "") {
        isValid = false;
        }
    } else if (workoutType === "cardio") {
        if (cardioNameInput.value.trim() === "") {
        isValid = false;
        }

        if (durationInput.value.trim() === "") {
        isValid = false;
        }

        if (distanceInput.value.trim() === "") {
        isValid = false;
        }
    }
    //Disables the form complete buttons if any of the inputs have been left empty.
    if (isValid) {
        completeButton.removeAttribute("disabled");
        addButton.removeAttribute("disabled");
    } else {
        completeButton.setAttribute("disabled", true);
        addButton.setAttribute("disabled", true);
    }
}

//Function to handle when the form has been sumbited 
async function handleFormSubmit(event) {
    event.preventDefault();

    let workoutData = {};
    //Sets the variables of the workout based on what the users inputs in the form was
    if (workoutType === "cardio") {
        workoutData.type = "cardio";
        workoutData.name = cardioNameInput.value.trim();
        workoutData.distance = Number(distanceInput.value.trim());
        workoutData.duration = Number(durationInput.value.trim());
    } else if (workoutType === "resistance") {
        workoutData.type = "resistance";
        workoutData.name = nameInput.value.trim();
        workoutData.weight = Number(weightInput.value.trim());
        workoutData.sets = Number(setsInput.value.trim());
        workoutData.reps = Number(repsInput.value.trim());
        workoutData.duration = Number(resistanceDurationInput.value.trim());
    }
    //Sends the data from the form to the API and uses it to run the addExercise function.
    await API.addExercise(workoutData);
    //Clears the forms inputs
    clearInputs();
    workoutAdded.classList.add("success");
}

//Handles the animation on completion of adding an exercise
function handleSuccessAnimationEnd() {
    workoutAdded.removeAttribute("class");
    if (shouldNavigateAway) {
        location.href = "/";
    }
}

//Function that clears the inputs in the form, allowing the user to add another workout with ease
function clearInputs() {
    cardioNameInput.value = "";
    nameInput.value = "";
    setsInput.value = "";
    distanceInput.value = "";
    durationInput.value = "";
    repsInput.value = "";
    resistanceDurationInput.value = "";
    weightInput.value = "";
}

//Adding an event listener to the workoutTypeSelect section, causing it to run the handleWorkoutTypeChange whenever the workoutTypeSelect variable is changed
if (workoutTypeSelect) {
    workoutTypeSelect.addEventListener("change", handleWorkoutTypeChange);
}
//Adding an event listener to the completeButton section
if (completeButton) {
    completeButton.addEventListener("click", function (event) {
        shouldNavigateAway = true;
        handleFormSubmit(event);
    });
}
//Adding an event listener to the addButton section
if (addButton) {
    addButton.addEventListener("click", handleFormSubmit);
}
workoutAdded.addEventListener("animationend", handleSuccessAnimationEnd);

document
    .querySelectorAll("input")
    .forEach(element => element.addEventListener("input", validateInputs));
