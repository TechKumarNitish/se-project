const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log(`Database connected successfully`);
}).catch((err) => {
  console.log(`Error connecting to database: ${err}`);
}
);
// mongoose.set('debug', true); // Enable Mongoose debug mode
// mongoose.set('strictQuery', false); // Disable strict query mode
// mongoose.set('runValidators', true); // Enable run validators
// mongoose.set('toJSON', {
//   transform: (doc, ret) => {
//     delete ret.__v;
//     return ret;
//   }
// });
// mongoose.set('toObject', {
//   transform: (doc, ret) => {
//     delete ret.__v;
//     return ret;
//   }
// });
// mongoose.set('timestamps', true); // Enable timestamps
// mongoose.set('autoIndex', false); // Disable auto index creation
// mongoose.set('autoCreate', false); // Disable auto create
// mongoose.set('bufferCommands', false); // Disable buffer commands
// mongoose.set('useFindAndModify', false); // Disable find and modify
// mongoose.set('useCreateIndex', true); // Enable create index
// mongoose.set('useNewUrlParser', true); // Enable new URL parser
// mongoose.set('useUnifiedTopology', true); // Enable unified topology
// mongoose.set('useMongoClient', true); // Enable MongoDB client
// mongoose.set('debug', true); // Enable debug mode
// mongoose.set('strict', true); // Enable strict mode
// mongoose.set('minimize', false); // Disable minimize
// mongoose.set('id', false); // Disable id
// mongoose.set('versionKey', false); // Disable version key
// mongoose.set('validateBeforeSave', true); // Enable validate before save
// mongoose.set('validateBeforeUpdate', true); // Enable validate before update
// mongoose.set('validateBeforeRemove', true); // Enable validate before remove
// mongoose.set('validateBeforeInit', true); // Enable validate before init
// mongoose.set('validateBeforePopulate', true); // Enable validate before populate
// mongoose.set('validateBeforeSave', true); // Enable validate before save
// mongoose.set('validateBeforeUpdate', true); // Enable validate before update
// mongoose.set('validateBeforeRemove', true); // Enable validate before remove
// mongoose.set('validateBeforeInit', true); // Enable validate before init
// mongoose.set('validateBeforePopulate', true); // Enable validate before populate
// mongoose.set('validateBeforeSave', true); // Enable validate before save
// mongoose.set('validateBeforeUpdate', true); // Enable validate before update
// mongoose.set('validateBeforeRemove', true); // Enable validate before remove  

