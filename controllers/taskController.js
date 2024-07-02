const Task = require('../models/task');

exports.createTask = async (req, res) => {
  try {
    const { title, description, priority, dueDate } = req.body;
    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      userId: req.user.id,
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao criar Tarefa' });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar tarefas' });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, priority, dueDate } = req.body;
    const task = await Task.findOne({ where: { id, userId: req.user.id } });

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    task.title = title || task.title;
    task.description = description || task.description;
    task.priority = priority || task.priority;
    task.dueDate = dueDate || task.dueDate;

    await task.save();
    res.json(task);
  } catch (error) {
    res.status(400).json({ error: 'Falha ao atualizar tarefa' });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ where: { id, userId: req.user.id } });

    if (!task) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }

    await task.destroy();
    res.json({ message: 'Tarefa Eliminada com sucesso!' });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao eliminar tarefa' });
  }
};
