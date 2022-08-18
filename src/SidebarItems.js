import { 
    Home24Filled,
    Search24Filled,
    Map24Filled,
    Call24Filled
} from '@fluentui/react-icons'

const SidebarItems = {
    Home: {
        "icon": <Home24Filled/>,
        "title": "Home",
        "page": "/"
    },

    FindPlaces: {
        "icon": <Search24Filled/>,
        "title": "Find Places",
        "page": "/test"
    },

    ViewMap: {
        "icon": <Map24Filled/>,
        "title": "View Map",
        "page": "/test2"
    },

    ContactUs: {
        "icon": <Call24Filled/>,
        "title": "Contact Us",
        "page": "/test3"
    }
}

export default SidebarItems;