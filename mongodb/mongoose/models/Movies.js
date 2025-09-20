import mongoose from "mongoose";
const { Schema } = mongoose;

// Creating Schema
const movieSchema = new Schema({
    name: { type: String, required: true, trim: true },
    ratings: { type: Number, required: true, min: 1, max: 5 },
    money: { type: mongoose.Decimal128, required: true, validate: v => v >= 10 },
    genre: { type: Array },
    isActive: { type: Boolean },
    comments: [{ value: { type: String }, published: { type: Date, default: Date.now } }]
});

// Creating Model
const movieModel = mongoose.model('Movie', movieSchema);

// Creating Documents/Records
// const createDoc = async () => {
//     try
//     {
//         const m = new movieModel({ name: 'Extraction 2', ratings: 4, money: 6000, genre: ['action', 'adventure'], isActive: true, comments: [{ value: 'That was an amazing movie.' }] });

//         const result = await m.save();
//         console.log(result);
//     } catch (err)
//     {
//         console.log(err);
//     }
// };

//Inserting Data
// const insertManyDoc = async () => {
//     try
//     {
//         const m1 = new movieModel({
//             name: 'Extraction 2',
//             ratings: 4,
//             money: 6000,
//             genre: ['action', 'adventure'],
//             isActive: true,
//             comments: [{ value: 'That was an amazing movie.' }]
//         });

//         const m2 = new movieModel({
//             name: 'John Wick Chapter 4',
//             ratings: 5,
//             money: 25000,
//             genre: ['action'],
//             isActive: true,
//             comments: [{ value: "John doesn't seem that angry anymore:(" }]
//         });

//         const m3 = new movieModel({
//             name: 'Mission Impossible - Dead Reckoning Part One',
//             ratings: 4,
//             money: 60000,
//             genre: ['action', 'spy', 'crime', 'thriller'],
//             isActive: true,
//             comments: [{ value: 'OK that was TOM but where is Jerry?' }]
//         });

//         const m4 = new movieModel({
//             name: 'Transformers: Rise of the Beasts',
//             ratings: 4,
//             money: 22000,
//             genre: ['action', 'adventure', 'Science Fiction', 'Fantasy'],
//             isActive: true,
//             comments: [{ value: 'That was enough VFX for today.' }]
//         });

//         const m5 = new movieModel({
//             name: 'The Expendables 4',
//             ratings: 4,
//             money: 25000,
//             genre: ['action', 'war', 'comedy', 'thriller'],
//             isActive: true,
//             comments: [{ value: 'Fighting and blowing stuff was filmed damn good.' }]
//         });

//         // const result = await m.save();
//         // console.log(result);

//         const result = await movieModel.insertMany([m1, m2, m3, m4, m5]);
//     } catch (err)
//     {
//         console.log(err);
//     }
// };

// Retrieving All Data
// const allDocs = async () => {
//     const result = await movieModel.find();
//     // console.log(result);

//     // Iterating Over
//     result.forEach((movie) => {
//         console.log(`${movie.name} was rated: ${movie.ratings}`);
//     });
// };

// const singleDoc = async () => {
//     // All Columns
//     // const result = await movieModel.findById("68c261bdd0ec785fa38f96fd");
//     // console.log(result);
//     // console.log(result.name);
//     // console.log(result.ratings);
//     // console.log(result.comments);

//     // With specific columns
//     const result = await movieModel.findById("68c261bdd0ec785fa38f96fd", "name");
//     console.log(result);
// };

// const docWithField = async () => {
//     console.clear();
//     try
//     {
//         // All Columns
//         // const result = await movieModel.find().limit(3);
//         // const result = await movieModel.find().skip(2);
//         // const result = await movieModel.find().countDocuments();
//         // const result = await movieModel.find().sort({ name: -1 });
//         // const result = await movieModel.find({ money: { $ne: 60000 } });
//         const result = await movieModel.find({ $or: [{ money: 25000 }, { ratings: 5 }] });
//         console.log(result);
//     } catch (error)
//     {
//         console.log(error);
//     }
// };

// const updateManyRecords = async () => {
//     try
//     {
//         // Update One Record: updateOne(filter, whatToChange)
//         const result = await movieModel.updateMany({ ratings: 5 }, { ratings: 4 });

//         console.clear();
//         console.log(result);

//     } catch (error)
//     {
//         console.log(error);
//     }
// };

const updateManyRecords = async () => {
    try
    {
        // Update One Record: updateOne(filter, whatToChange)
        // const result = await movieModel.findByIdAndDelete("68c261bdd0ec785fa38f96f7");

        const result = await movieModel.deleteMany({ ratings: 4 });

        console.clear();
        console.log(result);
    } catch (error)
    {
        console.log(error);
    }
};

export { updateManyRecords };