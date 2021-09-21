const mongoose = require("mongoose")
const chalk = require("chalk")
mongoose.connect(`mongodb+srv://vivek_kumar:k76I5gCyDRavFRGL@cluster0.ufett.mongodb.net/Cluster0?retryWrites=true&w=majority`, {
   
useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log(chalk.greenBright.bold("Connected to Database Successfully !!!"))
})