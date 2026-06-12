import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import TutorPage from "./pages/FindTutor";
import HomePage from "./pages/HomePage";

// export default function AppPage() {
//   return (
//     <div className="app">
//       <h1> Welcome to TutorWeb3 </h1>
//     </div>
//   );
// }

export default function MainAppPage() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"> Home</Link>
        <Link to="/tutor"> Tutor </Link>
        <Link to="/resources"> Resources</Link>
      </nav>

      <Routes>
        <Route path="/tutor" element={<TutorPage />} />
        <Route path="/about" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}