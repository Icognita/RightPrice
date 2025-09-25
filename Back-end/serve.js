const expres=require('express');
const app=expres();
const port =3000;
 require("./config/db")


app.listen(300,()=>{

  console.log(`Server running on port ${port}`)
})