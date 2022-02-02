/* eslint-disable import/no-anonymous-default-export */
export default {
  name: "Kyle",
  email: "createkyle@protonmail.com",
  about:
    "Hey! I'm <b>Kyle</b>, a twenty-four years old <b>User Interface</b> and <b>Experience Designer</b> currently based in <b>California</b>.",

  // intro
  accomplishments: {
    name: "Recent Accomplishments",
    value: [
     	"Learned HTML + CSS",
     	"Started a side project",
     	"Cooked meal for myself and choked to death",
	"This is a test line",
    ],
  },
  socialLink: {
    name: "Social Links",
    value: [
      { name: "Behance", link: "https://www.behance.net/kylecreate" },
      { name: "Twitter", link: "https://www.twitter.com/kylecreate" },
      { name: "Spotify", link: "https://www.spotify.com" },
    ],
  },
  currentProfession: {
    name: "What I'm working on",
	  value: [
		  "Doing contract/freelance work",
		  "Available for new projects"
		  "Enjoying time"
	  ],
  },

  // Footer
  contactDetails: {
    name: "Let's conntact!",
    value: [
      {
        name: "Gmail",
        value: "kylecreate@protonmail.com",
      },
      {
        name: "Discord",
        value: "kyle.#0500",
      },
	{
	name: "Twitter",
        value: "kylecreate",
	},
    ],
  },
  currentStatus: {
    name: "What am I upto right now",
    value: [
      "Walking my dog in the park",
      "Making dog excuse to gawk at the hot girl",
	    "Working on things",
    ],
  },

  // work
  // image min-dimensions: 1640x600
  // image format: jpg, png, webp
  // if image is from an external source then add the domain in next.config.js
  workExperience: [
    {
      info: {
        "Project": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
	      "My Objectives": [
	        "User Testing",
	        "Accessibility improvements"
	      ],
      },

      link: "/",
      image: "/images/apple.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing",
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/spiderman.png",
    },
    {
      info: {
        "Company": ["Apple"],
        "Description": [
          "Looking to improve the overall quality of the product through a design thinking approach, as well as conducting Usability sessions to ensure the product appeals to our users.",
        ],
        "My Objectives": [
          "User Testing", 
          "Accessibility improvements"
        ],
      },

      link: "/",
      image: "/images/microsoft.png",
    },
  ],

  // available options:- light, dark, auto
  theme: "light",
};
