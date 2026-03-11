const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Create Schema
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    course: String
});

// Create Model
const Student = mongoose.model("Student", studentSchema);

// CREATE
async function createStudent() {
    const student = new Student({
        name: "Lasya",
        age: 20,
        course: "B.Tech"
    });

    await student.save();
    console.log("Student Added");
}

// READ
async function readStudents() {
    const students = await Student.find();
    console.log("Students:", students);
}

// UPDATE
async function updateStudent() {
    await Student.updateOne(
        { name: "Lasya" },
        { age: 21 }
    );
    console.log("Student Updated");
}

// DELETE
async function deleteStudent() {
    await Student.deleteOne({ name: "Lasya" });
    console.log("Student Deleted");
}

// Run CRUD operations
async function runCRUD() {
    await createStudent();
    await readStudents();
    await updateStudent();
    await readStudents();
    await deleteStudent();
    await readStudents();
}

runCRUD();