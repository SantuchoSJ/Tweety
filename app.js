const express = require( 'express' );
const morgan = require('morgan'); //middleware application logger
const nunjucks = require( 'nunjucks' );
const routes = require('./routes');
const app = express(); // crea una instancia de una aplicación de express
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var socketio = require('socket.io');//Como usar el socketio?
// Configurando Nunjucks
app.set('view engine', 'html'); // hace que res.render funcione con archivos html
app.engine('html', nunjucks.render); // cuando le den archivos html a res.render, va a usar nunjucks
nunjucks.configure('views'); // apunta a nunjucks al directorio correcto para los templates

app.use(morgan('tiny'))
app.use('/', routes(io));



app.use(express.static('./public'))




app.listen(3000, function(){
    console.log('Estas escuhando en el puerto 3000')
});
/*var server = app.listen(3000);
var io = socketio.listen(server);*/