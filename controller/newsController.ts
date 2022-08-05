import newsService from "../services/newsService";
import * as HttpStatus from "http-status"
import helper from "../infra/helper";

class NewsController {

    get(req, res) {
        newsService.get()
            .then(news => helper.sendResponse(res, HttpStatus.Ok, news))
            .catch(error => console.error.bind(console, 'Error' + error));
    }

    getByid(req, res) {
        const _id = req.params.id;

        newsService.getById(_id)
            .then(news => helper.sendResponse(res, HttpStatus.Ok, news))
            .catch(error => console.error.bind(console, 'Error' + error));

    }

    create(req, res) {
        let vm = req.body;

        newsService.create(vm)
            .then(news =>
                helper.sendResponse(res, HttpStatus.OK, "Noticia cadastrada com sucesso!"))
            .catch(error => console.error.bind(console, 'Error' + error));
    }

    update(req, res) {
        const _id = req.params.id;
        let news = req.body;

        newsService.create(news)
            .then(news =>
                helper.sendResponse(res, HttpStatus.OK, news.title + " foi atualizada com sucesso!"))
            .catch(error => console.error.bind(console, 'Error' + error));

    }

    delete(req, res) {
        const _id = req.params.id;

        newsService.delete(_id)
            .then(() =>
            helper.sendResponse(res, HttpStatus.OK, "Noticia deletada com sucesso!"))
            .catch(error => console.error.bind(console, 'Error' + error));
    }

}

export default new NewsController();