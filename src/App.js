import logo from "./logo.png";
import Dictionary from "./Dictionary";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <Dictionary />
        <footer className="App-footer">Coded by Aigerim Adrysheva</footer>
      </div>
    </div>
  );
}

export default App;
