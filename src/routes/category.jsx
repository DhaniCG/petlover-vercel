import { useEffect } from "react";
import { useParams, Form, NavLink, Link, useSubmit, useLoaderData } from "react-router-dom";
import { data } from "../data";
import "../styles/contents.css";

export function loader({ request }) { // get request parameter from the submitted Form
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const regex = new RegExp(q, "i");
    const animal = data.filter(animal => animal.name.match(regex));
    // console.log(q)
    return { animal, q };
}

export default function Animals() {
    const { animal, q } = useLoaderData()
    const { contentId } = useParams();
    const submit = useSubmit();
    const categories = ["All", "Cats", "Dogs", "Birds", "Fishes"];

    const animalFromLoader = contentId === 'all' ? animal : animal.filter(selected => selected.category === contentId);
    const currData = contentId === 'all' ? data : data.filter(selected => selected.category === contentId);
    const contents = q == null ? currData : animalFromLoader;
    // console.log(window.location)
    useEffect(() => {
        document.getElementById("search").value = q;
    }, [q])

    return (
        <>
            <header>
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
                <nav>
                    {categories.map((category, index) => {
                        // The slash (/) at the beginning of the "to" attribute is needed so it changes the path to that, instead of added after the already existing path
                        return <NavLink 
                                    to={`/category/${category.toLowerCase()}`} 
                                    className={({ isActive }) => isActive ? "active" : ""} 
                                    aria-label={`${category} category`}
                                    aria-current={category}
                                    key={`category${index}`}
                                    >
                                    {category}
                                </NavLink>
                    })}
                    {/* <Link to={id !== "all" ? "category/all" : "#"} className={id === "all" ? "active" : ""}>All</Link>
                    <Link to={id !== "cats" ? "category/cats" : "#"} className={id === "cats" ? "active" : ""}>Cats</Link>
                    <Link to={id !== "dogs" ? "category/dogs" : "#"} className={id === "dogs" ? "active" : ""}>Dogs</Link>
                    <Link to={id !== "birds" ? "category/birds" : "#"} className={id === "birds" ? "active" : ""}>Birds</Link>
                    <Link to={id !== "fishes" ? "category/fishes" : "#"} className={id === "fishes" ? "active" : ""}>Fishes</Link> */}
                </nav>
            </header>

            <main>
                <div id="premade-data">
                    {contents.map((animal, index) => {
                        return (
                            <div key={index} aria-label={`${animal.name} the ${animal.type}`}>
                                <img src={animal.pic ? animal.pic : "/image-not-found-icon.svg"} alt={animal.type} />
                                <div className="detail">
                                    <p>{animal.name}</p>
                                    <i>{animal.type}</i>
                                    <hr />
                                    <Link to={animal.id}>Info</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}