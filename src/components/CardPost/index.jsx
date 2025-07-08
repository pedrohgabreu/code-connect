import Image from "next/image"
import { Avatar } from "../Avatar"
import styles from './cardpost.module.css'

export const CardPost = ({post}) => {
    return (<aside className={styles.card}>
        <article>
            <header className={styles.header}>
                <figure>
                    <Image src={post.cover} width={438} height={133} alt={`Capa do post de titulo: ${post.title}`} />
                </figure>
            </header>
            <section className={styles.body}>
                <h2 className={styles.h2}>{post.title}</h2>
                <h1 className= {styles.h2}>{post.body}</h1>
            </section>
            <footer className={styles.footer}>
                <Avatar 
                imageSrc={post.author.avatar} 
                name={post.author.username}
                />
            </footer>
        </article>
    </aside>)
}