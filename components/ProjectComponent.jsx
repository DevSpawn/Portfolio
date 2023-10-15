export default function Project(props) {
  return (
    <>
      <div className="grid flex-grow justify-center content-center w-screen min-h-screen bg-base-300">
        <div className="text-neutral-content grid grid-cols-2">
          <div className="hero-content col-span-1 gap-0 grid p-24 bg-base-300 place-content-center">
            <h1 className="mb-5 text-5xl font-bold">
              {props.heading}
            </h1>
            <p className="mb-5">
              {props.description}
            </p>
            <div className="text-lg font-semibold">
              Creative Stack
            </div>
            <div className="w-fit font-mono pb-8">
              {props.stack}
            </div>
            <button className="btn btn-primary w-fit">
              Explore Project
            </button>
          </div>
          <div className="col-span-1 p-8 bg-base-300 px-0">
            <div className="artboard artboard-horizontal h-screen bg-base-100 rounded-lg bg-gradient-to-r from-primary">
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
