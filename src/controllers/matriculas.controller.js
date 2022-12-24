import { Matricula } from "../models/Matricula.js";

export const getMatriculas = async (req, res) => {
  try {
    const matriculas = await Matricula.findAll();
    res.json(matriculas);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createMatricula = async (req, res) => {
  try {
    const {
      Creado_en,
      Estado,
      Status_Ventas,
      Modalidad,
      MA_Id,
      C_Codigo,
      Traslado,
      Creado_por,
      PROGRAMA_ID,
      Verif,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      CODIGO_ICAP,
      UME,
      Nombre_Completo,
      Tipo_de_Programa,
      Numero_de_Orden,
      Ult_Mod_Pagado,
      Ult_Mod_Pagado_mas_dos_igual_Numero_de_orden,
      Programa,
      E_Entrega_Sgte_Mod,
      PROGRAMA_CERTIFICADO,
      Nr_2,
      Coordinador,
      Vendedor,
      Asignado,
      Pagos,
      Sgte_Modulo,
      FSM,
      VAL_TARJ,
      Nro_de_Documento,
      F_Matri,
      F_Primer_Mod,
      UFE,
      Ult_Est_Cobranza,
      Zona,
      Nombre_de_Oficina,
      Convenio,
      ID_ESTUDIANTE,
    } = req.body;

    const newMatricula = await Matricula.create({
      Creado_en,
      Estado,
      Status_Ventas,
      Modalidad,
      MA_Id,
      C_Codigo,
      Traslado,
      Creado_por,
      PROGRAMA_ID,
      Verif,
      Ultima_modificacion_por,
      Ultima_modificacion_el_dia,
      CODIGO_ICAP,
      UME,
      Nombre_Completo,
      Tipo_de_Programa,
      Numero_de_Orden,
      Ult_Mod_Pagado,
      Ult_Mod_Pagado_mas_dos_igual_Numero_de_orden,
      Programa,
      E_Entrega_Sgte_Mod,
      PROGRAMA_CERTIFICADO,
      Nr_2,
      Coordinador,
      Vendedor,
      Asignado,
      Pagos,
      Sgte_Modulo,
      FSM,
      VAL_TARJ,
      Nro_de_Documento,
      F_Matri,
      F_Primer_Mod,
      UFE,
      Ult_Est_Cobranza,
      Zona,
      Nombre_de_Oficina,
      Convenio,
      ID_ESTUDIANTE,
    });

    res.json(newMatricula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getMatricula = async (req, res) => {
  const { Nr } = req.params;
  try {
    const matricula = await Matricula.findOne({
      where: { Nr },
      // attributes:['Zona'], buscamos por id (Nr) o campo
    });
    res.json(matricula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateMatricula = async (req, res) => {
  try {
    const { Nr } = req.params;
    const matricula = await Matricula.findOne({
      where: { Nr },
    });
    matricula.set(req.body);
    await matricula.save();
    return res.json(matricula);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteMatricula = async (req, res) => {
  const { Nr } = req.params;
  try {
    const result = await Matricula.destroy({
      where: { Nr },
    });
    console.log(result);
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
