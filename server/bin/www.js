#!/usr/bin/env node
import winston from '@server/config/winston';
// Importando configuracion de aplicacion
import configKeys from '@server/config/configKeys';
// Importando la clase de conexion
import MongooseODM from '@server/config/odm';

/**
 * Module dependencies.
 */
import Debug from 'debug';
import http from 'http';
import app from '../app';

const debug = Debug('projnotes:server');

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store inn Express.
 */

const port = normalizePort(configKeys.port || '3000');
app.set('port', port);

const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      winston.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      winston.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bindAdr =
    typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  debug(`Listening on  ${bindAdr}`);
}

/**
 * Creando el objeto conexion
 */
const mongooseOdm = new MongooseODM(configKeys.databaseUrl);
/**
 * IIFE
 */
(async () => {
  try {
    const connectionResult = await mongooseOdm.connect();
    if (connectionResult) {
      winston.info('Connection to dabase has successfuly established');
      /**
       * Listen on provided port, on all network interfaces.
       */
      server.listen(port);
      server.on('error', onError);
      server.on('listening', onListening);
    }
  } catch (error) {
    winston.error(`Error when connecting to Database : ${error.message}`);
  }
})();
