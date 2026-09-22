import NavBar from "./components/NavBar";
import Categories from "./components/Categories";
import SalesImage from "./components/SalesImage";
import Recommended from "./components/Recommended";
import Topic from "./components/Topic";
import Popular from "./components/Popular";
import Footer from "./components/Footer";

function App(){
    return(
    <div>
    <NavBar></NavBar>
    <Categories></Categories>
    <SalesImage></SalesImage>
    <Recommended></Recommended>
    <Topic></Topic>
    <Popular></Popular>
    <Footer></Footer>
  </div>
    )
}
export default App;