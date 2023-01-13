import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  BookmarkSquareIcon,
  BriefcaseIcon,
  BuildingOfficeIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const company = [
  { name: "Service 1", href: "#", icon: BriefcaseIcon },
  { name: "Service 2", href: "#", icon: BuildingOfficeIcon },
  { name: "Insurance", href: null, icon: ShieldCheckIcon },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Popover className="relative z-0 -mt-10">
      {({ open }) => (
        <>
          <div className="relative z-10 bg-white shadow">
            <div className="mx-auto flex max-w-7xl p-6 lg:px-8">
              <Popover.Button
                className={classNames(
                  open
                    ? "text-gray-900 bg-gray-50 py-2 px-6 rounded-lg"
                    : "text-gray-500",
                  "group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
                )}
              >
                <span>Home</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Popover.Button
                className={classNames(
                  "text-gray-500",
                  "ml-4 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
                )}
              >
                <span>Services</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Popover.Button
                className={classNames(
                  "text-gray-500",
                  "ml-4 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
                )}
              >
                <span>About Us</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
              <Popover.Button
                className={classNames(
                  "text-gray-500",
                  "ml-4 group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none"
                )}
              >
                <span>Contact Us</span>
                <ChevronDownIcon
                  className={classNames(
                    open ? "text-gray-600" : "text-gray-400",
                    "ml-2 h-5 w-5 group-hover:text-gray-500"
                  )}
                  aria-hidden="true"
                />
              </Popover.Button>
            </div>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-1"
          >
            <Popover.Panel className="absolute inset-x-0 z-10 transform shadow-lg">
              <div className="absolute inset-0 flex" aria-hidden="true">
                <div className="w-1/2 bg-white" />
                <div className="w-1/2 bg-gray-50" />
              </div>
              <div className="relative mx-auto">
                <nav
                  className="grid gap-y-10 bg-white -mt-4 pb-8 px-6 "
                  aria-labelledby="solutions-heading"
                >
                  <h2 id="solutions-heading" className="sr-only">
                    Solutions menu
                  </h2>
                  <div>
                    <ul role="list" className="mt-5 space-y-6">
                      {company.map((item) => (
                        <li key={item.name} className="flow-root">
                          <a
                            href={item.href}
                            className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 transition duration-150 ease-in-out hover:bg-gray-50"
                          >
                            <item.icon
                              className="h-6 w-6 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <span className="ml-4">{item.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </nav>
              </div>
            </Popover.Panel>
          </Transition>
          <div className="mt-4 flex sm:mt-0 sm:ml-4">
            <img
              className="mt-10 mx-auto"
              src="https://www.coverdash.com/img/embeded-branding.svg"
            ></img>
          </div>
        </>
      )}
    </Popover>
  );
}
