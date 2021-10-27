/* eslint-disable no-unused-vars *//* eslint-disable prettier/prettier */
import winston, { ExitOnError, format, transports } from 'winston';
//
import appRoot from 'app-root-path';
// componentes para el formato personalizado
const { combine, timestamp, printf, uncolorize, json, colorize } = format;
// perfil de color para el log
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'green',
};
// agregando al perfil de winston
winston.addColors(colors);

// fromato de consola
const myFormat = combine(
  colorize({ all: true }),
  timestamp(),
  printf((info) => `${info.timestamp} ${info.level} : ${info.messages}`),
);

// formato para la salida de los archivos de log
const myFileFormat = combine(uncolorize(), timestamp(), json());

// creando objetos de configuracion
const options = {
  infoFile: {
    level: 'info',
    filename: `${appRoot}/server/logs/infos.log`,
    handleException: true,
    maxsize: 5242880, // 5mb
    maxFiles: 5,
    format: myFileFormat,
  },
  warnFile: {
    level: 'warn',
    filename: `${appRoot}/server/logs/warn.log`,
    handleException: true,
    maxsize: 5242880, // 5mb
    maxFiles: 5,
    format: myFileFormat,
  },
  errorFile: {
    level: 'error',
    filename: `${appRoot}/server/logs/errors.log`,
    handleException: true,
    maxsize: 5242880, // 5mb
    maxFiles: 5,
    format: myFileFormat,
  },
  console: {
    level: 'debug',
    handleException: true,
    format: myFormat,
  },
};
// creando la instancia del logger

const logger = winston.createLogger({
  transports: [
    new winston.transports.File(options.infoFile),
    new winston.transports.File(options.warnFile),
    new winston.transports.File(options.errorFile),
    new winston.transports.Console(options.console),
  ],
  ExitOnError: false, // no finaliza en ecepciones manejadas
});

//
logger.stream = {
  write(message) {
    logger.info(message);
  },
};

export default logger;
