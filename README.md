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
* [Live Link](https://stark-woodland-99025.herokuapp.com/?id=6123ccd49fa2ee0016fed818)

## Installation

1. Clone repository. 
3. npm install
4. node server.js

Running npm run seed allows you to have a prepopulated database.

## Usage

### Screeshots

1. Dashboard displaying transaction table and graph

![Site](public/assets/dashboard.PNG)

2. Adding and subtracting funds

![Site](public/assets/walkthrough.gif)

### Snippets

1. Populating the table

```javascript

        //Function to populate the table
        function populateTable() {
        let tbody = document.querySelector("#tbody");
        tbody.innerHTML = "";

        transactions.forEach(transaction => {
            // create and populate a table row
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td>${transaction.name}</td>
            <td>${transaction.value}</td>
            `;

            tbody.appendChild(tr);
        });
        };
    
```
* The above function populates the table with the transaction created by the user.

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
    <a href="https://semantic-ui.com/"><img src="https://img.shields.io/badge/-Semantic-brightgreen?style=for-the-badge" alt="Semantic" /></a>
    <a href="https://nodejs.org/en/"><img src="https://img.shields.io/badge/-Node-orange?style=for-the-badge" alt="Node" /></a>
    <a href="https://www.npmjs.com/package/express"><img src="https://img.shields.io/badge/-Express-blue?style=for-the-badge" alt="Express" /></a>
    <a href="https://www.mongodb.com/"><img src="https://img.shields.io/badge/-MongoDB-blue?style=for-the-badge" alt="MongoDB" /></a>
</p>

## License


</br>
<p align="center">
    <img align="center" src="https://img.shields.io/github/license/freddieb12345/FitnessTracker?style=for-the-badge" alt="MIT license" />
</p>
