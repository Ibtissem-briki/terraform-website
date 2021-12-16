import Link from 'next/link'
import styles from './NavBack.module.css'
import ArrowLeft from './images/arrow-left.svg'

export default function NavBack({ text, url }) {
  return (
    <Link href={url}>
      <a className={styles.navBack}>
        <img src={ArrowLeft} />
        {text}
      </a>
    </Link>
  )
}
