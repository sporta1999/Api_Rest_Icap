import { Emails } from "../models/Email.js";

export const getEmails = async (req, res) => {
  try {
    const emails = await Emails.findAll();
    res.json(emails);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEmail = async (req, res) => {
  try {
    const {
      Contador,
      Creado_por,
      Creado_en,
      ultima_modificacion_por,
      EM_Id,
      Ultima_modificacion_el_dia,
      Fecha_de_Ingreso,
      Estado,
      Fecha_de_Salida,
      Motivo,
      Email,
      Validacion,
    } = req.body;

    const newEmail = await Emails.create({
      Contador,
      Creado_por,
      Creado_en,
      ultima_modificacion_por,
      EM_Id,
      Ultima_modificacion_el_dia,
      Fecha_de_Ingreso,
      Estado,
      Fecha_de_Salida,
      Motivo,
      Email,
      Validacion,
    });

    res.json(newEmail);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEmail = async (req, res) => {
  const { Nr } = req.params;
  try {
    const email = await Emails.findOne({
      where: { Nr },
    });
    res.json(email);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEmail = async (req, res) => {
  try {
    const { Nr } = req.params;
    const email = await Emails.findOne({
      where: { Nr },
    });
    email.set(req.body);
    await email.save();
    return res.json(email);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEmail = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Emails.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
