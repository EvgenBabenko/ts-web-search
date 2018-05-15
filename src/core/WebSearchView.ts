import Observer from './Observer';
import WebSearchModel from './WebSearchModel';
import DomUtils from '../utils/DomUtils'
import {ISearch} from "../types/ISearch";

export default class extends Observer {

    model: WebSearchModel;

    constructor(model: WebSearchModel) {
        super();

        this.model = model;

        const form = document.getElementById('form');

        form.addEventListener('submit', this.handleSubmitData.bind(this));

        this.model.subscribe(() => this.render());
        
    }

    private handleSubmitData(event: any): void {
        event.preventDefault();

        const searchParams: ISearch = new DomUtils().reduceFormByAttr('name', event.target);

        this.notify(searchParams)
    }

    private render() {
        const text = document.getElementById('results');

        const postResults = this.model.getData();

        new DomUtils().clearNode(text);

        postResults.forEach((post: any) => {
            const div = new DomUtils().createElement('div', {}, post.link, post.url, post.description);

            text.appendChild(div);
        });

    }

}