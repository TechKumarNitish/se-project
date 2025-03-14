const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/se-project", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
