'use client'

import { useLanguage } from './LanguageContext'

type Strings = {
  header: {
    siteTitle: string
    login: string
    about: string
    products: string
    contact: string
    franchise: string
    careers: string
    language: string
  }
  profileMenu: {
    profile: string
    signOut: string
  }
  banner: {
    title: string
    subtitle: string
  }
  introduction: {
    title: string
    body: string
  }
  product: {
    title: string
    cardTitle: (id: number) => string
    cardBody: string
  }
  footer: {
    text: string
  }
  loginPage: {
    title: string
  }
  profilePage: {
    title: string
  }
  // 新增首页内容
  homePage: {
    hero: {
      title: string
      subtitle: string
      extraText: string
      ctaButton: string
    }
    brand: {
      title: string
      description: string
      ctaButton: string
    }
    products: {
      title: string
      description: string
      ctaButton: string
    }
    testimonials: {
      title: string
      subtitle: string
      items: Array<{
        name: string
        feedback: string
        rating: number
      }>
    }
  }
  aboutPage: {
    title: string
    body: string
    hero: {
      title: string
      subtitle: string
      description: string
    }
    team: {
      title: string
      subtitle: string
    }
    story: {
      journey: {
        title: string
        description1: string
        description2: string
        button: string
      }
      innovation: {
        title: string
        description1: string
        description2: string
        button: string
      }
    }
    mission: {
      title: string
      description1: string
      description2: string
      description3: string
    }
    stats: {
      title: string
      subtitle: string
    }
    cta: {
      title: string
      description: string
      startProject: string
      contactUs: string
    }
  }
}

const en: Strings = {
  header: {
    siteTitle: 'Site Title',
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
    subtitle: 'This is a placeholder banner.',
  },
  introduction: {
    title: 'Introduction',
    body: 'Placeholder introduction content for the template.',
  },
  product: {
    title: 'Products',
    cardTitle: (id: number) => `Product ${id}`,
    cardBody: 'Placeholder product description.',
  },
  footer: {
    text: 'Footer placeholder',
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
    body: 'This is a placeholder About page for the template.',
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
}

const zh: Strings = {
  header: {
    siteTitle: '站点标题',
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
    subtitle: '这是一个占位横幅。',
  },
  introduction: {
    title: '简介',
    body: '模板的占位介绍内容。',
  },
  product: {
    title: '产品',
    cardTitle: (id: number) => `产品 ${id}`,
    cardBody: '占位产品描述。',
  },
  footer: {
    text: '页脚占位符',
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
    body: '这是模板的关于我们占位页面。',
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
}

export function useI18n() {
  const { language } = useLanguage()
  return language === 'zh' ? zh : en
}


