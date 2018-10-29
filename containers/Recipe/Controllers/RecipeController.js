const db = require('../../../helpers/connection');
let SqlFormatter = require('../../../helpers/SqlFormatter');

function getList (req, res) {
    console.log('getList');
    db.query('SELECT * FROM recipes', function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(200).send(rows);
    });
}

function get (req, res) {
    let sql = new SqlFormatter('SELECT * FROM recipes WHERE id = :id');
    console.log(sql.fill(req.params));
    db.query(sql.fill(req.params), req.params.id, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(200).send(rows[0]);
    });
}

function create (req, res) {
    let sql = new SqlFormatter('INSERT INTO recipes (name, author_id, preparing_method) VALUES (:name, :authorId, :preparingMethod)');
    db.query(sql.fill(req.body), function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(201).send(rows);
    });
}

function update (req, res) {
    let parameters = Object.assign({}, req.params, req.body);
    let sql = new SqlFormatter('UPDATE recipes SET name = :name, author_id = :authorId, preparing_method = :preparingMethod WHERE id = :id');
    db.query(sql.fill(parameters), function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(200).send(rows);
    });
}

function remove (req, res) {
    let sql = new SqlFormatter('DELETE FROM recipes WHERE id = :id');
    console.log(sql.fill(req.params));
    db.query(sql.fill(req.params), function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(200).send(rows.affectedRows === 1);
    });
}

module.exports = {
    getList,
    get,
    create,
    update,
    remove,
};
