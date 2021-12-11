module.exports = {
    app: {
        name: 'my-application',
        baseRoute: '/api',
        port: process.env.SNF_MY_APPLICATION_PORT || 8090 // you can use environment variables
    },
    cors: {
        preflightMaxAge: 5,
        origins: [
            '*'
        ],
        allowHeaders: [
            'x-origin-channel',
            'x-origin-application',
            'x-origin-device',
            'x-identifier'
        ],
        exposeHeaders: []
    },
    log: {
        debug: false,
        bunyan: {
            name: 'Application',
            streams: [
                {
                    level: 'debug',
                    type: 'rotating-file',
                    path: 'logs/{hostname}.log',
                    period: '1d',
                    count: 2
                }
            ]
        }
    },
    authorization: {
        enabled: true,
        basic: {
            users: [
                {
                    username: 'admin',
                    password: 'admin'
                }
            ]
        }
    },
    origin: {
        ignoreExact: [
            '/'
        ],
        ignore: [
            '/doc/'
        ],
        require: {
            application: true,
            channel: true,
            device: false
        }
    }
};
