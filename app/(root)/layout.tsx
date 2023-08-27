import clsx from "clsx";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { preahvihear } from "@/components/constants/designConstants";
import { Metadata } from "next";
import { m } from "framer-motion";

export const metadata: Metadata = {
  title: "Portfolio | Vignesh Gupta",
  themeColor: [
    {
      color: "#11071f",
    },
    {
      color: "#7127ba",
    },
    {
      color: "#1a0b2e",
    },
    {
      color: "#CCD6F6",
    },
  ],
  description: "Vignesh Gupta's Portfolio",
  authors: {
    name: "Vignesh Gupta",
    url: "https://vigneshgupta.vercel.app/",
  },
  colorScheme: "dark",
  creator: "Vignesh Gupta",
  publisher: "Vignesh Gupta",
  keywords: [
    "vignesh",
    "gupta",
    "hcl",
    "front end developer",
    "react developer",
    "full stack",
    "product developer",
    "software project",
    "full stack developer",
    "developer",
    "software engineer",
    "software developer",
    "react create app",
    "web developer",
  ],
  openGraph: {
    type: "website",
    url: "https://vigneshgupta.vercel.app/",
    title: "Portfolio | Vignesh Gupta",
    description: "Vignesh Gupta's Portfolio",
    siteName: "Vignesh Gupta Portfolio",
    emails: ["vighneshgupta32@gmail.com"],
    locale: "en_US",
    images: [
      {
        url: "https://vigneshgupta.vercel.app/_next/image?url=%2Fhero.png&w=256&q=75",
        width: 256,
        height: 75,
        alt: "Vignesh Gupta's Portfolio",
      },
    ],
  },
  twitter: {
    creator: "@VighneshGupta9",
    creatorId: "twitter.com/VighneshGupta9",
    site: "https://vigneshgupta.vercel.app/",
    title: "Portfolio | Vignesh Gupta",
    images: [
      {
        url: "https://vigneshgupta.vercel.app/_next/image?url=%2Fhero.png&w=256&q=75",
        width: 256,
        height: 75,
        alt: "Vignesh Gupta's Portfolio",
      },
    ]
  },
  metadataBase: new URL("https://vigneshgupta.vercel.app"),
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={clsx(
        "w-full bg-primary text-foreground min-h-screen flex flex-col -z-50",
        preahvihear.className
      )}
    >
      <Navbar />
      <main className="xl:px-80 lg:px-48 md:px-32 sm:px-16 px-10 grow flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
