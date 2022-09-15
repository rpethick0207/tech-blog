const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Nunc rhoabitasncus dateui velmm.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Ins vestibulum a blae dust.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text: 'Nivaconse festlum gtis en.',
    user_id: 3,
    post_id: 2
  },
  {
    comment_text: 'Posn quat dui neuat dufend.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Bbi vel leht in werk billas.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sollicitudin sollicitudin est, vitae vestibulum eros volutpat in. Praesent finibus scel',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Suspendisse sit amet augue nunc. Nam sodales velit ac finibus consectetur. Mauris eleifend, lorem sit amet mollis commodo, est ex pellentesque nunc, ac molestie ipsum risus nec mauris.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'Fusce elit lectus, pretium eget eros id, semper lobortis libero. Curabitur at metus mi, id pharetra neque maximus non. Aliquam semper efficitur dignissim..',
    user_id: 4,
    post_id: 2
  },
  {
    comment_text: 'uctus semper turpis sit amet eleifend. Aenean ornare ultricies nunc, sed sollicitudin lacus. Duis sit amet nibh malesuada, egestas turpis eget, tempus arhoncus.',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'Maecenas ultricies erat velit, nec scelerisque metus lobortis a. Etiam ac turpis in turpis ultricies porttitor quis elementum risus..',
    user_id: 3,
    post_id: 1
  },
  {
    comment_text: 'Quisque eget consectetur tellus, quis porta nisi. Integer et est tristique.',
    user_id: 2,
    post_id: 4
  },
  {
    comment_text: 'Orci varinis dis parturient montes, nascetur ridiculus mus. Nam varius malesuada elit, plamet. Ut ut nulla tellus. Cras ac magna efficitur, pellentesque mi in, suscipit arcu. Etiam diam justo, consect',
    user_id: 1,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;