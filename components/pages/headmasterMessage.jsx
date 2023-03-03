const stats = [


    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
]

export default function HeadMasterMessage() {
    return (
        <div className="bg-white py-2 sm:py-2">

            <div className="">

                {/* Testimonial/stats section */}
                <div className="relative mt-8">
                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
                        <div className="relative sm:py-16 lg:py-0">
                            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                                <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
                                <svg
                                    className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                                    width={404}
                                    height={392}
                                    fill="none"
                                    viewBox="0 0 404 392"
                                >
                                    <defs>
                                        <pattern
                                            id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                                            x={0}
                                            y={0}
                                            width={20}
                                            height={20}
                                            patternUnits="userSpaceOnUse"
                                        >
                                            <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                                        </pattern>
                                    </defs>
                                    <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                                </svg>
                            </div>
                            <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:max-w-none lg:px-0 lg:py-20">
                                {/* Testimonial card*/}
                                

                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg sm:aspect-w-2 sm:aspect-h-3">
                                    <img
                                        src="./assets/images/gallery/hmaster.jpg"
                                        alt=""
                                        className="h-full w-full object-cover object-center group-hover:opacity-75"
                                    />
                                </div>
                                <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
                                    <h3>ANDREW HUBBARD</h3>
                                   
                                </div>
                                <p className="mt-1 text-sm text-gray-500">Deputy Headmaster of Academics</p>
                            </div>
                        </div>

                        <div className="relative mx-auto max-w-md px-6 sm:max-w-3xl lg:px-0">
                            {/* Content area */}
                            <div className="pt-12 sm:pt-16 lg:pt-20">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                                    Headmaster&apos;s Message
                                </h2>
                                <div className="mt-6 space-y-6 text-gray-500">
                                    <p className="text-lg">
                                        I arrive at Kamuzu Academy after extensive experience of teaching and management in both U.K.
                                        and international secondary schools. My focus is delivering high quality provision that enriches
                                        the students’ learning experiences, encouraging them to be confident, inquisitive, and socially aware.

                                    </p>
                                    <p className="text-base leading-7">
                                        Education in a world that is subject to continual change cannot be limited to rote learning,
                                        but demands teaching to be more expansive, dynamic and holistic. Collaboration, the ability to work
                                        in a team and be self-motivated, are the skills that provide students the strong foundations on which
                                        their careers can build. It is my job to see that the students’ individual talents are developed and staff
                                        are supported in delivering the best education possible.

                                    </p>
                                    <p className="text-base leading-7">
                                        My approach has been shaped by the different cultures that I have encountered. From being a teacher
                                        of Mathematics in schools in and around London, including Eton, to more recent managerial, pastoral
                                        and leadership roles in internationals schools of the Indian subcontinent.

                                    </p>
                                    <p className="text-base leading-7">
                                        This experience of teaching and supporting students from different backgrounds, as well as engaging with wider
                                        communities in the schools where I have been employed, has alerted me to the unique concerns of each
                                        student and the value of independent learning.

                                    </p>
                                    <p>
                                        I bring this student-focused ethos into my role as Headmaster where I intend to build on the prestigious
                                        history of Kamuzu Academy, its reputation for excellence, and ensure those students who pass through the
                                        school&apos;s gates are equipped to be future leaders in a challenging world.

                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
