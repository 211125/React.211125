import '../assets/stylesheets/App.css';
import { Routes, Route} from "react-router-dom";
import Inicio from "./Inicio";
import Duenos from "../pages/Duenos";
import Citas from "../pages/Citas";
import Mascotas from "../pages/Mascotas";
import VerCitas from "../pages/VerCitas";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/duenos" element={<Duenos />} />
                <Route path="/citas" element={<Citas />} />
                <Route path="/mascotas" element={<Mascotas />} />
                <Route path="/vercitas" element={<VerCitas />} />
            </Routes>
        </div>
    );
}

export default App;
