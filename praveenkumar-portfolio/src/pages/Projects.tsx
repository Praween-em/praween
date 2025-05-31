import  ProjectCard  from "@/components/ProjectCard"

export const Projects = () => {
  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold mb-6">All Projects</h1>
      <div className="grid gap-6 md:grid-cols-1">
        
        <ProjectCard title="Intelligent Surveillance" description="IoT-enabled camera system integrated with AI for real-time alerts based on object and emotion recognition." link="https://github.com/Praween-em/Intelligent-Surveillance-System" />
  <ProjectCard title="Toletu.com" description="A scalable rental listing platform built using React and AWS." link="https://toletu.com" />
        <ProjectCard title="N Square Films" description="A web-application for a movie production company." link="http://www.nsquarefilms.com/"/>
        <ProjectCard title="Shors Algorithm" description="AI-powered customer service assistant mimicking human interaction." link="https://github.com/Praween-em/Breaking-RSA-Encryption-using-Quantum-Computers-and-Shors-Algorithm" />
        <ProjectCard title="CSAI  Bot" description="AI-powered customer service assistant mimicking human interaction." link="https://github.com/Praween-em/CSAI" />
       
            </div>
    </div>
  )
}