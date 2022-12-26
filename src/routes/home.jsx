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

    const menu = (e) => {
        document.getElementsByClassName("phone-mode")[0].classList.toggle("nav-active");

        if (document.getElementById("menu-list").classList.contains("hidden")) {
            document.getElementById("menu-list").classList.toggle("hidden");
            document.getElementById("menu-list").classList.toggle("menu-transit");
        } else {
            setTimeout(() => {
                document.getElementById("menu-list").classList.toggle("hidden");
            }, 200);
        }

        document.querySelector("body").classList.toggle("hidden");

        e.currentTarget.classList.toggle("nav-inactive");
        e.currentTarget.classList.toggle("nav-active");

        window.scrollTo(0, 0);

        if (!document.getElementById("menu-list").classList.contains("menu-active")) {
            setTimeout(() => {
                document.getElementById("menu-list").classList.toggle("menu-transit");
                document.getElementById("menu-list").classList.toggle("menu-active");
            }, 0);

            if (document.getElementsByClassName("dropdown-active").length != 0) {
                
                document.querySelectorAll(".dropdown-active").forEach(
                    element => element.classList.remove("dropdown-active")
                );
            }

            return;
        }

        document.getElementById("menu-list").classList.toggle("menu-transit");
        document.getElementById("menu-list").classList.remove("menu-active");
        setTimeout(() => {
            document.getElementById("menu-list").classList.toggle("menu-transit");
        }, 200);
    }

    const dropdownActivation = (e) => {
        // store .target into a const variable, because event will be removed as soon as the event reaches the end part,
        // which will make the .target event becomes null in setTimeout()
        const currTarget = e.currentTarget; 
        
        if (!currTarget.classList.contains("dropdown-active")) {
            if (document.getElementsByClassName("dropdown-active").length != 0) {
                
                document.querySelectorAll(".dropdown-active").forEach(
                    element => element.classList.remove("dropdown-active")
                );
            }
        }
        
        // getElementsByClassName or getElementsByTagName returns array of classes or tags, that's why you need to specify the index
        // in order to make the .toggle works, in this case, index is set to 1 because pc-mode also have the same class
        
        currTarget.classList.toggle("dropdown-transit");
        currTarget.parentElement.getElementsByTagName("div")[0].classList.toggle("dropdown-transit");
        
        setTimeout(() => {
            currTarget.classList.toggle("dropdown-active");
            currTarget.parentElement.getElementsByTagName("div")[0].classList.toggle("dropdown-active");
        }, 1);
    }

    const scrollToTop = () => window.scrollTo(0, 0)

    const bodyHiddenRemove = () => {
        document.querySelector("body").classList.remove("hidden");
    }

    return (
        <>
            <section className="banner">
                <nav className="pc-mode">
                    <ul>
                        <li>
                            <Link to={'/'} onClick={scrollToTop}><img src="/logo.svg" alt="petlover-logo" className="petlover-logo" /></Link>
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
                                Pet Foods<img src="/nav-arrow.svg" alt="" />
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
                <nav className="phone-mode">
                    <Link to={'/'} onClick={scrollToTop}><img src="/logo.svg" alt="petlover-logo" className="petlover-logo" /></Link>
                    <div className="hamburger nav-inactive" onClick={menu}>
                        <div className="hamburger-icon">
                            <div className="hamburger-line top"></div>
                            <div className="hamburger-line center"></div>
                            <div className="hamburger-line bottom"></div>
                        </div>
                    </div>
                    <ul id="menu-list" className="hidden">
                        <li>
                            <button className="sub-category adopt-btn" onClick={dropdownActivation}>
                                Adopt a Pet<img src="/nav-arrow.svg" alt="" />
                            </button>
                            <div id="adopt-a-pet" className="content">
                                <Link to={`category/all/`} onClick={bodyHiddenRemove}>All Animals</Link>
                                <Link to={`category/cats/`} onClick={bodyHiddenRemove}>Cats</Link>
                                <Link to={'category/dogs'} onClick={bodyHiddenRemove}>Dogs</Link>
                                <Link to={'category/birds'} onClick={bodyHiddenRemove}>Birds</Link>
                                <Link to={'category/fishes'} onClick={bodyHiddenRemove}>Fishes</Link>
                            </div>
                        </li>
                        <li>
                            <button className="sub-category pet-foods-button" onClick={dropdownActivation}>
                                Pet Foods<img src="/nav-arrow.svg" alt="" />
                            </button>
                            <div id="pet-foods" className="content">
                                <Link to={'foods/all'} onClick={bodyHiddenRemove}>For All Pets</Link>
                                <Link to={'foods/cats'} onClick={bodyHiddenRemove}>For Cats</Link>
                                <Link to={'foods/dogs'} onClick={bodyHiddenRemove}>For Dogs</Link>
                                <Link to={'foods/birds'} onClick={bodyHiddenRemove}>For Birds</Link>
                                <Link to={'foods/fishes'} onClick={bodyHiddenRemove}>For Fishes</Link>
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
                    <p>Giving our pets <span>Love</span></p>
                    <p className="bottom">Is the way make our life <span>Happy</span></p>
                </div>
            </section>

            <section className="pet-categories">
                <h3>Choose Our Pet Categories</h3>
                <hr />
                <div className="category-btns">
                    <Link to={"category/cats"} className="category-btn cats" onClick={scrollToTop}>
                        <img src="/Categories/cat-icon.png" alt="cats" />
                        <p>Cats</p>
                    </Link>

                    <Link to={"category/dogs"} className="category-btn dogs" onClick={scrollToTop}>
                        <img src="/Categories/dog-icon.png" alt="dogs" />
                        <p>Dogs</p>
                    </Link>

                    <Link to={"category/birds"} className="category-btn birds" onClick={scrollToTop}>
                        <img src="/Categories/bird-icon.png" alt="birds" />
                        <p>Birds</p>
                    </Link>

                    <Link to={"category/fishes"} className="category-btn fishes" onClick={scrollToTop}>
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
                        <Link to={'foods/all'} onClick={scrollToTop}>
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