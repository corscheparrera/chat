const PAYMENT_SERVER_URL =
  process.env.NODE_ENV === "production"
    ? "http://myapidomain.com"
    : "http://192.168.2.11:5000/charge";

export default PAYMENT_SERVER_URL;
