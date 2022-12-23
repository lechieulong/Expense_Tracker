import "./App.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import SideBar from './components/sideBar/SideBar'
import Home from './pages/Home/Home'
import Note from './pages/Note/Note'
import Statistic from './pages/Statistic/Statistic'
import History from './pages/History/History'

import NavHeader from './components/NavHeader/NavHeader'

import { useGeneralContext } from "./context/GeneralProvider";
import DataProvider from "./context/DataProvider";


function App() {

  const {activeMenu} = useGeneralContext();

  return (
    <DataProvider>
    <div className="">
      <BrowserRouter>
        <div className="flex">
          {/* SideBar  */}
      
          {activeMenu ?  (<div className="w-72 fixed z-50 bg-slate-100">
              <SideBar/>
          </div>) : ( <div className="w-0 bg-slate-100">
              <SideBar/>
          </div> )}
       
          {/* Header and page  */}
          <div className={
              activeMenu
                ? "md:ml-72 w-full  "
                : " w-full   "
            }>
            {/* Header navigation  */}
            <div>
                <NavHeader />
            </div>
            {/* pages  */}
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/noting" element={<Note />} />
                <Route path="/statistic" element={<Statistic />} />
                <Route path="/history" element={<History />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
    </DataProvider>
  );
}

export default App;
