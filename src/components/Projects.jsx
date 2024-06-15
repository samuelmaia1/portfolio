import styles from './Projects.module.css'
import educaweb from '../assets/educaweb.png'
import maximizar from '../assets/maximizar.png'

export function Projects({id}){
    return (
        <>
            <section className={styles.projects} id={id}> 

                <h1 className={styles.projectsTitle}>Meus projetos</h1>

                <div className={styles.project}>
                    <img src={educaweb} alt="" />
                    <div className={styles.containerInfo}>
                        <h3 className={styles.projectTitle}>EducaWeb</h3>
                        <p className={styles.projectsDescription}>
                            O EducaWeb tem o propósito de disponibilizar cursos de tecnologia criados por professores voluntários, criação de vagas por empresas parceiras para que os alunos possam assistir aos cursos e se candidatar às vagas.
                        </p>
                        <div className={styles.containerLink}>
                            <a href="https://educaweb-nine.vercel.app/"className={styles.projectLink} target='_blank'>
                                Projeto 
                            </a>
                            <a href="https://github.com/samuelmaia1/projeto_educaweb_react"className={styles.projectLink} target='_blank'>
                                Github
                            </a>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}