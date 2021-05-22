const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title:String,
    author:String,
    editure:String,
    description:String,
    avg_grade:String,
    pages:String,
    reviews:String,
    publish_date:String

});

module.exports = mongoose.model('Books',BookSchema);