import { BlogPosts } from 'app/components/posts'
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-semibold">
        In the loop: AI & UX
      </h1> */}
      <p className="lg:text-2xl, font-bold">
        {`Hi, my name is Sebastian 👋🏽` }
      </p>
      <br/>
      <p className="mb-4">{`Lead UX architecture design & engineering` }</p>

      {/* <div className="mb-8">
      <Image
      src="/images/profile.jpg"
       alt="Sebastian (and Mr. Mio) at work, in the kitchen"
       width={400}
       height={400}
       className="rounded-lg"
       priority
       />
       </div>     */}
       <p className="mb-2">
      {`With 20 years of experience in building digital products for start-ups, scale-ups & enterprise sized companies, I make sure we're building the right thing`}
      </p>  
      <br></br>
      <div className="mb-8">
        <p>Some companies I recently worked with</p>
        <br></br>
        <div className="flex gap-8 items-end justify-start">
          
        <div className="flex flex-col items-center">
            <Image
              src="/images/companies/Porsche_logo.svg"
              alt="Porsche"
              width={50}
              height={25}
              className="max-w-[50px] h-auto"
            />
            <br></br>
            <span>
                <p id='logoname' className="text-xs text-center align-text-bottom">Porsche</p>
              </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/companies/IBM_logo.svg"
              alt="IBM"
              width={70}
              height={25}
              className="max-w-[70px] h-auto"
            />
            <br></br>
            <span>
                <p id='logoname' className="text-xs text-center align-text-bottom">IBM</p>
              </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/companies/miele__logo.svg"
              alt="IBM"
              width={70}
              height={25}
              className="max-w-[70px] h-auto"
            />
            <br></br>
            <span>
                <p id='logoname' className="text-xs text-center align-text-bottom">Miele</p>
              </span>
          </div>
          
          <div className="flex flex-col items-center">
            <Image
              src="/images/companies/logo_Sonderform.svg"
              alt="Sonderform"
              width={50}
              height={25}
              className="max-w-[50px] h-auto"
            />
            <br></br>
            <span>
                <p id='logoname' className="text-xs text-center align-text-bottom">Techniker</p>
              </span>
          </div>
         
          <div className="flex flex-col items-center">
            <Image
              src="/images/companies/Deutsche_Bahn_AG-Logo.svg"
              alt="Deutsche Bahn"
              width={50}
              height={25}
              className="max-w-[50px] h-auto"
            />
            <br></br>
            <span>
                <p id='logoname' className="text-xs text-center align-text-bottom">Deutsche Bahn</p>
              </span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/companies/kantonalbank_logo.svg"
              alt="Deutsche Bahn"
              width={50}
              height={25}
              className="max-w-[50px] h-auto"
            />
            <br></br>
            <span>
                <p   className="text-xs text-center align-text-bottom">ZKB</p>
              </span>
          </div>

        </div>
      </div>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  )
}
