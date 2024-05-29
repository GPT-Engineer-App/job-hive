import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx";
import SearchJobs from "./pages/SearchJobs.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/post-job" element={<PostJob />} />
        <Route exact path="/search-jobs" element={<SearchJobs />} />
      </Routes>
    </Router>
  );
}

export default App;