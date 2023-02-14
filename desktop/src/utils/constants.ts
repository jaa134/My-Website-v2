export enum RouteName {
  NotFound = '*',
  Home = '/',
  About = 'about',
  Contact = 'contact',
  Experience = 'experience',
}

export const imagesPath = 'static/images';
export const albumPath = `${imagesPath}/album`;
export const educationPath = `${imagesPath}/education`;
export const skillsPath = `${imagesPath}/skills`;

export const documentsPath = 'static/documents';
export const resumePath = `${documentsPath}/Alspaw-Jacob Resume.pdf`;
export const transcriptPath = `${documentsPath}/Alspaw-Jacob Transcript.pdf`;

export const PHONE_NUMBER = '+1 636 699-7344';
export const EMAIL_ADDRESS = 'dev@jacob-alspaw.com';
export const LOCATION = 'Littleton, Colorado 80128';

export enum Link {
  LinkedIn = 'https://www.linkedin.com/in/jacob-alspaw',
  GitHub = 'https://github.com/jaa134',
  REPOS = 'https://github.com/jaa134?tab=repositories',
  Facebook = 'https://www.facebook.com/jacobalexander.alspaw',
  Instagram = 'https://www.instagram.com/jacobalspaw/',
  Twitter = 'https://twitter.com/JacobAlspaw',
  CaseWestern = 'https://case.edu/',
  UniversityOfCapeTown = 'https://www.uct.ac.za/',
  StudyAbroad = 'https://www.iesabroad.org/programs/cape-town-university-cape-town',
}

export enum Handle {
  LinkedIn = '@Jacob Alspaw',
  GitHub = '@jaa134',
  Facebook = '@jacobalexander.alspaw',
  Instagram = '@jacobalspaw',
  Twitter = '@JacobAlspaw',
}

interface Photo {
  src: string;
  width: number;
  height: number;
  title: string;
  description: string;
}

