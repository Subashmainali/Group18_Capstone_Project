const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const PORT = 9090;


//================= Routers =====================
const adminRouter = require("./router/admin.router");
const employeeRouter = require("./router/employee.router");
const userRouter = require("./router/user.router");


//================= Middlewears ================
app.use(cors());
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.use("/admin", adminRouter);
app.use("/employee", employeeRouter);
app.use("/use", userRouter);





app.listen(PORT, () => {
   console.log(`Servering is listening on port ${PORT}`);
})