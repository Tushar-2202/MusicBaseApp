const Routes = {
  /*  Root Stacks    */
  Authenticated: 'Authenticated',
  UnAuthenticated: 'UnAuthenticated',
  Splash: 'Splash',
  /*  Non-Authenticated Routes    */
  Login: 'Login',
  SignUp: 'SignUp',
  /*  Authenticated Routes    */
  Home: 'Home',
} as const;

export default Routes;
