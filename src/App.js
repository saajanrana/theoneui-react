import {BrowserRouter as Router, Routes , Route} from 'react-router-dom'
import Header from './comoponents/Header';
import Home from './comoponents/Home.jsx';
import Footer from './comoponents/Footer.jsx';
import Contact from './comoponents/Contact.jsx';
import Services from './comoponents/Services.jsx';
import './styles/App.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/media.scss';



function App() {
  return (
     <Router>
      <Header />
<Routes>
<Route  path="/" element={<Home />}  />
<Route path='/contact' element={<Contact/>}/>
<Route path='/services' element={<Services/>}/>
</Routes>
<Footer />
    </Router> );
}

export default App;
