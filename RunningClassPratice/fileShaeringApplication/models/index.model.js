const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    originalName :  {
        type : String,
        require  :true
    },
    newName : {
        type : String,
        require  :true
    },
    size : {
        type : Number,
        require  :true
    }
})

const FileModel = mongoose.model("files" , fileSchema);

module.exports = FileModel;