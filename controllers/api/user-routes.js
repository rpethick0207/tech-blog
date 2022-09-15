const router = require('express').Router();
const {
  getAllUsers,
  getSingleUser,
  createUser,
  deleteUser,
  loginUser,
  logoutUser,
  updateUser,
  
} = require('./user-methods');


//the path : /api/user/
router.route('/').get(getAllUsers).post(createUser);


//the path: /api/user/:id
router
  .route('/:id')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);


//path is: /api/user/login
router.post('/login', loginUser);


//path is: /api/user/logout

router.post('/logout', logoutUser);

module.exports = router;