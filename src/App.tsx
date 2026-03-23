import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import PapersPage from "./pages/PapersPage";
// import AIToolsPage from "./pages/AIToolsPage"; // AI Tools page removed

function App() {
  return (
    <ThemeProvider>
      <Router basename="/my-website">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/papers" element={<PapersPage />} />
          {/* <Route path="/ai-tools" element={<AIToolsPage />} /> AI Tools page removed */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
