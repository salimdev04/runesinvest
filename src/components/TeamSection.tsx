import Link from "next/link"
import styles from "./HeroSection.module.css"
import commonStyles from "./CommonStyles.module.css"
import Image from "next/image"
import { hiddenOnMobile } from "@/utils/styles"
import { TeamCard } from "./CommonUI"
import { h1Title } from "@/app/fonts"


const teamMembers = [
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
    {
        name: "Dadev",
        post: "Dev",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
    },
]

export default function TeamSection() {
    return (
        <section className={commonStyles.padding} >
            <div className=" text-center pb-[6rem]">
                <h1 className={[h1Title, 'text-[48px]'].join(' ')}>Our Team</h1>
                <p className="pt-3">Our OG Task Force of Web3 Natives</p>
            </div>
            <div>
                <div className=' grid tablet:grid-cols-4 grid-cols-1 items-center justify-center place-content-center place-items-center gap-8'>
                    {teamMembers.map((member, idx) => (
                        <TeamCard key={idx} name={member.name} post={member.post} content={member.content} image="/member.png" />
                    ))}
                </div>
            </div>
        </section>
    )
}
