import { useState } from "react"
import { AddCategory, GitGrid } from "./components"


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Deamon Slayer'])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            {/* Titulo */}
            <h1 className="category-text">GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Listado de Gif */}

            {categories.map(category => {
                return (
                    < GitGrid key={category} category={category} />
                )
            })
            }


            {/* Gif Item */}
        </>
    )
}
