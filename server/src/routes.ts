import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionsController from "./controllers/ConnectionsController";

const routes = express();

const classesController = new ClassesController()

const connectionController = new ConnectionsController()

routes.post("/classes", classesController.create);

routes.get("/classes", classesController.index);

routes.get("/proffys", classesController.list);

routes.post("/connections", connectionController.create);

routes.get("/connections", connectionController.index);


export default routes;
