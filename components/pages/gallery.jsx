/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    MagnifyingGlassIcon,
    ShoppingBagIcon,
    XMarkIcon as XMarkIconOutline,
} from '@heroicons/react/24/outline'
import { CheckIcon, ClockIcon, QuestionMarkCircleIcon, XMarkIcon as XMarkIconMini } from '@heroicons/react/20/solid'

const products = [
    {
        id: 1,
        name: 'Martin Jazz',
        href: '#',
        price: 'PhD',
        color: 'Head Master',
        inStock: true,
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg',
        imageAlt: "Front of men's Basic Tee in sienna.",
    },
    {
        id: 2,
        name: 'Sophia Kazembe',
        href: '#',
        price: 'PhD',
        color: 'Deputy Head Master',
        inStock: false,
        leadTime: '3–4 weeks',
        size: 'Large',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg',
        imageAlt: "Front of men's Basic Tee in black.",
    },
    {
        id: 3,
        name: 'Nomad Tumbler',
        href: '#',
        price: 'PhD',
        color: 'Head of acadmics',
        inStock: true,
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg',
        imageAlt: 'Insulated bottle with white base and black snap lid.',
    },
]
const membersOfstaffs = [
    {
        id: 1,
        name: 'Billfold Wallet',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
        imageAlt: 'Front of Billfold Wallet in natural leather.',
        price: '$118',
        color: 'Natural',
    },
    {
        id: 2,
        name: 'Billfold Wallet',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
        imageAlt: 'Front of Billfold Wallet in natural leather.',
        price: '$118',
        color: 'Natural',
    },
    {
        id: 3,
        name: 'Billfold Wallet',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
        imageAlt: 'Front of Billfold Wallet in natural leather.',
        price: '$118',
        color: 'Natural',
    },
    {
        id: 4,
        name: 'Billfold Wallet',
        href: '#',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-related-product-01.jpg',
        imageAlt: 'Front of Billfold Wallet in natural leather.',
        price: '$118',
        color: 'Natural',
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function GalleryPage() {
    const [open, setOpen] = useState(false)

    return (
        <div className="bg-white">

            <div className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Administration</h1>

                <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
                    <section aria-labelledby="cart-heading" className="lg:col-span-7">
                        <h2 id="cart-heading" className="sr-only">
                            Items in your shopping cart
                        </h2>

                        <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
                            {products.map((product, productIdx) => (
                                <li key={product.id} className="flex py-6 sm:py-10">
                                    <div className="flex-shrink-0">
                                        <img
                                            src={product.imageSrc}
                                            alt={product.imageAlt}
                                            className="h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"
                                        />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                                            <div>
                                                <div className="flex justify-between">
                                                    <h3 className="text-sm">
                                                        <a href={product.href} className="font-medium text-gray-700 hover:text-gray-800">
                                                            {product.name}
                                                        </a>
                                                    </h3>
                                                </div>
                                                <div className="mt-1 flex text-sm">
                                                    <p className="text-gray-500">{product.color}</p>

                                                </div>
                                                <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                                            </div>


                                        </div>


                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Order summary */}
                    <section
                        aria-labelledby="summary-heading"
                        className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
                    >
                        <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
                            Members of Staff
                        </h2>

                        <dl className="mt-6 space-y-4">
                           
                            <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                                <dt className="flex items-center text-sm text-gray-600">
                                    <span>Rev K. Songwe</span>
                                </dt>
                                <dd className="text-sm font-medium text-gray-900">Teacher</dd>
                            </div>
                            
                        </dl>

                    </section>
                </form>

                {/* Related products */}
                <section aria-labelledby="related-heading" className="mt-24">
                    <h2 id="related-heading" className="text-lg font-medium text-gray-900">
                        Heads of Departments
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {membersOfstaffs.map((memberOfStaff) => (
                            <div key={memberOfStaff.id} className="group relative">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={memberOfStaff.imageSrc}
                                        alt={memberOfStaff.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={memberOfStaff.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {memberOfStaff.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{memberOfStaff.color}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Related products */}
                <section aria-labelledby="related-heading" className="mt-24">
                    <h2 id="related-heading" className="text-lg font-medium text-gray-900">
                        Extra Curricular activities
                    </h2>

                    <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {membersOfstaffs.map((memberOfStaff) => (
                            <div key={memberOfStaff.id} className="group relative">
                                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                                    <img
                                        src={memberOfStaff.imageSrc}
                                        alt={memberOfStaff.imageAlt}
                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                    />
                                </div>
                                <div className="mt-4 flex justify-between">
                                    <div>
                                        <h3 className="text-sm text-gray-700">
                                            <a href={memberOfStaff.href}>
                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {memberOfStaff.name}
                                            </a>
                                        </h3>
                                        <p className="mt-1 text-sm text-gray-500">{memberOfStaff.color}</p>
                                    </div>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>


        </div>
    )
}
