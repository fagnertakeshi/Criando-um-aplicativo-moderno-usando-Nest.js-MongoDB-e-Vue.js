import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    nome: String,
    idade: String,
    github_user:String,
    cep: String,
    rua: String,
    numero: Number,
    complemento: String,
    bairro: String,
    cidade: String,
    estado: String,
    created_at: { type: Date, default: Date.now }
})