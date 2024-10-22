import './App.css';
import Portfolio from './filter/Portfolio';
import { proects, filters } from './filter/data';
import Store from './layouts/Store';
import products from './layouts/data/products';

function App() {
  return (
      <div>
        <Portfolio proects={proects} filters={filters}/>
        <Store products={products}/>
      </div>
  );
}

export default App;
