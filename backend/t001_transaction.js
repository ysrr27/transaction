module.exports = (sequelize, type) => {
    return sequelize.define('t001_transaction', {
        NU_ID: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        VA_DESCRIPTION: type.STRING,
        FE_CREATE_ON: type.DATEONLY,
        VA_AMOUNT: type.DECIMAL(30, 10),
    }, {
        timestamps: false
    });
};
