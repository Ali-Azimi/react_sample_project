import Header from "../Header"



const Layout = ({ children }) => {
    return (
        <>
            <Header />
            {children}
            <div>
                footer
            </div>
        </>
    )
}


export default Layout;