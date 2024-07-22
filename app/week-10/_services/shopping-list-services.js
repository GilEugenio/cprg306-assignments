

import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";
import { getItems, addItem } from "../_services/shopping-list-service";



export const getItems = async (userId) => {
    const items = [];
    const q = query(collection(db, `users/${userId}/items`));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
    });
    return items;
};


export const addItem = async (userId, item) => {
    const docRef = await addDoc(collection(db, `users/${userId}/items`), item);
    return docRef.id;
};

const loadItems = async () => {
    const items = await getItems(user.uid);
    setItems(items);
};


useEffect(() => {
    loadItems();
}, []);


const handleAddItem = async (newItem) => {
    const itemId = await addItem(user.uid, newItem);
    newItem.id = itemId;
    setItems([...items, newItem]);
};

