const express = require('express');
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const res = require('express/lib/response');
const categorieRouter = require("./routes/categorie.route");
const scategorieRouter = require("./routes/scategorie.route");
const articleRouter = require("./routes/article.route");
dotenv.config();
const app = express();

//BodyParser Middleware(pour qu'on ecrit req.body dans le fichier categorie.router )
app.use(express.json());
mongoose.set("strictQuery", false);
// Connexion à la base données
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Connexion à la base de données réussie");
}).catch(err => {
  console.log('Impossible de se connecter à la base de données', err);
  process.exit();
});
app.get("/contact", (req, res) => {
  res.send("page de contact");
});
app.use('/api/categories', categorieRouter);
app.use('/api/scategories', scategorieRouter);
app.use('/api/articles', articleRouter);
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
