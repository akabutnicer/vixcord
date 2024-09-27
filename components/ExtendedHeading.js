import Link from 'next/link'
import Script from 'next/script'
import UserContext from 'lib/UserContext'
import { useContext, useEffect } from 'react'



export default function Heading(props) {
  const context = useContext(UserContext);

  return (
    <header
      class="fixed left-0 top-0 w-full z-9999 py-7 lg:py-0 bg-dark/70 backdrop-blur-lg shadow !py-4 lg:!py-0 transition duration-100 before:absolute before:w-full before:h-[1px] before:bottom-0 before:left-0 before:features-row-border"

    >
      <div
        class="max-w-[1170px] mx-auto px-4 sm:px-8 xl:px-0 lg:flex items-center justify-between relative"
      >
        <div class="w-full lg:w-1/4 flex items-center justify-between">
          <Link href="index.html">
            <a class="flex items-center space-x-2">
              <div class="flex space-x-1">
                <div
                  class="h-4 w-4 rounded-full bg-white"
                ></div>
                <div class="h-6 w-2 hero-button-gradient"></div>
              </div>
              <span
                class="text-2xl font-bold text-white"
              >Vixcord</span
              >
            </a>
          </Link>

          <button
            class="lg:hidden block"
          >
            <span class="block relative cursor-pointer w-5.5 h-5.5">
              <span class="du-block absolute right-0 w-full h-full">
                <span
                  class="block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-[0] !w-full delay-300"
                ></span>
                <span
                  class="block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-150 !w-full delay-400"
                ></span>
                <span
                  class="block relative top-0 left-0 bg-white rounded-sm w-0 h-0.5 my-1 ease-in-out duration-200 delay-200 !w-full delay-500"
                ></span>
              </span>
              <span class="du-block absolute right-0 w-full h-full rotate-45">
                <span
                  class="block bg-white rounded-sm ease-in-out duration-200 delay-300 absolute left-2.5 top-0 w-0.5 h-full !h-0 delay-[0]"
                ></span>
                <span
                  class="block bg-white rounded-sm ease-in-out duration-200 delay-400 absolute left-0 top-2.5 w-full h-0.5 !h-0 dealy-200"
                ></span>
              </span>
            </span>
          </button>
        </div>
        <div
          class="w-full lg:w-3/4 h-0 lg:h-auto invisible lg:visible lg:flex items-center justify-between"
        >
          <nav>
            <ul
              class="flex lg:items-center flex-col lg:flex-row gap-5 lg:gap-2"
            >
              <li
                class="nav__menu lg:py-7 lg:!py-4"
              >
                <Link href="/">
                  <a
                    class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient"
                  >Home</a
                  >
                </Link>
              </li>
              <li
                class="nav__menu lg:py-7 lg:!py-4"
              >
                <Link href="/#features">
                  <a
                    class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient"
                  >Features</a
                  >
                </Link>
              </li>

              <li
                class="group relative lg:py-7 lg:!py-4"
              >
                <Link href="#">
                  <a
                    class="relative text-white/80 text-sm py-1.5 px-4 border border-transparent hover:text-white hover:nav-gradient flex items-center justify-between gap-3"
                  >
                    Pages
                    <svg
                      class="fill-current w-3 h-3 cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
                      ></path>
                    </svg>
                  </a>
                </Link>

                <ul class="dropdown">

                  <li>
                    <Link href="signin.html">
                      <a
                        class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5"
                      >Sign In</a
                      >
                    </Link>
                  </li>
                  <li>
                    <Link href="signup.html">
                      <a
                        class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5"
                      >Sign Up</a
                      >
                    </Link>
                  </li>
                  <li>
                    <a
                      href="/application/@me"
                      class="flex text-sm text-white/70 hover:text-white py-2 px-4 rounded-md hover:bg-white/5"
                    >Application</a
                    >
                  </li>
                </ul>
              </li>
          
            </ul>
          </nav>
          <div class="flex items-center gap-6 mt-7 lg:mt-0">
            {!context.userLoaded ? (
              <>
                <Link href="/login">
                  <a
                    href="/login"
                    class="text-white text-sm hover:text-opacity-75"
                  >Sign in</a
                  ></Link>

                <Link href="signup.html"><a
                  href="signup.html"
                  class="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none"
                >
                  Sign up
                  <svg
                    class="mt-0.5"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.4002 7.60002L9.2252 2.35002C9.0002 2.12502 8.6502 2.12502 8.4252 2.35002C8.2002 2.57502 8.2002 2.92502 8.4252 3.15002L12.6252 7.42502H2.0002C1.7002 7.42502 1.4502 7.67502 1.4502 7.97502C1.4502 8.27502 1.7002 8.55003 2.0002 8.55003H12.6752L8.4252 12.875C8.2002 13.1 8.2002 13.45 8.4252 13.675C8.5252 13.775 8.6752 13.825 8.8252 13.825C8.9752 13.825 9.1252 13.775 9.2252 13.65L14.4002 8.40002C14.6252 8.17502 14.6252 7.82503 14.4002 7.60002Z"
                      fill="white"
                    ></path>
                  </svg>
                </a>
                </Link>
              </>
            ) : (
              <Link href="/chat"><a
                  href="/chat"
                  class="button-border-gradient relative rounded-lg text-white text-sm flex items-center gap-1.5 py-2 px-4.5 shadow-button hover:button-gradient-hover hover:shadow-none"
                >
                  Launch
                 
                </a>
                </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

