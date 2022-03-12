import Main from "../routes/Main";
import {HashRouter as Router, Route, Routes} from "react-router-dom"

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path = "/" element={<Main />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;