import { ThemeProvider } from '@/components/ThemeProvider'
import { Navigation } from '@/components/Navigation'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { SkillsSection } from '@/components/sections/SkillsSection'
import { ProjectsSection } from '@/components/sections/ProjectsSection'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection } from '@/components/sections/ContactSection'
import { FooterSection } from '@/components/sections/FooterSection'

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <FooterSection />
      </div>
    </ThemeProvider>
  );
};

export default Index;
