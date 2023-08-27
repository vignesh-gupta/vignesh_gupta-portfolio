"use client";

import { poppins } from "@/components/constants/designConstants";
import { navLinks } from "@/components/constants/mappingConstants";
import clsx from "clsx";
import { useRouter } from "next/navigation";


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
        "flex flex-col justify-center items-center grow gap-5 text-center",
        poppins.className
      )}
    >
      <h1 className="md:text-2xl text-xl capitalize">
        {
          validLinks.includes(endpoint)
            ? `${endpoint} Page is under construction`
            : "404 | Oops seems like a wrong page"
        }
      </h1>
      <button
        onClick={handleGoToHome}
        className="text-base py-3 px-5 bg-blue-950 rounded-lg"
      >
        Go home
      </button>
    </div>
  );
}
