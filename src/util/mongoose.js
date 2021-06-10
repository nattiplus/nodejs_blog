module.exports = {
    multipleMongooseToObject: function (Mongooses) {
        return Mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
