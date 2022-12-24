import { Telefonos } from "../models/Telefono.js";

export const getTelefonos = async (req, res) => {
  try {
    const telefonos = await Telefonos.findAll();
    res.json(telefonos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTelefono = async (req, res) => {
  try {
    const {
      Creado_en,
      Contador,
      Fecha_de_Ingreso,
      Fecha_de_Salida,
      Creado_por,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      Estado,
      Telefono,
      Validacion,
      Tipo_de_Telefono,
      Es_Id,
    } = req.body;

    const newTelefono = await Telefonos.create({
      Creado_en,
      Contador,
      Fecha_de_Ingreso,
      Fecha_de_Salida,
      Creado_por,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      Estado,
      Telefono,
      Validacion,
      Tipo_de_Telefono,
      Es_Id,
    });

    res.json(newTelefono);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTelefono = async (req, res) => {
  const { Nr } = req.params;
  try {
    const telefono = await Telefonos.findOne({
      where: { Nr },
    });
    res.json(telefono);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTelefono = async (req, res) => {
  try {
    const { Nr } = req.params;
    const telefono = await Telefonos.findOne({
      where: { Nr },
    });
    telefono.set(req.body);
    await telefono.save();
    return res.json(telefono);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTelefono = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Telefonos.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
