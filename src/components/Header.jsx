import styles from './Header.module.css'

export function Header() {
    return (
        <>
            <header className={styles.cabecalho}>
                {/* <div className={styles.containerNome}>
                    <a href="#">
                        <h4>
                            &lt;SamuelMaia/&gt;
                        </h4>
                        <h4>
                            Software developer
                        </h4>
                    </a>
                </div> */}

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