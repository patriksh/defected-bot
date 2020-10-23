const mongoose = require('mongoose');

module.exports = mongoose.model('Member', new mongoose.Schema({
    id: { type: String },
    guild: { type: String }
}));
