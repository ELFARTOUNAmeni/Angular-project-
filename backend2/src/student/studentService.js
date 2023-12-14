const Student = require('./studentModel');



const createStudentServiceFn = async (data) => {
  try {
    // Vérifier si l'e-mail existe déjà
    const existingStudent = await Student.findOne({ email: data.email });

    if (existingStudent) {
      // Si l'e-mail existe déjà, renvoyer une erreur
      throw new Error('Email already exists');
    }

    // Si l'e-mail n'existe pas, créer un nouvel étudiant
    const newStudent = new Student(data);
    const savedStudent = await newStudent.save();
    
    return savedStudent;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating student');
  }
};

module.exports = {
  createStudentServiceFn
};


module.exports = {
    createStudentServiceFn
};
