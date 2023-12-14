const studentService = require('./studentService');
const Student = require('./studentModel');

const userSessions = {};

const createStudentControllerFn = async (req, res) => {
    try {
        const { firstname, lastname, email, password, phoneNumber } = req.body;
        const data = { firstname, lastname, email, password, phoneNumber }; // Ajout du champ phoneNumber
        const savedStudent = await studentService.createStudentServiceFn(data);
        res.status(201).json(savedStudent);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

const loginUserControllerFn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Student.findOne({ email, password });

        if (user) {
            const sessionId = Math.random().toString(36).substring(7);
            userSessions[sessionId] = { userId: user._id, email: user.email };

            return res.json({ success: true, message: 'Login successful', sessionId, data: user });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
};

module.exports = {
    createStudentControllerFn,
    loginUserControllerFn
};
