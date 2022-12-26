import { useEffect } from "react";
import { useParams, Form, NavLink, Link, useSubmit, useLoaderData } from "react-router-dom";
import { data } from "../data";
import "../styles/contents.css";

export function loader({ request }) { // get request parameter from the submitted Form
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const regex = new RegExp(q, "i");
    const animal = data.filter(animal => animal.name.match(regex));
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
                        aria-label="Find pets"
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
                            // The slash (/) at the beginning of the "to" attribute is needed so it changes the path to that, instead of adding that path after the already existing path
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
                    </nav>
                </div>
                <nav className="pc-tabs choices">
                    {categories.map((category, index) => {
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
                                    <Link to={animal.id} onClick={() => window.scrollTo(0, 0)}>Info</Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </>
    );
}