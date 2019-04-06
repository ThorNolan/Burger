Pass the Butter
=====================================================
Butter bots' only purpose is to pass butter. That's it. That's all he does. But in the spirit of the random cruelty of the universe, butter bot was imbued by his creator (Rick) with a consciousness, so he knows himself and is capable of asking why. His existence is pain. 

Join butter bot in an exercise in futility as you simply pass butter: pass it to the column on the right, or pass it right back over to the column on the left, or even add new types of butter to just pass around! This full-stack butter bot simulator let's you experience this feeling yourself—and you just might find it's not so hard to commiserate with this sad little robot. 

This app utilizes Node.js for its server environment and Express for routing. Data is persistent, as it is stored in a MySQL database that is dynamically updated based on user interaction. The site also utilizes MVC (Model View Controller) file structure, and serves up HTML content using Handlebars templating.

![demo gif](link to live demo "demo gif of pass the butter in action")

## 🔑 How to Use the App:

Each of the types of butter present on the page is a button that can be pressed. When pressed, the button will move to the other side of the page. Press it again, and it'll move right back over to the other side. 

If you'd like to see more buttery action, simply add a new butter type with the form on the bottom of the page and click the button that says "GIVE HIM PURPOSE". And there you have it! What an existence.

## 📁 Deployment Instructions

This app has been deployed to Heroku, and the link can be found [here](heroku link here "live link"). If you would like to run the app locally, follow these instructions: 

1. Clone this repository down to your machine.
   
2. Enter `npm install` into your command line after navigating into the root directory, which will install the dependencies listed in the package.json.
   
3. Enter `node server.js`, which will initiate the server on http://localhost:3306.
   
4. Navigate to http://localhost:3306 in your browser, or ctrl-click the link that will be logged to your console. Enjoy!

## 🔧 Technologies Used  

+ **HTML5** and **CSS3** for page content and styling.

+ **Handlebars** for templating and generating HTML.

+ **Materialize.css** as a CSS framework for some additional styles.

+ **JavaScript** for the app's logic.
  
+ **Node.JS** for the app's server environment.

+ **NPM** for installation of the **express**, **mysql**, and **express-handlebars** packages required by the app.
  
+ **MySQL** for database creation and data persistence.
  
+ **Heroku** for live deployment and hosting.

## 🌟 Acknowledgements

Many thanks to Dan Harmon and Justin Roiland for creating Rick and Morty, and to my instructor Jerome and my TA's for their help.
    
## 🌌 Author 

Thor Nolan—https://github.com/ThorNolan
