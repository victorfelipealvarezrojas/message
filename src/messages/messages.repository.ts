import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

/**
   * para seguir el principio de la inversion de control tengo que incluir esta clase
   * al DI Container para que este administre sus dependencias

   * @Injectable marcar esta clase(forma automatica) para el registro dentro del contenedor DI(tambien conocido como control de inversion de control)

   * para que esta clase funcione como dependencia la tengo que incorporar en @modules (messages.module) en la seccion de providers
*/
@Injectable()
export class MessageRepository {

    async findOne(id: string) {
        const contens = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contens);
        return messages[id];
    }

    async findAll() {
        const contens = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contens);
        return messages;
    }

    async create(content: string) {
        const contens = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contens);

        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };

        await writeFile('messages.json', JSON.stringify(messages));

    }


}