

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items, onItemSelect }) => {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        }
        if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
        <div>
            <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
                <button
                    onClick={() => setSortBy('name')}
                    style={{ backgroundColor: sortBy === 'name' ? 'green' : 'white' }}
                >
                    Sort by Name
                </button>
                <button
                    onClick={() => setSortBy('category')}
                    style={{ backgroundColor: sortBy === 'category' ? 'green' : 'white' }}
                >
                    Sort by Category
                </button>
            </div>
            <ul>
                {sortedItems.map(item => (
                    <Item
                        key={item.id}
                        item={item}
                        onSelect={onItemSelect}
                    />
                ))}
            </ul>
        </div>
    );
};

export default ItemList;

