import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <div className="nav-area">
                <h1>Redneck Feed</h1> 
                <h2>Grain delivered within 2 business days!</h2>               
                <Navbar />
            </div>
        </header>
    );
};

export default Header;