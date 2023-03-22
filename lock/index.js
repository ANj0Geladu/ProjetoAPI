const express = require('express')
const servidor = express()
const filme = require('../src/data/filmes.json')

servidor.get('/filme', (req, res)=>{
    return res.json (filme)
})

servidor.listen(3003, ()=>{
    console.log('O servidor está rodando...');
})