// src/components/EducationSection.tsx
import { FlipCard } from "./FlipCard"

const educationData = [
  {
    frontTitle: "Masters",
    frontName:"Master Of Computer Application",
    frontSubtitle: "JNTU Anantapur",
    frontDate: "2022 - 2024",
    backText: "JNTUA",
    backImageSrc: "src/assets/download.jpg", // replace with actual image path
  },
  {
    frontTitle: "Bachelors",
    frontName:"Bachelor Of Science",
    frontSubtitle: "Sri Sai Baba National Degree College",
    frontDate: "2017 - 2020",
    backText: "SSBN",
    backImageSrc: "/src/assets/images.jpg",
  },
  {
    frontTitle: "Intermediate",
    frontName:"M.P.C",
    frontSubtitle: "Govt Junior College",
    frontDate: "2015 - 2017",
    backText: "SSBN",
    backImageSrc: "src/assets/govt-junior-college-1693381403.jpg",
  },
{
    frontTitle: "Polytechnic",
    frontName:"Diploma in Electrical Engineering (E.E.E)",
    frontSubtitle: "Govt Polytechnic college",
    frontDate: "2013 - 2014 (Disc)",
    backText: "Diploma",
    backImageSrc: "src/assets/govt-polytechnic-anantapur-ho-anantapur-colleges-xq7b6tm.avif",
  },

  {
    frontTitle: "10th",
    frontName:"S.S.C",
    frontSubtitle: "Bruhaspathi Vidyanikethan",
    frontDate: "2012 - 2013",
    backText: "10th Grade",
    backImageSrc: "src/assets/image.png",
  },
]

export const EducationSection = () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Educational Qualifications</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {educationData.map((edu, idx) => (
          <FlipCard
            key={idx}
            frontTitle={edu.frontTitle}
            frontName={edu.frontName}
            frontSubtitle={edu.frontSubtitle}
            frontDate={edu.frontDate}
            backText={edu.backText}
            backImageSrc={edu.backImageSrc}
          />
        ))}
      </div>
    </section>
  )
}
