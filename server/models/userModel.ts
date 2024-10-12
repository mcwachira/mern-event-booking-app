import mongoose from 'mongoose'
import bcryptjs from 'bcryptjs'
const userSchema   = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
        profilePicture:{
            type:String,
           default:"",
        },
    isAdmin:{
        type:Boolean,
        required:false,
        default:false
    }
},
    {timestamps:true}

)
// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword:string) {
    return await bcryptjs.compare(enteredPassword, this.password);
};

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }

    const salt = await bcryptjs.genSalt(10);
    this.password = await bcryptjs.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

export default User;

