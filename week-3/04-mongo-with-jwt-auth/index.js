const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");



// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)
<<<<<<< HEAD
const PORT =3000
app.listen(3000, () => {
=======

const PORT = 3000;
app.listen(PORT, () => {
>>>>>>> 0814b4007d7ff75a8134114f341c08ae0a348f08
    console.log(`Server is running on port ${PORT}`);
});


