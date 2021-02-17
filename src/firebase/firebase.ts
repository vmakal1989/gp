import firebase from 'firebase'

export const firebaseUserAPI = {
	createAccount(email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
	},
	newSession(email: string, password: string) {
		return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => firebase.auth().signInWithEmailAndPassword(email, password))
	},
	removeSession() {
		return firebase.auth().signOut()
	},
	setUserProfile(userId: string, email: string, firstName: string, lastName: string, role: string) {
		return firebase.database().ref(`users/${userId}`).set({email, firstName, lastName, role})
	},
	getUserProfile(userId) {
		return firebase.database().ref(`users/${userId}`).once('value')
	},
	editUserProfile(userId, firstName, lastName) {
		let updateData = {userId, firstName, lastName,}
		let updates = {};
		updates[`users/${userId}`] = updateData;
		return firebase.database().ref().update(updates);
	},
	getUsers() {
		return firebase.database().ref(`users`).once('value')
	}
}
export const firebaseNotesAPI = {
	getNotes(userId) {
		return firebase.database().ref(`notes/${userId}`).once('value')
	},
	addNote(userId, newNote) {
		return firebase.database().ref(`notes/${userId}`).push(newNote)
	},
	editNote(userId, id,date, time, value) {
		let updateData = {userId, id,date, time, value}
		let updates = {};
		updates[`notes/${userId}/${id}`] = updateData;
		return firebase.database().ref().update(updates);
	},
	removeNote(userId, id) {
		return firebase.database().ref(`notes/${userId}/${id}`).remove()
	}
}
