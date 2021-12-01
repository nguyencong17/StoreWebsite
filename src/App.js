import 'antd/dist/antd.css';
import { Route } from 'react-router-dom';
import './App.css';
import HomeFeature from './features/Home/Home.jsx';
import Footer from './components/Footer/Footer.jsx';
import Header from './components/Header';
import AboutFeature from './features/About/About.jsx';
import BlogFeature from './features/Blog/Blog.jsx';
import ContactFeature from './features/Contact/Contact.jsx';
import CounterDemoRedux from './features/Counter_DemoRedux';
import FaqFeature from './features/Faq/Faq.jsx';
import WeserviceFeature from './features/WeService/Weservice.jsx';
import ProductFeature from './features/Product';
import AlbumFeatures from './features/Song';
import TodoFeatures from './features/Todo';
import CartFeature from './features/Cart/CartFeature.jsx';
import CarouselContainer from './components/Carousel/Carousel.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Header/>
      {/* Nav Link */}
      {/* <p><Link to="/quantity">Quantity</Link></p>
      <p><Link to="/adminhome">Admin</Link></p>
      <p><Link to="/counterRedux">CounterRedux</Link></p> */}
      {/* Route */}
      <Route path="/todo" component={TodoFeatures} />
      <Route path="/album" component={AlbumFeatures} />
      <Route path="/counterRedux" component={CounterDemoRedux} />

      <Route path="/" exact component={HomeFeature} />
      <Route path="/products" component={ProductFeature} />
      <Route path="/blogs" component={BlogFeature} />
      <Route path="/about" component={AboutFeature} />
      <Route path="/weservice" component={WeserviceFeature} />
      <Route path="/faq" component={FaqFeature} />
      <Route path="/contact" component={ContactFeature} />
      <Route path="/cart" component={CartFeature} />
      <Route path="/carousel" component={CarouselContainer} />
      <Footer/>
    </div>
  );
}

export default App;
