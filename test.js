var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

var childrenSchema = mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number,
        min: 0
    }
});

var parentSchema = mongoose.Schema({
    name : {
        type: String
    },
    children: [childrenSchema]
});

var Parent = mongoose.model("Parent", parentSchema);

db.on('open', function() {
  Parent.create(    { name: "John Smith",
    children: [
        { name: "Peter", age: 2 }, { name: "Margaret", age: 20 }
    ]});
  Parent.create(    { name: "Another Smith",
    children: [
        { name: "Martha", age: 10 }, { name: "John", age: 22 }
    ]});

});


