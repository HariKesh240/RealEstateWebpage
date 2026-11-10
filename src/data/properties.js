import willowImage from '../img/LandingPage/TheWillowResidenceInCoimbatore.png';
import urbanImage from '../img/LandingPage/TheUrbanHeightsLuxuryApartment.png';
import greenfieldImage from '../img/LandingPage/TheGreenfieldHomesPeelamedu.png';
import businessImage from '../img/LandingPage/TheGrandBusinessHubAvinashiRoad.png';
import vistaLivingImage from '../img/PropertyDetailsPage/vista-living.png';
import vistaExteriorImage from '../img/PropertyDetailsPage/vista-exterior.png';
import vistaBedroomImage from '../img/PropertyDetailsPage/vista-bedroom.png';

export const properties = [
  { id: 'willow-residence', name: 'The Willow Residence', type: 'Independent Villa', location: 'Race Course, Coimbatore', price: '\u20B91.25 Crore', status: 'For Sale', beds: '4', baths: '3', area: '2,400 sq.ft', image: willowImage, gallery: [willowImage], description: 'A private independent villa with generous living spaces and a calm residential setting in Race Course.' },
  { id: 'urban-heights', name: 'The Urban Heights', type: 'Luxury Apartment', location: 'Saravanampatti, Coimbatore', price: '\u20B978 Lakhs', status: 'For Sale', beds: '3', baths: '2', area: '1,650 sq.ft', image: urbanImage, gallery: [urbanImage], description: 'A contemporary apartment with a considered layout and convenient access to Saravanampatti.' },
  { id: 'greenfield-homes', name: 'The Greenfield Homes', type: 'Residential House', location: 'Peelamedu, Coimbatore', price: '\u20B925,000 / month', status: 'For Rent', beds: '2', baths: '2', area: '1,200 sq.ft', image: greenfieldImage, gallery: [greenfieldImage], description: 'A welcoming rental home in Peelamedu, with comfortable proportions for everyday living.' },
  { id: 'grand-business-hub', name: 'The Grand Business Hub', type: 'Commercial Space', location: 'Avinashi Road, Coimbatore', price: '\u20B92.80 Crore', status: 'Commercial', beds: 'Office', baths: '2', area: '3,500 sq.ft', image: businessImage, gallery: [businessImage], description: 'A versatile commercial office space on Avinashi Road, suited to a growing business.' },
  { id: 'vista-luxe-residence', name: 'The Vista Luxe Residence', type: 'Exclusive Residential Apartment', location: 'Peelamedu, Coimbatore', price: '\u20B985 Lakhs', status: 'For Sale', beds: '3', baths: '2', area: '1,450 sq.ft', image: vistaExteriorImage, gallery: [vistaExteriorImage, vistaLivingImage, vistaBedroomImage], description: 'A contemporary residence in Peelamedu with a light-filled living pavilion, refined interiors, and convenient access to Coimbatore.' },
  { id: 'willow-garden-villa', name: 'Willow Garden Villa', type: 'Independent Villa', location: 'Race Course, Coimbatore', price: '\u20B91.35 Crore', status: 'For Sale', beds: '4', baths: '3', area: '2,550 sq.ft', image: willowImage, gallery: [willowImage], description: 'A spacious villa with a private garden and welcoming interiors in Race Course.' },
  { id: 'urban-skyline-residence', name: 'Urban Skyline Residence', type: 'Luxury Apartment', location: 'Saravanampatti, Coimbatore', price: '\u20B982 Lakhs', status: 'For Sale', beds: '3', baths: '2', area: '1,720 sq.ft', image: urbanImage, gallery: [urbanImage], description: 'A bright modern apartment with an efficient layout and easy access to local workplaces.' },
  { id: 'greenfield-courtyard-home', name: 'Greenfield Courtyard Home', type: 'Residential House', location: 'Peelamedu, Coimbatore', price: '\u20B927,000 / month', status: 'For Rent', beds: '3', baths: '2', area: '1,350 sq.ft', image: greenfieldImage, gallery: [greenfieldImage], description: 'A comfortable rental home with a leafy courtyard in a convenient Peelamedu neighbourhood.' },
  { id: 'grand-business-suites', name: 'Grand Business Suites', type: 'Commercial Space', location: 'Avinashi Road, Coimbatore', price: '\u20B93.10 Crore', status: 'Commercial', beds: 'Office', baths: '2', area: '3,800 sq.ft', image: businessImage, gallery: [businessImage], description: 'Flexible commercial suites in a well-connected business district on Avinashi Road.' },
];

export const getProperty = (id) => properties.find((property) => property.id === id);
