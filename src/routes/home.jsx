import "../styles/home.css"

import { Link } from "react-router-dom";
import { useState } from "react";
import { animalFoods } from "../data";

export default function Home() {

    const [foods, setFoods] = useState(animalFoods.filter(food => food.type === "Cat" && food.featured));
    
    const foodCategory = (e) => {
        
        if (e.currentTarget.id.match(/active/)) return;

        document.getElementById("active").setAttribute("id", "");
        e.target.setAttribute("id", "active");
        
        if (document.getElementById("active").innerHTML == "Cat") {
            
            document.getElementsByClassName("featured-food-contents")[0].id = "border-top-left-radius"; // give it an index of 0 to make it work... still don't know how it works behind the scene though
            
        } else if (document.getElementById("active").innerHTML == "Fish") {
            
            document.getElementsByClassName("featured-food-contents")[0].id = "border-top-right-radius";
            
        } else {

            document.getElementsByClassName("featured-food-contents")[0].id = "border-radius";
            
        }

        setFoods(animalFoods.filter(food => food.type === e.target.innerHTML && food.featured));
    }

    return (
        <>
            <section className="banner">
                <nav>
                    <ul>
                        <li>
                            <Link to={''}><img src="/logo.svg" alt="petlover-logo" className="petlover-logo" /></Link>
                        </li>
                        <li className="dropdown-adopt">
                            <button id="" className="dropdown-nav-btn adopt-btn">
                                Adopt a Pet<img src="/nav-arrow.svg" alt="" />
                            </button>
                            <div className="adopt content">
                                <Link to={`category/all/`}>All Animals</Link>
                                <Link to={`category/cats/`}>Cats</Link>
                                <Link to={'category/dogs'}>Dogs</Link>
                                <Link to={'category/birds'}>Birds</Link>
                                <Link to={'category/fishes'}>Fishes</Link>
                            </div>
                        </li>
                        <li className="dropdown-food">
                            <button id="" className="dropdown-nav-btn pet-foods-button">
                                Pet Foods<img src="/nav-arrow.svg" alt="petlover-logo" />
                            </button>
                            <div className="pet-foods content">
                                <Link to={'foods/all'}>For All Pets</Link>
                                <Link to={'foods/cats'}>For Cats</Link>
                                <Link to={'foods/dogs'}>For Dogs</Link>
                                <Link to={'foods/birds'}>For Birds</Link>
                                <Link to={'foods/fishes'}>For Fishes</Link>
                            </div>
                        </li>
                        <li>
                            <Link to={''}>Services</Link>
                        </li>
                        <li>
                            <Link to={''}>Contact</Link>
                        </li>
                        <li>
                            <Link to={''}>About</Link>
                        </li>
                    </ul>
                </nav>
                <div className="slogan">
                    <p id="slog">Giving our pets <span>Love</span></p>
                    <p className="bottom">Is the way make our life <span>Happy</span></p>
                </div>
            </section>

            <section className="pet-categories">
                <h3>Choose Our Pet Categories</h3>
                <hr />
                <div className="category-btns">
                    <Link to={"category/cats"} className="category-btn cats">
                        <img src="/Categories/cat-icon.png" alt="cats" />
                        <p>Cats</p>
                    </Link>

                    <Link to={"category/dogs"} className="category-btn dogs">
                        <img src="/Categories/dog-icon.png" alt="dogs" />
                        <p>Dogs</p>
                    </Link>

                    <Link to={"category/birds"} className="category-btn birds">
                        <img src="/Categories/bird-icon.png" alt="birds" />
                        <p>Birds</p>
                    </Link>

                    <Link to={"category/fishes"} className="category-btn fishes">
                        <img src="/Categories/fish-icon.png" alt="fishes" />
                        <p>Fishes</p>
                    </Link>
                </div>
            </section>

            <section className="buy-food-reason">
                <img src="/PetFoods/pet-food-preview.jpg" alt="pet-foods-on-bowls" className="preview-img" />

                <div className="why">
                    <h3>Why buy <span>pet foods</span> from us?</h3>
                    <div className="reasons">
                        <ul>
                            <li>
                                <img src="/ReasonsToBuy/price-icon.png" alt="price-icon" />
                                <p>Cheaper Prices</p>
                            </li>
                            <li>
                                <img src="/ReasonsToBuy/quality-icon.png" alt="quality-icon" />
                                <p>Best Quality Guarantee</p>
                            </li>
                            <li>
                                <img src="/ReasonsToBuy/free-shipping-icon.png" alt="free-shipping-icon" />
                                <p>Free Shipping</p>
                            </li>
                            <li>
                                <img src="/ReasonsToBuy/check-mark-icon.png" alt="check-mark-icon" />
                                <p>So Many Choices</p>
                            </li>
                        </ul>
                        <Link to={'foods/all'}>
                            Browse Pet Foods <img src="/btn-arrow.svg" alt="browse-more-pet-foods" />
                        </Link>
                    </div>
                </div>
            </section>

            <section className="featured-foods pc-mode">
                <h3>Check some of our <span>best selling</span> pet foods</h3>

                <div className="featured-foods-content">
                    <div className="food-sections">
                        <div className="btns">
                            <button onClick={foodCategory} id="active">Cat</button>
                            <button onClick={foodCategory}>Dog</button>
                            <button onClick={foodCategory}>Bird</button>
                            <button onClick={foodCategory}>Fish</button>
                        </div>

                        <div id="border-top-left-radius" className="featured-food-contents">
                            <ul>
                                {foods.map((option, index) => {
                                    return <li key={index}>
                                        <img src={option.pic} alt={`${option.name} with ${option.flavour} flavour`} />
                                        <hr />
                                        <p>{option.name}</p>
                                        <i>{option.flavour}</i>
                                        <div className="interaction-btns">
                                            <Link>$</Link>
                                            <div className="divider"></div>
                                            <Link><img src="/PetFoods/cart-icon.svg" alt="add-to-cart-icon" className="cart" /></Link>
                                        </div>
                                    </li>
                                })}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}