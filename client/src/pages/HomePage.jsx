// HomePage.jsx

import Navbar from "../components/Navbar/Navbar";
import SubNavbar from "../components/Navbar/SubNavbar";
import HomeAd from "../components/HomeAd/HomeAd";
import HomeItems from "../components/HomeItems/HomeItems";

function HomePage() {
    return (
        <>
            <Navbar />
            <SubNavbar />
            <HomeAd />
            <HomeItems />
        </>
    )
}

export default HomePage;
