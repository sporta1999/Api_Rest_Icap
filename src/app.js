import express from "express";
import cors from "cors";
import estudiantesRoutes from "./routes/estudiantes.routes.js";
import matriculasRoutes from "./routes/matriculas.routes.js";
import centro_labores_cargosRoutes from "./routes/centro_labores_cargos.routes.js";
import emailsRoutes from "./routes/emails.routes.js";
import direccionesRoutes from "./routes/direcciones.routes.js";
import ocupacionesRoutes from "./routes/ocupaciones.routes.js";
import telefonosRoutes from "./routes/telefono.routes.js";
import conceptosRoutes from "./routes/conceptos.routes.js";
import pagosRoutes from "./routes/pagos.routes.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

app.use(estudiantesRoutes);
app.use(matriculasRoutes);
app.use(centro_labores_cargosRoutes);
app.use(emailsRoutes);
app.use(direccionesRoutes);
app.use(ocupacionesRoutes);
app.use(telefonosRoutes);
app.use(conceptosRoutes);
app.use(pagosRoutes);

export default app;
