import exp from "constants";

export default class WebLinks {
    public static readonly github: string = "https://github.com/MB-44";
    public static readonly linkedin: string = "https://linkedin.com/in/itsmenathbadde";
    public static readonly youtube: string = "https://www.youtube.com/@TKMLB";
    public static readonly twitter: string = "https://x.com/itsmenathBadde";
    public static readonly instargram: string = "https://instagram.com/_itzmenaa_";
    public static readonly email: string = "menathbaddegama@bcgame.com";
    public static readonly portfolioRepo: string = "https://github.com/MB-44/menath.dev";
}

export const NavigationLinks = [
    { href: "/about", key: "about", label: "About"},
    { href: "/education", key: "education", label: "Education"},
    { href: "/experience", key: "experience", label: "Experience"},
    { href: "/projects", key: "projects", label: "Projects"},
    { href: "/connect", key: "connect", label: "Connect"},
];

export const PageLinks = {
    education : {
        iit: "https://www.iit.ac.lk/",
        westminster: "https://www.westminster.ac.uk/"
    }
}