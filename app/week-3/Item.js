import React from 'react';


const Item = ({ name, quantity, category }) => {

    return (
        <li className="mb-4 last:mb-0">
            <div className="max-w-[calc(50%-2rem)] bg-cyan-800 border p-2 border-cyan-800">
                <div className="font-medium text-white-lg">{name}</div>
                <div className="text-white-800">
                    Buy {quantity} in {category}</div>
            </div>
        </li>
    );
};

export default Item;