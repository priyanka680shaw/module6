const  express = require("express")
const router = express.Router();
const fileController = require("../controllers/index.Controller")
router.post("/api/file" , fileController.uploadFile) // upload a file
router.get("/file/:fileId" , fileController.generatedShaeableLink) // generate a  sharable and downloadable link
router.get("/file/download/:fileId" , fileController.downloadfile)//download file link
router.post("/emailApi" , fileController.sendEmail)
module.exports = router