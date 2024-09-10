import styles from './Header.module.css'
import { Aside } from './Aside'

export function Header() {
    return (
        <>
            <header className={styles.cabecalho}>
                <Aside/>

                <nav className={styles.Navbar}>
                    <a href="#">Home</a>
                    <a href="#about">Sobre mim</a>
                    <a href="#skills">Habilidades</a>
                    <a href="#projects">Projetos</a>
                    <a href="#contact">Contato</a>
                </nav>
                
            </header>
        </>
    )
}