# Fitness Tracker

</br>
<p align="center">
    <img src="https://img.shields.io/github/languages/count/freddieb12345/FitnessTracker?style=for-the-badge" alt="Languages" />
    <img src="https://img.shields.io/github/languages/top/freddieb12345/FitnessTracker?style=for-the-badge" alt="Top Language" />
    <img src="https://img.shields.io/github/languages/code-size/freddieb12345/FitnessTracker?style=for-the-badge" alt="Code Size" />
    <img src="https://img.shields.io/github/repo-size/freddieb12345/FitnessTracker?style=for-the-badge" alt="Repo Size" />   
    <img src="https://img.shields.io/tokei/lines/github/freddieb12345/FitnessTracker?style=for-the-badge" alt="Total Lines" />
    <img src="https://img.shields.io/github/package-json/dependency-version/freddieb12345/FitnessTracker/express?style=for-the-badge" alt="Express Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/freddieb12345/FitnessTracker/mongoose?style=for-the-badge" alt="Mongoose Version" />
    <img src="https://img.shields.io/github/package-json/dependency-version/freddieb12345/FitnessTracker/morgan?style=for-the-badge" alt="Morgan Version" />
    <img src="https://img.shields.io/github/last-commit/freddieb12345/FitnessTracker?style=for-the-badge" alt="Last Commit" />  
    <img src="https://img.shields.io/github/issues/freddieb12345/FitnessTracker?style=for-the-badge" alt="Issues" />  
    <img src="https://img.shields.io/github/followers/freddieb12345?style=social" alt="Followers" />  
</p>


## Description

Keep track of all your workouts for the week using Fitness Tracker. Fitness tracker logs all of your workouts for the week and displays them on your dashboard through 4 different graphs.

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
    * [Screenshots](#screenshots)
    * [Snippets](#snippets)
* [Credits](#credits)
* [License](#license)

## Installation

1. Clone repository. 
2. Check in routes/api-routes and comment in block of code if you want the database to be prepopulated with dummy values
3. npm install
4. node server.js

Running npm run seed allows you to have a prepopulated database.

<!-- <p align="center">
    <a href="https://track-your-fitness.herokuapp.com/"><img src="https://img.shields.io/badge/-👉 See Live Site-success?style=for-the-badge"  alt="Live Site" /></a>
</p> -->


## Usage

### Screeshots

1. Homepage displaying last workout

![Site](public/assets/homepage.PNG)

2. Creating Workouts

![Site](public/assets/walkthrough.gif)


3. Last Week's Summary

![Site](public/assets/dashboard.PNG)

### Snippets


1. Adding to an array type

```javascript

    //API function to add an exercise
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate(
            { _id: req.params.id },
            {
                $inc: { totalDuration: req.body.duration },
                $push: { exercises: req.body }
            },
            { new: true }).then(dbWorkout => {
                res.json(dbWorkout);
            }).catch(err => {
                res.json(err);
            });

    });
    
```
* The above function adds an exercise to the exercise array that has the spcific id from the current workout and update the specific fields within the workout. It also will add the duration of the exercise to the total duration of the workout.

## Credits

### Author

- Github: [freddieb12345](https://www.github.com/freddieb12345)

### Built With

</br>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTML"><img src="https://img.shields.io/badge/-HTML-orange?style=for-the-badge"  alt="HMTL" /></a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/CSS"><img src="https://img.shields.io/badge/-CSS-blue?style=for-the-badge" alt="CSS" /></a>
    <a href="https://www.javascript.com/"><img src="https://img.shields.io/badge/-Javascript-yellow?style=for-the-badge" alt="Javascript" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Bootstrap-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://getbootstrap.com/"><img src="https://img.shields.io/badge/-Semantic-blueviolet?style=for-the-badge" alt="Bootstrap" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/-Express-blue?style=for-the-badge" alt="Express" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/-MongoDB-blue?style=for-the-badge" alt="MongoDB" /></a>
</p>

## License


</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/freddieb12345/FitnessTracker?style=for-the-badge" alt="MIT license" />
</p>
