
import './App.css';
import {Route, Routes} from 'react-router-dom';

import { HomePage } from './components/HomePage';
import { ClientList } from './components/ClientList';
import { Credits } from './components/Credits';
import { Header } from './components/Header';
import { CreateClient } from './components/CreateClient';
import { ClientProvider } from './context/ClientContext';

function App() {

  return (
    //<AuthProvider >
    <ClientProvider>
      <div>
        < Header />
        <main>
          <Routes>
            <Route path='/' element={<HomePage />} />
            {/* <Route path='/credits' element={<Credits />} /> */}
            <Route path='/create' element={<CreateClient />} />
            <Route path='/clients' element={<ClientList />} />
          </Routes>
        </main>

      </div>
    </ClientProvider>
  //</AuthProvider>
  );
}

export default App;
