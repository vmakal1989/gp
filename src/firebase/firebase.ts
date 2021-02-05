import firebase from 'firebase'



export const firebaseAPI = {

	createAccount(firstName: string, lastName: string, email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
	},

	newSession(email: string, password: string) {
		return firebase.auth().signInWithEmailAndPassword(email, password)
}
}
