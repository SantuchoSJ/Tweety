const express = require( 'express' );
const morgan = require('morgan'); //middleware application logger
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const bodyParser= require('body-parser')
const socketio = require('socket.io');

const app = express(); // crea una instancia de una aplicación de express

// Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates


//STATIC
app.use(express.static('./public'))

//MORGAN
app.use(morgan('tiny'))

//Body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())



//Server


app.listen(3000, function(){
    console.log('Estas escuhando en el puerto 3000')
});
app.use('/', routes);





