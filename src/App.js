import './App.css';
import Carousel from './components/Carousel';
import { CarouselData } from './components/CarouselData';

function App() {
  return <Carousel slides={CarouselData} />;
}

export default App;
