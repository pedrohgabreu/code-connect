import Image from "next/image"
import styles from './avatar.module.css' 

export const Avatar = ({name, imageSrc}) => {
    return <ul>
        <li className={styles.avatar}>
            <Image src={imageSrc} width={32} height={32} alt={`Avatar do(a) ${name}`}/>
        </li>
        <li className={styles.avatar}>
            @{name}
        </li>
    </ul>
}