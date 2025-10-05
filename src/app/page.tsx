"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingOverlay from '@/components/navigation/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import FooterLogo from '@/components/footer/FooterLogo';

cethonst navItems = [
  { name: 'Hero', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'How To Buy', id: 'how-to-buy' },
  { name: 'Tokenomics', id: 'tokenomics' },
  { name: 'Footer', id: 'footer' },
];

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" className="sticky top-0 z-10">
        <NavbarLayoutFloatingOverlay
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={40}
          navItems={navItems}
          buttonText="Get Started"
          onButtonClick={() => alert('Get Started clicked!')}
        />
      </div>
      <div id="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to Xeven"
          subtitle="Yor one-stop solution for SaaS "
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
          onPrimaryButtonClick={() => alert('Get Started!')}
          onSecondaryButtonClick={() => alert('Learn More!')}
        />
      </div>
      <div id="about" className="scroll-mt-24">
        <SocialsAbout
          title="About Xeven"
          descriptions={["HAHAHHAHAHHAHAHA", "HEuhiewhfihweifje"]}
        />
      </div>
      <div id="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D
          title="How to Buy"
          steps={[
            { title: 'Step 1', description: 'BLAHHHHHHHHHHHHHHHHHHHHHHHHHH', image: '/images/placeholder1.avif', position: 'left', isCenter: false },
            { title: 'Step 2', description: 'Choose your plan', image: '/images/placeholder2.avif', position: 'center', isCenter: true },
            { title: 'Step 3', description: 'Make payment to start using', image: '/images/placeholder3.avif', position: 'right', isCenter: false },
          ]}
        />
      </div>
      <div id="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics"
          description="Our tokenomics provide transparency and assurance to our community."
          cardItems={[
            { id: 1, title: 'Total Supply', description: '1,000,000' },
            { id: 2, title: 'Market Cap', description: '$10,000,000' },
            { id: 3, title: 'Liquidity', description: '80%' },
          ]}
        />
      </div>
      <div id="footer" className="scroll-mt-24">
        <FooterLogo
          logoSrc="/images/logo.svg"
          logoAlt="Xeven logo"
          logoText="Xeven"
          className="text-center"
          svgClassName="text-6xl"
        />
      </div>
    </SiteThemeProvider>
  );
}