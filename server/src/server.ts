import express from 'express'

const app = express();
app.use(express.json())

app.post('/users', (response, request) => {
    console.log("acessou a rota bb")
})

app.listen(3333);
