import './App.css';
import { Route, Routes } from 'react-router-dom';
import TopNavBar from './components/TopNavBar.js'
import Profile from './pages/Profile.js'
import SearchPage from './pages/SearchPage.js'
import Post from './pages/Post.js'
import Saved from './pages/Saved.js'
import Settings from './pages/Settings.js'
import Cart from './pages/Cart.js'
import DetailsId from './pages/DetailsId.js'
import Details from './pages/Details.js'
import NotFound from './pages/NotFound.js'

function App() {
  return (

    <div className="App-header">
      <div className="App">
        <Routes>
          <Route element={<TopNavBar />}>
          <Route path ="/" element={<SearchPage />} />
          <Route path ="/profile" element={<Profile />} />
          <Route path ="/search" element={<SearchPage />} />
          <Route path ="/post" element={<Post />} />
          <Route path ="/saved" element={<Saved />} />
          <Route path ="/settings" element={<Settings />} />
          <Route path ="/cart" element={<Cart />} />
          <Route path ="/details">
            <Route index element={<Details />} />
            <Route path =":id" element={<DetailsId />} />
          </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
