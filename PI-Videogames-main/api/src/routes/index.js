require("dotenv").config();
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { Router } = require("express");
const router = Router();
const APIKEY = process.env.YOUR_API_KEY;

const videogames = require("./videogames.js");
const card = require("./card.js");
const released = require("./released");
const genres = require("./genres.js");

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/videogames", videogames);
router.use('/card', card);
router.use("/released", released);
router.use("/genres", genres);

module.exports = router;
