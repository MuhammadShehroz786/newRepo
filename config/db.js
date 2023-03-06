import mongoose from "mongoose";
const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://mylampaduit:FLBFwQZf40wPcsYW@cluster0.oxqwjjy.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(() => console.log(`Datebase Connected`))
    .catch((error) => console.log(error.message));
};
export default connectDB;
// FLBFwQZf40wPcsYW
// mylampaduit;
