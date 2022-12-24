import { Estudiante } from "../models/Estudiante.js";
import { Matricula } from "../models/Matricula.js";

export const getEstudiantes = async (req, res) => {
  try {
    const estudiantes = await Estudiante.findAll();
    res.json(estudiantes);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEstudiante = async (req, res) => {
  try {
    const { Nr } = req.params;
    const estudiante = await Estudiante.findOne({
      where: {
        Nr,
      },
    });
    if (!estudiante)
      return res.status(404).json({ message: "ESTUDIANTE NO EXISTE" });

    res.json(estudiante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createEstudiante = async (req, res) => {
  const {
    Nr,
    Tipo,
    PERSONAL_ID,
    Nro_Doc,
    COMPROBANTE,
    F_Nacimiento,
    Padre_Nombres,
    Madre_Nombres,
    Edad,
    Digito_Verificador,
    ES_Id,
    Creado_en,
    Contador,
    Zona,
    Val,
    Apellido_Paterno,
    Apellido_Materno,
    Ruc,
    Fecha_Ingreso,
    Sexo,
    Nombre,
  } = req.body;

  try {
    const newEstudiante = await Estudiante.create({
      Nr,
      Tipo,
      PERSONAL_ID,
      Nro_Doc,
      COMPROBANTE,
      F_Nacimiento,
      Padre_Nombres,
      Madre_Nombres,
      Edad,
      Digito_Verificador,
      ES_Id,
      Creado_en,
      Contador,
      Zona,
      Val,
      Apellido_Paterno,
      Apellido_Materno,
      Ruc,
      Fecha_Ingreso,
      Sexo,
      Nombre,
    });
    res.json(newEstudiante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateEstudiante = async (req, res) => {
  try {
    const { Nr } = req.params;
    const {
      Tipo,
      PERSONAL_ID,
      Nro_Doc,
      COMPROBANTE,
      F_Nacimiento,
      Padre_Nombres,
      Madre_Nombres,
      Edad,
      Digito_Verificador,
      ES_Id,
      Creado_en,
      Contador,
      Zona,
      Val,
      Apellido_Paterno,
      Apellido_Materno,
      Ruc,
      Fecha_Ingreso,
      Sexo,
      Nombre,
    } = req.body;

    const estudiante = await Estudiante.findByPk(Nr);
    estudiante.Tipo = Tipo;
    estudiante.PERSONAL_ID = PERSONAL_ID;
    estudiante.Nro_Doc = Nro_Doc;
    estudiante.COMPROBANTE = COMPROBANTE;
    estudiante.F_Nacimiento = F_Nacimiento;
    estudiante.Padre_Nombres = Padre_Nombres;
    estudiante.Madre_Nombres = Madre_Nombres;
    estudiante.Edad = Edad;
    estudiante.Digito_Verificador = Digito_Verificador;
    estudiante.ES_Id = ES_Id;
    estudiante.Creado_en = Creado_en;
    estudiante.Contador = Contador;
    estudiante.Zona = Zona;
    estudiante.Val = Val;
    estudiante.Apellido_Paterno = Apellido_Paterno;
    estudiante.Apellido_Materno = Apellido_Materno;
    estudiante.Ruc = Ruc;
    estudiante.Fecha_Ingreso = Fecha_Ingreso;
    estudiante.Sexo = Sexo;
    estudiante.Nombre = Nombre;
    await estudiante.save();

    res.json(estudiante);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteEstudiante = async (req, res) => {
  try {
    const { Nr } = req.params;
    await Estudiante.destroy({
      where: {
        Nr,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEstudianteMatriculas = async (req, res) => {
  const { Nr } = req.params;
  const matriculas = await Matricula.findAll({
    where: { ID_ESTUDIANTE: Nr },
  });
  res.json(matriculas);
};
