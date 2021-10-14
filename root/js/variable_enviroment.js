// const netlify = "https://abdallah-alkaser.netlify.app/";
const github = "https://abdofola.github.io/Abdallah-Portfolio";
const domain =
  origin === github || window.location.hostname === "localhost"
    ? `${origin}/root`
    : origin;
const APPSCRIPT_PAGE = `${domain}/project-appscript.html`;
const BOOM_PAGE = `${domain}/project-boom.html`;
const ODOO_PAGE = `${domain}/project-odoo.html`;
const FACEBOOK_PAGE = `${domain}/project-facebook.html`;
const BLOG_PAGE = `${domain}/project-blog.html`;
const MOMOSTORE_PAGE = `${domain}/project-momostore.html`;
const INDEX_PAGE = `${domain}/`;

export {
  BOOM_PAGE,
  FACEBOOK_PAGE,
  BLOG_PAGE,
  APPSCRIPT_PAGE,
  INDEX_PAGE,
  MOMOSTORE_PAGE,
  ODOO_PAGE,
};
