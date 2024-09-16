import {useState} from "react";
import Item from "./Item";

export default function PackingList({items, onDeleteItem, onToggleItem, onClearLIst}) {
    const [sortBy, setSortBy] = useState('input')
    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "discretion") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
        <div className="list">
            <ul>
                {sortedItems.map((item) => (
                    <Item item={item} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem}
                          key={item.id}/>
                ))}
            </ul>

            <div className='actions'>
                <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
                    <option value='input'>sort by input order</option>
                    <option value='discretion'>sort by discretion</option>
                    <option value='packed'>sort by packed status</option>
                </select>
                <button onClick={onClearLIst}>clear list</button>
            </div>
        </div>
    );
}
