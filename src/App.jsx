
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home"
import Contact from "./Routes/Contact"
import Detail from "./Routes/Detail"
import Favs from "./Routes/Favs"
import { Route, Routes } from "react-router-dom";
import { useContextGlobal } from "./Components/utils/global.context";



function App() {

  const { state } = useContextGlobal()

  return (
    <div className={`${state.darkTheme ? 'darkTheme' : 'ligthTeme'}`}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favs" element={<Favs />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
