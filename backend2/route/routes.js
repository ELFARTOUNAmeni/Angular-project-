const express = require('express');
const router = express.Router();
const studentController = require('../src/student/studentController');
const immobilierController = require('../src/immobilier/immobilierController');

// Routes for student
router.post('/abc/student/login', studentController.loginUserControllerFn);
router.post('/abc/student/create', studentController.createStudentControllerFn);

// Routes for realty (immobilier)
router.post('/abc/immobilier/ajouter', immobilierController.ajouterRealtyControllerFn);
router.put('/abc/immobilier/update/:id', immobilierController.updateRealtyControllerFn);
router.delete('/abc/immobilier/delete/:id', immobilierController.deleteRealtyControllerFn);
router.get('/abc/immobilier/getAll', immobilierController.getAllRealtiesControllerFn);


module.exports = router;
