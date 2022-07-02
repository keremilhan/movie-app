import './App.css';
import AppRouter from './components/router/AppRouter';
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <div>
      <Toaster />
      <AppRouter />
    </div>
  );
}

export default App;
