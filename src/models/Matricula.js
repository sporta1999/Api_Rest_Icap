import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const Matricula = sequelize.define('Matriculas', {
    Nr: {
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement: true
    },
	Creado_en: {
        type: DataTypes.DATE
    },
	Estado: {
        type: DataTypes.STRING
    },	
	Status_Ventas: {
        type: DataTypes.STRING
    },
	Modalidad: {
        type:DataTypes.STRING
    },		
	MA_Id: {
        type:DataTypes.STRING
    },	
	C_Codigo: {
        type:DataTypes.INTEGER
    },	
	Traslado: {
        type:DataTypes.STRING
    },	
	Creado_por: {
        type:DataTypes.STRING
    },	
	PROGRAMA_ID: {
        type:DataTypes.INTEGER
    },	
	Verif: {
        type:DataTypes.STRING
    },	
	Ultima_modificacion_por: {
        type:DataTypes.STRING
    },	
	Ultima_modificacion_el_dia: {
        type:DataTypes.DATE
    },
	CODIGO_ICAP: {
        type:DataTypes.STRING
    },	
	UME: {
        type:DataTypes.STRING
    },	
	Nombre_Completo: {
        type:DataTypes.STRING
    },	
	Tipo_de_Programa: {
        type:DataTypes.STRING
    },	
	Numero_de_Orden: {
        type:DataTypes.INTEGER
    },	
	Ult_Mod_Pagado: {
        type:DataTypes.STRING
    },	
	Ult_Mod_Pagado_mas_dos_igual_Numero_de_orden: {
        type:DataTypes.STRING
    },	
	Programa: {
        type:DataTypes.STRING
    },	
	E_Entrega_Sgte_Mod: {
        type:DataTypes.STRING
    },	
	PROGRAMA_CERTIFICADO: {
        type:DataTypes.STRING
    },	
	Nr_2: {
        type: DataTypes.INTEGER
    },
	Coordinador: {
        type:DataTypes.STRING
    },	
	Vendedor: {
        type: DataTypes.STRING
    },
	Asignado: {
        type: DataTypes.STRING
    },
	Pagos: {
        type: DataTypes.DECIMAL(11,2)
    },	
	Sgte_Modulo: {
        type: DataTypes.INTEGER
    },
	FSM: {
        type:DataTypes.DATE
    },
	VAL_TARJ: {
        type: DataTypes.STRING
    },
	Nro_de_Documento: {
        type: DataTypes.STRING
    },
	F_Matri: {
        type:DataTypes.DATE
    },
	F_Primer_Mod: {
        type:DataTypes.DATE
    },
	UFE: {
        type:DataTypes.DATE
    },
	Ult_Est_Cobranza: {
        type: DataTypes.STRING
    },
	Zona: {
        type: DataTypes.STRING
    },
	Nombre_de_Oficina: {
        type: DataTypes.STRING
    },
	Convenio: {
        type: DataTypes.STRING
    },
}, {
    timestamps: false
});