import { UserInsertDTO } from "../Model/User";
import connection from "./BaseDataBase";


export class UserData{

    private static TABLE_NAME = "usuario_cadastro"

    async insertUser(user: UserInsertDTO): Promise<string> {
        try {
            
            const {id, nome, email, nascimento, telefone} = user

            await connection().insert({
                id,
                nome,
                email,
                nascimento,
                telefone
            }).into(UserData.TABLE_NAME)

            return "Cadastro realizado com sucesso"
        } catch (error: any) {
            throw new Error(error.message)
        }

    }

    async allUser(){
        try {
            const result = await connection().select("*").from(UserData.TABLE_NAME)
            
            return result

        } catch (error: any) {
            throw new Error(error.message)
        }
    }
}