const STRIPE_PUBLISHABLE =
  process.env.NODE_ENV === "production"
    ? "pk_test_TSSWOwzYJyk7iWpS0CkoaJAg"
    : "pk_test_TSSWOwzYJyk7iWpS0CkoaJAg";

export default STRIPE_PUBLISHABLE;

