const express = require("express")
const app = express()
app.use(express.json())
let tarefas = [];

app.post('/tarefas', (req, res) => {
    const nova = { id: Date.now(), titulo: req.body.titulo };
    tarefas.push(nova);
    res.status(201).json(nova);
    console.log(tarefas)
});

app.get("/tarefas", (req, res)=>{
    res.send(tarefas)
})

app.delete("/tarefas", (req, res)=>{
    // Lógica para deletar
})

app.put("/tarefas", (req, res)=>{
     // Lógica para atualizar
})

app.listen(3001, () => {
    console.log("O servidor está rodando...")
})