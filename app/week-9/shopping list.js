

import { useUserAuth } from "../_utils/auth-context";

const ShoppingListPage = () => {
    const { user } = useUserAuth();

    if (!user) {
        return <p>You must be logged in to view this page.</p>;
    }

    return (
        <div>
            <h1>Shopping List</h1>
            {/* Your shopping list code here */}
        </div>
    );
};

export default ShoppingListPage;
