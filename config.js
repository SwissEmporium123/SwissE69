const config = {
  // REQUIRED
  appName: "Swiss Emporium Marketplace",
  // REQUIRED: a short description of your app for SEO tags (can be overwritten)
  appDescription:
    "Swiss Emporium Marketplace is your premier destination for luxury timepieces, offering authenticated watches from the world's finest Swiss watchmakers.",
  // REQUIRED (no https://, not trialing slash at the end, just the naked domain)
  domainName: "speedbuildmarketplace.com",

  sendGrid: {
    // subdomain to use when sending emails, if you don't have a subdomain, just remove it. Highly recommended to have one (i.e. mg.yourdomain.com or mail.yourdomain.com)
    subdomain: "mail",
    // REQUIRED — Email 'From' field to be used when sending magic login links
    fromNoReply: `Peter <peter@gmail.com>`,
    // REQUIRED — Email 'From' field to be used when sending other emails, like abandoned carts, updates etc..
    fromAdmin: `Peter Parker <peter@gmail.com>`,
    // Email shown to customer if need support. Leave empty if not needed => if empty, set up Crisp above, otherwise you won't be able to offer customer support."
    supportEmail: "peter@gmail.com",
    // When someone replies to supportEmail sent by the app, forward it to the email below (otherwise it's lost). If you set supportEmail to empty, this will be ignored.
    forwardRepliesTo: "peter.parker@gmail.com",
  },
  // Database type (mongodb or supabase)
  databaseType: process.env.DATABASE_TYPE || "mongodb",
};

export default config;
