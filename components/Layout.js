import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (

        <div className="content">
            < Navbar />
            {children}
            <div className="footerDiv">
                <Footer />
            </div>
        </div>

    );
}

export default Layout;