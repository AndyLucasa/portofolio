import { Fragment } from 'react'
import { HiMenu,HiX} from "react-icons/hi"
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
function MyMenu() {
    return(
        <Menu as="div" className="bg-transparent h-11 w-11 ml-auto -mr-0">
            {({ open }) => (
                <>
                    <div>
                        <Menu.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none  ">
                            <span className="sr-only">Open main menu</span>
                            {open ? (
                                <HiX className="block h-7 w-7" aria-hidden="true" />
                            ) : (
                                <HiMenu className="block h-7 w-7" aria-hidden="true" />
                            )}
                        </Menu.Button>
                    </div>

                    <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                            static
                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    Your Profile
                                </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    Settings
                                </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                <a
                                    href="#"
                                    className={classNames(
                                    active ? 'bg-gray-100' : '',
                                    'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    Sign out
                                </a>
                                )}
                            </Menu.Item>
                            </Menu.Items>
                      </Transition>
                    
                </>
            )}
        </Menu>
    )
}


export default MyMenu;