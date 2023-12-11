const express = require('express');
const router = express.Router();
const controllerAkun = require("./akun.js");
const controllerItem = require("./item.js");
const controllerOrder = require("./order.js");
const controllerIndex = require("../controller/index.js");

router.get('/akun', controllerAkun);
router.get('/item', controllerItem);
router.get('/order', controllerOrder);
router.post('/akun', controllerAkun);
router.post('/item', controllerItem);
router.post('/order', controllerOrder);

router.post('/register', controllerIndex.register);
router.post('/login', controllerIndex.login);

module.exports = router;