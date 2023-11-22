import "./App.css";
import { Toaster } from 'react-hot-toast';
import Home from "./pages/Home";

function App() {
 
  return (
    <div>
      <Home/>
      <Toaster
        toastOptions={{
          duration: 5000,
        }}
        position='top-right'
        containerClassName='z-[10000000!important]'
      />
    </div>
  );
}

export default App;
