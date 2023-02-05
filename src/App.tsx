/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <main>
      <article className="bg-white p-4 pb-10 rounded-[1.25rem] text-center w-80 max-w-full">
        <picture>
          <img
            src="./qr-code.png"
            className="rounded-[0.625rem]"
            alt="QR Code"
          />
        </picture>
        <section className="px-4">
          <h1 className="font-bold leading-7 mt-6 text-[1.375rem] text-dark-navy">
            Improve your front-end skills by building projects
          </h1>
          <p className="mt-4 text-[0.9375rem] text-grey">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </section>
      </article>
    </main>
  )
}
