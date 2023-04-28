const express = require("express");
const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content,Accept,Content-Type,Authorization"
    );
    res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Vous êtes sur l'api pokemon",
    });
});

const pokemonData = require("./routes/pokemonData");
app.use("/pokemonData", pokemonData);

app.listen(port, () => {
    console.log("Serveur en ligne");
});
