import WebSearchController from './core/WebSearchController'
import WebSearchView from './core/WebSearchView'
import WebSearchModel from './core/WebSearchModel'

const model: WebSearchModel = new WebSearchModel();
const view: WebSearchView = new WebSearchView(model);

const controller: WebSearchController = new WebSearchController(view, model);