import Task from '../models/task.model.js'

export const getTasks = async (req, res) => {
    const tasks = await Task.find({
        user: req.user.id
    }).populate('user');//populate trae toda la información del user, es dcir el id, username, email
    res.json(tasks);
};

export const createTask = async (req, res) => {
    const { title, description, date } = req.body;

    console.log(req.user);

    const newTask = new Task({
        title,
        description,
        date,
        user: req.user.id
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
};

export const getTask = async (req, res) => {
    const task = await Task.findById(req.params.id).populate('user');
    if(!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
};

export const deleteTask = async (req, res) => {
    const task = await Task.findByIdAndDelete(req.params.id);
    if(!task) return res.status(404).json({ message: 'Task not found' });
    return res.sendStatus(204);//Status 204 significa que todo estuvo bien pero no se devolvera nada
};

export const updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body,
        {
            new: true //devuelve datos nuevo no el viejo
        });
    if(!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
};

