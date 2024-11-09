import { NavigationLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import path from "path";

export default function NavigationBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();

    const renderNavLinks = (isMobile: boolean) => (
        <ul className={`flex flex-col items-center ${
            isMobile ? "py-2" : "md:flex-row"
        }`}
        >
            {NavigationLinks.map((link) => (
                <li key={link.key} className={isMobile ? "py-2" : "px-4"}>
                    <Link href={link.href}>
                        <p className={`font-regular text-md textButtonTheme transitionButtonTheme ${
                            link.href === pathName && !isMobile
                            ? "navBarSelectedItem selectedNavItem"
                            : ""
                        } ${
                            link.href === pathName && isMobile
                            ? "navBarSelectedItemMobile selectedNavItem"
                            : ""
                        } `}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label};
                        </p>
                    </Link>
                </li>
            ))}


        </ul>
    );

    return (
        <nav className="xs:px-6 sm:px-12 md:px-16 pt-8 pb-5"></nav>
    )

}