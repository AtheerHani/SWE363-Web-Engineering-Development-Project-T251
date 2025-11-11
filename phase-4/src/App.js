import "./App.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Signup from "./signup/Signup.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
