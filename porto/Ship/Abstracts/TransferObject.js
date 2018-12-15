import {isSet} from "~/porto/Ship/Helpers/IsSet";

class TransferObject {
    constructor (variableObject) {
        this.dataSet = {};
        if (!isSet(variableObject)) {
            return;
        }
        Object.keys(variableObject).forEach(key => {
            this.dataSet[key] = variableObject[key];
        });
    }

    get (field) {
        return this.dataSet[field];
    }
}

export default TransferObject;