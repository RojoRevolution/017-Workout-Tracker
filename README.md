# :zap: 017-Workout-Tracker
Coding Bootcamp assignment using MongoDb, Mongoose and Express.

[Live Deploy on Heroku](https://workout-tracker-017.herokuapp.com/)

[GitHub Link](https://github.com/RojoRevolution/017-Workout-Tracker)

![Application Functionality](/public/images/wt-001.png)
![Application Functionality](/public/images/wt-002.png)

# :zap: Description

This project was the first assignment after our introduction to MongoDB. The goal of the project was to work with Mongoose to add, update and display infomration added to our Mongo database. The front end was already provided (which is pretty awful in terms of UX), and we were primarily tasked with setting up the server, creating the routes, and the CRUD functionality. The project was deployed using Mondo Atlas and Heroku App. Of special note using Mongo, was figuring out how to add a new field, and use $sum to calculate the total durations of all excercises and display it.

# :zap: Functionality

The app works by storing relevant information into a collection called workouts. Upon hitting the main page, if there are existing records in the DB (read the documents), it will display the results of the user's last workout. At this point you can choose to continue your workout (update the documents), or create a new workout (add new documents). Both update and create routes will create new "Excercises" which will be added to the collection. 

Once your finished adding excercises, the main page will display totals for you. You can also visit the "dashboard" to view you totals data in a more pleasing manner using charts. 

# :zap: Licence

This project is covered under the license: MIT

