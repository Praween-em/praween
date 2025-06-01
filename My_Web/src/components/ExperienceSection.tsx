// src/components/EducationSection.tsx
import { FlipCard } from "./FlipCard"

const educationData = [
  {
    frontTitle: "Founder & Director",
    frontName:"www.Toletu.com",
    frontSubtitle: "Rental listing platform",
    backImageSrc: "src/assets/Untitled design.png", // replace with actual image path
  },
  {
    frontTitle: "Founder & Director",
    frontName:"www.Praisol.agency",
    frontSubtitle: "Web Services Agency",
    backImageSrc: "src/assets/Untitled design (1).png",
  },
  {
    frontTitle: "Founder ",
    frontName:"V Humans",
    frontSubtitle: "Customised AI Agentic Solutions",
    frontDate: "Coming Soon..",
  },


]

export const ExperienceSection = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {educationData.map((edu, idx) => (
          <FlipCard
            key={idx}
            frontTitle={edu.frontTitle}
            frontName={edu.frontName}
            backText="null"
            frontDate="null"
            frontSubtitle={edu.frontSubtitle}
            backImageSrc={edu.backImageSrc}
          />
        ))}
      </div>
    </section>
  )
}
