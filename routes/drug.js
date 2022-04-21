const router = require('express').Router();
const { createDrug, getDrug, getAllDrugs, updateDrug, deleteDrug, addToList, deleteFromList, getDrugNames, autoComplete } = require('../controllers/drug.js');
const { isPharma, authenticateUser } = require('../middleware/authentication.js');

router.route('/createDrug').post(authenticateUser, isPharma, createDrug);
router.route('/getDrug').get(authenticateUser, getDrug);
router.route('/getDrugNames').get(authenticateUser, getDrugNames);
router.route('/getAllDrugs').get(authenticateUser, getAllDrugs);
router.route('/updateDrug').patch(authenticateUser, isPharma, updateDrug);
router.route('/addToList').patch(authenticateUser, isPharma, addToList);
router.route('/deleteFromList').patch(authenticateUser, isPharma, deleteFromList);
router.route('/deleteDrug').delete(authenticateUser, isPharma, deleteDrug);
router.route('/autoComplete').get(authenticateUser, autoComplete);




module.exports = router;