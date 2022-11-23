import './App.css';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { CreateTodoPage } from './pages/CreateTodoPage';
import { NewTodosPage } from './pages/NewTodosPage';
import { InProgressTodosPage } from './pages/InProgressTodosPage';
import { CompletedTodosPage } from './pages/CompletedTodosPage';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';

export const App = () => {

  // const [route, setRoute] = useState('home')

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path='/' element={<HomePage />} />
        <Route path='create' element={<CreateTodoPage />} />
        <Route path='new' element={<NewTodosPage />} />
        <Route path='inProgress' element={<InProgressTodosPage />} />
        <Route path='completed' element={<CompletedTodosPage />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}