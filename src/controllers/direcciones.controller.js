import { Direcciones } from "../models/Direccion.js";

export const getDirecciones = async (req, res) => {
  try {
    const direcciones = await Direcciones.findAll();
    res.json(direcciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createDireccion = async (req, res) => {
  try {
    const {
      Tipo_de_Direccion,
      Contador,
      Creado_por,
      Motivo_de_Salida,
      Fecha_de_Salida,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      Creado_en,
      DR_Id,
      Direccion_Gps,
      Direccion_Texto,
      length_Direccion_Texto,
      Distrito,
      Referencia_del_Domicilo,
      Interior,
      Validacion,
      Estado,
      Nr_2,
    } = req.body;

    const newDireccion = await Direcciones.create({
      Tipo_de_Direccion,
      Contador,
      Creado_por,
      Motivo_de_Salida,
      Fecha_de_Salida,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      Creado_en,
      DR_Id,
      Direccion_Gps,
      Direccion_Texto,
      length_Direccion_Texto,
      Distrito,
      Referencia_del_Domicilo,
      Interior,
      Validacion,
      Estado,
      Nr_2,
    });

    res.json(newDireccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDireccion = async (req, res) => {
  const { Nr } = req.params;
  try {
    const direccion = await Direcciones.findOne({
      where: { Nr },
    });
    res.json(direccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDireccion = async (req, res) => {
  try {
    const { Nr } = req.params;
    const direccion = await Direcciones.findOne({
      where: { Nr },
    });
    direccion.set(req.body);
    await direccion.save();
    return res.json(direccion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteDireccion = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Direcciones.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
