
import Button from "../ui/Button";

const useCases = [
  "Receptionist",
  "Appointment Setter",
  "Lead Qualification",
  "Customer Service",
  "Debt Collection",
  "Survey",
];

export default function HomeVid() {
  return (
    <>
      <section
        className="
          pt-[var(--homevid-section-padding-top)]
          px-[var(--homevid-section-padding-x)]
          flex flex-col
          gap-[var(--homevid-section-gap)]
          xl:w-[var(--homevid-section-width)]
          xl:max-w-[var(--homevid-section-max-width)]
          xl:mx-auto
        "
      >
        <div>
          <div className="mb-[var(--homevid-heading-margin-bottom)]">
            <h2
  className="
    w-full
    text-[length:var(--homevid-heading-font-size)]
    leading-[var(--homevid-heading-line-height)]
    font-light flex justify-center
    lg:text-[length:var(--homevid-heading-font-size-lg)]
    items-center text-center font-thin
  "
>
  Try Our
  <br />
  Live Demo
</h2>
          </div>

          <div className="flex flex-col w-full mx-auto md:flex md:flex-row">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--homevid-grid-gap)] w-full">
              <div
                className="
                  border-1 flex flex-col-reverse relative mx-auto w-full
                  min-w-[var(--homevid-video-min-width)]
                  overflow-hidden
                  rounded-[var(--homevid-video-border-radius)]
                  bg-[#f5f5fa00] border-[#d9daee]
                  p-[var(--homevid-video-padding)]
                "
              >
                <div className="pb-[var(--homevid-video-bottom-padding)]">
                  <div className="mb-[var(--homevid-video-content-margin)]">
                    <div className="pt-[var(--homevid-video-content-padding-top)]">
                      <div
                        className="
                          flex flex-wrap
                          gap-[var(--homevid-tag-gap)]
                          justify-center items-center
                        "
                      >
                        {useCases.map((item, index) => (
                          <div key={index}>
                            <label
                              htmlFor=""
                              className="
                                inline-flex items-center justify-center cursor-pointer
                                text-[var(--homevid-text-color)]
                                tracking-[-0.04em] bg-[#f5f5fa]
                                rounded-[var(--homevid-tag-border-radius)]
                                min-h-[var(--homevid-tag-min-height)]
                                min-w-[var(--homevid-tag-min-width)]
                                mb-0
                                px-[var(--homevid-tag-padding-x)]
                                text-[var(--homevid-tag-font-size)]
                                font-medium leading-[90%]
                                [text-decoration]
                                transition-[color,background-color] duration-300
                              "
                            >
                              <span>{item}</span>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center justify-center w-full">
                  <div className="">
                    <div className="w-100 h-100 overflow-hidden">
                      <div className="relative w-[100%] h-[100%] block overflow-hidden">
                        <video
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="
                            absolute top-1/2 left-1/2
                            h-[100%] w-[100%]
                            -translate-x-1/2 -translate-y-1/2
                            object-contain
                            [filter:brightness(1.01)_contrast(1.05)]
                            [mask-image:radial-gradient(closest-side,black_75%,transparent_100%)]
                            [-webkit-mask-image:radial-gradient(closest-side,black_75%,transparent_100%)]
                          "
                        >
                          <source src="/videos/try-demo.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#f5f5fa] rounded-[var(--homevid-form-border-radius)] p-[var(--homevid-form-padding)]">
                <div className="px-auto">
                  <div className="flex justify-center items-start flex-col gap-y-[var(--homevid-form-content-gap)]">
                    <div className="min-w-[var(--homevid-description-min-width)]">
                      <div
  className="
    text-[length:var(--homevid-description-font-size)]
    leading-[1.1]
    tracking-[var(--homevid-description-letter-spacing)]
    w-[var(--homevid-description-width)]
  "
>
  Receive a live call from our agent and discover how our
  AI caller transforms customer conversations.
</div>
                    </div>

                    <div className="flex flex-col items-start pt-[var(--homevid-form-padding-top)] gap-[var(--homevid-form-gap)]">
                      <form
                        className="
                          flex flex-col
                          pt-[var(--homevid-form-top-padding)]
                          flex-1
                          w-[var(--homevid-form-width)]
                        "
                      >
                        <label
                          htmlFor=""
                          className="
                            text-[var(--homevid-label-color)]
                            text-[var(--homevid-form-label-font-size)]
                            mb-[var(--homevid-form-label-margin-bottom)]
                          "
                        >
                          Use Case
                        </label>

                        <select
                          name=""
                          id=""
                          className="
                            mb-[var(--homevid-input-margin-bottom)]
                            text-[length:var(--homevid-input-font-size)]
                            text-[length:var(--homevid-form-label-font-size)]
                            border-b-2 cursor-pointer
                          "
                        >
                          <option value="">Select Your Use Case</option>
                          <option value="">Receptionist</option>
                          <option value="">Appointment Setter</option>
                          <option value="">Lead Qualification</option>
                          <option value="">Customer Service</option>
                          <option value="">Debt Collection</option>
                          <option value="">Survey</option>
                        </select>

                        <label
                          htmlFor=""
                          className="
                            text-[var(--homevid-label-color)]
                            text-[length:var(--homevid-form-label-font-size)]
                            mb-[var(--homevid-form-label-margin-bottom)]
                          "
                        >
                          Name
                        </label>

                        <input
                          type="text"
                          className="
                            mb-[var(--homevid-input-margin-bottom)]
                            text-[length:var(--homevid-input-font-size)]
                            text-[var(--homevid-input-font-size)]
                            border-b-2 placeholder:text-black
                          "
                          placeholder="Your Name"
                        />

                        <label
                          htmlFor=""
                          className="
                            text-[var(--homevid-label-color)]
                            text-[length:var(--homevid-form-label-font-size)]
                            mb-[var(--homevid-form-label-margin-bottom)]
                          "
                        >
                          Phone Number
                        </label>

                        <input
                          type="text"
                          className="
                            mb-[var(--homevid-input-margin-bottom)]
                            h-[var(--homevid-input-height)]
                            text-[length:var(--homevid-input-font-size)]
                            border-b-2 placeholder:text-black
                          "
                          placeholder="+15551234567"
                        />
                      </form>

                      <Button className="bg-[#00122e] text-white">
                        Get a Call
                      </Button>
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
