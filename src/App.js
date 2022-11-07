import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router/Router';

function App() {
  return (
    <div className='container mx-auto'>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
