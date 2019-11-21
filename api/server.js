const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//const authenticate = require('../auth/authenticate-middleware.js');
//const authRouter = require('../auth/auth-router.js');
const businessRouter = require('../businesses/businesses-router');
const volunteerRouter = require('../volunteers/volunteers-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/business', businessRouter);
server.use('/volunteer', volunteerRouter);
//server.use('/business', authenticate, businessRouter);
//server.use('/volunteer', authenticate, volunteerRouter);

module.exports = server;
