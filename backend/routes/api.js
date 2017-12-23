/*jshint esversion: 6 */

// Dependencies
const express = require('express');
const router = express.Router();

const apiHome = require('../controller/apiHome');

// API
// Base API Route
router.get('/', apiHome.getApi);
router.post('/', apiHome.postApi);



// MiddleWare for any invalid path requests
router.use(apiHome.invalidPath);
// Return Router
module.exports = router;
