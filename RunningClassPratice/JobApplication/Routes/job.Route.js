const express = require("express");
const router = express.Router();
const jobApiController = require("../controller/job.Controller");

router.get("/api/jobs" , jobApiController.getJobApi)

router.post("/api.post" , jobApiController.postJobApi )

router.put("/api/jobs:id" , jobApiController.putJobApi)

router.delete("/api/jobs:id" , jobApiController.deleteJobApi )

module.exports = router;


