const toggleMenuHandler = () => {

    const getClass = (selector, none, clazz) => {
        const className = document.querySelector(selector).getAttribute("class") === none ? clazz : none;
        return className;
    }

    const setClass = (selector, attr = "class", attrValue = "none") => {
        const className = document.querySelector(selector).setAttribute(attr, attrValue);
        return className;
    }

    const btnBar1_class = getClass("#btnBar1", "none", "btnBar1-rotate");
    const btnBar2_class = getClass("#btnBar2", "none", "btnBar2-rotate");
    const btnBar3_class = getClass("#btnBar3", "none", "btnBar3-hide");
    const navbarClass   = getClass("#navbar", "none", "navbarHeight");
    const logotype      = getClass("#logotype", "none", "logoChangePosition");

    $(window).scroll( () => {
        const scroll = $(window).scrollTop();
        
        if(scroll > 1) {
            setClass("#navbar");
            setClass("#btnBar1");
            setClass("#btnBar2");
            setClass("#btnBar3");
            setClass("#logotype");
        }
    });

    setClass("#btnBar1", "class", btnBar1_class);        
    setClass("#btnBar2", "class", btnBar2_class);        
    setClass("#btnBar3", "class", btnBar3_class);        
    setClass("#navbar", "class", navbarClass);  

    setTimeout( () => setClass("#logotype", "class", logotype), 100);
}

