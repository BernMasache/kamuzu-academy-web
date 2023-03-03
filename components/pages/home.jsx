import React from 'react';
import HomeCarouselComponent from '../layouts/carousel';
import HeadMasterMessage from './headmasterMessage';
const admissions = [
    { name: 'Visit us', description: 'Pre-GCSE (Forms 1-3): Interview and written examinations.', href: '/admissions' },
    { name: "Give us a call", description: 'GCSE (Form Four): Interview, written examinations and a Report from previous school.', href: '/admissions' },
    { name: 'Return', description: 'Advanced Level (Lower Sixth): Interview, successful completion of MSCE, six GCSE passes or equivalent, Reports from previous school and An English aptitude test. ', href: '/admissions' },
]
const trendingProducts = [
    {
        id: 1,
        name: 'Machined Pen',
        color: 'Black',
        price: '$35',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg',
        imageAlt: 'Black machined steel pen with hexagonal grip and small white logo at top.',
        availableColors: [
            { name: 'Black', colorBg: '#111827' },
            { name: 'Brass', colorBg: '#FDE68A' },
            { name: 'Chrome', colorBg: '#E5E7EB' },
        ],
    },
    // More products...
]
const collections = [
    {
        name: 'Business and Commerce',
        description: 'A learning community dedicated to building respectful and responsible citizens and empowering all learners. Engaging all students in partnership with family and community to become informed, compassionate, global citizens.',
        imageSrc: './assets/images/carousel/business1.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        href: '#',
    },
    {
        name: 'Self-Improvement',
        description: 'Anyone who stops learning is old, whether at twenty or eighty. Anyone who keeps learning stays young. A well-educated mind will always have more questions than answers, Allow yourself to be a beginner; no one starts off being excellent',
        imageSrc: './assets/images/carousel/english.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: '#',
    },
    {
        name: 'ICT',
        description: 'The ICT department is revitalise its resources to prepare the young minds by honing their skills as future technology providers, this provide students with the knowledge, skills and motivation in the field of technology.',
        imageSrc: './assets/images/map/it.jpg',
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: '#',
    },
]
const testimonials = [
    {
        id: 1,
        quote:
            'My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!',
        attribution: 'Sarah Peters, New Orleans',
    },
    {
        id: 2,
        quote:
            'I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!',
        attribution: 'Kelly McPherson, Chicago',
    },
    {
        id: 3,
        quote:
            'Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there.',
        attribution: 'Chris Paul, Phoenix',
    },
]
const footerNavigation = {
    products: [
        { name: 'Bags', href: '#' },
        { name: 'Tees', href: '#' },
        { name: 'Objects', href: '#' },
        { name: 'Home Goods', href: '#' },
        { name: 'Accessories', href: '#' },
    ],
    customerService: [
        { name: 'Contact', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
        { name: 'Warranty', href: '#' },
        { name: 'Secure Payments', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Find a store', href: '#' },
    ],
    company: [
        { name: 'Who we are', href: '#' },
        { name: 'Sustainability', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Privacy', href: '#' },
    ],
    legal: [
        { name: 'Terms of Service', href: '#' },
        { name: 'Return Policy', href: '#' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Shipping Policy', href: '#' },
    ],
    bottomLinks: [
        { name: 'Accessibility', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
}
function HomePage(props) {
    return (
        <div>
            {/* Hero */}
            <div className="flex flex-col bg-green-800 border-b border-gray-200 lg:border-0">
                <nav aria-label="Offers" className="order-first lg:order-first">
                    <div className="mx-auto max-w-7xl  lg:px-8">
                        <ul
                            role="list"
                            className="grid grid-cols-1 divide-y divide-gray-200 lg:grid-cols-3 lg:divide-y-0 lg:divide-x"
                        >
                            {admissions.map((admission) => (
                                <li key={admission.name} className="flex flex-col">
                                    <a
                                        href={admission.href}
                                        className="relative flex flex-1 flex-col justify-start bg-green-800 py-6 px-4 text-end focus:z-10"
                                    >
                                        <p className="text-bold text-white uppercase p-2">{admission.name}</p>
                                        <p className="font-sm text-gray-300">{admission.description}</p>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
                {/* Trending products */}
                <section aria-labelledby="trending-heading" className="bg-white">
                    {/* <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:py-32 lg:px-8"> */}
                    <HomeCarouselComponent />
                    {/* </div> */}
                </section>
                <div className="relative">
                    <div aria-hidden="true" className="absolute hidden h-full w-1/2 bg-gray-100 lg:block" />
                    <div className="relative bg-gray-100 lg:bg-transparent">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:px-8">
                            <div className="mx-auto max-w-2xl py-24 lg:max-w-none lg:py-64">
                                <div className="lg:pr-16">
                                    <h1 className="text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl xl:text-6xl">
                                        Welcome to Kamuzu Academy
                                    </h1>
                                   
                                    <p className="mt-4 text-xl text-gray-500">
                                        Cambridge International Curriculum
                                    </p>
                                    <div className="mt-6">
                                        <a
                                            href="#"
                                            className="inline-block rounded-md border border-transparent bg-green-900 py-3 px-8 font-medium text-white hover:bg-indigo-700"
                                        >
                                            Admission
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="h-48 w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2">
                        <img
                            src="./assets/images/gallery/kamuzu1png.png"
                            alt=""
                            className="h-full w-full object-cover object-center transform -scale-x-100"
                        />

                    </div>
                </div>
            </div>


            <section aria-labelledby="collections-heading w-full" className="bg-gray-100">
                <HeadMasterMessage />
            </section>

            {/* Collections */}
            <section aria-labelledby="collections-heading" className="bg-gray-100">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl py-16 sm:py-8 lg:max-w-none lg:py-32">
                        <h2 id="collections-heading" className="text-2xl font-bold text-gray-900">
                            Gallery
                        </h2>

                        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                            {collections.map((collection) => (
                                <div key={collection.name} className="group relative">
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                        <img
                                            src={collection.imageSrc}
                                            alt={collection.imageAlt}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-xl text-gray-700">
                                        <a href={collection.href}>
                                            <span className="absolute inset-0" />
                                            {collection.name}
                                        </a>
                                    </h3>
                                    <p className="text-sm text-gray-500">{collection.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default HomePage;