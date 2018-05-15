import RestApi from '../modules/RestApi'
import Url from '../modules/Url'
import {ISearch} from "../types/ISearch";

export default class {

    baseUrl: string;

    constructor() {
        this.baseUrl = 'https://www.google.com/search';
        // this.baseUrl = 'https://www.bing.com/search';
    }

    public async getPostResults(search: ISearch): Promise<any> {
        const url = new Url(this.baseUrl, search);

        const rawPostResults = await new RestApi( url.getUrl(), 'text' ).get();

        return this.filterPostResults(rawPostResults);
    }


    private filterPostResults(rawPostResults: string) {
        const HTMLdocument= new DOMParser().parseFromString(rawPostResults, "text/html");

        const linkCollection = HTMLdocument.querySelectorAll('div.g h3.r');

        const urlCollection = HTMLdocument.querySelectorAll('div.g cite.iUh30');

        const descriptionCollection = HTMLdocument.querySelectorAll('div.g span.st');

        return this.toObject(linkCollection, urlCollection, descriptionCollection);
    }



    private toObject(one: any, two: any, three: any) {
        const postResults = [];

        for (let i = 0; i < one.length; i++) {
            const object = {
                link: one[i],
                url: two[i],
                description: three[i]
            };

            postResults.push(object);
        }

        return postResults;
    }
}