import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Centro_labores_cargo = sequelize.define('Centro_labores_cargos', {
    Nr: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
	Contador: {
        type: DataTypes.INTEGER
    },
	Area: {
        type: DataTypes.STRING
    },
	Creado_por: {
        type: DataTypes.STRING
    },
	Creado_en: {
        type: DataTypes.DATE
    },
	Ultima_modificacion_por: {
        type: DataTypes.STRING
    },
	Ultima_modificacion_el_dia: {
        type: DataTypes.DATE
    },
	CLC_Id: {
        type: DataTypes.STRING
    },
	Fecha_de_Ingreso: {
        type: DataTypes.DATE
    },
	Estado: {
        type: DataTypes.STRING
    },
	Fecha_de_Salida: {
        type: DataTypes.DATE
    },
	Motivo_de_Salida: {
        type: DataTypes.STRING
    },
	Centro_de_Labores: {
        type: DataTypes.STRING
    },
	Es_id: {
        type: DataTypes.INTEGER
    },
	ZONA: {
        type: DataTypes.STRING
    },
	Cargo: {
        type: DataTypes.STRING
    },
},{
    timestamps:false
});