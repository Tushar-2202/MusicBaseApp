const Routes = {
  /*  Root Stacks    */
  Authenticated: 'Authenticated',
  UnAuthenticated: 'UnAuthenticated',
  Splash: 'Splash',
  /*  Non-Authenticated Routes    */
  Login: 'Login',
  /*  Authenticated Routes    */
  Home: 'Home',
  Profile: 'Profile',
} as const;
export default Routes;
