export default function Layout({ children } : { children : React.ReactDOM}) {
    return (
        <div className="">
            <main>{children}</main>
        </div>
    );
}