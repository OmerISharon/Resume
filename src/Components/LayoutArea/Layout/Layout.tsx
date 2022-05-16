 import Header from '../Header/Header'
 import Footer from '../Footer/Footer'
 import Menu from '../Menu/Menu'
 import Route from '../Routing/Routing'
 import Routing from "../../LayoutArea/Routing/Routing"
 import "./Layout.css"


function Layout(): JSX.Element {
    return (
        <div className="Layout">
            <header> <Header /> </header>

            <aside> <Menu /> </aside>
            
            <main> <Routing /> </main>

            <footer> <Footer /> </footer>

        </div>
    );
}

export default Layout;