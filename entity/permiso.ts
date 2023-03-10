import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Permiso = db.define('permiso', {
    ID_PERMISO: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
    },
    DESC_PERMISO: {
        type: DataTypes.STRING
    },
    ESTADO: {
        type: DataTypes.STRING
    },
    NOTA: {
        type: DataTypes.STRING
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
});


export default Permiso;