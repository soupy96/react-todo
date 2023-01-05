import React from 'react';
import { Routes, Route } from 'react-router-dom';

const MainApp = React.lazy(() => import('./pages/MainApp'));
const NoPage = React.lazy(() => import('./pages/NoPage'));

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainApp />}>
        <Route index element={<MainApp />} />
        <Route path='*' element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
