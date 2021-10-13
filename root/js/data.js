const jobsArr = [
  {
    rangeOfYear: "2021 - current",
    company: "freelancer",
    role: "Full-stack Developer",
    text: "Presently I work as a Full-stack developer after I sharpened my skills in the front & back end technologies to deliver software that serves as a value which's maintainable, scalable and meets the customer needs.",
  },
  {
    rangeOfYear: "jan - june, 2021",
    company: "App-script Company",
    role: "Front-end Developer, odoo Developer",
    text: "In this period of time I work as an ERP developer mainly with odoo framework in regards to functional & technical sids, as well as front-end developer and collaberate with the team.",
  },
  {
    rangeOfYear: "2020 - 2021",
    company: "Khatwa intiative",
    role: "Full-stack developer",
    text: "In this period of time I've worked as an intern full-stack developer using html, css, javascript \
     and some frameworks such as: bootstrap and Reactjs for the front-end. In addition to that I've worked with Nodejs and Express as its framework to develop the back-end.\
      And I've done tons of projects using Nodejs & mongoDB.",
  },
  {
    rangeOfYear: "2019 - 2020",
    company: "EDC",
    role: "English Teacher",
    text: "In this period of time I've worked as an English teacher at English Discussion Center.\
     and I was awarded a certificate of English Proficiency and Advanced Communication Skills.",
  },
];

const projectArr = [
  {
    title: "momo store",
    screenShot: "img/project-momostore.png",
    linkDetails: "project-momostore.html",
  },
  {
    title: "app-script",
    screenShot: "img/project-appscript.jpeg",
    linkDetails: "project-appscript.html",
  },
  {
    title: "boom-media",
    screenShot: "img/project-boom.jpeg",
    linkDetails: "project-boom.html",
  },
  {
    title: "Human Resources",
    screenShot: "img/odoo-3.jpeg",
    linkDetails: "project-odoo.html",
  },
  {
    title: "facebook-clone",
    screenShot: "img/project-1.png",
    linkDetails: "project-facebook.html",
  },
  {
    title: "secret-blogs",
    screenShot: "img/project-2.png",
    linkDetails: "project-blog.html",
  },
  
];

const projDetials = [
  {
    title: "Momo Store",
    screenShots: [
      "./img/project-momostore.png",
      "./img/Momo1.png",
      "./img/Momo2.png",
    ],
    about:
      "This project built for a privately held company (Sole proprietorship) that trades in products and provide \
       shippment service from Asia all the way to africa. Hit the button above to check it up.",
    techs: ["php", "mysqlDB", "Reactjs"],
  },
  {
    title: "Appscript website",
    screenShots: [
      "./img/project-appscript.jpeg",
      "https://via.placeholder.com/500/0000ff?text=no+more+shots+😋️",
      "https://via.placeholder.com/500/000000?text=no+more+shots+😋️",
    ],
    about:
      "This web application is built for a company that specializes in software solutions and ERP systems,\
       located in Sudan head-quartered in Khartoum. Hit the button above to see it up live and running.",
    techs: ["html", "css", "bootstrap", "javascript"],
  },
  {
    title: "Boom Media Consultancy",
    screenShots: [
      "./img/project-boom.jpeg",
      "https://via.placeholder.com/500/0000ff?text=no+more+shots+😋️",
      "https://via.placeholder.com/500/000000?text=no+more+shots+😋️",
    ],
    about:
      "Boom Media Consultancy it's a company specialized in more than one major,\
        works in quite variety of fields such as Media Analysis & Monitoring, Bussiness Intellegence,\
         Content Creation and Digital Marketing.",

    techs: ["html", "css", "materialize", "javascript"],
  },

  {
    title: "Facebook front-end Clone",
    screenShots: [
      "./img/project-1.png",
      "https://via.placeholder.com/500/0000ff?text=no+more+shots+😋️",
      "https://via.placeholder.com/500/000000?text=no+more+shots+😋️",
    ],
    about:
      "This is my very first static website,\
     I was quite amazed of facebook and I really wanted to do something that would look the same,\
      so I built it for learning purposes.\
       Even though it's not that so cool I keep this project for the record to remind myself where I was and where I am right now.\
        Voilla it's decades apart! 😎️✌️",

    techs: ["html", "css", "bootstrap"],
  },
  {
    title: "Secret Blogs",
    screenShots: [
      "./img/project-2.png",
      "https://via.placeholder.com/500/0000ff?text=no+more+shots+😋️",
      "https://via.placeholder.com/500/000000?text=no+more+shots+😋️",
    ],
    about:
      "After finishing my journey with learing the front-end technologies,\
       I wanted to level up my skills and learn how to do data persisting and calculations,\
        in other words, the back-end and databases. The idea of Secret Blogs in a nut shell is a blog 😂️\
        but you need a registerd account on this web app in order to post your own blog,\
         otherwise you'd only be able to dipslay blogs from different users.\
         But here the big question appears,\
         what the heck it has to do with secrets 🙄️? ok just bear with me,\
          you can display all blogs in the web app but you won't be able to know who's written it",

    techs: ["html", "css", "javascript", "nodejs", "mongoDB"],
  },
  
  {
    title: "Human Resources Module",
    screenShots: [
      "./img/odoo-3.jpeg",
      "./img/odoo-2.jpeg",
      "./img/odoo-4.jpeg",
    ],
    about:
      "This custom Odoo Module was built by app-script development team.\
       In essence this module handles the process of claculating employees' loans monthly and anually\
        and the incentives awarded to each employee. All of this represented in a concise and clear (PDF or Excel sheet) reports.\
         and my main role in this project was to rest assure these reports satisfy the client's need.",

    techs: ["xml", "html", "css", "odoo orm", "postgresql", "python"],
  },
];

export { jobsArr, projectArr, projDetials };
