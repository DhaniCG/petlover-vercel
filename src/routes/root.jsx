import { Outlet, Link } from "react-router-dom";
import "../styles/root.css";

export default function Root() {
    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <>
            <Outlet />
            <section id="footer">
                <div className="footer-contents">
                    <div className="subscription">
                        <Link to={"/"}  onClick={scrollToTop}>
                            <img src="/logo.svg" alt="petlover-logo" className="petlover-logo" />
                        </Link>
                        <p>Subscribe to our news letter</p>

                        <form action="post">
                            <input type="text" name="email" id="email" placeholder="Your Email" />
                            <button type="submit">SUBSCRIBE</button>
                        </form>
                    </div>
                    <div className="website">
                        <div className="categories">
                            <h4>Pet Categories</h4>
                            <Link to={'category/cats'} onClick={scrollToTop}>Cats</Link>
                            <Link to={'category/dogs'} onClick={scrollToTop}>Dogs</Link>
                            <Link to={'category/birds'} onClick={scrollToTop}>Birds</Link>
                            <Link to={'category/fishes'} onClick={scrollToTop}>Fishes</Link>
                        </div>
                        <div id="contact">
                            <h4>Contact Us</h4>
                            <p>Boyle Heights<br />
                            Los Angeles, California<br />
                            United States</p>
                            <p>support@something.com</p>
                            <p>+1 234 567 8910</p>
                        </div>
                    </div>
                </div>
                <i>
                    This website was created using Vite + React and React Router Dom v6.4
                </i>
            </section>
        </>
    );
}