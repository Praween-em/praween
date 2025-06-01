import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-background rounded-2xl border-d shadow-md duration-200 hover:shadow-[20px_0_30px_-10px_rgba(255,0,0,1),-20px_0_30px_-10px_rgba(0,255,0,1)]">
      <div className="container mx-0 flex items-center justify-between py-4 px-4">
        <Link to="/" className="text-xl font-bold">
          Praveen Kumar
        </Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
          <Button variant="outline" asChild>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64 p-6">
              <div className="flex flex-col space-y-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
