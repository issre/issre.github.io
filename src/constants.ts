import { Award, Conference, HighlightPaper } from './types';

export const AWARDS: Award[] = [
  // Test of Time Awards
  {
    id: 'tot-2025',
    year: 2025,
    type: 'Test of Time',
    title: 'Anomaly Detection of Cloud Application Operations Using Log and Cloud Metric Correlation Analysis',
    authors: ['Mostafa Farshchi', 'Jean-Guy Schneider', 'Ingo Weber', 'John Grundy'],
    venue: 'ISSRE 2015',
    url: 'https://issre.github.io/2025/test_of_time.html',
    paperUrl: 'https://ieeexplore.ieee.org/document/7381796/'
  },
  {
    id: 'tot-2024',
    year: 2024,
    type: 'Test of Time',
    title: 'Predicting Vulnerable Components: Software Metrics vs Text Mining',
    authors: ['James Walden', 'Jeff Stuckman', 'Riccardo Scandariato'],
    venue: 'ISSRE 2014',
    url: 'https://issre.github.io/2024',
    paperUrl: 'https://ieeexplore.ieee.org/document/6982351/'
  },
  {
    id: 'tot-2023',
    year: 2023,
    type: 'Test of Time',
    title: 'Using Machine Learning Techniques to Detect Metamorphic Relations for Programs Without Test Oracles',
    authors: ['Upulee Kanewala', 'James M. Bieman'],
    venue: 'ISSRE 2013',
    url: 'https://issre.github.io/2023',
    paperUrl: 'https://ieeexplore.ieee.org/document/6698899/'
  },
  {
    id: 'tot-2022-w',
    year: 2022,
    type: 'Test of Time',
    title: 'An Empirical Study of Bugs in Machine Learning Systems',
    authors: ['Ferdian Thung', 'Shaowei Wang', 'David Lo', 'Lingxiao Jiang'],
    venue: 'ISSRE 2012',
    url: 'https://issre2022.github.io',
    paperUrl: 'https://ieeexplore.ieee.org/document/6405375/'
  },

  // Best Research Paper Awards
  {
    id: 'bp-2025-w',
    year: 2025,
    type: 'Best Paper',
    title: 'Understanding Recommendation System Robustness Against Silent Data Corruption: An Empirical Study',
    authors: ['Dongning Ma', 'Xun Jiao', 'Fred Lin', 'Daniel Moore', 'Sriram Sankar'],
    url: 'https://issre.github.io/2025/award_best_research.html',
    paperUrl: 'https://ieeexplore.ieee.org/document/11229674/',
    track: 'Research'
  },
  {
    id: 'bp-2025-industry',
    year: 2025,
    type: 'Best Paper',
    title: 'V-Models: LLMs for the Development Lifecycle of Safety-Critical Systems',
    authors: ['Amel Jelidi', 'Amer Kajmakovic', 'Alexander Palmisano', 'Franz Sentobe', 'Kay Römer'],
    url: 'https://www.pro2future.at/award-winning-research-at-issre-2025/',
    paperUrl: 'https://ieeexplore.ieee.org/document/11262339',
    track: 'Industry'
  },
  {
    id: 'bp-2024-w',
    year: 2024,
    type: 'Best Paper',
    title: 'Exploring Hierarchical Patterns for Alert Aggregation in Supercomputers',
    authors: ['Yuan Yuan', 'Tongqing Zhou', 'Xiuhong Tan', 'Yongqian Sun', 'Yuqi Li', 'Zhixing Li', 'Zhiping Cai', 'Tiejun Li'],
    url: 'https://issre.github.io/2024',
    paperUrl: 'https://ieeexplore.ieee.org/document/10771315/',
    track: 'Research'
  },
  {
    id: 'bp-2024-industry',
    year: 2024,
    type: 'Best Paper',
    title: 'Auto-PIP: Real-time Identification of Critical Performance Inflection Points in Software Stress Testing',
    authors: ['Shenglin Zhang', 'Xiao Xiong', 'Mengyao Li', 'Yongqian Sun', 'Yongxin Zhao', 'Xia Chen', 'Bowen Deng', 'Dan Pei'],
    url: 'https://issre.github.io/2024/award_best_industry.html',
    paperUrl: 'https://ieeexplore.ieee.org/document/10771391/',
    track: 'Industry'
  },
  {
    id: 'bp-2023',
    year: 2023,
    type: 'Best Paper',
    title: 'AutoKAD: Empowering KPI Anomaly Detection with Label-Free Deployment',
    authors: ['Zhaoyang Yu', 'Changhua Pei', 'Shenglin Zhang', 'Xidao Wen', 'Jianhui Li', 'Gaogang Xie', 'Dan Pei'],
    url: 'https://www.cs.tsinghua.edu.cn/csen/info/1310/4359.htm',
    paperUrl: 'https://ieeexplore.ieee.org/document/10301277/',
    track: 'Research'
  },
  {
    id: 'bp-2022-research',
    year: 2022,
    type: 'Best Paper',
    title: 'Share or Not Share? Towards the Practicability of Deep Models for Unsupervised Anomaly Detection in Modern Online Systems',
    authors: ['Zilong He', 'Pengfei Chen', 'Tao Huang'],
    venue: 'ISSRE 2022',
    url: 'https://issre2022.github.io',
    paperUrl: 'https://ieeexplore.ieee.org/document/9978953/',
    track: 'Research'
  },
  {
    id: 'bp-2022-industry',
    year: 2022,
    type: 'Best Paper',
    title: 'An unsupervised approach to discover filtering rules from diagnostic logs',
    authors: ['Marcello Cinque', 'Raffaele Della Corte', 'Giorgio Farina', 'Stefano Rosiello'],
    venue: 'ISSRE 2022',
    url: 'https://issre2022.github.io',
    paperUrl: 'https://ieeexplore.ieee.org/document/9985045/',
    track: 'Industry'
  },
  {
    id: 'bp-2021-research',
    year: 2021,
    type: 'Best Paper',
    title: 'How Long Will it Take to Mitigate this Incident for Online Service Systems?',
    authors: [
      'Weijing Wang',
      'Junjie Chen',
      'Lin Yang',
      'Hongyu Zhang',
      'Pu Zhao',
      'Bo Qiao',
      'Yu Kang',
      'Qingwei Lin',
      'Saravanakumar Rajmohan',
      'Feng Gao',
      'Zhangwei Xu',
      'Yingnong Dang',
      'Dongmei Zhang'
    ],
    url: 'https://2021.issre.net/BestPapersAward.html',
    paperUrl: 'https://ieeexplore.ieee.org/document/9700215/',
    track: 'Research'
  },
  {
    id: 'bp-2021-industry',
    year: 2021,
    type: 'Best Paper',
    title: 'MultiCode: A Unified Code Analysis Framework based on Multi-type and Multi-granularity Semantic Learning',
    authors: [
      'Xu Duan',
      'Jingzheng Wu',
      'Mengnan Du',
      'Tianyue Luo',
      'Mutian Yang',
      'Yanjun Wu'
    ],
    url: 'https://2021.issre.net/BestPapersAward.html',
    paperUrl: 'https://ieeexplore.ieee.org/document/9700202/',
    track: 'Industry'
  },
  {
    id: 'bp-2015-1',
    year: 2015,
    type: 'Best Paper',
    title: 'AtomChase: Directed Search towards Atomicity Violations',
    authors: ['Mahdi Eslamimehr', 'Mohsen Lesani'],
    paperUrl: 'https://ieeexplore.ieee.org/document/7381795/',
    track: 'Research'
  },
  {
    id: 'bp-2015-2',
    year: 2015,
    type: 'Best Paper',
    title: 'Anomaly Detection of Cloud Application Operations Using Log and Cloud Metric Correlation Analysis',
    authors: ['Mostafa Farshchi', 'Jean-Guy Schneider', 'Ingo Weber', 'John Grundy'],
    paperUrl: 'https://ieeexplore.ieee.org/document/7381796/',
    track: 'Research'
  },
  {
    id: 'bp-2014-research',
    year: 2014,
    type: 'Best Paper',
    title: 'Predicting Vulnerable Components: Software Metrics vs Text Mining',
    authors: ['James Walden', 'Jeff Stuckman', 'Riccardo Scandariato'],
    paperUrl: 'https://ieeexplore.ieee.org/document/6982351/',
    track: 'Research'
  },
  {
    id: 'bp-2014-industry',
    year: 2014,
    type: 'Best Paper',
    title: 'NAPOLI FUTURA: Novel Approaches for Protecting Critical Infrastructures from Cyber Attacks',
    authors: ['Marcello Cinque', 'Antonio Pecchia', 'Raffaele Della Corte', 'Agostino Savignano', 'Stefano Avallone', 'Antonio Marotta', 'Gabriella Carrozza'],
    paperUrl: 'https://ieeexplore.ieee.org/document/6983796/',
    track: 'Industry'
  },
  {
    id: 'bp-2016-research-1',
    year: 2016,
    type: 'Best Paper',
    title: 'Experience Report: Automated System Level Regression Test Prioritization using multiple factors',
    authors: ['Per Erik Strandberg', 'Daniel Sundmark', 'Wasif Afzal', 'Thomas J. Ostrand', 'Elaine J. Weyuker'],
    url: 'https://2016.issre.net',
    paperUrl: 'https://ieeexplore.ieee.org/document/7774503/',
    track: 'Research'
  },
  {
    id: 'bp-2016-research-2',
    year: 2016,
    type: 'Best Paper',
    title: 'Frequent Subgraph based Familial Classification of Android Malware',
    authors: ['Ming Fan', 'Jun Liu', 'Xiapu Luo', 'Kai Chen', 'Tianyi Chen', 'Zhenzhou Tian', 'Xiaodong Zhang', 'Qinghua Zheng', 'Ting Liu'],
    url: 'https://2016.issre.net',
    paperUrl: 'https://ieeexplore.ieee.org/document/7774504/',
    track: 'Research'
  },
  {
    id: 'bp-2016-industry',
    year: 2016,
    type: 'Best Paper',
    title: 'A Platform for Automating Chaos Experiments',
    authors: ['Ali Basiri', 'Aaron Blohowiak', 'Lorin Hochstein', 'Casey Rosenthal'],
    url: 'https://2016.issre.net',
    paperUrl: 'https://ieeexplore.ieee.org/document/7789366/',
    track: 'Industry'
  },
  {
    id: 'bp-2017-research',
    year: 2017,
    type: 'Best Paper',
    title: 'Chizpurfle: A Gray-Box Android Fuzzer for Vendor Service Customizations',
    authors: ['Antonio Ken Iannillo', 'Roberto Natella', 'Domenico Cotroneo', 'Cristina Nita-Rotaru'],
    url: 'https://2017.issre.net',
    paperUrl: 'https://ieeexplore.ieee.org/document/8109068/',
    track: 'Research'
  },
  {
    id: 'bp-2017-industry',
    year: 2017,
    type: 'Best Paper',
    title: 'An Overview of Numalis Software Suite for Reliable Numerical Computation',
    authors: ['Arnault Ioualalen', 'Matthieu Martel', 'Nicolas Normand'],
    url: 'https://2017.issre.net',
    paperUrl: 'https://ieeexplore.ieee.org/document/8109235/',
    track: 'Industry'
  },
  {
    id: 'bp-2018-research',
    year: 2018,
    type: 'Best Paper',
    title: 'Robust and Rapid Adaption for Concept Drift in Software System Anomaly Detection',
    authors: ['Minghua Ma', 'Shenglin Zhang', 'Dan Pei', 'Xin Huang', 'Hongwei Dai'],
    url: 'https://nkcs.iops.ai/publications/',
    paperUrl: 'https://ieeexplore.ieee.org/document/8539065/',
    track: 'Research'
  },
  {
    id: 'bp-2018-industry',
    year: 2018,
    type: 'Best Paper',
    title: 'A Smart Context-aware Program Assistant based on Dynamic Programming Event Modeling',
    authors: ['Xuejiao Zhao', 'Hongwei Li', 'Yutian Tang', 'Dongjing Gao', 'Lingfeng Bao', 'Ching Hung Lee'],
    url: 'https://chrisyttang.org/assets/awards/issre.pdf',
    paperUrl: 'https://ieeexplore.ieee.org/document/8539158/',
    track: 'Industry'
  },
  {
    id: 'bp-2019-research',
    year: 2019,
    type: 'Best Paper',
    title: 'Charting a Course Through Uncertain Environments: SEA Uses Past Problems to Avoid Future Failures',
    authors: ['Preston Moore', 'Justin Cappos', 'Phyllis Frankl', 'Thomas Wies'],
    url: 'https://ssl.engineering.nyu.edu/papers/moore_crashsim_issre2019.pdf',
    paperUrl: 'https://ieeexplore.ieee.org/document/8987577/',
    track: 'Research'
  },
  {
    id: 'bp-2019-industry',
    year: 2019,
    type: 'Best Paper',
    title: 'Adapting SQuaRE for Quality Assessment of Artificial Intelligence System',
    authors: ['Hiroshi Kuwajima', 'Fuyuki Ishikawa'],
    url: 'https://www.nii.ac.jp/en/news/award/2019/1030-3.html',
    paperUrl: 'https://ieeexplore.ieee.org/document/8990311/',
    track: 'Industry'
  },
  {
    id: 'bp-2020-research',
    year: 2020,
    type: 'Best Paper',
    title: 'AV-FUZZER: Finding safety violations in autonomous driving systems',
    authors: [
      'Guanpeng Li',
      'Yiran Li',
      'Saurabh Jha',
      'Timothy Tsai',
      'Michael Sullivan',
      'Siva Kumar Sastry Hari',
      'Zbigniew Kalbarczyk',
      'Ravishankar Iyer'
    ],
    url: 'https://2020.issre.net/news-archive.html',
    paperUrl: 'https://ieeexplore.ieee.org/document/9251068/',
    track: 'Research'
  },
  {
    id: 'bp-2020-industry',
    year: 2020,
    type: 'Best Paper',
    title: 'BP-IDS: Using business process specification to leverage intrusion detection in critical infrastructures',
    authors: [
      'João Lima',
      'Filipe Apolinário',
      'Nelson Escravana',
      'Carlos Ribeiro'
    ],
    url: 'https://web.tecnico.ulisboa.pt/filipe.apolinario/papers/2020_issre_BPA_industry.pdf',
    paperUrl: 'https://ieeexplore.ieee.org/document/9307723/',
    track: 'Industry'
  }
];

