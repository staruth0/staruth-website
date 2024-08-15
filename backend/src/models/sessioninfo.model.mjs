import mongoose from "mongoose";

// Define the session event schema
const sessionEventSchema = new mongoose.Schema({
  eventName: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
  // Add more event-specific fields as needed
});

// Define the session info schema including the session event subdocument
const sessioninfoSchema = new mongoose.Schema({
  session_id: {
    type: String,
    required: true,
  },
  session_data: [{}], // Define session data array if needed
  start_date: {
    type: Date,
    default: Date.now,
  },
  end_date: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastActivityAt: {
    type: Date,
    default: Date.now,
  },
  userAgent: {
    type: String,
  },
  ipAddress: {
    type: String,
  },
  sessionDuration: {
    type: Number,
  },
  userPreferences: {
    language: {
      type: String,
      default: 'en',
    },
    theme: {
      type: String,
      default: 'light',
    },
    // Add more user preferences as needed
  },
  referralSource: {
    type: String,
  },
  authenticationMethod: {
    type: String,
  },
  sessionFlags: {
    locked: {
      type: Boolean,
      default: false,
    },
    terminated: {
      type: Boolean,
      default: false,
    },
    
  },
  registrationCanceled: {
    type: Boolean,
    default: false,
  },
  events: [sessionEventSchema], 
}, { timestamps: true });

// Define and export the Session model
const Session = mongoose.model('Session', sessioninfoSchema);
export default Session;
