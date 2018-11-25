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
     * @returns {Promise<~__process, Exception>}
     */
    run () {
        return new Promise((resolve, reject) => {
            try {
                let result = this.__process(this.transferObject);
                if (result instanceof Promise) {
                    result
                        .then(data => resolve(data))
                        .catch(data => reject(data));
                    return;
                }
                resolve(result);
            } catch (e) {
                reject(e);
            }
        });
    }

    /**
     * @private
     */
    __process (transferObject) {}
}

module.exports = Action;