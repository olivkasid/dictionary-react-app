import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="card"/>
        </main>
        <footer className="text-center">Coded by Lin Sid</footer>
      </div>
    </div>
  );
}

export default App;
