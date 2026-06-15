const express = require('express');
const router = express.Router();

const gameRoutes = require('./gameRoutes');
const userRoutes = require('./userRoutes');
const collectionRoutes = require('./collectionRoutes');

router.use('/games', gameRoutes);
router.use('/users', userRoutes);
router.use('/collections', collectionRoutes);

module.exports = router;