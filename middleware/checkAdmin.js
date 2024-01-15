const checkAdmin = (req, res, next) => {
    if (!req.user.isAdmin) {
      return res.status(403).json({ message: 'Acesso não autorizado.' });
    }
    next();
  };
  
  module.exports = checkAdmin;
  