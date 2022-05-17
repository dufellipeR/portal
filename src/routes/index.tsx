import { Routes, Route, HashRouter } from 'react-router-dom';

import { Customers } from '../pages/Customers';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Queries } from '../pages/Queries';
import { SellOrders } from '../pages/SellOrders';


const AppRoutes: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sellOrders" element={<SellOrders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/queries" element={<Queries />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoutes;
