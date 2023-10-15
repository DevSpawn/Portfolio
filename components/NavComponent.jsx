import Link from 'next/link'

export default () => {
  return (
    <>
      {/* WIP: */}
      {/* Navigation: Contstructed with intersection observation and steps: */}
      {/* : https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver */}
      {/* : https://daisyui.com/components/steps/ */}
      {/* FIX: Currently scroll-y is being used. It needs to be switched to intersection observation- */}
      {/*      due to some obvious contraints */}
      <div className="static">
        <div className="fixed top-1/2 right-32">
          <div className="object-right max-w-md">
            <ul className="steps steps-vertical">
              <li className="step step-primary"> <Link href="/About">About</Link></li>
              <li className="step"> <Link href="/#work">Work</Link></li>
              <li className="step"> <Link href="/#contact">Contact</Link></li>
              <li className="step"> <Link href="https://devspawn.github.io/">Blog</Link></li>
              <li className="step"> <Link href="/#pilot_study">Pilot Study</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
