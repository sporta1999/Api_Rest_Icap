import { Ocupaciones } from "../models/Ocupacion.js";

export const getOcupaciones = async (req, res) => {
  try {
    const ocupaciones = await Ocupaciones.findAll();
    res.json(ocupaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createOcupacion = async (req, res) => {
  try {
    const {
      Contador,
      Fecha_de_Salida,
      Creado_por,
      Ultima_modificacion_por,
      Creado_en,
      Ultima_modificacion_el_dia,
      O_Id,
      Nro_de_Documento,
      Nombre_Completo,
      Zona,
      Profesion_Ocupacion,
      Fecha_de_Ingreso,
      Estado,
    } = req.body;

    const newOcupacion = await Ocupaciones.create({
      Contador,
      Fecha_de_Salida,
      Creado_por,
      Ultima_modificacion_por,
      Creado_en,
      Ultima_modificacion_el_dia,
      O_Id,
      Nro_de_Documento,
      Nombre_Completo,
      Zona,
      Profesion_Ocupacion,
      Fecha_de_Ingreso,
      Estado,
    });

    res.json(newOcupacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getOcupacion = async (req, res) => {
  const { Nr } = req.params;
  try {
    const ocupacion = await Ocupaciones.findOne({
      where: { Nr },
    });
    res.json(ocupacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateOcupacion = async (req, res) => {
  try {
    const { Nr } = req.params;
    const ocupacion = await Ocupaciones.findOne({
      where: { Nr },
    });
    ocupacion.set(req.body);
    await ocupacion.save();
    return res.json(ocupacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteOcupacion = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Ocupaciones.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
