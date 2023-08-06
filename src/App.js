import './App.css';
import RootLayout from './RootLayout';
import Cart from './component/Cart';
import Dashboard from './component/Dashboard';
import { createBrowserRouter,  createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
  ));
  
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
