import { Outlet } from "react-router-dom";
import Navbar from "./components/global/Navbar";
import Footer from './components/global/Footer';

const App = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-between">
      <Navbar/>

      <div className="flex-grow">
        <div className="container max-w-7xl mx-auto">
          <Outlet/>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default App;