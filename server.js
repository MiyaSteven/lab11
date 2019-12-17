'use strict';

const express = require('express');
const app = express();

const PORT = 3000;

require('ejs');

//Serves all files in /public folder as '/' for server.
//e.g /public/styles/base.css => localhost:3000/styles/base.css 
app.use( express.static('./public') );
app.set('view engine', 'ejs');



// app.use(express.urlencoded());

// function collectInfo(request, response){
//     console.log(request.body);
//     response.send(request.body);
// };

app.get('/', (request, response) => {

    //Render looks inside /views file for this to work
    response.render('index');
});

app.use('*', (request, response) => {
    response.status(404).send('page not found');
});



app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});




