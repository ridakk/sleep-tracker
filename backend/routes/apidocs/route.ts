import fs from 'fs';
import path from 'path';
import { Router } from 'express';
import yaml from 'js-yaml';

import swaggerJSDoc from 'swagger-jsdoc';

import swaggerUi from 'swagger-ui-express';
import { merge } from 'lodash';
import packageJson from '../../package.json';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    // API informations (required)
    title: packageJson.name,
    version: packageJson.version,
    description: packageJson.description,
  },
};

// Options for the swagger docs
const options = {
  // const swaggerDefinitions
  swaggerDefinition,
  // Path to the API docs
  // Note that this path is relative to the current directory = require(which the Node.js is ran, not the application itself.
  apis: ['**/route.ts', '**/enum.ts'],
};

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(options);

// as we have both yaml and jsdoc definitions
// read all yaml definitions and merge it to spec from swagger-jsdoc module
const filenames: string[] = fs.readdirSync(path.resolve(__dirname, '..', 'swagger'));

[
  ...filenames.map((filename) => path.resolve(__dirname, '..', 'swagger', filename)),
  path.resolve(__dirname, '..', 'v1', 'sleeps', 'swagger.yaml'),
  path.resolve(__dirname, '..', 'v1', 'reports', 'swagger.yaml'),
].forEach((filename) => {
  merge(swaggerSpec, yaml.load(fs.readFileSync(filename, 'utf8')));
});

const router = Router();

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
