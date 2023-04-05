import { BrowserRouter, Route, Routes } from 'react-router-dom';
import nav from './components/feature/nav'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' Component={nav} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;