1. APIS
  i . Create job Api
  ii. list job Api
  iii. Apply job Api
  iv. Dekete job 
  v.Eddit job
Main focusing part is  (2,3)
2. Connecting mongo with node
3. Deployment od Backend
4. we are usin mvc structure
index->routes->controller->model

//schemma  for database to inform about the fields and data types
{
    title : {
        type : String
    },
    description : {
        type : String
    },
    company : {
        type : String
    },
    location :{
        type : String
    },
    slalar : {
        type : number
    }
}

//herachry follow
/**
 * DB server =  index se connect or create 
 * database = index se ccreate url/dbname
 * collection =  kisi name se create ho ge inside that all records stored i.e document (one person ke complete recore is 1 document)
 * documents  = scheam ke through (1 , 1 records)
 * flelds = (record me create like(title , company .....))
 */

//all the query part or curd related operatins is going to be written in the model model connect to  controller 