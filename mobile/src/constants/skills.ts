import { skillsImagesPath } from 'src/constants/images';

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
