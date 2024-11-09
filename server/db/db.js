const mongoose=require('mongoose')

const connectDB=async ()=>{
    try {
        const conn=await mongoose.connect('mongodb+srv://abdul:abdul123@cluster0.dyoj3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log(`connected to : ${conn.connection.host}`)
    } catch (err) {
        console.log(err)
    }
}

module.exports=connectDB