const mongoose = require('mongoose');


mongoose.connect(process.env.MONGODB_URI,
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log(`Database connected successfully`);
});

