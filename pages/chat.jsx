import styles from "@styles/default.module.scss";
import TextField from '@mui/material/TextField';
 
export default function Planner({ children }) {
//   const { data, error } = useSWR('/api/navigation', fetcher)
 
//   if (error) return <div>Failed to load</div>
//   if (!data) return <div>Loading...</div>
 
  return (
    <section className={styles.container}>
        <div className={styles.content}>
          <p>content</p>
        </div>
        <TextField className={styles.input} fullWidth label="Describe your meal prep idea" id="fullWidth" />
    </section>
  )
}