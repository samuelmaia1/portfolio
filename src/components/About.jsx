import styles from './About.module.css'


export function About({id, modo}) {
    return (
        <>
            <section className={styles.about} id={id}>
                <h1 className={styles.aboutTitle}>Sobre mim</h1>
                <section className={styles.aboutSection}>
                    <h1 className={styles.aboutSectionTitle}>Quem sou?</h1>
                    <p className={styles.aboutText}>
                        Olá! Meu nome é Samuel, tenho 24 anos e sou desenvolvedor de Software.
                        <br/>
                        Estou mergulhando cada vez mais no mundo da programação, e este portfólio é para que você veja um pouco do meu trabalho.
                    </p>
                </section>
                <section className={styles.aboutSection}>
                    <h1 className={styles.aboutSectionTitle}>Jornada</h1>
                    <p className={styles.aboutText}>
                        Após 3 anos cursando Engenharia Mecânica pelo CEFET, eu descobri uma paixão: A programação.
                        <br/>
                        Depois de bastante tempo pensando, resolvi mergulhar de cabeça nessa mudança de carreira, e não poderia ter sido mais feliz. 
                        <br/>
                        Hoje curso Análise e Desenvolvimento de Sistema pela PUC Minas.
                    </p>
                </section>
                <section className={styles.aboutSection}>
                    <h1 className={styles.aboutSectionTitle}>Futuro</h1>
                    <p className={styles.aboutText}>
                        Minha maior expectativa no momento é desenvolver cada vez mais minha stack, não apenas em quantidade, mas, principalmente, em qualidade.
                        <br/>
                        Espero ser um dos melhores no que faço e me firmar como um profissional de qualidade e respeitado!
                    </p>
                </section>
            </section>
        </>
    )
}