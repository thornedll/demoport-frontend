import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  const appRoutes = routes.map((e) => (
    <Route path={e.path} element={e.element} key={e.name} />
  ));
  return (
    <Router>
      <Routes>{appRoutes}</Routes>
    </Router>
  );
}

export default App;