export const photos: Photo[] = [
  {
    src: `${albumPath}/7m2FbjvtBR.jpg`,
    width: 2247,
    height: 3024,
    title: 'Thanksgiving - 2021',
    description: 'A good photo of me!',
  },
  {
    src: `${albumPath}/xhEZaOycWJ.jpg`,
    width: 6000,
    height: 4000,
    title: 'Leave No Trace - Trail Half Marathon',
    description: 'I love running. I placed 4th out of ~250 in this race!',
  },
  {
    src: `${albumPath}/O5WQ7PXP7T.jpg`,
    width: 3354,
    height: 4494,
    title: 'Thanksgiving - 2020',
    description: 'My dad and little brother having a good laugh',
  },
  {
    src: `${albumPath}/gHIfkZqH7P.jpg`,
    width: 3088,
    height: 2316,
    title: 'Utah UTVs - 2019',
    description: 'I never want to get lost in a desert again.',
  },
  {
    src: `${albumPath}/GK6GvUHSho.jpg`,
    width: 3024,
    height: 4032,
    title: 'Grand Tetons - 2020',
    description: 'Backpacking... I woke up to a moose hovering over my tent.',
  },
  {
    src: `${albumPath}/rhSI0TIP7Q.jpg`,
    width: 3000,
    height: 2000,
    title: 'Rock Climbing - 2021',
    description: 'Climbing with one of the best belayers out there.',
  },
  {
    src: `${albumPath}/kW1CYFV8ra.jpg`,
    width: 3000,
    height: 2000,
    title: 'Rock Climbing - 2021',
    description: 'Look how focused I am.',
  },
  {
    src: `${albumPath}/PdIXNLbgsz.jpg`,
    width: 3024,
    height: 4032,
    title: 'Grand Tetons - 2020',
    description: 'I got paid to setup and launch the hot air balloons behind me.',
  },
  {
    src: `${albumPath}/a8w4c2lSCT.jpg`,
    width: 1440,
    height: 1800,
    title: "Pike's Peak - 2022",
    description: 'Thin air and strong winds are not a good combination.',
  },
  {
    src: `${albumPath}/ONhrIyerW8.jpg`,
    width: 1440,
    height: 1800,
    title: "Pike's Peak - 2022",
    description: 'Sunset drives down a mountain. Happy to be able to breathe again.',
  },
  {
    src: `${albumPath}/VN3ISXANh2.jpg`,
    width: 3024,
    height: 4032,
    title: "Grandma's Country Home - 2022",
    description: 'Trying my hardest to make my niece laugh.',
  },
  {
    src: `${albumPath}/eHTLdxiah1.jpg`,
    width: 4032,
    height: 3024,
    title: 'Moving to Colorado - 2021',
    description: 'Saying goodbye to Cleveland!',
  },
  {
    src: `${albumPath}/KQDWtaYRM2.jpg`,
    width: 3024,
    height: 4032,
    title: 'July 4th Float - 2021',
    description: 'Glad to be around good friends.',
  },
  {
    src: `${albumPath}/Ie4gABa8rJ.jpg`,
    width: 3024,
    height: 4032,
    title: 'First Time Skiing - 2018',
    description: 'I swear I am much better now.',
  },
  {
    src: `${albumPath}/EZMnWVbb7S.jpg`,
    width: 3024,
    height: 4032,
    title: 'CLE Little Italy - 2021',
    description: "Maxi's is the best Italian restuarant anywhere.",
  },
  {
    src: `${albumPath}/9tBRzSjIWa.jpg`,
    width: 4032,
    height: 3024,
    title: 'Lake Tahoe - 2021',
    description: 'Never seen more clear water in my life.',
  },
  {
    src: `${albumPath}/2NGU67BWMo.jpg`,
    width: 3024,
    height: 4032,
    title: 'Lewis & Clark Trail - 2020',
    description: 'I love my dad.',
  },
  {
    src: `${albumPath}/DQRFjLD1r9.jpg`,
    width: 3024,
    height: 4032,
    title: 'Halloween - 2019',
    description: 'Homemade costumes made by yours truly.',
  },
  {
    src: `${albumPath}/61ZiKMAT7f.jpg`,
    width: 6462,
    height: 4327,
    title: 'Water Polo Tournament - 2018',
    description: 'A super intense sport that I wish I put more time into.',
  },
  {
    src: `${albumPath}/8Eyu8lpCsy.jpg`,
    width: 4032,
    height: 3024,
    title: 'Grand Canyon - 2018',
    description: 'Hiked all the way down and back out. It was ~120F at the bottom!!!',
  },
  {
    src: `${albumPath}/m2zOmedogZ.jpg`,
    width: 4032,
    height: 3024,
    title: 'Zion National Park - 2021',
    description: "I did not complete Angel's landing...",
  },
  {
    src: `${albumPath}/LZpz9AcjCe.jpg`,
    width: 1600,
    height: 1199,
    title: 'IM Soccer - 2017',
    description: "Winner's multiple years in a row. I got so muddy as goalie this game.",
  },
  {
    src: `${albumPath}/RHwrqHjiMn.jpg`,
    width: 4032,
    height: 3024,
    title: 'Family visiting Cleveland - 2021',
    description: 'My older brother is always acting like this.',
  },
  {
    src: `${albumPath}/Ts0QrqaHNq.jpg`,
    width: 2048,
    height: 1365,
    title: 'Float Trip - 2017',
    description: 'The currents were moving a little too slow today.',
  },
  {
    src: `${albumPath}/V4zwPZYXCf.jpg`,
    width: 5184,
    height: 3456,
    title: 'Cape Town, SA - 2017',
    description: 'Taken while solo hiking Table Mountain.',
  },
  {
    src: `${albumPath}/Xyo1sW6Ysx.jpg`,
    width: 2048,
    height: 1365,
    title: 'Finger Lakes - 2017',
    description: 'I probably didnt catch anything.',
  },
  {
    src: `${albumPath}/dSQnM1nANp.jpg`,
    width: 3024,
    height: 2268,
    title: 'Sky Diving in South Africa - 2017',
    description: 'I blacked out the first 30 seconds of free fall. This one is a blur.',
  },
  {
    src: `${albumPath}/h79Lpcm17g.jpg`,
    width: 1501,
    height: 2000,
    title: 'Grand Canyon - 2018',
    description: "Don't take group photos near the cliffs.",
  },
  {
    src: `${albumPath}/jBYfx8uyXy.jpg`,
    width: 4032,
    height: 3024,
    title: 'Jenny Lake - 2018',
    description: 'Such a gorgeous day, killing time with a hike while waiting for friends.',
  },
  {
    src: `${albumPath}/nQg9bOZ0ip.jpg`,
    width: 5184,
    height: 3456,
    title: 'Rocky Mountain National Park - 2017',
    description: 'Found a good spot to sit in the middle of a stream.',
  },
  {
    src: `${albumPath}/pWPl4nOfDe.jpg`,
    width: 5184,
    height: 3456,
    title: 'Shark Cage Diving in South Africa - 2017',
    description: 'Code named "flower picking" because we weren\'t supposed to do this.',
  },
  {
    src: `${albumPath}/ua8IIyNGXz.jpg`,
    width: 5184,
    height: 3456,
    title: 'Panama City, FL - 2016',
    description: 'Sunsets are made even better with friends on the beach.',
  },
  {
    src: `${albumPath}/ypqCmdMDip.jpg`,
    width: 720,
    height: 960,
    title: 'Grand Canyon - 2018',
    description: 'Little brother and I enjoying what time wwe can spend together.',
  },
];

export interface SkillLink {
  displayText: string;
  imagePath: string;
  href?: string | null;
}

export const languages: SkillLink[] = [
  {
    displayText: 'JavaScript',
    href: 'https://www.javascript.com/',
    imagePath: `${skillsPath}/JavaScript.svg`,
  },
  {
    displayText: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    imagePath: `${skillsPath}/TypeScript.svg`,
  },
  {
    displayText: 'Java',
    href: 'https://www.java.com/en/',
    imagePath: `${skillsPath}/Java.svg`,
  },
  {
    displayText: 'C#',
    href: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    imagePath: `${skillsPath}/CSharp.svg`,
  },
  {
    displayText: 'Swift',
    href: 'https://developer.apple.com/swift/',
    imagePath: `${skillsPath}/Swift.svg`,
  },
  {
    displayText: 'C++',
    href: 'https://www.cplusplus.com/',
    imagePath: `${skillsPath}/C++.svg`,
  },
  {
    displayText: 'GraphQL',
    href: 'https://graphql.org/',
    imagePath: `${skillsPath}/GraphQL.svg`,
  },
  {
    displayText: 'SQL',
    href: 'https://www.w3schools.com/sql/',
    imagePath: `${skillsPath}/SQL.svg`,
  },
  {
    displayText: 'HTML5',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    imagePath: `${skillsPath}/HTML5.svg`,
  },
  {
    displayText: 'CSS3',
    href: 'https://www.w3schools.com/css/',
    imagePath: `${skillsPath}/CSS3.svg`,
  },
  {
    displayText: 'Sass',
    href: 'https://sass-lang.com/',
    imagePath: `${skillsPath}/Sass.svg`,
  },
  {
    displayText: 'Bash',
    href: 'https://www.gnu.org/software/bash/',
    imagePath: `${skillsPath}/Bash.svg`,
  },
  {
    displayText: 'MATLAB',
    href: 'https://www.mathworks.com/products/matlab.html',
    imagePath: `${skillsPath}/MATLAB.svg`,
  },
  {
    displayText: 'R',
    href: 'https://www.r-project.org/about.html',
    imagePath: `${skillsPath}/R.svg`,
  },
];

export const technologies: SkillLink[] = [
  {
    displayText: 'React',
    href: 'https://reactjs.org/',
    imagePath: `${skillsPath}/React.svg`,
  },
  {
    displayText: 'Vue',
    href: 'https://vuejs.org/',
    imagePath: `${skillsPath}/Vue.svg`,
  },
  {
    displayText: 'Angular',
    href: 'https://angular.io/',
    imagePath: `${skillsPath}/Angular.svg`,
  },
  {
    displayText: 'jQuery',
    href: 'https://jquery.com/',
    imagePath: `${skillsPath}/jQuery.svg`,
  },
  {
    displayText: 'Dojo Toolkit',
    href: 'https://dojotoolkit.org/',
    imagePath: `${skillsPath}/Dojo.svg`,
  },
  {
    displayText: 'KnockoutJS',
    href: 'https://knockoutjs.com/',
    imagePath: `${skillsPath}/Knockout.svg`,
  },
  {
    displayText: 'D3',
    href: 'https://d3js.org/',
    imagePath: `${skillsPath}/D3.svg`,
  },
  {
    displayText: 'Node.js',
    href: 'https://nodejs.org/en/',
    imagePath: `${skillsPath}/Node.svg`,
  },
  {
    displayText: 'Apollo GraphQL',
    href: 'https://www.apollographql.com/',
    imagePath: `${skillsPath}/Apollo.svg`,
  },
  {
    displayText: 'GraphQL Shield',
    href: 'https://www.graphql-shield.com/',
    imagePath: `${skillsPath}/Shield.png`,
  },
  {
    displayText: 'Express',
    href: 'https://expressjs.com/',
    imagePath: `${skillsPath}/Express.svg`,
  },
  {
    displayText: 'ESLint',
    href: 'https://eslint.org/',
    imagePath: `${skillsPath}/ESLint.svg`,
  },
  {
    displayText: 'Babel',
    href: 'https://babeljs.io/',
    imagePath: `${skillsPath}/Babel.svg`,
  },
  {
    displayText: 'Webpack',
    href: 'https://webpack.js.org/',
    imagePath: `${skillsPath}/Webpack.svg`,
  },
  {
    displayText: 'Qt framework',
    href: 'https://www.qt.io/',
    imagePath: `${skillsPath}/Qt.svg`,
  },
  {
    displayText: 'Hibernate ORM',
    href: 'https://hibernate.org/orm/',
    imagePath: `${skillsPath}/Hibernate.svg`,
  },
  {
    displayText: 'MongoDB',
    href: 'https://www.mongodb.com/',
    imagePath: `${skillsPath}/MongoDB.svg`,
  },
  {
    displayText: 'Microsoft SQL Server',
    href: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
    imagePath: `${skillsPath}/SQLServer.svg`,
  },
  {
    displayText: 'ASP.NET MVC',
    href: 'https://dotnet.microsoft.com/apps/aspnet/mvc',
    imagePath: `${skillsPath}/ASP.svg`,
  },
  {
    displayText: 'Tomcat',
    href: 'https://tomcat.apache.org/',
    imagePath: `${skillsPath}/Tomcat.svg`,
  },
  {
    displayText: 'Jersey',
    href: 'https://eclipse-ee4j.github.io/jersey/',
    imagePath: `${skillsPath}/Jersey.svg`,
  },
  {
    displayText: 'Docker',
    href: 'https://www.docker.com/',
    imagePath: `${skillsPath}/Docker.svg`,
  },
  {
    displayText: 'Jest',
    href: 'https://jestjs.io/',
    imagePath: `${skillsPath}/Jest.svg`,
  },
  {
    displayText: 'TestCafe',
    href: 'https://testcafe.io/',
    imagePath: `${skillsPath}/TestCafe.svg`,
  },
  {
    displayText: 'Git',
    href: 'https://git-scm.com/',
    imagePath: `${skillsPath}/Git.svg`,
  },
  {
    displayText: 'Mercurial',
    href: 'https://www.mercurial-scm.org/',
    imagePath: `${skillsPath}/Mercurial.svg`,
  },
  {
    displayText: 'Ant',
    href: 'https://ant.apache.org/',
    imagePath: `${skillsPath}/Ant.svg`,
  },
  {
    displayText: 'Yarn',
    href: 'https://yarnpkg.com/',
    imagePath: `${skillsPath}/Yarn.svg`,
  },
  {
    displayText: 'npm',
    href: 'https://www.npmjs.com/',
    imagePath: `${skillsPath}/NPM.svg`,
  },
  {
    displayText: 'IntelliJ',
    href: 'https://www.jetbrains.com/idea/',
    imagePath: `${skillsPath}/IntelliJ.svg`,
  },
  {
    displayText: 'Visual Studio Code',
    href: 'https://code.visualstudio.com/',
    imagePath: `${skillsPath}/Code.svg`,
  },
  {
    displayText: 'Visual Studio',
    href: 'https://visualstudio.microsoft.com/',
    imagePath: `${skillsPath}/VisualStudio.svg`,
  },
  {
    displayText: 'Qt Creator',
    href: 'https://www.qt.io/product/development-tools',
    imagePath: `${skillsPath}/Qt.svg`,
  },
  {
    displayText: 'Adobe Photoshop',
    href: 'https://www.adobe.com/products/photoshop.html',
    imagePath: `${skillsPath}/Photoshop.svg`,
  },
  {
    displayText: 'IcoMoon',
    href: 'https://icomoon.io/',
    imagePath: `${skillsPath}/IcoMoon.svg`,
  },
  {
    displayText: 'Cesium',
    href: 'https://cesium.com/',
    imagePath: `${skillsPath}/Cesium.svg`,
  },
  {
    displayText: 'Raspberry Pi',
    href: 'https://www.raspberrypi.org/',
    imagePath: `${skillsPath}/RaspberryPi.svg`,
  },
];

export const services: SkillLink[] = [
  {
    displayText: 'GitHub',
    href: 'https://github.com/',
    imagePath: `${skillsPath}/GitHub.svg`,
  },
  {
    displayText: 'Jira',
    href: 'https://www.atlassian.com/software/jira',
    imagePath: `${skillsPath}/Jira.svg`,
  },
  {
    displayText: 'Jenkins',
    href: 'https://www.jenkins.io/',
    imagePath: `${skillsPath}/Jenkins.svg`,
  },
  {
    displayText: 'Slack',
    href: 'https://slack.com/',
    imagePath: `${skillsPath}/Slack.svg`,
  },
  {
    displayText: 'Microsoft Teams',
    href: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
    imagePath: `${skillsPath}/Teams.svg`,
  },
  {
    displayText: 'SonarQube',
    href: 'https://www.sonarqube.org/',
    imagePath: `${skillsPath}/SonarQube.svg`,
  },
  {
    displayText: 'Salesforce',
    href: 'https://www.salesforce.com/',
    imagePath: `${skillsPath}/Salesforce.svg`,
  },
];

export const devPractices: SkillLink[] = [
  {
    displayText: 'Agile',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Scrum',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'DevOps',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'CI/CD',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Automated deployments',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Test driven development',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Pull requests & review processes',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Team collaboration',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'UI/UX design review',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Backlog grooming',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Microservices',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
  {
    displayText: 'Monolithic applications',
    imagePath: `${skillsPath}/DevelopmentGeneral.svg`,
  },
];

export interface Achievement {
  id: string;
  message: string;
}

export const achievements: Achievement[] = [
  {
    id: '1',
    message:
      'Managed a small team of developers responsible for producing, maintaining, and modifying web front-end code for enterprise level software',
  },
  {
    id: '2',
    message:
      'Ensured that correct content, product assortments, and UI functionality is developed, tested, scheduled, and validated against business expectations before it is released to clients',
  },
  {
    id: '3',
    message: 'Reduced known UI defects in our product backlog by over 90% in less than 10 months',
  },
  {
    id: '4',
    message: 'Identified and fixed various performance traps that resulted in web pages rendering up to 125x faster',
  },
  {
    id: '5',
    message:
      'Exceeded expectations and received distinguished honors during all performance reviews as a full-stack developer and front-end lead at IBM UrbanCode and HCL Software',
  },
  {
    id: '6',
    message:
      'Maintained personal relationships with high-profile customer accounts that need a dedicated advocate to meet SLA on issues that impact millions of dollars in financial investments',
  },
  {
    id: '7',
    message:
      'Devised a data-driven service, website, and mobile application with senior university faculty that computed and conveyed real-time “busyness” metrics for various locations around Case Western Reserve University campus',
  },
  {
    id: '8',
    message: 'Awarded a $25,000 grant from the Innovation Fund to continue development of medical diagnostic equipment',
  },
];
