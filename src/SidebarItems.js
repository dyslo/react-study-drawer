import { 
    Home24Filled,
    Search24Filled,
    Map24Filled,
    Call24Filled
} from '@fluentui/react-icons'

const SidebarItems = [
    {
        id: "Home",
        type: "item",
        icon: <Home24Filled/>,
        title: "Home",
        page: "/"
    },
    {
        id: "Search",
        type: "item",
        icon: <Search24Filled/>,
        title: "Search",
        page: "/test"
    },
    {
        id: "Map",
        type: "item",
        icon: <Map24Filled/>,
        title: "Map",
        page: "/test2"
    },
    {
        id: "Contact Us",
        type: "item",
        icon: <Call24Filled/>,
        title: "Contact Us",
        page: "/routetest/1"
    }
]

export default SidebarItems;