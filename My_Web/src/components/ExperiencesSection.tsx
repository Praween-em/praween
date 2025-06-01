// src/components/ExperienceSection.tsx
import { FlipCard } from "./FlipCard"

const experienceData = [
  {
    frontTitle: "Founder",
    frontName: "Toletu",
    frontSubtitle: "Toletu · Full-time",
    frontDate: "Apr 2025 - Present · 2 mos",
    backText: "India · Hybrid\nSkills: Cross-functional Team Leadership",
    backImageSrc: "src/assets/toletu_logo.jpg", // Replace with actual logo
  },
  {
    frontTitle: "Founder",
    frontName: "Praisol",
    frontSubtitle: "Praisol · Full-time",
    frontDate: "Aug 2024 - Present · 10 mos",
    backText: "India · On-site",
    backImageSrc: "src/assets/1729914698055.jpg",
  },
  {
    frontTitle: "Associate Director",
    frontName: "N Square Films",
    frontSubtitle: "N square films",
    frontDate: "Feb 2025 - Apr 2025 · 3 mos",
    backText: "",
    backImageSrc: "src/assets/N-SQUARE-FILMS-3-12-2025.jpg",
  },
  {
    frontTitle: "Subject Matter Expert",
    frontName: "GreenBhumi",
    frontSubtitle: "GreenBhumi · Internship",
    frontDate: "Nov 2024 - Feb 2025 · 4 mos",
    backText: "Remote",
    backImageSrc: "src/assets/1743743270949.jpg",
  },
  {
    frontTitle: "Subject Matter Expert",
    frontName: "MAD EDUCATORS",
    frontSubtitle: "MAD EDUCATORS · Freelance",
    frontDate: "Aug 2021 - Dec 2023 · 2 yrs 5 mos",
    backText: "Andhra Pradesh, India",
    backImageSrc: "src/components/ui/mad_educators_logo.jpg",
  },
  {
    frontTitle: "Telesales Specialist",
    frontName: "San IT",
    frontSubtitle: "San IT · Full-time",
    frontDate: "Nov 2020 - Jul 2021 · 9 mos",
    backText: "Anantapur, Andhra Pradesh, India · On-site",
    backImageSrc: "src/assets/1706513129312.jpg",
  },
]

export const ExperiencesSection = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Work Experience</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {experienceData.map((exp, idx) => (
          <FlipCard
            key={idx}
            frontTitle={exp.frontTitle}
            frontName={exp.frontName}
            frontSubtitle={exp.frontSubtitle}
            frontDate={exp.frontDate}
            backText={exp.backText}
            backImageSrc={exp.backImageSrc}
          />
        ))}
      </div>
    </section>
  )
}