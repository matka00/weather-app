import './App.css';
import Search from './components/Search/Search';

function App() {

  const handleOnSearchChange = (searchData) => {}
  
  return (
    <div className="App">
      <Search onSearchChange={handleOnSearchChange}/>
    </div>
  );
}

export default App;
