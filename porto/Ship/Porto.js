import fs from 'fs';
import express from 'express';
import path from 'path';
import ValidateRequestMiddleware from '~/porto/Ship/Middlewares/ValidateRequest';
import appRootPath from 'app-root-path';
import Sequelize from '~/helpers/Sequelize';

class Porto {
    /**
     * @returns {array}
     */
    static getContainerDirectories () {
        const containerRootDirectory = path.resolve(this.rootDirectory, 'porto', 'Containers');
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
                let controllerPath = path.join(controllerDirectory, controllerName);
                const ControllerClass = require(`${controllerPath}`).default;
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

    static get rootDirectory () {
        return appRootPath.path;
    }

    static loadModels () {
        const files = [];
        const sortDir = containerDir => {
            const folders = [];
            const CheckFile = filePath => (fs.statSync(filePath).isFile());
            const sortPath = dir => {
                dir = path.join(dir, 'Models');
                if (!fs.existsSync(dir)) {
                    return;
                }
                fs.readdirSync(dir)
                    .filter(file => file.indexOf(".") !== 0)
                    .forEach((res) => {
                        const filePath = path.join(dir, res);
                        if (CheckFile(filePath)) {
                            files.push(filePath);
                        } else {
                            folders.push(filePath);
                        }
                    });
            };
            folders.push(containerDir);
            let i = 0;
            do {
                sortPath(folders[i]);
                i += 1;
            } while (i < folders.length);
        };
        Porto.getContainerDirectories().forEach(path => sortDir(path));
        files.forEach((file) => {
            require(`${file}`);
        });
    }
}

export default Porto;