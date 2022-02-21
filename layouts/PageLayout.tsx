import Seo, { Metadata } from './components/Seo';
import Banner from './components/Banner';
import Header from './components/Header';
import Footer from './components/Footer';

interface PageLayoutProps {
  seo: Metadata;
}

const PageLayout: React.FC<PageLayoutProps> = ({ seo, children }) => {
  return (
    <>
      <Seo metadata={seo} />
      <div className="flex flex-col justify-between min-h-screen text-gray-800 bg-white">
        <div>
          <Banner />
          <Header />
          <main>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default PageLayout;
