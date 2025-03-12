const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please provide a name'],
            trim: true,
            minlength: [2, 'Name must be at least 2 characters']
        },
        age: {
            type: Number,
            required: [true, 'Please provide an age'],
            min: [0, 'Age must be between 0 and 120'],
            max: [120, 'Age must be between 0 and 120']
        },
        dateOfBirth: {
            type: Date,
            required: [true, 'Please provide a date of birth'],
            validate: {
                validator: function (v) {
                    const year = v.getFullYear();
                    return v instanceof Date && !isNaN(v);
                },
                message: 'Please provide a valid date'
            }
        },
        password: {
            type: String,
            required: [true, 'Please provide a password'],
            minlength: [10, 'Password must be at least 10 characters'],
            validate: {
                validator: function (v) {
                    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/.test(v);
                },
                message: 'Password must contain at least one letter and one number'
            }
        },
        gender: {
            type: String,
            required: [true, 'Please select a gender'],
            enum: ['Male', 'Female', 'Other']
        },
        about: {
            type: String,
            maxlength: [5000, 'About section cannot exceed 5000 characters']
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);