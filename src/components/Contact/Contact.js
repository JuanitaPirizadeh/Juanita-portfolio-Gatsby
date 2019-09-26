import React from 'react'
import Title from '../Title'
import styles from "../../css/contact.module.css"
const Contact = () => {
return (
<section className={styles.contact}>
<Title title="Contact" subtitle="me" />
<div className={styles.center}>
<form action="https://formspree.io/jupirizadeh@gmail.com" method="POST" className={styles.form}>
    <div>
        <label htmlfor="name">Name</label>
        <input
        type="text"
        name="name"
        id="name"
        className={styles.formControl}
        placeholder="Greta Thunberg" />

    </div>
    <div>
    <label htmlfor="name">Email</label>
        <input
        type="email"
        name="email"
        id="email"
        className={styles.formControl}
        placeholder="gretaT@gmail.com" />

    </div>
    <div>
    <label htmlfor="name">Message</label>
        <textarea name="message" id="message" rows="10" className={styles.formControl}
        placeholder="Hey! Whatsup!" />

    </div>
<div>
    <input type="submit" value="Send away!"
    className={styles.submit}/>
</div>
</form>
</div>
</section>
)}
export default Contact