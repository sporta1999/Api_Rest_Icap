import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Ocupaciones = sequelize.define(
  "Ocupaciones",
  {
    Nr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Contador: {
      type: DataTypes.INTEGER,
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
    Creado_en: {
      type: DataTypes.DATE,
    },
    Ultima_modificacion_el_dia: {
      type: DataTypes.DATE,
    },
    O_Id: {
      type: DataTypes.STRING,
    },
    Nro_de_Documento: {
      type: DataTypes.STRING,
    },
    Nombre_Completo: {
      type: DataTypes.STRING,
    },
    Zona: {
      type: DataTypes.STRING,
    },
    Profesion_Ocupacion: {
      type: DataTypes.STRING,
    },
    Fecha_de_Ingreso: {
      type: DataTypes.DATE,
    },
    Estado: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
