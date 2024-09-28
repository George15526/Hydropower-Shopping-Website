// HomePage.jsx

import HomeAd from "../components/HomeAd/HomeAd";
import HomeItems from "../components/HomeItems/HomeItems";
import Navbar from "../components/Navbar/Navbar";
import Navbar_category from "../components/Navbar/Navbar_category";


function HomePage() {
    return (
        <>
            <Navbar />
            <Navbar_category />
            <HomeAd />
            <HomeItems />
        </>
    )
}

export default HomePage;
