const monngoose = require("mongoose")
//now connect this schema with bdd using mongoose
//kuchbhi missing nahi ho ge sql structure follow ho ge with all consistanc data 
//require = mendatory hai dena pde ge
//dublicte nahi ho data = > unique 
//defauklt if data nahi hai to sirf field bne ge
const jobSchema = new monngoose.Schema(
    {
        title : {
            type : String,
            required  :true,
            unique : true
        },
        slalar : {
            type : Number,
            required  :true
        },
        company : {
            type : String,
            required  :true
        },
        location :{
            type : String,
            required  :true
        },
        description:{
            type:  String,
            required  :true
        }
    }
)

//collection (kisi name se create ho ge inside that all records stored i.e document (one person ke complete recore is 1 document)
//monngoose.model("collectionName" , jobSchema)
const JobSchemaCollection  = monngoose.model("jobs" , jobSchema)

module.exports = JobSchemaCollection;











/**
 * DB server =  index se connect or create 
 * database = index se ccreate url/dbname
 * collection =  (kisi name se create ho ge inside that all records stored i.e document (one person ke complete recore is 1 document)
 * documents  = scheam ke through (1 , 1 records)
 * flelds = (record me create like(title , company .....))
 */