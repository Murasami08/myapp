import Header from './components/header/Header.jsx';
import Guide from './components/guide/Guide.jsx';
import Tour from './components/tour/Tour.jsx';
import Price from './components/price/Price.jsx';
import Blog from './components/blog/Blog.jsx';
import Feeling from './components/feeling/Feeling.jsx';
import Contacts from './components/contacts/Contacts.jsx';
import Footer from './components/footer/Footer.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Guide />
      <Tour />
      <Price />
      <Blog />
      <Feeling />
      <Contacts />
      <Footer />

    </div>
  );
}

export default App;
