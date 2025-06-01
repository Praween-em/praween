// src/components/EducationSection.tsx
import { FlipCard } from "./FlipCard"

const educationData = [
  {
    frontTitle: "Machine Learning with Python",
    frontName: "myInvenio",
    frontSubtitle: "Issued Mar 2024",
    backImageSrc: "src/assets/imagesin.png",
  },
  {
    frontTitle: "Generative AI: Introduction and Applications",
    frontName: "IBM",
    frontSubtitle: "Issued Feb 2024",
   backImageSrc: "src/assets/ibm-logo-2.webp" ,
  },
  {
    frontTitle: "Quantum-Safe Cryptography",
    frontName: "IBM",
    frontSubtitle: "Issued Feb 2024",
   backImageSrc: "src/assets/ibm-logo-2.webp" ,
  },
  {
    frontTitle: "Python Mega Course",
    frontName: "Udemy",
    frontSubtitle: "Issued Feb 2024",
    backImageSrc: "src/assets/sell-courses-udemy-cover.jpg",
  },
  {
    frontTitle: "Python 101 for Data Science",
    frontName: "IBM",
    frontSubtitle: "Issued Feb 2024",
    backImageSrc: "src/assets/ibm-logo-2.webp" ,
  },
  {
    frontTitle: "Quantum Computing Complete Course",
    frontName: "Udemy",
    frontSubtitle: "Issued Jan 2024",
       backImageSrc: "src/assets/sell-courses-udemy-cover.jpg",
  },
  {
    frontTitle: "Web Design Specialist Certification",
    frontName: "Coursera",
    frontSubtitle: "Issued Jan 2024",
   backImageSrc: "src/assets/download (2).png",
  },
  {
    frontTitle: "Ask Questions to Make Data-Driven Decisions",
    frontName: "Google",
    frontSubtitle: "Issued Dec 2023",
    backImageSrc: "src/assets/download.png",
  },
  {
    frontTitle: "Foundations: Data, Data, Everywhere",
    frontName: "Google",
    frontSubtitle: "Issued Dec 2023",
    backImageSrc: "src/assets/download.png",
  },
  {
    frontTitle: "Prepare Data For Exploration",
    frontName: "Google",
    frontSubtitle: "Issued Dec 2023",
    backImageSrc: "src/assets/download.png",
  },
  {
    frontTitle: "Process Data from Dirty to Clean",
    frontName: "Google / Coursera",
    frontSubtitle: "Issued Dec 2023",
    backImageSrc: "src/assets/download (2).png",  
  },
  {
    frontTitle: "Power Platform App Maker Associate",
    frontName: "Microsoft",
    frontSubtitle: "Issued Apr 2023 (Expired Apr 2024)",
    backImageSrc: "src/assets/download (1).png",  
  },
];



export const Certifi= () => {
  return (
    <section className="py-12 bg-white">
      <h2 className="text-3xl font-bold text-center mb-8">Certificates & Liscences</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {educationData.map((edu, idx) => (
          <FlipCard
            key={idx}
            frontTitle={edu.frontTitle}
            frontName={edu.frontName}
            frontSubtitle={edu.frontSubtitle}
            backText="null"
            frontDate="null"
            backImageSrc={edu.backImageSrc}
          />
        ))}
      </div>
    </section>
  )
}
