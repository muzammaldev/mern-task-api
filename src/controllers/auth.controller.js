
const User = require('../models/user.model');
const { generateToken } = require('../utils/jwt.utils');


exports.signup = async (req, res) => {
    const { name, email, password } = req.body

    try {
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const newUser = new User({ name, email, password })
        await newUser.save()

        const token = generateToken({ id: newUser._id, email: newUser.email })
        res.status(201).json({ message: 'Signup successful', token })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}



exports.login = async (req, res) => {
    const { email, password } = req.body

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = generateToken({ id: user._id, email: user.email });
        res.status(200).json({ message: 'Login successful', token });

    } catch (error) {

    }
}
