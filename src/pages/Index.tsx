import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ProductIntro from '@/components/ProductIntro';
import CoreFeatures from '@/components/CoreFeatures';
import IndustryPainPoints from '@/components/IndustryPainPoints';
import CustomerCases from '@/components/CustomerCases';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductIntro />
      <CoreFeatures />
      <IndustryPainPoints />
      <CustomerCases />
      <Footer />
    </div>
  );
};

export default Index;
