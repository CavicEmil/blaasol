import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

export default function Layout() {
    const location = useLocation();
    
    return (
        <div className="flex flex-col min-h-screen bg-main-bgcolor">
            { location.pathname === '/' ? <Header /> : <AppHeader />}
            <main className="grow "> 
                <Outlet />
            </main>
            { location.pathname === '/' ? <Footer /> : <AppFooter />}
        </div>
    );
}