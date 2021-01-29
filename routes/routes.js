const express = require('express');
const router = express.Router();

const usersController = require('./../controllers/usersController');

module.exports = () => {
    router.get('/', usersController.getUsers);

    return router;
}