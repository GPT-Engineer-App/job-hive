import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx";
import SearchJobs from "./pages/SearchJobs.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const [jobs, setJobs] = useState([]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/post-job" element={<PostJob addJob={addJob} />} />
        <Route exact path="/search-jobs" element={<SearchJobs jobs={jobs} />} />
      </Routes>
    </Router>
  );
}

export default App;