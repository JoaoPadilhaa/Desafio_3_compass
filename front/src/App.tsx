import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home/home';
import Teste from './pages/teste/teste';
import Produtos from './pages/Produtos/Produtos';
// import Sobre from './pages/Sobre'; // se criar mais páginas

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
        <Route path="/produtos" element={<Produtos />} />
        {/* <Route path="/sobre" element={<Sobre />} /> */}
      </Routes>


      <nav>
        {/*<Link to="/">Home</Link>
        //<Link to="/teste">Teste</Link>
        <Link to="/produtos">Produtos</Link>
        {/* <Link to="/sobre">Sobre</Link> */}
      </nav>



    </BrowserRouter>
  );
}

export default App;