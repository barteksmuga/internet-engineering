class TransferObject {
    constructor (variableObject) {
        this.dataSet = {};
        Object.keys(variableObject).forEach(key => {
            this.dataSet[key] = variableObject[key];
        });
    }

    get (field) {
        return this.dataSet(field);
    }
}

module.exports = TransferObject;