

import React from 'react';

const Item = ({ item, onSelect }) => (
    <li onClick={() => onSelect(item)}>
        {item.name} ({item.quantity}) - {item.category}
    </li>
);

export default Item;
