import { EducationData } from "./education-card/education-card-data.model";

export const MockEducationData: EducationData[] = [
  {
    studyName: 'DAW',
    university: 'ILERNA',
    logo: {
      href: 'https://www.ilerna.com/',
      src: 'https://www.ilerna.es/front-line/themes/spaghetti/img/logo_ilerna.svg',
      altText: 'Ilerna_logo',
    },
    startDate: new Date(),
    endDate: new Date(),
    remote: false,
    city: 'Sevilla',
    // description: ``,
  },
  {
    studyName: 'MBA & Marketing',
    university: 'IME Business School',
    logo: {
      href: 'https://imeusal.com/',
      src: 'https://static.wixstatic.com/media/0e1495_bb955d780875419d8caaec31f48bdbab~mv2.png/v1/fill/w_74,h_74,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IME%20Business%20School.png',
      altText: 'Teralco_logo',
    },
    startDate: new Date(),
    endDate: new Date(),
    remote: false,
    city: 'Salamanca',
  },
  {
    studyName: 'Ciencias Empresariales',
    university: 'Universidad de Sevilla',
    logo: {
      href: 'https://www.us.es/',
      src: 'https://static.wixstatic.com/media/0e1495_b0d1b237430c4fe69da4d468c0802d6b~mv2.jpg/v1/fill/w_74,h_74,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/US%20logo.jpg',
      altText: 'Teralco_logo',
    },
    startDate: new Date(),
    endDate: new Date(),
    remote: false,
    city: 'Sevilla',
  },
];
