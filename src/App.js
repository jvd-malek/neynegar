import { useRoutes } from 'react-router-dom';
import routes from "./Routes/Routes";
import Header from './Components/Header/Header';
import Provider from './Contexts/context';
import { useEffect, useState } from 'react';
import Load from './Pages/Load';
import Footer from './Components/Footer/Footer';

function App() {
  const router = useRoutes(routes)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    window.addEventListener('load', () => setLoading(false))
    return window.removeEventListener('load', () => setLoading(false))
  }, [])

  return (
    <>
      {loading ? <Load /> :
        <Provider>
          <Header />
          {router}
          <Footer />
        </Provider>
      }
    </>
  );
}

export default App;
