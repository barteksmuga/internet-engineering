const TransferObject = require('./TransferObject');
const Exception = require('./Exception');

class Action {
    /**
     * @param {TransferObject} transferObject
     */
    constructor (transferObject) {
        this.transferObject = transferObject;
    }

    /**
     * @returns {Promise<~__proceed, Exception>}
     */
    run () {
        return new Promise((resolve, reject) => {
            try {
                let result = this.__proceed(this.transferObject);
                if (result instanceof Promise) {
                    result.then(data => {
                        resolve(data);
                    });
                    return;
                }
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }

    __proceed (transferObject) {}
}

module.exports = Action;