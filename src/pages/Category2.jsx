import React, { useEffect, useState } from 'react';

const localImages = [
    "special-dishes-1.png",
    "special-dishes-2.jpg",
    "special-dishes-3.jpg",
];

const descriptions = Array(3).fill("Lorem ipsum dolor sit,");
const names = [
    "Double mac burger",
    "Pasta",
    "Beef cheese burger",
];
const prices = [
    "$15.00", "$23.99", "$13.80"
];
export default function Category2() {
    const [recipes, setRecipes] = useState([]);
    
        useEffect(() => {
            fetch('https://dummyjson.com/recipes')
                .then(res => res.json())
                .then(data => {
                    const sliced = data.recipes.slice(0, 3).map((recipe, index) => ({
                        ...recipe,
                        localImage: localImages[index],
                        name: names[index],
                        description: descriptions[index],
                        price: prices[index],
                    }));
                    setRecipes(sliced);
                })
                .catch(err => console.error("Failed to fetch:", err));
        }, []);
    return (
        <div className="category2 row" id='category2'>
            {recipes.map((item, index) => (
                <div className="categ col-10 col-md-5 col-lg-3 " key={item.id || index}>
                    <img className="card-img-top" src={item.localImage} alt={item.name} />
                    <div className="item-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href='' className="card-title">{item.price}</a>
                    </div>
                </div>
            ))}
        </div>
    )
}
