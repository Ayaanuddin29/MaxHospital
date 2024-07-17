import mongoose from 'mongoose'

const userSchema=new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      profilePicture:{
        type:String,
        default:'https://tse4.mm.bing.net/th?id=OIP.PMhANanxddOBObcYxcYOcwHaGy&pid=Api&P=0&h=180'
      }
},{timestamps:true})


const User = mongoose.model('User',userSchema);
export default User