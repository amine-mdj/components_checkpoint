import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto.js';
import FullName from './components/profile/FullName.js';
import Adress from './components/profile/Adress.js';

function App() {
  return (
    <div className="my_bucket">
    <FullName/>
    <Adress/>
    <ProfilePhoto/>
    </div>
  );
}

export default App;
