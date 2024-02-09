// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "./App.css"
import Categories from "./Components/Header/Categories/Categories.jsx"
import Header from "./Components/Header/Header.jsx"
import Offcanvas from "./Components/Header/Offcanvas/Offcanvas.jsx"
import TopHeader from "./Components/Header/TopHeader/TopHeader.jsx"

const App = () => {
  return (
    <>
      <TopHeader />
      <Header />
      {/* <Categories /> */}
      {/* <Offcanvas /> */}
    </>
  )
}

export default App