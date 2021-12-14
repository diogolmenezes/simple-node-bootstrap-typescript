const Controller = require('./controller');

module.exports = (server, ControllerFactory, routeInfo) => {
    server.get(`${routeInfo.full}/:name`, ControllerFactory.build(Controller, 'load'));
};
