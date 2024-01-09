const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.json({
        message: "Ola"
    });
});

const PORT = 9001;
app.listen(process.env.PORT || PORT,()=>{
    console.log('Estou rodando na porta ' + PORT )
});