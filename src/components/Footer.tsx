import Link from "next/link"
import styles from "./Footer.module.css"
import { hiddenOnMobile } from "@/utils/styles"

export default function Footer() {
    return (
        <footer className="flex justify-center py-[4rem]">
            <img src="/runes-logo.svg" width={80} height={80} alt="" className={hiddenOnMobile} />
        </footer>
    )
}

