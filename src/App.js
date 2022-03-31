import Appbar from "./components/appbar/appbar";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import MainContent from "./components/maincontent/maincontent";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Appbar />
      <Navbar />
      <div className="container-fluid p-0 d-flex justify-content-center">
        <div className="grid_container">
          <Sidebar />
          <MainContent />
        </div>
      </div>
    </div>
  );
}

export default App;
