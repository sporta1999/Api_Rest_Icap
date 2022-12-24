import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Concepto = sequelize.define(
  "Conceptos_pagar",
  {
    Nr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    CP_Id: {
      type: DataTypes.STRING,
    },
    PEDIR: {
      type: DataTypes.STRING,
    },
    Comision_Vendedor: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Importe_de_Pago: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Imagen: {
      type: DataTypes.STRING,
    },
    Tipo_de_Pago: {
      type: DataTypes.STRING,
    },
    uno: {
      type: DataTypes.INTEGER,
    },
    dos: {
      type: DataTypes.INTEGER,
    },
    Comision: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Nro_de_Operacion: {
      type: DataTypes.STRING,
    },
    Observaciones: {
      type: DataTypes.STRING,
    },
    ACT: {
      type: DataTypes.STRING,
    },
    Orden: {
      type: DataTypes.INTEGER,
    },
    JUAN2: {
      type: DataTypes.STRING,
    },
    F_Inicial_de_Cobro: {
      type: DataTypes.DATE,
    },
    Ultima_modificacion_por: {
      type: DataTypes.STRING,
    },
    ATAJO: {
      type: DataTypes.STRING,
    },
    Nro_Mod: {
      type: DataTypes.INTEGER,
    },
    F_programado_la_Entrega: {
      type: DataTypes.DATE,
    },
    Nombre_Corto: {
      type: DataTypes.STRING,
    },
    Area: {
      type: DataTypes.STRING,
    },
    Estado: {
      type: DataTypes.STRING,
    },
    F_de_Aplicacion: {
      type: DataTypes.DATE,
    },
    P_Estud: {
      type: DataTypes.DECIMAL(11, 2),
    },
    P_Coord: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Cobrado: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Comision2: {
      type: DataTypes.DECIMAL(11, 2),
    },
    Estado_Entrega: {
      type: DataTypes.STRING,
    },
    F_Final_de_Entrega: {
      type: DataTypes.DATE,
    },
    Estado_Cobranza: {
      type: DataTypes.STRING,
    },
    F_Final_de_Cobro: {
      type: DataTypes.DATE,
    },
    Estado2: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);
