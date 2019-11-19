const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const businessRouter = require('../business/business-router.js');
const volunteerRouter = require('');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api/business', authenticate, businessRouter);
server.use('/api/volunteer', authenticate, volunteerRouter);

module.exports = server;
