import styles from './Apresentacao.module.css'
import profile from '../assets/icon-profile.png'
import nodejs from '../assets/nodejs.png'
import reactjs from '../assets/reactjs.png'
import javascript from '../assets/javascript.png'
import csharp from '../assets/csharp.png'


export function Apresentacao(){
    return (
        <>
            <section className={styles.apresentacao}>
                <div className={styles.divApr}>

                    <div className={styles.container}>
                        <div className={styles.containerApr}>
                            <h1 className={styles.nome}>Software Developer</h1>
                            {/* <h3 className={styles.prof}>Samuel Maia</h3> */}
                    
                        </div>
                    </div>

                    <p>Olá! Eu sou o Samuel, desenvolvedor de Software e estudande de Análise e Desenvolvimento de Sistemas.</p>
                    <p>Bem vindo ao meu portfólio!</p>

                    <nav className={styles.navApr}>
                        <a href="#about">Sobre mim</a>
                        <a href="#skills">Stack</a>
                        <a href="#projects">Projetos</a>
                    </nav>

                    <div className={styles.containerStack}>
                        <img src={javascript} alt=""  className={styles.tec}/>
                        <img src={reactjs} alt=""  className={styles.tec}/>
                        <img src={nodejs} alt=""  className={styles.tec}/>
                        <img src={csharp} alt=""  className={styles.tec}/>
                    </div>
                    
                </div>
                <img src={profile} alt="" className={styles.profile}/>
            </section>
        </>
    )
}