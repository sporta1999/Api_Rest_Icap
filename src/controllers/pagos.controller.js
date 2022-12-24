import { Pago } from "../models/Pago.js";

export const getPagos = async (req, res) => {
  try {
    const pagos = await Pago.findAll();
    res.json(pagos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPago = async (req, res) => {
  try {
    const {
      Ultima_modificacion_por,
      Periodo,
      Fecha_de_Creacion,
      COMENTARIO,
      OBSERVACIONES,
      Tipo_de_Pago,
      Item,
      Nombre_Completo,
      Nro_deOperacion,
      Estado,
      Forma_de_Pago,
      F_de_Pago,
      Importe,
      Importe_Por_Aplicar,
      Comision,
      Importe_Comision,
      Zona,
      X,
      Cobrador,
      Asignado_Actualmente_A,
      Aplicador,
      Nombre_de_Oficina,
      Tipo_Coordinador,
    } = req.body;

    const newPago = await Pago.create({
      Ultima_modificacion_por,
      Periodo,
      Fecha_de_Creacion,
      COMENTARIO,
      OBSERVACIONES,
      Tipo_de_Pago,
      Item,
      Nombre_Completo,
      Nro_deOperacion,
      Estado,
      Forma_de_Pago,
      F_de_Pago,
      Importe,
      Importe_Por_Aplicar,
      Comision,
      Importe_Comision,
      Zona,
      X,
      Cobrador,
      Asignado_Actualmente_A,
      Aplicador,
      Nombre_de_Oficina,
      Tipo_Coordinador,
    });

    res.json(newPago);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPago = async (req, res) => {
  const { Nr } = req.params;
  try {
    const pago = await Pago.findOne({
      where: { Nr },
    });
    res.json(pago);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePago = async (req, res) => {
  try {
    const { Nr } = req.params;
    const pago = await Pago.findOne({
      where: { Nr },
    });
    pago.set(req.body);
    await pago.save();
    return res.json(pago);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePago = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Pago.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
