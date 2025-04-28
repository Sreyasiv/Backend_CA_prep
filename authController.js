const { generateToken } = require('./jwtUtils');

// Dummy users
const users = [
    { username: "user", password: "user123", role: "user" },
    { username: "admin", password: "admin123", role: "admin" }
];

const login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u=>u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = generateToken({ username: user.username, role: user.role });

    res.cookie('token', token, { httpOnly: true, secure: false });
    res.status(200).json({ message: "Login successful", token });
};

const profile = (req, res) => {
    res.status(200).json({ message: `Welcome to your profile, ${req.user.username}` });
};

const adminDashboard = (req, res) => {
    res.status(200).json({ message: `Welcome to Admin Dashboard, ${req.user.username}` });
};

module.exports = { login, profile, adminDashboard };
