import * as React from 'react';
import { Link } from 'gatsby';
import { container, heading, navlinks, navlinkitem, navlinktext } from './layout.module.css';
console.log('container:', container);

const Layout = ({ pageTitle, pageHeading, children }) => {
    return (
        <main className={container}>
            <title>{pageTitle}</title>
            <nav>
                <ul className={navlinks}>
                    <li className={navlinkitem}><Link to="/" className={navlinktext}>Home</Link></li>
                    <li className={navlinkitem}><Link to="/about" className={navlinktext}>About</Link></li>
                    <li className={navlinkitem}><Link to="/contact" className={navlinktext}>Contact</Link></li>
                </ul>
            </nav>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>
    )

}


export default Layout;