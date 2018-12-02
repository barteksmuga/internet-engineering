class SqlFormatter {
    constructor (sql) {
        this.sql = sql;
    }

    static snakeCaseKeys (sqlParameters) {
        let result = {};
        Object.keys(sqlParameters).forEach(key => {
            let snakeCasedKey = key.replace(/[A-Z]/g, match => '_' + match.toLowerCase());
            result[snakeCasedKey] = sqlParameters[key];
        });
        return result;
    }

    fill (params) {
        let snakeCasedParams = this.constructor.snakeCaseKeys(params);
        return this.sql.replace(/:(\w+)/g, (match, key) => {
            if (isNaN(snakeCasedParams[key])) {
                return "'" + snakeCasedParams[key].replace('\'', '\\\'') + "'";
            }
            return snakeCasedParams[key];
        });
    }
}

export default SqlFormatter;