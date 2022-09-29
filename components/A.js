import Link from 'next/link'
import styles from '../styles/A.module.css'

export default function ({ text, href }) {
  return (
    <Link href={href}>
      <a className={styles.navbar__link}>{text}</a>
    </Link>
  )
}
