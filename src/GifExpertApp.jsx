import { Fragment, useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {

        if ( categories.includes(newCategory) )return;

        //setCategories( ['Valorant',...categories] )
        setCategories([newCategory, ...categories]);
        //setCategories (cat => [...cat,'Valorant']);
    }


    //console.log(categories);

    return(
        <Fragment>
            {/*titulo */}
                <h1>GifExpertApp</h1>
            {/*INPUT */}
                <AddCategory //setCategories={ setCategories }
                    onNewCategory = {(value) => onAddCategory(value)}
                />

            {/* Listado de Gif*/}
            
            
            {
                categories.map( (category) => (
                    <GifGrid 
                        key = { category } 
                        category = { category }
                    />
                ))
            }
            

                {/* Gif Item*/}
        </Fragment>
    )
}