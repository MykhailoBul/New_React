import fs from 'fs/promises';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); // Allow specific HTTP methods
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(express.urlencoded({extended: true}));

app.get('/expenses', async (req, res) => {
    const fileContent = await fs.readFile('./data/expenses.json');
    const expensesData = JSON.parse(fileContent);
    res.status(200).json({expenses: expensesData});
});

app.post('/add-expenses', async (req, res) => {
    const data = req.body.expenses;
    const newExpense = {
        ...data,
        id:( Math.random() * 1000).toString(),
    }
    const fileContent = await fs.readFile('./data/expenses.json');
    const expensesData = JSON.parse(fileContent);
    expensesData.push(newExpense);
    await fs.writeFile('./data/expenses.json', JSON.stringify(expensesData, null, 2));
    res.status(201).json({message: 'Expense added successfully'});
});

app.listen(PORT, () => {
    console.log(`Server (backend) running: http://localhost:${PORT}`); 
});