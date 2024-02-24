import Home from "./pages/Home";
import NewRecipe from "./pages/NewRecipe";
import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import ShowRecipe from "./pages/ShowRecipe";
import { RecipeProvider } from "./contexts/RecipeContext";

function App() {
  return (
    <div className="app">
      <nav className="nav">
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { textDecoration: "underline" } : {};
              }}
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { textDecoration: "underline" } : {};
              }}
              className="nav-link"
              to="/recipe/new"
            >
              Add Recipe
            </NavLink>
          </li>
        </ul>
      </nav>
      <RecipeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/new" element={<NewRecipe />} />
          <Route path="/recipe/:id" element={<ShowRecipe />} />
        </Routes>
      </RecipeProvider>
    </div>
  );
}

export default App;
