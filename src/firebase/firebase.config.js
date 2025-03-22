// Helper function to log warnings for missing environment variables
const getEnvVariable = (key, fallback = '') => {
  const value = typeof process !== 'undefined' ? process.env[key] : fallback;
  if (!value) {
    const message = `Error: Missing required environment variable ${key}. Please ensure it is defined in your environment configuration.`;
    if (key === 'VITE_API_KEY') {
      if (process.env.NODE_ENV === 'development') {
        console.warn(`${message} Using fallback value for development.`);
        return 'your-development-api-key'; // Replace with a valid fallback value
      }
      console.error(`${message} This variable is critical for Firebase initialization.`);
      throw new Error(`${message} Application cannot proceed without it.`);
    }
    console.warn(message); // Log a warning for non-critical variables
  }
  return value || fallback;
};

const firebaseConfig = {
  apiKey: getEnvVariable('VITE_API_KEY'),
  authDomain: getEnvVariable('VITE_AUTH_DOMAIN'),
  projectId: getEnvVariable('VITE_PROJECT_ID'),
  storageBucket: getEnvVariable('VITE_STORAGE_BUCKET'),
  messagingSenderId: getEnvVariable('VITE_MESSAGE_ID'),
  appId: getEnvVariable('VITE_APP_ID'),
  measurementId: getEnvVariable('VITE_MEASUREMENT_ID'), // Added measurementId
};

export default firebaseConfig;

