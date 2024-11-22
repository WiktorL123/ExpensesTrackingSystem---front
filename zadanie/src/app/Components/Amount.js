'use client';
import { FaTrash } from 'react-icons/fa';
import {FaPencilAlt} from 'react-icons/fa';


export default function Amount({ isHighlighted, id, title, amount, category, date, description, onRemove = f => f, onShow= f=>f, onEdit = f=>f }) {

    const formattedDate = date ? new Date(date).toLocaleDateString() : "";
    return (
        <section
            style={{
                padding: "10px",
                borderWidth: isHighlighted ? "1px" : "0",
                borderStyle: isHighlighted ? "solid" : "none",
                borderRadius: "5px",
                borderColor: isHighlighted ? "#ff0000" : "transparent"
            }}
        >
            <h1>{title}</h1>
            <button onClick={() => onRemove(id)}>
                <FaTrash />
            </button>
            <button onClick={() => onShow(amount)}> {}
                Pokaż szczegóły
            </button>
            <button onClick={onEdit}><FaPencilAlt/></button>
            <p>produkt z kategorii {category}, kwota wydana: {amount} zł, data: {formattedDate}</p>



        </section>
    );
}


