import Button from "../ui/Button";

export default function HomeVid() {
  return (
    <>
      {/* <section className="p-[8px] xl:mx-[100px]"> */}
      <section
        className="
          pt-[60px] px-[8px] flex flex-col gap-[60px]
          xl:w-[calc(100%-200px)] xl:max-w-[1400.66px] xl:mx-auto
        "
      >
        <div>
          <div className="mb-[40px] ">
            <h2 className="w-full text-[54px] leading-[70.52px] font-light flex justify-center lg:text-[90px] items-center text-center font-thin ">
              Try Our
              <br />
              Live Demo
            </h2>
          </div>
          <div  className="flex flex-col w-full mx-auto md:flex md:flex-row ">
            {/* <div className="flex flex-col h-auto gap-y-[10px] gap-x-[10px] overflow-hidden"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[10px] w-full">
              <div className="border-1 flex flex-col-reverse relative mx-auto w-full min-w-[359px] overflow-hidden rounded-[20px] bg-[#f5f5fa00] border-[#d9daee] p-[12px]">
                <div className="pb-[30px]">
                  <div className="mb-[32px]">
                    <div className="pt-[40px]">
                      <div className="flex flex-wrap gap-[4px] justify-center items-center">
                        <div>
                          <label
                            htmlFor=""
                            className="inline-flex items-center justify-center cursor-pointer text-[#00122e] tracking-[-0.04em] bg-[#f5f5fa] rounded-[max(6px,0.3125vw)] min-h-[max(32px,1.66667vw)] min-w-[121px] mb-0 px-[max(16px,0.833333vw)] text-[max(12px,0.625vw)] font-medium leading-[90%] [text-decoration] transition-[color,background-color] duration-300"
                          >
                            <span>Receptionist</span>
                          </label>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="inline-flex items-center justify-center cursor-pointer text-[#00122e] tracking-[-0.04em] bg-[#f5f5fa] rounded-[max(6px,0.3125vw)] min-h-[max(32px,1.66667vw)] min-w-[121px] mb-0 px-[max(16px,0.833333vw)] text-[max(12px,0.625vw)] font-medium leading-[90%] [text-decoration] transition-[color,background-color] duration-300"
                          >
                            <span>Appointment Setter</span>
                          </label>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="inline-flex items-center justify-center cursor-pointer text-[#00122e] tracking-[-0.04em] bg-[#f5f5fa] rounded-[max(6px,0.3125vw)] min-w-[121px] min-h-[max(32px,1.66667vw)] mb-0 px-[max(16px,0.833333vw)] text-[max(12px,0.625vw)] font-medium leading-[90%] [text-decoration] transition-[color,background-color] duration-300"
                          >
                            <span>Lead Qualification</span>
                          </label>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="inline-flex items-center justify-center cursor-pointer text-[#00122e] tracking-[-0.04em] bg-[#f5f5fa] min-w-[121px] rounded-[max(6px,0.3125vw)] min-h-[max(32px,1.66667vw)] mb-0 px-[max(16px,0.833333vw)] text-[max(12px,0.625vw)] font-medium leading-[90%] [text-decoration] transition-[color,background-color] duration-300"
                          >
                            <span>Customer Service</span>
                          </label>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="inline-flex items-center justify-center cursor-pointer text-[#00122e] tracking-[-0.04em] min-w-[121px] bg-[#f5f5fa] rounded-[max(6px,0.3125vw)] min-h-[max(32px,1.66667vw)] mb-0 px-[max(16px,0.833333vw)] text-[max(12px,0.625vw)] font-medium leading-[90%] [text-decoration] transition-[color,background-color] duration-300"
                          >
                            <span>Debt Collection</span>
                          </label>
                        </div>
                        <div>
                          <label
                            htmlFor=""
                            className="inline-flex items-center justify-center cursor-pointer text-[#00122e] tracking-[-0.04em] bg-[#f5f5fa] min-w-[121px] rounded-[max(6px,0.3125vw)] min-h-[max(32px,1.66667vw)] mb-0 px-[max(16px,0.833333vw)] text-[max(12px,0.625vw)] font-medium leading-[90%] [text-decoration] transition-[color,background-color] duration-300"
                          >
                            <span>Survey</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  
                  className="flex flex-col items-center justify-center w-full "
                >
                  <div  className="">
                    <div className=" w-100 h-100 overflow-hidden ">
                      <div className="relative w-[100%] h-[100%] block overflow-hidden">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="absolute top-1/2 left-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 object-contain
                                    [filter:brightness(1.01)_contrast(1.05)]
                                    [mask-image:radial-gradient(closest-side,black_75%,transparent_100%)]
                                    [-webkit-mask-image:radial-gradient(closest-side,black_75%,transparent_100%)]"
                        >
                          <source src="/videos/try-demo.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div  className = "bg-[#f5f5fa] rounded-[8px] p-[30px]">
                <div className="px-auto">
                  <div className="flex justify-center items-start flex-col gap-y-[32px]">
                    <div className="min-w-[300px]">
                      <div className="text-[26px] leading-[1.1] tracking-[-2px] w-[300px]">
                        Receive a live call from our agent and discover how our
                        AI caller transforms customer conversations.
                      </div>
                    </div>
                    <div className="flex flex-col items-start pt-[64px] gap-[60px]">
                      <form className="flex flex-col pt-[10px] flex-1 w-[313px]">
                        <label htmlFor="" className="text-[#3e6aef] text-[13px] mb-[5px]">Use Case</label>
                        <select name="" id="" className="mb-[16px] h-[48px] text-[20px] border-b-2 cursor-pointer">
                            <option value="">Select Your Use Case</option>
                            <option value="">Receptionist</option>
                            <option value="">Appointment Setter</option>
                            <option value="">Lead Qualification</option>
                            <option value="">Customer Service</option>
                            <option value="">Debt Collection</option>
                            <option value="">Survey</option>
                        </select>
                        <label htmlFor="" className="text-[#3e6aef] text-[13px] mb-[5px]">Name</label>
                        <input type="text" className="mb-[16px] h-[48px] text-[20px] border-b-2 placeholder:text-black" placeholder="Your Name"/>
                        <label htmlFor="" className="text-[#3e6aef] text-[13px] mb-[5px]">Phone Number</label>
                        <input type="text" className="mb-[16px] h-[48px] text-[20px] border-b-2 placeholder:text-black" placeholder="+15551234567"/>
                      </form>
                      <Button className="bg-[#00122e] text-white">Get a Call</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
