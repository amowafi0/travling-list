import {useState} from "react";
import Logo from "./logo";
import Form from "./form"
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
    const [items, setItems] = useState([])

    function handleItems(item) {
        setItems(items => [...items, item])
    }

    function handleDeleteItem(id) {
        setItems(items => items.filter(item => item.id !== id))
    }

    function handleToggleItem(id) {
        setItems((items) => items.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
    }

    function handleClearLIst() {
        const comfirmed = window.confirm('Are you sure you want to delete this item?');
        if (comfirmed)
            setItems([])
    }

    return <div className="App">
        <Logo/>
        <Form onAddItem={handleItems}/>
        <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem}
                     onClearLIst={handleClearLIst}/>
        <Stats items={items}/>

    </div>
}

