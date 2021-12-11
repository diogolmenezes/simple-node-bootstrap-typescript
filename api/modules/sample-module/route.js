import Controller from './controller';

// const customServer = require('../../config/custom-server');

const { ControllerFactory } = require('simple-node-framework');
const { route } = require('simple-node-framework').Singleton;

// retreive route information
// ex: { baseRoute: '/api', module: 'customer', full: '/api/customer' }
const { full } = route.info(__filename);

// server.get(`${full}/:name`, ControllerFactory.build(Controller, 'load'));
