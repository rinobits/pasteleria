module.exports = (sequelize, type) => {
    return sequelize.define('orders', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: type.STRING,
            allowNull: false
        },
        phone: {
            type: type.STRING,
            allowNull: false
        },
        tipoMasa: {
            type: type.STRING,
            allowNull: false
        },
        saborMasa: {
            type: type.STRING,
            allowNull: false
        },
        tamano: {
            type: type.STRING,
            allowNull: false
        },
        cobertura: {
            type: type.STRING,
            allowNull: false
        },
        description: {
            type: type.TEXT,
            allowNull: false
        },
        message: {
            type: type.TEXT,
            allowNull: false
        },
        value: {
            type: type.INTEGER,
            allowNull: false,
        },
        deposit: {
            type: type.INTEGER,
            allowNull: false
        },
        horaEntrega:{
            type: type.STRING,
            allowNull: false
        }
    })
}