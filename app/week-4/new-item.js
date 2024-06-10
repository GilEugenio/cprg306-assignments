
'use client';

import { useState } from 'react';

const NewItem = () => {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState('produce');

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = { name, quantity, category };
        console.log(item);
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
        setName('');
        setQuantity(1);
        setCategory('produce');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block mb-1 font-bold" htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>

            <div>
                <label className="block mb-1 font-bold" htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    id="quantity"
                    min="1"
                    max="99"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    required
                    className="w-full px-2 py-1 border rounded"
                />
            </div>

            <div>
                <label className="block mb-1 font-bold" htmlFor="category">Category</label>
                <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    className="w-full px-2 py-1 border rounded"
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen">Frozen Foods</option>
                    <option value="canned">Canned Goods</option>
                    <option value="dry">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">
                Add Item
            </button>
        </form>
    );
};

export default NewItem;