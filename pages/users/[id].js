import { useRouter } from 'next/router'
import styles from '../../styles/users.module.scss'

export default ({ user }) => {
  const { query } = useRouter()
  console.log(user)
  return (
    <div className={styles.user}>
      <div>
        <h1 className={styles.user__name}>User {query.id}</h1>
        <div className={styles.user__name}>{user.name}</div>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const user = await response.json()

  return {
    props: { user }, // will be passed to the page component as props
  }
}
