import Link from "next/link"

export default function Header(){
    return(
        <nav className="bg-black-300 p-3 flex gap-4">
            <Link className="text-yellow-600 p-2 rounded-full hover:bg-yellow-100" href="/home">Home</Link>
            <Link className="text-yellow-600 p-2 rounded-full hover:bg-yellow-100" href="/about">About</Link>
            <Link className="text-yellow-600 p-2 rounded-full hover:bg-yellow-100" href="/contact">Contact</Link>
            <Link className="text-yellow-600 p-2 rounded-full hover:bg-yellow-100" href="/services">Services</Link>
            <Link className="text-yellow-600 p-2 rounded-full hover:bg-yellow-100" href="/student">Student</Link>
            <Link className="text-yellow-600 p-2 rounded-full hover:bg-yellow-100" href="/student/first_year">First_Year</Link>
        </nav>
    )
}