import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import IntroSection from './components/IntroSection';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Hero />
      <IntroSection />
      <Footer />
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>My New Homepage</h1>
        {/* You can add more sections here as you build out your Day 2 tasks */}
      </div>
    </ThemeProvider>
  );
}

export default App;
