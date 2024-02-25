declare namespace astroHTML.JSX {
  /**
   * as we use Netlify forms, we need to add the netlify attribute
   * as a valid HTML attribute so TyteScript doesn't complain
   */

  interface HTMLAttributes {
    netlify?: string;
  }
}
