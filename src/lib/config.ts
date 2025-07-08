// Site configuration
export const siteConfig = {
  name: 'Residency Raise',
  description: 'Global Mobility & Investment Migration services for venture capital funds and startup founders',
  url: 'https://residencyraise.com',
  ogImage: '/images/og-image.jpg',
  links: {
    linkedin: 'https://linkedin.com/company/residency-raise',
    twitter: 'https://twitter.com/residencyraise',
    email: 'hello@residencyraise.com',
  },
  contact: {
    phone: '+44 20 7123 4567',
    email: 'hello@residencyraise.com',
    offices: ['London', 'New York', 'Dubai'],
  },
  services: [
    {
      id: 'citizenship-investment',
      name: 'Citizenship by Investment',
      description: 'Strategic pathways to second citizenship through carefully vetted investment programs',
      startingPrice: '€250,000',
      timeline: '6-18 months',
    },
    {
      id: 'startup-expansion',
      name: 'Startup Expansion',
      description: 'Comprehensive support for scaling your venture across international markets',
      startingPrice: '$50,000',
      timeline: '3-6 months',
    },
    {
      id: 'global-networking',
      name: 'Global Networking',
      description: 'Access to exclusive networks of investors, entrepreneurs, and government officials',
      startingPrice: '$25,000/year',
      timeline: 'Ongoing',
    },
    {
      id: 'lifestyle-integration',
      name: 'Lifestyle Integration',
      description: 'Seamless transition support including real estate, education, and cultural integration',
      startingPrice: '$15,000',
      timeline: '12+ months',
    },
  ],
  stats: {
    countriesServed: '50+',
    investmentsFacilitated: '$2B+',
    successRate: '95%',
  },
}

