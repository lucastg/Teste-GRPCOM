import { language } from "../library/enum/index";

export interface IParameters {
    title: string,
    inicio: string,
    final: string
}

export interface IOutputContext {
    name: string;
    lifespanCount: number;
    parameters?: IParameters;
}

export class Format {
    parameters?: IParameters;
    languageCode: string;
    outPutContext: IOutputContext[];
    text: string;

    constructor(
        text: string,
        parameters?: IParameters,
        languageCode: string = language.Pt
    ) {
        this.parameters = parameters;
        this.languageCode = languageCode;
        this.outPutContext = [];
        this.text = text;
    }

    addOutPutContext(obj: IOutputContext) {
        this.outPutContext.push(obj);
    }
    public getOutPutContext() {
        return this.addOutPutContext;
    }
    public generateObject() {
        const result: any = {
            followupEventInput: {
                name: this.text,
                languageCode: this.languageCode,
                parameters: this.parameters
            }
        };
        let count = 0;
        if (this.outPutContext.length > 0) {
            result.outputContexts = [];
            this.outPutContext.forEach(element => {
                result.outputContexts[count] = element;
                count++;
            });
        }
        return result;
    }
}
