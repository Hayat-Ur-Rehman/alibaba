import './App.css';
import Fourth from './components/Fourth';
import Header from './components/Header.jsx';
import Third from './components/Third.jsx';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import SwipeableTextMobileStepper from './components/SwipeableTextMobileStepper.jsx';

function App() {
  return (
    <div className="App">

      <Header />
      <SwipeableTextMobileStepper />


      <Third />


      <Fourth />

      <Fourth />
      <Fourth />
      <Fifth />


      <Sixth />

      <Seventh />

      

    </div>
  );
}

export default App;
