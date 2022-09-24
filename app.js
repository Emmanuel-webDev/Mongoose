const express = require('express');
const mongoose = require('mongoose');
const ctrl = require('./controller/routesHandlers')

const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/express-mongoose', { UseNewUrlParser: true}).then(()=>{
//middleware for parsing incoming req
      app.set('view engine', 'ejs');
      app.set('views', 'frontend')
       app.use(express.urlencoded({extended: true}))

    app.get('/', ctrl.findBooks)
    app.get('/updates/:id', ctrl.getUpdate)
    app.post('/create', ctrl.createBooks)
    app.get('/find', ctrl.findBook)
    app.post('/update/:id', ctrl.updateBook)
    app.post('/del/:id', ctrl.del) 
    app.listen(3000, ()=>{
        console.log('Server running on port 3000')
    })

})

