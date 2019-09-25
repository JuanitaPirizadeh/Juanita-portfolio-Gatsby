import React from "react"
import Layout from "../components/Layout"
import styles from '../css/error.module.css'
import {Link} from 'gatsby'
import Banner from '../components/Banner'

export default function error(){
return <Layout> 
<header className={styles.error}>
<Banner title="oops you are far out in interspace">


<Link to='/' className="btn-white">
    Back to home pliz
</Link>
</Banner>
</header>

</Layout>
}