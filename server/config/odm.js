// Importando la biblioteca ODM
import mongoose  from 'mongoose';
// Importando scrip para log
import winston from 'winston';

class MongooseODM {
  //CONSTRUCTOR DE LA CLASE
  constructor(url) {
    this.url = url;
  }

  // Metedo de conexion
  async connect() {
    //SUSTITUYENDO EL SISTEMA DE PROMESAS
    //DE MONGOOSE POR EL DE JAVASCRIPT
    mongoose.Promise = global.Promise;
    winston.info(`Conectado con la base de datos en: ${this.url}`);
    try {
      await mongoose.connect(this.url);
      return true;
    } catch (error) {
      winston.error(`Error al conectarse a la base de datos: ${error.message}`);
      //Se retorna false en caso de que no se realice  una conexion exitosa
      return false;
    }
  }
}



export default MongooseODM;