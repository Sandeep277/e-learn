import './App.css';
import Navbar from './components/navbar/Navbar';
import Blogs from './pages/blogsAndNews/Blogs';
import DownloadApps from './pages/downloadApp/DownloadApps';
import Download from './pages/downloads/Download';
import FeaturedCourse from './pages/featuredCoursePage/FeaturedCourse';
import Footer from './pages/footer/Footer';
import Hero from './pages/hero/Hero';
import Hero2 from './pages/hero2/Hero2';
import Hero3 from './pages/hero3/Hero3';
import Testimonials from './pages/testimonials/Testimonials';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="home">
        <Hero />
        <Download />
      </div>
      <div id="features">
        <Hero2 />
      </div>
      <div id="how-it-works">
        <Hero3 />
        <FeaturedCourse />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="blog">
        <Blogs />
        <DownloadApps />
      </div>
      <Footer />
    </div>
  );
}


export default App;
