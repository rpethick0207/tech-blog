const { Post } = require('../models');

const postdata = [
  {
    title: 'Praesent finibus scelerisque erat, a condimentum dui pulvinar non. Mauris sapien ipsum, auctor at pretium scelerisque, porta ut quam.',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 2
  },
  {
    title: 'Vivamus rhoncus, justo interdum tortor, ircu vel mauris..',
    content: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 1
  },
  {
    title: 'Vivamus rhoncus, justo vel laoreet gravida, tortor libero interdum tortor, in faucibus tortor arcu vel mauris.',
    content: 'https://europa.eu/parturient/montes/nascetur/ridiculus/mus/etiam/vel.aspx',
    user_id: 3
  },
  {
    title: 'Vivamus ut pellentesque justo, vitae hendrerit sem.',
    content: 'http://google.ca/nam/nulla/integer.aspx',
    user_id: 4
  },
  {
    title: 'Fusce elit lectus, pretium eget eros id, semper lobortis libero.',
    content: 'http://desdev.cn/enim/blandit/mi.jpg',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;


