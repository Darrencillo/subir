

const siteConfig = 
{
  //title: 'CIM', // Title for your website.
  //tagline: 'Cloud Information Model',
  url: 'https://Darrencillo.github.io',
  baseUrl: '/subir/',
  projectName: 'subir',
  organizationName: 'Darrencillo',
  

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {page: 'index', label: 'Inicio',},
    {page: '/website/pages/en/SubjectAreas1', label: 'Subjects Area'},
    {href: 'https://github.com/Darrencillo/subir.git', label: 'GitHub' },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/logo_cim.svg',
  

  /* Colors for website */
  colors: {
    primaryColor: '#696969',
    secondaryColor: '#65b2e8',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  
};

module.exports = siteConfig;
