import firebase from 'firebase'

export const firebaseUserAPI = {
	createAccount(firstName: string, lastName: string, email: string, password: string) {
		return firebase.auth().createUserWithEmailAndPassword(email, password)
	},
	newSession(email: string, password: string) {
		return firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
			.then(() => firebase.auth().signInWithEmailAndPassword(email, password))
	},
	removeSession() {
		return firebase.auth().signOut()
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
