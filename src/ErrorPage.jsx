import { Button } from "react-bootstrap";
import { Link, Navigate, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
 
  return (
    <div id="error-page" className="text-center mt-5">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
        
      </p>
    </div>
  );
}