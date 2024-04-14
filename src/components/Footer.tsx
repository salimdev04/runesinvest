import Link from "next/link"
import styles from "./Footer.module.css"
import { hiddenOnMobile } from "@/utils/styles"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.header}>
                <img src="/runes-logo.svg" alt="" className={hiddenOnMobile} />
                <nav className={styles.footerLink}>
                    <Link href={"#"} >About Us</Link>
                    <Link href={"#"} >Services</Link>
                    <Link href={"#"} >Contact Us</Link>
                    <Link href={"#"} >More</Link>
                </nav>
                <div className="flex gap-[12px]">
                    <Link href={"#"}> <img src="/Icon/Facebook.svg" alt="" /> </Link>
                    <Link href={"#"}> <img src="/Icon/Instagram.svg" alt="" /> </Link>
                    {/* <Link href={"#"}> <img src="/Icon/LinkedIn.svg" alt="" /> </Link> */}
                    <Link href={"#"}> <img src="/Icon/X.svg" alt="" /> </Link>

                </div>
            </div>
            <div className={styles.policyContainer}>
                <p>© 2024 Relume. All rights reserved.</p>
                <Link className=" underline" href={"#"}>Privacy Policy</Link>
                <Link className=" underline" href={"#"}>Terms of Service</Link>
                <Link className=" underline" href={"#"}>Cookies Settings</Link>

            </div>
        </footer>
    )
}

