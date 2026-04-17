import { Navbar } from './components/navbar';
import { HeroSection } from './components/hero-section';
import { ProblemSolution } from './components/problem-solution';
import { DocumentationCenter } from './components/documentation-center';
import { RecordsAndProjects } from './components/records-and-projects';
import { TaskControlSection } from './components/task-control-section';
import { AnalyticsSection } from './components/analytics-section';
import { RoadmapSection } from './components/roadmap-section';
import { PricingSection } from './components/pricing-section';
import { Footer } from './components/footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSolution />
        <DocumentationCenter />
        <RecordsAndProjects />
        <TaskControlSection />
        <AnalyticsSection />
        <RoadmapSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}