import { Injectable } from "@nestjs/common";
import { MessageRepository } from "./messages.repository"


/**
   * para seguir el principio de la inversion de control tengo que incluir esta clase
   * al DI Container para que este administre sus dependencias

   * @Injectable marca la clase que la implementa(forma automatica) para el registro dentro del contenedor DI(tambien conocido como control de inversion de control)

   * para que esta clase funcione como dependencia la tengo que incorporar en @modules (messages.module) en la seccion de providers

*/
@Injectable()
export class MessageService {

    //al definirlo como public queda asignado de forma automatica como propiedad de la clase
    constructor(public messageRepository: MessageRepository) { }

    findOne(id: string) {
        return this.messageRepository.findOne(id);
    }

    findAll() {
        return this.messageRepository.findAll();
    }

    create(content: string) {
        return this.messageRepository.create(content);
    }
}
