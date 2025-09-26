import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProductsPage from './pages/ProductsPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import QuotePage from './pages/QuotePage';
import CareersPage from './pages/CareersPage';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="services/:slug" element={<ServicesPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="portfolio/:slug" element={<PortfolioPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:category" element={<ProductsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="quote" element={<QuotePage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="careers/:slug" element={<CareersPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
