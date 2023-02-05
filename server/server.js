const express = require('express');
const cors = require('cors');
require('dotenv').config()
const workouts = require('./routes/workout')


//connection
const dbconnect = require('./config/connection')
dbconnect.dbconnect(); 
  
//express app
const app = express();


//using cors
app.use(cors());

//middleware 
app.use(express.json())

app.use((req,res,next)=>{
   
   next()
})

//routes
app.use('/api/workouts',workouts)



app.listen(process.env.PORT,()=>{
    
    console.log(`listening on port ${process.env.PORT}`);

})

//listen for requests              
