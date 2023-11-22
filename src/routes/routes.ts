import {
    HOME_ROUTE,
    FRAME_HOUSE_CONSTRUCTION_ROUTE,
    POW360_ROUTE,
    MAKE_AN_ORDER_ROUTE,
    ROOMS_AND_SPACES_ROUTE,
} from '../utils/consts';
import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import FrameHouseConstructionPage from '../pages/FrameHouseConstructionPage.vue';
import Pow360Page from '../pages/Pow_360.vue';
import MakeAnOrderPage from '../pages/MakeAnOrderPage.vue';
import RoomsAndSpaces from '../pages/RoomsAndSpaces.vue';
// import Admin from '../pages/Admin.vue';
// import Basket from '../pages/Basket.vue';
// import Auth from '../pages/Auth.vue';
// import DevicePage from '../pages/DevicePage.vue';
// import Shop from '../pages/Shop.vue';
// // import Test from '../pages/Test.vue';
// import Test2 from '../pages/Test2.vue';

// import Personal from "../pages/ordering/Personal.vue";
// import Address from "../pages/ordering/Address.vue";
// import Payment from "../pages/ordering/Payment.vue";
// import Confirmation from "../pages/ordering/Confirmation.vue";

const routes = [
    {
        path: HOME_ROUTE, 
        component: HomePage,
    },
    {
        path: FRAME_HOUSE_CONSTRUCTION_ROUTE,
        component: FrameHouseConstructionPage,
    },
    {
        path: POW360_ROUTE,
        component: Pow360Page,
    },
    {
        path: MAKE_AN_ORDER_ROUTE,
        component: MakeAnOrderPage,
    },
    {
        path: ROOMS_AND_SPACES_ROUTE,
        component: RoomsAndSpaces,
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory()
});

export default router;
