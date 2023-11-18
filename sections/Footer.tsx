// Footer

import { navLinks } from "@/constants"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"



const Footer = () => {
  return (
    <footer className="container text-center border-t border-accent">
      
    <div className="pt-20 container">
      <div className="grid md:grid-cols-3 gap-16">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">About Us</h2>
          <p className="leading-[1.8]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis
            atque repudiandae consectetur quibusdam eius dignissimos recusandae,
            tenetur maiores quos veniam deleniti esse.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-bold">The Restaurant</h2>

          {/* Map out links */}
          <ul className="flex flex-col mx-auto justify-center align-middle">
                {navLinks.map((link) => (
                    <li key={link.label} >
                        <Link href={link.href}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>

        <div>
            <h2 className="text-xl font-bold">Social Media</h2>
          <div className="flex justify-center align-middle gap-8 text-accent text-2xl pt-16">
            <Link href="https://www.facebook.com">
            <Facebook />
            </Link>
            
            <Link href="https://www.twitter.com">
            <Twitter />
            </Link>

            <Link href="https://www.instagram.com">
            <Instagram />
            </Link>

            <Link href="https://www.linkedin.com">
            <Linkedin />
            </Link>
            
          </div>
        </div>
      </div>

      <div className="w-fit mx-auto pt-16 pb-8 text-[14px] sm:text-[16px]">
        &copy; Copyright <span className="text-accent">YourCompany</span> 2023 All rights reserved
      </div>
    </div>
    </footer>
  )
}

export default Footer