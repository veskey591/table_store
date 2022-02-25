import './App.css';
import Header from './components/Header/Header';
import Home_page from './components/Home_page/Home_page';
import Page_content from './components/Page_as/Page_content';
import Page_footer from './components/Page_footer/Page_footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Page1 from './components/Page_as/Pages/Page1/Page1';
import Page2 from './components/Page_as/Pages/Page2/Page2';
import Page3 from './components/Page_as/Pages/Page3/Page3';
import Page4 from './components/Page_as/Pages/Page4/Page4';
import Page5 from './components/Page_as/Pages/Page5/Page5';
import Page6 from './components/Page_as/Pages/Page6/Page1';

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
            <Route path="/table/1" element={<Page1 />} />
            <Route path="/table/2" element={<Page2 />} />
            <Route path="/table/3" element={<Page3 />} />
            <Route path="/table/4" element={<Page4 />} />
            <Route path="/table/5" element={<Page5 />} />
            <Route path="/table/6" element={<Page6 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}


export default App;
