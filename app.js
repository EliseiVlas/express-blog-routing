// importiamo express una volta che lo instaliamo
const express = require('express')
const app = express()
const port = 3000

// importiamo il roputer delle pizze
const piattiRouter = require('./routers/posts');

// definiamo la cartella per i file statici
app.use(express.static("public"));

// progetto base con rotta "/"
app.get('/', (req, res) => {
   res.send("Ciao sono la rotta Home, dell mio locale!!!");
   
});

// utilizziamo la rotta delle pizze andando a definire la parte iniziale delle rotte
app.use("/piatti", piattiRouter)

  // avvio del server sulla porta specificata
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})