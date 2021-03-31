const socials = [
  {
    id: 0,
    name: "github",
    iconClassName: "fab fa-github",
    link: "https://github.com/Stevendeleon",
  },
  {
    id: 1,
    name: "linkedin",
    iconClassName: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/steve-deleon/",
  },
  {
    id: 3,
    name: "twitter",
    iconClassName: "fab fa-twitter",
    link: "https://twitter.com/StevenDeLeon10",
  },
];

export const socialMediaIcons = socials.map((social) => {
  return (
    <li key={social.id} className="px-2">
      <a
        href={social.link}
        target="_blank"
        className="text-gray-600 transition-all duration-150 ease-in-out hover:text-red-600 dark:text-gray-500 dark:hover:text-green-300 "
      >
        <i className={social.iconClassName} aria-hidden="false" />
      </a>
    </li>
  );
});
