import mongoose from 'mongoose';

const connectDb = () => {
	return mongoose.connect(process.env.MONGO_URI);
};

export default connectDb;
