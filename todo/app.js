const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Todo } = require('./models');
const { Op } = require('sequelize');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/todos', async (req, res) => {
  const { title, description, deadline, completed } = req.body;
  const todo = await Todo.create({ title, description, deadline, completed });
  res.json(todo);
});

app.get('/todos', async (req, res) => {
  const todos = await Todo.findAll();
  res.json(todos);
});

app.get('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  res.json(todo);
});

app.put('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, deadline, completed } = req.body;
  const todo = await Todo.findByPk(id);
  await todo.update({ title, description, deadline, completed });
  res.json(todo);
});

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  await todo.destroy();
  res.json({ message: 'Todo deleted.' });
});

app.get('/expired', async (req, res) => {
  const todos = await Todo.findAll({ 
    where: { 
      deadline: { [Op.lt]: new Date() }, 
      completed: false 
    } 
  });
  res.json(todos);
});

app.put('/todos/:id/complete', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.completed = true;
  await todo.save();
  res.json(todo);
});

app.put('/todos/:id/uncomplete', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByPk(id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.completed = false;
  await todo.save();
  res.json(todo);
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
