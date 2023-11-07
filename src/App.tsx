import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Pages';
import { Footer, Header } from './components/Index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;