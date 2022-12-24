import { Concepto } from "../models/Concepto.js";

export const getConceptos = async (req, res) => {
  try {
    const conceptos = await Concepto.findAll();
    res.json(conceptos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createConcepto = async (req, res) => {
  try {
    const {
      CP_Id,
      PEDIR,
      Comision_Vendedor,
      Importe_de_Pago,
      Imagen,
      Tipo_de_Pago,
      uno,
      dos,
      Comision,
      Nro_de_Operacion,
      Observaciones,
      ACT,
      Orden,
      JUAN2,
      F_Inicial_de_Cobro,
      Ultima_modificacion_por,
      ATAJO,
      Nro_Mod,
      F_programado_la_Entrega,
      Nombre_Corto,
      Area,
      Estado,
      F_de_Aplicacion,
      P_Estud,
      P_Coord,
      Cobrado,
      Comision2,
      Estado_Entrega,
      F_Final_de_Entrega,
      Estado_Cobranza,
      F_Final_de_Cobro,
      Estado2,
    } = req.body;

    const newConcepto = await Concepto.create({
      CP_Id,
      PEDIR,
      Comision_Vendedor,
      Importe_de_Pago,
      Imagen,
      Tipo_de_Pago,
      uno,
      dos,
      Comision,
      Nro_de_Operacion,
      Observaciones,
      ACT,
      Orden,
      JUAN2,
      F_Inicial_de_Cobro,
      Ultima_modificacion_por,
      ATAJO,
      Nro_Mod,
      F_programado_la_Entrega,
      Nombre_Corto,
      Area,
      Estado,
      F_de_Aplicacion,
      P_Estud,
      P_Coord,
      Cobrado,
      Comision2,
      Estado_Entrega,
      F_Final_de_Entrega,
      Estado_Cobranza,
      F_Final_de_Cobro,
      Estado2,
    });

    res.json(newConcepto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getConcepto = async (req, res) => {
  const { Nr } = req.params;
  try {
    const concepto = await Concepto.findOne({
      where: { Nr },
    });
    res.json(concepto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateConcepto = async (req, res) => {
  try {
    const { Nr } = req.params;
    const concepto = await Concepto.findOne({
      where: { Nr },
    });
    concepto.set(req.body);
    await concepto.save();
    return res.json(concepto);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteConcepto = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Concepto.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
