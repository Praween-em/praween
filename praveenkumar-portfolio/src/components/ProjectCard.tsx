import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  link?: string
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <Card className=" transition-shadow duration-300 hover:shadow-[20px_0_30px_-10px_rgba(255,0,0,0.7),-20px_0_30px_-10px_rgba(0,255,0,0.7)] rounded-2xl">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-sm underline">
            View Project →
          </a>
        )}
      </CardContent>
    </Card>
  )
}

export default ProjectCard;