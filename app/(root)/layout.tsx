import clsx from "clsx";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { preahvihear } from "@/components/constants/designConstants";

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
