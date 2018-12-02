import Recipe from '~/porto/Containers/Recipe/Models/Recipe';

function getList (req, res) {
    Recipe.findAll({
        where: req.query
    }).then(data => res.status(200).send(data));
}

function get (req, res) {
    Recipe.findOne({
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
    Recipe.create(req.body).then(model => res.status(201).send(model));
}

function update (req, res) {
    Recipe.update(req.body, {
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
    Recipe.destroy({
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
