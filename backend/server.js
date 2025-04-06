// const express = require("express");
// const cors = require("cors");
// const morgan = require("morgan");
// const dotenv = require("dotenv");
// const colors = require("colors");
// const path = require("path");
// const cors=require("cors");
// const connectDb = require("./config/connectDb");
// // config dot env file
// dotenv.config();

// //databse call
// connectDb();

// //rest object
// const app = express();

// app.use(cors({ origin: '*' }));


// //middlewares
// app.use(morgan("dev"));
// app.use(express.json());
// app.use(cors());

// //routes
// //user routes
// app.use("/api/v1/users", require("./routes/userRoutes"));
// //transections routes
// app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// // //static files
// // app.use(express.static(path.join(__dirname, "./client/build")));

// // app.get("*", function (req, res) {
// //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// // });

// app.get('/',(req,res)=>{
//   res.send('Hello')
// })


// //port
// const PORT = 8080 || process.env.PORT;



// //listen server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });




//FOR VERCEL DEPLOYMENT
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/connectDb");

dotenv.config();
connectDb();

const app = express();

// Middlewares
app.use(cors({ origin: '*' }));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/v1/users", require("./routes/userRoutes"));
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// Test route
app.get("/", (req, res) => {
  res.send("Hello from Vercel!");
});

// ❌ DO NOT use app.listen() on Vercel
// ✅ Instead, export the app
module.exports = app;
