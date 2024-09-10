import styles from './Contact.module.css'
import email from '../assets/email.png'
import whatsapp from '../assets/whatsapp.png'
import linkedinPersonalizado from '../assets/linkedin_personalizado.png'

export function Contact({id}){
    return (
        <>
            <section className={styles.contato} id={id}>
                <h1 className={styles.contatoTitle}>Contato</h1>
                <p>Se você gostou do meu trabalho, entre em contato comigo!</p>
                <p>
                    <img src={email} alt="email" />
                    <span>smaia190500@gmail.com</span>
                </p>
                {/* <p>
                    <a href="" className={styles.contatoLink}>
                        <img src={whatsapp} alt="whatsapp" />
                        <span>Clique para enviar uma mensagem</span>
                    </a>
                </p> */}
                <p>
                    <a href="https://www.linkedin.com/in/samuel-maia-269955232/" className={styles.contatoLink}>
                        <img src={linkedinPersonalizado} alt="whatsapp" />
                        <span>Visite meu linkedin</span>
                    </a>
                </p>
            </section>
        </>
    )
}