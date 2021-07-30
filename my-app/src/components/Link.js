import React from 'react';

const Link = ( {className, href, children}) => {

    const onClick = (event) => {
        //metaKey is for MacOS, ctrlKey is for windows
        //this detects if those keys are being held down while clicking the link
        //and it will not run the rest of the function and allow the user to open the link in a new tab
        if (event.metaKey || event.ctrlKey) {
            return ;
        }

        event.preventDefault();
        window.history.pushState({},'', href);

        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    };

    return <a onClick={onClick} className={className} href={href}>{children}</a>
};

export default Link