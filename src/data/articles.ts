export interface Article {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  featured?: boolean;
  content?: string;
}

export const categories = [
  { id: 'all', name: 'Home', color: '#007AFF' },
  { id: 'ai', name: 'AI & Machine Learning', color: '#7F00FF' },
  { id: 'web3', name: 'Web3 & Blockchain', color: '#00BFFF' },
  { id: 'cybersecurity', name: 'Cybersecurity', color: '#FF3B30' },
  { id: 'cloud', name: 'Cloud Computing', color: '#34C759' },
  { id: 'mobile', name: 'Mobile Technology', color: '#FF9500' },
  { id: 'iot', name: 'IoT & Hardware', color: '#AF52DE' },
  { id: 'startups', name: 'Startups & Funding', color: '#FF6B6B' },
];

export const articles: Article[] = [
  {
    id: '1',
    title: 'The Future of Generative AI: How Neural Networks Are Reshaping Creative Industries',
    excerpt: 'Exploring the latest breakthroughs in large language models and their impact on content creation, design, and software development.',
    category: 'ai',
    author: 'Sarah Chen',
    date: 'Oct 10, 2025',
    image: 'https://images.unsplash.com/photo-1652127691413-6cb8c0304aba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBjaXJjdWl0fGVufDF8fHx8MTc1OTk5NTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '8 min',
    featured: true,
    content: `
      <p>In today's rapidly evolving technological landscape, the intersection of artificial intelligence and creative industries represents one of the most fascinating developments of our time. As neural networks become increasingly sophisticated, they're not just changing how we process information—they're fundamentally reshaping how we create, design, and innovate.</p>
      
      <h3>The Creative Revolution</h3>
      <p>The emergence of generative AI models has democratized creative processes that were once the exclusive domain of highly skilled professionals. From generating stunning visual artwork to composing music and writing code, AI is becoming an indispensable creative partner rather than a replacement for human creativity.</p>
      
      <p>This technological shift is particularly evident in industries such as graphic design, content creation, and software development. Companies are increasingly integrating AI-powered tools into their workflows, resulting in unprecedented levels of productivity and creative output.</p>
      
      <h3>Impact on Traditional Workflows</h3>
      <p>The integration of AI into creative workflows isn't just about automation—it's about augmentation. Professional designers now use AI to generate initial concepts, explore variations, and overcome creative blocks. Writers employ AI assistants to brainstorm ideas, refine prose, and even help with research and fact-checking.</p>
      
      <blockquote class="alert alert-info">
        <h5>Key Insight</h5>
        <p>The most successful implementations of AI in creative industries focus on human-AI collaboration rather than replacement, leading to enhanced creativity and productivity.</p>
      </blockquote>
      
      <h3>Looking Ahead</h3>
      <p>As we move forward, the relationship between AI and human creativity will continue to evolve. The challenge lies not in competing with AI, but in learning to work alongside it effectively. The future belongs to those who can harness the power of AI while maintaining the uniquely human elements of creativity, emotion, and cultural understanding.</p>
      
      <p>The next generation of creative professionals will be those who understand both the capabilities and limitations of AI, using these tools to push the boundaries of what's possible while preserving the human touch that makes creative work truly meaningful.</p>
    `
  },
  {
    id: '2',
    title: 'Decentralized Finance Hits $200 Billion: The Web3 Revolution Continues',
    excerpt: 'DeFi protocols reach new milestone as institutional adoption accelerates and regulatory frameworks evolve globally.',
    category: 'web3',
    author: 'Marcus Rodriguez',
    date: 'Nov 2, 2025',
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '6 min',
    content: `
      <p>The decentralized finance (DeFi) ecosystem has achieved a historic milestone, with total value locked (TVL) surpassing $200 billion for the first time. This landmark represents a 340% increase from the previous year and signals growing institutional confidence in Web3 financial infrastructure.</p>
      
      <h3>Institutional Adoption Accelerates</h3>
      <p>Major financial institutions including JPMorgan Chase, Goldman Sachs, and Deutsche Bank have launched dedicated DeFi research divisions and pilot programs. BlackRock's recent announcement of a $2.5 billion DeFi investment fund has further legitimized the space.</p>
      
      <blockquote class="alert alert-info">
        <h5>Market Impact</h5>
        <p>Ethereum-based DeFi protocols now process over $50 billion in monthly transaction volume, rivaling traditional payment networks like Visa in certain regions.</p>
      </blockquote>
      
      <h3>Regulatory Clarity Emerges</h3>
      <p>The European Union's Markets in Crypto-Assets (MiCA) regulation and similar frameworks in Singapore and Japan have provided much-needed regulatory clarity. This has enabled traditional financial institutions to engage with DeFi protocols while maintaining compliance.</p>
      
      <h3>Innovation Continues</h3>
      <p>New developments in cross-chain interoperability, automated yield farming, and decentralized derivatives are driving the next wave of DeFi innovation. Layer 2 solutions have reduced transaction costs by up to 95%, making DeFi accessible to retail users worldwide.</p>
    `
  },
  {
    id: '3',
    title: 'Zero-Day Vulnerability Discovered in Major Cloud Infrastructure',
    excerpt: 'Security researchers reveal critical flaw affecting millions of enterprise deployments. Immediate patches recommended.',
    category: 'cybersecurity',
    author: 'Alex Kim',
    date: 'Nov 1, 2025',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '5 min',
    content: `
      <p>Cybersecurity researchers at ThreatWatch Labs have disclosed a critical zero-day vulnerability (CVE-2025-9847) affecting major cloud infrastructure providers. The flaw, dubbed "CloudGate," potentially impacts over 15 million enterprise deployments worldwide.</p>
      
      <h3>Technical Details</h3>
      <p>The vulnerability exists in a widely-used container orchestration component that allows remote code execution with elevated privileges. Attackers could potentially access sensitive data, deploy malicious workloads, or disrupt critical services.</p>
      
      <div class="alert alert-danger">
        <h5>Immediate Action Required</h5>
        <p><strong>CVSS Score: 9.8 (Critical)</strong><br>
        All organizations using affected cloud services should apply patches immediately and review access logs for suspicious activity.</p>
      </div>
      
      <h3>Industry Response</h3>
      <p>Major cloud providers including AWS, Microsoft Azure, and Google Cloud have released emergency patches. The vulnerability was responsibly disclosed following a 90-day coordinated disclosure process.</p>
      
      <h3>Prevention Strategies</h3>
      <p>Security experts recommend implementing zero-trust architecture, regular security audits, and automated patch management systems to prevent similar vulnerabilities from being exploited.</p>
    `
  },
  {
    id: '4',
    title: 'Edge Computing Transforms Data Processing: AWS and Azure Announce New Services',
    excerpt: 'Major cloud providers unveil edge computing solutions promising sub-millisecond latency for IoT applications.',
    category: 'cloud',
    author: 'Dr. Emily Watson',
    date: 'Oct 31, 2025',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '7 min',
    content: `
      <p>Amazon Web Services and Microsoft Azure have simultaneously announced revolutionary edge computing platforms that bring cloud capabilities directly to the network edge, promising to transform how IoT applications process and respond to data.</p>
      
      <h3>AWS Wavelength 2.0</h3>
      <p>Amazon's next-generation edge platform integrates with 5G networks to provide computational resources within telecommunications infrastructure. Early adopters report latency reductions of up to 95% for real-time applications.</p>
      
      <h3>Azure Edge Zones Plus</h3>
      <p>Microsoft's enhanced edge computing service extends Azure's full stack to the network edge, enabling complex AI inference and real-time analytics at the point of data generation.</p>
      
      <blockquote class="alert alert-success">
        <h5>Performance Breakthrough</h5>
        <p>Combined deployments achieve sub-millisecond latency for critical applications like autonomous vehicles, industrial automation, and augmented reality experiences.</p>
      </blockquote>
      
      <h3>Market Impact</h3>
      <p>The global edge computing market is projected to reach $87 billion by 2030. These new services enable previously impossible applications in manufacturing, healthcare, and smart cities.</p>
      
      <h3>Enterprise Adoption</h3>
      <p>Major manufacturers including Tesla, Siemens, and General Electric are already deploying edge computing solutions for predictive maintenance, quality control, and real-time optimization.</p>
    `
  },
  {
    id: '5',
    title: 'Foldable Phones Finally Go Mainstream: Sales Surge 300%',
    excerpt: 'New generation of foldable smartphones sees unprecedented adoption as prices drop and durability improves significantly.',
    category: 'mobile',
    author: 'James Park',
    date: 'Oct 30, 2025',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '4 min',
    content: `
      <p>The foldable smartphone market has reached a tipping point, with Q3 2025 sales figures showing a staggering 300% increase compared to the same period last year. Samsung, Google, and OnePlus lead the charge with improved durability and competitive pricing.</p>
      
      <h3>Technology Breakthrough</h3>
      <p>New ultra-thin glass (UTG) technology and advanced hinge mechanisms have solved the major durability concerns that plagued earlier foldable devices. Current models can withstand over 400,000 fold cycles—equivalent to 10+ years of typical usage.</p>
      
      <h3>Price Accessibility</h3>
      <p>Entry-level foldable phones now start at $899, down from the $2000+ premium of early models. This price reduction has made the technology accessible to mainstream consumers.</p>
      
      <div class="alert alert-info">
        <h5>Market Leaders</h5>
        <p><strong>Samsung Galaxy Z Fold 6:</strong> 35% market share<br>
        <strong>Google Pixel Fold 2:</strong> 28% market share<br>
        <strong>OnePlus Open 2:</strong> 22% market share</p>
      </div>
      
      <h3>Consumer Benefits</h3>
      <p>Users report increased productivity with larger screen real estate for multitasking, while the compact folded form factor maintains portability. Battery life improvements and optimized software experiences have addressed previous concerns.</p>
    `
  },
  {
    id: '6',
    title: 'Smart Cities Deploy AI-Powered IoT Networks for Climate Monitoring',
    excerpt: 'Urban centers worldwide integrate intelligent sensor networks to track and respond to environmental changes in real-time.',
    category: 'iot',
    author: 'Priya Sharma',
    date: 'Oct 29, 2025',
    image: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '6 min',
    content: `
      <p>Over 50 cities worldwide have deployed comprehensive AI-powered IoT networks for real-time climate monitoring and environmental management. These smart city initiatives are revolutionizing urban sustainability and disaster preparedness.</p>
      
      <h3>Global Implementation</h3>
      <p>Cities including Singapore, Barcelona, Amsterdam, and Toronto have installed thousands of environmental sensors that monitor air quality, temperature, humidity, noise levels, and energy consumption in real-time.</p>
      
      <h3>AI-Driven Insights</h3>
      <p>Machine learning algorithms analyze sensor data to predict weather patterns, optimize energy distribution, and automatically adjust city infrastructure. The systems can predict air quality changes up to 72 hours in advance.</p>
      
      <blockquote class="alert alert-success">
        <h5>Environmental Impact</h5>
        <p>Participating cities report 25% reduction in energy consumption and 30% improvement in air quality response times to pollution events.</p>
      </blockquote>
      
      <h3>Citizen Benefits</h3>
      <p>Real-time data is made available through mobile apps, helping residents make informed decisions about outdoor activities, commuting routes, and energy usage. Emergency response systems can automatically activate during extreme weather events.</p>
      
      <h3>Technology Stack</h3>
      <p>The networks utilize LoRaWAN, 5G, and satellite connectivity for data transmission. Edge computing processes critical data locally, while cloud platforms handle long-term analytics and machine learning model training.</p>
    `
  },
  {
    id: '7',
    title: 'Machine Learning Model Achieves Human-Level Performance in Medical Diagnosis',
    excerpt: 'New AI system demonstrates remarkable accuracy in detecting rare diseases, potentially revolutionizing healthcare.',
    category: 'ai',
    author: 'Dr. Michael Torres',
    date: 'Oct 28, 2025',
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '9 min',
    content: `
      <p>DeepMind's latest medical AI system, MedAssist Pro, has achieved human-level diagnostic accuracy across 2,000+ rare diseases, marking a breakthrough in AI-assisted healthcare. The system was trained on over 50 million medical cases from leading hospitals worldwide.</p>
      
      <h3>Diagnostic Breakthrough</h3>
      <p>In clinical trials across 15 countries, MedAssist Pro matched or exceeded specialist physician accuracy in 94% of test cases. For rare diseases where specialist expertise is limited, the AI showed 40% better diagnostic accuracy than general practitioners.</p>
      
      <h3>Clinical Implementation</h3>
      <p>Mayo Clinic, Johns Hopkins, and NHS hospitals have begun pilot programs integrating the AI system into their diagnostic workflows. The system provides detailed explanations for its diagnoses, building physician trust and enabling better patient communication.</p>
      
      <div class="alert alert-info">
        <h5>Key Capabilities</h5>
        <ul>
          <li>Analysis of medical imaging (X-rays, MRIs, CT scans)</li>
          <li>Interpretation of laboratory results and genetic data</li>
          <li>Pattern recognition in patient symptoms and history</li>
          <li>Risk assessment and treatment recommendations</li>
        </ul>
      </div>
      
      <h3>Ethical Considerations</h3>
      <p>The system is designed as an assistant tool, not a replacement for physicians. All diagnoses require human physician review and approval. Privacy protection and bias mitigation have been core design principles.</p>
      
      <h3>Global Healthcare Impact</h3>
      <p>The technology could be particularly transformative in underserved regions where specialist physicians are scarce. Telemedicine platforms are already integrating the AI to provide expert-level diagnostic support worldwide.</p>
    `
  },
  {
    id: '8',
    title: 'NFT Gaming Ecosystem Reaches 50 Million Active Users',
    excerpt: 'Play-to-earn games and digital collectibles create new economic opportunities as Web3 gaming matures.',
    category: 'web3',
    author: 'Lisa Anderson',
    date: 'Oct 27, 2025',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '5 min',
    content: `
      <p>The Web3 gaming sector has achieved a major milestone with 50 million active users participating in NFT-based games and virtual economies. Leading platforms report daily transaction volumes exceeding $500 million.</p>
      
      <h3>Market Leaders</h3>
      <p>Axie Infinity, The Sandbox, and Decentraland continue to dominate the space, while newcomers like Illuvium and Star Atlas are gaining significant traction with AAA-quality gaming experiences.</p>
      
      <h3>Economic Impact</h3>
      <p>Players in developing countries are earning substantial incomes through play-to-earn mechanics. In the Philippines and Venezuela, some players earn more from gaming than traditional employment.</p>
      
      <blockquote class="alert alert-warning">
        <h5>Revenue Streams</h5>
        <p>Top players earn $2,000-5,000 monthly through NFT trading, tournament prizes, and in-game asset creation. Professional gaming guilds manage teams of players across multiple games.</p>
      </blockquote>
      
      <h3>Technology Evolution</h3>
      <p>New games feature improved graphics, complex gameplay mechanics, and sustainable tokenomics. Layer 2 solutions have reduced transaction costs, making microtransactions viable.</p>
    `
  },
  {
    id: '9',
    title: 'Quantum-Resistant Encryption Standards Approved for Global Implementation',
    excerpt: 'International cybersecurity bodies finalize post-quantum cryptography protocols to protect against future threats.',
    category: 'cybersecurity',
    author: 'David Chang',
    date: 'Oct 6, 2025',
    image: 'https://images.unsplash.com/photo-1630568002650-3ee79302fda5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGF0YXxlbnwxfHx8fDE3NjAwOTUwMDl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '7 min',
  },
  {
    id: '10',
    title: 'Serverless Architecture Dominates Enterprise Cloud Strategy',
    excerpt: 'Survey reveals 78% of companies now prioritize serverless computing for cost efficiency and scalability.',
    category: 'cloud',
    author: 'Rachel Green',
    date: 'Oct 26, 2025',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '6 min',
    content: `
      <p>A comprehensive survey of 2,500 enterprise IT leaders reveals that serverless computing has become the preferred architecture for 78% of organizations, driven by cost savings of up to 70% and improved development velocity.</p>
      
      <h3>Adoption Trends</h3>
      <p>Fortune 500 companies report migrating 60% of their workloads to serverless platforms. AWS Lambda, Azure Functions, and Google Cloud Functions process over 50 billion function invocations daily.</p>
      
      <h3>Cost Benefits</h3>
      <p>Organizations save an average of $2.3 million annually by eliminating server management overhead and paying only for actual compute usage. Startup costs for new applications have dropped by 85%.</p>
      
      <div class="alert alert-success">
        <h5>Performance Improvements</h5>
        <p>Development teams ship features 3x faster with serverless architectures. Time-to-market for new applications has decreased from months to weeks.</p>
      </div>
      
      <h3>Industry Use Cases</h3>
      <p>Financial services use serverless for real-time fraud detection, e-commerce platforms for dynamic pricing, and media companies for content processing and delivery.</p>
      
      <h3>Future Outlook</h3>
      <p>Analysts predict 90% of new cloud applications will use serverless architectures by 2027, with edge computing further expanding serverless capabilities.</p>
    `
  },
  {
    id: '11',
    title: '6G Networks Begin Testing: 100x Faster Than 5G',
    excerpt: 'Next-generation wireless technology promises terabit speeds and opens new possibilities for mobile applications.',
    category: 'mobile',
    author: 'Kevin Zhang',
    date: 'Oct 25, 2025',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '5 min',
    content: `
      <p>Samsung, Nokia, and Ericsson have begun field testing 6G wireless technology in South Korea, Finland, and Sweden, achieving theoretical speeds of 1 terabit per second—100 times faster than current 5G networks.</p>
      
      <h3>Technical Specifications</h3>
      <p>6G networks utilize terahertz frequencies (100 GHz - 3 THz) and advanced beamforming technologies. The networks support up to 10 million connected devices per square kilometer with sub-millisecond latency.</p>
      
      <h3>Revolutionary Applications</h3>
      <p>The technology enables truly immersive holographic communications, real-time brain-computer interfaces, and massive IoT deployments for smart cities and autonomous transportation networks.</p>
      
      <blockquote class="alert alert-info">
        <h5>Speed Comparison</h5>
        <p><strong>4G:</strong> Up to 100 Mbps<br>
        <strong>5G:</strong> Up to 10 Gbps<br>
        <strong>6G:</strong> Up to 1 Tbps (1,000 Gbps)</p>
      </blockquote>
      
      <h3>Industry Timeline</h3>
      <p>Commercial 6G deployment is targeted for 2030, with initial rollouts in major metropolitan areas. The technology requires significant infrastructure investment, estimated at $200 billion globally.</p>
      
      <h3>Global Competition</h3>
      <p>China, South Korea, and the EU have announced competing 6G initiatives with combined research funding exceeding $50 billion over the next five years.</p>
    `
  },
  {
    id: '12',
    title: 'Autonomous Robots Transform Warehouse Operations for Major Retailers',
    excerpt: 'AI-driven robotics systems increase efficiency by 400% while reducing operational costs across supply chains.',
    category: 'iot',
    author: 'Sophia Martinez',
    date: 'Oct 4, 2025',
    image: 'https://images.unsplash.com/photo-1722491237456-0e36655813c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJb1QlMjBzbWFydCUyMGRldmljZXxlbnwxfHx8fDE3NjAwOTUwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '7 min',
  },
  {
    id: '13',
    title: 'EcoTech Startup Raises $50M Series A for Carbon Capture Technology',
    excerpt: 'Climate-focused startup attracts major investors with breakthrough direct air capture solution and seeks engineering talent.',
    category: 'startups',
    author: 'Emma Wilson',
    date: 'Nov 2, 2025',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDA5NTAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '6 min',
    content: `
      <p>San Francisco-based EcoTech Solutions has successfully closed a $50 million Series A funding round, led by prominent climate investment fund GreenVentures, with participation from tech giants Microsoft and Google's venture arms. The startup is developing revolutionary direct air capture technology that promises to remove CO2 from the atmosphere at unprecedented scale and efficiency.</p>
      
      <h3>Revolutionary Technology</h3>
      <p>EcoTech's proprietary carbon capture system uses advanced materials science and AI optimization to reduce energy consumption by 60% compared to existing solutions. The technology can be deployed in modular units, making it accessible to both large industrial facilities and smaller operations.</p>
      
      <h3>Aggressive Hiring Plans</h3>
      <p>With the fresh funding, EcoTech plans to expand its team from 45 to 200 employees over the next 18 months. The company is actively recruiting:</p>
      <ul>
        <li>Senior Software Engineers (AI/ML focus)</li>
        <li>Materials Science Researchers</li>
        <li>Hardware Engineers</li>
        <li>Operations Managers</li>
        <li>Sales and Business Development professionals</li>
      </ul>
      
      <blockquote class="alert alert-success">
        <h5>Career Opportunity</h5>
        <p>EcoTech offers competitive salaries, equity packages, and the chance to work on technology that could help reverse climate change. Remote-first culture with offices in San Francisco and Austin.</p>
      </blockquote>
      
      <h3>Market Impact</h3>
      <p>The global carbon capture market is projected to reach $85 billion by 2030. EcoTech's technology positions them to capture significant market share while making a meaningful environmental impact.</p>
    `
  },
  {
    id: '14',
    title: 'HealthAI Startup Seeks $25M Funding for Revolutionary Diagnostic Platform',
    excerpt: 'Medical AI company developing early disease detection system looks for Series A investors and top-tier machine learning talent.',
    category: 'startups',
    author: 'Dr. Michael Chen',
    date: 'Nov 1, 2025',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAwOTUwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '5 min',
  },
  {
    id: '15',
    title: 'Fintech Unicorn Stripe Rival Emerges: PayFlow Secures $100M Series B',
    excerpt: 'Next-generation payment processing startup challenges industry leaders while building world-class engineering team.',
    category: 'startups',
    author: 'Jennifer Park',
    date: 'Oct 31, 2025',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwb2ZmaWNlfGVufDF8fHx8MTc2MDA5NTAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '7 min',
  },
  {
    id: '16',
    title: 'Y Combinator Demo Day: 15 Startups That Caught Investor Attention',
    excerpt: 'From quantum computing to vertical farming, this batch showcases breakthrough innovations seeking seed funding and founding teams.',
    category: 'startups',
    author: 'Alex Rodriguez',
    date: 'Oct 30, 2025',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwcGl0Y2h8ZW58MXx8fHwxNzYwMDk1MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '9 min',
  },
  {
    id: '17',
    title: 'EdTech Startup Revolutionizing Remote Learning Seeks CTO and Lead Developers',
    excerpt: 'Virtual reality education platform targeting underserved communities raises pre-seed and builds technical leadership team.',
    category: 'startups',
    author: 'Sarah Kim',
    date: 'Oct 29, 2025',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNofGVufDF8fHx8MTc2MDA5NTAxMHww&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '6 min',
  },
  {
    id: '18',
    title: 'Robotics Startup Founder Shares Journey from Garage to $200M Valuation',
    excerpt: 'Inspiring story of how three MIT graduates built autonomous delivery robots while bootstrapping and finding product-market fit.',
    category: 'startups',
    author: 'David Chang',
    date: 'Oct 28, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2JvdGljcyUyMHN0YXJ0dXB8ZW58MXx8fHwxNzYwMDk1MDEwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    readTime: '8 min',
  },
  {
    id: '19',
    title: 'Quantum Internet Achieves 1000km Range: China and EU Lead Breakthrough',
    excerpt: 'Scientists successfully demonstrate quantum entanglement over unprecedented distances, bringing global quantum internet closer to reality.',
    category: 'ai',
    author: 'Dr. Lisa Zhang',
    date: 'Nov 2, 2025',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '7 min',
  },
  {
    id: '20',
    title: 'Apple Vision Pro 2 Launches with Mind-Control Interface Technology',
    excerpt: 'Revolutionary brain-computer interface allows users to control AR experiences with thoughts alone, priced at $2,499.',
    category: 'mobile',
    author: 'Kevin Rodriguez',
    date: 'Nov 1, 2025',
    image: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '5 min',
  },
  {
    id: '21',
    title: 'Ethereum 3.0 Testnet Goes Live: 1 Million TPS and Zero Gas Fees',
    excerpt: 'Next-generation Ethereum promises to solve scalability and cost issues while maintaining decentralization and security.',
    category: 'web3',
    author: 'Sarah Chen',
    date: 'Oct 31, 2025',
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '8 min',
  },
  {
    id: '22',
    title: 'Biometric Payment Cards Roll Out Globally: Fingerprint Authentication Embedded',
    excerpt: 'Major banks deploy fingerprint-enabled payment cards eliminating PINs and signatures while enhancing security.',
    category: 'cybersecurity',
    author: 'Emma Wilson',
    date: 'Oct 30, 2025',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '4 min',
  },
  {
    id: '23',
    title: 'AWS Announces Carbon-Negative Data Centers Powered by Fusion Energy',
    excerpt: 'Amazon partners with Commonwealth Fusion to power cloud infrastructure with clean fusion reactors by 2027.',
    category: 'cloud',
    author: 'Dr. Mark Johnson',
    date: 'Oct 29, 2025',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '6 min',
  },
  {
    id: '24',
    title: 'Tesla Bot Army Begins Mass Production: 10,000 Humanoid Robots Monthly',
    excerpt: 'Elon Musk reveals Tesla Bot manufacturing scale-up with robots designed for household and industrial automation.',
    category: 'iot',
    author: 'Alex Thompson',
    date: 'Oct 28, 2025',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    readTime: '7 min',
  },
];

export const trendingArticles = articles.slice(0, 8);
export const editorsPicks = articles.slice(8, 15);