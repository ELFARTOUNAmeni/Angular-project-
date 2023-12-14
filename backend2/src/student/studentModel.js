const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String, // Vous pouvez ajuster le type en fonction de vos besoins (par exemple, 'Number' si vous souhaitez stocker un nombre)
        required: false // Facultatif, dépend de vos besoins en matière de validation
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
