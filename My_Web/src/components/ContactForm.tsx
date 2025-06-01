import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import emailjs from "emailjs-com"

export const ContactForm = () => {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget

    try {
      await emailjs.sendForm(
        'your_service_id',
        'your_template_id',
        form,
        'your_user_id'
      )
      alert('Message sent successfully!')
      form.reset()
    } catch (error) {
      console.error(error)
      alert('Failed to send message.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <Input type="text" name="user_name" placeholder="Your name" required />
      <Input type="email" name="user_email" placeholder="Your email" required />
      <Textarea name="message" placeholder="Your message" required />
      <Button type="submit" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  )
}
