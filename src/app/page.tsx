import  Navbar  from './Navbar';
import Hero from './Hero'
import Features from './Features'
import Reviews from './Reviews';
import Footer from './Footer';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Reviews />
      <Footer />
    </div>
    
  )
}