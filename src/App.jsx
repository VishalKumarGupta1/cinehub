import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import styles from "./App.module.css";

const App = () => (
  <Router>
    <div className={styles.appContainer}>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={styles.nav}
      >
        <div className={styles.logo}>CineHub</div>
        <div className={styles.navRight}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Home
          </NavLink>
          <span className={styles.separator}>|</span>
          <NavLink
            to="/favorites"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            Favorites
          </NavLink>
        </div>
      </motion.nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  </Router>
);

export default App;
