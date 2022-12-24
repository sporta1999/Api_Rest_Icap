import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Telefonos = sequelize.define(
  "Telefono",
  {
    Nr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Creado_en: {
      type: DataTypes.DATE,
    },
    Contador: {
      type: DataTypes.INTEGER,
    },
    Fecha_de_Ingreso: {
      type: DataTypes.DATE,
    },
    Fecha_de_Salida: {
      type: DataTypes.DATE,
    },
    Creado_por: {
      type: DataTypes.STRING,
    },
    Ultima_modificacion_por: {
      type: DataTypes.STRING,
    },
    Ultima_modificacion_el_dia: {
      type: DataTypes.DATE,
    },
    Estado: {
      type: DataTypes.STRING,
    },
    Telefono: {
      type: DataTypes.STRING,
    },
    Validacion: {
      type: DataTypes.STRING,
    },
    Tipo_de_Telefono: {
      type: DataTypes.STRING,
    },
    Es_Id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
