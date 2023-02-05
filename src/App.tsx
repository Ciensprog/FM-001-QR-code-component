/*
|-------------------------------------------------------------------------------
| Component
|-------------------------------------------------------------------------------
*/

export function App() {
  return (
    <main>
      <article className="bg-white p-4 rounded-[1.25rem] text-center w-80 max-w-full">
        <picture>
          <img
            src="./qr-code.png"
            className="rounded-[0.625rem]"
            alt="QR Code"
          />
        </picture>
      </article>
    </main>
  )
}
