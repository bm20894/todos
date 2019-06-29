import firebase from '../firebase';

export const dispatch = (action) => {
	switch(action.type) {

		case "toggle-complete": {
			let todoRef = firebase.database().ref(`todos/${action.id}`);
			todoRef.once("value", snapshot => {
				let item = snapshot.val();
				item.completed = action.checked;
				todoRef.set(item);
			});
			break;
		}

		case "delete": {
			const todoRef = firebase.database().ref(`todos/${action.id}`);
			todoRef.remove();
			break;
		}

		case "add": {
			const todoRef = firebase.database().ref("todos");
			const todo = { title: action.title, completed: false };
			todoRef.push(todo);
			break;
		}

		default: return null;
	}
}
