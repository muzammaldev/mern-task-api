const Task = require("../models/task.model")
const paginate = require("../utils/paginate")

exports.create = async (req, res) => {
    try {
        const tasks = new Task(req.body)
        await tasks.save()
        res.status(201).json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


exports.findAll = async (req, res) => {
    try {
        res.status(200).json(res.paginatedResults);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.findOne = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).json({ message: 'Task not found' });
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.put = async (req, res) => {
    console.log(req, 'run');

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.patch = async (req, res) => {

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

exports.deleteById = async (req, res) => {

    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Task deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}