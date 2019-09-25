import React from 'react'
import { Link } from "gatsby"
import Layout from '../components/Layout'
import SimpleHero from "../components/SimpleHero"
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'



export default () => (
<Layout>
    <SimpleHero>
        <Banner
            title="Juanita Pirizadeh"
            info="Im basically what you would call an aspiring frond-end developer, and this is my portfolio. Welcome!"
            >
                <Link to="/projects" className="btn-white">
                    Check out my projects
                </Link>
            </Banner>
    </SimpleHero>
    <About />
    <Services />
</Layout>
)