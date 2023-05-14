const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const userRoutes=require("./routes/users");

const app = express();

app.use("/users",userRoutes)

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Library API',
      version: '1.0.0',
      description: 'Library API Information',
      contact: {
        name: 'Developer'
      },
      servers: ['http://localhost:5000']
    }
  },
  apis: ['./routes/*.js'] // files containing annotations as above
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(express.static("uploads"));

//const swaggerDocs=swaggerJSDOc(swaggerOptions);
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get("/floorplans",(req,res)=>{
    const fileNameFromDb="carbon.png"
    res.json({
        data:"Databasedata",
        planImage:`http://localhost:8080/${fileNameFromDb}`
    })
})

app.listen(8080,()=>{
    console.log("Server Running on port",8080)
})