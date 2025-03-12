const User = require('../models/user');

const getUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const createUser = async (req, res) => {
    try {
        const { name, age, dateOfBirth, password, gender, about } = req.body;

        if (!name || !age || !dateOfBirth || !password || !gender) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        // const existingUser = await User.findOne({ name });
        // if (existingUser) {
        //     return res.status(409).json({ message: 'User with the same name already exists. Please choose a different name' });
        // }

        const user = await User.create({
            name,
            age,
            dateOfBirth,
            password,
            gender,
            about
        });

        res.status(201).json({
            _id: user._id,
            name: user.name,
            age: user.age,
            dateOfBirth: user.dateOfBirth,
            gender: user.gender,
            about: user.about
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages });
        }
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const { name, age, dateOfBirth, gender, about } = req.body;

        if (name) user.name = name;
        if (age) user.age = age;
        if (dateOfBirth) user.dateOfBirth = dateOfBirth;
        if (gender) user.gender = gender;
        if (about) user.about = about;

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            age: updatedUser.age,
            dateOfBirth: updatedUser.dateOfBirth,
            gender: updatedUser.gender,
            about: updatedUser.about
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages });
        }
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.deleteOne();

        res.status(200).json({ message: 'User removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

const getGenderOptions = (req, res) => {
    try {
        res.status(200).json(['Male', 'Female', 'Other']);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getGenderOptions
};