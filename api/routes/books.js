const {
  index,
  update,
  destroy
} = require('../controllers/books');
const { create } = require('../models/book');

module.exports = router => {
  // localhost:4000/books
  router.get('/books', index);
  router.post('/books', create)
  // localhost:4000/books/12345

  // localhost:4000/books

  // localhost:4000/books/update
  router.post('/books/update', update);

  // localhost:4000/books/destroy
  router.post('/books/destroy', destroy);
};