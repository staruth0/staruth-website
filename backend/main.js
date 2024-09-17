import express from "express";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import cors from "cors";

import {
  benefitRouter,
  companySkillsRouter,
  contactRouter,
  heroRouter,
  projectRouter,
  serviceRouter,
  teamRouter,
  testimonialRouter,
} from "./src/routes/index.js";

const app = express();

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(mongoSanitize());
app.use(compression());
app.use(cors());
app.options("*", cors());

//testing

app.use("/benefits", benefitRouter);
app.use("/company-skills", companySkillsRouter);
app.use("/contacts", contactRouter);
app.use("/heroes", heroRouter);
app.use("/projects", projectRouter);
app.use("/services", serviceRouter);
app.use("/teams", teamRouter);
app.use("/testimonials", testimonialRouter);

export default app;
