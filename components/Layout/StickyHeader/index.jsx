import { useState, useEffect, useRef, useCallback } from "react";

let timeout

const StickyHeader = () => {
    const [isSticky, setIsSticky] = useState(false);
    const headerRef = useRef()
    const toggleSticky = useCallback(() => {
        const {top, bottom} = headerRef.current.getBoundingClientRect()
        if (timeout) {
            clearTimeout(timeout)
        }
        if (top <= 0 && document.documentElement.scrollTop > bottom + 10) {
            timeout = (!isSticky && setTimeout(() => setIsSticky(true), 20))
        } else {
            timeout = (isSticky && setTimeout(() => setIsSticky(false), 20))
        }
    }, [isSticky]);

    useEffect(() => {
        window.addEventListener("scroll", toggleSticky);
        return () => window.removeEventListener("scroll", toggleSticky);
    }, [toggleSticky]);

    return(
        <div className={`${isSticky ? "stick" : ""} header-section section `} ref={headerRef}>
            <div className="container">
                <div className="row" style={{display: "block"}}>
                    <div className="col-xs-12">
                        <div className="logo float-left">
                            <a className="logo" href="https://github.com/saiwas">
                                <img style={{height: "75px", width: "75px", borderRadius: "35px"}} src="https://avatars2.githubusercontent.com/u/3829027?s=460&v=4" alt="avatars" />
                            </a>
                        </div>
                        <div className="float-right">
                            <a className="buy-btn top-btn" href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StickyHeader
