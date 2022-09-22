import './App.css';

import { Route, Routes } from 'react-router-dom';

import ListComponent from './components/ListComponent';
import NewsPage from './page/NewsPage';
import EventComponent from './components/EventComponent';
import AxiosComponent from './components/AxiosComponent';
import PharmacyPage from './page/PharmacyPage';
import HospitalPage from './page/HospitalPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ListComponent />}></Route>
        <Route path="/event" element={<EventComponent />}></Route>
        <Route path="/axios" element={<AxiosComponent />}></Route>
        <Route path="/news" element={<NewsPage />}></Route>
        <Route path="/pharmacy" element={<PharmacyPage />}></Route>
        <Route path="/hospital" element={<HospitalPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
