import React from 'react'
import { useEffect, useState } from 'react'
import '../css/FoodOrder.css'
import { getCategory, getFoodItems } from '../../services/api'
import ItemCard from '../FoodOrder-Components/ItemCard'

const MainMenu = () => {

    const [category, setCategory] = useState([]);
    const [foodItem, setFoodItem] = useState([]);
    const [quantity, setQuantity] = useState(0);
    const [cart, setCart] = useState({});

    const handleClick = (item) => {
    }

    const addItem = (foodItem, quantity) => {
        // console.log(foodItem)
        // console.log(qty)
        setCart({quantity: quantity})
        console.log(cart)
    }

    const onValueChange = (e) => {
        setQuantity(e.target.value)
        console.log(quantity)
    }

    const getAllCategoryName = async () => {
        let allCategory = await getCategory();
        setCategory(allCategory.data);
    }

    const getAllFoodItems = async () => {
        let allFoodItems = await getFoodItems();
        setFoodItem(allFoodItems.data);
    }

    useEffect(() => {
        getAllCategoryName();
        getAllFoodItems();
    }, []);


    return (
        <div>
            <div>
                {/* style={{ backgroundColor: '#FF3C6A', color: 'white'}} */}
                <main id="main">
                    <div className="container py-4 py-sm-5 mx-0 mx-sm-auto">

                        <div className="d-flex mt-5">
                            <p style={{ fontSize: 30 }}><b>Menu</b></p>

                        </div>


                        <div className="row">

                            {
                                foodItem.map(item => (
                                    <ItemCard key={item.id} item={item} handleClick={handleClick} />
                                ))
                            }

                            
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default MainMenu
