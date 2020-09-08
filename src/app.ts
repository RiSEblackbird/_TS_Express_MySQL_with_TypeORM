import "reflect-metadata"; // this shim is required
import { createExpressServer } from "routing-controllers";
import { KeywordController } from "./controllers/KeywordController";
import { StampController } from "./controllers/StampController";
import { StudyLogController } from "./controllers/StudyLogController";

// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  controllers: [KeywordController, StampController, StudyLogController], // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000);
