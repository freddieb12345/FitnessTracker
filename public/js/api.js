const API = {
    //API function to get last workout
    async getLastWorkout() {
      let res;
      try {
        res = await fetch("/api/workouts");
      } catch (err) {
        console.log(err)
      }
      const json = await res.json();
  
      return json[json.length - 1];
    },
    //API function to add an exercise
    async addExercise(data) {
      const id = location.search.split("=")[1];
  
      const res = await fetch("/api/workouts/" + id, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
  
      const json = await res.json();
  
      return json;
    },
    //API function to create a workout
    async createWorkout(data = {}) {
      const res = await fetch("/api/workouts", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
  
      const json = await res.json();
  
      return json;
    },
    //API function to get a set of workouts that are within a set range
    async getWorkoutsInRange() {
      const res = await fetch(`/api/workouts/range`);
      const json = await res.json();
  
      return json;
    },
  };