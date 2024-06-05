import styles from './Aside.module.css'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

export function Aside() {
    return (
        <>
            <aside className={styles.AsideBar}>
                <a href="https://github.com/samuelmaia1" target='_blank'>
                    <img src={github} alt="icone-github" className={styles.imgSideBar}/>
                    
                </a>

                <a href="https://www.linkedin.com/in/samuel-maia-269955232/" target='_blank'>
                    <img src={linkedin} alt="icone-linkedin" className={styles.imgSideBar}/>
                </a>

                <a href="https://www.instagram.com/samuelmaia_" target='_blank'>
                    <img src={instagram} alt="icone-instagram" />
                </a>
            </aside>
        </>
    )
}