const router = require('express').Router();
const {
  getAllComments,
  createComment,
  updateComment,
  deleteComment,

} = require('./comment-methods');
const auth = require('../../utils/auth');

//path to get all comments : /api/comments

router.route('/').get(getAllComments).post(auth, createComment);

//path to get single comments:  /api/comments/:id
router

  .route('/:id')
  .delete(auth, deleteComment);

module.exports = router;
