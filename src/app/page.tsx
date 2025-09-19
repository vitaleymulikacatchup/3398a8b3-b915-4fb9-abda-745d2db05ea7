"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import CtaAbout from '@/components/sections/layouts/about/CtaAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "futuristicAndOutOfBox", colorTemplate: 2, textAnimation: "slide" }}>
      <div id="nav" data-section="nav">
        <NavbarStyleApple 
          navItems={[
            { name: "Hero", id: "hero" },
            { name: "About", id: "about" },
            { name: "How to Buy", id: "how-to-buy" },
            { name: "Tokenomics", id: "tokenomics" },
            { name: "FAQ", id: "faq" },
            { name: "Footer", id: "footer" }
          ]}
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          brandName="Xeven Solutions"
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to Xeven Solutions"
          description="Innovative solutions for the future."
          tagLabel="Join the revolution"
          primaryButtonText="Get started"
          secondaryButtonText="Learn more"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <CtaAbout
          title="About Us"
          descriptions={[
            "We provide cutting-edge technology to simplify your lifestyle.",
            "Our commitment to innovation drives us to deliver the best solutions."
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="Explore our token metrics and financial stats."
          kpiItems={[
            { value: "1M", description: "Total Supply" },
            { value: "$500k", description: "Market Cap" },
            { value: "10%", description: "Tax Rate" }
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: "What is Xeven Solutions?", content: "We specialize in innovative tech solutions to empower users." },
            { title: "How do I get started?", content: "Sign up on our website to begin your journey!" },
            { title: "What are the costs involved?", content: "We offer various options to fit every budget." },
            { title: "Who can I contact for support?", content: "Reach out through our contact page for any inquiries." }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="Xeven Solutions"
          logoText="Xeven Solutions"
          columns={[
            { items: [
              { label: "Privacy Policy", onClick: () => {} },
              { label: "Terms of Service", onClick: () => {} },
              { label: "Contact Us", onClick: () => {} }
            ]},
            { items: [
              { label: "FAQ", onClick: () => {} },
              { label: "Support", onClick: () => {} },
              { label: "Blog", onClick: () => {} }
            ]},
            { items: [
              { label: "Careers", onClick: () => {} },
              { label: "About Us", onClick: () => {} }
            ]}
          ]}
          copyrightText="© 2023 Xeven Solutions. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}
