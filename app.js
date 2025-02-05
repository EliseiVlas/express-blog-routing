// importiamo express una volta che lo instaliamo
const express = require('express')
// 
const app = express()
const port = 3000

// definiamo la cartella per i file statici
app.use(express.static("public"));

// progetto base con rotta "/"
app.get('/', (req, res) => {
   res.send("Server del mio blog");
   
});

  // creazione rotta"/bacheca" 
  app.get('/posts', (req, res) => {

    // Faccio stampare il contenuto "posts" in versione jason
    res.json(posts);
  });

//   rimane in chiamata della porta
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})