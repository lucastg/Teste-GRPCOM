import express from "express";
import { route } from "../service/alterRoute";
import { getProgrmas } from "../service/globo";
import { responseProgramacaoDialogflow } from "../service/dialogflow";

export async function webhook(req: express.Request) {
    if (req.body.queryResult && req.body.queryResult.action) {
        const f = await route(req.body.queryResult.action);
        if (!!f) return await f.action(req);
    }
}

export async function getSla(req: any) {
    console.log(req.body);
    const horaCliente = parseInt(req.body.queryResult.parameters.time.substring(11, 19));
    console.log(horaCliente);
    const programas = await getProgrmas(req.body.queryResult.parameters.date);
    let counts: [] = programas.map((res: any) => {
        return parseInt(res.human_start_time.substring(0, 8))
    });
    console.log(counts);
    var closest = counts.reduce(function (prev, curr) {
        return (Math.abs(curr - horaCliente) < Math.abs(prev - horaCliente) ? curr : prev);
    });
    console.log("closest: ", closest);

    // let names: [] = programas.map((res: any) => {
    //     const inicio = res.human_start_time.substring(0, 8);
    //     console.log(inicio);
    //     if (closest === inicio) {
    //         return {
    //             title: res.title,
    //             inicio: res.human_start_time.substring(0, 8),
    //             final: res.human_end_time.substring(0, 8)
    //         }
    //     }
    // })
    let result;
    programas.array.forEach((element: any) => {
        const inicio = element.human_start_time.substring(0, 8);
        if (inicio === closest) {
            result = {
                title: element.title,
                inicio: element.human_start_time.substring(0, 8),
                final: element.human_end_time.substring(0, 8)
            }
        }
    });
    console.log("programa:", result);
    return responseProgramacaoDialogflow(result, "programa");
}