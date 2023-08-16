import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import hamburger from "../../assets/hamburger.png";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";



const Navbar = () => {

    
    const [isMenuOpen, setMenuOpen] = useState(false);
    return (
        <div
            className={`${isMenuOpen ? styles.wrapperMenuOpen : ""} ${
                styles.wrapper
            } `}
        >
            
            <Link
                href="/"
                className={`${isMenuOpen ? styles.imagewrapperMenuOpen : ""} ${
                    styles.navItem
                } `}
            >
                <p className="nav-item">HARRY POTTER CHARACTERS</p>
            </Link>
            <div
                className={`${styles.hamburgerMenu} ${
                    isMenuOpen ? styles.hamburgerMenuOpen : ""
                }`}
                onClick={() => setMenuOpen(!isMenuOpen)}
            >
                <p>
                 POTTER HARRY API
                </p>
            </div>
            <div
                className={`${isMenuOpen ? styles.navItemsMenuOpen : ""} ${
                    styles.navItems
                } `}
            >

                
                <Link href="/" className={styles.navItem}>
                    <span className="btn btn-primary m-3">Characters</span>
                </Link>
                
               
            </div>
        </div>
    );
};

export default Navbar;
