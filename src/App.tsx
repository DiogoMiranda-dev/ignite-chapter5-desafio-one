import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesProvider } from './contexts/MoviesContext';



export function App() {

  return (
    <MoviesProvider>
      <div className="home">
        <SideBar />
        <Content />
      </div>
    </MoviesProvider>
  )
}