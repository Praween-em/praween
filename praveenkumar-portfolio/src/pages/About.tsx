// src/pages/About.tsx or wherever you want to show it
import { Certifi } from "@/components/Certifi"
import { EducationSection } from "@/components/EducationSection"
import { ExperienceSection } from "@/components/ExperienceSection"
import { ExperiencesSection } from "@/components/ExperiencesSection"

export const About = () => {
  return (
    <main className="container max-h-fit">
      {/* Other about content */}
      
      <ExperienceSection/>
      <ExperiencesSection/>
      <Certifi/>
      <EducationSection />
    </main>
  )
}
