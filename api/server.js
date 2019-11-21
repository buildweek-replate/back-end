const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

//const authenticate = require('../auth/authenticate-middleware.js');
//const authRouter = require('../auth/auth-router.js');
const businessesRouter = require('../businesses/businesses-router');
const volunteersRouter = require('../volunteers/volunteers-router');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/auth', authRouter);
server.use('/businesses', businessesRouter);
server.use('/volunteers', volunteersRouter);
//server.use('/business', authenticate, businessRouter);
//server.use('/volunteer', authenticate, volunteerRouter);

module.exports = server;
