import Image from 'next/image'
import {IBM_Plex_Mono} from 'next/font/google'
import styles from './page.module.css'
import DevIcon from "@/app/icons/Dev";
import LinkedIn from "@/app/icons/LinkedIn";
import GitHub from "@/app/icons/GitHub";
import Instagram from "@/app/icons/Instagram";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
})

export default function Home() {
    return (
        <main className={`${styles.main} ${ibmPlexMono.className}`}>
            <div className={styles.avatarContainer}>
                <Image
                    priority
                    className={styles.avatar}
                    src="/guilherme-toti-portrait.webp"
                    alt="Guilherme Toti Profile Picture"
                    width={150}
                    height={150}
                />
            </div>

            <h1 className={styles.title}>Guilherme M. R. Toti</h1>
            <p className={styles.role}>Lead Software Engineer @ Right Balance</p>

            <p className={styles.description}>I&apos;m a full-stack software developer with extensive experience in
                Python
                and React.JS.</p>

            <p className={styles.description}>As a lead software engineer, I have a proven track record of
                delivering
                high-quality projects on time and
                within budget. My technical skills include front-end and back-end development, database design,
                systems
                architecture, and project management.</p>
            <p className={styles.description}>I&apos;m passionate about using technology to solve complex problems and
                improve people&apos;s lives.</p>

            <p className={styles.description}>Connect with me on social media to learn more about my work and
                interests.</p>

            <ul className={styles.socialList}>
                <li>
                    <a href="https://github.com/guilherme-toti" title="GitHub">
                        <GitHub alt="GitHub" width={30} height={30} className={styles.icon}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/guilhermetoti/" title="LinkedIn">
                        <LinkedIn alt="LinkedIn" width={30} height={30} className={styles.icon}/>
                    </a>
                </li>
                <li>
                    <a href="https://dev.to/guilhermetoti" title="Dev.to">
                        <DevIcon alt="Dev.to" width={30} height={30} className={styles.icon}/>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/guilherme.toti/" title="Instagram">
                        <Instagram alt="Instagram" width={30} height={30} className={styles.icon}/>
                    </a>
                </li>
            </ul>
        </main>
    )
}
