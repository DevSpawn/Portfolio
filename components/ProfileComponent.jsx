// TODO: Requires portfolio picture
import Avatar from './AvatarComponent'
import SocialComponent from './SocialComponent'

export default () => {
  return (
    // INFO: Hero section
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content justify-center text-center">
        <div className="max-w-md grid justify-items-center">
          <Avatar />

          {/* INFO: Profile text e.g. name, description */}
          <h1 className="text-6xl font-bold">Hello, I'm Tim.</h1>
          <p className="text-lg py-6">A software developer with a keen interest in forging creative tools & utilities.</p>

          <SocialComponent />

          {/* INFO: Resume downloadable PDF */}
          {/* FIX: move this into its own component */}
          {/* <CVResumeComponent /> */}
          <div className="py-8">
            <a
              href="/cv_tim.pdf"
              alt="CV download"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-primary">
                <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                </svg>
                <span>CV / RESUME</span>
              </button>
            </a>
          </div>
          <div className="text-base-content/40 mx-auto w-72 text-left mt-8">
            <span className="inline-block -translate-y-1 -rotate-12">MY WORK</span>
            <svg className="inline-block h-8 w-20" viewBox="0 0 45 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.50244C23.4 -1.69756 38.3333 11.1691 43 18.0024M43 18.0024L38 17.0024M43 18.0024V13.0024" stroke="currentColor">
              </path>
            </svg>
          </div>
          {/* <div className="grid grid-rows-2 gap-8 mt-8 justify-items-center"> */}
          {/*   <span className="row-span-1 text-md font-bold opacity-30 -rotate-6">MY WORK</span> */}
          {/*   <div className="animate-bounce w-6 h-6 row-span-1"> */}
          {/*     <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"> */}
          {/*       <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path> */}
          {/*     </svg> */}
          {/*   </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
