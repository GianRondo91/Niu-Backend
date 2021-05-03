//jwt para firmar token
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pwsSecret';

const auth = async (req, res, next) => {
    //Si estoy en login o register, no verifiques el token de autenticación
    // if(req.url.endsWith('/login') || (req.method === 'POST' && (req.baseUrl.endsWith('/users') || req.baseUrl.endsWith('/admin')))){
    if(req.url.endsWith('/login') || (req.method === 'POST' && (req.baseUrl.endsWith('/users')))){
        next();
        return;
    }

    try{
        const authorization = req.headers.authorization;
        const payload = jwt.verify(authorization, secret);
        req.user = {
            // id: payload.patientId || payload.employeeId, 
            id: payload.idUser, 
            userType: payload.idUser? 'User': 'Admin'
        };
        next();
    }catch(error){
        res.sendSatatus(403);
    }
}

module.exports = auth;