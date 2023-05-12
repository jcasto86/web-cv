import { EducationData } from "./education-card/education-card-data.model";

export const MockEducationData: EducationData[] = [
  {
    studyName: 'DAW',
    university: 'ILERNA',
    logo: {
      href: 'https://www.ilerna.com/',
      src: 'https://recursos.ilerna.es/hs-fs/hubfs/ilerna-online-logo.png?width=693&name=ilerna-online-logo.png',
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
      src: 'https://seeklogo.com/images/U/universidad-de-sevilla-logo-214320A847-seeklogo.com.png',
      altText: 'Teralco_logo',
    },
    startDate: new Date(),
    endDate: new Date(),
    remote: false,
    city: 'Sevilla',
  },
];
