import { collection, doc, getDocs, deleteDoc } from 'firebase/firestore';
import { db } from "./config";

// Removes all tasks form the list.
export async function handleRemoveAllTasks() {
    try {
        const querySnapshot = await getDocs(collection(db, 'tasks'));console.log(querySnapshot);

        querySnapshot.forEach(async (doc) => {
            await deleteDoc(doc.ref);
        });
        return true;
    } catch (error) {
        console.error("Error clearing tasks:", error);
        return false;
    }
};