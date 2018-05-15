import formatTypes from "../fixtures/formatTypes";

export default class {

    url: string;
    outputFormat: any;

    constructor(url: string, outputFormat: string = 'default') {
        this.url = url;
        this.outputFormat = formatTypes[outputFormat] ? formatTypes[outputFormat] : formatTypes.default;
    }

    public get(): any {
        return fetch(this.url)
            .then(this.outputFormat.bind(this))
            .catch(error => console.error(error))
    }
}