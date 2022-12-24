import { Centro_labores_cargo } from "../models/Centro_labores_cargo.js";

export const getCentros = async (req, res) => {
  try {
    const centro_labores_cargos = await Centro_labores_cargo.findAll();
    res.json(centro_labores_cargos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCentro = async (req, res) => {
  try {
    const {
      Contador,
      Area,
      Creado_por,
      Creado_en,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      CLC_Id,
      Fecha_de_Ingreso,
      Estado,
      Fecha_de_Salida,
      Motivo_de_Salida,
      Centro_de_Labores,
      Es_id,
      ZONA,
      Cargo,
    } = req.body;

    const newcentro_labores_cargo = await Centro_labores_cargo.create({
      Contador,
      Area,
      Creado_por,
      Creado_en,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      CLC_Id,
      Fecha_de_Ingreso,
      Estado,
      Fecha_de_Salida,
      Motivo_de_Salida,
      Centro_de_Labores,
      Es_id,
      ZONA,
      Cargo,
    });

    res.json(newcentro_labores_cargo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCentro = async (req, res) => {
  const { Nr } = req.params;
  try {
    const centro_labores_cargo = await Centro_labores_cargo.findOne({
      where: { Nr },
    });

    res.json(centro_labores_cargo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCentro = async (req, res) => {
  try {
    const { Nr } = req.params;
    const centro_labores_cargo = await Centro_labores_cargo.findOne({
      where: { Nr },
    });
    centro_labores_cargo.set(req.body);
    await centro_labores_cargo.save();
    return res.json(centro_labores_cargo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCentro = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Centro_labores_cargo.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
