const Task = require('../db/models/task-schema');

//get()
module.exports.getTasks = async (req, res) => {
  try {
    const response = await Task.find();
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

// getByID
module.exports.getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Task.findById(id);
    return res.status(200).json(response);
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

//create
module.exports.createTask = async (req, res) => {
  try {
    const body = req.body;
    const response = await Task.create(body);
    return res.status(200).json({ message: 'created' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

// delete
module.exports.deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Task.findByIdAndDelete(id);
    return res.status(200).json({ message: 'deleted' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

//   update
module.exports.updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;

    const response = await Task.findByIdAndUpdate(id, body);
    return res.status(200).json({ message: 'updated' });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};
