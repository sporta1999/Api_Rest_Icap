import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { Matricula } from "./Matricula.js";

export const Estudiante = sequelize.define(
  "Estudiantes",
  {
    Nr: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Tipo: {
      type: DataTypes.STRING,
    },
    PERSONAL_ID: {
      type: DataTypes.STRING,
    },
    Nro_Doc: {
      type: DataTypes.STRING,
    },
    COMPROBANTE: {
      type: DataTypes.STRING,
    },
    F_Nacimiento: {
      type: DataTypes.DATE,
    },
    Padre_Nombres: {
      type: DataTypes.STRING,
    },
    Madre_Nombres: {
      type: DataTypes.STRING,
    },
    Edad: {
      type: DataTypes.INTEGER,
    },
    Digito_Verificador: {
      type: DataTypes.INTEGER,
    },
    ES_Id: {
      type: DataTypes.STRING,
    },
    Creado_en: {
      type: DataTypes.DATE,
    },
    Contador: {
      type: DataTypes.INTEGER,
    },
    Zona: {
      type: DataTypes.STRING,
    },
    Val: {
      type: DataTypes.STRING,
    },
    Apellido_Paterno: {
      type: DataTypes.STRING,
    },
    Apellido_Materno: {
      type: DataTypes.STRING,
    },
    Ruc: {
      type: DataTypes.STRING,
    },
    Fecha_Ingreso: {
      type: DataTypes.DATE,
    },
    Sexo: {
      type: DataTypes.STRING,
    },
    Nombre: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

Estudiante.hasMany(Matricula, {
  foreignKey: "ID_ESTUDIANTE",
  sourceKey: "Nr",
});

Matricula.belongsTo(Estudiante, {
  foreignKey: "ID_ESTUDIANTE",
  targetId: "Nr",
});
