// Importando Mongoose
import * as mongoose from 'mongoose';
// 2. Destructuracion para mantener esquema
import { Schema } from 'mongoose';

// 3. Creando Schema
const ProjectSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('project', ProjectSchema);