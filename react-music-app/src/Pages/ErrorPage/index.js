import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return <>
    <h1>Error!</h1>
    <Link to= '/'>Go To HomePage</Link>
    </>
}

export default ErrorPage;