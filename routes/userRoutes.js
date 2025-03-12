const express = require('express');
const router = express.Router();
const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    getGenderOptions
} = require('../controllers/userController');

router.route('/genders').get(getGenderOptions);
router.route('/').get(getUsers);
router.route('/').post(createUser);
router.route('/:id').get(getUserById);
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;