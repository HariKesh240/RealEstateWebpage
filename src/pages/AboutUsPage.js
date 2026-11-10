import aboutHeroImage from '../img/PropertyDetailsPage/vista-exterior.png';
import aboutImageOne from '../img/PropertyDetailsPage/vista-living.png';
import aboutImageTwo from '../img/PropertyDetailsPage/vista-bedroom.png';

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-start bg-linear-[0deg,#FBF9F50%,#FBF9F5100%),#FF] min-w-screen min-h-screen relative">
      <div className="flex pt-20 flex-col items-start bg-[#FBF9F5] w-full">
        <div className="flex pt-[68px] flex-col justify-end items-start w-full h-[4817px]">
          <div className="flex pt-0 pr-20 pb-20 pl-20 flex-col items-start bg-[#FBF9F5] w-full">
            <div className="inline-grid max-w-[1440px] w-full relative">
              <div className="flex pr-4 flex-col justify-center items-start w-full absolute left-0 top-0">
                <div className="flex pb-2 flex-col items-start w-full">
                  <div className="flex items-center gap-2 w-full">
                    <div className="bg-[#735A35] w-8 h-px"></div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                        OUR PHILOSOPHY &amp; PURPOSE
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pb-4 flex-col items-start w-full">
                  <div className="w-full h-[137px] relative">
                    <p className="text-[#1B1C1A] font-dMSans text-[56px] leading-[68px] w-[377px] h-[68px] absolute left-0 top-px tracking-[-0.02em]">
                      Helping You Find{" "}
                    </p>
                    <p className="text-[#735A35] font-bodoniModa text-[56px] leading-[68px] w-[116px] h-[68px] absolute left-[377px] -top-px tracking-[-0.02em]">
                      More
                    </p>
                    <p className="text-[#1B1C1A] font-dMSans text-[56px] leading-[68px] w-[120px] h-[68px] absolute left-[493px] top-px tracking-[-0.02em]">
                      {" "}
                      Than
                    </p>
                    <p className="text-[#1B1C1A] font-dMSans text-[56px] leading-[68px] w-[340px] h-[68px] absolute left-0 top-[69px] tracking-[-0.02em]">
                      Just a Property.
                    </p>
                  </div>
                </div>
                <div className="flex max-w-[576px] pb-7 flex-col items-start w-[576px]">
                  <div className="flex max-w-[576px] flex-col items-start w-full">
                    <p className="text-[#4E616D] font-manrope text-[17px] leading-7 w-full">
                      Finding the right property is about more than location and
                      price. It is about discovering a place where your future
                      takes shape. We are here to make that journey simpler,
                      smarter, and more meaningful.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap w-full">
                  <div className="flex py-0 px-7 justify-center items-center gap-2 rounded-lg bg-[#0A1E28] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit h-12">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#FFF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                        EXPLORE PROPERTIES
                      </p>
                    </div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75V6.75"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="flex py-0 px-7 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit h-12">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#0A1E28] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                        GET IN TOUCH
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-12 flex-col items-start w-full">
                  <div className="flex pt-12 justify-center items-start gap-6 w-full">
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                          100%
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          VERIFIED PORTFOLIOS
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                          RERA
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          STATE COMPLIANT
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-1 w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                          Bespoke
                        </p>
                      </div>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          PRIVATE CLIENT DESK
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start rounded-2xl bg-[#EAE8E4] shadow-[020px25px-5pxrgba(0,0,0,0.10),08px10px-6pxrgba(0,0,0,0.10)] w-full absolute left-[677px] top-[75px] overflow-hidden relative">
                <img
                  src={aboutHeroImage}
                  className="w-full h-[333px] overflow-hidden max-w-none"
                  alt="AB6AXuAWr7pemx-FEm29YB-6qa1NtcoJ8hQ21ItHAZRvCmDWCxQF4jhUIUmxvlaSxCJIV0T-5c5EjhDTmga6Br5Qg_0RMQTBc5sm8iaasbsQ8nC6mdtVVtNsxCpRkFcuK762HBtSR4CVPD6Fv8io4JaTeA4BZxv9IdQXcg5cjmamPcbQ0P0zZ0T_S3SHkrpknIYw65EJYtNN0TIySsh6sxaLsWn7YFVoafON6DYgXEa7EcAk"
                />
                <div className="absolute -right-0 bg-linear-[0deg,rgba(10,30,40,0.70)0%,rgba(10,30,40,0.00)50%,rgba(10,30,40,0.00)100%] w-[443px] h-[332px]"></div>
                <div className="flex justify-between items-center absolute right-6 bottom-[25px] w-[395px]">
                  <div className="flex flex-col items-start w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                        ARCHITECTURAL DOSSIER
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#FFF] font-dMSans text-[22px] font-light leading-[30px] w-fit">
                        Curated Residences Â· Coimbatore
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center shrink-0 rounded-full bg-[rgba(255,255,255,0.20)] w-10 h-10">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M0 15V4.16667L10.8333 0V7.5H11.6667C11.6667 7.04167 11.8299 6.64931 12.1562 6.32292C12.4826 5.99653 12.875 5.83333 13.3333 5.83333C13.7917 5.83333 14.184 5.99653 14.5104 6.32292C14.8368 6.64931 15 7.04167 15 7.5V15H0V15M1.66667 13.3333H3.33333V13.3333H5V7.5H9.16667V5.83333V5.83333V2.41667L1.66667 5.3125V13.3333V13.3333M6.66667 13.3333H9.16667V10.8333H10.8333V13.3333H13.3333V9.16667H6.66667V13.3333V13.3333M3.33333 5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333V5.83333M10 13.3333V13.3333V13.3333V13.3333V13.3333V13.3333V13.3333V13.3333V13.3333V13.3333M10 12.9167V12.9167V12.9167V12.9167V12.9167V12.9167"
                        fill="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-20 flex-col items-start bg-[#F5F3EF] w-full">
            <div className="inline-grid max-w-[1440px] w-full relative">
              <div className="flex flex-col justify-center items-start w-full absolute left-[580px] top-3">
                <div className="flex pb-2 flex-col items-start w-full">
                  <div className="flex items-center gap-2 w-full">
                    <div className="bg-[#735A35] w-6 h-px"></div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                        THE HAVEN NARRATIVE
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pb-4 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#1B1C1A] font-dMSans text-[40px] leading-[48px] w-full tracking-[-0.01em]">
                      Every Great Journey Begins with a Place to Call Home.
                    </p>
                  </div>
                </div>
                <div className="flex pb-7 flex-col items-start w-full">
                  <div className="flex flex-col items-start gap-4 w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[27px] w-full">
                        We believe finding the right property should feel
                        exciting, not overwhelming. That is why we are building
                        a platform that brings property discovery, useful
                        information, and meaningful connections together in one
                        place.
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[27px] w-full">
                        From exploring your first home to discovering the right
                        investment opportunity, our goal is to make every step
                        of your property journey clearer and more convenient.
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[27px] w-full">
                        Because behind every property search is a person, a
                        family, or a dream worth finding the right space for.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-6 items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-3.5 "
                  >
                    <path
                      d="M1.98333 14L4.66667 9.33333V9.33333V9.33333C3.38333 9.33333 2.28472 8.87639 1.37083 7.9625C0.456944 7.04861 0 5.95 0 4.66667C0 3.38333 0.456944 2.28472 1.37083 1.37083C2.28472 0.456944 3.38333 0 4.66667 0C5.95 0 7.04861 0.456944 7.9625 1.37083C8.87639 2.28472 9.33333 3.38333 9.33333 4.66667C9.33333 5.11389 9.27986 5.52708 9.17292 5.90625C9.06597 6.28542 8.90556 6.65 8.69167 7L4.66667 14H1.98333V14M12.4833 14L15.1667 9.33333V9.33333V9.33333C13.8833 9.33333 12.7847 8.87639 11.8708 7.9625C10.9569 7.04861 10.5 5.95 10.5 4.66667C10.5 3.38333 10.9569 2.28472 11.8708 1.37083C12.7847 0.456944 13.8833 0 15.1667 0C16.45 0 17.5486 0.456944 18.4625 1.37083C19.3764 2.28472 19.8333 3.38333 19.8333 4.66667C19.8333 5.11389 19.7799 5.52708 19.6729 5.90625C19.566 6.28542 19.4056 6.65 19.1917 7L15.1667 14H12.4833V14M4.66667 6.41667C5.15278 6.41667 5.56597 6.24653 5.90625 5.90625C6.24653 5.56597 6.41667 5.15278 6.41667 4.66667C6.41667 4.18056 6.24653 3.76736 5.90625 3.42708C5.56597 3.08681 5.15278 2.91667 4.66667 2.91667C4.18056 2.91667 3.76736 3.08681 3.42708 3.42708C3.08681 3.76736 2.91667 4.18056 2.91667 4.66667C2.91667 5.15278 3.08681 5.56597 3.42708 5.90625C3.76736 6.24653 4.18056 6.41667 4.66667 6.41667V6.41667M15.1667 6.41667C15.6528 6.41667 16.066 6.24653 16.4062 5.90625C16.7465 5.56597 16.9167 5.15278 16.9167 4.66667C16.9167 4.18056 16.7465 3.76736 16.4062 3.42708C16.066 3.08681 15.6528 2.91667 15.1667 2.91667C14.6806 2.91667 14.2674 3.08681 13.9271 3.42708C13.5868 3.76736 13.4167 4.18056 13.4167 4.66667C13.4167 5.15278 13.5868 5.56597 13.9271 5.90625C14.2674 6.24653 14.6806 6.41667 15.1667 6.41667V6.41667M15.1667 4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667M4.66667 4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667V4.66667"
                      fill="#735A35"
                    />
                  </svg>
                  <div className="flex flex-col justify-center items-start gap-2 w-[448px] h-[74px]">
                    <div className="flex pb-px flex-col items-start w-[448px]">
                      <p className="text-[#1B1C1A] font-bodoniModa text-lg font-medium leading-[24.75px] w-fit">
                        &quot;Architecture with intention, transactions grounded
                        in integrity.&quot;
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[448px]">
                      <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                        HAVEN ESTATES CHARTER PRINCIPLE
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-6 w-full absolute left-0 top-0">
                <div className="flex flex-col justify-center items-start rounded-xl bg-[#F0EEEA] shadow-[04px6px-1pxrgba(0,0,0,0.10),02px4px-2pxrgba(0,0,0,0.10)] w-full overflow-hidden relative">
                  <img
                    src={aboutImageOne}
                    className="w-full h-[338px] overflow-hidden max-w-none"
                    alt="AB6AXuAAVBSdlulLZwP9L5aRMBQIRhqSUuDjuglMqEO1eLNs7yMN28BsbR17Ye2SMA_64PGLbwxGlvVCXM8zHl_Xcq0W3kqPBQ3-lCPFl7GIbuxUl7OvxJcWJROFcoq6ZbV_KNjqOShbFSusCOY2nMelCzWW86XPDTS7VL98LyC7HwfGb91BjzdIvuvlc6LPIsz0mMOaGxUg8Td-1lta1_rdsgIO7hNSFNtC-EFWxr5-I5nq"
                  />
                  <div className="flex py-1.5 px-3 flex-col items-start absolute left-4 top-4 rounded bg-[rgba(251,249,245,0.90)] w-fit">
                    <p className="text-[#1B1C1A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                      SANCTUARY INTERIORS
                    </p>
                  </div>
                </div>
                <div className="inline-grid w-full relative">
                  <div className="flex p-5 flex-col items-start gap-1 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full absolute left-[329px] top-[85px]">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#735A35] font-dMSans text-[28px] font-light leading-9 w-full">
                        12+ Yrs
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E616D] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                        REFINING COIMBATORE'S REAL ESTATE LANDSCAPE
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-full h-[197px] absolute left-0 top-0">
                    <div className="flex flex-col justify-center items-start rounded-xl bg-[#F0EEEA] shadow-[04px6px-1pxrgba(0,0,0,0.10),02px4px-2pxrgba(0,0,0,0.10)] w-[305px] overflow-hidden">
                      <img
                    src={aboutImageTwo}
                        className="w-full h-[229px] overflow-hidden max-w-none"
                        alt="AB6AXuDck_eq2kGtaGu6h8C-I9AcIBf6MuZLiwVlPotyUfMChFlq4eHptsHuI3Ey5tsojyub0f9uKCDNa8cFkfSpxapjADoSk5bpoNOiELM-KlFqbA8EmNjnQbgd73mREMwDmvkDaCzpJZCAn_mEUZntTSZjOjB0tJPKvWNwqJ5wkKuEn6gCYbgnOsUvRuAWxsdRJ0t_ksyFvIzUS9uhf-UHqzYYDJvtUFgkvMpYVfCPs-6d"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-20 flex-col items-start bg-[#FFF] w-full">
            <div className="flex max-w-[1440px] flex-col items-start gap-12 w-full">
              <div className="flex max-w-[672px] pt-2 flex-col items-start gap-1 w-[672px]">
                <div className="flex items-center gap-2 w-fit">
                  <div className="bg-[#735A35] w-6 h-px"></div>
                  <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                    PURPOSE &amp; ASPIRATION
                  </p>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#1B1C1A] font-dMSans text-[40px] leading-[48px] w-full tracking-[-0.01em]">
                    Guiding Every Step Forward
                  </p>
                </div>
              </div>
              <div className="flex max-w-[1152px] justify-center items-start gap-10 w-full">
                <div className="rounded-2xl bg-[#F5F3EF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-[356px] relative">
                  <div className="flex justify-center items-center rounded-full bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-14 h-14 absolute left-10 top-10">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M6.41667 16.9167L14.5833 14.5833L16.9167 6.41667L8.75 8.75L6.41667 16.9167V16.9167M11.6667 13.4167C11.1806 13.4167 10.7674 13.2465 10.4271 12.9062C10.0868 12.566 9.91667 12.1528 9.91667 11.6667C9.91667 11.1806 10.0868 10.7674 10.4271 10.4271C10.7674 10.0868 11.1806 9.91667 11.6667 9.91667C12.1528 9.91667 12.566 10.0868 12.9062 10.4271C13.2465 10.7674 13.4167 11.1806 13.4167 11.6667C13.4167 12.1528 13.2465 12.566 12.9062 12.9062C12.566 13.2465 12.1528 13.4167 11.6667 13.4167V13.4167M11.6667 23.3333C10.0528 23.3333 8.53611 23.0271 7.11667 22.4146C5.69722 21.8021 4.4625 20.9708 3.4125 19.9208C2.3625 18.8708 1.53125 17.6361 0.91875 16.2167C0.30625 14.7972 0 13.2806 0 11.6667C0 10.0528 0.30625 8.53611 0.91875 7.11667C1.53125 5.69722 2.3625 4.4625 3.4125 3.4125C4.4625 2.3625 5.69722 1.53125 7.11667 0.91875C8.53611 0.30625 10.0528 0 11.6667 0C13.2806 0 14.7972 0.30625 16.2167 0.91875C17.6361 1.53125 18.8708 2.3625 19.9208 3.4125C20.9708 4.4625 21.8021 5.69722 22.4146 7.11667C23.0271 8.53611 23.3333 10.0528 23.3333 11.6667C23.3333 13.2806 23.0271 14.7972 22.4146 16.2167C21.8021 17.6361 20.9708 18.8708 19.9208 19.9208C18.8708 20.9708 17.6361 21.8021 16.2167 22.4146C14.7972 23.0271 13.2806 23.3333 11.6667 23.3333V23.3333M11.6667 21C14.2528 21 16.4549 20.091 18.2729 18.2729C20.091 16.4549 21 14.2528 21 11.6667C21 9.08056 20.091 6.87847 18.2729 5.06042C16.4549 3.24236 14.2528 2.33333 11.6667 2.33333C9.08056 2.33333 6.87847 3.24236 5.06042 5.06042C3.24236 6.87847 2.33333 9.08056 2.33333 11.6667C2.33333 14.2528 3.24236 16.4549 5.06042 18.2729C6.87847 20.091 9.08056 21 11.6667 21V21M11.6667 11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667"
                        fill="#735A35"
                      />
                    </svg>
                  </div>
                  <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-[111px] h-4 absolute left-10 top-[124px] tracking-[0.1em]">
                    OUR FOUNDATION
                  </p>
                  <div className="flex flex-col items-start w-[460px] absolute left-10 top-[148px]">
                    <p className="text-[#1B1C1A] font-dMSans text-[28px] font-semibold leading-9 w-fit">
                      Our Mission
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-[460px] absolute left-10 top-[199px]">
                    <p className="text-[#4E616D] font-manrope text-sm font-medium leading-[22.75px] w-fit">
                      To simplify the property discovery experience by
                      connecting people with the right properties through
                      transparency, convenience, and a user-focused approach.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-[460px] absolute left-10 top-[300px]">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                        DISCOVER METHODOLOGY
                      </p>
                    </div>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6V6"
                        fill="#735A35"
                      />
                    </svg>
                  </div>
                </div>
                <div className="rounded-2xl bg-[#0A1E28] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-[356px] relative">
                  <div className="flex justify-center items-center rounded-full bg-[rgba(255,255,255,0.10)] w-14 h-14 absolute left-10 top-10">
                    <svg
                      width="26"
                      height="18"
                      viewBox="0 0 26 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M12.8333 14C14.2917 14 15.5313 13.4896 16.5521 12.4688C17.5729 11.4479 18.0833 10.2083 18.0833 8.75C18.0833 7.29167 17.5729 6.05208 16.5521 5.03125C15.5313 4.01042 14.2917 3.5 12.8333 3.5C11.375 3.5 10.1354 4.01042 9.11458 5.03125C8.09375 6.05208 7.58333 7.29167 7.58333 8.75C7.58333 10.2083 8.09375 11.4479 9.11458 12.4688C10.1354 13.4896 11.375 14 12.8333 14V14M12.8333 11.9C11.9583 11.9 11.2146 11.5938 10.6021 10.9812C9.98958 10.3687 9.68333 9.625 9.68333 8.75C9.68333 7.875 9.98958 7.13125 10.6021 6.51875C11.2146 5.90625 11.9583 5.6 12.8333 5.6C13.7083 5.6 14.4521 5.90625 15.0646 6.51875C15.6771 7.13125 15.9833 7.875 15.9833 8.75C15.9833 9.625 15.6771 10.3687 15.0646 10.9812C14.4521 11.5938 13.7083 11.9 12.8333 11.9V11.9M12.8333 17.5C9.99444 17.5 7.40833 16.7076 5.075 15.1229C2.74167 13.5382 1.05 11.4139 0 8.75C1.05 6.08611 2.74167 3.96181 5.075 2.37708C7.40833 0.792361 9.99444 0 12.8333 0C15.6722 0 18.2583 0.792361 20.5917 2.37708C22.925 3.96181 24.6167 6.08611 25.6667 8.75C24.6167 11.4139 22.925 13.5382 20.5917 15.1229C18.2583 16.7076 15.6722 17.5 12.8333 17.5V17.5M12.8333 8.75V8.75V8.75V8.75V8.75V8.75V8.75V8.75V8.75V8.75M12.8333 15.1667C15.0306 15.1667 17.0479 14.5882 18.8854 13.4312C20.7229 12.2743 22.1278 10.7139 23.1 8.75C22.1278 6.78611 20.7229 5.22569 18.8854 4.06875C17.0479 2.91181 15.0306 2.33333 12.8333 2.33333C10.6361 2.33333 8.61875 2.91181 6.78125 4.06875C4.94375 5.22569 3.53889 6.78611 2.56667 8.75C3.53889 10.7139 4.94375 12.2743 6.78125 13.4312C8.61875 14.5882 10.6361 15.1667 12.8333 15.1667V15.1667"
                        fill="#FFDDAF"
                      />
                    </svg>
                  </div>
                  <p className="text-[#FFDDAF] font-manrope text-[11px] font-bold leading-4 w-[88px] h-4 absolute left-10 top-[124px] tracking-[0.1em]">
                    OUR HORIZON
                  </p>
                  <div className="flex flex-col items-start w-[460px] absolute left-10 top-[148px]">
                    <p className="text-[#FFF] font-dMSans text-[28px] font-semibold leading-9 w-fit">
                      Our Vision
                    </p>
                  </div>
                  <div className="flex pb-px flex-col items-start w-[460px] absolute left-10 top-[199px]">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-[22.75px] w-fit">
                      To become a trusted destination for property discovery,
                      where finding, exploring, and connecting with the right
                      property feels effortless.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 w-[460px] absolute left-10 top-[278px]">
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                        LONG-TERM VISION MAP
                      </p>
                    </div>
                    <svg
                      width="11"
                      height="11"
                      viewBox="0 0 11 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6V6"
                        fill="#FFDDAF"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-20 flex-col items-start bg-[#FBF9F5] w-full">
            <div className="flex max-w-[1440px] flex-col items-center gap-12 w-full">
              <div className="flex max-w-[672px] pt-2 flex-col items-center gap-1 w-[672px]">
                <button className="cursor-pointer text-nowrap flex justify-center items-center gap-2 w-fit">
                  <div className="bg-[#735A35] w-6 h-px"></div>
                  <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                    DISTINCT VALUE
                  </p>
                  <div className="bg-[#735A35] w-6 h-px"></div>
                </button>
                <div className="flex flex-col items-center w-full">
                  <p className="text-[#1B1C1A] font-dMSans text-[40px] leading-[48px] w-fit tracking-[-0.01em]">
                    Why People Choose Us
                  </p>
                </div>
                <div className="flex pt-[7px] pr-0 pb-px pl-0 flex-col items-center w-full">
                  <p className="text-[#4E616D] font-manrope text-sm font-medium leading-[22.75px] w-fit">
                    We focus on what matters most to property seekers: reliable
                    information, a simple experience, and support when it
                    matters.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-start gap-6 w-full">
                <div className="flex p-8 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.14em]">
                          01 &#x2F; CURATION
                        </p>
                      </div>
                      <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-10 h-10">
                        <svg
                          width="19"
                          height="17"
                          viewBox="0 0 19 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M9.16667 16.25C8.5 15.7222 7.77778 15.3125 7 15.0208C6.22222 14.7292 5.41667 14.5833 4.58333 14.5833C4 14.5833 3.42708 14.6597 2.86458 14.8125C2.30208 14.9653 1.76389 15.1806 1.25 15.4583C0.958333 15.6111 0.677083 15.6042 0.40625 15.4375C0.135417 15.2708 0 15.0278 0 14.7083V4.66667C0 4.51389 0.0381944 4.36806 0.114583 4.22917C0.190972 4.09028 0.305556 3.98611 0.458333 3.91667C1.09722 3.58333 1.76389 3.33333 2.45833 3.16667C3.15278 3 3.86111 2.91667 4.58333 2.91667C5.38889 2.91667 6.17708 3.02083 6.94792 3.22917C7.71875 3.4375 8.45833 3.75 9.16667 4.16667V14.25C9.875 13.8056 10.6181 13.4722 11.3958 13.25C12.1736 13.0278 12.9583 12.9167 13.75 12.9167C14.25 12.9167 14.7396 12.9583 15.2188 13.0417C15.6979 13.125 16.1806 13.25 16.6667 13.4167V13.4167V13.4167V3.41667C16.875 3.48611 17.0799 3.55903 17.2812 3.63542C17.4826 3.71181 17.6806 3.80556 17.875 3.91667C18.0278 3.98611 18.1424 4.09028 18.2188 4.22917C18.2951 4.36806 18.3333 4.51389 18.3333 4.66667V14.7083C18.3333 15.0278 18.1979 15.2708 17.9271 15.4375C17.6562 15.6042 17.375 15.6111 17.0833 15.4583C16.5694 15.1806 16.0312 14.9653 15.4688 14.8125C14.9062 14.6597 14.3333 14.5833 13.75 14.5833C12.9167 14.5833 12.1111 14.7292 11.3333 15.0208C10.5556 15.3125 9.83333 15.7222 9.16667 16.25V16.25M10.8333 12.0833V4.16667L15 0V8.33333L10.8333 12.0833V12.0833M7.5 13.4375V5.1875C7.04167 4.99306 6.56597 4.84375 6.07292 4.73958C5.57986 4.63542 5.08333 4.58333 4.58333 4.58333C4.06944 4.58333 3.56944 4.63194 3.08333 4.72917C2.59722 4.82639 2.125 4.97222 1.66667 5.16667V5.16667V5.16667V13.4375V13.4375V13.4375C2.15278 13.2569 2.63542 13.125 3.11458 13.0417C3.59375 12.9583 4.08333 12.9167 4.58333 12.9167C5.08333 12.9167 5.57292 12.9583 6.05208 13.0417C6.53125 13.125 7.01389 13.2569 7.5 13.4375V13.4375M7.5 13.4375V13.4375V13.4375V13.4375V13.4375V13.4375V13.4375V5.1875V5.1875V5.1875V5.1875V5.1875V5.1875V5.1875V13.4375V13.4375"
                            fill="#1B1C1A"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        Carefully Presented Listings
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        Explore properties with clear descriptions, essential
                        details, and thoughtfully organized architectural
                        information.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          DOSSIER CURATION
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-8 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.14em]">
                          02 &#x2F; DISCOVERY
                        </p>
                      </div>
                      <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-10 h-10">
                        <svg
                          width="17"
                          height="11"
                          viewBox="0 0 17 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M0 10.8333V9.16667H8.33333V10.8333H0V10.8333M0 6.66667V5H4.16667V6.66667H0V6.66667M0 2.5V0.833333H4.16667V2.5H0V2.5M15.5 10.8333L12.2917 7.625C11.9583 7.86111 11.5938 8.03819 11.1979 8.15625C10.8021 8.27431 10.4028 8.33333 10 8.33333C8.84722 8.33333 7.86458 7.92708 7.05208 7.11458C6.23958 6.30208 5.83333 5.31944 5.83333 4.16667C5.83333 3.01389 6.23958 2.03125 7.05208 1.21875C7.86458 0.40625 8.84722 0 10 0C11.1528 0 12.1354 0.40625 12.9479 1.21875C13.7604 2.03125 14.1667 3.01389 14.1667 4.16667C14.1667 4.56944 14.1076 4.96875 13.9896 5.36458C13.8715 5.76042 13.6944 6.125 13.4583 6.45833L16.6667 9.66667L15.5 10.8333V10.8333M10 6.66667C10.6944 6.66667 11.2847 6.42361 11.7708 5.9375C12.2569 5.45139 12.5 4.86111 12.5 4.16667C12.5 3.47222 12.2569 2.88194 11.7708 2.39583C11.2847 1.90972 10.6944 1.66667 10 1.66667C9.30556 1.66667 8.71528 1.90972 8.22917 2.39583C7.74306 2.88194 7.5 3.47222 7.5 4.16667C7.5 4.86111 7.74306 5.45139 8.22917 5.9375C8.71528 6.42361 9.30556 6.66667 10 6.66667V6.66667"
                            fill="#1B1C1A"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        A Simpler Property Search
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        Discover properties through an intuitive experience
                        designed to save your valuable time and effortless
                        exploration.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          INTELLIGENT FILTER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-8 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.14em]">
                          03 &#x2F; INTEGRITY
                        </p>
                      </div>
                      <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-10 h-10">
                        <svg
                          width="14"
                          height="17"
                          viewBox="0 0 14 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M5.79167 11.2917L10.5 6.58333L9.3125 5.39583L5.79167 8.91667L4.04167 7.16667L2.85417 8.35417L5.79167 11.2917V11.2917M6.66667 16.6667C4.73611 16.1806 3.14236 15.0729 1.88542 13.3438C0.628472 11.6146 0 9.69444 0 7.58333V2.5L6.66667 0L13.3333 2.5V7.58333C13.3333 9.69444 12.7049 11.6146 11.4479 13.3438C10.191 15.0729 8.59722 16.1806 6.66667 16.6667V16.6667M6.66667 14.9167C8.11111 14.4583 9.30556 13.5417 10.25 12.1667C11.1944 10.7917 11.6667 9.26389 11.6667 7.58333V3.64583L6.66667 1.77083L1.66667 3.64583V7.58333C1.66667 9.26389 2.13889 10.7917 3.08333 12.1667C4.02778 13.5417 5.22222 14.4583 6.66667 14.9167V14.9167M6.66667 8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333"
                            fill="#1B1C1A"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        Transparency Matters
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        We believe better property decisions begin with
                        unambiguous titles, clear documentation, and honest
                        communication.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          STATUTORY FILINGS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-8 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-between items-center w-full">
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.14em]">
                          04 &#x2F; GUIDANCE
                        </p>
                      </div>
                      <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-10 h-10">
                        <svg
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M7.5 15V13.3333H14.1667V13.3333V13.3333V7.41667C14.1667 5.79167 13.6007 4.41319 12.4688 3.28125C11.3368 2.14931 9.95833 1.58333 8.33333 1.58333C6.70833 1.58333 5.32986 2.14931 4.19792 3.28125C3.06597 4.41319 2.5 5.79167 2.5 7.41667V12.5H1.66667C1.20833 12.5 0.815972 12.3368 0.489583 12.0104C0.163194 11.684 0 11.2917 0 10.8333V9.16667C0 8.875 0.0729167 8.60069 0.21875 8.34375C0.364583 8.08681 0.569444 7.88194 0.833333 7.72917L0.895833 6.625C1.00694 5.68056 1.28125 4.80556 1.71875 4C2.15625 3.19444 2.70486 2.49306 3.36458 1.89583C4.02431 1.29861 4.78125 0.833333 5.63542 0.5C6.48958 0.166667 7.38889 0 8.33333 0C9.27778 0 10.1736 0.166667 11.0208 0.5C11.8681 0.833333 12.625 1.29514 13.2917 1.88542C13.9583 2.47569 14.5069 3.17361 14.9375 3.97917C15.3681 4.78472 15.6458 5.65972 15.7708 6.60417L15.8333 7.6875C16.0972 7.8125 16.3021 8 16.4479 8.25C16.5938 8.5 16.6667 8.76389 16.6667 9.04167V10.9583C16.6667 11.2361 16.5938 11.5 16.4479 11.75C16.3021 12 16.0972 12.1875 15.8333 12.3125V13.3333C15.8333 13.7917 15.6701 14.184 15.3438 14.5104C15.0174 14.8368 14.625 15 14.1667 15H7.5V15M5.83333 9.16667C5.59722 9.16667 5.39931 9.08681 5.23958 8.92708C5.07986 8.76736 5 8.56944 5 8.33333C5 8.09722 5.07986 7.89931 5.23958 7.73958C5.39931 7.57986 5.59722 7.5 5.83333 7.5C6.06944 7.5 6.26736 7.57986 6.42708 7.73958C6.58681 7.89931 6.66667 8.09722 6.66667 8.33333C6.66667 8.56944 6.58681 8.76736 6.42708 8.92708C6.26736 9.08681 6.06944 9.16667 5.83333 9.16667V9.16667M10.8333 9.16667C10.5972 9.16667 10.3993 9.08681 10.2396 8.92708C10.0799 8.76736 10 8.56944 10 8.33333C10 8.09722 10.0799 7.89931 10.2396 7.73958C10.3993 7.57986 10.5972 7.5 10.8333 7.5C11.0694 7.5 11.2674 7.57986 11.4271 7.73958C11.5868 7.89931 11.6667 8.09722 11.6667 8.33333C11.6667 8.56944 11.5868 8.76736 11.4271 8.92708C11.2674 9.08681 11.0694 9.16667 10.8333 9.16667V9.16667M3.35417 7.875C3.25694 6.40278 3.70139 5.13889 4.6875 4.08333C5.67361 3.02778 6.90278 2.5 8.375 2.5C9.61111 2.5 10.6979 2.89236 11.6354 3.67708C12.5729 4.46181 13.1389 5.46528 13.3333 6.6875C12.0694 6.67361 10.9062 6.33333 9.84375 5.66667C8.78125 5 7.96528 4.09722 7.39583 2.95833C7.17361 4.06944 6.70486 5.05903 5.98958 5.92708C5.27431 6.79514 4.39583 7.44444 3.35417 7.875V7.875"
                            fill="#1B1C1A"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        Support Along the Way
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        From your initial inquiry through structural review and
                        closing steps, we are here to make your journey
                        smoother.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          CLIENT DESK 24&#x2F;7
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-20 flex-col items-start bg-[#F5F3EF] w-full">
            <div className="flex max-w-[1440px] flex-col items-start gap-12 w-full">
              <div className="flex justify-between items-end w-full">
                <div className="flex pt-2 flex-col items-start gap-1 w-fit">
                  <div className="flex items-center gap-2 w-fit">
                    <div className="bg-[#735A35] w-6 h-px"></div>
                    <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                      ETHOS &amp; FOUNDATION
                    </p>
                  </div>
                  <p className="text-[#1B1C1A] font-dMSans text-[40px] leading-[48px] w-fit tracking-[-0.01em]">
                    What We Believe In
                  </p>
                </div>
                <div className="flex max-w-[448px] pr-[5px] flex-col items-start w-fit">
                  <p className="text-[#4E616D] font-manrope text-sm font-medium leading-5 w-fit">
                    Principles that anchor every advisory, partnership, and
                    private client interaction across Tamil Nadu.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-start gap-6 w-full">
                <div className="flex p-8 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-12 h-12">
                      <svg
                        width="23"
                        height="20"
                        viewBox="0 0 23 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M10.885 18C10.9517 18 11.0183 17.9833 11.085 17.95C11.1517 17.9167 11.2017 17.8833 11.235 17.85L19.435 9.65C19.635 9.45 19.7808 9.225 19.8725 8.975C19.9642 8.725 20.01 8.475 20.01 8.225C20.01 7.95833 19.9642 7.70417 19.8725 7.4625C19.7808 7.22083 19.635 7.00833 19.435 6.825L15.185 2.575C15.0017 2.375 14.7892 2.22917 14.5475 2.1375C14.3058 2.04583 14.0517 2 13.785 2C13.535 2 13.285 2.04583 13.035 2.1375C12.785 2.22917 12.56 2.375 12.36 2.575L12.085 2.85L13.935 4.725C14.185 4.95833 14.3683 5.225 14.485 5.525C14.6017 5.825 14.66 6.14167 14.66 6.475C14.66 7.175 14.4225 7.7625 13.9475 8.2375C13.4725 8.7125 12.885 8.95 12.185 8.95C11.8517 8.95 11.5308 8.89167 11.2225 8.775C10.9142 8.65833 10.6433 8.48333 10.41 8.25L8.535 6.4L4.16 10.775C4.11 10.825 4.0725 10.8792 4.0475 10.9375C4.0225 10.9958 4.01 11.0583 4.01 11.125C4.01 11.2583 4.06 11.3792 4.16 11.4875C4.26 11.5958 4.37667 11.65 4.51 11.65C4.57667 11.65 4.64333 11.6333 4.71 11.6C4.77667 11.5667 4.82667 11.5333 4.86 11.5L8.26 8.1L9.66 9.5L6.285 12.9C6.235 12.95 6.1975 13.0042 6.1725 13.0625C6.1475 13.1208 6.135 13.1833 6.135 13.25C6.135 13.3833 6.185 13.5 6.285 13.6C6.385 13.7 6.50167 13.75 6.635 13.75C6.70167 13.75 6.76833 13.7333 6.835 13.7C6.90167 13.6667 6.95167 13.6333 6.985 13.6L10.385 10.225L11.785 11.625L8.41 15.025C8.36 15.0583 8.3225 15.1083 8.2975 15.175C8.2725 15.2417 8.26 15.3083 8.26 15.375C8.26 15.5083 8.31 15.625 8.41 15.725C8.51 15.825 8.62667 15.875 8.76 15.875C8.82667 15.875 8.88917 15.8625 8.9475 15.8375C9.00583 15.8125 9.06 15.775 9.11 15.725L12.51 12.35L13.91 13.75L10.51 17.15C10.46 17.2 10.4225 17.2542 10.3975 17.3125C10.3725 17.3708 10.36 17.4333 10.36 17.5C10.36 17.6333 10.4142 17.75 10.5225 17.85C10.6308 17.95 10.7517 18 10.885 18V18M10.86 20C10.2433 20 9.6975 19.7958 9.2225 19.3875C8.7475 18.9792 8.46833 18.4667 8.385 17.85C7.81833 17.7667 7.34333 17.5333 6.96 17.15C6.57667 16.7667 6.34333 16.2917 6.26 15.725C5.69333 15.6417 5.2225 15.4042 4.8475 15.0125C4.4725 14.6208 4.24333 14.15 4.16 13.6C3.52667 13.5167 3.01 13.2417 2.61 12.775C2.21 12.3083 2.01 11.7583 2.01 11.125C2.01 10.7917 2.0725 10.4708 2.1975 10.1625C2.3225 9.85417 2.50167 9.58333 2.735 9.35L8.535 3.575L11.81 6.85C11.8433 6.9 11.8933 6.9375 11.96 6.9625C12.0267 6.9875 12.0933 7 12.16 7C12.31 7 12.435 6.95417 12.535 6.8625C12.635 6.77083 12.685 6.65 12.685 6.5C12.685 6.43333 12.6725 6.36667 12.6475 6.3C12.6225 6.23333 12.585 6.18333 12.535 6.15L8.96 2.575C8.77667 2.375 8.56417 2.22917 8.3225 2.1375C8.08083 2.04583 7.82667 2 7.56 2C7.31 2 7.06 2.04583 6.81 2.1375C6.56 2.22917 6.335 2.375 6.135 2.575L2.61 6.125C2.46 6.275 2.335 6.45 2.235 6.65C2.135 6.85 2.06833 7.05 2.035 7.25C2.00167 7.45 2.00167 7.65417 2.035 7.8625C2.06833 8.07083 2.135 8.26667 2.235 8.45L0.785 9.9C0.501667 9.51667 0.293333 9.09583 0.16 8.6375C0.0266667 8.17917 -0.0233333 7.71667 0.01 7.25C0.0433333 6.78333 0.16 6.32917 0.36 5.8875C0.56 5.44583 0.835 5.05 1.185 4.7L4.71 1.175C5.11 0.791667 5.55583 0.5 6.0475 0.3C6.53917 0.1 7.04333 0 7.56 0C8.07667 0 8.58083 0.1 9.0725 0.3C9.56417 0.5 10.0017 0.791667 10.385 1.175L10.66 1.45L10.935 1.175C11.335 0.791667 11.7808 0.5 12.2725 0.3C12.7642 0.1 13.2683 0 13.785 0C14.3017 0 14.8058 0.1 15.2975 0.3C15.7892 0.5 16.2267 0.791667 16.61 1.175L20.835 5.4C21.2183 5.78333 21.51 6.225 21.71 6.725C21.91 7.225 22.01 7.73333 22.01 8.25C22.01 8.76667 21.91 9.27083 21.71 9.7625C21.51 10.2542 21.2183 10.6917 20.835 11.075L12.635 19.25C12.4017 19.4833 12.1308 19.6667 11.8225 19.8C11.5142 19.9333 11.1933 20 10.86 20V20M8.385 6V6V6V6V6V6V6V6V6V6V6V6V6V6V6V6V6V6V6V6V6"
                          fill="#735A35"
                        />
                      </svg>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-bold leading-[30px] w-full tracking-[0.025em]">
                        TRUST
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        Building lasting confidence through rigorous disclosure,
                        transparency, and honest communication at every step.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          ZERO COMPROMISE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-8 flex-col items-start gap-6 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-12 h-12">
                      <svg
                        width="21"
                        height="21"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M6 16.5L12.95 18.4L18.9 16.55C18.8167 16.4 18.6958 16.2708 18.5375 16.1625C18.3792 16.0542 18.2 16 18 16H12.95C12.5 16 12.1417 15.9833 11.875 15.95C11.6083 15.9167 11.3333 15.85 11.05 15.75L8.725 14.975L9.275 13.025L11.3 13.7C11.5833 13.7833 11.9167 13.85 12.3 13.9C12.6833 13.95 13.25 13.9833 14 14V14V14V14C14 13.8167 13.9458 13.6417 13.8375 13.475C13.7292 13.3083 13.6 13.2 13.45 13.15L7.6 11V11V11H6V16.5V16.5M0 20V9H7.6C7.71667 9 7.83333 9.0125 7.95 9.0375C8.06667 9.0625 8.175 9.09167 8.275 9.125L14.15 11.3C14.7 11.5 15.1458 11.85 15.4875 12.35C15.8292 12.85 16 13.4 16 14H18C18.8333 14 19.5417 14.275 20.125 14.825C20.7083 15.375 21 16.1 21 17V18L13 20.5L6 18.55V18.55V20H0V20M2 18H4V11H2V18V18M14 9.65L12 8.9V8.9C11.9667 8.1 11.6625 7.41667 11.0875 6.85C10.5125 6.28333 9.81667 6 9 6C8.45 6 7.94583 6.1375 7.4875 6.4125C7.02917 6.6875 6.66667 7.05 6.4 7.5H4.25C4.53333 6.65 5.00417 5.91667 5.6625 5.3C6.32083 4.68333 7.1 4.28333 8 4.1V2H6.5V0H12C12.5667 0 13.1 0.0916667 13.6 0.275C14.1 0.458333 14.5583 0.708333 14.975 1.025L13.55 2.45C13.3167 2.31667 13.0708 2.20833 12.8125 2.125C12.5542 2.04167 12.2833 2 12 2H10V4.1C11.15 4.33333 12.1042 4.90417 12.8625 5.8125C13.6208 6.72083 14 7.78333 14 9V9.65V9.65M9 7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5V7.5M18 8C17.45 8 16.9792 7.80417 16.5875 7.4125C16.1958 7.02083 16 6.55 16 6C16 5.61667 16.1417 5.14167 16.425 4.575C16.7083 4.00833 17.2333 3.15 18 2C18.7667 3.15 19.2917 4.00833 19.575 4.575C19.8583 5.14167 20 5.61667 20 6C20 6.55 19.8042 7.02083 19.4125 7.4125C19.0208 7.80417 18.55 8 18 8V8"
                          fill="#735A35"
                        />
                      </svg>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-bold leading-[30px] w-full tracking-[0.025em]">
                        SIMPLICITY
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        Making every architectural appraisal and title review
                        straightforward, frictionless, and convenient for you.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          CLARITY FIRST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-8 flex-col items-start gap-6 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-12 h-12">
                      <svg
                        width="22"
                        height="16"
                        viewBox="0 0 22 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M0 16V12C0 11.4333 0.195833 10.9583 0.5875 10.575C0.979167 10.1917 1.45 10 2 10H5.275C5.60833 10 5.925 10.0833 6.225 10.25C6.525 10.4167 6.76667 10.6417 6.95 10.925C7.43333 11.575 8.02917 12.0833 8.7375 12.45C9.44583 12.8167 10.2 13 11 13C11.8167 13 12.5792 12.8167 13.2875 12.45C13.9958 12.0833 14.5833 11.575 15.05 10.925C15.2667 10.6417 15.5208 10.4167 15.8125 10.25C16.1042 10.0833 16.4083 10 16.725 10H20C20.5667 10 21.0417 10.1917 21.425 10.575C21.8083 10.9583 22 11.4333 22 12V16H15V13.725C14.4167 14.1417 13.7875 14.4583 13.1125 14.675C12.4375 14.8917 11.7333 15 11 15C10.2833 15 9.58333 14.8875 8.9 14.6625C8.21667 14.4375 7.58333 14.1167 7 13.7V16H0V16M11 12C10.3667 12 9.76667 11.8542 9.2 11.5625C8.63333 11.2708 8.15833 10.8667 7.775 10.35C7.49167 9.93333 7.1375 9.60417 6.7125 9.3625C6.2875 9.12083 5.825 9 5.325 9C5.69167 8.38333 6.46667 7.89583 7.65 7.5375C8.83333 7.17917 9.95 7 11 7C12.05 7 13.1667 7.17917 14.35 7.5375C15.5333 7.89583 16.3083 8.38333 16.675 9C16.1917 9 15.7333 9.12083 15.3 9.3625C14.8667 9.60417 14.5083 9.93333 14.225 10.35C13.8583 10.8833 13.3917 11.2917 12.825 11.575C12.2583 11.8583 11.65 12 11 12V12M3 9C2.16667 9 1.45833 8.70833 0.875 8.125C0.291667 7.54167 0 6.83333 0 6C0 5.15 0.291667 4.4375 0.875 3.8625C1.45833 3.2875 2.16667 3 3 3C3.85 3 4.5625 3.2875 5.1375 3.8625C5.7125 4.4375 6 5.15 6 6C6 6.83333 5.7125 7.54167 5.1375 8.125C4.5625 8.70833 3.85 9 3 9V9M19 9C18.1667 9 17.4583 8.70833 16.875 8.125C16.2917 7.54167 16 6.83333 16 6C16 5.15 16.2917 4.4375 16.875 3.8625C17.4583 3.2875 18.1667 3 19 3C19.85 3 20.5625 3.2875 21.1375 3.8625C21.7125 4.4375 22 5.15 22 6C22 6.83333 21.7125 7.54167 21.1375 8.125C20.5625 8.70833 19.85 9 19 9V9M11 6C10.1667 6 9.45833 5.70833 8.875 5.125C8.29167 4.54167 8 3.83333 8 3C8 2.15 8.29167 1.4375 8.875 0.8625C9.45833 0.2875 10.1667 0 11 0C11.85 0 12.5625 0.2875 13.1375 0.8625C13.7125 1.4375 14 2.15 14 3C14 3.83333 13.7125 4.54167 13.1375 5.125C12.5625 5.70833 11.85 6 11 6V6"
                          fill="#735A35"
                        />
                      </svg>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-bold leading-[30px] w-full tracking-[0.025em]">
                        CUSTOMER FIRST
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        Putting individuals, family legacies, and specific
                        lifestyle requirements at the center of everything we
                        do.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          TAILORED CARE
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-8 flex-col justify-between items-start rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full">
                  <div className="flex flex-col items-start gap-[11px] w-full">
                    <div className="flex justify-center items-center rounded-lg bg-[#F0EEEA] w-12 h-12">
                      <svg
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5.675 11.7L6.55 8.85L4.25 7H7.1L8 4.2L8.9 7H11.75L9.425 8.85L10.3 11.7L8 9.925L5.675 11.7V11.7M2 21V13.275C1.36667 12.575 0.875 11.775 0.525 10.875C0.175 9.975 0 9.01667 0 8C0 5.76667 0.775 3.875 2.325 2.325C3.875 0.775 5.76667 0 8 0C10.2333 0 12.125 0.775 13.675 2.325C15.225 3.875 16 5.76667 16 8C16 9.01667 15.825 9.975 15.475 10.875C15.125 11.775 14.6333 12.575 14 13.275V21L8 19L2 21V21M8 14C9.66667 14 11.0833 13.4167 12.25 12.25C13.4167 11.0833 14 9.66667 14 8C14 6.33333 13.4167 4.91667 12.25 3.75C11.0833 2.58333 9.66667 2 8 2C6.33333 2 4.91667 2.58333 3.75 3.75C2.58333 4.91667 2 6.33333 2 8C2 9.66667 2.58333 11.0833 3.75 12.25C4.91667 13.4167 6.33333 14 8 14V14M4 18.025L8 17L12 18.025V14.925C11.4167 15.2583 10.7875 15.5208 10.1125 15.7125C9.4375 15.9042 8.73333 16 8 16C7.26667 16 6.5625 15.9042 5.8875 15.7125C5.2125 15.5208 4.58333 15.2583 4 14.925V18.025V18.025M8 16.475V16.475V16.475V16.475V16.475V16.475V16.475V16.475V16.475V16.475"
                          fill="#735A35"
                        />
                      </svg>
                    </div>
                    <div className="flex pt-[13px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-bold leading-[30px] w-full tracking-[0.025em]">
                        COMMITMENT
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-start w-full">
                      <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        Continuously elevating the property acquisition
                        experience with uncompromising standards and
                        technological rigor.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-6 flex-col items-start w-full">
                    <div className="flex pt-6 items-center w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#586063] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                          LIFETIME PARTNER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-20 flex-col items-start bg-[#FFF] w-full">
            <div className="flex max-w-[1440px] flex-col items-center gap-12 w-full">
              <div className="flex max-w-[672px] pt-2 flex-col items-center gap-1 w-[672px]">
                <button className="cursor-pointer text-nowrap flex justify-center items-center gap-2 w-fit">
                  <div className="bg-[#735A35] w-6 h-px"></div>
                  <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                    THE HAVEN METHOD
                  </p>
                  <div className="bg-[#735A35] w-6 h-px"></div>
                </button>
                <div className="flex flex-col items-center w-full">
                  <p className="text-[#1B1C1A] font-dMSans text-[40px] leading-[48px] w-fit tracking-[-0.01em]">
                    Making Your Property Journey Easier
                  </p>
                </div>
                <div className="flex pt-[7px] pr-0 pb-px pl-0 flex-col items-center w-full">
                  <p className="text-[#4E616D] font-manrope text-sm font-medium leading-[22.75px] w-fit">
                    We bring every important step together in one simple,
                    refined architectural experience.
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-start gap-8 w-full">
                <div className="flex pb-6 flex-col items-start w-full h-[264px]">
                  <div className="flex pb-6 flex-col items-start w-64">
                    <div className="flex items-center w-full">
                      <button className="cursor-pointer text-nowrap flex pt-[9px] pr-0 pb-2.5 pl-0 justify-center items-center rounded-full bg-[#0A1E28] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
                        <p className="text-[#FFDDAF] font-dMSans text-[22px] font-semibold leading-[30px] w-fit">
                          01
                        </p>
                      </button>
                      <svg
                        width="208"
                        height="1"
                        viewBox="0 0 208 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex py-0 px-4 flex-col items-start w-full h-px "
                      >
                        <rect x="16" width="176" height="1" fill="#EAE8E4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex pb-2 flex-col items-start w-64">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        Discover
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-64">
                    <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-fit">
                      Explore properties that align directly with your aesthetic
                      preferences, architectural criteria, and family
                      requirements.
                    </p>
                  </div>
                  <div className="flex pt-4 flex-col items-start w-64">
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C8.28889 0 9.70833 0.508333 10.925 1.525C12.1417 2.54167 12.9 3.81667 13.2 5.35H11.8333C11.6222 4.53889 11.2417 3.81389 10.6917 3.175C10.1417 2.53611 9.46667 2.05556 8.66667 1.73333V2C8.66667 2.36667 8.53611 2.68056 8.275 2.94167C8.01389 3.20278 7.7 3.33333 7.33333 3.33333H6V4.66667C6 4.85556 5.93611 5.01389 5.80833 5.14167C5.68056 5.26944 5.52222 5.33333 5.33333 5.33333H4V6.66667H5.33333V8.66667H4.66667L1.46667 5.46667C1.43333 5.66667 1.40278 5.86667 1.375 6.06667C1.34722 6.26667 1.33333 6.46667 1.33333 6.66667C1.33333 8.12222 1.84444 9.37222 2.86667 10.4167C3.88889 11.4611 5.15556 11.9889 6.66667 12V13.3333V13.3333M12.7333 13L10.6 10.8667C10.3667 11 10.1167 11.1111 9.85 11.2C9.58333 11.2889 9.3 11.3333 9 11.3333C8.16667 11.3333 7.45833 11.0417 6.875 10.4583C6.29167 9.875 6 9.16667 6 8.33333C6 7.5 6.29167 6.79167 6.875 6.20833C7.45833 5.625 8.16667 5.33333 9 5.33333C9.83333 5.33333 10.5417 5.625 11.125 6.20833C11.7083 6.79167 12 7.5 12 8.33333C12 8.63333 11.9556 8.91667 11.8667 9.18333C11.7778 9.45 11.6667 9.7 11.5333 9.93333L13.6667 12.0667L12.7333 13V13M9 10C9.46667 10 9.86111 9.83889 10.1833 9.51667C10.5056 9.19444 10.6667 8.8 10.6667 8.33333C10.6667 7.86667 10.5056 7.47222 10.1833 7.15C9.86111 6.82778 9.46667 6.66667 9 6.66667C8.53333 6.66667 8.13889 6.82778 7.81667 7.15C7.49444 7.47222 7.33333 7.86667 7.33333 8.33333C7.33333 8.8 7.49444 9.19444 7.81667 9.51667C8.13889 9.83889 8.53333 10 9 10V10"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          CURATED PORTFOLIOS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pb-6 flex-col items-start w-full h-[264px]">
                  <div className="flex pb-6 flex-col items-start w-64">
                    <div className="flex items-center w-full">
                      <button className="cursor-pointer text-nowrap flex pt-[9px] pr-0 pb-2.5 pl-0 justify-center items-center rounded-full bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
                        <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-fit">
                          02
                        </p>
                      </button>
                      <svg
                        width="208"
                        height="1"
                        viewBox="0 0 208 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex py-0 px-4 flex-col items-start w-full h-px "
                      >
                        <rect x="16" width="176" height="1" fill="#EAE8E4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex pb-2 flex-col items-start w-64">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        Explore
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-64">
                    <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-fit">
                      View high-resolution photography, exact structural
                      floorplans, bespoke amenities, and neighborhood
                      connectivity metrics.
                    </p>
                  </div>
                  <div className="flex pt-4 flex-col items-start w-64">
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M4.66667 8H11.3333L9.03333 5L7.5 7L6.46667 5.66667L4.66667 8V8M4 10.6667C3.63333 10.6667 3.31944 10.5361 3.05833 10.275C2.79722 10.0139 2.66667 9.7 2.66667 9.33333V1.33333C2.66667 0.966667 2.79722 0.652778 3.05833 0.391667C3.31944 0.130556 3.63333 0 4 0H12C12.3667 0 12.6806 0.130556 12.9417 0.391667C13.2028 0.652778 13.3333 0.966667 13.3333 1.33333V9.33333C13.3333 9.7 13.2028 10.0139 12.9417 10.275C12.6806 10.5361 12.3667 10.6667 12 10.6667H4V10.6667M4 9.33333H12V9.33333V9.33333V1.33333V1.33333V1.33333H4V1.33333V1.33333V9.33333V9.33333V9.33333V9.33333M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667H1.33333V12V12V12H10.6667V13.3333H1.33333V13.3333M4 1.33333V1.33333V1.33333V1.33333V9.33333V9.33333V9.33333V9.33333V9.33333V9.33333V1.33333V1.33333V1.33333V1.33333"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          FLOORPLANS &amp; VIEWS
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start w-full h-[264px]">
                  <div className="flex pb-6 flex-col items-start w-64">
                    <div className="flex items-center w-full">
                      <button className="cursor-pointer text-nowrap flex pt-[9px] pr-0 pb-2.5 pl-0 justify-center items-center rounded-full bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
                        <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-fit">
                          03
                        </p>
                      </button>
                      <svg
                        width="208"
                        height="1"
                        viewBox="0 0 208 1"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex py-0 px-4 flex-col items-start w-full h-px "
                      >
                        <rect x="16" width="176" height="1" fill="#EAE8E4" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex pb-2 flex-col items-start w-64">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        Connect
                      </p>
                    </div>
                  </div>
                  <div className="flex pb-px flex-col items-start w-64">
                    <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-fit">
                      Reach out to our private client partners to clarify
                      technical documentation, inspect legal dossiers, or
                      schedule an on-site private viewing.
                    </p>
                  </div>
                  <div className="flex pt-4 flex-col items-start w-64">
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5.33333 8.66667C5.95556 8.66667 6.51667 8.51389 7.01667 8.20833C7.51667 7.90278 7.91111 7.5 8.2 7C7.81111 6.67778 7.37222 6.43056 6.88333 6.25833C6.39444 6.08611 5.87778 6 5.33333 6C4.78889 6 4.27222 6.08611 3.78333 6.25833C3.29444 6.43056 2.85556 6.67778 2.46667 7C2.75556 7.5 3.15 7.90278 3.65 8.20833C4.15 8.51389 4.71111 8.66667 5.33333 8.66667V8.66667M5.33333 5.33333C5.7 5.33333 6.01389 5.20278 6.275 4.94167C6.53611 4.68056 6.66667 4.36667 6.66667 4C6.66667 3.63333 6.53611 3.31944 6.275 3.05833C6.01389 2.79722 5.7 2.66667 5.33333 2.66667C4.96667 2.66667 4.65278 2.79722 4.39167 3.05833C4.13056 3.31944 4 3.63333 4 4C4 4.36667 4.13056 4.68056 4.39167 4.94167C4.65278 5.20278 4.96667 5.33333 5.33333 5.33333V5.33333M5.33333 11.5667C6.68889 10.3222 7.69444 9.19167 8.35 8.175C9.00556 7.15833 9.33333 6.25556 9.33333 5.46667C9.33333 4.25556 8.94722 3.26389 8.175 2.49167C7.40278 1.71944 6.45556 1.33333 5.33333 1.33333C4.21111 1.33333 3.26389 1.71944 2.49167 2.49167C1.71944 3.26389 1.33333 4.25556 1.33333 5.46667C1.33333 6.25556 1.66111 7.15833 2.31667 8.175C2.97222 9.19167 3.97778 10.3222 5.33333 11.5667V11.5667M5.33333 13.3333C3.54444 11.8111 2.20833 10.3972 1.325 9.09167C0.441667 7.78611 0 6.57778 0 5.46667C0 3.8 0.536111 2.47222 1.60833 1.48333C2.68056 0.494444 3.92222 0 5.33333 0C6.74444 0 7.98611 0.494444 9.05833 1.48333C10.1306 2.47222 10.6667 3.8 10.6667 5.46667C10.6667 6.57778 10.225 7.78611 9.34167 9.09167C8.45833 10.3972 7.12222 11.8111 5.33333 13.3333V13.3333M5.33333 5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333V5.33333"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          PRIVATE ACCOMPANIMENT
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex pb-6 flex-col items-start w-full h-[264px]">
                  <div className="flex pb-2 flex-col items-start w-64">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-full">
                        Move Forward
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-64">
                    <p className="text-[#4E616D] font-bodoniModa text-[15px] leading-[24.38px] w-fit">
                      Make empowered, informed decisions and take clear steps
                      toward finalizing your landmark residential acquisition.
                    </p>
                  </div>
                  <div className="flex pt-4 flex-col items-start w-64">
                    <div className="flex items-center gap-1 w-full">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M6.66667 13.3333C5.74444 13.3333 4.87778 13.1583 4.06667 12.8083C3.25556 12.4583 2.55 11.9833 1.95 11.3833C1.35 10.7833 0.875 10.0778 0.525 9.26667C0.175 8.45555 0 7.58889 0 6.66667C0 5.74444 0.175 4.87778 0.525 4.06667C0.875 3.25556 1.35 2.55 1.95 1.95C2.55 1.35 3.25556 0.875 4.06667 0.525C4.87778 0.175 5.74444 0 6.66667 0C7.38889 0 8.07222 0.105556 8.71667 0.316667C9.36111 0.527778 9.95556 0.822222 10.5 1.2L9.53333 2.18333C9.11111 1.91667 8.66111 1.70833 8.18333 1.55833C7.70556 1.40833 7.2 1.33333 6.66667 1.33333C5.18889 1.33333 3.93056 1.85278 2.89167 2.89167C1.85278 3.93056 1.33333 5.18889 1.33333 6.66667C1.33333 8.14444 1.85278 9.40278 2.89167 10.4417C3.93056 11.4806 5.18889 12 6.66667 12C8.14444 12 9.40278 11.4806 10.4417 10.4417C11.4806 9.40278 12 8.14444 12 6.66667C12 6.46667 11.9889 6.26667 11.9667 6.06667C11.9444 5.86667 11.9111 5.67222 11.8667 5.48333L12.95 4.4C13.0722 4.75556 13.1667 5.12222 13.2333 5.5C13.3 5.87778 13.3333 6.26667 13.3333 6.66667C13.3333 7.58889 13.1583 8.45555 12.8083 9.26667C12.4583 10.0778 11.9833 10.7833 11.3833 11.3833C10.7833 11.9833 10.0778 12.4583 9.26667 12.8083C8.45555 13.1583 7.58889 13.3333 6.66667 13.3333V13.3333M5.73333 9.73333L2.9 6.9L3.83333 5.96667L5.73333 7.86667L12.4 1.18333L13.3333 2.11667L5.73333 9.73333V9.73333"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          EFFORTLESS HANDOVER
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pb-6 flex-col items-start w-64">
                    <div className="flex items-center w-full">
                      <button className="cursor-pointer text-nowrap flex pt-[9px] pr-0 pb-2.5 pl-0 justify-center items-center rounded-full bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
                        <p className="text-[#1B1C1A] font-dMSans text-[22px] font-semibold leading-[30px] w-fit">
                          04
                        </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex p-20 flex-col items-start bg-[#FFF] w-full">
            <div className="flex max-w-[1440px] pt-2 flex-col items-center gap-1 w-full">
              <button className="cursor-pointer text-nowrap flex justify-center items-center gap-2 w-fit">
                <div className="bg-[#735A35] w-6 h-px"></div>
                <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                  INITIATE YOUR SEARCH
                </p>
                <div className="bg-[#735A35] w-6 h-px"></div>
              </button>
              <div className="flex flex-col items-center w-full">
                <p className="text-[#1B1C1A] font-dMSans text-[40px] leading-[48px] w-fit tracking-[-0.01em]">
                  Let's Find the Right Place for You.
                </p>
              </div>
              <div className="flex max-w-[576px] pt-[7px] pr-0 pb-px pl-0 flex-col items-center w-[576px]">
                <p className="text-[#4E616D] font-manrope text-sm font-medium leading-[22.75px] w-fit">
                  Whether you are searching for your next home or exploring new
                  investment opportunities in Coimbatore, your journey starts
                  here.
                </p>
              </div>
              <div className="flex pt-6 justify-center items-center gap-4 flex-wrap w-full">
                <div className="flex py-0 px-8 justify-center items-center gap-2 rounded-lg bg-[#0A1E28] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit h-12">
                  <div className="flex flex-col items-center w-fit">
                    <p className="text-[#FFF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                      BROWSE PROPERTIES
                    </p>
                  </div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-center w-fit "
                  >
                    <path
                      d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75V6.75"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex py-0 px-8 justify-center items-center rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit h-12">
                  <div className="flex flex-col items-center w-fit">
                    <p className="text-[#0A1E28] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                      CONTACT US
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-20 px-48 flex-col items-start bg-[#172A35] w-full overflow-hidden relative">
            <div className="absolute -right-32 -top-32 rounded-full bg-[rgba(115,90,53,0.10)] w-96 h-96"></div>
            <div className="absolute -left-32 -bottom-[129px] rounded-full bg-[rgba(209,229,244,0.05)] w-96 h-96"></div>
            <div className="flex max-w-[896px] pt-2 pr-0 pb-0 pl-0 flex-col items-center gap-2 w-full">
              <button className="cursor-pointer text-nowrap flex justify-center items-center gap-2 w-fit">
                <div className="bg-[#FFDDAF] w-8 h-px"></div>
                <p className="text-[#FFDDAF] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.25em]">
                  OUR PROMISE TO YOU
                </p>
                <div className="bg-[#FFDDAF] w-8 h-px"></div>
              </button>
              <div className="flex flex-col items-center w-full">
                <p className="text-[#FFF] font-dMSans text-[56px] leading-[68px] w-fit tracking-[-0.02em]">
                  Your Property Journey Deserves a Better Experience.
                </p>
              </div>
              <div className="flex max-w-[672px] pt-2 flex-col items-center w-[672px]">
                <p className="text-[#C0C8CC] font-manrope text-[17px] leading-[27.63px] w-fit">
                  We are committed to making property discovery more accessible,
                  transparent, and convenient. Every feature we build starts
                  with one question: how can we make this experience better for
                  you?
                </p>
              </div>
              <div className="flex pt-5 items-center gap-4 w-fit">
                <div className="flex py-0 px-8 justify-center items-center gap-2 rounded-lg bg-[#C6A77B] w-fit h-12 relative">
                  <div className="absolute -right-0 rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[04px6px-1pxrgba(0,0,0,0.10),02px4px-2pxrgba(0,0,0,0.10)] w-[188px] h-12"></div>
                  <div className="flex flex-col items-center w-fit">
                    <p className="text-[#523C19] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                      START EXPLORING
                    </p>
                  </div>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-center w-fit "
                  >
                    <path
                      d="M9.13125 6.75H0V5.25H9.13125L4.93125 1.05L6 0L12 6L6 12L4.93125 10.95L9.13125 6.75V6.75"
                      fill="#523C19"
                    />
                  </svg>
                </div>
                <div className="flex py-0 px-4 items-center gap-2 w-fit">
                  <svg
                    width="17"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-center w-fit "
                  >
                    <path
                      d="M5.7 15.75L4.275 13.35L1.575 12.75L1.8375 9.975L0 7.875L1.8375 5.775L1.575 3L4.275 2.4L5.7 0L8.25 1.0875L10.8 0L12.225 2.4L14.925 3L14.6625 5.775L16.5 7.875L14.6625 9.975L14.925 12.75L12.225 13.35L10.8 15.75L8.25 14.6625L5.7 15.75V15.75M6.3375 13.8375L8.25 13.0125L10.2 13.8375L11.25 12.0375L13.3125 11.55L13.125 9.45L14.5125 7.875L13.125 6.2625L13.3125 4.1625L11.25 3.7125L10.1625 1.9125L8.25 2.7375L6.3 1.9125L5.25 3.7125L3.1875 4.1625L3.375 6.2625L1.9875 7.875L3.375 9.45L3.1875 11.5875L5.25 12.0375L6.3375 13.8375V13.8375M8.25 7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875V7.875M7.4625 10.5375L11.7 6.3L10.65 5.2125L7.4625 8.4L5.85 6.825L4.8 7.875L7.4625 10.5375V10.5375"
                      fill="#FFDDAF"
                    />
                  </svg>
                  <div className="flex flex-col items-center w-fit">
                    <p className="text-[#C0C8CC] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                      ZERO OBLIGATION ADVISORY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start bg-[#172A35] w-full">
        <div className="flex max-w-[1440px] pt-20 pr-20 pb-12 pl-20 flex-col items-start gap-20 w-full">
          <div className="flex justify-center items-start gap-10 w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex items-center gap-2 w-full">
                <div className="flex justify-center items-center rounded bg-[#C6A77B] w-8 h-8">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M0 13.5V3H3V0H10.5V6H13.5V13.5H7.5V10.5H6V13.5H0V13.5M1.5 12H3V10.5H1.5V12V12M1.5 9H3V7.5H1.5V9V9M1.5 6H3V4.5H1.5V6V6M4.5 9H6V7.5H4.5V9V9M4.5 6H6V4.5H4.5V6V6M4.5 3H6V1.5H4.5V3V3M7.5 9H9V7.5H7.5V9V9M7.5 6H9V4.5H7.5V6V6M7.5 3H9V1.5H7.5V3V3M10.5 12H12V10.5H10.5V12V12M10.5 9H12V7.5H10.5V9V9"
                      fill="#0A1E28"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#FFF] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                    HAVEN ESTATES
                  </p>
                </div>
              </div>
              <div className="flex max-w-[384px] pt-[15px] flex-col items-start w-full">
                <div className="flex max-w-[384px] flex-col items-start w-full">
                  <p className="text-[#C0C8CC] font-bodoniModa text-[13px] leading-[21.13px] w-full">
                    Curating Coimbatore's most distinguished architectural
                    estates, heritage plantations, and contemporary penthouse
                    sanctums with meticulous discretion and generational
                    permanence.
                  </p>
                </div>
              </div>
              <div className="flex pt-4 flex-col items-start w-full">
                <div className="flex pt-1 items-center gap-1 w-full">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M5.06667 14L3.8 11.8667L1.4 11.3333L1.63333 8.86667L0 7L1.63333 5.13333L1.4 2.66667L3.8 2.13333L5.06667 0L7.33333 0.966667L9.6 0L10.8667 2.13333L13.2667 2.66667L13.0333 5.13333L14.6667 7L13.0333 8.86667L13.2667 11.3333L10.8667 11.8667L9.6 14L7.33333 13.0333L5.06667 14V14M5.63333 12.3L7.33333 11.5667L9.06667 12.3L10 10.7L11.8333 10.2667L11.6667 8.4L12.9 7L11.6667 5.56667L11.8333 3.7L10 3.3L9.03333 1.7L7.33333 2.43333L5.6 1.7L4.66667 3.3L2.83333 3.7L3 5.56667L1.76667 7L3 8.4L2.83333 10.3L4.66667 10.7L5.63333 12.3V12.3M7.33333 7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7V7M6.63333 9.36667L10.4 5.6L9.46667 4.63333L6.63333 7.46667L5.2 6.06667L4.26667 7L6.63333 9.36667V9.36667"
                      fill="#FFDDAF"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                      TN RERA REGISTERED CONCIERGE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-[46px] flex-col items-start w-full">
              <div className="flex pb-1 flex-col items-start w-full">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.05em]">
                    QUICK NAVIGATION
                  </p>
                </div>
              </div>
              <div className="flex pt-2 flex-col items-start w-full">
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Private Showcase
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Available Portfolios
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Architectural Heritage
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Private Client Partners
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Schedule Dossier Review
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-[46px] flex-col items-start w-full">
              <div className="flex pb-1 flex-col items-start w-full">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.05em]">
                    ESTATE CATEGORIES
                  </p>
                </div>
              </div>
              <div className="flex pt-2 flex-col items-start w-full">
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Race Course Mansions
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Avanashi Road Sky Penthouses
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Anaikatti Foothill Sanctuaries
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      RS Puram Heritage Villas
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-manrope text-sm font-medium leading-5 w-full">
                      Valparai Tea Plantations
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pb-[38px] flex-col items-start w-full">
              <div className="flex pb-1 flex-col items-start w-full">
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.05em]">
                    PRIVATE OFFICE
                  </p>
                </div>
              </div>
              <div className="flex pt-2 flex-col items-start w-full">
                <div className="flex flex-col items-start gap-1 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#FFF] font-manrope text-sm font-medium leading-5 w-full">
                      Haven Pavilion, 44 Race Course
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-bodoniModa text-[13px] leading-5 w-full">
                      Coimbatore, Tamil Nadu 641018
                    </p>
                  </div>
                  <div className="flex pt-1 flex-col items-start w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#FFF] font-dMSans text-base leading-5 w-full">
                        +91 98765 43210
                      </p>
                    </div>
                    <div className="flex pt-1 flex-col items-start w-full">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#C0C8CC] font-bodoniModa text-[13px] leading-5 w-full">
                          concierge@havenestates.in
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-1 flex-col items-start w-full">
                    <p className="text-[#D1E5F4] font-manrope text-[11px] leading-5 w-full tracking-[0.1em]">
                      BY PRIOR APPOINTMENT ONLY
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-7 justify-between items-center w-full">
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#C0C8CC] font-manrope text-xs font-semibold leading-4 w-fit">
                Â© 2025 Haven Estates Private Office LLP. All rights reserved.
                RERA No: TN&#x2F;11&#x2F;Building&#x2F;0482&#x2F;2023.
              </p>
            </div>
            <div className="flex items-center gap-4 w-fit">
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#C0C8CC] font-manrope text-[10px] font-semibold leading-4 w-fit tracking-[0.1em]">
                  CONFIDENTIALITY PROTOCOL
                </p>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#586063] font-manrope text-[10px] font-semibold leading-4 w-fit tracking-[0.1em]">
                  â€¢
                </p>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#C0C8CC] font-manrope text-[10px] font-semibold leading-4 w-fit tracking-[0.1em]">
                  TERMS OF ACQUISITION
                </p>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#586063] font-manrope text-[10px] font-semibold leading-4 w-fit tracking-[0.1em]">
                  â€¢
                </p>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#C0C8CC] font-manrope text-[10px] font-semibold leading-4 w-fit tracking-[0.1em]">
                  STATUTORY FILINGS
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start absolute bg-[rgba(251,249,245,0.90)] shadow-[01px8px0rgba(0,0,0,0.04)] w-full">
        <div className="flex max-w-[1440px] py-0 px-20 justify-between items-center w-full h-20">
          <div className="flex items-center gap-4 w-fit">
            <div className="flex justify-center items-center rounded bg-[#0A1E28] w-9 h-9">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M0 15V3.33333H3.33333V0H11.6667V6.66667H15V15H8.33333V11.6667H6.66667V15H0V15M1.66667 13.3333H3.33333V11.6667H1.66667V13.3333V13.3333M1.66667 10H3.33333V8.33333H1.66667V10V10M1.66667 6.66667H3.33333V5H1.66667V6.66667V6.66667M5 10H6.66667V8.33333H5V10V10M5 6.66667H6.66667V5H5V6.66667V6.66667M5 3.33333H6.66667V1.66667H5V3.33333V3.33333M8.33333 10H10V8.33333H8.33333V10V10M8.33333 6.66667H10V5H8.33333V6.66667V6.66667M8.33333 3.33333H10V1.66667H8.33333V3.33333V3.33333M11.6667 13.3333H13.3333V11.6667H11.6667V13.3333V13.3333M11.6667 10H13.3333V8.33333H11.6667V10V10"
                  fill="#FFDDAF"
                />
              </svg>
            </div>
            <div className="flex flex-col items-start w-fit">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#1B1C1A] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.2em]">
                  HAVEN ESTATES
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#7F766A] font-manrope text-xs font-semibold leading-4 w-fit tracking-[0.05em]">
                  COIMBATORE â€¢ RESIDENCES
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-7 w-fit">
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#4E463B] font-manrope text-sm font-medium leading-5 w-fit tracking-[0.025em]">
                Home
              </p>
            </div>
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#4E463B] font-manrope text-sm font-medium leading-5 w-fit tracking-[0.025em]">
                Properties
              </p>
            </div>
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#4E463B] font-manrope text-sm font-medium leading-5 w-fit tracking-[0.025em]">
                About Us
              </p>
            </div>
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#4E463B] font-manrope text-sm font-medium leading-5 w-fit tracking-[0.025em]">
                Our Agents
              </p>
            </div>
            <div className="flex flex-col items-start w-fit">
              <p className="text-[#4E463B] font-manrope text-sm font-medium leading-5 w-fit tracking-[0.025em]">
                Contact
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 w-fit">
            <div className="flex pr-1 flex-col items-start w-fit">
              <div className="flex items-center gap-1 w-fit">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M12.7125 13.5C11.15 13.5 9.60625 13.1594 8.08125 12.4781C6.55625 11.7969 5.16875 10.8313 3.91875 9.58125C2.66875 8.33125 1.70312 6.94375 1.02188 5.41875C0.340625 3.89375 0 2.35 0 0.7875C0 0.5625 0.075 0.375 0.225 0.225C0.375 0.075 0.5625 0 0.7875 0H3.825C4 0 4.15625 0.059375 4.29375 0.178125C4.43125 0.296875 4.5125 0.4375 4.5375 0.6L5.025 3.225C5.05 3.425 5.04375 3.59375 5.00625 3.73125C4.96875 3.86875 4.9 3.9875 4.8 4.0875L2.98125 5.925C3.23125 6.3875 3.52813 6.83437 3.87188 7.26562C4.21562 7.69688 4.59375 8.1125 5.00625 8.5125C5.39375 8.9 5.8 9.25937 6.225 9.59062C6.65 9.92188 7.1 10.225 7.575 10.5L9.3375 8.7375C9.45 8.625 9.59688 8.54062 9.77812 8.48438C9.95937 8.42813 10.1375 8.4125 10.3125 8.4375L12.9 8.9625C13.075 9.0125 13.2188 9.10312 13.3313 9.23438C13.4438 9.36563 13.5 9.5125 13.5 9.675V12.7125C13.5 12.9375 13.425 13.125 13.275 13.275C13.125 13.425 12.9375 13.5 12.7125 13.5V13.5M2.26875 4.5L3.50625 3.2625V3.2625V3.2625L3.1875 1.5V1.5V1.5H1.51875V1.5V1.5C1.58125 2.0125 1.66875 2.51875 1.78125 3.01875C1.89375 3.51875 2.05625 4.0125 2.26875 4.5V4.5M8.98125 11.2125C9.46875 11.425 9.96562 11.5938 10.4719 11.7188C10.9781 11.8438 11.4875 11.925 12 11.9625V11.9625V11.9625V10.3125V10.3125V10.3125L10.2375 9.95625V9.95625V9.95625L8.98125 11.2125V11.2125M2.26875 4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5V4.5M8.98125 11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125V11.2125"
                    fill="#735A35"
                  />
                </svg>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#1B1C1A] font-dMSans text-[15px] font-medium leading-5 w-fit tracking-[-0.0233em]">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>
            <button className="cursor-pointer text-nowrap flex py-3 px-6 justify-center items-center rounded-lg bg-[#0A1E28] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit">
              <p className="text-[#FFF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                FIND YOUR PROPERTY
              </p>
            </button>
            <div className="flex justify-center items-center rounded-full bg-[#735A35] w-8 h-8">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M6 6C5.175 6 4.46875 5.70625 3.88125 5.11875C3.29375 4.53125 3 3.825 3 3C3 2.175 3.29375 1.46875 3.88125 0.88125C4.46875 0.29375 5.175 0 6 0C6.825 0 7.53125 0.29375 8.11875 0.88125C8.70625 1.46875 9 2.175 9 3C9 3.825 8.70625 4.53125 8.11875 5.11875C7.53125 5.70625 6.825 6 6 6V6M0 12V9.9C0 9.475 0.109375 9.08437 0.328125 8.72812C0.546875 8.37187 0.8375 8.1 1.2 7.9125C1.975 7.525 2.7625 7.23438 3.5625 7.04063C4.3625 6.84688 5.175 6.75 6 6.75C6.825 6.75 7.6375 6.84688 8.4375 7.04063C9.2375 7.23438 10.025 7.525 10.8 7.9125C11.1625 8.1 11.4531 8.37187 11.6719 8.72812C11.8906 9.08437 12 9.475 12 9.9V12H0V12M1.5 10.5H10.5V9.9C10.5 9.7625 10.4656 9.6375 10.3969 9.525C10.3281 9.4125 10.2375 9.325 10.125 9.2625C9.45 8.925 8.76875 8.67188 8.08125 8.50313C7.39375 8.33438 6.7 8.25 6 8.25C5.3 8.25 4.60625 8.33438 3.91875 8.50313C3.23125 8.67188 2.55 8.925 1.875 9.2625C1.7625 9.325 1.67188 9.4125 1.60312 9.525C1.53437 9.6375 1.5 9.7625 1.5 9.9V10.5V10.5M6 4.5C6.4125 4.5 6.76562 4.35312 7.05937 4.05937C7.35312 3.76562 7.5 3.4125 7.5 3C7.5 2.5875 7.35312 2.23438 7.05937 1.94062C6.76562 1.64687 6.4125 1.5 6 1.5C5.5875 1.5 5.23438 1.64687 4.94063 1.94062C4.64688 2.23438 4.5 2.5875 4.5 3C4.5 3.4125 4.64688 3.76562 4.94063 4.05937C5.23438 4.35312 5.5875 4.5 6 4.5V4.5M6 3V3V3V3V3V3V3V3V3V3M6 10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
