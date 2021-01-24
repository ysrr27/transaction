var express = require('express');
const app = express();
var router = express.Router();
var cors = require('cors');
app.use(cors());
const { t001_transaction } = require('./database');
// define the about route
router.get('/todos', async (req, res)  => {
    res.json(await t001_transaction.findAll());
});

router.post('/crear', async (req, res) => {
    const save = await t001_transaction.create(req.body);
    res.json({ id: save.dataValues.NU_ID });
});

router.post('/actualizar', function (req, res) {
    t001_transaction.update(
        {
            VA_DESCRIPTION: req.body.VA_DESCRIPTION,
            FE_CREATE_ON: req.body.FE_CREATE_ON,
            VA_AMOUNT: req.body.VA_AMOUNT
        },
        { where: { NU_ID: req.body.NU_ID } }
    );
    res.json({ id: req.body.NU_ID });
});

router.post('/eliminar', function (req, res) {
    t001_transaction.destroy({
        where: {
            NU_ID: req.body.NU_ID
        }
    })
    res.json({ id: req.body.NU_ID });
});

module.exports = router;