export const CONFERENCES: Conference[] = [
  {
    year: 2027,
    location: 'Macau',
    dates: 'TBD',
  },
  {
    year: 2026,
    location: 'Paphos, Cyprus',
    dates: 'October 26-29, 2026',
    websiteUrl: 'https://cyprusconferences.org/issre2026/'
  },
  {
    year: 2025,
    location: 'São Paulo, Brazil',
    dates: 'October 27-30, 2025',
    websiteUrl: 'https://issre.github.io/2025/',
    proceedingsUrl: 'https://www.computer.org/csdl/proceedings/issre/2025/2bDyEwkBbUI'
  },
  {
    year: 2024,
    location: 'Tsukuba, Japan',
    dates: 'October 28-31, 2024',
    websiteUrl: 'https://issre.github.io/2024/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/10771156/proceeding'
  },
  {
    year: 2023,
    location: 'Florence, Italy',
    dates: 'October 9-12, 2023',
    websiteUrl: 'https://issre.github.io/2023/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/10299935/proceeding'
  },
  {
    year: 2022,
    location: 'Charlotte, NC, USA',
    dates: 'October 31 - November 3, 2022',
    websiteUrl: 'https://issre2022.github.io/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/9978763/proceeding'
  },
  {
    year: 2021,
    location: 'Wuhan, China (Virtual)',
    dates: 'October 25-28, 2021',
    websiteUrl: 'https://2021.issre.net/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/9700160/proceeding'
  },
  {
    year: 2020,
    location: 'Coimbra, Portugal (Virtual)',
    dates: 'October 12-15, 2020',
    websiteUrl: 'https://2020.issre.net/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/9250925/proceeding'
  },
  {
    year: 2019,
    location: 'Berlin, Germany',
    dates: 'October 28-31, 2019',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/8967509/proceeding'
  },
  {
    year: 2018,
    location: 'Memphis, TN, USA',
    dates: 'October 15-18, 2018',
    websiteUrl: 'https://2018.issre.net/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/8536838/proceeding'
  },
  {
    year: 2017,
    location: 'Toulouse, France',
    dates: 'October 23-26, 2017',
    websiteUrl: 'https://2017.issre.net/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/8108705/proceeding'
  },
  {
    year: 2016,
    location: 'Ottawa, ON, Canada',
    dates: 'October 23-27, 2016',
    websiteUrl: 'https://2016.issre.net/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/7774240/proceeding'
  },
  {
    year: 2015,
    location: 'Gaithersburg, MD, USA',
    dates: 'November 2-5, 2015',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/7374093/proceeding'
  },
  {
    year: 2014,
    location: 'Naples, Italy',
    dates: 'November 3-6, 2014',
    websiteUrl: 'https://2014.issre.net/',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/6982003/proceeding'
  },
  {
    year: 2013,
    location: 'Pasadena, CA, USA',
    dates: 'November 4-7, 2013',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/6689494/proceeding'
  },
  {
    year: 2012,
    location: 'Dallas, TX, USA',
    dates: 'November 5-8, 2012',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/6403947/proceeding'
  },
  {
    year: 2011,
    location: 'Hiroshima, Japan',
    dates: 'November 29 - December 2, 2011',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/6132471/proceeding'
  },
  {
    year: 2010,
    location: 'San Jose, CA, USA',
    dates: 'November 1-4, 2010',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/5629483/proceeding'
  },
  {
    year: 2009,
    location: 'Mysuru, Karnataka, India',
    dates: 'November 16-19, 2009',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/5361941/proceeding'
  },
  {
    year: 2008,
    location: 'Seattle/Redmond, WA, USA',
    dates: 'November 11-14, 2008',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/4700288/proceeding'
  },
  {
    year: 2007,
    location: 'Trollhättan, Sweden',
    dates: 'November 5-9, 2007',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/4402180/proceeding'
  },
  {
    year: 2006,
    location: 'Raleigh, NC, USA',
    dates: 'November 7-10, 2006',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/4021951/proceeding'
  },
  {
    year: 2005,
    location: 'Chicago, IL, USA',
    dates: 'November 8-11, 2005',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/10370/proceeding'
  },
  {
    year: 2004,
    location: 'Saint-Malo, France',
    dates: 'November 2-5, 2004',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/9499/proceeding'
  },
  {
    year: 2003,
    location: 'Denver, CO, USA',
    dates: 'November 17-20, 2003',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/8855/proceeding'
  },
  {
    year: 2002,
    location: 'Annapolis, MD, USA',
    dates: 'November 12-15, 2002',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/8378/proceeding'
  },
  {
    year: 2001,
    location: 'Hong Kong, China',
    dates: 'November 27-30, 2001',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/7759/proceeding'
  },
  {
    year: 2000,
    location: 'San Jose, CA, USA',
    dates: 'October 8-11, 2000',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/7109/proceeding'
  },
  {
    year: 1999,
    location: 'Boca Raton, FL, USA',
    dates: 'November 1-4, 1999',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/6563/proceeding'
  },
  {
    year: 1998,
    location: 'Paderborn, Germany',
    dates: 'November 4-7, 1998',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/5926/proceeding'
  },
  {
    year: 1997,
    location: 'Albuquerque, NM, USA',
    dates: 'November 2-5, 1997',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/4993/proceeding'
  },
  {
    year: 1996,
    location: 'White Plains, NY, USA',
    dates: 'October 30 - November 2, 1996',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/4142/proceeding'
  },
  {
    year: 1995,
    location: 'Toulouse, France',
    dates: 'October 24-27, 1995',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/3555/proceeding'
  },
  {
    year: 1994,
    location: 'Monterey, CA, USA',
    dates: 'November 6-9, 1994',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/1008/proceeding'
  },
  {
    year: 1993,
    location: 'Denver, CO, USA',
    dates: 'November 3-6, 1993',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/4910/proceeding'
  },
  {
    year: 1992,
    location: 'Research Triangle Park, NC, USA',
    dates: 'October 7-10, 1992',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/434/proceeding'
  },
  {
    year: 1991,
    location: 'Austin, TX, USA',
    dates: 'May 17-18, 1991',
    proceedingsUrl: 'https://ieeexplore.ieee.org/xpl/conhome/336/proceeding'
  }
];

