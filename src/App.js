import './App.css';
import Header from './components/Header/Header';
import Home_page from './components/Home_page/Home_page';
import Page_content from './components/Page_as/Page_content';
import Page_footer from './components/Page_footer/Page_footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Page_footer />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path="/" element={<Home_page />} />
            <Route path="/table" element={<Page_content />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
