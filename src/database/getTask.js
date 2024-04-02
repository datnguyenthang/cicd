import { collection, getDocs, query, where, } from 'firebase/firestore';
import { db } from "./config";

export async function getAllTasks(id = "") {
    try {
        const dbCollection = collection(db, 'tasks');
        let dbQuery = dbCollection;

        if (id !== "") {
            dbQuery = query(dbCollection, where('id', '==', id));
        } else dbQuery = query(dbCollection);

        return await getDocs(dbQuery);
    } catch (error) {
        console.error("Error fetching documents: ", error);
        return false;
    }
}