import { collection, addDoc } from 'firebase/firestore';
import { db } from "./config";

// Adds a task.
export async function handleAddTask(description, status) {
    return new Promise((resolve, reject) => {
        const data = { description: description, status: status };
        const dbCollection = collection(db, 'tasks');
        addDoc(dbCollection, data)
        .then((docRef) => {
            resolve(docRef.id);
        })
        .catch((error) => {
            console.error("Error adding task:", error);
            reject(false);
        });
    })
}