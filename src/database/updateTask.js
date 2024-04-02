import { doc, updateDoc } from 'firebase/firestore';
import { db } from "./config";

export async function handleStatusChange(id, status) {
    try {
        const docRef = doc(db, 'tasks', id);
        await updateDoc(docRef, {
            status: status
        });
        return true;
    } catch (error) {
        return false;
    }
}