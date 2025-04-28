const jwt = require('jsonwebtoken');

const SECRET_KEY = process.env.JWT_SECRET || 'default_secret_key';

const generateToken = (payload) => {
    return jwt.sign(payload, SECRET_KEY, { expiresIn: '15m' });
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET_KEY);
};

module.exports = { generateToken, verifyToken };
