import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Page";
import Blog from "./pages/Blog/Page";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:blog" element={<Blog />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
