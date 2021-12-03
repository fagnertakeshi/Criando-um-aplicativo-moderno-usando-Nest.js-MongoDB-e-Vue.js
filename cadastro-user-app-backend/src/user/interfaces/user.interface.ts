import { Document } from 'mongoose';

export interface User extends Document {
    readonly nome: string,
    readonly idade: string,
    readonly github_user:string,
    readonly cep: string,
    readonly rua: string,
    readonly numero: number,
    readonly complemento: string,
    readonly bairro: string,
    readonly cidade: string,
    readonly estado: string,
    readonly created_at: Date;

}