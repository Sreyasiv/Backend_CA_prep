const { verifyToken } = require('./jwtUtils');

const authMiddleware = (roles = []) => {
    return (req, res, next) => {
        const token = req.cookies['token'] || req.headers['authorization']?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ message: "Unauthorized: No token provided" });
        }

        try {
            const decoded = verifyToken(token);
            req.user = decoded;

            if (roles.length > 0 && !roles.includes(decoded.role)) {
                return res.status(403).json({ message: "Forbidden: Access denied" });
            }

            next();
        } catch (error) {
            return res.status(403).json({ message: "Invalid or expired token" });
        }
    };
};

module.exports = authMiddleware;
