import { Menu, Transition } from '@headlessui/react'
import { Fragment, React } from 'react'
import { Link } from "react-router-dom"

import brand from '../../pics/kangarooWhite.png'

const navigation = [
  { name: 'Projekty', path: '/projekty', current: false, },
  { name: 'O mnie', path: '/about', current: false, },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Nav1 = ({ cart }) => {
  return (
    <div className="">
      <Menu as="div" className="bg-black fixed top-0 right-0 z-50 w-full sm:static">
        {({ open }) => (
        <>  
        <div className={classNames(open ? "" : "", "mx-auto px-2 sm:px-0 lg:px-8")}>
        <div className="relative flex items-center justify-between h-16 sm:h-24">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )}
          </Menu.Button>
          </div>

          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <Link to="/">
                  <div className="flex-shrink-0 flex items-center sm:px-3">
                    <img
                      className="hidden sm:block h-12 w-auto"
                      src={brand}
                      alt="candles"
                    />
                  </div>
                </Link>
                <div className="hidden sm:block">
                  <div className="flex">
                    {navigation.map((item) => (
                      <Link to={item.path}>
                        <div
                          key={item.name}
                          className='text-white hover:border-2 border-gray-300 hover:text-gray-300 hover:underline px-3 py-2 rounded-md text-lg tracking-widest'
                          
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                    <a href="https://www.instagram.com">
                      <div                     
                        className='text-white hover:border-2 border-gray-300 hover:text-gray-300 hover:underline px-3 py-2 rounded-md text-lg tracking-widest'
                        aria-current={'page'}
                      >
                        Instagram
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link to="/">  
                  <img
                    className="block sm:hidden h-10 w-auto"
                    src={brand}
                    alt="candles"
                  />
                </Link>  
              </div>

        </div>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
        
          <Menu.Items className="absolute left-0 w-full origin-top-right bg-white divide-y divide-gray-100 text-center focus:outline-none">
            <div className="px-1 py-12 bg-black">
              <div>
                {navigation.map((item) =>(
                  <Menu.Item>
                    <Link to={item.path} component={item.component}>
                      <div
                        key={item.name}
                        className={classNames(
                          item.current ? 'underline text-white' : 'text-white',
                         'block px-2 py-5 rounded-md text-base tracking-widest'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                       {item.name}
                      </div>
                    </Link>
                  </Menu.Item>
                ))}            
              </div>  
              <a href="https://www.instagram.com">
                <div                     
                  className='text-white block px-2 py-5 rounded-md text-base tracking-widest'
                  aria-current='page'
                  >
                  Instagram
                </div> 
              </a>    
            </div>
          </Menu.Items>
        </Transition>
        </>
        )}
      </Menu>
    </div>
  )
}

export default Nav1
