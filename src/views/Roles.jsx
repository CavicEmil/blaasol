import { Outlet } from 'react-router-dom';

export default function Roles() {
  return (
    <div className="min-h-screen bg-main-bgcolor p-4">
      <Outlet />  
    </div>
  );
}