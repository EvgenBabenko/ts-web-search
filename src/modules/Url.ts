export default class {

    baseUrl: string;
    query: object;

    constructor(baseUrl: string, query?: object) {
        this.baseUrl = baseUrl;
        this.query = query;
    }

    public getUrl(): string {
        return this.query ? `${this.baseUrl}?${this.joinToQueryString(this.query)}`: this.baseUrl
    }

    private joinToQueryString(params: any): string {
        return Object.entries(params)
            .reduce((acc, item) => acc + `${item[0]}=${item[1]}&`, '')
            .slice(0, -1);
    }
}