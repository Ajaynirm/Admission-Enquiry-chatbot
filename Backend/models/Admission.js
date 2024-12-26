import mongoose from 'mongoose';

const AdmissionSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  query: String,
  response: String,
  createdAt: { type: Date, default: Date.now },
});

const Admission = mongoose.model('Admission', AdmissionSchema);
export default Admission;
