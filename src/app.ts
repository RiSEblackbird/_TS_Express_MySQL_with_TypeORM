import * as express from "express";
import {Request, Response} from "express";
import {createConnection} from "typeorm";
import {Keyword} from "./entity/Keyword";
import {Stamp} from "./entity/Stamp";
import {StudyLog} from "./entity/StudyLog";

// create typeorm connection
createConnection().then(connection => {
    const keywordRepository = connection.getRepository(Keyword);

    // create and setup express app
    const app = express();
    app.use(express.json());

    // register routes

    app.get("/keywords", async function(req: Request, res: Response) {
        const keywords = await keywordRepository.find();
        res.json(keywords);
    });

    app.get("/keywords/:id", async function(req: Request, res: Response) {
        const results = await keywordRepository.findOne(req.params.id);
        return res.send(results);
    });

    app.post("/keywords", async function(req: Request, res: Response) {
        const keyword = await keywordRepository.create(req.body);
        const results = await keywordRepository.save(keyword);
        return res.send(results);
    });

    app.put("/keywords/:id", async function(req: Request, res: Response) {
        const keyword = await keywordRepository.findOne(req.params.id);
        keywordRepository.merge(keyword, req.body);
        const results = await keywordRepository.save(keyword);
        return res.send(results);
    });

    app.delete("/keywords/:id", async function(req: Request, res: Response) {
        const results = await keywordRepository.delete(req.params.id);
        return res.send(results);
    });

    // start express server
    app.listen(3000);
});