import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CommissionPage from './Pages/commission';

function App() {
  
  const paths = [
    { path: "/", component: <CommissionPage />,},
    { path: "/commission", component: <CommissionPage />,},
  ]

  return (
    <>
      {/* Main Routes */}
      <Router>
        <Routes>
          { paths && paths.map((x) => (<Route path={x.path} element={x.component} />)) }
        </Routes>
      </Router>
    </>
  );
}

export default App;
