const express=require('express');
const mysql=require('mysql');
const cors=require('cors');


 const app=express();
 app.use(cors());
 const PORT =process.env.PORT || 5000;

 const  db=mysql.createConnection({
  host: 'localhost',
  user: 'robin',
  password: 'Richie@innit#',
  database: ''
 });

 db.connect((error)=>{
  if(error){
    throw error;
  }else{
    console.log("connection successful");
  }
 });

 app.use(express.json());