import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({


    fullname: { type: String, required: true, trim: true },
    username: { type: String, required: true, unique: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true, lowercase: true },
    password: { type: String, required: true, minlength: 6 },
    role: { type: String, enum: ['user'], default: 'user' },
    isActive: { type: Boolean, default: true },

    demoAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'DemoAccount' },
    liveAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'LiveAccount' },
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

export default User;
