import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cors from 'cors'
import categorieRouter from "./routes/categorie.route.js"
import scategorieRouter from "./routes/scategorie.route.js"
import articleRouter from "./routes/article.route.js"
import commandeRouter from "./routes/commande.route.js"
import userRouter from "./routes/user.route.js"
import panierRouter from "./routes/panier.route.js"
const app = express()
app.use(express.json());
//bodyparser middleware
app.use(cors());
dotenv.config()
//connexion a la base 

mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology :true
})
.then(()=>{console.log("coneexion reussi")})
.catch(err=>{
    console.log("impossible",err)
    process.exit(); 
});

app.use('/api/categories',categorieRouter )
app.use('/api/scategories',scategorieRouter )
app.use('/api/articles',articleRouter )
app.use('/api/commandes',commandeRouter )
app.use('/api/users',userRouter )
app.use('/api/panier',panierRouter )



app.listen(process.env.PORT,()=>{
    console.log(`serveur is running on port ${process.env.PORT}`);
});

app.get('/',function(req,res){
    res.send('vous etes à la page d\'acceuil ');
});