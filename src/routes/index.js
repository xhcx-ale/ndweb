import {Router} from 'express'
const router = Router();

router.get('/', (req, res) => res.render('index', {title: 'PENE DE BURRO 777'}))

router.get('/about', (req, res) => res.render('about', {title: 'Venta de organos'}))

router.get('/contact', (req, res) => res.render('contact', {title: 'NO'}))

export default router;