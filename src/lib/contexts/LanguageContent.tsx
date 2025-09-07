'use client'

import { useLanguage } from './LanguageContext'

type Strings = any

const en: Strings = {
  header: {
    siteTitle: 'Yangguofu Malatang',
    login: 'Login',
    about: 'About Us',
    products: 'Products',
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
      title: 'Yangguofu Australia',
      subtitle: '"Global No.1 Malatang, now in Australia"',
      extraText: 'Fresh, authentic, and made your way.',
      ctaButton: 'Learn More',
    },
    brand: {
      title: 'About Our Brand',
      description: 'At Yang Guo Fu Malatang, our mission is to share the authentic taste of modern Malatang with the world. \nIn Australia, we are bringing a new standard of Asian fast-casual dining — authentic flavors, fresh daily ingredients, and a fully customizable experience.',
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
        { name: 'John Doe', feedback: 'Excellent service and results! Highly recommend.', rating: 5 },
        { name: 'Jane Smith', feedback: 'Great communication and attention to detail. Very professional.', rating: 4 },
        { name: 'Peter Jones', feedback: 'Impressed with the speed and quality of the project. Will work with them again.', rating: 5 },
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
      description1: '• November 2025: Marion (South Australia)\n• End of 2025: Gouger Street Adelaide flagship + Brisbane CBD\n• First Half 2026: Two more stores in SA\n• Mid-2026: Sydney flagship\n• By 2028: 30 YGF stores across Australia',
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
      title: 'Send us a Message',
      subtitle: "Fill out the form below and we'll get back to you within 24 hours.",
      sendMessage: 'Send Message',
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
      address: '123 Innovation Drive\nTech District, Silicon Valley\nCA 94025, United States',
      phone: '+1 (555) 123-4567\nMon-Fri 9:00 AM - 6:00 PM PST',
      email: 'hello@yourcompany.com\nsupport@yourcompany.com',
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
      subtitle: 'Company Description\nAt Yang Guo Fu Malatang, our mission is to share the authentic taste of modern Malatang with the world. Founded in 2000, YGF has grown from a small Harbin food stall into the global leader of Malatang dining, with nearly 7,000 restaurants in over 20 countries.\nIn Australia, we are bringing a new standard of Asian fast-casual dining — authentic flavors, fresh daily ingredients, and a fully customizable experience. We are proud of our heritage, our innovation as the creator of drinkable soup Malatang, and the vibrant community our brand represents.',
    },
    jobDescription: {
      title: 'Job Description – Your Role as a Franchise Partner',
      description1: 'As a Yang Guo Fu Franchise Partner, you are more than a business owner — you are an ambassador of our brand. Your role is hands-on, dynamic, and deeply rewarding. One day you may be on the floor, guiding your team to deliver the perfect customer experience; the next, you may be engaging with the local community to introduce Malatang culture to new audiences.',
      description2: 'You\'ll lead with passion, uphold the highest standards of quality and food safety, and ensure every guest enjoys a dining experience that is authentic, welcoming, and memorable. As a partner, you\'ll not only grow a profitable business but also help build the future of Yang Guo Fu in Australia.',
    },
    qualifications: {
      title: 'Qualifications & Ideal Partner Profile',
      subtitle: 'We are seeking passionate individuals who share our love for food, culture, and community.',
      experience: {
        title: 'Experience',
        description: 'Experience in hospitality, retail, or managing large teams',
      },
      businessAcumen: {
        title: 'Business Acumen',
        description: 'Strong business and financial understanding',
      },
      leadership: {
        title: 'Leadership',
        description: 'A commitment to hands-on leadership — being actively involved in your restaurant daily',
      },
      flexibility: {
        title: 'Flexibility',
        description: 'Willingness to embrace opportunities in both metropolitan and regional areas of Australia',
      },
    },
    franchiseSupport: {
      title: 'Franchise Support',
      subtitle: 'Our franchise agreements are designed as true partnerships, built on long-term success.',
      trainingOperations: {
        title: 'Training & Operations',
        description: 'Comprehensive training & operations manuals',
      },
      supplyChain: {
        title: 'Supply Chain & Logistics',
        description: 'Centralized supply chain & logistics',
      },
      marketingCampaigns: {
        title: 'Marketing Campaigns',
        description: 'National & international marketing campaigns',
      },
      description: 'Becoming a YGF Franchise Partner is a journey that requires dedication and resilience, but the rewards are significant — both financially and personally. Together, we will bring authentic Malatang to every corner of Australia.',
    },
    process: {
      title: 'The Process',
      subtitle: 'Our streamlined franchise process ensures a smooth experience for all potential partners.',
      steps: {
        enquire: {
          title: 'Step 1 - Enquire',
          description: 'Make an online enquiry and fill out the questionnaire.',
        },
        interview: {
          title: 'Step 2 - Interview',
          description: 'Our franchise recruitment team will contact you by phone for an initial interview.',
        },
        onlineInterview: {
          title: 'Step 3 - Online Interview',
          description: 'Online interview with our Director of Franchise.',
        },
        meetFounder: {
          title: 'Step 4 - Meet Our Founder',
          description: 'Online brief meeting with Steven Marks (Founder and co-CEO).',
        },
      },
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
}

const zh: Strings = {
  header: {
    siteTitle: '杨国福麻辣烫',
    login: '登录',
    about: '关于我们',
    products: '产品',
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
      title: '欢迎来到我们的数字解决方案',
      subtitle: '用尖端技术和创新解决方案推动您的业务发展。',
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
        { name: '张三', feedback: '出色的服务和结果！强烈推荐。', rating: 5 },
        { name: '李四', feedback: '出色的沟通和关注细节。非常专业。', rating: 4 },
        { name: '王五', feedback: '对项目的速度和质量印象深刻。会再次合作。', rating: 5 },
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
      title: '特色组合和季节风味',
      subtitle: '限时主厨特色菜，融合正宗麻辣烫与当地澳大利亚灵感。',
      description: '体验我们主厨创造的独特风味组合，采用季节性食材和创新烹饪技术，将传统麻辣烫与现代澳大利亚烹饪影响相结合。',
      limitedTime: '限时',
      chefsChoice: '主厨推荐',
    },
    soupBases: {
      classicBoneBroth: {
        name: '经典骨汤',
        description: '浓郁、鲜美、慢炖风味',
      },
      tomatoBase: {
        name: '番茄汤底',
        description: '新鲜、酸甜、更清淡的选择',
      },
      dryMixMala: {
        name: '干拌麻辣',
        description: '大胆、芳香、无汤的麻辣',
      },
    },
  },
  contactPage: {
    hero: {
      title: '联系我们',
      subtitle: '有问题或想合作吗？我们很乐意听到您的消息。给我们发消息，我们会尽快回复。',
    },
    form: {
      title: '给我们发消息',
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
      address: '创新大道123号\n科技区，硅谷\n加利福尼亚州94025，美国',
      phone: '+1 (555) 123-4567\n周一至周五 上午9:00 - 下午6:00 PST',
      email: 'hello@yourcompany.com\nsupport@yourcompany.com',
    },
  },
  careersPage: {
    hero: {
      title: '超越加盟——与我们合作',
      subtitle: '我们欢迎跨行业的合作，包括：\n•活动和节日餐饮\n•赞助和交叉推广\n•大学和学生协会合作\n•食品配送和电子商务合作',
    },
    whyWorkWithUs: {
      title: '为什么与我们合作？',
      subtitle: '在杨国福麻辣烫，我们相信我们的人员是我们成功的心脏。在全球拥有近7000家餐厅，我们正在将正宗的麻辣烫带到澳大利亚——我们正在寻找充满激情、精力充沛、以客户为中心的个人加入我们的团队。',
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
      subtitle: '我们的加盟协议设计为真正的合作伙伴关系，建立在长期成功的基础上。',
      trainingOperations: {
        title: '培训和运营',
        description: '全面的培训和运营手册',
      },
      supplyChain: {
        title: '供应链和物流',
        description: '集中式供应链和物流',
      },
      marketingCampaigns: {
        title: '营销活动',
        description: '国家和国际营销活动',
      },
      description: '成为杨国福加盟合作伙伴是一个需要奉献和韧性的旅程，但回报是巨大的——无论是财务上还是个人上。我们将一起将正宗的麻辣烫带到澳大利亚的每个角落。',
    },
    process: {
      title: '流程',
      subtitle: '我们简化的加盟流程确保所有潜在合作伙伴的顺利体验。',
      steps: {
        enquire: {
          title: '步骤1 - 咨询',
          description: '进行在线咨询并填写问卷。',
        },
        interview: {
          title: '步骤2 - 面试',
          description: '我们的加盟招聘团队将通过电话联系您进行初步面试。',
        },
        onlineInterview: {
          title: '步骤3 - 在线面试',
          description: '与我们的加盟总监进行在线面试。',
        },
        meetFounder: {
          title: '步骤4 - 会见我们的创始人',
          description: '与Steven Marks（创始人和联合首席执行官）进行简短的在线会议。',
        },
      },
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
      subtitle: '解锁独家福利，赚取奖励，作为我们社区的重要成员享受优质体验。',
    },
    benefits: {
      title: '作为会员您将获得什么',
      pointsSystem: {
        title: '智能积分系统',
        description1: '每消费一美元、写评论和推荐都能获得积分。积分永不过期，可以兑换折扣、免费产品或独家体验。您越活跃，赚得越快。',
        description2: '特殊奖励积分活动定期举行，让您在假期、产品发布和会员感谢日期间有机会获得额外奖励。',
      },
      exclusiveAccess: {
        title: '独家会员访问',
        description1: '在向公众开放之前，抢先获得新产品、限量版商品和特殊系列。会员还收到虚拟活动、研讨会和产品演示的独家邀请。',
        description2: '我们的仅限会员社区论坛提供了一个与其他会员联系、分享经验和从我们的团队和爱好者那里获得内部提示的空间。',
      },
      personalizedExperience: {
        title: '个性化体验',
        description1: '根据您的偏好和购买历史接收个性化产品推荐。我们的AI驱动系统学习您的口味，建议您可能喜欢的商品，让购物更愉快和高效。',
        description2: '会员还可以获得个性化造型咨询、定制产品套装和符合他们兴趣和生活方式的定制内容。',
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
}

export function useI18n() {
  const { language } = useLanguage()
  return language === 'zh' ? zh : en
}


