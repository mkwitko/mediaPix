import { getAnalytics } from 'firebase/analytics'
import { getApps, initializeApp } from 'firebase/app'

const FirebaseCredentials = {
	apiKey:
		process.env.REACT_APP_ENVIRONMENT === 'development'
			? process.env.REACT_APP_FIREBASE_PUBLIC_API_KEY_DEV
			: process.env.REACT_APP_FIREBASE_PUBLIC_API_KEY_PROD,
	authDomain:
		process.env.REACT_APP_ENVIRONMENT === 'development'
			? process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_DEV
			: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN_PROD,
	projectId:
		process.env.REACT_APP_ENVIRONMENT === 'development'
			? process.env.REACT_APP_FIREBASE_PROJECT_ID_DEV
			: process.env.REACT_APP_FIREBASE_PROJECT_ID_PROD,
	storageBucket:
		process.env.REACT_APP_ENVIRONMENT === 'development'
			? process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_DEV
			: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET_PROD,
	messagingSenderId:
		process.env.REACT_APP_ENVIRONMENT === 'development'
			? process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_DEV
			: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID_PROD,
	appId:
		process.env.REACT_APP_ENVIRONMENT === 'development'
			? process.env.REACT_APP_FIREBASE_APP_ID_DEV
			: process.env.REACT_APP_FIREBASE_APP_ID_PROD,
	measurementId:
		process.env.REACT_APP_ENVIRONMENT === 'development'
			? process.env.REACT_APP_FIREBASE_MEASUREMENT_ID_DEV
			: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID_PROD,
}

// Initialize Firebase
const firebase_app =
	getApps().length === 0 ? initializeApp(FirebaseCredentials) : getApps()[0]

export const analytics = getAnalytics(firebase_app)

export default firebase_app
