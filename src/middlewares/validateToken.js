import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from '../config.js';

export const authRequired = (req, res, next) => {
    //console.log(req.headers);
    //const token = req.headers.cookie;
    //console.log(token);
    /*const cookies = req.cookies;
    console.log(cookies);*/

    const {token} = req.cookies;

    if(!token)
    return res.status(401).json({ message: "No token, authorization denied" });

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) return res.status(401).json({ messge: "Invalid token" });

        req.user = user;
        //console.log(user.id); 

        next();
    });

    
}