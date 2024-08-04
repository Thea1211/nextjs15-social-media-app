import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { DropdownMenu, DropdownMenuTrigger,DropdownMenuContent, DropdownMenuLabel,DropdownMenuItem,DropdownMenuSeparator } from "./ui/dropdown-menu";
import Link from "next/link";
const Navbar = () => {
    return <div className="bg-primary dark:bg-slate-700 text-white py-2 px-5 flex justify-between">Navbar
    <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none"><Avatar><AvatarImage src='https://github.com/shadcn.png' className=" w-6"></AvatarImage></Avatar>
    </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>label</DropdownMenuLabel>
            <DropdownMenuItem>
                <Link href='/profile'>Profile</Link></DropdownMenuItem>
                <DropdownMenuItem>
                <Link href='/auth'>Logout</Link></DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
    
    </div>;
}
 
export default Navbar;