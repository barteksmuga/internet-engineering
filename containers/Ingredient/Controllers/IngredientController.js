const db = require('../../../helpers/connection');
let SqlFormatter = require('../../../helpers/SqlFormatter');

function getList (req, res) {
    console.log('getList');
    db.query('SELECT * FROM ingredients', function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(200).send(rows);
    });
}

function get (req, res) {
    let sql = new SqlFormatter('SELECT * FROM ingredients WHERE id = :id');
    db.query(sql.fill(req.params), req.params.id, function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(200).send(rows[0]);
    });
}

function create (req, res) {
    let sql = new SqlFormatter('INSERT INTO ingredients (name) VALUES (:name)');
    db.query(sql.fill(req.body), function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(201).send(rows);
    });
}

function update (req, res) {
    let parameters = Object.assign({}, req.params, req.body);
    let sql = new SqlFormatter('UPDATE ingredients SET name = :name WHERE id = :id');
    db.query(sql.fill(parameters), function (err, rows, fields) {
        if (err) {
            throw err;
        }
        res.status(200).send(rows);
    });
}

function remove (req, res) {
    let sql = new SqlFormatter('DELETE FROM ingredients WHERE id = :id');
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