import { DefineComponent } from "vue";
import Home from "../pages/Home.vue";
import SignIn from "../pages/SignIn.vue";
import Page404 from "../pages/404.vue";

type Route = {
  name: string;
  title?: string;
  protect?: boolean;
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
    name: "sign-up",
    title: 'Sign up',
    path: "/sign-up",
    component: Home,
  },
  {
    name: 'profile',
    protect: true,
    path: '/profile',
    component: Home,
  },
  {
    name: 'images',
    path: '/images',
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: Page404,
  },
];

export { Route, routes };
