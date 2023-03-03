/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          'warm-gray': colors.warmGray,
          sky: colors.sky,
          cyan: colors.cyan,
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { BackspaceIcon, BackwardIcon, Bars3Icon, FolderOpenIcon, FunnelIcon, HomeIcon, HomeModernIcon, PhoneIcon, StarIcon, VideoCameraSlashIcon, XMarkIcon } from '@heroicons/react/24/outline'

const policies = [


    {
        name: 'Visit Us',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
        icon: <FolderOpenIcon className='-my-1 mx-auto h-16 w-auto' />,
        description: 'Pre-GCSE (Forms 1-3): Interview and written examinations. ',
    },
    {
        name: 'Give us a call',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
        icon: <PhoneIcon className='-my-1 mx-auto h-16 w-auto' />,
        description:
            'GCSE (Form Four): Interview, written examinations and a Report from previous school. ',
    },
    {
        name: 'Return',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
        icon: <StarIcon className='-my-1 mx-auto h-16 w-auto' />,
        description: 'Advanced Level (Lower Sixth): Interview, successful completion of MSCE, six GCSE passes or equivalent, Reports from previous school and An English aptitude test. ',
    },
    {
        name: 'HouseHold Department',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        icon: <HomeModernIcon className='-my-1 mx-auto h-16 w-auto' />,
        description: "For all your financial and fees arrangements, any problem you meet don't hesitate to contact the us. ",
    },
    {
        name: 'Accounts Department',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
        icon: <FunnelIcon className='-my-1 mx-auto h-16 w-auto' />,
        description: "Uniforms, beddings and hostels cleanliness, above all these the sanitation around the school to keep Kamuzu academy clean. ",
    },
    {
        name: 'Dining Department',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
        icon: <HomeIcon className='-my-1 mx-auto h-16 w-auto' />,
        description: "Boarding students get high quality food, 5star hotel standard food for healthy living.",
    },

]

export default function AdmissionPage() {
    return (
        <div className="bg-white">


            <main>

                {/* FAQ */}
                <div className="bg-warm-gray-50">
                    <div className="mx-auto max-w-md py-24 px-6 sm:max-w-3xl sm:py-8 lg:max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                            <div className='mt-12 mb-8 rounded text-white'>
                                <div className="bg-green-700  p-4 rounded">

                                    <h2 className="text-3xl font-bold tracking-tight text-warm-gray-900">
                                        Admissions Procedure
                                    </h2>
                                    <p className="mt-4 text-sm text-warm-gray-500">
                                        The Admission Procedure ensures that the Academy welcomes those pupils who are likely to be most receptive to the educational ideal of the Founder. The Academy considers many factors in selecting its pupils, both academic and social. At present, some 90 per cent of the pupil body is Malawian, with the rest coming from as far afield as Sierra Leone and South Africa. The Academy welcomes applications from all prospective pupils, regardless of origin.
                                    </p>
                                </div>
                            </div>
                            <div className="mt-12 lg:col-span-2 lg:mt-0">
                                {/* <dl className="space-y-8">
                                    {aboutUsContent.map((faq) => (
                                        <div key={faq.id}>
                                            <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                                            <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                                        </div>
                                    ))}
                                </dl> */}
                                <section aria-labelledby="policies-heading" className="mt-4 shadow-sm">
                                    <h2 id="policies-heading" className="sr-only">
                                        Our policies
                                    </h2>

                                    <div className="py-8 px-4 sm:px-6 sm:py-8 lg:px-8">
                                        <div className="relative w-full text-center  mb-8 bg-green-700 rounded p-4 text-white">
                                            <h1 className='text-3xl font-semibold leading-6'>Entry Requirements </h1>
                                        </div>
                                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-0">
                                            {policies.map((policy) => (
                                                <div
                                                    key={policy.name}
                                                    className="text-center mb-4 md:flex md:items-start md:text-left lg:block lg:text-center"
                                                >
                                                    <div className="md:flex-shrink-0">
                                                        <div className="flow-root">
                                                            <span >{policy.icon}</span>
                                                            {/* <img className="-my-1 mx-auto h-24 w-auto" src={policy.imageSrc} alt="" /> */}
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                                                        <h3 className="text-base font-medium text-gray-900">{policy.name}</h3>
                                                        <p className="mt-3 text-sm text-gray-500">{policy.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="py-8 px-4 sm:px-6 sm:py-8 lg:px-8">
                                        <div className="relative w-full text-center  mb-8 bg-green-700 rounded p-4 text-white">
                                            <h1 className='text-3xl font-semibold leading-6'>Fees and Scholarships </h1>
                                        </div>
                                        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-1 sm:gap-x-6 lg:grid-cols-1 lg:gap-x-8 lg:gap-y-0">
                                            <p className='mb-4'>
                                                Fees are payable in Malawi Kwacha at the prevailing rate of exchange. A slightly different table of fees applies to extra-territorial pupils (i.e. non-Malawians resident outside Malawi). Scholarships may be offered to pupils wishing to continue into the Sixth Form who achieve five or more A grades at GCSE level Government Scholars.
                                            </p>
                                            <p>
                                                Since January, 2006, the Government of the Republic of Malawi has restored Government scholars to the Academy. Two scholars, one girl and one boy, are selected from each District on the basis of the results of the Primary School Leaving Certificate. Government Scholars join the First Form in January and undertake an accelerated programme of studies in order that they should be fully integrated into the Second Form in the following September. Currently, sixty-six scholars are in residence. The Academy has embarked on a programme of expansion in order to accommodate future scholars.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>


            </main>

        </div>
    )
}
