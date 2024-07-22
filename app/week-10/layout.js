

import { AuthContextProvider } from "./_utils/auth-context";
import { getFirestore } from "firebase/firestore";



const Layout = ({ children }) => {
    return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default Layout;
export const db = getFirestore(app);
