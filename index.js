const express = require("express")
const app = express()
const fs = require('fs')
const path = require('path');

app.get("/", function(require, response){
    response.sendFile(__dirname + "/View/index.html")
})

app.get("/:link", function(require, response){
    switch(require.params.link){
        case 'entrada':
            const filePath2 = path.join(__dirname, 'entrada/texto.md');
            fs.readFile(filePath2, 'utf-8', (err, texto) => {
            if (err) {
                response.status(404).send('Arquivo não encontrado');
            } else {
                response.send(texto);
            }
        });
        break;
        case 'links':
            const filePath = path.join(__dirname, 'entrada/texto.md');
            fs.readFile(filePath, 'utf-8', (err, texto) => {
              if (err) {
                response.status(404).send('Arquivo não encontrado');
              } else {
                const regex = /(http[s]?:\/\/[^\s]+)/g;
                const links = texto.match(regex);
                if (links && links.length > 0) {
                    response.send(links.join('<br>'));
                } else {
                    response.send('Arquivo não apresenta link de URL');
                }
              }
            });
        break;
        case 'validar':
            const filePath3 = path.join(__dirname, 'entrada/texto.md');
            fs.readFile(filePath3, 'utf-8', (err) => {
            if (err) {
                response.status(404).send('Arquivo não encontrado');
            } else {
                response.status(200).send('CODE HTTP 200');
            }
            });
        break;
        default:
            response.sendFile(__dirname + "/View/erro_404.html")
    }
})







module.exports = app;
 

