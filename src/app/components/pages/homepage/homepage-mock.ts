import { PhotoHighlightsPresentationData } from "./photo-highlights-presentation/photo-highlights-presentation-data.model";


export const MockHomepageData: PhotoHighlightsPresentationData = {
  photo: {
    src: "https://static.wixstatic.com/media/0e1495_9b1b07a792cf4f24b9bd938959a1c30a~mv2.jpg/v1/crop/x_185,y_16,w_525,h_411/fill/w_460,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Javier.jpg",
    altText: 'Javier Casto Jarillo',
  },
  myName: 'Javier Casto Jarillo',
  highlights: [
    {
      title: 'Software Developer',
      description: 'ILERNA'
    },
    {
      title: 'MBA',
      description: 'IME Business School - University of Salamanca'
    },
  ]
};