export const HIGHLIGHT_PAPERS: HighlightPaper[] = [
  // Software Reliability Analysis
  {
    id: 'hl-1',
    title: 'The operational profile in software reliability engineering: an overview.',
    authors: ['Musa, John D.'],
    year: 1992,
    venue: 'ISSRE 1992',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/285850'
  },
  {
    id: 'hl-2',
    title: 'Adjusting measured field failure intensity for operational profile variation.',
    authors: ['Musa, John D.'],
    year: 1994,
    venue: 'ISSRE 1994',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/341398'
  },
  {
    id: 'hl-3',
    title: 'Assessment of a sampling method for measuring safety-critical software reliability.',
    authors: ['Bastani, Farokh', 'Alberto Pasquini'],
    year: 1994,
    venue: 'ISSRE 1994',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/341358'
  },
  {
    id: 'hl-4',
    title: 'Scenario-based reliability analysis of component-based software.',
    authors: ['Yacoub, Sherif M.', 'Bojan Cukic', 'Hany H. Ammar'],
    year: 1999,
    venue: 'ISSRE 1999',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/809307'
  },
  {
    id: 'hl-5',
    title: 'How to measure the impact of specific development practices on fielded defect density.',
    authors: ['Neufelder, Ann Marie.'],
    year: 2000,
    venue: 'ISSRE 2000',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/885868'
  },
  {
    id: 'hl-6',
    title: 'Test-driven development as a defect-reduction practice.',
    authors: ['Williams, Laurie', 'E. Michael Maximilien', 'Mladen Vouk'],
    year: 2003,
    venue: 'ISSRE 2003',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/1251029/'
  },
  {
    id: 'hl-7',
    title: 'A novel method for early software quality prediction based on support vector machine.',
    authors: ['Xing, Fei', 'Ping Guo', 'Michael R. Lyu'],
    year: 2005,
    venue: 'ISSRE 2005',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/1544736'
  },
  {
    id: 'hl-8',
    title: 'Putting it all together: Using socio-technical networks to predict failures.',
    authors: ['Bird, C.', 'Nagappan, N.', 'Gall, H.', 'Murphy, B.', 'Devanbu, P.'],
    year: 2009,
    venue: 'ISSRE 2009',
    category: 'Software Reliability Analysis',
    url: 'https://ieeexplore.ieee.org/abstract/document/5362091'
  },

  // Failure Analysis and Monitoring
  {
    id: 'hl-9',
    title: 'Experience in software reliability: From data collection to quantitative evaluation.',
    authors: ['Kanoun, Karama', 'Mohamed Kaâniche', 'J-C. Laprie'],
    year: 1993,
    venue: 'ISSRE 1993',
    category: 'Failure Analysis and Monitoring',
    url: 'https://ieeexplore.ieee.org/abstract/document/624293/'
  },
  {
    id: 'hl-10',
    title: 'Analysis of failures in the Tandem NonStop-UX operating system.',
    authors: ['Thakur, A.', 'Iyer, R. K.', 'Young, L.', 'Lee, I.'],
    year: 1995,
    venue: 'ISSRE 1995',
    category: 'Failure Analysis and Monitoring',
    url: 'https://ieeexplore.ieee.org/abstract/document/497642/'
  },
  {
    id: 'hl-11',
    title: 'Failure analysis of jobs in compute clouds: A Google cluster case study.',
    authors: ['Chen, Xin', 'Charng-Da Lu', 'Karthik Pattabiraman'],
    year: 2014,
    venue: 'ISSRE 2014',
    category: 'Failure Analysis and Monitoring',
    url: 'https://ieeexplore.ieee.org/abstract/document/6982624'
  },
  {
    id: 'hl-12',
    title: 'Experience report: System log analysis for anomaly detection.',
    authors: ['He, S.', 'Zhu, J.', 'He, P.', 'Lyu, M. R.'],
    year: 2016,
    venue: 'ISSRE 2016',
    category: 'Failure Analysis and Monitoring',
    url: 'https://ieeexplore.ieee.org/abstract/document/7774521'
  },
  {
    id: 'hl-13',
    title: 'Anomaly detection and root cause localization in virtual network functions.',
    authors: ['Sauvanaud, C.', 'Lazri, K.', 'Kaâniche, M.', 'Kanoun, K.'],
    year: 2016,
    venue: 'ISSRE 2016',
    category: 'Failure Analysis and Monitoring',
    url: 'https://ieeexplore.ieee.org/abstract/document/7774520/'
  },

  // Software Testing
  {
    id: 'hl-14',
    title: 'A coverage analysis tool for the effectiveness of software testing.',
    authors: ['Lyu, Michael R.', 'Joseph R. Horgan', 'Saul London'],
    year: 1993,
    venue: 'ISSRE 1993',
    category: 'Software Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/624271/'
  },
  {
    id: 'hl-15',
    title: 'Effect of test set size and block coverage on the fault detection effectiveness.',
    authors: ['Wong, W. E.', 'Horgan, J. R.', 'London, S.', 'Mathur, A. P.'],
    year: 1994,
    venue: 'ISSRE 1994',
    category: 'Software Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/341379'
  },
  {
    id: 'hl-16',
    title: 'A case study using the round-trip strategy for state-based class testing.',
    authors: ['Antoniol, G.', 'Briand, L. C.', 'Di Penta, M.', 'Labiche, Y.'],
    year: 2002,
    venue: 'ISSRE 2002',
    category: 'Software Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/1173268/'
  },
  {
    id: 'hl-17',
    title: 'Inter-class mutation operators for Java.',
    authors: ['Ma, Yu-Seung', 'Yong-Rae Kwon', 'Jeff Offutt'],
    year: 2002,
    venue: 'ISSRE 2002',
    category: 'Software Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/1173287/'
  },
  {
    id: 'hl-18',
    title: 'A pattern-based approach for GUI modeling and testing.',
    authors: ['Moreira, Rodrigo MLM', 'Ana CR Paiva', 'Atif Memon'],
    year: 2013,
    venue: 'ISSRE 2013',
    category: 'Software Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/6698881'
  },

  // Fault Injection and Robustness Testing
  {
    id: 'hl-19',
    title: 'Improving the software development process using testability research.',
    authors: ['Voas, Jeffrey M.', 'Keith W. Miller'],
    year: 1992,
    venue: 'ISSRE 1992',
    category: 'Fault Injection and Robustness Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/285852'
  },
  {
    id: 'hl-20',
    title: 'Development of a benchmark to measure system robustness: experiences and lessons learned.',
    authors: ['Suh, B. H.', 'Hudak, J.', 'Siewiorek, D.', 'Segall, Z.'],
    year: 1992,
    venue: 'ISSRE 1992',
    category: 'Fault Injection and Robustness Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/285888'
  },
  {
    id: 'hl-21',
    title: 'Antirandom testing: Getting the most out of black-box testing.',
    authors: ['Malaiya, Yashwant K.'],
    year: 1995,
    venue: 'ISSRE 1995',
    category: 'Fault Injection and Robustness Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/497647'
  },
  {
    id: 'hl-22',
    title: 'Error injection aimed at fault removal in fault tolerance mechanisms-criteria for error selection using field data on software faults.',
    authors: ['Christmansson, Jörgen', 'Peter Santhanam'],
    year: 1996,
    venue: 'ISSRE 1996',
    category: 'Fault Injection and Robustness Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/558785'
  },
  {
    id: 'hl-23',
    title: 'Emulation of software faults by educated mutations at machine-code level.',
    authors: ['Duraes, Joao', 'Henrique Madeira'],
    year: 2002,
    venue: 'ISSRE 2002',
    category: 'Fault Injection and Robustness Testing',
    url: 'https://ieeexplore.ieee.org/abstract/document/1173283'
  },

  // Software Aging and Rejuvenation
  {
    id: 'hl-24',
    title: 'Analysis of software rejuvenation using Markov Regenerative Stochastic Petri Net.',
    authors: ['Garg, S.', 'Puliafito, A.', 'Telek, M.', 'Trivedi, K. S.'],
    year: 1995,
    venue: 'ISSRE 1995',
    category: 'Software Aging and Rejuvenation',
    url: 'https://ieeexplore.ieee.org/abstract/document/497656'
  },
  {
    id: 'hl-25',
    title: 'A methodology for detection and estimation of software aging.',
    authors: ['Garg, S.', 'Van Moorsel, A.', 'Vaidyanathan, K.', 'Trivedi, K. S.'],
    year: 1998,
    venue: 'ISSRE 1998',
    category: 'Software Aging and Rejuvenation',
    url: 'https://ieeexplore.ieee.org/abstract/document/730892'
  },
  {
    id: 'hl-26',
    title: 'Software aging analysis of the Linux operating system.',
    authors: ['Cotroneo, D.', 'Natella, R.', 'Pietrantuono, R.', 'Russo, S.'],
    year: 2010,
    venue: 'ISSRE 2010',
    category: 'Software Aging and Rejuvenation',
    url: 'https://ieeexplore.ieee.org/abstract/document/5635122'
  }
];

