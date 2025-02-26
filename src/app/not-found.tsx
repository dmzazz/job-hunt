"use client";

import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div>
      <h1 className="text-gray-600">
        <span>Error</span>404 {pathname}
      </h1>
      <p className="text-2xl md:text-3xl">Sorry, we couldn&apos;t find this page.</p>
      <Button onClick={() => router.back()}>Back</Button>
    </div>
  );
}
