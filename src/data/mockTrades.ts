import { Trade } from "@/types";

export const mockTrades: Trade[] = [
  {
    id: "trade-001",
    name: "Darren O'Sullivan",
    businessName: "D. O'Sullivan Painting & Decorating",
    category: "Painter & Decorator",
    subcategories: ["Interior Painting", "Exterior Painting", "Wallpapering", "Power Washing"],
    location: "Dublin 12",
    serviceAreas: ["D06", "D08", "D10", "D12", "D14", "D16", "D24", "South Dublin"],
    reviewCount: 87,
    jobsCompleted: 142,
    badges: ["Verified", "Top Rated", "HomeSorted Pro"],
    bio: "With over 15 years in the trade, I take huge pride in delivering a clean, professional finish every time. From full house repaints to feature walls and exterior work, no job is too big or small. Fully insured and always happy to provide a free quote.",
    profileImage: "",
    yearsExperience: 15,
    memberSince: "2025-03-10",
    responseTime: "Under 1 hour",
    reviews: [
      {
        id: "rev-001-1",
        author: "Sarah Byrne",
        location: "Templeogue",
        date: "2026-03-18",
        comment: "Darren painted our entire downstairs — living room, hallway, and kitchen. Absolutely spotless work and he was so easy to deal with. Would recommend him to anyone."
      },
      {
        id: "rev-001-2",
        author: "Conor Fitzpatrick",
        location: "Crumlin",
        date: "2026-02-05",
        comment: "Had the exterior of our house done including the fascia and soffits. Darren and his team were brilliant — on time, tidy, and the finish is top class."
      },
      {
        id: "rev-001-3",
        author: "Michelle Dolan",
        location: "Rathfarnham",
        date: "2025-12-20",
        comment: "Great job on two bedrooms and the landing. Only minor issue was a small delay getting started but the quality of work more than made up for it."
      },
      {
        id: "rev-001-4",
        author: "Padraig Whelan",
        location: "Walkinstown",
        date: "2025-11-03",
        comment: "Darren wallpapered our feature wall and painted the rest of the room. Lovely fella to have in the house and his attention to detail is second to none."
      }
    ]
  },
  {
    id: "trade-002",
    name: "Keith Maguire",
    businessName: "Maguire Plumbing Solutions",
    category: "Plumber",
    subcategories: ["Emergency Plumbing", "Bathroom Installation", "Leak Repair", "Water Tanks"],
    location: "Dublin 9",
    serviceAreas: ["D01", "D03", "D05", "D07", "D09", "D11", "North Dublin"],
    reviewCount: 112,
    jobsCompleted: 203,
    badges: ["Verified", "Top Rated", "Quick Responder", "HomeSorted Pro"],
    bio: "RGI registered plumber serving Dublin's northside for over 20 years. I specialise in bathroom renovations, emergency call-outs, and all general plumbing. Honest pricing with no hidden charges — what I quote is what you pay.",
    profileImage: "",
    yearsExperience: 22,
    memberSince: "2025-01-15",
    responseTime: "Under 1 hour",
    reviews: [
      {
        id: "rev-002-1",
        author: "Niamh Kavanagh",
        location: "Drumcondra",
        date: "2026-03-28",
        comment: "Keith came out within the hour when our kitchen pipe burst on a Saturday evening. Fixed it quickly and didn't charge us the earth for a weekend call-out. Lifesaver."
      },
      {
        id: "rev-002-2",
        author: "Tommy Nolan",
        location: "Beaumont",
        date: "2026-02-14",
        comment: "Full bathroom renovation — ripped out the old suite and fitted a new walk-in shower, vanity unit, and heated towel rail. The whole thing was done in four days and looks absolutely stunning."
      },
      {
        id: "rev-002-3",
        author: "Aisling Murphy",
        location: "Glasnevin",
        date: "2026-01-09",
        comment: "Very professional and tidy. Keith replaced our old water tank and fitted a new shower pump. Everything works perfectly. Highly recommend."
      },
      {
        id: "rev-002-4",
        author: "Declan Brady",
        location: "Santry",
        date: "2025-10-22",
        comment: "Had a persistent leak under the bath that two other plumbers couldn't sort. Keith found the issue straight away and had it fixed within an hour. Top man."
      },
      {
        id: "rev-002-5",
        author: "Fiona Reilly",
        location: "Phibsborough",
        date: "2025-08-30",
        comment: "Good job installing a new dishwasher and sorting the plumbing for it. Would have liked a bit more notice on the final cost but the work itself was excellent."
      }
    ]
  },
  {
    id: "trade-003",
    name: "Ciaran Doyle",
    businessName: "Doyle Electrical Services",
    category: "Electrician",
    subcategories: ["Rewiring", "Fuse Board Upgrades", "Lighting", "EV Charger Installation", "Fire Alarms"],
    location: "Dublin 15",
    serviceAreas: ["D07", "D11", "D13", "D15", "Meath", "Kildare"],
    reviewCount: 64,
    jobsCompleted: 98,
    badges: ["Verified", "Quick Responder"],
    bio: "Safe Electric registered electrician covering Dublin 15 and surrounding areas. From simple socket additions to full house rewires and EV charger installations, I guarantee all work to the highest standard. Free estimates provided.",
    profileImage: "",
    yearsExperience: 12,
    memberSince: "2025-06-20",
    responseTime: "Under 2 hours",
    reviews: [
      {
        id: "rev-003-1",
        author: "Brian Connolly",
        location: "Blanchardstown",
        date: "2026-03-10",
        comment: "Ciaran installed an EV charger for our new car. Neat wiring, everything certified, and he even helped me apply for the SEAI grant. Couldn't ask for more."
      },
      {
        id: "rev-003-2",
        author: "Laura Hennessy",
        location: "Castleknock",
        date: "2026-01-25",
        comment: "Had the full house rewired — it's a 1970s semi-d so it was well overdue. Ciaran was brilliant, kept disruption to a minimum and left the place spotless."
      },
      {
        id: "rev-003-3",
        author: "Michael Dunne",
        location: "Clonsilla",
        date: "2025-11-17",
        comment: "Good job upgrading our fuse board and adding extra sockets in the kitchen. Reliable and knows his stuff."
      },
      {
        id: "rev-003-4",
        author: "Sinead Walsh",
        location: "Dunboyne",
        date: "2025-09-02",
        comment: "Installed recessed LED lighting throughout our open-plan living area. The difference it makes is incredible. Very professional and reasonably priced."
      }
    ]
  },
  {
    id: "trade-004",
    name: "Eoin Brennan",
    businessName: "Brennan Carpentry & Joinery",
    category: "Carpenter & Joiner",
    subcategories: ["Fitted Wardrobes", "Bespoke Shelving", "Flooring", "Staircase Renovation", "Doors & Frames"],
    location: "Dublin 6W",
    serviceAreas: ["D04", "D06", "D06W", "D12", "D14", "D16", "South Dublin", "Wicklow"],
    reviewCount: 73,
    jobsCompleted: 115,
    badges: ["Verified", "Top Rated", "HomeSorted Pro"],
    bio: "Third-generation carpenter specialising in bespoke fitted furniture, flooring, and all aspects of finish carpentry. I build everything to last and take real pride in the craft. Based in Terenure, serving all of south Dublin and north Wicklow.",
    profileImage: "",
    yearsExperience: 18,
    memberSince: "2025-02-28",
    responseTime: "Same day",
    reviews: [
      {
        id: "rev-004-1",
        author: "Orla Keane",
        location: "Terenure",
        date: "2026-04-01",
        comment: "Eoin built fitted wardrobes for two bedrooms. The finish is absolutely gorgeous — they look like they cost a fortune. He really takes his time to get every detail right."
      },
      {
        id: "rev-004-2",
        author: "John Paul McCarthy",
        location: "Rathgar",
        date: "2026-02-20",
        comment: "Had bespoke bookshelves built into the alcoves either side of the fireplace. Exactly what we wanted and Eoin's craftsmanship is on another level."
      },
      {
        id: "rev-004-3",
        author: "Emma Lawlor",
        location: "Dundrum",
        date: "2025-12-05",
        comment: "New oak staircase and banister installed. Eoin transformed our hallway — it looks like a completely different house. Can't recommend him highly enough."
      },
      {
        id: "rev-004-4",
        author: "Sean Morrissey",
        location: "Bray",
        date: "2025-09-14",
        comment: "Laid engineered oak flooring throughout the ground floor. Lovely job. Had to wait a few weeks to get booked in as he's always busy, but definitely worth the wait."
      },
      {
        id: "rev-004-5",
        author: "Claire Dempsey",
        location: "Harold's Cross",
        date: "2025-07-28",
        comment: "Eoin replaced all our internal doors and frames. The new ones are solid core and the difference in the feel of the house is massive. Spotless workmanship."
      }
    ]
  },
  {
    id: "trade-005",
    name: "Ronan Kelly",
    businessName: "Kelly Tiling",
    category: "Tiler",
    subcategories: ["Bathroom Tiling", "Kitchen Splashbacks", "Floor Tiling", "Wet Room Installation"],
    location: "Dublin 4",
    serviceAreas: ["D02", "D04", "D06", "D14", "D18", "Dun Laoghaire-Rathdown"],
    reviewCount: 48,
    jobsCompleted: 76,
    badges: ["Verified", "Top Rated"],
    bio: "Professional tiler with a keen eye for detail. Whether it's large-format porcelain, mosaic features, or natural stone, I deliver a flawless finish every time. Specialising in bathrooms, kitchens, and wet rooms across south Dublin.",
    profileImage: "",
    yearsExperience: 9,
    memberSince: "2025-05-12",
    responseTime: "Under 2 hours",
    reviews: [
      {
        id: "rev-005-1",
        author: "Karen Lynch",
        location: "Sandymount",
        date: "2026-03-22",
        comment: "Ronan tiled our entire bathroom floor to ceiling with large porcelain tiles. The grout lines are perfectly even and the finish is immaculate. Really impressed."
      },
      {
        id: "rev-005-2",
        author: "Gavin O'Rourke",
        location: "Blackrock",
        date: "2026-01-30",
        comment: "Kitchen splashback in herringbone pattern — looks unreal. Ronan was fast, clean, and the price was very fair for the quality of work."
      },
      {
        id: "rev-005-3",
        author: "Aoife Costello",
        location: "Stillorgan",
        date: "2025-11-08",
        comment: "Good job tiling the en-suite. Slight issue with one tile that had to be redone but Ronan came back straight away and sorted it. No complaints overall."
      },
      {
        id: "rev-005-4",
        author: "Mark Sheridan",
        location: "Donnybrook",
        date: "2025-08-19",
        comment: "Wet room installation from scratch. Ronan handled the tanking and tiling and the result is fantastic. Feels like a high-end hotel. Brilliant work."
      }
    ]
  },
  {
    id: "trade-006",
    name: "Patrick Farrell",
    businessName: "Farrell Landscapes",
    category: "Landscaper",
    subcategories: ["Garden Design", "Paving & Patios", "Fencing", "Artificial Grass", "Drainage"],
    location: "Celbridge, Co. Kildare",
    serviceAreas: ["D15", "D20", "D22", "D24", "Kildare", "South Dublin"],
    reviewCount: 39,
    jobsCompleted: 57,
    badges: ["Verified", "Quick Responder"],
    bio: "Full landscaping service from design to completion. We handle everything — patios, decking, fencing, planting, artificial grass, and drainage solutions. Serving Kildare, west Dublin, and south Dublin. All work guaranteed.",
    profileImage: "",
    yearsExperience: 7,
    memberSince: "2025-04-05",
    responseTime: "Under 1 hour",
    reviews: [
      {
        id: "rev-006-1",
        author: "Rachel Corcoran",
        location: "Lucan",
        date: "2026-03-05",
        comment: "Patrick and his crew completely transformed our back garden — new patio, raised beds, artificial grass for the kids, and timber fencing. We're absolutely delighted with it."
      },
      {
        id: "rev-006-2",
        author: "Damien Ryan",
        location: "Celbridge",
        date: "2026-01-12",
        comment: "New driveway and front garden paving. The drainage was a challenge but Patrick sorted it properly. Looks well and no more puddles. Happy out."
      },
      {
        id: "rev-006-3",
        author: "Ciara Flanagan",
        location: "Clondalkin",
        date: "2025-10-28",
        comment: "We had a tiny south-facing garden that was just a mess of weeds. Patrick designed a really clever layout with a small patio, planting, and a water feature. It's like a different space entirely."
      }
    ]
  },
  {
    id: "trade-007",
    name: "Thomas Dunphy",
    businessName: "Dunphy Building & Renovation",
    category: "General Builder",
    subcategories: ["Extensions", "Renovations", "Conversions", "Blockwork", "Plastering"],
    location: "Dublin 22",
    serviceAreas: ["D08", "D10", "D12", "D20", "D22", "D24", "South Dublin", "Kildare"],
    reviewCount: 56,
    jobsCompleted: 83,
    badges: ["Verified", "Top Rated", "HomeSorted Pro"],
    bio: "Experienced general builder specialising in home extensions, attic conversions, and full renovations. Fully insured with a strong team of reliable tradesmen. We manage the project from start to finish so you don't have to worry about a thing.",
    profileImage: "",
    yearsExperience: 25,
    memberSince: "2025-01-08",
    responseTime: "Same day",
    reviews: [
      {
        id: "rev-007-1",
        author: "Martina Cullen",
        location: "Clondalkin",
        date: "2026-03-15",
        comment: "Thomas and his team built a single-storey rear extension for us. From planning to completion everything was handled professionally. The build quality is top notch and they came in on budget."
      },
      {
        id: "rev-007-2",
        author: "Derek Phelan",
        location: "Palmerstown",
        date: "2026-02-01",
        comment: "Attic conversion with a Velux window and en-suite. Fantastic job — it's like having a whole new floor in the house. Thomas kept us updated every step of the way."
      },
      {
        id: "rev-007-3",
        author: "Grainne Hogan",
        location: "Tallaght",
        date: "2025-11-22",
        comment: "Full renovation of a 3-bed semi. New kitchen, bathrooms, plastering, and flooring throughout. A few minor snags at the end but Thomas came back and sorted them without any fuss."
      },
      {
        id: "rev-007-4",
        author: "Paul Delaney",
        location: "Naas",
        date: "2025-09-10",
        comment: "Garage conversion into a home office. Insulated, plastered, wired, and floored — the works. Done in under two weeks and the finish is excellent. Very happy."
      },
      {
        id: "rev-007-5",
        author: "Mairead Kinsella",
        location: "Saggart",
        date: "2025-06-18",
        comment: "Knocked through between our kitchen and dining room and put in an RSJ. The lads were clean, efficient, and the structural work was all signed off by the engineer. Would use again."
      }
    ]
  },
  {
    id: "trade-008",
    name: "Alan Redmond",
    businessName: "Redmond Lock & Key",
    category: "Locksmith",
    subcategories: ["Emergency Lockout", "Lock Replacement", "Home Security", "Key Cutting", "Safe Opening"],
    location: "Dublin 1",
    serviceAreas: ["D01", "D02", "D03", "D04", "D05", "D07", "D08", "D09", "Dublin City"],
    reviewCount: 95,
    jobsCompleted: 187,
    badges: ["Verified", "Quick Responder", "HomeSorted Pro"],
    bio: "24/7 emergency locksmith covering all of Dublin city. Whether you're locked out at 3am or need new locks fitted, I'll be there fast. No call-out fee within the city centre. Also specialising in home security upgrades and insurance-rated locks.",
    profileImage: "",
    yearsExperience: 10,
    memberSince: "2025-02-14",
    responseTime: "Under 1 hour",
    reviews: [
      {
        id: "rev-008-1",
        author: "Caoimhe Ni Bhriain",
        location: "Smithfield",
        date: "2026-04-02",
        comment: "Locked myself out at 11pm on a Friday. Alan was there in 20 minutes and had me back in without damaging the lock. Fair price too. An absolute gent."
      },
      {
        id: "rev-008-2",
        author: "James O'Callaghan",
        location: "Rathmines",
        date: "2026-03-01",
        comment: "Had all the locks changed after a break-in. Alan fitted insurance-approved deadbolts and a new multipoint lock on the front door. Feeling much safer now. Excellent service."
      },
      {
        id: "rev-008-3",
        author: "Lisa McGrath",
        location: "Temple Bar",
        date: "2025-12-28",
        comment: "Quick and professional. Got new keys cut for the whole house and Alan also adjusted the back door which wasn't closing properly. Very reasonable prices."
      },
      {
        id: "rev-008-4",
        author: "Robert Moran",
        location: "Portobello",
        date: "2025-10-15",
        comment: "Called Alan out to open a safe we'd lost the combination for. He had it open in about 30 minutes and reset the code. Handy man to know."
      }
    ]
  },
  {
    id: "trade-009",
    name: "Colm Healy",
    businessName: "Healy Roofing",
    category: "Roofer",
    subcategories: ["Roof Repairs", "Flat Roofing", "Guttering", "Chimney Repairs", "Roof Replacement"],
    location: "Ashbourne, Co. Meath",
    serviceAreas: ["D05", "D09", "D11", "D13", "D15", "North Dublin", "Meath"],
    reviewCount: 42,
    jobsCompleted: 68,
    badges: ["Verified", "Top Rated"],
    bio: "Family roofing business covering north Dublin and Meath. We handle everything from a few slipped slates to full roof replacements. Guttering, flashing, chimney repointing — you name it. All work fully guaranteed and insured.",
    profileImage: "",
    yearsExperience: 14,
    memberSince: "2025-03-22",
    responseTime: "Under 2 hours",
    reviews: [
      {
        id: "rev-009-1",
        author: "Eugene Kearney",
        location: "Swords",
        date: "2026-03-20",
        comment: "Colm replaced the flat roof on our kitchen extension. No more leaks and it looks miles better. His crew were up and down in a day and a half. Very efficient."
      },
      {
        id: "rev-009-2",
        author: "Mary Dowd",
        location: "Ashbourne",
        date: "2026-01-17",
        comment: "Had the gutters and fascia replaced all round the house. Colm gave us a very competitive quote and the lads did a great job. No mess left behind either."
      },
      {
        id: "rev-009-3",
        author: "Brendan Foley",
        location: "Malahide",
        date: "2025-11-30",
        comment: "Called Colm out for a leak around the chimney. He repointed the chimney and replaced the lead flashing. Problem solved. Fair price and good work."
      },
      {
        id: "rev-009-4",
        author: "Tara Guinan",
        location: "Ratoath",
        date: "2025-08-25",
        comment: "Full roof stripped and re-felted and re-slated on our 1960s bungalow. Colm's team were fantastic — hard workers and very respectful of the property. Couldn't fault them."
      }
    ]
  },
  {
    id: "trade-010",
    name: "Cathal O'Brien",
    businessName: "O'Brien Plumbing & Bathrooms",
    category: "Plumber",
    subcategories: ["Bathroom Renovation", "Shower Installation", "Pipe Repair", "Water Heater Installation"],
    location: "Dublin 16",
    serviceAreas: ["D06W", "D12", "D14", "D16", "D18", "D24", "South Dublin", "Wicklow"],
    reviewCount: 35,
    jobsCompleted: 52,
    badges: ["Verified"],
    bio: "Qualified plumber specialising in bathroom renovations and all general plumbing work. I keep things simple — fair prices, honest advice, and a job done right. Serving south Dublin and north Wicklow.",
    profileImage: "",
    yearsExperience: 5,
    memberSince: "2025-08-01",
    responseTime: "Same day",
    reviews: [
      {
        id: "rev-010-1",
        author: "Helen Roche",
        location: "Ballinteer",
        date: "2026-03-12",
        comment: "Cathal fitted a new electric shower for us and re-plumbed the hot water feed. Very neat work and he explained everything as he went. Lovely fella."
      },
      {
        id: "rev-010-2",
        author: "David Keating",
        location: "Knocklyon",
        date: "2026-01-20",
        comment: "Fixed a burst pipe in the attic before it did any real damage. Came out same day which was brilliant. Charged a fair rate. Would call again."
      },
      {
        id: "rev-010-3",
        author: "Jennifer Troy",
        location: "Enniskerry",
        date: "2025-10-05",
        comment: "Cathal renovated our main bathroom — new suite, tiling, and all plumbing. Took a bit longer than expected but the end result is lovely. Happy with the work."
      },
      {
        id: "rev-010-4",
        author: "Graham Naughton",
        location: "Stepaside",
        date: "2025-09-18",
        comment: "Installed a new water heater and replaced some old copper piping. Everything done to a high standard and cleaned up after himself. Good man."
      }
    ]
  },
  {
    id: "trade-011",
    name: "Shane Madden",
    businessName: "Madden Heating & Gas",
    category: "Heating & Gas",
    subcategories: ["Boiler Installation", "Boiler Servicing", "Radiator Installation", "Underfloor Heating", "Gas Safety"],
    location: "Dublin 3",
    serviceAreas: ["D01", "D03", "D05", "D07", "D09", "D11", "D13", "North Dublin"],
    reviewCount: 78,
    jobsCompleted: 165,
    badges: ["Verified", "Top Rated", "Quick Responder", "HomeSorted Pro"],
    bio: "RGI registered gas installer with over 20 years of experience. I specialise in boiler installations, servicing, and full heating system upgrades. Whether your boiler has broken down or you're looking to upgrade to an A-rated system, give me a call.",
    profileImage: "",
    yearsExperience: 21,
    memberSince: "2025-01-20",
    responseTime: "Under 1 hour",
    reviews: [
      {
        id: "rev-011-1",
        author: "Rory Gallagher",
        location: "Clontarf",
        date: "2026-03-25",
        comment: "Shane installed a new condensing boiler and upgraded all our radiators. The house heats up in half the time now and our gas bills have dropped noticeably. Excellent work."
      },
      {
        id: "rev-011-2",
        author: "Deirdre Cassidy",
        location: "Raheny",
        date: "2026-02-10",
        comment: "Annual boiler service done quickly and efficiently. Shane also spotted a small issue with the flue and sorted it on the spot. Always reliable."
      },
      {
        id: "rev-011-3",
        author: "Kevin Farrell",
        location: "Fairview",
        date: "2025-12-15",
        comment: "Boiler broke down on the coldest night of the year. Shane was out within an hour and had it running again. Can't put a price on that kind of service. Legend."
      },
      {
        id: "rev-011-4",
        author: "Nuala Barrett",
        location: "Marino",
        date: "2025-10-01",
        comment: "Had underfloor heating installed in the kitchen extension. It's only brilliant — warm feet every morning. Shane talked us through the system and the controls. Very professional."
      },
      {
        id: "rev-011-5",
        author: "Aidan Smyth",
        location: "Howth",
        date: "2025-07-20",
        comment: "Shane serviced our gas hob and boiler and issued the certs we needed for the house sale. Quick, professional, and fairly priced. Highly recommend."
      }
    ]
  },
  {
    id: "trade-012",
    name: "Jamie Nolan",
    businessName: "Nolan Property Maintenance",
    category: "Handyman",
    subcategories: ["Flat Pack Assembly", "Shelving & Mounting", "Minor Repairs", "Painting Touch-ups", "Odd Jobs"],
    location: "Dublin 8",
    serviceAreas: ["D01", "D02", "D04", "D06", "D08", "D10", "D12", "Dublin City"],
    reviewCount: 22,
    jobsCompleted: 15,
    badges: ["Verified", "Quick Responder"],
    bio: "Reliable handyman for all those small jobs around the house that need doing. From flat pack assembly and TV mounting to fixing doors, patching walls, and general maintenance. No job too small. Hourly or fixed-price rates available.",
    profileImage: "",
    yearsExperience: 2,
    memberSince: "2026-01-10",
    responseTime: "Under 1 hour",
    reviews: [
      {
        id: "rev-012-1",
        author: "Amy Connell",
        location: "The Liberties",
        date: "2026-03-30",
        comment: "Jamie assembled a massive IKEA wardrobe and two bedside tables. He was quick and everything is rock solid. Way better than trying to do it myself. Will definitely call again for the next flat pack disaster."
      },
      {
        id: "rev-012-2",
        author: "Neil O'Donoghue",
        location: "Portobello",
        date: "2026-03-08",
        comment: "Had a few odd jobs done — TV mounted on the wall, some floating shelves put up, and a wobbly banister fixed. Jamie was punctual, friendly, and got through everything quickly."
      },
      {
        id: "rev-012-3",
        author: "Sophie Tierney",
        location: "Rialto",
        date: "2026-02-15",
        comment: "Jamie patched a few holes in the walls and did some paint touch-ups before we had people over. Handy to have someone who can do a bit of everything. Good value."
      }
    ]
  }
];
