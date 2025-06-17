import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { Moon } from "lucide-react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between items-center">
        {/*Left side */}
        collapseButton
        {/*Right side */}
        <div className="flex gap-4 items-center">
            <Link href="/">Dashboard </Link>
            <Moon />
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
            </Avatar>
        </div>
    </nav>
  )
}

export default Navbar