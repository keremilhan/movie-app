import './App.css';
import AppRouter from './components/router/AppRouter';
import { Toaster } from "react-hot-toast";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './firebase';


function App() {
  initializeApp(firebaseConfig)
  return (
    <div>
      <Toaster />
      <AppRouter />
    </div>
  );
}

export default App;
