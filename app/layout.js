import { Inter } from "next/font/google";
import "./globals.css";
import SpaceBackground from "@/components/SpaceBackground"; // Import it
import Navbar from "@/components/Navbar"; // <--- IMPORT THIS
import ScrollBar from "@/components/ScrollBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Rajneesh Sharma | Portfolio",
    description: "MERN Stack Developer",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
              <ScrollBar/>
                {/* Add the background here. It sits behind everything because of z-index */}
                <SpaceBackground />
                <Navbar />
                {/* This renders your page content on top */}
                <div className="relative z-10">{children}</div>
            </body>
        </html>
    );
}
