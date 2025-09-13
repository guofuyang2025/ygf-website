'use client'

import { useLanguage } from './LanguageContext'

type Strings = any

const en: Strings = {
  header: {

    siteTitle: 'Yangguofu Malatang',

    login: 'Login',
    about: 'About Us',
    products: 'Products',
    store: 'Store',
    membership: 'Membership',
    contact: 'Contact Us',
    franchise: 'Franchise',
    careers: 'Careers',
    language: 'cn',
  },
  profileMenu: {
    profile: 'Profile',
    signOut: 'Sign out',
  },
  banner: {
    title: 'Welcome',
    subtitle: 'Welcome to Yangguofu Malatang',
  },
  introduction: {
    title: 'Introduction',
    body: 'Yangguofu Malatang is a restaurant chain that specializes in麻辣烫. It was founded in 2000, and is headquartered in Harbin, China.',
  },
  product: {
    title: 'Products',
    cardTitle: (id: number) => `Product ${id}`,
    cardBody: 'Yangguofu Malatang products are unique and delicious.',
  },
  footer: {
    text: 'Yangguofu Malatang',
  },
  loginPage: {
    title: 'Login',
  },
  profilePage: {
    title: 'Profile',
  },
  homePage: {
    hero: {
      title: 'YGF Australia',
      subtitle: '"The World’s Very First Hot Pot"',
      extraText: 'Fresh, authentic, and made your way.',
      ctaButton: 'Learn More',
    },
    brand: {
      title: 'About Our Brand',
      description: 'As part of the world’s leading Malatang brand, YGF Australia continues to extend the influence of authentic Malatang worldwide.\n In Australia, we establish a new benchmark in Asian fast- casual dining — authentic flavors, fresh ingredients every day, and a uniquely personalized dining journey.',
      ctaButton: 'Franchise With Us',
    },
    products: {
      title: 'Our Products',
      description: 'Choose from over 60 fresh ingredients\n Three signature soup bases: Classic Bone Broth, Tomato, Dry Mix Mala\nNearly 7,000 stores worldwide, now growing in Australia',
      ctaButton: 'Explore Our Menu',
    },
    testimonials: {
      title: 'What Our Clients Say',
      subtitle: 'Hear from our satisfied customers about their experience with our services.',
      items: [
        { name: 'Jay Chou', feedback: 'Yangguofu Malatang, Oh Yeah!', rating: 5, avatarSrc: '/tmp/avatar_1.png' },
        { name: 'JJ Lin', feedback: 'Yangguofu Malatang, Oh Yeah!', rating: 4, avatarSrc: '/tmp/avatar_2.png' },
        { name: 'Wang Lihong', feedback: 'Yangguofu Malatang, Oh Yeah!', rating: 5, avatarSrc: '/tmp/avatar_3.png' },
      ],
    },
  },
  aboutPage: {
    title: 'About Us',
    body: 'Yangguofu Malatang is a restaurant chain that specializes in麻辣烫. It was founded in 2000, and is headquartered in Harbin, China.',
    hero: {
      title: 'About Us',
      subtitle: 'Our Story – From Harbin to the World',
      description: 'Yangguofu (YGF) is the pioneer and global leader of modern Malatang.\nFounded in 2000 as a small food stall in Harbin, our founders created the world\'s first "drinkable soup malatang" — a bold fusion of Sichuan spices and hearty Northeastern beef bone broth.\nFrom one humble stall, YGF grew into a nationwide sensation. By 2010, we surpassed 1,000 stores across China, and today, YGF has nearly 7,000 restaurants in more than 20 countries, introducing authentic Malatang to a global audience.',
    },
    team: {
      title: 'Our Team',
      subtitle: 'Meet the leadership team behind YGF Australia',
    },
    story: {
      journey: {
        title: 'Our Global Contributions',
        description1: '• Innovator – Creator of the drinkable soup Malatang.\n• Global Promoter – Elevating Malatang from a street food to a global culinary icon.\n• Industry Standard Setter – Pioneering modern logistics, supply chains, and industry standards.',
        description2: '',
        button: 'Learn More',
      },
      innovation: {
        title: 'Yangguofu in Australia',
        description1: 'In May 2025, YGF Australia became the exclusive master franchisee of YGF Malatang.\nOur leadership team brings over 15 years of Australian F&B industry expertise, including key members who helped establish Spicy World Australia.',
        description2: 'Today, YGF operates 10 stores nationwide. By the end of 2025, we will open three more — including a AUD $2 million flagship store on Gouger Street, Adelaide\'s Chinatown, the largest Malatang restaurant in the Southern Hemisphere.\nOur flagship location will combine authentic YGF flavors with rich cultural and Australian design elements, representing a new generation of modern Malatang.',
        button: 'Explore Our Work',
      },
    },
    mission: {
      title: 'Looking Ahead',
      description1: '• November 2025: Marion store opens (South Australia)\n• Flagship on Gouger Street, Adelaide, plus Brisbane CBD launch\n• Continued growth with two new SA stores\n• Sydney flagship opening\n• 30 YGF stores nationwide, establishing YGF as the leading Malatang brand in Australia',
      description2: '',
      description3: '',
    },
    stats: {
      title: 'By The Numbers',
      subtitle: 'Our achievements speak for themselves—here\'s what we\'ve accomplished together',
    },
    cta: {
      title: 'Ready to Get Started?',
      description: 'Let\'s discuss how we can help bring your vision to life and create something extraordinary together.',
      startProject: 'Start a Project',
      contactUs: 'Contact Us',
    },
  },
  productsPage: {
    hero: {
      title: 'Our Signature Dishes',
      subtitle: 'Explore our most popular dishes and menu highlights, crafted with passion and the finest ingredients',
    },
    signatureSoupBases: {
      title: 'Signature Soup Bases',
      subtitle: 'Our carefully crafted soup bases that bring authentic flavors to your bowl',
      signatureRecipe: 'Signature Recipe',
    },
    freshIngredients: {
      title: 'Our Fresh Ingredients',
      subtitle: 'Over 60 fresh ingredients: vegetables, seafood, meats, tofu, noodles, and more — all picked and prepared daily.',
      freshDaily: 'Fresh Daily',
    },
    specialCombos: {
      title: 'Special Combos & Seasonal Flavors',
      subtitle: 'Limited-time chef specials blending authentic Malatang with local Australian inspirations.',
      description: 'Experience unique flavor combinations created by our master chefs, featuring seasonal ingredients and innovative cooking techniques that blend traditional Malatang with modern Australian culinary influences.',
      limitedTime: 'Limited Time',
      chefsChoice: "Chef's Choice",
    },
    soupBases: {
      classicBoneBroth: {
        name: 'Classic Bone Broth',
        description: 'Rich, savory, slow-cooked flavor',
      },
      tomatoBase: {
        name: 'Tomato Base',
        description: 'Fresh, tangy, and lighter option',
      },
      dryMixMala: {
        name: 'Dry Mix Mala',
        description: 'Bold, aromatic, and spicy without soup',
      },
    },
  },
  contactPage: {
    hero: {
      title: 'Contact Us',
      subtitle: "Have a question or want to work together? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
    },
    form: {
      title: 'Make an Enquiry',
      subtitle: "Fill out the form below and we'll get back to you within 24 hours.",
      sendMessage: 'Send Enquiry',
      subjectOptions: {
        general: 'General Inquiry',
        support: 'Technical Support',
        partnership: 'Partnership',
        feedback: 'Feedback',
        other: 'Other',
      },
    },
    contactInfo: {
      title: 'Get in Touch',
      officeAddress: 'Office Address',
      phoneNumber: 'Phone Number',
      emailAddress: 'Email Address',
      address: '9/1-3 Metro Pde, Mawson Lakes SA 5095, Australia',
      phone: '+61 (4) 0000 0000',
      email: 'guofuyang2025@gmail.com',
    },
  },
  careersPage: {
    hero: {
      title: 'Beyond Franchising – Partner With Us',
      subtitle: 'We welcome collaborations across industries, including:\n•Event & festival catering\n•Sponsorships & cross-promotions\n•University & student association partnerships\n•Food delivery & e-commerce collaborations',
    },
    whyWorkWithUs: {
      title: 'Why Work With Us?',
      subtitle: "At Yangguofu Malatang, we believe our people are the heart of our success. With nearly 7,000 restaurants worldwide, we're bringing authentic Malatang to Australia — and we're looking for passionate, energetic, and customer-focused individuals to join our team.",
      globalBrand: {
        title: 'Global Brand',
        description: 'Be part of a global brand with exciting expansion plans in Australia',
      },
      supportiveEnvironment: {
        title: 'Supportive Environment',
        description: 'Enjoy a supportive and multicultural work environment',
      },
      careerDevelopment: {
        title: 'Career Development',
        description: 'Gain career development opportunities, from team member to management',
      },
      employeeBenefits: {
        title: 'Employee Benefits',
        description: 'Employee discounts and staff meals',
      },
    },
    currentOpenings: {
      title: 'Current Openings',
      subtitle: 'We are hiring across Australia for roles including:',
      positions: {
        frontOfHouse: {
          title: 'Front of House Team Member',
          description: 'Welcoming guests, taking orders, and ensuring great service',
        },
        kitchenStaff: {
          title: 'Kitchen Staff',
          description: 'Preparing fresh ingredients and creating authentic Malatang dishes',
        },
        shiftLeaders: {
          title: 'Shift Leaders & Store Managers',
          description: 'Leading teams, managing operations, and driving success',
        },
        headOffice: {
          title: 'Head Office & Franchise Support',
          description: 'Opportunities in HR, marketing, supply chain, and operations (Adelaide HQ)',
        },
      },
      location: 'Australia Wide',
      schedule: 'Part-time/Full-time',
      experience: 'Entry Level',
      australiaWide: 'Australia Wide',
      partTimeFullTime: 'Part-time/Full-time',
      fullTime: 'Full-time',
      entryLevel: 'Entry Level',
      years2Plus: '2+ years',
      years3Plus: '3+ years',
    },
    benefits: {
      title: "What You'll Receive as a Franchisee",
      comprehensiveTraining: {
        title: 'Comprehensive Training',
        description1: 'Our intensive training program covers every aspect of running your franchise, from day-to-day operations to advanced business strategies. You\'ll learn from industry experts and successful franchisees who have walked the same path.',
        description2: 'Training includes hands-on experience, comprehensive manuals, video tutorials, and ongoing support to ensure you\'re always up-to-date with the latest industry practices and business techniques.',
      },
      marketingSupport: {
        title: 'Marketing Support',
        description1: 'We provide comprehensive marketing support including brand materials, digital marketing campaigns, social media strategies, and local advertising guidance. Our marketing team works closely with each franchisee to develop customized campaigns for their specific market.',
        description2: 'From grand opening events to ongoing promotional activities, we ensure your business gets the visibility it needs to attract customers and build a strong local presence.',
      },
      growthOpportunities: {
        title: 'Exclusive Growth Opportunities',
        description1: 'As part of our franchise network, you\'ll have access to exclusive growth opportunities including multi-unit ownership, territory expansion, and special market development programs. We believe in rewarding success and providing pathways for ambitious franchisees to scale their operations.',
        description2: 'Our franchisees also benefit from exclusive supplier relationships, bulk purchasing discounts, and access to proprietary business tools and technologies that give them a competitive edge in their markets.',
      },
    },
    application: {
      title: 'Ready to Join Our Team?',
      subtitle: 'Submit your application below and our HR team will contact you within 48 hours to discuss your opportunities.',
      formTitle: 'Job Application',
      submitButton: 'Submit Application',
      submittingButton: 'Submitting...',
    },
  },
  franchisePage: {
    hero: {
      title: 'Franchise Opportunities',
      subtitle: 'As a YGF Australia Franchise Partner, you are more than an investor — you are joining the world’s largest and most recognized Malatang brand, with over 6,000 stores worldwide and rapid growth in Australia.',

    },
    jobDescription: {
      title: 'By partnering with us, you gain:',
      description1: '• Proven Business Model – a globally successful, highly replicable system tailored for the Australian market.',
      description2: '• Comprehensive Support – from site selection, store design, and staff training to supply chain and marketing campaigns.',
      description3: '• Strong Brand Power – leverage the reputation of YGF, already renowned as the world’s No.1 Malatang brand.',
      description4: '• Growing Market Demand – tap into the booming Asian fast- casual dining sector across Australia.',
      description5: '• As a franchise partner, you will not only build a profitable business but also help shape the future of YGF in Australia, bringing authentic Malatang culture to new audiences nationwide.',
    },
    qualifications: {
      title: 'Qualifications & Ideal Partner Profile',
      subtitle: 'We are seeking ambitious business partners who are ready to grow with YGF Australia and share our vision of bringing authentic Malatang culture across the nation',
      subtitle2: 'What we look for in a franchise partner:',
      experience: {
        title: 'Investment Capability',
        description: 'Solid financial capacity and commitment to invest in building and operating a successful YGF store.',
      },
      businessAcumen: {
        title: 'Business Acumen',
        description: 'Strong understanding of business operations, with the ability to make sound financial and strategic decisions.',
      },
      leadership: {
        title: 'Brand Commitment',
        description: 'Alignment with YGF’s values and dedication to maintaining our high standards of quality, service, and food safety.',
      },
      flexibility: {
        title: 'Growth Mindset',
        description: 'Willingness to scale — from operating a single store to potentially managing multiple locations in the future.',
      },
    },
    franchiseSupport: {
      title: 'Franchise Support',
      subtitle: 'At YGF Australia, we are committed to providing our franchise partners with comprehensive support at every stage of their journey. From selecting the right location to ensuring long-term operational excellence, our head office team is with you every step of the way.',
      locationAdvisory: {
        title: 'Location Advisory & Site Sourcing',
        description: 'With access to strong real estate networks, YGF Australia assists franchisees in identifying high-potential locations, sourcing prime retail sites, and negotiating favorable lease terms.',
      },
      initialTraining: {
        title: 'Initial Training',
        description: 'Comprehensive training delivered to franchisees and their teams, covering store operations, food handling standards, service protocols, and compliance with Australian law.',
      },
      designFitout: {
        title: 'Design & Fit-Out',
        description: 'We provide end-to-end design solutions, including store layout, interior design, branding, and supply of essential fit-out materials.',
      },
      preOpeningSupport: {
        title: 'Pre-Opening & Launch Support',
        description: 'Our experienced operations team provides on-site guidance for 4-6 weeks, assistance with recruitment & staff training, and hands-on operational support.',
      },
      marketingPromotion: {
        title: 'Marketing & Promotion',
        description: 'Franchisees benefit from national and local marketing initiatives, social media exposure, and grand opening campaign support.',
      },
      ongoingSupport: {
        title: 'Ongoing Operational Support',
        description: 'Long-term support including regular audits, continuous training, quality control, and compliance monitoring to ensure highest standards.',
      },
      description: 'Becoming a YGF Franchise Partner is a journey that requires dedication and resilience, but the rewards are significant — both financially and personally. Together, we will bring authentic Malatang to every corner of Australia.',
    },
    process: {
      title: 'The Process',
      subtitle: 'YGF Australia Franchise Process (6 Steps)',
      steps: {
        enquire: {
          title: 'Enquire',
          description: 'Pay application fee ($100).',
        },
        franchiseMeeting: {
          title: 'Franchise Meeting',
          description: 'Face-to-face meeting and store visit.',
        },
        siteSelection: {
          title: 'Site Selection',
          description: 'Choose a location (provided or self-selected).',
        },
        legalDocuments: {
          title: 'Legal Documents',
          description: 'Sign franchise agreement and related documents.',
        },
        training: {
          title: 'Training',
          description: 'Comprehensive training program.',
        },
        opening: {
          title: 'Opening',
          description: 'Store setup and official opening.',
        },
      },
    },
    faq: {
      title: 'Frequently Asked Questions – YGF Australia',
      sections: {
        applicationProcess: {
          title: 'Application & Process',
          questions: [
            {
              question: 'Is the application deposit refundable?',
              answer: 'The application deposit is AUD $100 and is non-refundable.'
            },
            {
              question: 'How long will it take to come through the application process?',
              answer: 'Once all documents are provided, the application process generally takes about one week to complete.'
            },
            {
              question: 'Does YGF Australia release their franchisee selection criteria?',
              answer: 'Yes. Final approval requires you to pass our selection process, including interviews and assessment of suitability.'
            },
            {
              question: 'By placing an enquiry on the website, is that all I have to do to start the recruitment process?',
              answer: 'Submitting an enquiry is the first step. You will then be guided through the full application, review, and interview process.'
            }
          ]
        },
        financeCosts: {
          title: 'Finance & Costs',
          questions: [
            {
              question: 'How much does your franchise opportunity cost, what does this price include and what other costs will be incurred in addition to this price?',
              answer: 'The total investment includes the franchise fee, store fit-out, equipment, and initial stock. Additional costs may include working capital, rent, wages, and other operating expenses. The exact amount depends on store size and location.'
            },
            {
              question: 'How much working capital do I need?',
              answer: 'Franchisees should prepare additional working capital to cover ongoing expenses, particularly in the first few months.'
            },
            {
              question: 'Do I need cash or equity towards the purchase of a franchise?',
              answer: 'Yes. Franchise partners are expected to contribute equity or cash investment towards the business.'
            },
            {
              question: 'How much money will the bank lend me?',
              answer: 'This will depend on your financial situation and the bank\'s franchise lending criteria.'
            },
            {
              question: 'What costs am I likely to incur once owning the business?',
              answer: 'Typical costs include rent, wages, utilities, marketing contributions, and supplier costs.'
            }
          ]
        },
        trainingSupport: {
          title: 'Training & Support',
          questions: [
            {
              question: 'Do you train me? Who pays for my training? Where do I go for training?',
              answer: 'YGF Australia provides comprehensive training covering store operations, food safety, and marketing. Training is included, but travel and accommodation expenses are usually paid by the franchisee.'
            },
            {
              question: 'What ongoing support will I get from YGF Australia?',
              answer: 'Franchisees receive continuous support in operations, supply chain, marketing, and business development.'
            }
          ]
        },
        siteLease: {
          title: 'Site & Lease',
          questions: [
            {
              question: 'Do I need to find a location for the store?',
              answer: 'YGF Australia assists with site selection, but the lease will be signed directly between you and the landlord.'
            },
            {
              question: 'If I suggest a location, does that mean I will be awarded that site?',
              answer: 'Not automatically. All sites are subject to assessment of suitability and approval by YGF Australia.'
            },
            {
              question: 'How long is the typical lease term? Why is the franchise & lease term different?',
              answer: 'Lease terms are usually negotiated with landlords (commonly 5–7 years). Franchise agreements typically run for around 5 years to align with business planning cycles.'
            },
            {
              question: 'What happens at the end of the lease term?',
              answer: 'Options may include renewal, relocation, or closure, depending on performance and lease negotiations.'
            }
          ]
        },
        returnsOperations: {
          title: 'Returns & Operations',
          questions: [
            {
              question: 'What kind of returns can I expect from running a YGF Australia franchise?',
              answer: 'Returns depend on location, market conditions, and individual effort. YGF Australia does not guarantee financial returns.'
            },
            {
              question: 'Why are existing stores for sale, priced differently to new site opportunities?',
              answer: 'Prices vary based on store performance, lease terms, and goodwill value.'
            },
            {
              question: 'What if I want to own more than one store?',
              answer: 'Multi-store ownership is possible for franchisees who meet performance benchmarks.'
            },
            {
              question: 'Do I need to work in the business full-time or can I run my franchise under management?',
              answer: 'We recommend franchisees work full-time, especially in the early stages. Some later transition to management-run operations once the store is stable.'
            },
            {
              question: 'Can I source my own supplies for the business?',
              answer: 'No. To ensure consistency and quality, all supplies must come from approved YGF suppliers.'
            }
          ]
        },
        citizenshipEligibility: {
          title: 'Citizenship & Eligibility',
          questions: [
            {
              question: 'Do I need previous business or food industry experience to become a franchise partner?',
              answer: 'Yes. Previous business or food industry experience is preferred, as it helps you succeed. Comprehensive training and support will also be provided.'
            },
            {
              question: 'How long is a YGF Australia Franchise Agreement?',
              answer: 'Typically 5 years, with renewal subject to performance.'
            },
            {
              question: 'Do I have to be an Australian Citizen or Permanent Resident of Australia to franchise with YGF Australia in Australia?',
              answer: 'Yes. Franchisees must be Australian citizens or permanent residents to ensure long-term business operation.'
            }
          ]
        }
      }
    },
    application: {
      title: 'Enquire Today',
      subtitle: 'Thank you for your interest in partnering with Yangguofu. Please complete the form below and our Franchise Development Team will contact you shortly.',
      formTitle: 'Become a Yangguofu Franchise Partner',
      submitButton: 'Send Franchise Inquiry',
      submittingButton: 'Submitting...',
    },
  },
  membershipPage: {
    hero: {
      title: 'Join Our Membership Program',
      subtitle: 'Unlock exclusive benefits, earn rewards, and enjoy premium experiences as a valued member of our community.',
    },
    benefits: {
      title: "What You'll Get as a Member",
      pointsSystem: {
        title: 'Smart Points System',
        description1: 'Earn points for every dollar spent, review written, and referral made. Points never expire and can be redeemed for discounts, free products, or exclusive experiences. The more active you are, the faster you earn.',
        description2: 'Special bonus point events happen regularly, giving you opportunities to earn extra rewards during holidays, product launches, and member appreciation days.',
      },
      exclusiveAccess: {
        title: 'Exclusive Member Access',
        description1: 'Get early access to new products, limited edition items, and special collections before they\'re available to the general public. Members also receive exclusive invitations to virtual events, workshops, and product demonstrations.',
        description2: 'Our member-only community forum provides a space to connect with other members, share experiences, and get insider tips from our team and fellow enthusiasts.',
      },
      personalizedExperience: {
        title: 'Personalized Experience',
        description1: 'Receive personalized product recommendations based on your preferences and purchase history. Our AI-powered system learns your tastes and suggests items you\'re likely to love, making shopping more enjoyable and efficient.',
        description2: 'Members also get access to personalized styling consultations, custom product bundles, and tailored content that matches their interests and lifestyle.',
      },
    },
    application: {
      title: 'Ready to Join Our Membership Program?',
      subtitle: 'Fill out the form below and start enjoying exclusive benefits today. Membership is free and takes just a few minutes to set up.',
      formTitle: 'Membership Application',
      formFields: {
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        membershipType: 'Membership Type',
        message: 'Tell us about yourself (Optional)',
      },
      membershipTypes: {
        basic: 'Basic Member (Free)',
        premium: 'Premium Member ($9.99/month)',
        vip: 'VIP Member ($19.99/month)',
      },
      submitButton: 'Join Membership Program',
      submittingButton: 'Submitting Application...',
    },
  },
  storePage: {
    hero: {
      title: 'Store',
      subtitle: 'We have multiple stores, welcome to visit.',
    },
  },
}

