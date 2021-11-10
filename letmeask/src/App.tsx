import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { NewRoom } from './components/NewRoom';
import { SignIn } from './components/SignIn';
import { Home } from "./pages/Home";

import { AuthContextProvider } from './contexts/AuthContext'

export function App() {

  return (
    <Router>
      <AuthContextProvider>
        <div id="homeWrapper">
          <Home />
          <main>
            <Routes>
              <Route path="/room/create" element={<NewRoom />} />
              <Route path="/" element={<SignIn />} />
            </Routes>
          </main>
        </div>
      </AuthContextProvider >
    </Router>
  );
}


