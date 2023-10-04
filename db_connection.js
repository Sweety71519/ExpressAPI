const mongooose = require("mongoose")


// mongooose.connect("mongodb://127.0.0.1:27017/expressApi")
// .then(()=>{
//     console.log("Database connected!!!");
// })
// .catch((error)=>{
//     console.log(error);
// })


async function getConnection() {
    try {
        await mongooose.connect("mongodb://127.0.0.1:27017/expressApi")
        console.log("DataBase connected!!!");
    }
    catch (error) {
        console.log(error);
    }
}
getConnection();



