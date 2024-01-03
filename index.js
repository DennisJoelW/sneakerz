import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import axios from "axios";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))

const __dirname = dirname(fileURLToPath(import.meta.url)); 

app.get("/", (req, res) => {

    const sepatu = {
        nama: [
        "Nike Dunk Low Black",
        "Nike Dunk Low Pink",
        "Nike Dunk Low Silver",
        "Nike Dunk High Blue"
        ],
        harga: [
        "Rp.1.300.000", 
        "Rp.1.600.000", 
        "Rp.2.300.000",
        "Rp.2.000.000"
        ],
        gambar:[
        "images/blackdunk.webp",
        "images/pinkdunk.webp",
        "images/silverdunk.webp",
        "images/bluedunk.webp",
        ]
      };
      
    res.render("index.ejs", sepatu);
});

app.get("/item", (req, res) => {

  const dunksName = req.query.value
  const dunksPic = req.query.image
  const dunksHarga = req.query.harga

  res.render("item.ejs", {name: dunksName, gambar: dunksPic, harga: dunksHarga});
})



app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });