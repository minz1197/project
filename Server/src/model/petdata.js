const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/PetDb');


const Schema = mongoose.Schema;
var NewPetSchema = new Schema({
    animal:String,
    breed : String,
    age:Number,
    description : String,
    availability : String,
    price : Number,
    image : String
})


module.exports = mongoose.model('PetData',NewPetSchema,'pets');