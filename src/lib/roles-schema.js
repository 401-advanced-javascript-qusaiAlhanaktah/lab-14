

const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
  role: {type: String, required: true, default:'user', enum: ['admin','editor','user']},
  capabilities: {type: Array, required:true, enum: ['read','create','update','delete']},
});

module.exports = mongoose.model('roles', rolesSchema);