import { Route, Routes } from "react-router-dom";
import HomePage from "../components/HomePage";
import CheckerPage from "../components/CheckerPage";

const Routs = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/get-started" element={ <CheckerPage/> } />
        </Routes >
    );
}
export default Routs;