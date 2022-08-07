import React, { useState } from "react";

const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState("");

    const handleInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2) {
            // setCategories(cats => [inputValue, ...cats]);
            setInputValue("");
            onNewCategory(inputValue.trim().toLocaleLowerCase());
        }else{
            alert("El nombre de la categoria debe tener al menos 3 caracteres");
        }
    }

    return (
        <>
           <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a category"
                    value={inputValue}
                    onChange={handleInputChange}
                />
           </form>
        </>
    )
}

export default AddCategory;