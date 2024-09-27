import Script from 'next/script'

export default function Hero(props) {
    return (
        <section
          id="home"
          class="relative overflow-hidden z-10 pt-35 md:pt-40 xl:pt-45"
        >
          <div class="max-w-7xl mx-auto">
            <div
              class="absolute -z-10 pointer-events-none inset-0 overflow-hidden -mx-28"
            >
              <div
                class="absolute -z-1 -top-[128%] sm:-top-[107%] xl:-top-[73%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1282px] rounded-full max-w-[1282px]"
              ></div>
              <div
                class="absolute -z-1 -top-[112%] sm:-top-[93%] xl:-top-[62%] left-1/2 -translate-x-1/2 -u-z-10 hero-circle-gradient w-full h-[1046px] rounded-full max-w-[1046px]"
              ></div>
              
              </div>
          </div>

          <div class="mx-auto max-w-[900px] px-4 sm:px-8 xl:px-0 relative z-1">
            <div class="text-center">
              <a
                href="#"
                onclick="void(0)"
                class="hero-subtitle-gradient hover:hero-subtitle-hover relative mb-5 font-medium text-sm inline-flex items-center gap-2 py-2 px-4.5 rounded-full"
              >
                <span class="hero-subtitle-text">
Your simple, fun, and sleek communication companion!                </span>
              </a>
              <h1
                class="text-white mb-6 text-3xl font-extrabold sm:text-5xl xl:text-heading-1"
              >
Vixcord, a simpler way to connect with your friends.
              </h1>
                <p class="max-w-[500px] mx-auto mb-9 font-medium md:text-lg">
               Welcome to Vixcord! The simple, fun, and sleek alternative to Discord. Stay connected with your friends and have a blast with a variety of features and channels. From chat apps to emojis to bots, we've got it all. Come join the fun now!


              </p>
              <a
                href="#"
                class="hero-button-gradient inline-flex rounded-lg py-3 px-7 text-white font-medium ease-in duration-300 hover:opacity-80"
              >
                Get started
              </a>
            </div>
          </div>
          <div class="mt-17">
          </div>
          <Script src="https://cdnjs.cloudflare.com/ajax/libs/iconify/2.0.0/iconify.min.js"/>
        </section>
    )
}
