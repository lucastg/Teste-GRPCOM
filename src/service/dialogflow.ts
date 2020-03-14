import { Format } from "../model/payloadDialogflow";

export async function responseProgramacaoDialogflow(programacao: any, nameEvent: string) {
    console.log(programacao);
    return await new Format(nameEvent, {
        title: programacao[0].title,
        inicio: programacao[0].inicio,
        final: programacao[0].final
    }).generateObject();
}