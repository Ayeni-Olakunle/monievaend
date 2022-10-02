import './App.css';
import Index from './components';
import Payment from './components/payment-service/payment';
import Transaction from './components/transaction/transaction';
import Beneficiary from './components/Beneficiary/beneficiary';
import Notification from './components/Notification/Notification';
import Setting from './components/setting/setting';
import Help from './components/Help/Help';
import Layout2 from './components/setting/Layouts/Layout2';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}>
          <Route path="payment">
            <Route index={true} element={<Payment />} />
          </Route>

          <Route path="transaction">
            <Route index={true} element={<Transaction />} />
          </Route>

          <Route path="beneficiary">
            <Route index={true} element={<Beneficiary />} />
          </Route>

          <Route path="notification">
            <Route index={true} element={<Notification />} />
          </Route>

          <Route path="setting">
            <Route index={true} element={<Setting />} />
            {/* <Route path="resetpassword">
              <Route index={true} element={<Layout2 />} />
            </Route> */}
          </Route>

          <Route path="/help">
            <Route index={true} element={<Help />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
