
import { Button } from "@/components/ui/button"
import { ArrowUpIcon } from "lucide-react"

export default function ScrollTopButton() {
  return (
    <div className="fixed bottom-4 right-4">
      <Button variant="outline" size="icon">
        <ArrowUpIcon className="h-6 w-6" />
        <span className="sr-only">Scroll to top</span>
      </Button>
    </div>
  )
}
