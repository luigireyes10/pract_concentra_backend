import { DataTypes } from 'sequelize';
import db from '../db/connection';

const tipopermiso = db.define('tipopermiso', {
    ID_TIPO_PERMISO: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
    TIPO_PERMISO: {
        type: DataTypes.STRING
    },
    DESC_TIPO_PERMISO: {
        type: DataTypes.STRING
    },
    ESTADO: {
        type: DataTypes.STRING
    },
    ID_PERMISO: {
        type: DataTypes.INTEGER
    },
    FECHA_INSERCION: {
        type: DataTypes.DATE
    },
    USUARIO_INSERCION: {
        type: DataTypes.STRING
    },
    FECHA_ACTUALIZACION: {
        type: DataTypes.DATE
    },
    USUARIO_ACTUALIZACION: {
        type: DataTypes.STRING
    },
}, {
    freezeTableName: true,
    tableName: "tipopermiso",
    timestamps: false
});


export default tipopermiso;