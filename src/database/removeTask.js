import { doc, deleteDoc } from 'firebase/firestore';
import { db } from "./config";

export async function handleTaskRemove(id) {
    try {
        const docRef = doc(db, 'tasks', id);
        await deleteDoc(docRef);
        //setTasks(prevTasks => prevTasks.filter(task => task.id !== id))
        return true;
    } catch (error) {
        return false;
    }
}