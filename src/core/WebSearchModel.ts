import Observer from "./Observer";

export default class extends Observer {

    postResults: any[];

    constructor(postResults: any = []) {
        super();

        this.postResults = postResults;
    }

    public getData(): any {
        return this.postResults;
    }

    public updateData(postResults: any): void {
        this.postResults = postResults;

        this.notify();
    }

}