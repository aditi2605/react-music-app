import React from "react";
import { NavLink, useNavigate, Outlet } from "react-router-dom";


const PageWrapper = () => {

    const navigator = useNavigate();

    const handleBack = () => {
        navigator(-1);
    }


return <>
<header>
<nav> <NavLink to='/'>HomePage</NavLink>
<NavLink to='/artists'>ArtistPage</NavLink>
<NavLink to='/albums'>AlbumPage</NavLink>
</nav>
</header>
<main><Outlet /></main>
<footer><button onClick={handleBack}>Back</button></footer>
</>
}

export default PageWrapper;