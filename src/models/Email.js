import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Emails = sequelize.define("Email", {
    Nr: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
	Contador: {
        type: DataTypes.INTEGER
    },
	Creado_por: {
        type: DataTypes.STRING
    },
	Creado_en: {
        type: DataTypes.DATE
    },
	ultima_modificacion_por: {
        type: DataTypes.STRING
    },
	EM_Id : {
        type: DataTypes.STRING
    },
	Ultima_modificacion_el_dia: {
        type: DataTypes.DATE
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
	Motivo: {
        type: DataTypes.STRING
    },
	Email: {
        type: DataTypes.STRING
    },
	Validacion: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false
});