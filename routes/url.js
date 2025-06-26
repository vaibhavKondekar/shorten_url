const express = require('express');
const{handleGenrateNewShortUrl,
    handleUpdateVisitHistoryAndRedirect} = require('../controllers/url');
const router = express.Router();

router.post('/',handleGenrateNewShortUrl); 

router.get('/:shortId', handleUpdateVisitHistoryAndRedirect);

module.exports = router;