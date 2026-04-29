const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    userId: req.user.id,
  });
  res.json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { userId: req.user.id },
  });
  res.json(tasks);
};

exports.updateTask = async (req, res) => {
  const task = await Task.findOne({
    where: { id: req.params.id, userId: req.user.id },
  });

  if (!task) return res.status(404).json({ message: "Not found" });

  task.status = "completed";
  await task.save();

  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.destroy({
    where: { id: req.params.id, userId: req.user.id },
  });

  res.json({ message: "Deleted" });
};