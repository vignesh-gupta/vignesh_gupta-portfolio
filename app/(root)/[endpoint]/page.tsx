"use client";

import { navLinks } from "@/components/constants/mappingConstants";
import clsx from "clsx";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["600"] });

export default function Page({
  params: { endpoint },
}: {
  params: { endpoint: string };
}) {
  const validLinks = navLinks.map((link) =>
    link.url.toLocaleLowerCase().replace("/", "")
  );

  const router = useRouter();

  const handleGoToHome = () => {
    router.push("/");
  };

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center grow gap-2 text-center",
        poppins.className
      )}
    >
      <h1 className="lg:text-3xl md:text-2xl text-xl capitalize">
        {
          validLinks.includes(endpoint)
            ? `${endpoint} Page is under construction`
            : "404 | Oops seems like a wrong page"
        }
      </h1>
      <button
        onClick={handleGoToHome}
        className="md:text-xl text-base py-3 px-5 bg-blue-950 rounded-lg"
      >
        Go home
      </button>
    </div>
  );
}
