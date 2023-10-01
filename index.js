import express from "express";

const PORT = 5000;


const app = express();
app.use(express.json()); // включаем обработку json

app.post('/', (req, res) => {
    console.log(req.body);
    res.status(200).json('Сервер запущен!');
});

app.listen(PORT, () => console.log('Server sterted! on PORT ' + PORT));