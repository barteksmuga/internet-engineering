const express = require('express');
const fs = require('fs');
const path = require('path');
const ValidateRequestMiddleware = require('./Middlewares/ValidateRequest');

class Porto {
    /**
     * @returns {array}
     */
    static getContainerDirectories () {
        const containerRootDirectory = path.resolve(__dirname, '..', 'Containers');
        return fs.readdirSync(containerRootDirectory).map(containerName => path.join(containerRootDirectory, containerName));
    }

    /**
     * @returns {array}
     */
    static getRoutes () {
        let routes = {};
        this.getContainerDirectories().forEach(containerDirectory => {
            let controllerDirectory = path.join(containerDirectory, 'Controllers');
            if (!fs.existsSync(controllerDirectory)) {
                return;
            }
            fs.readdirSync(controllerDirectory).forEach(controllerName => {
                const ControllerClass = require(path.join(controllerDirectory, controllerName));
                const router = routes[ControllerClass.routePrefix] || express.Router();
                Object.keys(ControllerClass.routeMap).forEach(action => {
                    let routeDescription = ControllerClass.routeMap[action];
                    let middlewares = routeDescription.middlewares || [];
                    let routeMethod = routeDescription.method.toLowerCase();

                    let validateRequestMiddleware = new ValidateRequestMiddleware(routeDescription.requestValidator);
                    router[routeMethod](routeDescription.route, validateRequestMiddleware.handle.bind(validateRequestMiddleware));

                    middlewares.forEach(middlewareClass => {
                        let middlewareObject = new middlewareClass();
                        router[routeMethod](routeDescription.route, middlewareObject.handle.bind(middlewareObject));
                    });

                    router[routeMethod](routeDescription.route, ControllerClass[action]);
                });
                routes[ControllerClass.routePrefix] = router;
            });
        });
        return routes;
    }
}

module.exports = Porto;