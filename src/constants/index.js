export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Projects',
        href: '#projects',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Pictofest',
        desc: 'PictoFest is a vibrant platform that brings creative minds together to celebrate creativity, photography, and visual storytelling. Through events, competitions, and workshops, it encourages participants to explore their passion for visual arts and showcase their talent.',
        subdesc:
            'Built with React.js, Tailwind CSS, Next.js, and Node.js, PictoFest provides a seamless user experience, optimized for performance and interactivity, serving as a digital hub for creators to connect, compete, and inspire in the world of art.',
        href: 'https://www.pictofest.in/',
        texture: '/textures/project/Pictofest.mov',
        logo: '/assets/Project-logo1.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'NextJs',
                path: '/assets/nextjs-icon-svgrepo-com.svg',
            },
            {
                id: 4,
                name: 'NodeJS',
                path: '/assets/nodejs-icon.svg',
            },
            {
                id: 5,
                name: 'Postgres SQL',
                path: '/assets/postgresql-vertical.svg',
            },
        ],
    },
    {
        title: 'PIJET',
        desc: 'PIJET is a platform dedicated to promoting cutting-edge research in engineering and technology. It offers a space for scholars and professionals to publish, share, and explore innovative research through journals and conferences.',
        subdesc:
            'Built with React.js, Tailwind CSS, and Node.js, PIJET ensures a seamless and efficient user experience, optimized for performance. It serves as a digital hub for researchers and professionals to connect, contribute, and advance the field of engineering and technology',
        href: 'https://pijet.org/',
        texture: '/textures/project/PIJET.mov',
        logo: '/assets/Project-logo2.png',
        logoStyle: {
            backgroundColor: '#eae9ee',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'NodeJS',
                path: '/assets/nodejs-icon.svg',
            },
            {
                id: 4,
                name: 'Postgres SQL',
                path: '/assets/postgresql-vertical.svg',
            },
        ],
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [3, -7, 0] : isMobile ? [5.5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 2, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-12, 10, 0] : isTablet ? [-10, 10, 10] : [-24, 11.5, 0],
        targetPosition: isSmall ? [-5, -11, -10] : isMobile ? [-9, -11, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],

    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Framer',
        pos: 'Lead Web Developer',
        duration: '2022 - Present',
        title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
        icon: '/assets/framer.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Figma',
        pos: 'Web Developer',
        duration: '2020 - 2022',
        title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
        icon: '/assets/figma.svg',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Notion',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
        icon: '/assets/notion.svg',
        animation: 'salute',
    },
];