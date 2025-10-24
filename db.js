const {Schema,default: mongoose} = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const adminSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String,}
});

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String,}

});

const courseSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    ImageUrl : { type: String, required: true },
    creatorId: ObjectId,

});

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId,
    purchaseDate: { type: Date, default: Date.now }
});

const AdminModel = mongoose.model('Admin', adminSchema);
const UserModel = mongoose.model('User', userSchema);
const CourseModel = mongoose.model('Course', courseSchema);
const PurchaseModel = mongoose.model('Purchase', purchaseSchema);

module.exports = {
    AdminModel,
    UserModel,
    CourseModel,
    PurchaseModel
};