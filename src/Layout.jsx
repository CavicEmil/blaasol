import { Outlet, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Layout() {
    console.log('layout rendering correct')
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="grow"> 
                <Outlet />
            </main>
            <Footer />
        </div>
     )
}