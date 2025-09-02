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
  aboutPage: {
    title: 'About Us',
    body: 'This is a placeholder About page for the template.',
    hero: {
      title: 'About Us',
      subtitle: 'Building the future of digital experiences with cutting-edge technology and innovative solutions',
      description: 'We are a passionate team of developers, designers, and innovators dedicated to creating exceptional web applications that transform how people interact with technology. Our mission is to deliver seamless, scalable, and beautiful solutions that empower businesses and delight users.',
    },
    team: {
      title: 'Meet Our Team',
      subtitle: 'The brilliant minds behind our success, working together to bring your vision to life',
    },
    story: {
      journey: {
        title: 'Our Journey Begins',
        description1: 'Founded in 2020, we started as a small team with a big dream: to revolutionize how businesses approach digital transformation. What began as late-night coding sessions has grown into a thriving company that serves clients worldwide.',
        description2: 'Our first project was a simple e-commerce platform, but it taught us invaluable lessons about user experience, scalability, and the importance of clean, maintainable code. From there, we\'ve never looked back.',
        button: 'Learn More',
      },
      innovation: {
        title: 'Innovation at Our Core',
        description1: 'Innovation isn\'t just a buzzword for us—it\'s the foundation of everything we do. We constantly explore emerging technologies, experiment with new approaches, and push the boundaries of what\'s possible in web development.',
        description2: 'From implementing cutting-edge AI features to optimizing performance for millions of users, we\'re always looking for ways to make our solutions faster, smarter, and more intuitive.',
        button: 'Explore Our Work',
      },
    },
    mission: {
      title: 'Our Mission',
      description1: 'To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.',
      description2: 'We believe that technology should be accessible, intuitive, and transformative—helping organizations of all sizes achieve their goals and exceed their expectations.',
      description3: 'Through collaboration, creativity, and technical excellence, we\'re building the digital future, one project at a time.',
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
  aboutPage: {
    title: '关于我们',
    body: '这是模板的关于我们占位页面。',
    hero: {
      title: '关于我们',
      subtitle: '用尖端技术和创新解决方案构建数字体验的未来',
      description: '我们是一个充满激情的开发者、设计师和创新者团队，致力于创建卓越的Web应用程序，改变人们与技术互动的方式。我们的使命是提供无缝、可扩展和美观的解决方案，赋能企业并让用户满意。',
    },
    team: {
      title: '认识我们的团队',
      subtitle: '成功背后的杰出人才，共同努力实现您的愿景',
    },
    story: {
      journey: {
        title: '我们的旅程开始',
        description1: '成立于2020年，我们从一个拥有大梦想的小团队开始：彻底改变企业处理数字化转型的方式。从深夜编码会议开始，已经发展成为为全球客户服务的蓬勃发展的公司。',
        description2: '我们的第一个项目是一个简单的电子商务平台，但它教会了我们关于用户体验、可扩展性和干净、可维护代码重要性的宝贵经验。从那时起，我们从未回头。',
        button: '了解更多',
      },
      innovation: {
        title: '创新是我们的核心',
        description1: '创新对我们来说不仅仅是一个流行词——它是我们所做一切的基础。我们不断探索新兴技术，尝试新方法，推动Web开发可能性的边界。',
        description2: '从实施尖端AI功能到为数百万用户优化性能，我们一直在寻找方法使我们的解决方案更快、更智能、更直观。',
        button: '探索我们的工作',
      },
    },
    mission: {
      title: '我们的使命',
      description1: '通过创新的数字解决方案赋能企业，推动增长，增强用户体验，在不断发展的数字环境中创造持久价值。',
      description2: '我们相信技术应该是可访问的、直观的和变革性的——帮助各种规模的组织实现目标并超越期望。',
      description3: '通过协作、创造力和技术卓越，我们正在构建数字未来，一次一个项目。',
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


