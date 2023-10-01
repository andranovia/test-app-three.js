import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider } from "./Context";
import Profile from "./components/Profile/Profile";

import AboutPage from './components/SlideShow/AboutPage';
import ParallaxAnimation from './components/Parallax-three/Parallax';
import CardPortofolio from './components/Card-Port/Card-Container-Portofolio';



function App() {

  return (
    <ThemeProvider>
    <Navbar />

    <Profile/>
    <ParallaxAnimation/>
    <CardPortofolio/>
    
    



    </ThemeProvider>
    
  );
}

export default App;
