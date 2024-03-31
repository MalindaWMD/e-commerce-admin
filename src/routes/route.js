/**
 * The single Route module
 * 
 * Uses to modularize and extend to route funcitonality.
 * 
 * Supported optoins are,
 * path      -> Required.
 * component -> Optional.
 * name      -> Optional but betting setting a name. This is used to in sidebar navigation
 *              and site-wide search.
 * icon      -> Optional. Sidebar icon.
 * hidden    -> Optional. Hide route from sidebar navigation. Default is false.
 * ordinal   -> Optional. Sidebar navigation ordinal. Use -1 to display at the bottom.
 * index     -> Optional. Determine if the route should index in the site-wide search. Default is true.
 */

export default function Route (porps) {
    const options = { 
        path: '/', 
        component: null, 
        name: '',
        private: false,
        icon: null,
        hidden: false,
        ordinal: -1,
        index: true,
    }

    return {...options, ...porps};
}