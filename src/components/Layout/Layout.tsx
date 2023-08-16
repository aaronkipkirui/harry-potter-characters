import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

type Props = {
    children: React.ReactNode;
};

export default function Layout({ children }: Props) {
    return (
        <>
            <Navbar />
            <p><br></br></p>
            <main>{children}</main>
            <Footer />
        </>
    );
}
