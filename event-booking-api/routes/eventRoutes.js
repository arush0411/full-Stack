const router = require('express').Router();
const { getAll, getOne, create, update, remove } = require('../controllers/eventController');
const auth = require('../middlewares/authMiddleware');
const isAdmin = require('../middlewares/roleMiddleware');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', auth, isAdmin('admin'), create);
router.put('/:id', auth, isAdmin('admin'), update);
router.delete('/:id', auth, isAdmin('admin'), remove);

module.exports = router;
