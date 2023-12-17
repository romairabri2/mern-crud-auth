import {Router} from 'express';
import {login, register, logout, profile} from '../controllers/auth.controller.js';
import {authRequired} from '../middlewares/validateToken.js'

const router = Router();

router.post("/register", register);

router.post("/login", login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);
//cada ruta que se quiera proteger se le coloca el authRequired antes de la funcion

export default router;