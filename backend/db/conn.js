
const mongoose=require('mongoose');

const DB="mongodb+srv://rabindra:87marakshimaa@cluster0.5k5xgkm.mongodb.net/eDashboard?retryWrites=true&w=majority";


mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("connection start ")).catch((error)=> console.log(error.message));
