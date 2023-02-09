const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');

const MONGODB_URI = 'mongodb://127.0.0.1/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI)
  .then(x => {
    console.log(`Connected to the database: "${x.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
    return Recipe.deleteMany()
  })
  .then(() => {
    return Recipe.create({
      title: "Lasagna",
      level: "Amateur Chef",
      ingredients: [
        "Bolognesa",
        "Pimiento rojo",
        "Bacon",
        "Tomate natural"
      ],
      cuisine: "Italian",
      dishType: "main_course",
      image: "https://www.recetasdesbieta.com/wp-content/uploads/2018/10/lasagna-original..jpg",
      duration: 40,
      creator: "Aaron y Jose Daniel",
      created: new Date
    })
    .then((res) => {
      console.log(res.title)
    })
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });
