"use client";

import MenuAuth from "@/components/organisms/MenuAuth";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const router = useRouter();

  const { data: session } = useSession();

  console.log(session);

  const [openNavbar, setOpenNavbar] = useState(false);

  const toggleNavbar = () => setOpenNavbar(!openNavbar);

  return (
   <>
    <header className="fixed sm:static top-0 w-full px-12 md:px-32 py-5 z-50">
      {/* Navbar Desktop */}
      <div className="hidden sm:flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Image src="/images/logo3.png" alt="Logo" width={160} height={36} />
          <nav className="flex gap-4">
            <Link href="/find-jobs" className="font-medium text-gray-400 cursor-pointer">
              Find Jobs
            </Link>
            <Link href="/find-companies" className="font-medium text-gray-400 cursor-pointer">
              Browse Companies
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {session ? (
            <MenuAuth />
          ) : (
            <>
              <Button onClick={() => router.push("/signin")} variant="link">
                Login
              </Button>
              <Button onClick={() => router.push("/signup")} variant="link">
                Sign Up
              </Button>
            </>
          )}
        </div>
      </div>

      {/* Navbar Mobile */}
      <div className="sm:hidden -mt-2">
        <div className="bg-white border p-3 flex justify-between items-center rounded-xl">
          <Image src="/images/logo3.png" alt="Logo" width={160} height={36} />

          {/* Toggle   */}
          <button onClick={toggleNavbar} className="p-2">
            {openNavbar ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {openNavbar && (
          <nav className="mt-2 flex flex-col items-center gap-4 bg-white p-4 rounded shadow-md z-20">
            <Link href="/find-jobs" className="font-medium text-gray-400 cursor-pointer">
              Find Jobs
            </Link>
            <Link href="/find-companies" className="font-medium text-gray-400 cursor-pointer">
              Browse Companies
            </Link>
            {session ? (
              <MenuAuth />
            ) : (
              <>
                <Button onClick={() => router.push("/signin")} variant="link">
                  Login
                </Button>
                <Button onClick={() => router.push("/signup")} variant="link">
                  Sign Up
                </Button>
              </>
            )}
          </nav>
        )}
      </div>
    </header>

    {openNavbar && <div className="bg-black opacity-50 w-full h-full fixed top-0 bottom-0 left-0 right-0 z-20"></div>}
   </>
  );
};

export default Navbar;
