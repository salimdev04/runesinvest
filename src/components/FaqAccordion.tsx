'use client'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

import styles from './FaqAccordion.module.css'

export const FaqAccordion = () => {
    return (
        <Accordion className='max-w-[968px]'>
            <AccordionItem >
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>
                        <span> What is Runes?</span>
                        <img src="/Icon.svg" alt="" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    Exercitation in fugiat est ut ad ea cupidatat ut in
                    cupidatat occaecat
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>

                        <span> Why Runes Protocol matters ?</span>
                        <img src="/Icon.svg" alt="" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea i
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>

                        <span> Why Runes Academy is your Gateway to Runes Ecosystem ?</span>
                        <img src="/Icon.svg" alt="" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea i
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={styles.accordionHeading}>
                    <AccordionItemButton className={styles.accordionButton}>

                        <span>What is Runes Academy NFT collection ?</span>
                        <img src="/Icon.svg" alt="" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea i
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading className={[styles.accordionHeading, 'border-b border-black'].join(" ")}>
                    <AccordionItemButton className={styles.accordionButton}>
                        <span> How to buy Runes Academy NFT ?</span>
                        <img src="/Icon.svg" alt="" />
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className={styles.accordionPanel}>
                    In ad velit in ex nostrud dolore cupidatat consectetur
                    ea i
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    );
}