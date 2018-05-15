import WebSearchView from "./WebSearchView";
import WebSearchModel from "./WebSearchModel";
import GoogleWebSearch from '../services/GoogleWebSearch'

export default class {

    view: WebSearchView;
    model: WebSearchModel;

    constructor(view: WebSearchView, model: WebSearchModel) {
        this.view = view;
        this.model = model;

        this.view.subscribe((searchParams: any) => this.webSearch(searchParams))
    }

    private async webSearch(searchParams: any): Promise<any> {
        const postresults = await new GoogleWebSearch().getPostResults(searchParams);

        this.model.updateData(postresults);
    }

}