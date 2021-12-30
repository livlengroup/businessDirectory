import DealsContainer from './localDeals/DealsContainer'
import Context from './context/Context';

function App() {
  return (
    <div className="App">
      <Context>
      <DealsContainer />
      </Context>
    </div>
  );
}

export default App;
