import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);
    // there is a code that says "error.statusText", it will return a string of wahat kind of error currently thrown, such as "Not Found" when the page is not existed, etc.
  return (
    <div id="error-page">
        <img src="/error-icon.svg" alt="sad-face" />
        <h1>Uh Oh...</h1>
        <p>Looks like there's an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to={"/"}>&#60; Back To Home Page</Link>
    </div>
  );
}