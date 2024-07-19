const express = require("express");
const router = express.Router();
const jobApiController = require("../controller/job.Controller");

router.get("/api/jobs" , jobApiController.getJobApi)

router.post("/api/jobs" , jobApiController.postJobApi )
//end points routes should be in approprite 
router.put("/api/jobs/:id" , jobApiController.putJobApi) //put is update method (read and  update both for the update purpous we needspecial id here we use params only api enddpoints  me / add ke baad jo hi ho ge that is my :id dynamic id ?hua to queary parameter  )

router.delete("/api/jobs/:id" , jobApiController.deleteJobApi )

module.exports = router;


