import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Pago = sequelize.define(
  "Pagos",
  {
    Nr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Ultima_modificacion_por: {
      type: DataTypes.STRING,
    },
    Periodo: {
      type: DataTypes.STRING,
    },
    Fecha_de_Creacion: {
      type: DataTypes.DATE,
    },
    COMENTARIO: {
      type: DataTypes.STRING,
    },
    OBSERVACIONES: {
      type: DataTypes.STRING,
    },
    Tipo_de_Pago: {
      type: DataTypes.STRING,
    },
    Item: {
      type: DataTypes.STRING,
    },
    Nombre_Completo: {
      type: DataTypes.STRING,
    },
    Nro_deOperacion: {
      type: DataTypes.STRING,
    },
    Estado: {
      type: DataTypes.STRING,
    },
    Forma_de_Pago: {
      type: DataTypes.STRING,
    },
    F_de_Pago: {
      type: DataTypes.DATE,
    },
    Importe: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Importe_Por_Aplicar: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Comision: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Importe_Comision: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Zona: {
      type: DataTypes.STRING,
    },
    X: {
      type: DataTypes.STRING,
    },
    Cobrador: {
      type: DataTypes.STRING,
    },
    Asignado_Actualmente_A: {
      type: DataTypes.STRING,
    },
    Aplicador: {
      type: DataTypes.STRING,
    },
    Nombre_de_Oficina: {
      type: DataTypes.STRING,
    },
    Tipo_Coordinador: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
