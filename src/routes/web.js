import express from "express";
import homePageController from "../controllers/homepageController";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homePageController.getHomePage);
    router.post('/send-email', homePageController.handleSendEmail);

    return app.use('/', router);
};

export default initWebRoutes;

