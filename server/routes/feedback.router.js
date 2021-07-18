const express = require('express');
const router = express.router();
const pool = require('../modules/pool');

// This will post to database entire feedback
router.post('/')