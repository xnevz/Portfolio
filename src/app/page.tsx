import { inria, saira, source_sans } from '@/app/helpers/fonts';
import { Button, Tooltip } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes } from 'react';
import Marquee from 'react-fast-marquee';
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdDownload, MdEmail, MdLocationCity } from 'react-icons/md';
import ClientLink from './components/ClientLink';
import { ClientLottie } from './components/EducationsLottie';
import MyElement from './components/Header/MyElement';
import ReachMe from './components/ReachMe';
import { StackIcon } from './components/StackIcon';
import { TransparentButton } from './components/TransparentButton';
import data from './data/educations.json';
import { dark, gold } from './helpers/constants';
const FaStarHtml = '<svg class="inline" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg" color="#FFC86B" style="color: rgb(255, 200, 107);"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>';

const { projects, skills, educations, testimonials } = {
    skills: [
        {
            name: 'ReactJS',
            icon: 'react.png',
            description: 'Ensured interactivity and smooth user experience on the frontend.'
        },
        {
            name: 'NextJs',
            icon: 'nextjs.png',
            description: 'Managed both backend and frontend, reducing boilerplate code.'
        },
        {
            name: 'NodeJS',
            icon: 'nodejs.png',
            description: 'Provided robust backend functionality for data management.'
        },
        {
            name: 'Tailwind',
            icon: 'tailwind.png',
            description: 'Realized design vision and ensured responsiveness across devices.'
        },
        {
            name: 'PostgreSQL',
            icon: 'pgsql.png',
            description: 'Managed data effectively, ensuring seamless storage and retrieval.'
        },
        {
            name: 'Refine',
            icon: 'refine.png',
            description: 'Implemented backend dashboards for streamlined project management.'
        },
        {
            name: 'C# .NET',
            icon: 'csharp.png',
            description: 'Developed user-friendly administrative tool for file conversion.'
        }
    ],
    projects: [
        {
            title: 'Private Contractor as a Fullstack Developer',
            subtitle: 'Current occupation',
            stack: ['react', 'nodejs', 'postgresql', 'refine', 'figma', 'c++', 'c#'],
            url: 'https://alnurayn.org',
            description: ['Utilizing <span class="text-gold">Refine</span> as the backend dashboard, <span class="text-gold">React</span> for the frontend, and <span class="text-gold">Node.js</span> along with <span class="text-gold">Express.js</span> for the backend, I have created a dynamic and efficient system.',
                'Incorporating <span class="text-gold">C++</span> for search operations has bolstered <span class="text-gold">performance</span>, while leveraging <span class="text-gold">C#</span> has facilitated seamless file conversion for administrative tasks, reducing server load. This approach ensures <span class="text-gold">scalability</span>, <span class="text-gold">speed</span>, and <span class="text-gold">efficiency</span> in data management.',
                'Moreover, this project has sharpened my <span class="text-gold">time management</span>, <span class="text-gold">commitment</span>, and <span class="text-gold">project management</span> skills, refining my ability to allocate resources effectively and select optimal tech stacks for tasks, paving the way for future projects.'],
            image: '/projects/fullstack.jpeg'
        },
        {
            title: 'Independent contractor',
            subtitle: 'At Mostaql',
            url: 'https://mostaql.com/u/abdelkrime2055/reviews',
            stack: ['react', 'nodejs', 'mysql', 'c#', 'php', 'postgresql', 'figma'],
            description: [`I am proud to showcase my extensive experience on Mostaql, where I have successfully completed <span class="text-gold">over 30 projects</span> with a stellar rating of ${FaStarHtml}${FaStarHtml}${FaStarHtml}${FaStarHtml}${FaStarHtml}. These projects encompass a diverse range of challenges and requirements, each delivered with precision and excellence.`,
                'My consistent track record of high ratings reflects my dedication to <span class="text-gold">exceeding client expectations</span> and delivering exceptional results. I look forward to bringing this same level of expertise and commitment to future endeavors.'
            ],
            image: '/projects/freelancer.png'
        },
        {
            title: 'NextJs Project',
            subtitle: 'This Portfolio',
            url: '/',
            stack: ['nextjs', 'figma', 'tailwind'],
            description: ['For my <span class="text-gold">portfolio</span>, I began by crafting a meticulous design in <span class="text-gold">Figma</span>, ensuring a visually appealing and <span class="text-gold">user-friendly</span>, <span class="text-gold">responsive</span> layout. Using <span class="text-gold">Next.js</span> for both <span class="text-gold">backend</span> and <span class="text-gold">frontend</span> management streamlined development, reducing boilerplate code and enhancing <span class="text-gold">efficiency</span>.',
                'Additionally, leveraging <span class="text-gold">Tailwind CSS</span> enabled me to bring the design to life seamlessly, ensuring <span class="text-gold">responsiveness</span> across all devices.',
                'This combination of tools and techniques resulted in a polished portfolio that effectively showcases my skills and projects.'
            ],
            image: '/projects/portfolio.jpeg'
        },
    ],
    educations: [
        {
            title: 'Bachelor Degree',
            subtitle: 'Mathematics',
            location: 'Safya Yahia\'s High school, El matmar',
            date: '2014 - 2017'
        },
        {
            title: 'Masters Degree',
            subtitle: 'Computer Science',
            location: 'University Of Ahmad Zabana, Relizane',
            date: '2017 - 2022'
        }
    ],
    testimonials: [
        // {
        //     name: 'John B.',
        //     country: 'United States',
        //     countryCode: 'us',
        //     description: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae?Lorem ipsum dolor sit amet consecLorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quae?'],
        //     image: '/testimonials/john.jpg'
        // },
        {
            name: 'Mahmoud S.',
            country: 'Egypt',
            countryCode: 'eg',
            description: [
                'I <span class="text-gold">highly recommend</span> working with dear brother, Engineer Abdelkarim. Our experience working with him was more than wonderful in terms of <span class="text-gold">credibility</span>, <span class="text-gold">professionalism</span>, and <span class="text-gold">commitment</span> to delivering projects on time.',
                'We asked Engineer Abdelkarim to work on more than 5 projects, and all of them <span class="text-gold">exceeded our expectations</span>, as opposed to the sophisticated nature of the work, during our contract, he never gets tired of reviewing the project nor fail to propose <span class="text-gold">better</span>, <span class="text-gold">easier</span> and <span class="text-gold">safer solutions</span>. We ask God to bless his work and provide for him in ways he does not expect.'
            ],
            image: '/testimonials/john.jpg'
        },
        {
            name: 'Hani I.',
            country: 'Saudi Arabia',
            countryCode: 'sa',
            description: ['I would like to extend my <span class="text-gold">sincere gratitude</span> for the <span class="text-gold">exceptional services</span> provided. The individual demonstrated an exemplary level of <span class="text-gold">professionalism</span>, executing the required task with promptness and precision.',
                'Their dedication to their work is evident, characterized by sincerity and meticulous <span class="text-gold">attention to detail</span>. I express my heartfelt wishes for their continued success in all endeavors. 💚']
        },
        {
            name: 'Khaled A.',
            country: 'Yemen',
            countryCode: 'ye',
            description: ['Engineer Abdelkarim Bettayeb <span class="text-gold">exemplifies excellence</span> as a <span class="text-gold">first-class programmer</span>. Our collaboration on numerous projects has been exceedingly fruitful, and we continue to engage his services to the present day.',
                'Wishing him enduring success and prosperity in all his endeavors.']
        }
    ]
};

