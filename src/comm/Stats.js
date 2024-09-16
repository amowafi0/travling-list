export  default function Stats({items}) {
    const unmItems = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const presc = Math.round((numPacked / unmItems) * 100)
    return <footer className="stats">
        <em>
            you have {unmItems} items on your list , and you already packed {numPacked} ({presc}%)
        </em>
    </footer>
}