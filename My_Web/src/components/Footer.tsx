// components/Footer.tsx
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <Card className="bg-gray-900 text-white rounded-none border-none">
      <CardContent className="py-6 flex flex-col items-center justify-center space-y-4">
        <p className="text-sm text-muted-foreground">
          &copy; {year} Praveen Kumar. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hover:text-gray-400"
          >
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hover:text-gray-400"
          >
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="icon"
            className="hover:text-gray-400"
          >
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export default Footer
