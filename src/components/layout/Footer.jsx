import Image from "next/image"

export default function Footer() {
  return (
    <>
        <section className="w-full mx-auto bg-[url-('/retellai/public/images/')]">
            <div>
<div>
   Built to Scale, 
</div>

            </div>
            <div>
            </div>
            <div>
                <Image
                src={'/images/logo.svg'}
                alt="footer logo"
                width={100}
                height={100}
                className="object-cover"></Image>
            </div>
        </section>
    </>
  )
}