function HLine(props: HTMLAttributes<HTMLSpanElement>) {
    return <span {...props} style={{
        height: 2,
        backgroundColor: gold,
        display: 'block',
        ...props.style
    }} className={'w-full sm:w-20 ' + props.className} />;
}

function Sticky(props: HTMLAttributes<HTMLDivElement>) {
    return <div style={{
        position: 'sticky',
        paddingTop: 10,
        top: 60,
        marginInline: -100,
        paddingInline: 100,
        zIndex: 11
    }} {...props} className={'bg-real-transparent ' + props.className} />;
}

export default function Home() {

    return (
        <>
            {/* Landing */}
            <section className='landing-section min-h-screen h-full relative'>
                <div className='flex gap-20 items-center left-0 top-0 justify-evenly min-h-screen pt-36 pb-36' style={{ width: 'calc(100% - 15px)' }}>
                    <div className='flex flex-col gap-4 items-start'>
                        <h1 style={{
                            ...saira.style
                        }}>
                            <span className='text-3xl sm:text-4xl'>I’m </span>
                            <span className='text-4xl sm:text-5xl text-gold'>Abdelkarim Bettayeb</span>
                        </h1>
                        <p className='text-3xl sm:text-4xl typewriter self-end' style={inria.style}>Fullstack Web Developer</p>

                        <div className='flex gap-5 self-end items-center'>

                            <Link target='blank' href='/Abdelkarim Bettayeb.pdf'>
                                <Button
                                    variant={'solid'}
                                    size={'lg'}
                                    className='h-max p-2 rounded-xl bg-gold-inv flex gap-2 items-center get-resume-button'
                                    style={inria.style}>
                                    <span className='text-xl text-dark font-bold overflow-hidden w-0'>GET MY RESUME</span>
                                    <MdDownload size={30} color={dark} />
                                </Button>
                            </Link>

                            <ClientLink spy smooth offset={-50} containerId='scrollContainer' to='reach-me'>
                                <Button
                                    variant='gradient'
                                    className='h-max p-4 ps-6 pe-6 rounded-xl'
                                    style={inria.style}>
                                    <span className='text-3xl text-dark font-bold'>REACH OUT</span>
                                </Button>
                            </ClientLink>

                        </div>
                    </div>

                    <div style={{ gridColumn: '2/3' }} className='hidden md:flex gap-6'>
                        <div>
                            <h1
                                style={{
                                    fontSize: '20rem',
                                    height: '20rem',
                                    marginTop: '-4rem',
                                    marginBottom: '4rem'
                                }}
                                className={' ' + saira.className}>
                                <span>A</span>
                                <span className='text-gold'>.</span>
                            </h1>
                        </div>
                        <div className='flex flex-col gap-3 items-center self-end ms-auto'>
                            <span className='h-40 w-1 rounded-sm bg-white bg-gold' />
                            <a target='_blank' href='https://facebook.com/mr.a.blizzard/'>
                                <FaFacebook size={30} className='opacity-80 hover:opacity-100 transition-all hover:scale-105' />
                            </a>
                            <a target='_blank' href='https://www.linkedin.com/in/karimbettayeb/'>
                                <FaLinkedin size={30} className='opacity-80 hover:opacity-100 transition-all hover:scale-105' />
                            </a>
                            <a target='_blank' href='https://github.com/xnevz/'>
                                <FaGithub size={30} className='opacity-80 hover:opacity-100 transition-all hover:scale-105' />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <div className='bg-real-transparent'>
                {/* About */}
                <MyElement name="about">
                    <section className='flex flex-col sm:grid sm:grid-cols-[auto_1fr]  gap-4 mt-10'>
                        <Sticky className='col-span-2'>
                            <h2 style={{
                                ...source_sans.style,
                                gridColumn: '1/3',
                                gridRow: '1/2',
                                marginInlineEnd: -20
                            }} className='text-2xl sm:text-4xl pb-2 sm:pb-4'>About</h2>
                            <HLine className='sm:row-start-2 sm:row-end-3 ' />
                        </Sticky>

                        <div style={{
                            ...inria.style,
                            gridColumn: '2/3',
                            gridRow: '2/3',
                        }} className='text-xl sm:text-3xl [&_p]:mb-2 text-justify'>
                            <p>My name is Abdelkarim, A <span className='text-gold'>Fullstack web developer</span> and a seasoned <span className='text-gold'>Software engineer</span> with over <span className='text-gold font-bold'>8 years</span> of experience.</p>
                            <p>My <span className='text-gold'>passion</span> for development has been growing ever since I made my first <span className="text-gold">hello world</span>, I love to <span className='text-gold'>engage</span> and <span className='text-gold'>commit</span> myself to projects that have an impact.</p>
                            <p>Always looking for new <span className='text-gold'>challenges</span> and <span className='text-gold'>opportunities</span> to learn and grow as a developer and a <span className='text-gold'>team player</span>.</p>
                        </div>
                    </section>
                </MyElement>

                {/* Education */}
                <MyElement name="education">
                    <section className='-m-10 mt-10 p-10 '>
                        <Sticky>
                            <h2 className={'text-2xl sm:text-4xl pb-2 sm:pb-4 ' + source_sans.className}>Education</h2>
                            <HLine />
                        </Sticky>

                        <div className="flex md:m-10 gap-10 items-center flex-col justify-center md:flex-row ">
                            <ClientLottie animationData={data} width={400} style={{
                                minWidth: 400
                            }} />
                            <div className='flex gap-5 flex-col'>
                                {educations.map(({ title, date, location, subtitle }, index) => (
                                    <div key={index} className='flex flex-col p-5 flex-wrap items-center gap-4 rounded-2xl bg-white bg-opacity-5'>
                                        <p style={inria.style} className='text-lg text-nowrap font-light text-gold'>{date}</p>

                                        <h3 style={source_sans.style} className='text-3xl mb-0 text-center'>
                                            {title}
                                            <p style={inria.style} className='!text-lg text-nowrap p-0 m-0 font-light text-gold'>{subtitle}</p>
                                        </h3>

                                        <h3 style={inria.style} className='text-2xl text-center font-light'>{location}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </section>
                </MyElement>

                {/* Skills */}
                <MyElement name="skills">
                    <section className='flex flex-col gap-4 !mt-10'>
                        <Sticky>
                            <h2
                                style={{
                                    ...source_sans.style,
                                }} className='text-2xl sm:text-4xl pb-2 sm:pb-4'
                            >Skills</h2>
                            <HLine />
                        </Sticky>


                        <Marquee pauseOnHover speed={100} gradient={false} className='overflow-visible'>
                            {skills.map(({ description, icon, name }, i) =>
                                <div key={i} style={{ marginRight: '1rem', width: 300 }} className='text-justify flex flex-col items-center bg-gold-tw bg-opacity-5 rounded-lg p-10 hover:scale-110 hover:rotate-6 hover:bg-opacity-10 transition-all'>

                                    <div key={i} className='flex flex-col items-center justify-center  w-36 !h-36 max-h-36 pb-3'>
                                        <Image alt='skill' src={'/skills/' + icon} height={100} width={100} className='-m-6' />
                                        <span style={inria.style} className='text-2xl text-gold'>{name}</span>
                                    </div>

                                    <span className={'text-xl text-center ' + inria.className}>
                                        {description}
                                    </span>

                                </div>
                            )}
                        </Marquee>

                    </section>
                </MyElement>

                {/* Projects */}
                <MyElement name="projects">
                    <section className='mt-10'>
                        <Sticky>
                            <h2 style={{
                                ...source_sans.style,
                            }} className='text-2xl sm:text-4xl pb-2 sm:pb-4'>Projects</h2>

                            <HLine />
                        </Sticky>

                        <div className='flex flex-col gap-10 mt-10'>
                            {projects.map(({ description, image, title, stack, url, subtitle }, index) => (

                                <div key={index}
                                    className='flex flex-col gap-10 p-7 sm:p-10 items-center center rounded-md sm:rounded-2xl bg-white bg-opacity-5 lg:flex-row'>

                                    <div className='flex flex-col gap-2'>
                                        <h3 style={source_sans.style} className='text-2xl sm:text-3xl gap-2 flex items-end flex-wrap'>
                                            <span>{title}</span>
                                            <span className={'text-sm sm:text-lg text-gold font-bold ' + inria.className}>( {subtitle} )</span>
                                        </h3>
                                        {description.map((d, i) => <p key={i} style={inria.style} className='text-2xl text-justify' dangerouslySetInnerHTML={{ __html: '&nbsp;&nbsp;' + d }} />)}
                                    </div>
                                    <div>
                                        <div className='flex items-center gap-2 justify-center m-2'>
                                            {stack.map(s => <StackIcon name={s} key={s} />)}
                                        </div>
                                        <a href={url} target='_blank'>
                                            <Image
                                                alt='project image'
                                                src={image}
                                                height={500}
                                                width={1200}
                                                className='object-cover rounded-2xl '
                                                style={{
                                                    objectPosition: '0 0',
                                                }} />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </MyElement>

                {/* Testimonials */}
                <MyElement name="testimonials">
                    <section className='mt-10'>
                        <Sticky>
                            <h2 className={'text-2xl sm:text-4xl pb-2 sm:pb-4 ' + source_sans.className}>Testimonials</h2>
                            <HLine />
                        </Sticky>

                        <div className='flex flex-col gap-10 mt-10'>
                            {testimonials.map(({ name, country, description, countryCode }, index) => (
                                <div key={index}
                                    className={'flex flex-col sm:grid sm:grid-cols-[auto_auto_auto_auto_1fr] sm:grid-rows-[auto_1fr] items-center gap-2 bg-opacity-5 p-5 sm:p-10 rounded-md' + (index % 2 === 0 ? ' bg-orange-500 flex-row-reverse' : ' bg-indigo-500')}>

                                    <span style={{
                                        height: 2,
                                        marginTop: '1rem'
                                    }} className='block bg-gold w-10 self-start' />

                                    <span className={'text-7xl self-start ' + saira.className}>&ldquo;</span>

                                    <h3 className='text-3xl self-end'>
                                        <span>{name} </span>
                                        <Tooltip label={country}>
                                            <Image alt='flag' src={`/flags/${countryCode}.svg`} width={20} height={20} className='inline' />
                                        </Tooltip>
                                    </h3>

                                    <p style={inria.style} className='text-2xl row-start-2 col-start-3 col-span-3 text-justify'>
                                        {description.map((d, i) => <span className='block' key={i} dangerouslySetInnerHTML={{ __html: '&nbsp;&nbsp;' + d }} />)}
                                    </p>

                                </div>
                            ))}

                            <a
                                target='_blank'
                                href='https://mostaql.com/u/abdelkrime2055/reviews'
                                className='text-2xl self-end font-bold cursor-pointer bg-gold text-dark py-2 px-4 rounded hover:bg-gold-hover transition-colors duration-300'
                            >
                                More reviews on Mostaql ....
                            </a>
                        </div>
                    </section>
                </MyElement>

                {/* Reach me */}
                <MyElement name="reach-me">
                    <section
                        className='mt-10'
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr auto 1fr',
                            gridTemplateRows: '1fr auto 1fr',
                            justifyItems: 'center',
                            alignItems: 'center',
                            columnGap: 10
                        }}>
                        <Sticky className='grid items-end col-span-3 col-start-1 grid-cols-subgrid'>
                            <h3 style={source_sans.style} className='col-start-2 col-end-3 p-2 text-2xl sm:text-4xl pb-2 sm:pb-4'>Reach me</h3>
                            <span className='w-full col-span-3 bg-gold' style={{ height: 2 }} />
                        </Sticky>

                        <div className="flex gap-10 col-start-1 col-end-4 m-10 flex-wrap items-center justify-center w-full">

                            <div className="grow">
                                <ReachMe />
                            </div>

                            <div className='flex flex-col items-center gap-2 grow'>
                                <TransparentButton className='max-w-full' leftSection={<MdEmail size={20} color={gold} />}>
                                    <a href='mailto:abdelkrime.bettayeb@gmail.com' className='text-ellipsis overflow-hidden w-full'>Abdelkrime.Bettayeb@gmail.com</a>
                                </TransparentButton>
                                <TransparentButton className='max-w-full' leftSection={<FaWhatsapp size={20} color={gold} />}>
                                    <a href='https://wa.me/+213540606959' className='text-ellipsis overflow-hidden w-full'>+213 540 606 959</a>
                                </TransparentButton>
                                <TransparentButton className='max-w-full' leftSection={<MdLocationCity size={20} color={gold} />}>
                                    <a href='https://maps.app.goo.gl/PQ8h3dBKmHihEkR96' className='text-ellipsis overflow-hidden w-full'>El matmar, Relizane, Algeria</a>
                                </TransparentButton>
                                <TransparentButton className='max-w-full' leftSection={<FaLinkedin size={20} color={gold} />}>
                                    <a href='https://www.linkedin.com/in/karimbettayeb/' className='text-ellipsis overflow-hidden w-full'>LinkedIn</a>
                                </TransparentButton>
                            </div>
                        </div>

                        <span className='w-full bg-gold row-start-3 col-span-3' style={{ height: 5 }} />
                    </section>
                </MyElement>

                {/* Thank you for scrolling */}
                <section className='flex flex-col gap-4 items-center'>

                    <p style={source_sans.style} className='text-2xl text-center'>I hope you enjoyed my portfolio. If you would like to work with me, feel free to <span className='text-gold'>reach out !</span></p>

                    <div className='flex gap-4 row-start-3 col-start-2'>
                        <a target='_blank' href='https://facebook.com/mr.a.blizzard/'>
                            <FaFacebook size={20} className='opacity-80 hover:opacity-100 transition-all hover:scale-105' />
                        </a>
                        <a target='_blank' href='https://www.linkedin.com/in/karimbettayeb/'>
                            <FaLinkedin size={20} className='opacity-80 hover:opacity-100 transition-all hover:scale-105' />
                        </a>
                        <a target='_blank' href='https://github.com/xnevz/'>
                            <FaGithub size={20} className='opacity-80 hover:opacity-100 transition-all hover:scale-105' />
                        </a>
                    </div>

                    <h3 style={saira.style}>
                        <span className='text-4xl sm:text-7xl'>&ldquo;</span>
                        <span>
                            <span className='text-gold text-4xl sm:text-5xl'> Thank you</span>
                            <span className='text-xl sm:text-2xl'> for scrolling</span>
                        </span>
                        <span className='text-7xl'>&rdquo;</span>
                    </h3>
                </section>
            </div>
        </>
    );
}
