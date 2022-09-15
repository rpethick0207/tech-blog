const router = require('express').Router();

const sequelize = require('../config/connection.js');

const { Posts, User, Comments } = require('../models');


// this will get all of the posts for home page
router.get('/', (req, res) => {
  Posts.findAll({
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {

        model: Comments,
        attributes: ['id', 'commentsText', 'posts_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })

    .then((dbPostData) => {
      const posts = dbPostData.map((post) => post.get({ plain: true }));

      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
      });
    })

    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get a single post

router.get('/post/:id', (req, res) => {
  Posts.findOne({
    where: {
      id: req.params.id,
    },
    attributes: ['id', 'title', 'content', 'created_at'],
    include: [
      {
        model: Comments,
        attributes: ['id', 'commentsText', 'posts_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })

    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: 'Post id invalid' });
        return;
      }


      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// login user if they're not already logged in
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// sign up user if theyre not already signed up
router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
