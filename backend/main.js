import express from "express";
import helmet from "helmet";
import xss from "xss-clean";
import mongoSanitize from "express-mongo-sanitize";
import compression from "compression";
import mongoose from 'mongoose';
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
  aboutGalleryRouter
} from "./src/routes/index.js";
import httpStatus from "http-status";

const app = express();
app.disable('x-powered-by');
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(xss());
app.use(mongoSanitize());
app.use(compression());
app.use(cors());
app.options("*", cors());

//testing

// Define a route for '/'
app.get('/', (req, res) => {
  res.send('Hello, world!, this is staruth website Api');
});
app.get('/test-db', async (req, res) => {
  try {
    const result = await mongoose.connection.db.collection('projects').findOne({});
    res.json({ success: true, result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});
app.use("/benefits", benefitRouter);
app.use("/company-skills", companySkillsRouter);
app.use("/contacts", contactRouter);
app.use("/heroes", heroRouter);
app.use("/projects", projectRouter);
app.use("/services", serviceRouter);
app.use("/teams", teamRouter);
app.use("/testimonials", testimonialRouter);
app.use("/aboutGallery", aboutGalleryRouter);

app.use((req, res, next) => {
  next(new Error(httpStatus.NOT_FOUND, 'Not found'));
});

export default app;
