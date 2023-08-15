// "use client";
// import "./globals.css";
// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import { Footer } from "./components/Footer";
// import { usePathname } from "next/navigation";
// import { Toaster } from "react-hot-toast";

// import { lazy, Suspense } from "react";
// const Navbar = lazy(() => import("./components/Navbar"));

// const inter = Inter({ subsets: ["latin"] });

// // export const metadata: Metadata = {
// //   title: "Shasec",
// //   description: "share secure messages",
// // };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const path = usePathname();

//   return (
//     <html lang="en">
//       <body className=" min-h-screen flex flex-col justify-between">
//         {path !== "/auth" && (
//           <Suspense fallback={<div>Loading...</div>}>
//             <Navbar />
//           </Suspense>
//         )}
//         {children}
//         {path !== "/auth" && <Footer />}
//         <Toaster
//           position="top-right"
//           reverseOrder={false}
//         />
//       </body>
//     </html>
//   );
// }

"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "./components/Footer";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

import { lazy, Suspense, useState, useEffect } from "react";

const Navbar = lazy(() => import("./components/Navbar"));

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [navbarLoaded, setNavbarLoaded] = useState(false);

  useEffect(() => {
    const timeout: any = setTimeout(() => {
      setNavbarLoaded(true);
    }, 1);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <html lang="en">
      <body className=" min-h-screen flex flex-col justify-between">
        {path !== "/auth" && navbarLoaded ? (
          <Suspense fallback={<div className=" text-xs text-gray-600 text-center">Loading..</div>}>
            <Navbar />
          </Suspense>
        ) : null}
        {children}
        {path !== "/auth" && <Footer />}
        <Toaster
          position="top-right"
          reverseOrder={false}
        />
      </body>
    </html>
  );
}
