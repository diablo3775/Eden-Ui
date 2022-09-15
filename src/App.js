import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EdenThree from './pages/Edenpage3/EdenThree';
import EdenFour from './pages/Edenpage4/EdenFour';
import EdenTwo from './pages/Edenpage2/EdenTwo';
import Eden from './pages/Edenpage1/Eden';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route  path="/" exact element={<Eden />} />
      <Route  path="/eden2" exact element={<EdenTwo />} />
      <Route  path="/eden3" exact element={<EdenThree />} />
      <Route  path="/eden4" exact element={<EdenFour />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
