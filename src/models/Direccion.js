import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Direcciones = sequelize.define(
  "Direcciones",
  {
    Nr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Tipo_de_Direccion: {
      type: DataTypes.STRING,
    },
    Contador: {
      type: DataTypes.INTEGER,
    },
    Creado_por: {
      type: DataTypes.STRING,
    },
    Motivo_de_Salida: {
      type: DataTypes.STRING,
    },
    Fecha_de_Salida: {
      type: DataTypes.DATE,
    },
    Ultima_modificacion_por: {
      type: DataTypes.STRING,
    },
    Ultima_modificacion_el_dia: {
      type: DataTypes.DATE,
    },
    Creado_en: {
      type: DataTypes.DATE,
    },
    DR_Id: {
      type: DataTypes.INTEGER,
    },
    Direccion_Gps: {
      type: DataTypes.STRING,
    },
    Direccion_Texto: {
      type: DataTypes.STRING,
    },
    length_Direccion_Texto: {
      type: DataTypes.INTEGER,
    },
    Distrito: {
      type: DataTypes.STRING,
    },
    Referencia_del_Domicilo: {
      type: DataTypes.STRING,
    },
    Interior: {
      type: DataTypes.STRING,
    },
    Validacion: {
      type: DataTypes.STRING,
    },
    Estado: {
      type: DataTypes.STRING,
    },
    Nr_2: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