const zh: Strings = {
  header: {

    siteTitle: '杨国福麻辣烫',

    login: '登录',
    about: '关于我们',
    products: '产品',
    store: '店铺',
    membership: '会员',
    contact: '联系我们',
    franchise: '加盟',
    careers: '职业机会',
    language: 'en',
  },
  profileMenu: {
    profile: '个人信息',
    signOut: '退出登录',
  },
  banner: {
    title: '欢迎',
    subtitle: '欢迎来到杨国福麻辣烫',
  },
  introduction: {
    title: '简介',
    body: '杨国福麻辣烫是一家专注于麻辣烫的餐饮品牌，成立于2000年，总部位于哈尔滨。杨国福麻辣烫以其独特的口味和优质的服务而闻名，深受广大消费者的喜爱。',
  },
  product: {
    title: '产品',
    cardTitle: (id: number) => `产品 ${id}`,
    cardBody: '杨国福麻辣烫的产品以其独特的口味和优质的服务而闻名，深受广大消费者的喜爱。',
  },
  footer: {
    text: '杨国福麻辣烫',
  },
  loginPage: {
    title: '登录',
  },
  profilePage: {
    title: '个人信息',
  },
  homePage: {
    hero: {
      title: '杨国福麻辣烫',
      subtitle: '全球第一麻辣烫来到澳大利亚',
      extraText: '体验来自世界各地的正宗风味',
      ctaButton: '了解更多',
    },
    brand: {
      title: '关于我们的品牌',
      description: '在杨国福麻辣烫，我们的使命是与世界分享现代麻辣烫的正宗味道。成立于2000年，杨国福从哈尔滨的一个小摊发展成为麻辣烫餐饮的全球领导者，在20多个国家拥有近7000家餐厅。\n在澳大利亚，我们正在带来亚洲快休闲餐饮的新标准——正宗风味、每日新鲜食材和完全可定制的体验。我们为我们的传统、作为可饮用汤麻辣烫创造者的创新以及我们品牌所代表的充满活力的社区感到自豪。',
      ctaButton: '加盟我们',
    },
    products: {
      title: '我们的产品',
      description: '从60多种新鲜食材中选择\n三种招牌汤底：经典骨汤、番茄、干拌麻辣\n全球近7000家门店，现正在澳大利亚扩张',
      ctaButton: '探索我们的菜单',
    },
    testimonials: {
      title: '客户怎么说',
      subtitle: '听听我们满意客户的意见。',
      items: [
        { name: '周杰伦', feedback: '杨国福麻辣烫，哎呦不错哦', rating: 5, avatarSrc: '/tmp/avatar_1.png' },
        { name: '林俊杰', feedback: '圈圈圓圓圈圈天天年年天天的我吃杨国福麻辣烫', rating: 4, avatarSrc: '/tmp/avatar_2.png' },
        { name: '王力宏', feedback: '遥远的中国有一碗杨国福麻辣烫', rating: 5, avatarSrc: '/tmp/avatar_3.png' },
      ],
    },
  },
  aboutPage: {
    title: '关于我们',
    body: '杨国福麻辣烫是一家专注于麻辣烫的餐饮品牌，成立于2000年，总部位于哈尔滨。杨国福麻辣烫以其独特的口味和优质的服务而闻名，深受广大消费者的喜爱。',
    hero: {
      title: '关于我们',
      subtitle: '我们的故事 – 从哈尔滨到世界',
      description: '杨国福（YGF）是现代麻辣烫的先驱和全球领导者。\n成立于2000年，作为哈尔滨的一个小摊，我们的创始人创造了世界上第一个"可饮用汤麻辣烫"——四川香料和丰盛的东北牛骨汤的大胆融合。\n从一个简陋的摊位，杨国福发展成了全国性的轰动。到2010年，我们在中国超过了1000家门店，今天，杨国福在20多个国家拥有近7000家餐厅，向全球观众介绍正宗的麻辣烫。',
    },
    team: {
      title: '我们的团队',
      subtitle: '认识杨国福澳大利亚背后的领导团队',
    },
    story: {
      journey: {
        title: '我们的全球贡献',
        description1: '• 创新者 – 可饮用汤麻辣烫的创造者。\n• 全球推广者 – 将麻辣烫从街头食品提升为全球烹饪标志。\n• 行业标准制定者 – 开创现代物流、供应链和行业标准。',
        description2: '',
        button: '了解更多',
      },
      innovation: {
        title: '杨国福在澳大利亚',
        description1: '2025年5月，杨国福澳大利亚成为杨国福麻辣烫的独家总加盟商。\n我们的领导团队带来了超过15年的澳大利亚餐饮行业专业知识，包括帮助建立Spicy World Australia的关键成员。',
        description2: '今天，杨国福在全国运营10家门店。到2025年底，我们将再开设三家——包括在阿德莱德唐人街Gouger Street的200万澳元旗舰店，这是南半球最大的麻辣烫餐厅。\n我们的旗舰店将结合正宗的杨国福风味与丰富的文化和澳大利亚设计元素，代表新一代现代麻辣烫。',
        button: '探索我们的工作',
      },
    },
    mission: {
      title: '展望未来',
      description1: '• 2025年11月：马里昂（南澳大利亚）\n• 2025年底：阿德莱德Gouger Street旗舰店 + 布里斯班CBD\n• 2026年上半年：南澳再开两家门店\n• 2026年中：悉尼旗舰店\n• 到2028年：澳大利亚30家杨国福门店',
      description2: '',
      description3: '',
    },
    stats: {
      title: '数据说话',
      subtitle: '我们的成就说明了一切——这是我们共同努力的成果',
    },
    cta: {
      title: '准备开始了吗？',
      description: '让我们讨论如何帮助实现您的愿景，一起创造非凡的东西。',
      startProject: '开始项目',
      contactUs: '联系我们',
    },
  },
  productsPage: {
    hero: {
      title: '我们的招牌菜品',
      subtitle: '探索我们最受欢迎的菜品和菜单亮点，用激情和最好的食材精心制作',
    },
    signatureSoupBases: {
      title: '招牌汤底',
      subtitle: '我们精心制作的汤底，为您的碗带来正宗的风味',
      signatureRecipe: '招牌配方',
    },
    freshIngredients: {
      title: '我们的新鲜食材',
      subtitle: '60多种新鲜食材：蔬菜、海鲜、肉类、豆腐、面条等——全部每日挑选和准备。',
      freshDaily: '每日新鲜',
    },
    specialCombos: {
      title: '特色套餐和季节风味',
      subtitle: '限时主厨特色菜，融合正宗麻辣烫与当地澳大利亚灵感。',
      description: '体验我们主厨创造的独特风味组合，采用季节性食材和创新烹饪技术，将传统麻辣烫与现代澳大利亚烹饪影响相结合。',
      limitedTime: '限时',
      chefsChoice: '主厨推荐',
    },
    soupBases: {
      classicBoneBroth: {
        name: '经典骨汤',
        description: '以新鲜大骨与多种蔬菜文火慢炖数小时，汤色乳白醇厚，入口鲜美绵长，既能衬托各种食材的原味，又带来滋补与满足感，是最受欢迎的基础之选。',
      },
      tomatoBase: {
        name: '番茄汤底',
        description: '选用新鲜番茄熬煮，酸甜平衡，汤汁清爽而不油腻，入口柔和却层次分明，不仅能缓解辣味的刺激，还能带来暖胃与开胃的双重享受。',
      },
      dryMixMala: {
        name: '干拌麻辣',
        description: '采用花椒、辣椒与秘制香料翻炒拌匀，辣中带麻、香气浓烈，食材裹满调料却不带汤水，更凸显劲道口感与麻辣的直接冲击，是重口味爱好者的必点选择。',
      },
    }
  },
  contactPage: {
    hero: {
      title: '联系我们',
      subtitle: '有问题或想合作吗？我们很乐意听到您的消息，我们会尽快回复。',
    },
    form: {
      title: '联系我们',
      subtitle: '填写下面的表格，我们会在24小时内回复您。',
      sendMessage: '发送消息',
      subjectOptions: {
        general: '一般咨询',
        support: '技术支持',
        partnership: '合作伙伴',
        feedback: '反馈',
        other: '其他',
      },
    },
    contactInfo: {
      title: '联系我们',
      officeAddress: '办公地址',
      phoneNumber: '电话号码',
      emailAddress: '电子邮件地址',
      address: '9/1-3 Metro Pde, Mawson Lakes SA 5095, Australia',
      phone: '+61 (4) 0000 0000',
      email: 'guofuyang2025@gmail.com',
    },
  },
  careersPage: {
    hero: {
      title: '超越加盟——与我们合作',
      subtitle: '我们欢迎跨行业的合作，包括：\n•活动和节日餐饮\n•赞助和交叉推广\n•大学和学生协会合作\n•食品配送和电子商务合作',
    },
    whyWorkWithUs: {
      title: '为什么与我们合作？',
      subtitle: '在杨国福麻辣烫，我们相信员工是我们成功的心脏。在全球拥有近7000家餐厅，我们正在将正宗的麻辣烫带到澳大利亚——我们正在寻找充满激情、精力充沛、以客户为中心的个人加入我们的团队。',
      globalBrand: {
        title: '全球品牌',
        description: '成为全球品牌的一部分，在澳大利亚有令人兴奋的扩张计划',
      },
      supportiveEnvironment: {
        title: '支持性环境',
        description: '享受支持性和多元文化的工作环境',
      },
      careerDevelopment: {
        title: '职业发展',
        description: '获得职业发展机会，从团队成员到管理层',
      },
      employeeBenefits: {
        title: '员工福利',
        description: '员工折扣和员工餐',
      },
    },
    currentOpenings: {
      title: '当前职位',
      subtitle: '我们在澳大利亚招聘以下职位：',
      positions: {
        frontOfHouse: {
          title: '前台团队成员',
          description: '欢迎客人，接受订单，确保优质服务',
        },
        kitchenStaff: {
          title: '厨房员工',
          description: '准备新鲜食材，制作正宗麻辣烫菜品',
        },
        shiftLeaders: {
          title: '班次领导和店长',
          description: '领导团队，管理运营，推动成功',
        },
        headOffice: {
          title: '总部和加盟支持',
          description: '人力资源、营销、供应链和运营机会（阿德莱德总部）',
        },
      },
      location: '全澳大利亚',
      schedule: '兼职/全职',
      experience: '入门级',
      australiaWide: '全澳大利亚',
      partTimeFullTime: '兼职/全职',
      fullTime: '全职',
      entryLevel: '入门级',
      years2Plus: '2年以上',
      years3Plus: '3年以上',
    },
    benefits: {
      title: '作为加盟商您将获得什么',
      comprehensiveTraining: {
        title: '全面培训',
        description1: '我们的强化培训计划涵盖经营加盟店的各个方面，从日常运营到高级商业策略。您将向行业专家和成功的加盟商学习，他们走过同样的道路。',
        description2: '培训包括实践经验、综合手册、视频教程和持续支持，确保您始终了解最新的行业实践和商业技术。',
      },
      marketingSupport: {
        title: '营销支持',
        description1: '我们提供全面的营销支持，包括品牌材料、数字营销活动、社交媒体策略和本地广告指导。我们的营销团队与每个加盟商密切合作，为他们的特定市场开发定制活动。',
        description2: '从盛大开业活动到持续的促销活动，我们确保您的业务获得吸引客户和建立强大本地存在所需的可见性。',
      },
      growthOpportunities: {
        title: '独家增长机会',
        description1: '作为我们加盟网络的一部分，您将获得独家增长机会，包括多单元所有权、区域扩张和特殊市场开发计划。我们相信奖励成功，为雄心勃勃的加盟商提供扩展运营的途径。',
        description2: '我们的加盟商还受益于独家供应商关系、批量采购折扣以及专有商业工具和技术的访问权限，这些工具和技术为他们在市场中提供了竞争优势。',
      },
    },
    application: {
      title: '准备加入我们的团队吗？',
      subtitle: '在下面提交您的申请，我们的人力资源团队将在48小时内联系您讨论您的机会。',
      formTitle: '工作申请',
      submitButton: '提交申请',
      submittingButton: '提交中...',
    },
  },
  franchisePage: {
    hero: {
      title: '加盟机会',
      subtitle: '公司描述\n在杨国福麻辣烫，我们的使命是与世界分享现代麻辣烫的正宗味道。成立于2000年，杨国福从哈尔滨的一个小摊发展成为麻辣烫餐饮的全球领导者，在20多个国家拥有近7000家餐厅。\n在澳大利亚，我们正在带来亚洲快休闲餐饮的新标准——正宗风味、每日新鲜食材和完全可定制的体验。我们为我们的传统、作为可饮用汤麻辣烫创造者的创新以及我们品牌所代表的充满活力的社区感到自豪。',
    },
    jobDescription: {
      title: '工作描述——您作为加盟合作伙伴的角色',
      description1: '作为杨国福加盟合作伙伴，您不仅仅是企业主——您是我们品牌的大使。您的角色是亲力亲为、充满活力且非常有意义的。一天您可能在地板上，指导您的团队提供完美的客户体验；第二天，您可能参与当地社区，向新观众介绍麻辣烫文化。',
      description2: '您将充满激情地领导，坚持最高的质量和食品安全标准，确保每位客人都享受正宗、热情和难忘的用餐体验。作为合作伙伴，您不仅会发展一个盈利的企业，还会帮助建设杨国福在澳大利亚的未来。',
    },
    qualifications: {
      title: '资格和理想合作伙伴档案',
      subtitle: '我们正在寻找与我们一样热爱食物、文化和社区的热情个人。',
      subtitle2: '我们的理想加盟合作伙伴具备以下关键特质：',
      experience: {
        title: '经验',
        description: '在酒店、零售或管理大型团队方面的经验',
      },
      businessAcumen: {
        title: '商业头脑',
        description: '强大的商业和财务理解',
      },
      leadership: {
        title: '领导力',
        description: '对亲力亲为领导的承诺——每天积极参与您的餐厅',
      },
      flexibility: {
        title: '灵活性',
        description: '愿意接受澳大利亚大都市和地区的机会',
      },
    },
    franchiseSupport: {
      title: '加盟支持',
      subtitle: '在杨国福澳大利亚，我们致力于为加盟合作伙伴在旅程的每个阶段提供全面支持。从选择合适的位置到确保长期运营卓越，我们的总部团队与您一路同行。',
      locationAdvisory: {
        title: '选址咨询和场地采购',
        description: '凭借强大的房地产网络，杨国福澳大利亚协助加盟商识别高潜力位置、采购优质零售场地并协商有利的租赁条款。',
      },
      initialTraining: {
        title: '初期培训',
        description: '为加盟商及其团队提供全面培训，涵盖店铺运营、食品处理标准、服务协议和澳大利亚法律合规。',
      },
      designFitout: {
        title: '设计和装修',
        description: '我们提供端到端的设计解决方案，包括店铺布局、室内设计、品牌标识和基本装修材料供应。',
      },
      preOpeningSupport: {
        title: '开业前和启动支持',
        description: '我们经验丰富的运营团队提供4-6周的现场指导、招聘和员工培训协助，以及实际操作支持。',
      },
      marketingPromotion: {
        title: '营销和推广',
        description: '加盟商受益于国家和本地营销活动、社交媒体曝光和盛大开业活动支持。',
      },
      ongoingSupport: {
        title: '持续运营支持',
        description: '长期支持包括定期审计、持续培训、质量控制和合规监控，确保最高标准。',
      },
      description: '成为杨国福加盟合作伙伴是一个需要奉献和韧性的旅程，但回报是巨大的——无论是财务上还是个人上。我们将一起将正宗的麻辣烫带到澳大利亚的每个角落。',
    },
    process: {
      title: '流程',
      subtitle: 'YGF澳大利亚加盟流程（6个步骤）',
      steps: {
        enquire: {
          title: '咨询',
          description: '支付申请费（$100）。',
        },
        franchiseMeeting: {
          title: '加盟会议',
          description: '面对面会议和门店参观。',
        },
        siteSelection: {
          title: '选址',
          description: '选择位置（提供或自选）。',
        },
        legalDocuments: {
          title: '法律文件',
          description: '签署加盟协议和相关文件。',
        },
        training: {
          title: '培训',
          description: '全面培训计划。',
        },
        opening: {
          title: '开业',
          description: '门店设置和正式开业。',
        },
      },
    },
    faq: {
      title: '常见问题 – YGF澳大利亚',
      sections: {
        applicationProcess: {
          title: '申请与流程',
          questions: [
            {
              question: '申请押金可以退还吗？',
              answer: '申请押金为100澳元，不可退还。'
            },
            {
              question: '申请流程需要多长时间？',
              answer: '一旦提供所有文件，申请流程通常需要大约一周时间完成。'
            },
            {
              question: 'YGF澳大利亚会公布他们的加盟商选择标准吗？',
              answer: '是的。最终批准需要您通过我们的选择流程，包括面试和适合性评估。'
            },
            {
              question: '在网站上提交咨询是否就是开始招聘流程的全部？',
              answer: '提交咨询是第一步。然后您将被引导完成完整的申请、审查和面试流程。'
            }
          ]
        },
        financeCosts: {
          title: '财务与成本',
          questions: [
            {
              question: '您的加盟机会成本是多少，这个价格包括什么，除了这个价格之外还会产生什么其他成本？',
              answer: '总投资包括加盟费、店面装修、设备和初始库存。额外成本可能包括营运资金、租金、工资和其他运营费用。确切金额取决于店面大小和位置。'
            },
            {
              question: '我需要多少营运资金？',
              answer: '加盟商应准备额外的营运资金来支付持续费用，特别是在前几个月。'
            },
            {
              question: '购买加盟店我需要现金或股权吗？',
              answer: '是的。加盟合作伙伴需要为业务贡献股权或现金投资。'
            },
            {
              question: '银行会借给我多少钱？',
              answer: '这将取决于您的财务状况和银行的加盟贷款标准。'
            },
            {
              question: '拥有业务后我可能会产生什么成本？',
              answer: '典型成本包括租金、工资、公用事业、营销贡献和供应商成本。'
            }
          ]
        },
        trainingSupport: {
          title: '培训与支持',
          questions: [
            {
              question: '您会培训我吗？谁支付我的培训费用？我去哪里培训？',
              answer: 'YGF澳大利亚提供涵盖店面运营、食品安全和营销的全面培训。培训费用已包含，但差旅和住宿费用通常由加盟商支付。'
            },
            {
              question: '我将从YGF澳大利亚获得什么持续支持？',
              answer: '加盟商在运营、供应链、营销和业务发展方面获得持续支持。'
            }
          ]
        },
        siteLease: {
          title: '选址与租赁',
          questions: [
            {
              question: '我需要为店面找位置吗？',
              answer: 'YGF澳大利亚协助选址，但租赁合同将直接由您与房东签署。'
            },
            {
              question: '如果我建议一个位置，是否意味着我将获得该位置？',
              answer: '不是自动的。所有位置都需要经过适合性评估和YGF澳大利亚的批准。'
            },
            {
              question: '典型的租赁期限是多长？为什么加盟和租赁期限不同？',
              answer: '租赁期限通常与房东协商（通常5-7年）。加盟协议通常运行约5年，以与业务规划周期保持一致。'
            },
            {
              question: '租赁期限结束时会发生什么？',
              answer: '根据业绩和租赁谈判，选择可能包括续约、搬迁或关闭。'
            }
          ]
        },
        returnsOperations: {
          title: '回报与运营',
          questions: [
            {
              question: '经营YGF澳大利亚加盟店我能期待什么样的回报？',
              answer: '回报取决于位置、市场条件和个人努力。YGF澳大利亚不保证财务回报。'
            },
            {
              question: '为什么现有店面出售价格与新位置机会不同？',
              answer: '价格根据店面业绩、租赁条款和商誉价值而变化。'
            },
            {
              question: '如果我想拥有多个店面怎么办？',
              answer: '对于达到业绩基准的加盟商，多店面所有权是可能的。'
            },
            {
              question: '我需要在业务中全职工作还是可以在管理下经营我的加盟店？',
              answer: '我们建议加盟商全职工作，特别是在早期阶段。一些人在店面稳定后转向管理运营。'
            },
            {
              question: '我可以为业务采购自己的供应品吗？',
              answer: '不可以。为确保一致性和质量，所有供应品必须来自批准的YGF供应商。'
            }
          ]
        },
        citizenshipEligibility: {
          title: '公民身份与资格',
          questions: [
            {
              question: '成为加盟合作伙伴我需要有商业或食品行业经验吗？',
              answer: '是的。优先考虑有商业或食品行业经验，因为这有助于您成功。也将提供全面培训和支持。'
            },
            {
              question: 'YGF澳大利亚加盟协议多长时间？',
              answer: '通常5年，续约取决于业绩。'
            },
            {
              question: '在澳大利亚与YGF澳大利亚加盟，我必须是澳大利亚公民或永久居民吗？',
              answer: '是的。加盟商必须是澳大利亚公民或永久居民，以确保长期业务运营。'
            }
          ]
        }
      }
    },
    application: {
      title: '今天咨询',
      subtitle: '感谢您对与杨国福合作的兴趣。请填写下面的表格，我们的加盟开发团队将很快联系您。',
      formTitle: '成为杨国福加盟合作伙伴',
      submitButton: '发送加盟咨询',
      submittingButton: '提交中...',
    },
  },
  membershipPage: {
    hero: {
      title: '加入我们的会员计划',
      subtitle: '解锁独家福利，赚取奖励，作为我们的会员享受优质体验。',
    },
    benefits: {
      title: '作为会员您将获得什么',
      pointsSystem: {
        title: '智能积分系统',
        description1: '每消费一澳元、写评论和推荐都能获得积分。积分永不过期，可以兑换折扣、免费产品或独家体验。您越活跃，赚得越快。',
        description2: '特殊奖励积分活动定期举行，让您在假期、产品发布和会员感谢日期间有机会获得额外奖励。',
      },
      exclusiveAccess: {
        title: '新品抢先体验',
        description1: '在向公众开放之前，抢先获得新产品体验邀请。会员还收到虚拟活动、研讨会和产品演示的独家邀请。',
        description2: '我们的仅限会员社区论坛提供了一个与其他会员联系、分享经验和从我们的团队和爱好者那里获得内部提示的空间。',
      },
      personalizedExperience: {
        title: '个性化体验',
        description1: '根据您的偏好和购买历史接收个性化产品推荐，推荐您可能喜欢的商品，让点餐更愉快和高效。',
        description2: '会员还可以获得个性化点餐咨询、定制套餐和符合他们兴趣和生活方式的定制内容。',
      },
    },
    application: {
      title: '准备加入我们的会员计划吗？',
      subtitle: '填写下面的表格，今天就开始享受独家福利。会员免费，只需几分钟即可设置。',
      formTitle: '会员申请',
      formFields: {
        firstName: '名字',
        lastName: '姓氏',
        email: '电子邮件地址',
        phone: '电话号码',
        membershipType: '会员类型',
        message: '告诉我们关于您自己（可选）',
      },
      membershipTypes: {
        basic: '基础会员（免费）',
        premium: '高级会员（$9.99/月）',
        vip: 'VIP会员（$19.99/月）',
      },
      submitButton: '加入会员计划',
      submittingButton: '提交申请中...',
    },
  },
  storePage: {
    hero: {
      title: '店铺',
      subtitle: '我们拥有多家店铺，欢迎您前来品尝。',
    },
  },
}

export function useI18n() {
  const { language } = useLanguage()
  return language === 'zh' ? zh : en
}




