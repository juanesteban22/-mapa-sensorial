const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'mapaSensorial'
})

app.post('/create',(req,res)=>{
    const nombreGrafica = req.body.nombreGrafica
    const categoria = req.body.categoria 
    const colorCatego = req.body.colorCatego
    const tamañoFuenteCategorias = req.body.tamañoFuenteCategorias
    const tipoFuenteCategorias = req.body.tipoFuenteCategorias
    const altoGrafico = req.body.altoGrafico
    const colorFondo = req.body.colorFondo
    const colorTexto = req.body.colorTexto
    const tituloGrafica = req.body.tituloGrafica
    const colorCuadro = req.body.colorCuadro
    const tamañoFuenteEtiquetas = req.body.tamañoFuenteEtiquetas
    const tipoFuenteEtiquetas = req.body.tipoFuenteEtiquetas
    const colorEtiquetas = req.body.colorEtiquetas
    const colorNivelSensor = req.body.colorNivelSensor
    const indicadorMapa = req.body.indicadorMapa
    const llenar = req.body. llenar
    const colorMapa = req.body.colorMapa
    const gruesor = req.body.gruesor
    db.query('INSERT INTO formulario (nombreGrafica,categoria,colorCatego,tamañoFuenteCategorias,tipoFuenteCategorias,altoGrafico,colorFondo,colorTexto,tituloGrafica,colorCuadro,tamañoFuenteEtiquetas,tipoFuenteEtiquetas,colorEtiquetas,colorNivelSensor,indicadorMapa,llenar,colorMapa,gruesor)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',[nombreGrafica,categoria,colorCatego,tamañoFuenteCategorias,tipoFuenteCategorias,altoGrafico,colorFondo,colorTexto,tituloGrafica,colorCuadro,tamañoFuenteEtiquetas,tipoFuenteEtiquetas,colorEtiquetas,colorNivelSensor,indicadorMapa,llenar,colorMapa,gruesor],
    (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
        }
    }
    )
});

app.get('/datos',(req,res)=>{
    db.query('SELECT * FROM formulario',
    (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
        }
    }
    )
});
app.put('/update',(req,res)=>{
    const id = req.body.id
    const nombreGrafica = req.body.nombreGrafica
    const categoria = req.body.categoria 
    const colorCatego = req.body.colorCatego
    const tamañoFuenteCategorias = req.body.tamañoFuenteCategorias
    const tipoFuenteCategorias = req.body.tipoFuenteCategorias
    const altoGrafico = req.body.altoGrafico
    const colorFondo = req.body.colorFondo
    const colorTexto = req.body.colorTexto
    const tituloGrafica = req.body.tituloGrafica
    const colorCuadro = req.body.colorCuadro
    const tamañoFuenteEtiquetas = req.body.tamañoFuenteEtiquetas
    const tipoFuenteEtiquetas = req.body.tipoFuenteEtiquetas
    const colorEtiquetas = req.body.colorEtiquetas
    const colorNivelSensor = req.body.colorNivelSensor
    const indicadorMapa = req.body.indicadorMapa
    const llenar = req.body. llenar
    const colorMapa = req.body.colorMapa
    const gruesor = req.body.gruesor

    db.query('UPDATE formulario SET nombreGrafica=?,categoria=?,colorCatego=?,tamañoFuenteCategorias=?,tipoFuenteCategorias=?,altoGrafico=?,colorFondo=?,colorTexto=?,tituloGrafica=?,colorCuadro=?,tamañoFuenteEtiquetas=?,tipoFuenteEtiquetas=?,colorEtiquetas=?,colorNivelSensor=?,indicadorMapa=?,llenar=?,colorMapa=?,gruesor=? WHERE id =?',[nombreGrafica,categoria,colorCatego,tamañoFuenteCategorias,tipoFuenteCategorias,altoGrafico,colorFondo,colorTexto,tituloGrafica,colorCuadro,tamañoFuenteEtiquetas,tipoFuenteEtiquetas,colorEtiquetas,colorNivelSensor,indicadorMapa,llenar,colorMapa,gruesor,id],
    (err,result) =>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
        }
    }
    )

});
app.listen(3001,()=>{
    console.log('corriendo en el puerto 3001')
})