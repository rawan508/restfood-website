
import React, { useEffect, useState } from 'react';

const localImages = [
    "special-dishes-1.png",
    "special-dishes-2.jpg",
    "special-dishes-3.jpg",
    "special-dishes-4.jpg",
    "special-dishes-5.png",
    "product-1.jpg",
    "product-2.jpg",
    "product-7.jpg",
];

const names = [
    "Double mac burger",
    "Pasta",
    "Beef cheese burger",
    "Grand italiano pizza",
    "Salad",
    "Double Cheese Pizza",
    "Seafood",
    "Lemonade",
];

const descriptions = Array(8).fill("Lorem ipsum dolor sit,");

const prices = [
    "$15.00", "$23.99", "$13.80", "$16.99",
    "$11.50", "$21.00", "$14.35", "$5.00"
];

export default function Category() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
            .then(res => res.json())
            .then(data => {
                const sliced = data.recipes.slice(0, 8).map((recipe, index) => ({
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
        <div className="category row">
            {recipes.map((item, index) => (
                <div className="categ col-10 col-md-5 col-lg-3 " key={item.id || index}>
                    <div className='car'>
                        <img className="card-img" src={item.localImage} alt={item.name} />
                    </div>
                    
                    <div className="item-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">{item.description}</p>
                        <a href='' className="card-title">{item.price}</a>
                    </div>
                </div>
            ))}
        </div>
    );

}
