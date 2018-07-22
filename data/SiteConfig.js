module.exports = {
  siteTitle: "Jonas Tebbe", // Site title.
  siteTitleShort: "Jonas", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Jonas Tebbe", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://jonastebbe.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Hey, I’m Jonas and I create digital products.", // Website description used for RSS feeds/meta description tag.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-74499165-1", // GA tracking ID.
  postDefaultCategoryID: "Tech", // Default category for posts.
  siteRss: "",
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "DD/MM/YYYY", // Date format for display.
  userName: "Jonas Tebbe", // Username to display in the author segment.
  userTwitter: "jonastebbe", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Berlin, Germany", // User location to display in the author segment.
  userDescription: "Hey, I’m Jonas and I create digital products.", // User description to display in the author segment.
  userLinks: [
    {
      label: "Email",
      url: "mailto:jonastebbe@googlemail.com",
      iconClassName: "fa fa-envelope"
    },
    {
      label: "Twitter",
      url: "https://www.twitter.com/jonastebbe",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/jonastebbe",
      iconClassName: "fa fa-instagram"
    },
    {
      label: "Unsplash",
      url: "https://unsplash.com/@jonastebbe",
      iconClassName: "fa fa-unsplash"
    },
    {
      label: "LinkedIn",
      url: "https://de.linkedin.com/in/jonastebbe",
      iconClassName: "fa fa-linkedin"
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/jonas.tebbe",
      iconClassName: "fa fa-facebook"
    },
    {
      label: "GitHub",
      url: "https://www.github.com/jonastebbe",
      iconClassName: "fa fa-github"
    }
  ],
  copyright: "Copyright © 2018.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#FFFDE7", // Used for setting manifest and progress theme colors.
  backgroundColor: "#ffffff" // Used for setting manifest background color.
};
