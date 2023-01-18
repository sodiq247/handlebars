//Loads the express module
const express = require('express');
//Creates our express server
const app = express();
const port = 3000;
const engine = require('express-handlebars');


app.set('view engine', 'handlebars');
// app.engine('handlebars', handlebars({
//   layoutsDir:  __dirname + '/views/layouts',
// }));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set("views", "./views");
//Serves static files (we need it to import a css file)
app.use(express.static('public'))
//Sets a basic route
app.get('/', (req, res) => {
  res.render('main', {layout : 'index'});});

//Makes the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));