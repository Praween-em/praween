import { Hero } from "@/components/Hero"
import PortfolioSkillsSection from "@/components/ProfileSkillSection"


export const Home = () => {
  return (
    <div>
    <div className="m-5">
      <Hero />
        <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-bold text-center">Skills </h2>
      <PortfolioSkillsSection/>
    </section>
    </div>
</div>
  )
}