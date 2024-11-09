import type { Metadata } from "next";
import SiteInfo from "./siteinfo";
import WebLinks from "@/data/links";

const metaDataJson: Metadata = {
    title: SiteInfo.username,
    description: SiteInfo.description,
    applicationName: SiteInfo.username,
    category: "Personal website",
    keywords: SiteInfo.keywords,
    creator: SiteInfo.username,
    robots: "index, follow",
    authors : [
        {
            name: SiteInfo.username,
            url: SiteInfo.domain
        }
    ],

    twitter: {
        
    }
}