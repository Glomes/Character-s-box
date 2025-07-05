import express from 'express'

const app = express();
const PORT = 3030;


app.get("/",(req,res)=>{
    res.send("server rodando de buenas");
})

app.listen(PORT,() =>{
    console.log(`rodando na porta ${PORT}`);
});