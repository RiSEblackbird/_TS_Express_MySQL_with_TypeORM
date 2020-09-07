"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // this shim is required
var routing_controllers_1 = require("routing-controllers");
var KeywordController_1 = require("./controllers/KeywordController");
var StampController_1 = require("./controllers/StampController");
var StudyLogController_1 = require("./controllers/StudyLogController");
// creates express app, registers all controller routes and returns you express app instance
var app = routing_controllers_1.createExpressServer({
    controllers: [KeywordController_1.KeywordController, StampController_1.StampController, StudyLogController_1.StudyLogController] // we specify controllers we want to use
});
// run express application on port 3000
app.listen(3000);
