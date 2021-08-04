import { DefineComponent } from "vue";
import Home from "../pages/Home.vue";
import SignIn from "../pages/SignIn.vue";
import Profile from "../pages/Profile.vue";
import Gallery from "../pages/Gallery.vue";
import Page404 from "../pages/404.vue";

type Route = {
  name: string;
  title?: string;
  path: string;
  component: DefineComponent<{}, {}, any>;
};

const routes: Route[] = [
  {
    name: "home",
    title: 'Home page',
    path: "/",
    component: Home,
  },
  {
    name: 'sign-in',
    title: 'Sign in',
    path: "/sign-in",
    component: SignIn,
  },
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
  },
  {
    name: 'images',
    path: '/images',
    component: Gallery,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];

export { Route, routes };
