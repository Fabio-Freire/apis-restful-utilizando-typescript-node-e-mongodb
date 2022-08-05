import * as express from "express";
import * as bodyParser from "body-parser";

import DataBase from "./infra/db";
import newsController from "./controller/newsController";

class Startup {

    public app: express.Application;
    private _db: DataBase;
    private bodyParser;

    constructor() {
        this.app = express();
        this._db = new DataBase();
        this._db.createConnection();
        this.middler();
        this.routes();

    }

    middler (){
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false}));
    }

    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ versao: '0.0.1' })
        })

        this.app.route("/api/v1/news").get(newsController.get);
        this.app.route("/api/v1/news/:id").get(newsController.getByid);
        this.app.route("/api/v1/news").post(newsController.create);
        this.app.route("/api/v1/news/:id").post(newsController.update);
        this.app.route("/api/v1/news/:id").post(newsController.delete);
    }
}

export default new Startup();