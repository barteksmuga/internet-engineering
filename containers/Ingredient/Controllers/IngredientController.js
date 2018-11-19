const Ingredient = require('../Models/Ingredient');

function getList (req, res) {
    Ingredient.findAll({
        where: req.query
    }).then(data => res.status(200).send(data));
}

function get (req, res) {
    Ingredient.findOne({
        where: req.params
    }).then(model => {
        if (model) {
            res.status(200).send(model);
            return;
        }
        res.status(404).send(null);
    });
}

function create (req, res) {
    Ingredient.create(req.body).then(model => res.status(201).send(model));
}

function update (req, res) {
    Ingredient.update(req.body, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        if (result[0] === 0) {
            res.status(404).send(null);
            return;
        }
        res.status(200).send(result[0].toString());
    });
}

function remove (req, res) {
    Ingredient.destroy({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if (result === 0) {
            res.status(404).send(null);
            return;
        }
        res.status(200).send(result.toString());
    });
}

module.exports = {
    getList,
    get,
    create,
    update,
    remove,
};