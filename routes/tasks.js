const express = require('express');
const Task = require('../models/Task');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, async (req, res) => {
    const task = await Task.create({ ...req.body, userId: req.user.id });
    res.send(task);
});

router.get('/', verifyToken, async (req, res) => {
    const tasks = await Task.findAll({ where: { userId: req.user.id } });
    res.send(tasks);
});

router.put('/:id', verifyToken, async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (task.userId !== req.user.id) {
        return res.status(403).send('No autorizado');
    }
    await task.update(req.body);
    res.send(task);
});

router.delete('/:id', verifyToken, async (req, res) => {
    const task = await Task.findByPk(req.params.id);
    if (task.userId !== req.user.id) {
        return res.status(403).send('No autorizado');
    }
    await task.destroy();
    res.send('Tarea eliminada');
});

module.exports = router;
