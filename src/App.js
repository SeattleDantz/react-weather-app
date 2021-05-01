import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          {" "}
          <a
            href="https://github.com/SeattleDantz/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open source
          </a>{" "}
          project by Tricia Brigham.
        </footer>
      </div>
    </div>
  );
}
