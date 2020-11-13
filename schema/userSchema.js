var mongoose = require('mongoose');
const { Schema } = mongoose;
const salt = 8;
var bcrypt = require('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        index: true
    },
    phone: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    password: {
        type: String,
        default: '',
        index: true,
        unique: true
    },
    last_updated_at: { type: Date, default: Date.now },
}, {
    timestamps: true
});


userSchema.pre('save', function (next) {
    var user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')) return next();
    // generate a salt
    //https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1
    bcrypt.genSalt(salt, function (err, salt) {
        if (err) return next(err);
        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
userSchema.methods.row_values = function () {
    return {
        _id: this._id,
        email: this.email,
        name: this.name
    }
}
userSchema.methods.comparePassword = function (candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
        if (err) return cb(err, isMatch);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', userSchema)