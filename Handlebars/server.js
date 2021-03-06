const express = require('express')

//handlebars
//import handlebars from 'express-handlebars'

const app = express()
const PORT = 8080

app.use(express.static('public'))

const server = app.listen(PORT, () => {
  console.log('servidor levantado en el puerto: ' + server.address().port)
})

//iniciar el servidor con menejo de errores
server.on('error', (error) => console.log(`hubo un error ${error}`))

//metodo para enviar y recibir peticiones json
const router = express.Router()

//usar app delante de use hace que sea general y que toda la app pueda procesar JSON y siempre debe ir antes del router con la peticion**
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const productosRouter = require ('./routes/productosRouter')

//exponer las rutas a una app. router con la peticion**
app.use('/productos', productosRouter)

//handlebars
const handlebars = require( 'express-handlebars')

app.engine(
    'hbs',
    handlebars({
              extname: '.hbs',
              defaultLayout: 'index.hbs'
    })
  )
  
app.set('view engine', 'hbs')
app.set('views', './views')




