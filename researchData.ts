export interface ResearchEntry {
  id: string;
  title: string;
  agency: string;
  year: number;
  category: string;
  description: string;
  significance: string;
  keyFindings: string[];
  tags: string[];
}

export const researchDictionary: ResearchEntry[] = [
  {
    id: "big-bang-cmb",
    title: "Cosmic Microwave Background Radiation",
    agency: "NASA / ESA (COBE, WMAP, Planck)",
    year: 1992,
    category: "Cosmology",
    description: "The discovery and detailed mapping of the Cosmic Microwave Background (CMB) radiation — the afterglow of the Big Bang — confirmed the Big Bang theory and revealed the large-scale structure of the universe.",
    significance: "Proved the Big Bang, age of universe = 13.8 billion years",
    keyFindings: ["Universe age: 13.8 billion years", "Flat geometry of universe", "Initial quantum fluctuations confirmed", "Dark matter density measured"],
    tags: ["Big Bang", "CMB", "Cosmology", "COBE", "WMAP", "Planck"]
  },
  {
    id: "dark-energy",
    title: "Discovery of Dark Energy",
    agency: "NASA / Multiple International Teams",
    year: 1998,
    category: "Cosmology",
    description: "The discovery that the expansion of the universe is accelerating, attributed to a mysterious force called dark energy. This earned the 2011 Nobel Prize in Physics.",
    significance: "Dark energy comprises ~68% of the universe's total energy",
    keyFindings: ["Universe expansion is accelerating", "Dark energy = 68% of universe", "Dark matter = 27%", "Normal matter = 5%"],
    tags: ["Dark Energy", "Supernova", "Hubble", "Cosmology", "Nobel Prize"]
  },
  {
    id: "exoplanet-kepler",
    title: "Kepler Exoplanet Survey",
    agency: "NASA",
    year: 2009,
    category: "Exoplanets",
    description: "NASA's Kepler mission discovered over 2,600 confirmed exoplanets using the transit method, fundamentally changing our understanding of planetary systems and habitable zones.",
    significance: "Proved Earth-sized planets in habitable zones are common",
    keyFindings: ["2,600+ confirmed exoplanets", "Earth-size planets are common", "Many stars have multiple planets", "Habitable zone planets discovered"],
    tags: ["Exoplanets", "Kepler", "Transit Method", "Habitable Zone", "Super-Earth"]
  },
  {
    id: "mars-water",
    title: "Evidence of Water on Mars",
    agency: "NASA / ESA / ISRO",
    year: 2015,
    category: "Planetary Science",
    description: "Multiple missions have confirmed that Mars once had liquid water on its surface, and subsurface liquid water brines likely exist today. This is crucial for assessing Mars's habitability.",
    significance: "Mars may harbor conditions for microbial life",
    keyFindings: ["Seasonal water streaks (RSL)", "Subsurface ice deposits confirmed", "Ancient river valleys identified", "Subglacial lake detected by MARSIS"],
    tags: ["Mars", "Water", "Habitability", "Astrobiology", "RSL", "Ice"]
  },
  {
    id: "gravitational-waves",
    title: "Gravitational Wave Detection",
    agency: "LIGO-Virgo Collaboration / NASA",
    year: 2015,
    category: "Astrophysics",
    description: "LIGO detected gravitational waves from colliding black holes for the first time, confirming a key prediction of Einstein's general relativity made 100 years earlier.",
    significance: "Opened a new window on the universe — gravitational wave astronomy",
    keyFindings: ["Black hole mergers detected", "Neutron star collision observed", "Gamma-ray burst connection confirmed", "New form of astronomy established"],
    tags: ["Gravitational Waves", "LIGO", "Black Holes", "Einstein", "General Relativity"]
  },
  {
    id: "black-hole-image",
    title: "First Image of a Black Hole",
    agency: "Event Horizon Telescope (Global Collaboration)",
    year: 2019,
    category: "Astrophysics",
    description: "The Event Horizon Telescope, a global network of radio telescopes, captured the first-ever image of a black hole — M87* in the galaxy Messier 87, and later Sagittarius A* at our galactic center.",
    significance: "Direct visual evidence of black holes; confirmed general relativity",
    keyFindings: ["M87* black hole imaged (6.5B solar masses)", "Sagittarius A* imaged (4M solar masses)", "Event horizon structure confirmed", "Accretion disk visualized"],
    tags: ["Black Hole", "EHT", "M87", "Sagittarius A*", "General Relativity", "Radio Astronomy"]
  },
  {
    id: "enceladus-ocean",
    title: "Enceladus Ocean Discovery",
    agency: "NASA (Cassini)",
    year: 2014,
    category: "Planetary Science",
    description: "Cassini discovered that Saturn's moon Enceladus has a global subsurface ocean with water plumes erupting from its south pole, containing organic molecules, hydrogen, and silica particles.",
    significance: "One of the most promising places for extraterrestrial life in the solar system",
    keyFindings: ["Global subsurface ocean confirmed", "Water plumes contain organics", "Hydrothermal vents detected", "Hydrogen gas (energy source) found"],
    tags: ["Enceladus", "Saturn", "Ocean Worlds", "Astrobiology", "Cassini", "Life"]
  },
  {
    id: "europa-ocean",
    title: "Europa's Subsurface Ocean",
    agency: "NASA (Galileo, Hubble)",
    year: 1997,
    category: "Planetary Science",
    description: "NASA's Galileo spacecraft provided strong evidence that Jupiter's moon Europa has a vast liquid water ocean beneath its icy surface, with water plumes observed by Hubble.",
    significance: "Europa is a prime target for the search for extraterrestrial life",
    keyFindings: ["Subsurface ocean 2-3× Earth's water", "Ice shell tectonics observed", "Water plumes erupting", "Magnetic field anomalies confirmed"],
    tags: ["Europa", "Jupiter", "Ocean Worlds", "Astrobiology", "Galileo", "Life"]
  },
  {
    id: "higgs-boson-space",
    title: "Standard Model Validation from Space",
    agency: "CERN / ESA / NASA",
    year: 2012,
    category: "Particle Physics",
    description: "Space-based cosmic ray studies contributed to validating particle physics models, including understanding high-energy cosmic particles that cannot be produced in ground-based accelerators.",
    significance: "Improved understanding of fundamental particles and forces",
    keyFindings: ["Cosmic ray energy spectrum mapped", "Ultra-high-energy cosmic rays identified", "Antimatter cosmic ray detection", "Solar particle acceleration understood"],
    tags: ["Cosmic Rays", "Particle Physics", "AMS", "ISS", "Standard Model"]
  },
  {
    id: "jwst-exoatmosphere",
    title: "Exoplanet Atmosphere Analysis (JWST)",
    agency: "NASA/ESA/CSA",
    year: 2022,
    category: "Exoplanets",
    description: "The James Webb Space Telescope made the first detailed analysis of an exoplanet atmosphere, detecting CO₂ on WASP-39b and characterizing atmospheric compositions of multiple worlds.",
    significance: "First CO₂ detected on an exoplanet; paving way for biosignature search",
    keyFindings: ["CO₂ detected on WASP-39b", "Water vapor on multiple planets", "Cloud structure analyzed", "Chemical fingerprinting developed"],
    tags: ["JWST", "Exoplanet", "Atmosphere", "CO2", "Biosignatures", "Spectroscopy"]
  },
  {
    id: "moon-water-ice",
    title: "Confirmed Water Ice at Lunar Poles",
    agency: "NASA / ISRO",
    year: 2018,
    category: "Lunar Science",
    description: "NASA's LCROSS mission and India's Chandrayaan-1 confirmed the presence of water ice in permanently shadowed regions at the lunar poles, a critical resource for future Moon missions.",
    significance: "Water ice can be used for drinking water, oxygen, and rocket fuel on the Moon",
    keyFindings: ["Ice confirmed in south pole craters", "5.6% water content in regolith", "Multiple forms of water detected", "Chandrayaan-3 detected sulfur nearby"],
    tags: ["Moon", "Water Ice", "Lunar Poles", "LCROSS", "Chandrayaan", "Artemis"]
  },
  {
    id: "mars-methane",
    title: "Methane Detection on Mars",
    agency: "NASA / ESA",
    year: 2004,
    category: "Planetary Science",
    description: "Mars Express and Curiosity Rover detected methane plumes on Mars. Methane could be geological or biological in origin, making it a key astrobiology target.",
    significance: "Possible indicator of subsurface biological or geological activity",
    keyFindings: ["Seasonal methane variation detected", "Localized plumes observed", "Geological sources possible", "Biological origin not ruled out"],
    tags: ["Mars", "Methane", "Astrobiology", "Curiosity", "Mars Express", "Biosignatures"]
  },
  {
    id: "solar-wind",
    title: "Solar Wind & Heliosphere Study",
    agency: "NASA (Parker Solar Probe, WIND)",
    year: 2021,
    category: "Solar Physics",
    description: "The Parker Solar Probe became the first spacecraft to touch the Sun, flying through the corona. It revealed new details about solar wind origin and coronal heating mechanisms.",
    significance: "Advances space weather prediction; protects astronauts and satellites",
    keyFindings: ["First spacecraft in solar corona", "Switchbacks in solar wind identified", "Dust-free zone near Sun discovered", "Solar wind acceleration understood"],
    tags: ["Solar Wind", "Parker Probe", "Heliosphere", "Solar Physics", "Corona"]
  },
  {
    id: "voyager-interstellar",
    title: "Interstellar Space Exploration",
    agency: "NASA",
    year: 2012,
    category: "Interstellar Science",
    description: "NASA's Voyager 1 became the first human-made object to enter interstellar space in 2012, followed by Voyager 2 in 2018. They provide direct measurements of the interstellar medium.",
    significance: "First direct sampling of interstellar space beyond our solar system",
    keyFindings: ["Heliopause boundary defined", "Interstellar plasma measured", "Magnetic field direction changed", "Cosmic ray flux increased"],
    tags: ["Voyager", "Interstellar", "Heliopause", "Heliosphere", "Deep Space"]
  },
  {
    id: "neutron-star-merger",
    title: "Neutron Star Merger Multimessenger Astronomy",
    agency: "LIGO / NASA / ESA / Global Network",
    year: 2017,
    category: "Astrophysics",
    description: "The first detection of gravitational waves AND light from the same event (GW170817) — two neutron stars merging. This confirmed gold and heavy elements are forged in neutron star collisions.",
    significance: "Proved origin of heavy elements; pioneered multimessenger astronomy",
    keyFindings: ["Gold formed in neutron star mergers", "Short gamma-ray burst origin confirmed", "Gravitational waves + EM observed", "Speed of gravity = speed of light confirmed"],
    tags: ["Neutron Stars", "Gravitational Waves", "Gold", "Kilonovae", "Multimessenger", "GW170817"]
  },
  {
    id: "ozone-depletion",
    title: "Ozone Layer Monitoring & Recovery",
    agency: "NASA / NOAA / ESA",
    year: 1985,
    category: "Earth Science",
    description: "Satellites discovered and continue to monitor the Antarctic ozone hole. Space-based monitoring proved critical in driving the Montreal Protocol, leading to measurable ozone layer recovery.",
    significance: "Direct impact on global environmental policy and human health",
    keyFindings: ["Antarctic ozone hole discovered from space", "CFC ban effectiveness monitored", "Ozone recovery underway since 2000", "UV-B radiation increase measured"],
    tags: ["Ozone", "Climate", "Earth Observation", "Montreal Protocol", "UV Radiation"]
  },
  {
    id: "climate-change-satellites",
    title: "Climate Change Satellite Monitoring",
    agency: "NASA / ESA / NOAA",
    year: 2002,
    category: "Earth Science",
    description: "A global network of Earth observation satellites continuously monitors climate change indicators including sea level, ice sheet mass, temperature, CO₂, and deforestation.",
    significance: "Provides ground truth for climate models and international agreements",
    keyFindings: ["Sea level rising 3.6mm/year", "Arctic ice declining 13% per decade", "Greenland/Antarctica losing ice mass", "Global temperature +1.1°C since 1880"],
    tags: ["Climate Change", "Sea Level", "Ice Sheets", "GRACE", "Earth Observation", "Carbon"]
  },
  {
    id: "titan-lakes",
    title: "Titan's Hydrocarbon Lakes",
    agency: "NASA/ESA (Cassini-Huygens)",
    year: 2006,
    category: "Planetary Science",
    description: "Cassini discovered that Saturn's moon Titan has lakes, rivers, and seas of liquid methane and ethane, making it the only world beyond Earth with stable liquid on its surface.",
    significance: "Unique moon with an active hydrological cycle (but with hydrocarbons, not water)",
    keyFindings: ["Methane lakes confirmed", "Ligeia Mare sea discovered", "Methane rain cycle active", "Huygens landed in methane terrain"],
    tags: ["Titan", "Saturn", "Methane Lakes", "Huygens", "Cassini", "Planetary Science"]
  }
];

export const researchCategories = [
  "All", "Cosmology", "Astrophysics", "Planetary Science", 
  "Exoplanets", "Solar Physics", "Lunar Science", 
  "Earth Science", "Interstellar Science", "Particle Physics"
];
