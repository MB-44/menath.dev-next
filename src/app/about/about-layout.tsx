import React from "react";

export default function Layout({ children }: { children : React.ReactNode}) {
    return (
        <div className="">
            <main>{children}</main>
        </div>
    )
}