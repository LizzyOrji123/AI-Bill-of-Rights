import Carousel from './components/Carousel';
import slides from './data/slides.js';

function App() {
  return (
    <div>
      <h1>Slides Carousel</h1>
      <Carousel slides={slides} />
    </div>
  );
}

export default App;

