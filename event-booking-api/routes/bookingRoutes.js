const router = require('express').Router();
const { book, getMyBookings, cancel } = require('../controllers/bookingController');
const auth = require('../middlewares/authMiddleware');

router.post('/:eventId', auth, book);
router.get('/', auth, getMyBookings);
router.delete('/:id', auth, cancel);

module.exports = router;
