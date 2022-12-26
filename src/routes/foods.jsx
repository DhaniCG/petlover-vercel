import { useEffect } from "react";
import { useParams, NavLink, Link, useSubmit, Form, useLoaderData, useNavigate } from "react-router-dom";
import { animalFoods } from "../data";
import "../styles/contents.css";

export function loader({ request }) { // get request parameter from the submitted Form
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const regex = new RegExp(q, "i");
    const foods = animalFoods.filter(food => food.name.match(regex));
    return { foods, q };
}

export default function Foods() {
    const { foods, q } = useLoaderData() // this data taken from the "loader" function
    const { contentId } = useParams();
    const submit = useSubmit();
    const categories = ["All", "Cats", "Dogs", "Birds", "Fishes"];

    const foodsFromLoader = contentId === 'all' ? foods : foods.filter(selected => selected.category === contentId);
    const currData = contentId === 'all' ? animalFoods : animalFoods.filter(selected => selected.category === contentId);
    const contents = q == null ? currData : foodsFromLoader;

    useEffect(() => {
        document.getElementById("search").value = q;
    }, [q])

    return (
        <>
            <header>
                <Link to={"/"}><img src="/logo-white.svg" alt="Petlover" id="logo" /></Link>
                <Form role="search">
                    <input 
                        type="search" 
                        name="q" 
                        id="search" 
                        aria-label="Find pet foods"
                        placeholder="Search" 
                        defaultValue={q}
                        onChange={(e) => {
                            const isFirstSearch = q == null;
                            submit(e.currentTarget.form, {replace: !isFirstSearch})
                        }}
                        />
                    <img src="/search-icon.svg" alt="" aria-hidden />
                </Form>
                <h1>{contentId.charAt(0).toUpperCase() + contentId.slice(1)}</h1>
                <div className="phone-mode">
                    <h1 className="">{contentId.charAt(0).toUpperCase() + contentId.slice(1)}<br/><img src="/btn-arrow.svg" alt="" /></h1>
                    <nav className="phone-tabs choices">
                        {categories.map((category, index) => {
                            // The slash (/) at the beginning of the "to" attribute is needed so it changes the path to that, instead of added after the already existing path
                            return <NavLink 
                                        to={`/foods/${category.toLowerCase()}`} 
                                        className={({ isActive }) => isActive ? "active" : ""} 
                                        aria-label={`${category} foods category`}
                                        aria-current={category}
                                        key={`foods${index}`}
                                        >
                                        {category}
                                    </NavLink>
                        })}
                    </nav>
                </div>
                <nav className="pc-tabs choices">
                    {categories.map((category, index) => {
                        return <NavLink 
                                    to={`/foods/${category.toLowerCase()}`} 
                                    className={({ isActive }) => isActive ? "active" : ""} 
                                    aria-label={`${category} foods category`}
                                    aria-current={category}
                                    key={`foods${index}`}
                                    >
                                    {category}
                                </NavLink>
                    })}
                </nav>
            </header>

            <main>
                <div id="premade-data">
                    {contents.map((food, index) => {
                        return (
                            <div key={index} aria-label={`${food.name}`}>
                                <img src={food.pic ? food.pic : "/image-not-found-icon.svg"} alt={food.type} />
                                <div className="detail">
                                    <p>{food.name}</p>
                                    <i>{food.type}</i>
                                    <hr />
                                    <Link to={food.id} onClick={() => window.scrollTo(0, 0)}>Info</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}