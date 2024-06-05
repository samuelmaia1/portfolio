import styles from './Skills.module.css'
import nodejs from '../assets/nodejs.png'
import reactjs from '../assets/reactjs.png'
import javascript from '../assets/javascript.png'
import csharp from '../assets/csharp.png'


export function Skills({id}){
    return (
        <>
            <section className={styles.skills} id={id}>
                <h1 className={styles.skillsTitle}>Habilidades</h1>

                <div className={styles.containerCardSkill}>
                    <div className={styles.cardSkill}>
                        <h2 className={styles.skillsSubtitle}>
                            <img src={javascript} alt="" />
                            JavaScript
                        </h2>
                        <p className={styles.skillsText}>
                            Uma das linguagens de programação mais usadas no mundo e de maior crescimento! Muito utilizado no desenvolvimento web.
                        </p>
                    </div>
                    <div className={styles.cardSkill}>
                        <h2 className={styles.skillsSubtitle}>
                            <img src={reactjs} alt="" />
                            ReactJs
                        </h2>
                        <p className={styles.skillsText}>
                            Uma biblioteca JavaScript que traz a possibilidade de trabalhar com as três principais tecnologias do front-end dentro do mesmo arquivo!
                        </p>
                    </div>
                    <div className={styles.cardSkill}>
                        <h2 className={styles.skillsSubtitle}>
                            <img src={nodejs} alt="" />
                            NodeJs
                        </h2>
                        <p className={styles.skillsText}>
                            Plataforma desenvolvida para trazer a possibilidade de trabalhar com JavaScript no back-end, ou seja, no lado do servidor.
                        </p>
                    </div>
                    <div className={styles.cardSkill}>
                        <h2 className={styles.skillsSubtitle}>
                            <img src={csharp} alt="" />
                            C#
                        </h2>
                        <p className={styles.skillsText}>
                            Uma das linguagens de programação mais usadas no desenvolvimento back-end, juntamente com o framework .NET, pode ser usada para web back-end, jogos e muito mais!
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}