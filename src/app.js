const express = require('express');
const { appendFile } = require('fs');
const path = require('path');
const app = express();

/* ENRUTADORES */
const mainRouter = require('./routes/main')


/* Rutas */
app.use('/', mainRouter)

app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

/* Middlewares */
app.use(express.static(path.join(__dirname, "../public")))
app.use(express.json)
app.use(express.urlencoded({extended: false}))

const PORT = 3000;
app.listen(PORT, ()=> console.log(
    `
    Puerto levantado
    http://localhost:${PORT}
    `
))