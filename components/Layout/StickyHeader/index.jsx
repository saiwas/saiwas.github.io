import { useState, useEffect, useRef, useCallback } from "react";
import Link from 'next/link'

let timeout

const StickyHeader = ({
    title = "Johnny Zhang",
    TopBtn = () => (<Link href="/"><a className="top-btn btn"> Blog</a></Link>)
}) => {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef()
    const toggleSticky = useCallback(() => {
        const { top } = headerRef.current.getBoundingClientRect()
        const showOutBottom = screen.height / 4
        if (timeout) {
            clearTimeout(timeout)
        }
        if (top <= 0 && document.documentElement.scrollTop >= showOutBottom) {
            timeout = (!isSticky && setTimeout(() => setIsSticky(true), 100))
        } else {
            timeout = (isSticky && setTimeout(() => setIsSticky(false), 100))
        }
    }, [isSticky]);

    useEffect(() => {
        window.addEventListener("scroll", toggleSticky);
        return () => window.removeEventListener("scroll", toggleSticky);
    }, [toggleSticky]);

    return(
        <div className={`${isSticky ? "stick" : "none-stick"} header-section section `} ref={headerRef}>
            <div className="container">
                <div className="row" style={{display: "block"}}>
                    <div className="col-xs-12">
                        <div className="logo float-left">
                            <a className="logo" href="https://github.com/saiwas">
                                <img style={{borderRadius: "35px"}} src="https://avatars2.githubusercontent.com/u/3829027?s=460&v=4" alt="avatars" />
                            </a>
                        </div>
                        <div className="header-title">
                            {title}
                        </div>
                        <div className="float-right">
                            <TopBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader
