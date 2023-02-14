export enum RouteName {
  NotFound = '*',
  Home = '/',
  About = 'about',
  Contact = 'contact',
  Experience = 'experience',
}

export const imagesPath = 'static/images';
export const albumImagesPath = `${imagesPath}/album`;
export const educationImagesPath = `${imagesPath}/education`;
export const skillsImagesPath = `${imagesPath}/skills`;
export const globeImagesPath = `${imagesPath}/globe`;

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
    src: `${albumImagesPath}/7m2FbjvtBR.jpg`,
    width: 2247,
    height: 3024,
    title: 'Thanksgiving - 2021',
    description: 'A good photo of me!',
  },
  {
    src: `${albumImagesPath}/xhEZaOycWJ.jpg`,
    width: 6000,
    height: 4000,
    title: 'Trail Half Marathon - 2020',
    description: 'I love running. I placed 4th out of ~250 in this race!',
  },
  {
    src: `${albumImagesPath}/O5WQ7PXP7T.jpg`,
    width: 3354,
    height: 4494,
    title: 'Thanksgiving - 2020',
    description: 'My dad and little brother having a good laugh',
  },
  {
    src: `${albumImagesPath}/gHIfkZqH7P.jpg`,
    width: 3088,
    height: 2316,
    title: 'Utah UTVs - 2019',
    description: 'I never want to get lost in a desert again.',
  },
  {
    src: `${albumImagesPath}/GK6GvUHSho.jpg`,
    width: 3024,
    height: 4032,
    title: 'Grand Tetons - 2020',
    description: 'Backpacking... I woke up to a moose hovering over my tent.',
  },
  {
    src: `${albumImagesPath}/rhSI0TIP7Q.jpg`,
    width: 3000,
    height: 2000,
    title: 'Rock Climbing - 2021',
    description: 'Climbing with one of the best belayers out there.',
  },
  {
    src: `${albumImagesPath}/kW1CYFV8ra.jpg`,
    width: 3000,
    height: 2000,
    title: 'Rock Climbing - 2021',
    description: 'Look how focused I am.',
  },
  {
    src: `${albumImagesPath}/PdIXNLbgsz.jpg`,
    width: 3024,
    height: 4032,
    title: 'Grand Tetons - 2020',
    description: 'I got paid to setup and launch the hot air balloons behind me.',
  },
  {
    src: `${albumImagesPath}/a8w4c2lSCT.jpg`,
    width: 1440,
    height: 1800,
    title: "Pike's Peak - 2022",
    description: 'Thin air and strong winds are not a good combination.',
  },
  {
    src: `${albumImagesPath}/ONhrIyerW8.jpg`,
    width: 1440,
    height: 1800,
    title: "Pike's Peak - 2022",
    description: 'Sunset drives down a mountain. Happy to be able to breathe again.',
  },
  {
    src: `${albumImagesPath}/VN3ISXANh2.jpg`,
    width: 3024,
    height: 4032,
    title: "Grandma's Country Home - 2022",
    description: 'Trying my hardest to make my niece laugh.',
  },
  {
    src: `${albumImagesPath}/eHTLdxiah1.jpg`,
    width: 4032,
    height: 3024,
    title: 'Moving to Colorado - 2021',
    description: 'Saying goodbye to Cleveland!',
  },
  {
    src: `${albumImagesPath}/KQDWtaYRM2.jpg`,
    width: 3024,
    height: 4032,
    title: 'July 4th Float - 2021',
    description: 'Glad to be around good friends.',
  },
  {
    src: `${albumImagesPath}/Ie4gABa8rJ.jpg`,
    width: 3024,
    height: 4032,
    title: 'First Time Skiing - 2018',
    description: 'I swear I am much better now.',
  },
  {
    src: `${albumImagesPath}/EZMnWVbb7S.jpg`,
    width: 3024,
    height: 4032,
    title: 'CLE Little Italy - 2021',
    description: "Maxi's is the best Italian restuarant anywhere.",
  },
  {
    src: `${albumImagesPath}/9tBRzSjIWa.jpg`,
    width: 4032,
    height: 3024,
    title: 'Lake Tahoe - 2021',
    description: 'Never seen more clear water in my life.',
  },
  {
    src: `${albumImagesPath}/2NGU67BWMo.jpg`,
    width: 3024,
    height: 4032,
    title: 'Lewis & Clark Trail - 2020',
    description: 'I love my dad.',
  },
  {
    src: `${albumImagesPath}/DQRFjLD1r9.jpg`,
    width: 3024,
    height: 4032,
    title: 'Halloween - 2019',
    description: 'Homemade costumes made by yours truly.',
  },
  {
    src: `${albumImagesPath}/61ZiKMAT7f.jpg`,
    width: 6462,
    height: 4327,
    title: 'Water Polo Tournament - 2018',
    description: 'A super intense sport that I wish I put more time into.',
  },
  {
    src: `${albumImagesPath}/8Eyu8lpCsy.jpg`,
    width: 4032,
    height: 3024,
    title: 'Grand Canyon - 2018',
    description: 'Hiked all the way down and back out. It was ~120F at the bottom!!!',
  },
  {
    src: `${albumImagesPath}/m2zOmedogZ.jpg`,
    width: 4032,
    height: 3024,
    title: 'Zion National Park - 2021',
    description: "I did not complete Angel's landing...",
  },
  {
    src: `${albumImagesPath}/LZpz9AcjCe.jpg`,
    width: 1600,
    height: 1199,
    title: 'IM Soccer - 2017',
    description: "Winner's multiple years in a row. I got so muddy as goalie this game.",
  },
  {
    src: `${albumImagesPath}/RHwrqHjiMn.jpg`,
    width: 4032,
    height: 3024,
    title: 'Family visiting Cleveland - 2021',
    description: 'My older brother is always acting like this.',
  },
  {
    src: `${albumImagesPath}/Ts0QrqaHNq.jpg`,
    width: 2048,
    height: 1365,
    title: 'Float Trip - 2017',
    description: 'The currents were moving a little too slow today.',
  },
  {
    src: `${albumImagesPath}/V4zwPZYXCf.jpg`,
    width: 5184,
    height: 3456,
    title: 'Cape Town, SA - 2017',
    description: 'Taken while solo hiking Table Mountain.',
  },
  {
    src: `${albumImagesPath}/Xyo1sW6Ysx.jpg`,
    width: 2048,
    height: 1365,
    title: 'Finger Lakes - 2017',
    description: 'I probably didnt catch anything.',
  },
  {
    src: `${albumImagesPath}/dSQnM1nANp.jpg`,
    width: 3024,
    height: 2268,
    title: 'Sky Diving in South Africa - 2017',
    description: 'I blacked out the first 30 seconds of free fall. This one is a blur.',
  },
  {
    src: `${albumImagesPath}/h79Lpcm17g.jpg`,
    width: 1501,
    height: 2000,
    title: 'Grand Canyon - 2018',
    description: "Don't take group photos near the cliffs.",
  },
  {
    src: `${albumImagesPath}/jBYfx8uyXy.jpg`,
    width: 4032,
    height: 3024,
    title: 'Jenny Lake - 2018',
    description: 'Such a gorgeous day, killing time with a hike while waiting for friends.',
  },
  {
    src: `${albumImagesPath}/nQg9bOZ0ip.jpg`,
    width: 5184,
    height: 3456,
    title: 'Rocky Mountain National Park - 2017',
    description: 'Found a good spot to sit in the middle of a stream.',
  },
  {
    src: `${albumImagesPath}/pWPl4nOfDe.jpg`,
    width: 5184,
    height: 3456,
    title: 'Shark Cage Diving in South Africa - 2017',
    description: 'Code named "flower picking" because we weren\'t supposed to do this.',
  },
  {
    src: `${albumImagesPath}/ua8IIyNGXz.jpg`,
    width: 5184,
    height: 3456,
    title: 'Panama City, FL - 2016',
    description: 'Sunsets are made even better with friends on the beach.',
  },
  {
    src: `${albumImagesPath}/ypqCmdMDip.jpg`,
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
  values: {
    knowledge: number;
    experience: number;
    fondness: number;
  };
}

export const languages: SkillLink[] = [
  {
    displayText: 'JavaScript',
    href: 'https://www.javascript.com/',
    imagePath: `${skillsImagesPath}/JavaScript.svg`,
    values: {
      knowledge: 90,
      experience: 80,
      fondness: 70,
    },
  },
  {
    displayText: 'TypeScript',
    href: 'https://www.typescriptlang.org/',
    imagePath: `${skillsImagesPath}/TypeScript.svg`,
    values: {
      knowledge: 90,
      experience: 80,
      fondness: 100,
    },
  },
  {
    displayText: 'Java',
    href: 'https://www.java.com/en/',
    imagePath: `${skillsImagesPath}/Java.svg`,
    values: {
      knowledge: 70,
      experience: 80,
      fondness: 80,
    },
  },
  {
    displayText: 'C#',
    href: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    imagePath: `${skillsImagesPath}/CSharp.svg`,
    values: {
      knowledge: 80,
      experience: 30,
      fondness: 60,
    },
  },
  {
    displayText: 'Swift',
    href: 'https://developer.apple.com/swift/',
    imagePath: `${skillsImagesPath}/Swift.svg`,
    values: {
      knowledge: 50,
      experience: 20,
      fondness: 70,
    },
  },
  {
    displayText: 'C++',
    href: 'https://www.cplusplus.com/',
    imagePath: `${skillsImagesPath}/C++.svg`,
    values: {
      knowledge: 30,
      experience: 20,
      fondness: 20,
    },
  },
  {
    displayText: 'GraphQL',
    href: 'https://graphql.org/',
    imagePath: `${skillsImagesPath}/GraphQL.svg`,
    values: {
      knowledge: 90,
      experience: 70,
      fondness: 90,
    },
  },
  {
    displayText: 'SQL',
    href: 'https://www.w3schools.com/sql/',
    imagePath: `${skillsImagesPath}/SQL.svg`,
    values: {
      knowledge: 70,
      experience: 50,
      fondness: 50,
    },
  },
  {
    displayText: 'HTML5',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    imagePath: `${skillsImagesPath}/HTML5.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'CSS3',
    href: 'https://www.w3schools.com/css/',
    imagePath: `${skillsImagesPath}/CSS3.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Sass',
    href: 'https://sass-lang.com/',
    imagePath: `${skillsImagesPath}/Sass.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Bash',
    href: 'https://www.gnu.org/software/bash/',
    imagePath: `${skillsImagesPath}/Bash.svg`,
    values: {
      knowledge: 70,
      experience: 70,
      fondness: 50,
    },
  },
  {
    displayText: 'MATLAB',
    href: 'https://www.mathworks.com/products/matlab.html',
    imagePath: `${skillsImagesPath}/MATLAB.svg`,
    values: {
      knowledge: 80,
      experience: 10,
      fondness: 50,
    },
  },
  {
    displayText: 'R',
    href: 'https://www.r-project.org/about.html',
    imagePath: `${skillsImagesPath}/R.svg`,
    values: {
      knowledge: 30,
      experience: 10,
      fondness: 30,
    },
  },
];

export const technologies: SkillLink[] = [
  {
    displayText: 'React',
    href: 'https://reactjs.org/',
    imagePath: `${skillsImagesPath}/React.svg`,
    values: {
      knowledge: 80,
      experience: 70,
      fondness: 90,
    },
  },
  {
    displayText: 'Vue',
    href: 'https://vuejs.org/',
    imagePath: `${skillsImagesPath}/Vue.svg`,
    values: {
      knowledge: 90,
      experience: 70,
      fondness: 100,
    },
  },
  {
    displayText: 'Angular',
    href: 'https://angular.io/',
    imagePath: `${skillsImagesPath}/Angular.svg`,
    values: {
      knowledge: 40,
      experience: 20,
      fondness: 50,
    },
  },
  {
    displayText: 'jQuery',
    href: 'https://jquery.com/',
    imagePath: `${skillsImagesPath}/jQuery.svg`,
    values: {
      knowledge: 70,
      experience: 80,
      fondness: 60,
    },
  },
  {
    displayText: 'Dojo Toolkit',
    href: 'https://dojotoolkit.org/',
    imagePath: `${skillsImagesPath}/Dojo.svg`,
    values: {
      knowledge: 70,
      experience: 90,
      fondness: 30,
    },
  },
  {
    displayText: 'KnockoutJS',
    href: 'https://knockoutjs.com/',
    imagePath: `${skillsImagesPath}/Knockout.svg`,
    values: {
      knowledge: 50,
      experience: 30,
      fondness: 70,
    },
  },
  {
    displayText: 'D3',
    href: 'https://d3js.org/',
    imagePath: `${skillsImagesPath}/D3.svg`,
    values: {
      knowledge: 30,
      experience: 30,
      fondness: 50,
    },
  },
  {
    displayText: 'Node.js',
    href: 'https://nodejs.org/en/',
    imagePath: `${skillsImagesPath}/Node.svg`,
    values: {
      knowledge: 50,
      experience: 50,
      fondness: 50,
    },
  },
  {
    displayText: 'Apollo GraphQL',
    href: 'https://www.apollographql.com/',
    imagePath: `${skillsImagesPath}/Apollo.svg`,
    values: {
      knowledge: 80,
      experience: 80,
      fondness: 70,
    },
  },
  {
    displayText: 'GraphQL Shield',
    href: 'https://www.graphql-shield.com/',
    imagePath: `${skillsImagesPath}/Shield.png`,
    values: {
      knowledge: 70,
      experience: 70,
      fondness: 80,
    },
  },
  {
    displayText: 'Express',
    href: 'https://expressjs.com/',
    imagePath: `${skillsImagesPath}/Express.svg`,
    values: {
      knowledge: 50,
      experience: 60,
      fondness: 60,
    },
  },
  {
    displayText: 'ESLint',
    href: 'https://eslint.org/',
    imagePath: `${skillsImagesPath}/ESLint.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Babel',
    href: 'https://babeljs.io/',
    imagePath: `${skillsImagesPath}/Babel.svg`,
    values: {
      knowledge: 70,
      experience: 70,
      fondness: 90,
    },
  },
  {
    displayText: 'Webpack',
    href: 'https://webpack.js.org/',
    imagePath: `${skillsImagesPath}/Webpack.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 60,
    },
  },
  {
    displayText: 'Vite',
    href: 'https://vitejs.dev/',
    imagePath: `${skillsImagesPath}/Vite.svg`,
    values: {
      knowledge: 70,
      experience: 50,
      fondness: 90,
    },
  },
  {
    displayText: 'Qt Framework',
    href: 'https://www.qt.io/',
    imagePath: `${skillsImagesPath}/Qt.svg`,
    values: {
      knowledge: 30,
      experience: 20,
      fondness: 10,
    },
  },
  {
    displayText: 'Hibernate ORM',
    href: 'https://hibernate.org/orm/',
    imagePath: `${skillsImagesPath}/Hibernate.svg`,
    values: {
      knowledge: 30,
      experience: 40,
      fondness: 20,
    },
  },
  {
    displayText: 'MongoDB',
    href: 'https://www.mongodb.com/',
    imagePath: `${skillsImagesPath}/MongoDB.svg`,
    values: {
      knowledge: 20,
      experience: 40,
      fondness: 50,
    },
  },
  {
    displayText: 'Microsoft SQL Server',
    href: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
    imagePath: `${skillsImagesPath}/SQLServer.svg`,
    values: {
      knowledge: 20,
      experience: 40,
      fondness: 50,
    },
  },
  {
    displayText: 'ASP.NET MVC',
    href: 'https://dotnet.microsoft.com/apps/aspnet/mvc',
    imagePath: `${skillsImagesPath}/ASP.svg`,
    values: {
      knowledge: 60,
      experience: 50,
      fondness: 60,
    },
  },
  {
    displayText: 'Tomcat',
    href: 'https://tomcat.apache.org/',
    imagePath: `${skillsImagesPath}/Tomcat.svg`,
    values: {
      knowledge: 20,
      experience: 30,
      fondness: 20,
    },
  },
  {
    displayText: 'Jersey',
    href: 'https://eclipse-ee4j.github.io/jersey/',
    imagePath: `${skillsImagesPath}/Jersey.svg`,
    values: {
      knowledge: 10,
      experience: 30,
      fondness: 20,
    },
  },
  {
    displayText: 'Docker',
    href: 'https://www.docker.com/',
    imagePath: `${skillsImagesPath}/Docker.svg`,
    values: {
      knowledge: 80,
      experience: 80,
      fondness: 80,
    },
  },
  {
    displayText: 'Jest',
    href: 'https://jestjs.io/',
    imagePath: `${skillsImagesPath}/Jest.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 60,
    },
  },
  {
    displayText: 'Vitest',
    href: 'https://vitest.dev/',
    imagePath: `${skillsImagesPath}/Vitest.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 60,
    },
  },
  {
    displayText: 'TestCafe',
    href: 'https://testcafe.io/',
    imagePath: `${skillsImagesPath}/TestCafe.svg`,
    values: {
      knowledge: 50,
      experience: 70,
      fondness: 70,
    },
  },
  {
    displayText: 'Git',
    href: 'https://git-scm.com/',
    imagePath: `${skillsImagesPath}/Git.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 100,
    },
  },
  {
    displayText: 'Mercurial',
    href: 'https://www.mercurial-scm.org/',
    imagePath: `${skillsImagesPath}/Mercurial.svg`,
    values: {
      knowledge: 20,
      experience: 20,
      fondness: 50,
    },
  },
  {
    displayText: 'Ant',
    href: 'https://ant.apache.org/',
    imagePath: `${skillsImagesPath}/Ant.svg`,
    values: {
      knowledge: 70,
      experience: 70,
      fondness: 30,
    },
  },
  {
    displayText: 'Yarn',
    href: 'https://yarnpkg.com/',
    imagePath: `${skillsImagesPath}/Yarn.svg`,
    values: {
      knowledge: 80,
      experience: 80,
      fondness: 80,
    },
  },
  {
    displayText: 'npm',
    href: 'https://www.npmjs.com/',
    imagePath: `${skillsImagesPath}/NPM.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'IntelliJ',
    href: 'https://www.jetbrains.com/idea/',
    imagePath: `${skillsImagesPath}/IntelliJ.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'Visual Studio Code',
    href: 'https://code.visualstudio.com/',
    imagePath: `${skillsImagesPath}/Code.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Visual Studio',
    href: 'https://visualstudio.microsoft.com/',
    imagePath: `${skillsImagesPath}/VisualStudio.svg`,
    values: {
      knowledge: 60,
      experience: 30,
      fondness: 10,
    },
  },
  {
    displayText: 'Qt Creator',
    href: 'https://www.qt.io/product/development-tools',
    imagePath: `${skillsImagesPath}/Qt.svg`,
    values: {
      knowledge: 50,
      experience: 50,
      fondness: 30,
    },
  },
  {
    displayText: 'Adobe Photoshop',
    href: 'https://www.adobe.com/products/photoshop.html',
    imagePath: `${skillsImagesPath}/Photoshop.svg`,
    values: {
      knowledge: 60,
      experience: 50,
      fondness: 70,
    },
  },
  {
    displayText: 'IcoMoon',
    href: 'https://icomoon.io/',
    imagePath: `${skillsImagesPath}/IcoMoon.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 100,
    },
  },
  {
    displayText: 'Cesium',
    href: 'https://cesium.com/',
    imagePath: `${skillsImagesPath}/Cesium.svg`,
    values: {
      knowledge: 60,
      experience: 40,
      fondness: 60,
    },
  },
  {
    displayText: 'Raspberry Pi',
    href: 'https://www.raspberrypi.org/',
    imagePath: `${skillsImagesPath}/RaspberryPi.svg`,
    values: {
      knowledge: 50,
      experience: 50,
      fondness: 50,
    },
  },
];

export const services: SkillLink[] = [
  {
    displayText: 'GitHub',
    href: 'https://github.com/',
    imagePath: `${skillsImagesPath}/GitHub.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'Jira',
    href: 'https://www.atlassian.com/software/jira',
    imagePath: `${skillsImagesPath}/Jira.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'Jenkins',
    href: 'https://www.jenkins.io/',
    imagePath: `${skillsImagesPath}/Jenkins.svg`,
    values: {
      knowledge: 30,
      experience: 40,
      fondness: 40,
    },
  },
  {
    displayText: 'Slack',
    href: 'https://slack.com/',
    imagePath: `${skillsImagesPath}/Slack.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Microsoft Teams',
    href: 'https://www.microsoft.com/en-us/microsoft-teams/group-chat-software',
    imagePath: `${skillsImagesPath}/Teams.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 90,
    },
  },
  {
    displayText: 'SonarQube',
    href: 'https://www.sonarqube.org/',
    imagePath: `${skillsImagesPath}/SonarQube.svg`,
    values: {
      knowledge: 60,
      experience: 70,
      fondness: 80,
    },
  },
  {
    displayText: 'Salesforce',
    href: 'https://www.salesforce.com/',
    imagePath: `${skillsImagesPath}/Salesforce.svg`,
    values: {
      knowledge: 70,
      experience: 90,
      fondness: 70,
    },
  },
];

export const devPractices: SkillLink[] = [
  {
    displayText: 'Agile',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'Scrum',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'DevOps',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'CI/CD',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'Automated deployments',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 90,
      experience: 90,
      fondness: 90,
    },
  },
  {
    displayText: 'Test driven development',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 80,
      experience: 50,
      fondness: 50,
    },
  },
  {
    displayText: 'Pull requests & review processes',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Team collaboration',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'UI/UX design review',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Backlog grooming',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Microservices',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
  },
  {
    displayText: 'Monolithic applications',
    imagePath: `${skillsImagesPath}/DevelopmentGeneral.svg`,
    values: {
      knowledge: 100,
      experience: 100,
      fondness: 100,
    },
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
