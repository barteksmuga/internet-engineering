import Exception from "~/porto/Ship/Abstracts/Exception";
import {isSet} from "~/porto/Ship/Helpers/IsSet";

class Collection {
    constructor (items) {
        if (typeof items === "undefined") {
            this.items = [];
            return;
        }
        if (items instanceof Collection) {
            const collection = items;
            if (collection.isObject) {
                this.items = Object.assign({}, collection.items);
            } else {
                this.items = collection.items.slice();
            }
            return;
        }
        if (Array.isArray(items)) {
            this.items = items.slice();
            return;
        }
        if (typeof items === "object") {
            this.items = items;
            this.isObject = true;
            return;
        }
        this.items = [items];
    }

    /**
     * Applies given async function to every item of collection and returns new Collection with flatten results
     *
     * @param {function} fn - function to apply
     * @return Collection
     */
    async apply (fn) {
        if (this.isObject) {
            return await fn(this.items);
        }
        let result = new Collection();
        for (let item of this.items) {
            let data = await fn(item);
            if (Array.isArray(data)) {
                result.pushMany(data);
            } else {
                result.push(data);
            }
        }
        return result;
    }

    /**
     * Same as apply, but accepts synchronous function.
     *
     * @param {function} fn
     * @return Collection
     */
    applySync (fn) {
        if (this.isObject) {
            return fn(this.items);
        }
        let result = new Collection();
        for (let item of this.items) {
            let data = fn(item);
            if (Array.isArray(data)) {
                result.pushMany(data);
            } else {
                result.push(data);
            }
        }
        return result;
    }

    push (item, key) {
        if (!this.isObject) {
            this.items.push(item);
            return;
        }
        if (typeof item === "object") {
            this._pushObject(item, key);
            return;
        }
        if (!isSet(key)) {
            throw new Exception('Pushing item to object collection requires key');
        }
        this._warnOverwrittingItems(key);
        this.items[key] = item;
    }

    pushMany (items) {
        if (!Array.isArray(items)) {
            throw new Exception(`Argument to pushMany must be array, ${typeof items} given`);
        }
        if (this.isObject) {
            throw new Exception('Cannot pushMany to object collection (try pushing object through Collection::push)');
        }
        for (let item of items) {
            this.push(item);
        }
    }

    get (key) {
        return this.items[key];
    }

    find (item) {
        return this.findAll(item)[0] || null;
    }

    findAll (item) {
        let foundItems = [];
        if (this.isObject) {
            Object.entries(this.items).forEach(([field, value]) => {
                if (value === item) {
                    foundItems.push(field);
                }
            });
            return foundItems;
        }
        foundItems = this.items.filter(element => element === item);
        if (foundItems.length > 0) {
            return foundItems;
        }
        if (typeof item !== "object") {
            return [];
        }
        let conditions = item;
        let result = this.items;
        for (let field in conditions) {
            result = result.filter(element => {
                if (field.includes('.')) {
                    return this._filterNested(element, field, conditions[field]);
                }
                return element[field] === conditions[field];
            });
        }
        return result;
    }

    pluck (field) {
        if (this.isObject) {
            return this.items[field];
        }
        if (field.includes('.')) {
            let fieldParts = field.split('.');
            field = fieldParts.shift();
            let collection = new Collection;
            this.items.forEach(item => {
                if (Array.isArray(item[field])) {
                    collection.pushMany(item[field]);
                } else {
                    collection.push(item[field])
                }
            });
            return collection.pluck(fieldParts.join('.'));
        }
        return this.items.map(item => {
            return item[field];
        });
    }

    first () {
        return this.items[0];
    }

    _filterNested (element, field, conditionValue) {
        while (field.includes('.')) {
            let fieldParts = field.split('.');
            element = element[fieldParts.shift()];
            if (element === undefined) {
                return false;
            }
            field = fieldParts.join('.');
            if (Array.isArray(element)) {
                for (let elementItem of element) {
                    if (this._filterNested(elementItem, field, conditionValue)) {
                        return true;
                    }
                }
            }
        }
        return element[field] === conditionValue;
    }

    _pushObject (object, key) {
        if (isSet(key)) {
            this._warnOverwrittingItems(key);
            this.items[key] = object;
        }
        for (let field in object) {
            this._warnOverwrittingItems(field);
            this.items[field] = object[field];
        }
    }

    _warnOverwrittingItems (key) {
        if (isSet(this.items[key])) {
            console.warn(`Value in Collection overwritten with Collection::push (key: ${key})`);
        }
    }
}

export default Collection;