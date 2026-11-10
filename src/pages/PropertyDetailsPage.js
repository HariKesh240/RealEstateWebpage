import livingRoomImage from "../img/PropertyDetailsPage/vista-living.png";
import exteriorImage from "../img/PropertyDetailsPage/vista-exterior.png";
import bedroomImage from "../img/PropertyDetailsPage/vista-bedroom.png";
import agentImage from "../img/LandingPage/PriyaSharmaResidentialSpecialist.png";

export default function PropertyDetailsPage({ property }) {
  return (
    <div className="property-details-page flex flex-col items-start bg-linear-[0deg,#FBF9F50%,#FBF9F5100%),#FF] w-full min-w-0 min-h-screen relative overflow-x-hidden">
      <div className="flex pt-20 flex-col items-start bg-[#FBF9F5] w-full">
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-start bg-[#F5F3EF] w-full">
          <div className="flex py-4 px-20 flex-col items-start bg-[#F5F3EF] w-full">
            <div className="property-details-gallery grid w-full h-[580px]">
              <div className="flex flex-col justify-center items-start rounded-xl bg-[#F0EEEA] shadow-[04px6px-1pxrgba(0,0,0,0.10),02px4px-2pxrgba(0,0,0,0.10)] w-full h-full overflow-hidden relative">
                <img
                  src={livingRoomImage}
                  className="w-full h-full overflow-hidden max-w-none object-cover"
                  alt={`Bright luxury living room at ${property?.name || "The Vista Luxe Residence"}`}
                />
                <div className="absolute bg-linear-[0deg,rgba(10,30,40,0.70)0%,rgba(10,30,40,0.00)50%,rgba(10,30,40,0.00)100%] w-[647px] h-[580px]"></div>
                <div className="flex items-start gap-2 flex-wrap absolute left-4 top-4 w-fit">
                  <div className="flex pt-1 pr-3 pb-[5px] pl-3 items-center gap-1 rounded-full bg-[rgba(255,255,255,0.90)] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit h-full">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M4.43333 12.25L3.325 10.3833L1.225 9.91667L1.42917 7.75833L0 6.125L1.42917 4.49167L1.225 2.33333L3.325 1.86667L4.43333 0L6.41667 0.845833L8.4 0L9.50833 1.86667L11.6083 2.33333L11.4042 4.49167L12.8333 6.125L11.4042 7.75833L11.6083 9.91667L9.50833 10.3833L8.4 12.25L6.41667 11.4042L4.43333 12.25V12.25M4.92917 10.7625L6.41667 10.1208L7.93333 10.7625L8.75 9.3625L10.3542 8.98333L10.2083 7.35L11.2875 6.125L10.2083 4.87083L10.3542 3.2375L8.75 2.8875L7.90417 1.4875L6.41667 2.12917L4.9 1.4875L4.08333 2.8875L2.47917 3.2375L2.625 4.87083L1.54583 6.125L2.625 7.35L2.47917 9.0125L4.08333 9.3625L4.92917 10.7625V10.7625M6.41667 6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125M5.80417 8.19583L9.1 4.9L8.28333 4.05417L5.80417 6.53333L4.55 5.30833L3.73333 6.125L5.80417 8.19583V8.19583"
                        fill="#735A35"
                      />
                    </svg>
                    <p className="text-[#0A1E28] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                      VERIFIED LISTING
                    </p>
                  </div>
                  <div className="flex pt-1 pr-3 pb-[5px] pl-3 items-center rounded-full bg-[#735A35] shadow-[01px2px0rgba(0,0,0,0.05)] w-fit h-full">
                    <p className="text-[#FFF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                      FOR SALE
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-end absolute left-4 bottom-4 w-[615px]">
                  <div className="flex pt-1 flex-col items-start gap-[5px] w-fit">
                    <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                      HAVEN PRIME PORTFOLIO
                    </p>
                    <div className="flex flex-col items-start shadow-[01px2px0rgba(0,0,0,0.06),01px4px0rgba(0,0,0,0.10)] w-fit">
                      <p className="text-[#FFF] font-dMSans text-[22px] font-medium leading-[30px] w-fit">
                        {property?.name || "The Vista Luxe Residence"}
                      </p>
                    </div>
                  </div>
                  <div className="flex py-1 px-2.5 flex-col items-start rounded bg-[rgba(10,30,40,0.80)] w-fit">
                    <p className="text-[#FFF] font-manrope text-xs font-semibold leading-4 w-fit">
                      Peelamedu • E-Facing
                    </p>
                  </div>
                </div>
              </div>
              <div className="property-details-thumbnails grid w-full h-full">
                <div className="flex flex-col justify-center items-start rounded-xl bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full overflow-hidden relative">
                  <img
                    src={exteriorImage}
                    className="w-full h-full overflow-hidden max-w-none object-cover"
                    alt="Exterior view of The Vista Luxe Residence"
                  />
                  <div className="absolute bg-[rgba(10,30,40,0.10)] w-[221px] h-[282px]"></div>
                  <div className="flex py-0.5 px-2 flex-col items-start absolute left-2.5 bottom-2.5 rounded bg-[rgba(255,255,255,0.90)] w-fit">
                    <p className="text-[#1B1C1A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.025em]">
                      LIVING PAVILION
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start rounded-xl bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full overflow-hidden relative">
                  <img
                    src={bedroomImage}
                    className="w-full h-full overflow-hidden max-w-none object-cover"
                    alt="Spacious master bedroom"
                  />
                  <div className="absolute -right-0 bg-[rgba(10,30,40,0.10)] w-[221px] h-[282px]"></div>
                  <div className="flex py-0.5 px-2 flex-col items-start absolute left-2.5 bottom-2.5 rounded bg-[rgba(255,255,255,0.90)] w-fit">
                    <p className="text-[#1B1C1A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.025em]">
                      MASTER SUITE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start rounded-xl bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full overflow-hidden relative">
                  <img
                    src={livingRoomImage}
                    className="w-full h-full overflow-hidden max-w-none object-cover"
                    alt="Elegant living pavilion interior"
                  />
                  <div className="absolute bg-[rgba(10,30,40,0.10)] w-[221px] h-[282px]"></div>
                  <div className="flex py-0.5 px-2 flex-col items-start absolute left-2.5 bottom-2.5 rounded bg-[rgba(255,255,255,0.90)] w-fit">
                    <p className="text-[#1B1C1A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.025em]">
                      CHEF'S KITCHEN
                    </p>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-start rounded-xl bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-full h-full overflow-hidden relative">
                  <img
                    src={exteriorImage}
                    className="w-full h-full overflow-hidden max-w-none object-cover"
                    alt="More photos of The Vista Luxe Residence"
                  />
                  <div className="flex p-3 flex-col justify-center items-center absolute -right-0 bg-[rgba(10,30,40,0.55)] w-[221px] h-[282px]">
                    <div className="flex pb-1 flex-col items-start w-fit">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-center w-fit "
                      >
                        <path
                          d="M8.16667 14H19.8333L15.8083 8.75L13.125 12.25L11.3167 9.91667L8.16667 14V14M7 18.6667C6.35833 18.6667 5.80903 18.4382 5.35208 17.9813C4.89514 17.5243 4.66667 16.975 4.66667 16.3333V2.33333C4.66667 1.69167 4.89514 1.14236 5.35208 0.685417C5.80903 0.228472 6.35833 0 7 0H21C21.6417 0 22.191 0.228472 22.6479 0.685417C23.1049 1.14236 23.3333 1.69167 23.3333 2.33333V16.3333C23.3333 16.975 23.1049 17.5243 22.6479 17.9813C22.191 18.4382 21.6417 18.6667 21 18.6667H7V18.6667M7 16.3333H21V16.3333V16.3333V2.33333V2.33333V2.33333H7V2.33333V2.33333V16.3333V16.3333V16.3333V16.3333M2.33333 23.3333C1.69167 23.3333 1.14236 23.1049 0.685417 22.6479C0.228472 22.191 0 21.6417 0 21V4.66667H2.33333V21V21V21H18.6667V23.3333H2.33333V23.3333M7 2.33333V2.33333V2.33333V2.33333V16.3333V16.3333V16.3333V16.3333V16.3333V16.3333V2.33333V2.33333V2.33333V2.33333"
                          fill="#FFDDAF"
                        />
                      </svg>
                    </div>
                    <div className="flex flex-col items-center w-fit">
                      <p className="text-[#FFF] font-dMSans text-base font-medium leading-[22px] w-fit tracking-[-0.025em]">
                        +18 More Photos
                      </p>
                    </div>
                    <div className="flex pt-0.5 flex-col items-start w-fit">
                      <div className="flex flex-col items-center w-fit">
                        <p className="text-[#C0C8CC] font-manrope text-[10px] leading-[15px] w-fit tracking-[0.1em]">
                          VIEW FULL DOSSIER
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="property-summary flex py-7 px-20 flex-col items-start bg-[#FBF9F5] w-full">
            <div className="property-summary-layout flex items-start gap-7 w-full">
              <div className="flex pt-1 flex-col items-start gap-3 w-full">
                <div className="flex items-center gap-2 w-fit">
                  <div className="rounded-full bg-[#735A35] w-2 h-2"></div>
                  <p className="text-[#735A35] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.16em]">
                    EXCLUSIVE RESIDENTIAL APARTMENT • PEELAMEDU, COIMBATORE
                  </p>
                </div>
                <div className="flex pt-1 flex-col items-start w-full">
                  <p className="text-[#1B1C1A] font-dMSans text-[40px] font-bold leading-[48px] w-full tracking-[-0.025em]">
                    Modern Living, Designed Around You
                  </p>
                </div>
                <div className="flex items-center gap-[816px] flex-wrap w-full">
                  <div className="flex items-center gap-1.5 w-fit">
                    <svg
                      width="12"
                      height="15"
                      viewBox="0 0 12 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M6 7.5C6.4125 7.5 6.76562 7.35312 7.05937 7.05937C7.35312 6.76562 7.5 6.4125 7.5 6C7.5 5.5875 7.35312 5.23438 7.05937 4.94063C6.76562 4.64688 6.4125 4.5 6 4.5C5.5875 4.5 5.23438 4.64688 4.94063 4.94063C4.64688 5.23438 4.5 5.5875 4.5 6C4.5 6.4125 4.64688 6.76562 4.94063 7.05937C5.23438 7.35312 5.5875 7.5 6 7.5V7.5M6 13.0125C7.525 11.6125 8.65625 10.3406 9.39375 9.19687C10.1313 8.05312 10.5 7.0375 10.5 6.15C10.5 4.7875 10.0656 3.67188 9.19687 2.80312C8.32812 1.93437 7.2625 1.5 6 1.5C4.7375 1.5 3.67188 1.93437 2.80312 2.80312C1.93437 3.67188 1.5 4.7875 1.5 6.15C1.5 7.0375 1.86875 8.05312 2.60625 9.19687C3.34375 10.3406 4.475 11.6125 6 13.0125V13.0125M6 15C3.9875 13.2875 2.48438 11.6969 1.49063 10.2281C0.496875 8.75937 0 7.4 0 6.15C0 4.275 0.603125 2.78125 1.80938 1.66875C3.01562 0.55625 4.4125 0 6 0C7.5875 0 8.98438 0.55625 10.1906 1.66875C11.3969 2.78125 12 4.275 12 6.15C12 7.4 11.5031 8.75937 10.5094 10.2281C9.51562 11.6969 8.0125 13.2875 6 15V15M6 6V6V6V6V6V6V6V6V6V6"
                        fill="#735A35"
                      />
                    </svg>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#4E463B] font-manrope text-sm font-medium leading-5 w-fit">
                        Peelamedu, Coimbatore, Tamil Nadu — Prime Residential
                        Corridor
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#D1C5B7] font-manrope text-sm font-medium leading-5 w-fit">
                      •
                    </p>
                  </div>
                  <div className="flex items-center gap-1 w-fit">
                    <svg
                      width="11"
                      height="14"
                      viewBox="0 0 11 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M4.63333 9.03333L8.4 5.26667L7.45 4.31667L4.63333 7.13333L3.23333 5.73333L2.28333 6.68333L4.63333 9.03333V9.03333M5.33333 13.3333C3.78889 12.9444 2.51389 12.0583 1.50833 10.675C0.502778 9.29167 0 7.75556 0 6.06667V2L5.33333 0L10.6667 2V6.06667C10.6667 7.75556 10.1639 9.29167 9.15833 10.675C8.15278 12.0583 6.87778 12.9444 5.33333 13.3333V13.3333M5.33333 11.9333C6.48889 11.5667 7.44444 10.8333 8.2 9.73333C8.95555 8.63333 9.33333 7.41111 9.33333 6.06667V2.91667L5.33333 1.41667L1.33333 2.91667V6.06667C1.33333 7.41111 1.71111 8.63333 2.46667 9.73333C3.22222 10.8333 4.17778 11.5667 5.33333 11.9333V11.9333M5.33333 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                        fill="#4E616D"
                      />
                    </svg>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#4E616D] font-manrope text-sm font-medium leading-5 w-fit">
                        RERA Approved: TN&#x2F;CB&#x2F;2024&#x2F;0842
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex max-w-[768px] pt-2 flex-col items-start w-[768px]">
                  <p className="text-[#4E463B] font-bodoniModa text-lg leading-[29.25px] w-fit">
                    Discover a thoughtfully designed home that brings together
                    comfort, convenience, and contemporary living. With spacious
                    interiors, well-planned layouts, and a welcoming atmosphere,
                    this property offers the perfect setting for everyday life.
                  </p>
                </div>
              </div>
              <div className="flex p-4 flex-col items-start gap-3 rounded-xl bg-[#F5F3EF] shadow-[01px2px0rgba(0,0,0,0.05)] w-80">
                <div className="flex justify-between items-center w-full">
                  <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                    ACQUISITION VALUE
                  </p>
                  <div className="flex py-0.5 px-2.5 items-center rounded bg-[#FFDDAF] w-fit">
                    <p className="text-[#281800] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                      READY TO MOVE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-0.5 w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#1B1C1A] font-dMSans text-4xl font-bold leading-[45px] w-full tracking-[-0.025em]">
                      {property?.price || "85 Lakhs"}
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#1B1C1A] font-manrope text-xs font-semibold leading-4 w-full">
                      All-inclusive estimated acquisition • ₹5,862 &#x2F; sq.ft
                    </p>
                  </div>
                </div>
                <div className="flex pt-2 justify-between items-center w-full">
                  <div className="flex items-center gap-1 w-fit">
                    <svg
                      width="11"
                      height="14"
                      viewBox="0 0 11 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M5.33333 13.3333C3.78889 12.9444 2.51389 12.0583 1.50833 10.675C0.502778 9.29167 0 7.75556 0 6.06667V2L5.33333 0L10.6667 2V6.06667C10.6667 7.75556 10.1639 9.29167 9.15833 10.675C8.15278 12.0583 6.87778 12.9444 5.33333 13.3333V13.3333M5.33333 11.9333C6.48889 11.5667 7.44444 10.8333 8.2 9.73333C8.95555 8.63333 9.33333 7.41111 9.33333 6.06667V2.91667L5.33333 1.41667L1.33333 2.91667V6.06667C1.33333 7.41111 1.71111 8.63333 2.46667 9.73333C3.22222 10.8333 4.17778 11.5667 5.33333 11.9333V11.9333M5.33333 6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667V6.66667"
                        fill="#735A35"
                      />
                    </svg>
                    <p className="text-[#4E463B] font-manrope text-xs font-semibold leading-4 w-fit">
                      Bank Approved &#40;SBI, HDFC&#41;
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#735A35] font-manrope text-xs font-semibold leading-4 w-fit">
                      0% Brokerage
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex pt-0 pr-20 pb-20 pl-20 flex-col items-start bg-[#FBF9F5] w-full">
                <div className="property-details-sections inline-grid w-full relative">
              <div className="flex flex-col items-start gap-12 w-full absolute left-0 top-0">
                <div className="flex p-7 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex pt-1 flex-col items-start gap-[5px] w-fit">
                      <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                        ARCHITECTURAL DOSSIER
                      </p>
                      <p className="text-[#1B1C1A] font-dMSans text-[28px] font-semibold leading-9 w-fit tracking-[-0.025em]">
                        Everything You Need to Know
                      </p>
                    </div>
                    <div className="flex py-1 px-3 items-start rounded bg-[#F0EEEA] w-fit">
                      <p className="text-[#4E463B] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                        ID: HE-PLM-842
                      </p>
                    </div>
                  </div>
                  <div className="property-feature-grid inline-grid w-full relative">
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-0 top-0">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
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
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            PROPERTY TYPE
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          Apartment
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[173px] top-0">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M0 15V13.3333H1.66667V0H10V0.833333H13.3333V13.3333H15V15H11.6667V2.5H10V15H0V15M3.33333 1.66667V1.66667V13.3333V13.3333V1.66667V1.66667M6.66667 8.33333C6.90278 8.33333 7.10069 8.25347 7.26042 8.09375C7.42014 7.93403 7.5 7.73611 7.5 7.5C7.5 7.26389 7.42014 7.06597 7.26042 6.90625C7.10069 6.74653 6.90278 6.66667 6.66667 6.66667C6.43056 6.66667 6.23264 6.74653 6.07292 6.90625C5.91319 7.06597 5.83333 7.26389 5.83333 7.5C5.83333 7.73611 5.91319 7.93403 6.07292 8.09375C6.23264 8.25347 6.43056 8.33333 6.66667 8.33333V8.33333M3.33333 13.3333H8.33333V1.66667H3.33333V13.3333V13.3333"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            CONFIGURATION
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          3 BHK Premium
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[347px] top-0">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M1.83333 14.1812C1.31944 14.1812 0.885417 14.0041 0.53125 13.65C0.177083 13.2958 0 12.8618 0 12.3479V0.931217C0 0.528439 0.1875 0.247189 0.5625 0.0874669C0.9375 -0.0722553 1.26389 -0.0132275 1.54167 0.26455L3.41667 2.13955L2.29167 3.26455L2.875 3.84788L4 2.72288L6.16667 4.88955L5.04167 6.01455L5.625 6.59788L6.75 5.47288L8.91667 7.63955L7.79167 8.76455L8.375 9.34788L9.5 8.22288L11.6667 10.3896L10.5417 11.5146L11.125 12.0979L12.25 10.9729L13.9167 12.6396C14.1944 12.9173 14.2535 13.2437 14.0938 13.6187C13.934 13.9937 13.6528 14.1812 13.25 14.1812H1.83333V14.1812M2.5 11.6812H9.41667L2.5 4.76455V11.6812V11.6812V11.6812V11.6812"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            BUILT-UP AREA
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          1,450 sq. ft.
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[520px] top-0">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="17"
                            height="12"
                            viewBox="0 0 17 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M0 11.6667V6.66667C0 6.29167 0.0763889 5.95139 0.229167 5.64583C0.381944 5.34028 0.583333 5.06944 0.833333 4.83333V2.5C0.833333 1.80556 1.07639 1.21528 1.5625 0.729167C2.04861 0.243056 2.63889 0 3.33333 0H6.66667C6.98611 0 7.28472 0.0590278 7.5625 0.177083C7.84028 0.295139 8.09722 0.458333 8.33333 0.666667C8.56944 0.458333 8.82639 0.295139 9.10417 0.177083C9.38194 0.0590278 9.68056 0 10 0H13.3333C14.0278 0 14.6181 0.243056 15.1042 0.729167C15.5903 1.21528 15.8333 1.80556 15.8333 2.5V4.83333C16.0833 5.06944 16.2847 5.34028 16.4375 5.64583C16.5903 5.95139 16.6667 6.29167 16.6667 6.66667V11.6667H15V10H1.66667V11.6667H0V11.6667M9.16667 4.16667H14.1667V2.5C14.1667 2.26389 14.0868 2.06597 13.9271 1.90625C13.7674 1.74653 13.5694 1.66667 13.3333 1.66667H10C9.76389 1.66667 9.56597 1.74653 9.40625 1.90625C9.24653 2.06597 9.16667 2.26389 9.16667 2.5V4.16667V4.16667M2.5 4.16667H7.5V2.5C7.5 2.26389 7.42014 2.06597 7.26042 1.90625C7.10069 1.74653 6.90278 1.66667 6.66667 1.66667H3.33333C3.09722 1.66667 2.89931 1.74653 2.73958 1.90625C2.57986 2.06597 2.5 2.26389 2.5 2.5V4.16667V4.16667M1.66667 8.33333H15V6.66667C15 6.43056 14.9201 6.23264 14.7604 6.07292C14.6007 5.91319 14.4028 5.83333 14.1667 5.83333H2.5C2.26389 5.83333 2.06597 5.91319 1.90625 6.07292C1.74653 6.23264 1.66667 6.43056 1.66667 6.66667V8.33333V8.33333M15 8.33333V8.33333H1.66667V8.33333C1.66667 8.33333 1.74653 8.33333 1.90625 8.33333C2.06597 8.33333 2.26389 8.33333 2.5 8.33333H14.1667C14.4028 8.33333 14.6007 8.33333 14.7604 8.33333C14.9201 8.33333 15 8.33333 15 8.33333V8.33333"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            BEDROOMS
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          3 Ensuite
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-0 top-[125px]">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M4.16667 5.83333C3.70833 5.83333 3.31597 5.67014 2.98958 5.34375C2.66319 5.01736 2.5 4.625 2.5 4.16667C2.5 3.70833 2.66319 3.31597 2.98958 2.98958C3.31597 2.66319 3.70833 2.5 4.16667 2.5C4.625 2.5 5.01736 2.66319 5.34375 2.98958C5.67014 3.31597 5.83333 3.70833 5.83333 4.16667C5.83333 4.625 5.67014 5.01736 5.34375 5.34375C5.01736 5.67014 4.625 5.83333 4.16667 5.83333V5.83333M2.5 16.6667C2.26389 16.6667 2.06597 16.5868 1.90625 16.4271C1.74653 16.2674 1.66667 16.0694 1.66667 15.8333V15.8333C1.20833 15.8333 0.815972 15.6701 0.489583 15.3438C0.163194 15.0174 0 14.625 0 14.1667V9.16667H2.5V8.54167C2.5 8.01389 2.68056 7.56944 3.04167 7.20833C3.40278 6.84722 3.84722 6.66667 4.375 6.66667C4.65278 6.66667 4.90972 6.72222 5.14583 6.83333C5.38194 6.94444 5.59722 7.09722 5.79167 7.29167L6.95833 8.58333C7.06944 8.69444 7.17708 8.79861 7.28125 8.89583C7.38542 8.99306 7.5 9.08333 7.625 9.16667H13.3333V2.375C13.3333 2.18056 13.2639 2.01389 13.125 1.875C12.9861 1.73611 12.8194 1.66667 12.625 1.66667C12.5417 1.66667 12.4618 1.68403 12.3854 1.71875C12.309 1.75347 12.2361 1.80556 12.1667 1.875L11.125 2.91667C11.1944 3.15278 11.2083 3.38542 11.1667 3.61458C11.125 3.84375 11.0417 4.05556 10.9167 4.25L8.625 1.91667C8.81944 1.79167 9.02778 1.71181 9.25 1.67708C9.47222 1.64236 9.69444 1.66667 9.91667 1.75L10.9583 0.708333C11.1806 0.486111 11.434 0.3125 11.7188 0.1875C12.0035 0.0625 12.3056 0 12.625 0C13.2917 0 13.8542 0.229167 14.3125 0.6875C14.7708 1.14583 15 1.70833 15 2.375V9.16667H16.6667V14.1667C16.6667 14.625 16.5035 15.0174 16.1771 15.3438C15.8507 15.6701 15.4583 15.8333 15 15.8333V15.8333C15 16.0694 14.9201 16.2674 14.7604 16.4271C14.6007 16.5868 14.4028 16.6667 14.1667 16.6667H2.5V16.6667M1.66667 14.1667H15V14.1667V14.1667V10.8333H1.66667V14.1667V14.1667V14.1667V14.1667M1.66667 14.1667V14.1667V14.1667V14.1667H15V14.1667V14.1667V14.1667H1.66667V14.1667"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            BATHROOMS
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          2 Designer Baths
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[173px] top-[125px]">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="15"
                            height="14"
                            viewBox="0 0 15 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M2.5 11.6667V12.5C2.5 12.7361 2.42014 12.934 2.26042 13.0938C2.10069 13.2535 1.90278 13.3333 1.66667 13.3333H0.833333C0.597222 13.3333 0.399306 13.2535 0.239583 13.0938C0.0798611 12.934 0 12.7361 0 12.5V5.83333L1.75 0.833333C1.83333 0.583333 1.98264 0.381944 2.19792 0.229167C2.41319 0.0763889 2.65278 0 2.91667 0H12.0833C12.3472 0 12.5868 0.0763889 12.8021 0.229167C13.0174 0.381944 13.1667 0.583333 13.25 0.833333L15 5.83333V12.5C15 12.7361 14.9201 12.934 14.7604 13.0938C14.6007 13.2535 14.4028 13.3333 14.1667 13.3333H13.3333C13.0972 13.3333 12.8993 13.2535 12.7396 13.0938C12.5799 12.934 12.5 12.7361 12.5 12.5V11.6667H2.5V11.6667M2.33333 4.16667H12.6667L11.7917 1.66667H3.20833L2.33333 4.16667V4.16667M1.66667 5.83333V5.83333V10V10V5.83333V5.83333M3.75 9.16667C4.09722 9.16667 4.39236 9.04514 4.63542 8.80208C4.87847 8.55903 5 8.26389 5 7.91667C5 7.56944 4.87847 7.27431 4.63542 7.03125C4.39236 6.78819 4.09722 6.66667 3.75 6.66667C3.40278 6.66667 3.10764 6.78819 2.86458 7.03125C2.62153 7.27431 2.5 7.56944 2.5 7.91667C2.5 8.26389 2.62153 8.55903 2.86458 8.80208C3.10764 9.04514 3.40278 9.16667 3.75 9.16667V9.16667M11.25 9.16667C11.5972 9.16667 11.8924 9.04514 12.1354 8.80208C12.3785 8.55903 12.5 8.26389 12.5 7.91667C12.5 7.56944 12.3785 7.27431 12.1354 7.03125C11.8924 6.78819 11.5972 6.66667 11.25 6.66667C10.9028 6.66667 10.6076 6.78819 10.3646 7.03125C10.1215 7.27431 10 7.56944 10 7.91667C10 8.26389 10.1215 8.55903 10.3646 8.80208C10.6076 9.04514 10.9028 9.16667 11.25 9.16667V9.16667M1.66667 10H13.3333V5.83333H1.66667V10V10"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            PARKING
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          1 Covered Bay
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[347px] top-[125px]">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="19"
                            height="15"
                            viewBox="0 0 19 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M3.33333 15C3.09722 15 2.89931 14.9201 2.73958 14.7604C2.57986 14.6007 2.5 14.4028 2.5 14.1667V13.3333V13.3333C1.80556 13.3333 1.21528 13.0903 0.729167 12.6042C0.243056 12.1181 0 11.5278 0 10.8333V6.66667C0 5.97222 0.243056 5.38194 0.729167 4.89583C1.21528 4.40972 1.80556 4.16667 2.5 4.16667V4.16667V2.5C2.5 1.80556 2.74306 1.21528 3.22917 0.729167C3.71528 0.243056 4.30556 0 5 0H13.3333C14.0278 0 14.6181 0.243056 15.1042 0.729167C15.5903 1.21528 15.8333 1.80556 15.8333 2.5V4.16667V4.16667C16.5278 4.16667 17.1181 4.40972 17.6042 4.89583C18.0903 5.38194 18.3333 5.97222 18.3333 6.66667V10.8333C18.3333 11.5278 18.0903 12.1181 17.6042 12.6042C17.1181 13.0903 16.5278 13.3333 15.8333 13.3333V13.3333V14.1667C15.8333 14.4028 15.7535 14.6007 15.5938 14.7604C15.434 14.9201 15.2361 15 15 15C14.7639 15 14.566 14.9201 14.4062 14.7604C14.2465 14.6007 14.1667 14.4028 14.1667 14.1667V13.3333H4.16667V14.1667C4.16667 14.4028 4.08681 14.6007 3.92708 14.7604C3.76736 14.9201 3.56944 15 3.33333 15V15M2.5 11.6667H15.8333C16.0694 11.6667 16.2674 11.5868 16.4271 11.4271C16.5868 11.2674 16.6667 11.0694 16.6667 10.8333V6.66667C16.6667 6.43056 16.5868 6.23264 16.4271 6.07292C16.2674 5.91319 16.0694 5.83333 15.8333 5.83333C15.5972 5.83333 15.3993 5.91319 15.2396 6.07292C15.0799 6.23264 15 6.43056 15 6.66667V10H3.33333V6.66667C3.33333 6.43056 3.25347 6.23264 3.09375 6.07292C2.93403 5.91319 2.73611 5.83333 2.5 5.83333C2.26389 5.83333 2.06597 5.91319 1.90625 6.07292C1.74653 6.23264 1.66667 6.43056 1.66667 6.66667V10.8333C1.66667 11.0694 1.74653 11.2674 1.90625 11.4271C2.06597 11.5868 2.26389 11.6667 2.5 11.6667V11.6667M5 8.33333H13.3333V6.66667C13.3333 6.29167 13.4097 5.95139 13.5625 5.64583C13.7153 5.34028 13.9167 5.06944 14.1667 4.83333V2.5C14.1667 2.26389 14.0868 2.06597 13.9271 1.90625C13.7674 1.74653 13.5694 1.66667 13.3333 1.66667H5C4.76389 1.66667 4.56597 1.74653 4.40625 1.90625C4.24653 2.06597 4.16667 2.26389 4.16667 2.5V4.83333C4.41667 5.06944 4.61806 5.34028 4.77083 5.64583C4.92361 5.95139 5 6.29167 5 6.66667V8.33333V8.33333M9.16667 8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333V8.33333M9.16667 11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667V11.6667M9.16667 10V10V10V10V10V10V10V10V10V10V10V10V10V10V10V10V10V10V10V10"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            FURNISHING
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          Semi-Furnished
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3.5 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[520px] top-[125px]">
                      <div className="flex pb-2 flex-col items-start w-8 h-10">
                        <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="20"
                            height="10"
                            viewBox="0 0 20 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M5 6.66667C4.54167 6.66667 4.14931 6.50347 3.82292 6.17708C3.49653 5.85069 3.33333 5.45833 3.33333 5C3.33333 4.54167 3.49653 4.14931 3.82292 3.82292C4.14931 3.49653 4.54167 3.33333 5 3.33333C5.45833 3.33333 5.85069 3.49653 6.17708 3.82292C6.50347 4.14931 6.66667 4.54167 6.66667 5C6.66667 5.45833 6.50347 5.85069 6.17708 6.17708C5.85069 6.50347 5.45833 6.66667 5 6.66667V6.66667M5 10C3.61111 10 2.43056 9.51389 1.45833 8.54167C0.486111 7.56944 0 6.38889 0 5C0 3.61111 0.486111 2.43056 1.45833 1.45833C2.43056 0.486111 3.61111 0 5 0C5.93056 0 6.77431 0.229167 7.53125 0.6875C8.28819 1.14583 8.88889 1.75 9.33333 2.5H16.6667L19.1667 5L15.4167 8.75L13.75 7.5L12.0833 8.75L10.3125 7.5H9.33333C8.88889 8.25 8.28819 8.85417 7.53125 9.3125C6.77431 9.77083 5.93056 10 5 10V10M5 8.33333C5.77778 8.33333 6.46181 8.09722 7.05208 7.625C7.64236 7.15278 8.03472 6.55556 8.22917 5.83333H10.8333L12.0417 6.6875L13.75 5.41667L15.2292 6.5625L16.7917 5L15.9583 4.16667H8.22917C8.03472 3.44444 7.64236 2.84722 7.05208 2.375C6.46181 1.90278 5.77778 1.66667 5 1.66667C4.08333 1.66667 3.29861 1.99306 2.64583 2.64583C1.99306 3.29861 1.66667 4.08333 1.66667 5C1.66667 5.91667 1.99306 6.70139 2.64583 7.35417C3.29861 8.00694 4.08333 8.33333 5 8.33333V8.33333"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="flex pb-0.5 flex-col items-start -space-y-px w-full">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-full tracking-[0.14em]">
                            AVAILABILITY
                          </p>
                        </div>
                        <p className="text-[#1B1C1A] font-dMSans text-base font-medium leading-6 w-fit">
                          Ready to Move
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-7 flex-col items-start gap-[15px] rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex pt-1 flex-col items-start gap-[5px] w-full">
                    <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                      LIVING CONCEPT
                    </p>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[28px] font-semibold leading-9 w-full tracking-[-0.025em]">
                        A Place That Feels Like Home
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-[15px] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E463B] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        Designed with mindful consideration of natural lighting,
                        cross-ventilation, and modern spatial harmony, this 3
                        BHK residence delivers an exceptional urban sanctuary in
                        Coimbatore's bustling Peelamedu precinct. Every room
                        transitions naturally into the next, balancing open
                        entertaining zones with quiet private quarters. High
                        ceilings, premium Italian vitrified tiling, and large
                        floor-to- ceiling glass sliding doors invite gentle
                        morning light and pleasant breezes from the Western
                        Ghats.
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E463B] font-bodoniModa text-[15px] leading-[24.38px] w-full">
                        The property features a bespoke German-engineered
                        modular kitchen, concealed copper wiring, and superior
                        acoustic insulation ensuring tranquil living amidst
                        vibrant city connectivity. Generous balconies act as
                        organic extensions of the living space, seamlessly
                        integrating greenery with refined interior architectural
                        craft.
                      </p>
                    </div>
                  </div>
                  <div className="flex pt-[9px] justify-center items-start gap-3 w-full">
                    <div className="flex p-3 items-center gap-3 rounded-lg bg-[#F5F3EF] w-full">
                      <svg
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M10 3V0H12V3H10V3M10 22V19H12V22H10V22M19 12V10H22V12H19V12M0 12V10H3V12H0V12M17.7 5.7L16.3 4.3L18.05 2.5L19.5 3.95L17.7 5.7V5.7M3.95 19.5L2.5 18.05L4.3 16.3L5.7 17.7L3.95 19.5V19.5M18.05 19.5L16.3 17.7L17.7 16.3L19.5 18.05L18.05 19.5V19.5M4.3 5.7L2.5 3.95L3.95 2.5L5.7 4.3L4.3 5.7V5.7M11 17C9.33333 17 7.91667 16.4167 6.75 15.25C5.58333 14.0833 5 12.6667 5 11C5 9.33333 5.58333 7.91667 6.75 6.75C7.91667 5.58333 9.33333 5 11 5C12.6667 5 14.0833 5.58333 15.25 6.75C16.4167 7.91667 17 9.33333 17 11C17 12.6667 16.4167 14.0833 15.25 15.25C14.0833 16.4167 12.6667 17 11 17V17M11 15C12.1167 15 13.0625 14.6125 13.8375 13.8375C14.6125 13.0625 15 12.1167 15 11C15 9.88333 14.6125 8.9375 13.8375 8.1625C13.0625 7.3875 12.1167 7 11 7C9.88333 7 8.9375 7.3875 8.1625 8.1625C7.3875 8.9375 7 9.88333 7 11C7 12.1167 7.3875 13.0625 8.1625 13.8375C8.9375 14.6125 9.88333 15 11 15V15M11 11V11V11V11V11V11V11V11V11V11"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex pb-[5px] flex-col items-start gap-[5px] w-fit">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#1B1C1A] font-manrope text-xs font-semibold leading-4 w-fit">
                            East Facing
                          </p>
                        </div>
                        <p className="text-[#7F766A] font-manrope text-[10px] leading-[15px] w-fit">
                          100% Vaastu Compliant
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3 items-center gap-3 rounded-lg bg-[#F5F3EF] w-full">
                      <svg
                        width="20"
                        height="17"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M9.5 17C8.66667 17 7.95833 16.7083 7.375 16.125C6.79167 15.5417 6.5 14.8333 6.5 14H8.5C8.5 14.2833 8.59583 14.5208 8.7875 14.7125C8.97917 14.9042 9.21667 15 9.5 15C9.78333 15 10.0208 14.9042 10.2125 14.7125C10.4042 14.5208 10.5 14.2833 10.5 14C10.5 13.7167 10.4042 13.4792 10.2125 13.2875C10.0208 13.0958 9.78333 13 9.5 13H0V11H9.5C10.3333 11 11.0417 11.2917 11.625 11.875C12.2083 12.4583 12.5 13.1667 12.5 14C12.5 14.8333 12.2083 15.5417 11.625 16.125C11.0417 16.7083 10.3333 17 9.5 17V17M0 7V5H13.5C13.9333 5 14.2917 4.85833 14.575 4.575C14.8583 4.29167 15 3.93333 15 3.5C15 3.06667 14.8583 2.70833 14.575 2.425C14.2917 2.14167 13.9333 2 13.5 2C13.0667 2 12.7083 2.14167 12.425 2.425C12.1417 2.70833 12 3.06667 12 3.5H10C10 2.51667 10.3375 1.6875 11.0125 1.0125C11.6875 0.3375 12.5167 0 13.5 0C14.4833 0 15.3125 0.3375 15.9875 1.0125C16.6625 1.6875 17 2.51667 17 3.5C17 4.48333 16.6625 5.3125 15.9875 5.9875C15.3125 6.6625 14.4833 7 13.5 7H0V7M16.5 15V13C16.9333 13 17.2917 12.8583 17.575 12.575C17.8583 12.2917 18 11.9333 18 11.5C18 11.0667 17.8583 10.7083 17.575 10.425C17.2917 10.1417 16.9333 10 16.5 10H0V8H16.5C17.4833 8 18.3125 8.3375 18.9875 9.0125C19.6625 9.6875 20 10.5167 20 11.5C20 12.4833 19.6625 13.3125 18.9875 13.9875C18.3125 14.6625 17.4833 15 16.5 15V15"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex pb-[5px] flex-col items-start gap-[5px] w-fit">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#1B1C1A] font-manrope text-xs font-semibold leading-4 w-fit">
                            3-Sided Open
                          </p>
                        </div>
                        <p className="text-[#7F766A] font-manrope text-[10px] leading-[15px] w-fit">
                          Ghats Cross Ventilation
                        </p>
                      </div>
                    </div>
                    <div className="flex p-3 items-center gap-3 rounded-lg bg-[#F5F3EF] w-full">
                      <svg
                        width="16"
                        height="20"
                        viewBox="0 0 16 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M8.275 17C8.475 16.9833 8.64583 16.9042 8.7875 16.7625C8.92917 16.6208 9 16.45 9 16.25C9 16.0167 8.925 15.8292 8.775 15.6875C8.625 15.5458 8.43333 15.4833 8.2 15.5C7.51667 15.55 6.79167 15.3625 6.025 14.9375C5.25833 14.5125 4.775 13.7417 4.575 12.625C4.54167 12.4417 4.45417 12.2917 4.3125 12.175C4.17083 12.0583 4.00833 12 3.825 12C3.59167 12 3.4 12.0875 3.25 12.2625C3.1 12.4375 3.05 12.6417 3.1 12.875C3.38333 14.3917 4.05 15.475 5.1 16.125C6.15 16.775 7.20833 17.0667 8.275 17V17M8 20C5.71667 20 3.8125 19.2167 2.2875 17.65C0.7625 16.0833 0 14.1333 0 11.8C0 10.1333 0.6625 8.32083 1.9875 6.3625C3.3125 4.40417 5.31667 2.28333 8 0C10.6833 2.28333 12.6875 4.40417 14.0125 6.3625C15.3375 8.32083 16 10.1333 16 11.8C16 14.1333 15.2375 16.0833 13.7125 17.65C12.1875 19.2167 10.2833 20 8 20V20M8 18C9.73333 18 11.1667 17.4125 12.3 16.2375C13.4333 15.0625 14 13.5833 14 11.8C14 10.5833 13.4958 9.20833 12.4875 7.675C11.4792 6.14167 9.98333 4.46667 8 2.65C6.01667 4.46667 4.52083 6.14167 3.5125 7.675C2.50417 9.20833 2 10.5833 2 11.8C2 13.5833 2.56667 15.0625 3.7 16.2375C4.83333 17.4125 6.26667 18 8 18V18M8 10V10V10V10V10V10V10V10V10V10"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex pb-[5px] flex-col items-start gap-[5px] w-fit">
                        <div className="flex flex-col items-start w-full">
                          <p className="text-[#1B1C1A] font-manrope text-xs font-semibold leading-4 w-fit">
                            Siruvani Water
                          </p>
                        </div>
                        <p className="text-[#7F766A] font-manrope text-[10px] leading-[15px] w-fit">
                          Dual Water Connections
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-7 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex pt-1 flex-col items-start gap-[5px] w-full">
                    <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                      RESIDENT PERKS
                    </p>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[28px] font-semibold leading-9 w-full tracking-[-0.025em]">
                        Comfort Comes Standard
                      </p>
                    </div>
                  </div>
                  <div className="property-amenities-grid inline-grid w-full relative">
                    <div className="flex p-4 flex-col items-start gap-[3px] rounded-xl bg-[#F5F3EF] w-full absolute left-0 top-0">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="15"
                          height="19"
                          viewBox="0 0 15 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M7.33333 18.3333C5.20972 17.7986 3.4566 16.5802 2.07396 14.6781C0.691319 12.776 0 10.6639 0 8.34167V2.75L7.33333 0L14.6667 2.75V8.34167C14.6667 10.6639 13.9753 12.776 12.5927 14.6781C11.2101 16.5802 9.45694 17.7986 7.33333 18.3333V18.3333M7.33333 16.4083C8.92222 15.9042 10.2361 14.8958 11.275 13.3833C12.3139 11.8708 12.8333 10.1903 12.8333 8.34167V4.01042L7.33333 1.94792L1.83333 4.01042V8.34167C1.83333 10.1903 2.35278 11.8708 3.39167 13.3833C4.43056 14.8958 5.74444 15.9042 7.33333 16.4083V16.4083M7.33333 9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667V9.16667"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              24&#x2F;7 Security
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Guarded access control and smart biometric visitor
                              gates.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[173px] top-0">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="17"
                          height="15"
                          viewBox="0 0 17 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M2.75 12.8333V13.75C2.75 14.0097 2.66215 14.2274 2.48646 14.4031C2.31076 14.5788 2.09306 14.6667 1.83333 14.6667H0.916667C0.656944 14.6667 0.439236 14.5788 0.263542 14.4031C0.0878472 14.2274 0 14.0097 0 13.75V6.41667L1.925 0.916667C2.01667 0.641667 2.1809 0.420139 2.41771 0.252083C2.65451 0.0840278 2.91806 0 3.20833 0H13.2917C13.5819 0 13.8455 0.0840278 14.0823 0.252083C14.3191 0.420139 14.4833 0.641667 14.575 0.916667L16.5 6.41667V13.75C16.5 14.0097 16.4122 14.2274 16.2365 14.4031C16.0608 14.5788 15.8431 14.6667 15.5833 14.6667H14.6667C14.4069 14.6667 14.1892 14.5788 14.0135 14.4031C13.8378 14.2274 13.75 14.0097 13.75 13.75V12.8333H2.75V12.8333M2.56667 4.58333H13.9333L12.9708 1.83333H3.52917L2.56667 4.58333V4.58333M1.83333 6.41667V6.41667V11V11V6.41667V6.41667M4.125 10.0833C4.50694 10.0833 4.8316 9.94965 5.09896 9.68229C5.36632 9.41493 5.5 9.09028 5.5 8.70833C5.5 8.32639 5.36632 8.00174 5.09896 7.73438C4.8316 7.46701 4.50694 7.33333 4.125 7.33333C3.74306 7.33333 3.4184 7.46701 3.15104 7.73438C2.88368 8.00174 2.75 8.32639 2.75 8.70833C2.75 9.09028 2.88368 9.41493 3.15104 9.68229C3.4184 9.94965 3.74306 10.0833 4.125 10.0833V10.0833M12.375 10.0833C12.7569 10.0833 13.0816 9.94965 13.349 9.68229C13.6163 9.41493 13.75 9.09028 13.75 8.70833C13.75 8.32639 13.6163 8.00174 13.349 7.73438C13.0816 7.46701 12.7569 7.33333 12.375 7.33333C11.9931 7.33333 11.6684 7.46701 11.401 7.73438C11.1337 8.00174 11 8.32639 11 8.70833C11 9.09028 11.1337 9.41493 11.401 9.68229C11.6684 9.94965 11.9931 10.0833 12.375 10.0833V10.0833M1.83333 11H14.6667V6.41667H1.83333V11V11"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              Dedicated Parking
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Reserved basement covered bay with EV charging
                              conduit.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 flex-col items-start gap-[3px] rounded-xl bg-[#F5F3EF] w-full absolute left-[347px] top-0">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="15"
                          height="19"
                          viewBox="0 0 15 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M6.00417 14.85L10.7479 9.16667H7.08125L7.74583 3.96458L3.50625 10.0833H6.69167L6.00417 14.85V14.85M3.66667 18.3333L4.58333 11.9167H0L8.25 0H10.0833L9.16667 7.33333H14.6667L5.5 18.3333H3.66667V18.3333M7.12708 9.39583V9.39583V9.39583V9.39583V9.39583V9.39583V9.39583V9.39583"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              Power Backup
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              100% full DG generator switchover for all internal
                              points.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 flex-col items-start gap-[23px] rounded-xl bg-[#F5F3EF] w-full absolute left-[520px] top-0">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="17"
                          height="17"
                          viewBox="0 0 17 17"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M3.66667 13.75H6.41667V10.0833H7.33333V7.79167C7.33333 7.2875 7.15382 6.8559 6.79479 6.49687C6.43576 6.13785 6.00417 5.95833 5.5 5.95833H4.58333C4.07917 5.95833 3.64757 6.13785 3.28854 6.49687C2.92951 6.8559 2.75 7.2875 2.75 7.79167V10.0833H3.66667V13.75V13.75M5.04167 5.04167C5.3625 5.04167 5.63368 4.9309 5.85521 4.70937C6.07674 4.48785 6.1875 4.21667 6.1875 3.89583C6.1875 3.575 6.07674 3.30382 5.85521 3.08229C5.63368 2.86076 5.3625 2.75 5.04167 2.75C4.72083 2.75 4.44965 2.86076 4.22813 3.08229C4.0066 3.30382 3.89583 3.575 3.89583 3.89583C3.89583 4.21667 4.0066 4.48785 4.22813 4.70937C4.44965 4.9309 4.72083 5.04167 5.04167 5.04167V5.04167M9.16667 7.33333H13.75L11.4583 3.66667L9.16667 7.33333V7.33333M11.4583 12.8333L13.75 9.16667H9.16667L11.4583 12.8333V12.8333M1.83333 16.5C1.32917 16.5 0.897569 16.3205 0.538542 15.9615C0.179514 15.6024 0 15.1708 0 14.6667V1.83333C0 1.32917 0.179514 0.897569 0.538542 0.538542C0.897569 0.179514 1.32917 0 1.83333 0H14.6667C15.1708 0 15.6024 0.179514 15.9615 0.538542C16.3205 0.897569 16.5 1.32917 16.5 1.83333V14.6667C16.5 15.1708 16.3205 15.6024 15.9615 15.9615C15.6024 16.3205 15.1708 16.5 14.6667 16.5H1.83333V16.5M1.83333 14.6667H14.6667V14.6667V14.6667V1.83333V1.83333V1.83333H1.83333V1.83333V1.83333V14.6667V14.6667V14.6667V14.6667M1.83333 14.6667V14.6667V14.6667V1.83333V1.83333V1.83333V1.83333V1.83333V1.83333V14.6667V14.6667V14.6667V14.6667V14.6667"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              High-Speed Lifts
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Dual automatic Schindler stretcher elevators with
                              ARD.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 flex-col items-start gap-[43px] rounded-xl bg-[#F5F3EF] w-full absolute left-0 top-[201px]">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="16"
                          height="22"
                          viewBox="0 0 16 22"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M3.94167 21.0833C3.75833 21.0833 3.59792 21.0146 3.46042 20.8771C3.32292 20.7396 3.25417 20.5792 3.25417 20.3958C3.25417 20.2125 3.32292 20.0521 3.46042 19.9146C3.59792 19.7771 3.75833 19.7083 3.94167 19.7083C4.125 19.7083 4.28542 19.7771 4.42292 19.9146C4.56042 20.0521 4.62917 20.2125 4.62917 20.3958C4.62917 20.5792 4.56042 20.7396 4.42292 20.8771C4.28542 21.0146 4.125 21.0833 3.94167 21.0833V21.0833M11.7333 21.0833C11.55 21.0833 11.3896 21.0146 11.2521 20.8771C11.1146 20.7396 11.0458 20.5792 11.0458 20.3958C11.0458 20.2125 11.1146 20.0521 11.2521 19.9146C11.3896 19.7771 11.55 19.7083 11.7333 19.7083C11.9167 19.7083 12.0771 19.7771 12.2146 19.9146C12.3521 20.0521 12.4208 20.2125 12.4208 20.3958C12.4208 20.5792 12.3521 20.7396 12.2146 20.8771C12.0771 21.0146 11.9167 21.0833 11.7333 21.0833V21.0833M3.48333 19.25C2.79583 19.25 2.16181 19.101 1.58125 18.8031C1.00069 18.5052 0.519444 18.1042 0.1375 17.6C0.0916667 17.5236 0.0572917 17.4549 0.034375 17.3937C0.0114583 17.3326 0 17.2639 0 17.1875C0 17.0042 0.0611111 16.8438 0.183333 16.7062C0.305556 16.5687 0.473611 16.5 0.6875 16.5C0.809722 16.5 0.912847 16.5229 0.996875 16.5688C1.0809 16.6146 1.16111 16.6833 1.2375 16.775C1.42083 17.0347 1.65382 17.2524 1.93646 17.4281C2.2191 17.6038 2.52083 17.7299 2.84167 17.8062V17.8062L5.70625 14.3458L4.49167 10.5417C4.41528 10.2819 4.39236 10.0222 4.42292 9.7625C4.45347 9.50278 4.5375 9.25833 4.675 9.02917L6.875 5.5H4.72083L2.97917 8.29583L1.42083 7.33333L3.7125 3.66667H8.9375C9.35 3.66667 9.68229 3.78125 9.93437 4.01042C10.1865 4.23958 10.3583 4.45347 10.45 4.65208L10.9312 5.75208C11.2368 6.48542 11.7295 7.08507 12.4094 7.55104C13.0892 8.01701 13.8569 8.25 14.7125 8.25V10.0833C13.6431 10.0833 12.6653 9.82743 11.7792 9.31563C10.8931 8.80382 10.1826 8.12778 9.64792 7.2875L7.99792 9.92292L11.9625 12.375V17.875H12.2375C12.6806 17.875 13.0931 17.7757 13.475 17.5771C13.8569 17.3785 14.1778 17.1111 14.4375 16.775C14.5139 16.6833 14.5941 16.6146 14.6781 16.5688C14.7622 16.5229 14.8653 16.5 14.9875 16.5C15.1861 16.5 15.3503 16.5687 15.4802 16.7062C15.6101 16.8438 15.675 17.0042 15.675 17.1875C15.675 17.2639 15.6635 17.3326 15.6406 17.3937C15.6177 17.4549 15.5833 17.5236 15.5375 17.6C15.1556 18.1042 14.6819 18.5052 14.1167 18.8031C13.5514 19.101 12.925 19.25 12.2375 19.25H3.48333V19.25M5.17917 17.875H10.1292V13.6583L6.92083 11.6417L7.8375 14.6667L5.17917 17.875V17.875M11.0458 3.66667C10.5417 3.66667 10.1101 3.48715 9.75104 3.12812C9.39201 2.7691 9.2125 2.3375 9.2125 1.83333C9.2125 1.32917 9.39201 0.897569 9.75104 0.538542C10.1101 0.179514 10.5417 0 11.0458 0C11.55 0 11.9816 0.179514 12.3406 0.538542C12.6997 0.897569 12.8792 1.32917 12.8792 1.83333C12.8792 2.3375 12.6997 2.7691 12.3406 3.12812C11.9816 3.48715 11.55 3.66667 11.0458 3.66667V3.66667"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              Children's Play
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Safe rubberized turf zone with swings and slides.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 flex-col items-start gap-5 rounded-xl bg-[#F5F3EF] w-full absolute left-[173px] top-[201px]">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="17"
                          height="19"
                          viewBox="0 0 17 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M10.0375 18.3333H6.4625V14.6667H0L3.66667 9.16667H1.83333L8.25 0L14.6667 9.16667H12.8333L16.5 14.6667H10.0375V18.3333V18.3333M3.4375 12.8333H7.10417H5.3625H8.25H11.1375H9.39583H13.0625H3.4375V12.8333M3.4375 12.8333H13.0625L9.39583 7.33333H11.1375L8.25 3.20833L5.3625 7.33333H7.10417L3.4375 12.8333V12.8333"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              Landscaped Garden
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Manicured flora, reflection terrace, and zen
                              walkway.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 flex-col justify-between items-start rounded-xl bg-[#F5F3EF] w-full absolute left-[347px] top-[201px]">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="19"
                          height="15"
                          viewBox="0 0 19 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M1.83333 14.6667C1.32917 14.6667 0.897569 14.4872 0.538542 14.1281C0.179514 13.7691 0 13.3375 0 12.8333V1.83333C0 1.32917 0.179514 0.897569 0.538542 0.538542C0.897569 0.179514 1.32917 0 1.83333 0H12.8333C13.3375 0 13.7691 0.179514 14.1281 0.538542C14.4872 0.897569 14.6667 1.32917 14.6667 1.83333V5.95833L18.3333 2.29167V12.375L14.6667 8.70833V12.8333C14.6667 13.3375 14.4872 13.7691 14.1281 14.1281C13.7691 14.4872 13.3375 14.6667 12.8333 14.6667H1.83333V14.6667M1.83333 12.8333H12.8333V12.8333V12.8333V1.83333V1.83333V1.83333H1.83333V1.83333V1.83333V12.8333V12.8333V12.8333V12.8333M1.83333 12.8333V12.8333V12.8333V1.83333V1.83333V1.83333V1.83333V1.83333V1.83333V12.8333V12.8333V12.8333V12.8333V12.8333"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              CCTV Surveillance
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              32 HD cameras monitoring perimeter and corridors
                              24&#x2F;7.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex p-4 flex-col items-start gap-[23px] rounded-xl bg-[#F5F3EF] w-full absolute left-[520px] top-[201px]">
                      <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-10 h-10">
                        <svg
                          width="19"
                          height="19"
                          viewBox="0 0 19 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M10.3583 18.15L9.075 16.8667L12.3292 13.6125L4.5375 5.82083L1.28333 9.075L0 7.79167L1.28333 6.4625L0 5.17917L1.925 3.25417L0.641667 1.925L1.925 0.641667L3.25417 1.925L5.17917 0L6.4625 1.28333L7.79167 0L9.075 1.28333L5.82083 4.5375L13.6125 12.3292L16.8667 9.075L18.15 10.3583L16.8667 11.6875L18.15 12.9708L16.225 14.8958L17.5083 16.225L16.225 17.5083L14.8958 16.225L12.9708 18.15L11.6875 16.8667L10.3583 18.15V18.15"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <div className="flex pt-2 flex-col items-start w-full">
                        <div className="flex flex-col items-start w-full">
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#1B1C1A] font-dMSans text-[15px] font-semibold leading-[22.5px] w-full">
                              Fitness Club
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Equipped air- conditioned gym with free weights
                              and cardio.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex p-7 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex pt-1 flex-col items-start gap-[5px] w-fit">
                      <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                        DIMENSIONS &amp; BLUEPRINT
                      </p>
                      <p className="text-[#1B1C1A] font-dMSans text-[28px] font-semibold leading-9 w-fit tracking-[-0.025em]">
                        Floor Plan &amp; Space Breakdown
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#7F766A] font-manrope text-xs font-semibold leading-4 w-fit">
                        Total Built-Up: 1,450 sq.ft &#40;Carpet: 1,180
                        sq.ft&#41;
                      </p>
                    </div>
                  </div>
                  <div className="flex p-6 flex-col items-start rounded-xl bg-[#F5F3EF] w-full overflow-hidden">
                    <div className="w-full h-[265px] overflow-hidden relative">
                      <div className="w-[282px] h-[149px] absolute left-[17px] top-[17px]">
                        <svg
                          width="283"
                          height="151"
                          viewBox="0 0 283 151"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[282px] h-[149px] absolute left-0 top-0 "
                        >
                          <path
                            d="M0.621094 0.621094H282.152V0.621094V149.667V149.667H0.621094V149.667V0.621094V0.621094V0.621094"
                            fill="#C6A77B"
                            fillOpacity="0.15"
                            strokeWidth="1.24205"
                            stroke="#735A35"
                          />
                        </svg>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[133px] h-[15px] absolute left-3 top-3.5">
                          <p className="flex flex-col justify-center shrink-0 text-[#1B1C1A] font-dMSans text-xs font-semibold w-[133px] h-[15px]">
                            LIVING &amp; DINING SALON
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[105px] h-[15px] absolute left-3 top-[30px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#4E463B] font-bodoniModa text-[10px] w-[105px] h-[15px]">
                            320 sq. ft. • 20'0&quot; × 16'0&quot;
                          </p>
                        </button>
                        <svg
                          width="100"
                          height="1"
                          viewBox="0 0 100 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[99px] absolute left-[17px] top-[66px] "
                        >
                          <path
                            d="M0.414062 0.414062H99.7778H0.414062"
                            fill="black"
                            strokeWidth="0.828031"
                            strokeLinecap="round"
                            stroke="#735A35"
                          />
                        </svg>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[132px] h-3 absolute left-3 top-[82px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#7F766A] font-manrope text-[9px] w-[132px] h-3">
                            Cross-ventilated balcony portal
                          </p>
                        </button>
                      </div>
                      <div className="w-[282px] h-[75px] absolute left-[17px] top-[174px]">
                        <svg
                          width="283"
                          height="76"
                          viewBox="0 0 283 76"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[282px] h-[75px] absolute left-0 top-0 "
                        >
                          <path
                            d="M0.621094 0.621094H282.152V0.621094V75.1439V75.1439H0.621094V75.1439V0.621094V0.621094V0.621094"
                            fill="#E2C194"
                            fillOpacity="0.25"
                            strokeWidth="1.24205"
                            stroke="#735A35"
                          />
                        </svg>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[151px] h-3.5 absolute left-3 top-3.5">
                          <p className="flex flex-col justify-center shrink-0 text-[#1B1C1A] font-dMSans text-[11px] font-semibold w-[151px] h-3.5">
                            TWILIGHT BALCONY GARDEN
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[92px] h-[15px] absolute left-3 top-[30px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#4E463B] font-bodoniModa text-[10px] w-[92px] h-[15px]">
                            95 sq. ft. • 19'0&quot; × 5'0&quot;
                          </p>
                        </button>
                      </div>
                      <div className="w-[182px] h-[141px] absolute left-[311px] top-[17px]">
                        <svg
                          width="184"
                          height="142"
                          viewBox="0 0 184 142"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[182px] h-[141px] absolute -left-0 top-0 "
                        >
                          <path
                            d="M0.621094 0.621094H182.788V0.621094V141.386V141.386H0.621094V141.386V0.621094V0.621094V0.621094"
                            fill="#CEE2F1"
                            fillOpacity="0.3"
                            strokeWidth="1.24205"
                            stroke="#4E616D"
                          />
                        </svg>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[74px] h-3.5 absolute left-3 top-3.5">
                          <p className="flex flex-col justify-center shrink-0 text-[#1B1C1A] font-dMSans text-[11px] font-semibold w-[74px] h-3.5">
                            MASTER SUITE
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[103px] h-[15px] absolute left-3 top-[30px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#4E463B] font-bodoniModa text-[10px] w-[103px] h-[15px]">
                            210 sq. ft. • 15'0&quot; × 14'0&quot;
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[93px] h-3 absolute left-3 top-[66px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#7F766A] font-manrope text-[9px] w-[93px] h-3">
                            Ensuite Bath attached
                          </p>
                        </button>
                      </div>
                      <div className="w-[182px] h-[83px] absolute left-[311px] top-[166px]">
                        <svg
                          width="184"
                          height="85"
                          viewBox="0 0 184 85"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[182px] h-[83px] absolute -left-0 top-0 "
                        >
                          <path
                            d="M0.621094 0.621094H182.788V0.621094V83.4242V83.4242H0.621094V83.4242V0.621094V0.621094V0.621094"
                            fill="#CEE2F1"
                            fillOpacity="0.2"
                            strokeWidth="1.24205"
                            stroke="#4E616D"
                          />
                        </svg>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[69px] h-3.5 absolute left-3 top-3.5">
                          <p className="flex flex-col justify-center shrink-0 text-[#1B1C1A] font-dMSans text-[11px] font-semibold w-[69px] h-3.5">
                            BEDROOM 02
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[100px] h-[15px] absolute left-3 top-[30px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#4E463B] font-bodoniModa text-[10px] w-[100px] h-[15px]">
                            155 sq. ft. • 12'6&quot; × 12'4&quot;
                          </p>
                        </button>
                      </div>
                      <div className="w-28 h-28 absolute left-[501px] top-[17px]">
                        <svg
                          width="114"
                          height="114"
                          viewBox="0 0 114 114"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-28 h-28 absolute -left-0 top-0 "
                        >
                          <path
                            d="M0.621094 0.621094H112.405V0.621094V112.405V112.405H0.621094V112.405V0.621094V0.621094V0.621094"
                            fill="#EAE8E4"
                            strokeWidth="1.24205"
                            stroke="#7F766A"
                          />
                        </svg>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[42px] h-[13px] absolute left-2 top-[15px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#1B1C1A] font-dMSans text-[10px] font-semibold w-[42px] h-[13px]">
                            KITCHEN
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[39px] h-3.5 absolute left-2 top-[31px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#4E463B] font-bodoniModa text-[9px] w-[39px] h-3.5">
                            120 sq. ft.
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[43px] h-[11px] absolute left-2 top-[49px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#7F766A] font-manrope text-[8px] w-[43px] h-[11px]">
                            Utility Deck
                          </p>
                        </button>
                      </div>
                      <div className="w-28 h-28 absolute left-[501px] top-[137px]">
                        <svg
                          width="114"
                          height="114"
                          viewBox="0 0 114 114"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-28 h-28 absolute -left-0 -top-0 "
                        >
                          <path
                            d="M0.621094 0.621094H112.405V0.621094V112.405V112.405H0.621094V112.405V0.621094V0.621094V0.621094"
                            fill="#F0EEEA"
                            strokeWidth="1.24205"
                            stroke="#7F766A"
                          />
                        </svg>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-16 h-[13px] absolute left-2 top-[15px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#1B1C1A] font-dMSans text-[10px] font-semibold w-16 h-[13px]">
                            BEDROOM 03
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[39px] h-3.5 absolute left-2 top-[31px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#4E463B] font-bodoniModa text-[9px] w-[39px] h-3.5">
                            130 sq. ft.
                          </p>
                        </button>
                        <button className="cursor-pointer text-nowrap flex justify-center items-center w-[52px] h-[11px] absolute left-2 top-[49px]">
                          <p className="flex flex-col justify-center shrink-0 text-[#7F766A] font-manrope text-[8px] w-[52px] h-[11px]">
                            Study &#x2F; Guest
                          </p>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center items-start gap-3 w-full">
                    <div className="flex pt-3 pr-3 pb-3.5 pl-3 flex-col items-center -space-y-px rounded-lg bg-[#F5F3EF] w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          LIVING &#x2F; DINING
                        </p>
                      </div>
                      <p className="text-[#1B1C1A] font-dMSans text-base font-semibold leading-6 w-fit">
                        320 sq. ft.
                      </p>
                    </div>
                    <div className="flex pt-3 pr-3 pb-3.5 pl-3 flex-col items-center -space-y-px rounded-lg bg-[#F5F3EF] w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          MASTER SUITE
                        </p>
                      </div>
                      <p className="text-[#1B1C1A] font-dMSans text-base font-semibold leading-6 w-fit">
                        210 sq. ft.
                      </p>
                    </div>
                    <div className="flex pt-3 pr-3 pb-3.5 pl-3 flex-col items-center -space-y-px rounded-lg bg-[#F5F3EF] w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          BALCONY TERRACE
                        </p>
                      </div>
                      <p className="text-[#1B1C1A] font-dMSans text-base font-semibold leading-6 w-fit">
                        95 sq. ft.
                      </p>
                    </div>
                    <div className="flex pt-3 pr-3 pb-3.5 pl-3 flex-col items-center -space-y-px rounded-lg bg-[#F5F3EF] w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                          MODULAR KITCHEN
                        </p>
                      </div>
                      <p className="text-[#1B1C1A] font-dMSans text-base font-semibold leading-6 w-fit">
                        120 sq. ft.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-7 flex-col items-start gap-4 rounded-xl bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                  <div className="flex pt-1 flex-col items-start gap-[5px] w-full">
                    <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                      NEIGHBORHOOD MATRIX
                    </p>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[28px] font-semibold leading-9 w-full tracking-[-0.025em]">
                        A Location That Keeps You Connected
                      </p>
                    </div>
                  </div>
                  <div className="property-location-grid inline-grid w-full relative">
                    <div className="flex flex-col items-start gap-3 w-full absolute left-0 top-0">
                      <div className="property-map-placeholder rounded-xl w-full h-72" role="img" aria-label="Map of the Peelamedu neighborhood" />
                      <div className="flex p-3 justify-between items-center rounded-lg bg-[#F5F3EF] w-full">
                        <div className="flex flex-col items-start w-fit">
                          <p className="text-[#7F766A] font-manrope text-xs font-semibold leading-4 w-fit">
                            Pin: 641004
                          </p>
                        </div>
                        <div className="flex items-center gap-0.5 w-fit">
                          <p className="text-[#735A35] font-manrope text-xs font-semibold leading-4 w-fit">
                            Open in Maps
                          </p>
                          <svg
                            width="9"
                            height="9"
                            viewBox="0 0 9 9"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M0.816667 8.75L0 7.93333L6.76667 1.16667H2.91667V0H8.75V5.83333H7.58333V1.98333L0.816667 8.75V8.75"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start gap-3 w-full absolute left-[292px] top-0">
                      <div className="flex p-3.5 items-start gap-3 rounded-xl bg-[#F5F3EF] w-full">
                        <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="17"
                            height="14"
                            viewBox="0 0 17 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M8.25 13.5L3 10.65V6.15L0 4.5L8.25 0L16.5 4.5V10.5H15V5.325L13.5 6.15V10.65L8.25 13.5V13.5M8.25 7.275L13.3875 4.5L8.25 1.725L3.1125 4.5L8.25 7.275V7.275M8.25 11.7937L12 9.76875V6.9375L8.25 9L4.5 6.9375V9.76875L8.25 11.7937V11.7937M8.25 7.275V7.275V7.275V7.275V7.275V7.275M8.25 8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625M8.25 8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625V8.9625"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                        <div className="flex pt-1 flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                            COLLEGES &amp; UNIVERSITIES
                          </p>
                          <div className="flex pt-[5px] flex-col items-start w-full">
                            <p className="text-[#735A35] font-manrope text-sm leading-5 w-full">
                              PSG College of Technology • 1.2 km &#40;4
                              mins&#41;
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              GRD College of Science • 1.8 km &#40;6 mins&#41;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-3.5 items-start gap-3 rounded-xl bg-[#F5F3EF] w-full">
                        <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M5.625 10.5H7.875V7.875H10.5V5.625H7.875V3H5.625V5.625H3V7.875H5.625V10.5V10.5M1.5 13.5C1.0875 13.5 0.734375 13.3531 0.440625 13.0594C0.146875 12.7656 0 12.4125 0 12V1.5C0 1.0875 0.146875 0.734375 0.440625 0.440625C0.734375 0.146875 1.0875 0 1.5 0H12C12.4125 0 12.7656 0.146875 13.0594 0.440625C13.3531 0.734375 13.5 1.0875 13.5 1.5V12C13.5 12.4125 13.3531 12.7656 13.0594 13.0594C12.7656 13.3531 12.4125 13.5 12 13.5H1.5V13.5M1.5 12H12V12V12V1.5V1.5V1.5H1.5V1.5V1.5V12V12V12V12M1.5 1.5V1.5V1.5V1.5V12V12V12V12V12V12V1.5V1.5V1.5V1.5"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                        <div className="flex pt-1 flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                            HEALTHCARE &amp; WELLNESS
                          </p>
                          <div className="flex pt-[5px] flex-col items-start w-full">
                            <p className="text-[#735A35] font-manrope text-sm leading-5 w-full">
                              PSG Institute of Medical Sciences • 1.5 km &#40;5
                              mins&#41;
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              KMCH Multi-Speciality • 4.2 km &#40;10 mins&#41;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-3.5 items-start gap-3 rounded-xl bg-[#F5F3EF] w-full">
                        <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V4.5C0 4.0875 0.146875 3.73438 0.440625 3.44062C0.734375 3.14687 1.0875 3 1.5 3H3V3C3 2.175 3.29375 1.46875 3.88125 0.88125C4.46875 0.29375 5.175 0 6 0C6.825 0 7.53125 0.29375 8.11875 0.88125C8.70625 1.46875 9 2.175 9 3V3H10.5C10.9125 3 11.2656 3.14687 11.5594 3.44062C11.8531 3.73438 12 4.0875 12 4.5V13.5C12 13.9125 11.8531 14.2656 11.5594 14.5594C11.2656 14.8531 10.9125 15 10.5 15H1.5V15M1.5 13.5H10.5V13.5V13.5V4.5V4.5V4.5H9V6C9 6.2125 8.92813 6.39062 8.78438 6.53438C8.64062 6.67813 8.4625 6.75 8.25 6.75C8.0375 6.75 7.85938 6.67813 7.71562 6.53438C7.57187 6.39062 7.5 6.2125 7.5 6V4.5H4.5V6C4.5 6.2125 4.42813 6.39062 4.28438 6.53438C4.14062 6.67813 3.9625 6.75 3.75 6.75C3.5375 6.75 3.35938 6.67813 3.21563 6.53438C3.07188 6.39062 3 6.2125 3 6V4.5H1.5V4.5V4.5V13.5V13.5V13.5V13.5M4.5 3H7.5V3C7.5 2.5875 7.35312 2.23438 7.05937 1.94062C6.76562 1.64687 6.4125 1.5 6 1.5C5.5875 1.5 5.23438 1.64687 4.94063 1.94062C4.64688 2.23438 4.5 2.5875 4.5 3V3V3M1.5 13.5V13.5V13.5V13.5V4.5V4.5V4.5V4.5V4.5V4.5V13.5V13.5V13.5V13.5"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                        <div className="flex pt-1 flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                            SHOPPING &amp; LIFESTYLE
                          </p>
                          <div className="flex pt-[5px] flex-col items-start w-full">
                            <p className="text-[#735A35] font-manrope text-sm leading-5 w-full">
                              Fun Republic Mall • 1.0 km &#40;3 mins&#41;
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Brookefields Mall • 6.5 km &#40;15 mins&#41;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-3.5 items-start gap-3 rounded-xl bg-[#F5F3EF] w-full">
                        <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="16"
                            height="14"
                            viewBox="0 0 16 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M1.5 13.6125V12.1125H15V13.6125H1.5V13.6125M2.8125 9.8625L0 5.175L1.8 4.6875L3.9 6.45L6.525 5.75625L2.64375 0.58125L4.81875 0L10.425 4.70625L13.6125 3.84375C14.0125 3.73125 14.3906 3.77813 14.7469 3.98438C15.1031 4.19063 15.3375 4.49375 15.45 4.89375C15.5625 5.29375 15.5156 5.67188 15.3094 6.02812C15.1031 6.38437 14.8 6.61875 14.4 6.73125L2.8125 9.8625V9.8625"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                        <div className="flex pt-1 flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                            TRANSIT &amp; AVIATION
                          </p>
                          <div className="flex pt-[5px] flex-col items-start w-full">
                            <p className="text-[#735A35] font-manrope text-sm leading-5 w-full">
                              Coimbatore Int'l Airport &#40;CJB&#41; • 5.5 km
                              &#40;12 mins&#41;
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              Peelamedu Railway Station • 2.0 km &#40;5
                              mins&#41;
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex p-3.5 items-start gap-3 rounded-xl bg-[#F5F3EF] w-full">
                        <div className="flex justify-center items-center rounded-lg bg-[#FFF] w-8 h-8">
                          <svg
                            width="12"
                            height="15"
                            viewBox="0 0 12 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex flex-col items-start w-fit "
                          >
                            <path
                              d="M2.25 15V8.1375C1.6125 7.9625 1.07812 7.6125 0.646875 7.0875C0.215625 6.5625 0 5.95 0 5.25V0H1.5V5.25H2.25V0H3.75V5.25H4.5V0H6V5.25C6 5.95 5.78438 6.5625 5.35313 7.0875C4.92188 7.6125 4.3875 7.9625 3.75 8.1375V15H2.25V15M9.75 15V9H7.5V3.75C7.5 2.7125 7.86563 1.82812 8.59688 1.09687C9.32812 0.365625 10.2125 0 11.25 0V15H9.75V15"
                              fill="#735A35"
                            />
                          </svg>
                        </div>
                        <div className="flex pt-1 flex-col items-start w-full">
                          <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                            DINING &amp; CAFÉS
                          </p>
                          <div className="flex pt-[5px] flex-col items-start w-full">
                            <p className="text-[#735A35] font-manrope text-sm leading-5 w-full">
                              Avinashi Road Culinary Mile • 0.8 km &#40;2
                              mins&#41;
                            </p>
                          </div>
                          <div className="flex flex-col items-start w-full">
                            <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                              The French Door Heritage Bistro • 3.5 km
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 w-full absolute left-[773px] top-0">
                <div className="flex p-7 flex-col items-start gap-4 rounded-xl bg-[#FFF] w-full relative">
                  <div className="absolute -right-0 rounded-xl bg-[rgba(255,255,255,0.00)] shadow-[020px25px-5pxrgba(0,0,0,0.10),08px10px-6pxrgba(0,0,0,0.10)] w-[347px] h-[912px]"></div>
                  <div className="flex pt-1 flex-col items-start gap-1 w-full">
                    <p className="text-[#735A35] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                      DIRECT CONCIERGE
                    </p>
                    <div className="flex pt-[5px] flex-col items-start w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-[22px] font-bold leading-[30px] w-full">
                        Interested in this property?
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#4E463B] font-bodoniModa text-[13px] leading-5 w-full">
                        Get in touch with our property expert to learn more,
                        schedule a visit, or clarify your questions.
                      </p>
                    </div>
                  </div>
                  <div className="flex p-3.5 items-center gap-3 rounded-xl bg-[#F5F3EF] w-full">
                    <div className="flex flex-col justify-center items-start rounded-full bg-[#F0EEEA] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12 overflow-hidden">
                      <img
                        src={agentImage}
                        className="w-full h-full overflow-hidden max-w-none"
                        alt="AB6AXuDupxaEotYRwUKVkGSIxMpq4XLsULx5CeUNQOySE-4fEoi04kDN5_p5MbVkFwyhCJ8gzFsWfjlToOEDdVcEEe6ltf97KOkHarG73kQTu0-4jvsrNSe0Ollr0rUHmthcuNB0BwtezAa2EDPW3PzZbVV7dfiYM6n3fXE6IYfVst-0_32LPexmS1ZItFY9ii1v0c30L8Y47_WrOxEvJ7yz95w6ohnpY9kHV8KZ2ks614vd"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <div className="flex items-center gap-1 w-full">
                        <div className="flex flex-col items-start w-fit overflow-hidden">
                          <p className="text-[#1B1C1A] font-dMSans text-[15px] font-bold leading-[22.5px] w-fit">
                            Priya Sharma
                          </p>
                        </div>
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="flex flex-col items-start w-fit "
                        >
                          <path
                            d="M4.43333 12.25L3.325 10.3833L1.225 9.91667L1.42917 7.75833L0 6.125L1.42917 4.49167L1.225 2.33333L3.325 1.86667L4.43333 0L6.41667 0.845833L8.4 0L9.50833 1.86667L11.6083 2.33333L11.4042 4.49167L12.8333 6.125L11.4042 7.75833L11.6083 9.91667L9.50833 10.3833L8.4 12.25L6.41667 11.4042L4.43333 12.25V12.25M4.92917 10.7625L6.41667 10.1208L7.93333 10.7625L8.75 9.3625L10.3542 8.98333L10.2083 7.35L11.2875 6.125L10.2083 4.87083L10.3542 3.2375L8.75 2.8875L7.90417 1.4875L6.41667 2.12917L4.9 1.4875L4.08333 2.8875L2.47917 3.2375L2.625 4.87083L1.54583 6.125L2.625 7.35L2.47917 9.0125L4.08333 9.3625L4.92917 10.7625V10.7625M6.41667 6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125V6.125M5.80417 8.19583L9.1 4.9L8.28333 4.05417L5.80417 6.53333L4.55 5.30833L3.73333 6.125L5.80417 8.19583V8.19583"
                            fill="#735A35"
                          />
                        </svg>
                      </div>
                      <button className="cursor-pointer text-nowrap flex pr-[3px] justify-center items-center w-full h-[17px] overflow-hidden">
                        <p className="flex flex-col justify-center text-[#7F766A] font-manrope text-[11px] leading-[16.5px] w-[155px] h-[17px]">
                          Residential Specialist • Peelamedu
                        </p>
                      </button>
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#735A35] font-manrope text-[10px] font-semibold leading-[15px] w-full">
                          5+ YEARS EXPERIENCE
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center items-center rounded-full bg-[#FFF] w-8 h-8">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M11.3 12C9.91111 12 8.53889 11.6972 7.18333 11.0917C5.82778 10.4861 4.59444 9.62778 3.48333 8.51667C2.37222 7.40556 1.51389 6.17222 0.908333 4.81667C0.302778 3.46111 0 2.08889 0 0.7C0 0.5 0.0666667 0.333333 0.2 0.2C0.333333 0.0666667 0.5 0 0.7 0H3.4C3.55556 0 3.69444 0.0527778 3.81667 0.158333C3.93889 0.263889 4.01111 0.388889 4.03333 0.533333L4.46667 2.86667C4.48889 3.04444 4.48333 3.19444 4.45 3.31667C4.41667 3.43889 4.35556 3.54444 4.26667 3.63333L2.65 5.26667C2.87222 5.67778 3.13611 6.075 3.44167 6.45833C3.74722 6.84167 4.08333 7.21111 4.45 7.56667C4.79444 7.91111 5.15556 8.23056 5.53333 8.525C5.91111 8.81944 6.31111 9.08889 6.73333 9.33333L8.3 7.76667C8.4 7.66667 8.53056 7.59167 8.69167 7.54167C8.85278 7.49167 9.01111 7.47778 9.16667 7.5L11.4667 7.96667C11.6222 8.01111 11.75 8.09167 11.85 8.20833C11.95 8.325 12 8.45556 12 8.6V11.3C12 11.5 11.9333 11.6667 11.8 11.8C11.6667 11.9333 11.5 12 11.3 12V12M2.01667 4L3.11667 2.9V2.9V2.9L2.83333 1.33333V1.33333V1.33333H1.35V1.33333V1.33333C1.40556 1.78889 1.48333 2.23889 1.58333 2.68333C1.68333 3.12778 1.82778 3.56667 2.01667 4V4M7.98333 9.96667C8.41667 10.1556 8.85833 10.3056 9.30833 10.4167C9.75833 10.5278 10.2111 10.6 10.6667 10.6333V10.6333V10.6333V9.16667V9.16667V9.16667L9.1 8.85V8.85V8.85L7.98333 9.96667V9.96667M2.01667 4V4V4V4V4V4V4V4V4V4V4V4V4M7.98333 9.96667V9.96667V9.96667V9.96667V9.96667V9.96667V9.96667V9.96667V9.96667V9.96667V9.96667V9.96667V9.96667"
                          fill="#735A35"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 w-full">
                    <div className="flex pt-1 flex-col items-start gap-[9px] w-full">
                      <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                        YOUR FULL NAME
                      </p>
                      <div className="flex pt-2.5 pr-3.5 pb-[11px] pl-3.5 justify-center items-start rounded-lg bg-[#F5F3EF] w-full overflow-hidden">
                        <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="text-[#7F766A] font-manrope text-sm font-medium w-full">
                            e.g. Arvind Krishnan
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-1 flex-col items-start gap-[9px] w-full">
                      <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                        PHONE NUMBER
                      </p>
                      <div className="flex items-start w-full">
                        <div className="flex pt-2.5 pr-3 pb-[11px] pl-3 items-center rounded-lg bg-[#F0EEEA] w-fit h-full">
                          <p className="text-[#4E463B] font-manrope text-sm font-medium leading-5 w-fit">
                            +91
                          </p>
                        </div>
                        <div className="flex py-2.5 px-3.5 flex-col items-start rounded-lg bg-[#F5F3EF] w-full h-full overflow-hidden">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <p className="text-[#7F766A] font-manrope text-sm font-medium w-full">
                              98765 00000
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-1 flex-col items-start gap-[9px] w-full">
                      <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                        EMAIL ADDRESS
                      </p>
                      <div className="flex pt-2.5 pr-3.5 pb-[11px] pl-3.5 justify-center items-start rounded-lg bg-[#F5F3EF] w-full overflow-hidden">
                        <div className="flex flex-col items-start w-full overflow-hidden">
                          <p className="text-[#7F766A] font-manrope text-sm font-medium w-full">
                            name@haven.in
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-1 flex-col items-start gap-[9px] w-full">
                      <p className="text-[#7F766A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                        PREFERRED SITE VISIT DATE
                      </p>
                      <div className="flex py-2.5 px-3.5 justify-center items-start rounded-lg bg-[#F5F3EF] w-full overflow-hidden">
                        <div className="flex items-center w-full">
                          <div className="flex flex-col items-start w-full overflow-hidden">
                            <div className="flex p-px items-start gap-px w-fit">
                              <p className="text-[#1B1C1A] font-manrope text-sm font-medium leading-5 w-fit">
                                mm
                              </p>
                              <p className="text-[#1B1C1A] font-manrope text-sm font-medium leading-5 w-fit">
                                &#x2F;
                              </p>
                              <p className="text-[#1B1C1A] font-manrope text-sm font-medium leading-5 w-fit">
                                dd
                              </p>
                              <p className="text-[#1B1C1A] font-manrope text-sm font-medium leading-5 w-fit">
                                &#x2F;
                              </p>
                              <p className="text-[#1B1C1A] font-manrope text-sm font-medium leading-5 w-fit">
                                yyyy
                              </p>
                            </div>
                          </div>
                          <div className="flex p-0.5 flex-col items-start w-[18px] h-[18px] overflow-hidden">
                            <div className="shrink-0 w-3.5 h-[13px] overflow-hidden"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex py-3.5 px-4 justify-center items-center gap-2 rounded-lg bg-[#0A1E28] shadow-[01px2px0rgba(0,0,0,0.05)] w-full">
                      <div className="flex flex-col items-center w-fit">
                        <p className="text-[#FFF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                          CONTACT PROPERTY OWNER
                        </p>
                      </div>
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-center w-fit "
                      >
                        <path
                          d="M8.11667 6H0V4.66667H8.11667L4.38333 0.933333L5.33333 0L10.6667 5.33333L5.33333 10.6667L4.38333 9.73333L8.11667 6V6"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className="flex py-3 px-4 justify-center items-center gap-2 rounded-lg w-full">
                      <svg
                        width="12"
                        height="14"
                        viewBox="0 0 12 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-center w-fit "
                      >
                        <path
                          d="M1.33333 13.3333C0.966667 13.3333 0.652778 13.2028 0.391667 12.9417C0.130556 12.6806 0 12.3667 0 12V2.66667C0 2.3 0.130556 1.98611 0.391667 1.725C0.652778 1.46389 0.966667 1.33333 1.33333 1.33333H2V0H3.33333V1.33333H8.66667V0H10V1.33333H10.6667C11.0333 1.33333 11.3472 1.46389 11.6083 1.725C11.8694 1.98611 12 2.3 12 2.66667V12C12 12.3667 11.8694 12.6806 11.6083 12.9417C11.3472 13.2028 11.0333 13.3333 10.6667 13.3333H1.33333V13.3333M1.33333 12H10.6667V12V12V5.33333H1.33333V12V12V12V12M1.33333 4H10.6667V2.66667V2.66667V2.66667H1.33333V2.66667V2.66667V4V4M1.33333 4V2.66667V2.66667V2.66667V2.66667V2.66667V2.66667V4V4V4M6 8C5.81111 8 5.65278 7.93611 5.525 7.80833C5.39722 7.68056 5.33333 7.52222 5.33333 7.33333C5.33333 7.14444 5.39722 6.98611 5.525 6.85833C5.65278 6.73056 5.81111 6.66667 6 6.66667C6.18889 6.66667 6.34722 6.73056 6.475 6.85833C6.60278 6.98611 6.66667 7.14444 6.66667 7.33333C6.66667 7.52222 6.60278 7.68056 6.475 7.80833C6.34722 7.93611 6.18889 8 6 8V8M3.33333 8C3.14444 8 2.98611 7.93611 2.85833 7.80833C2.73056 7.68056 2.66667 7.52222 2.66667 7.33333C2.66667 7.14444 2.73056 6.98611 2.85833 6.85833C2.98611 6.73056 3.14444 6.66667 3.33333 6.66667C3.52222 6.66667 3.68056 6.73056 3.80833 6.85833C3.93611 6.98611 4 7.14444 4 7.33333C4 7.52222 3.93611 7.68056 3.80833 7.80833C3.68056 7.93611 3.52222 8 3.33333 8V8M8.66667 8C8.47778 8 8.31944 7.93611 8.19167 7.80833C8.06389 7.68056 8 7.52222 8 7.33333C8 7.14444 8.06389 6.98611 8.19167 6.85833C8.31944 6.73056 8.47778 6.66667 8.66667 6.66667C8.85556 6.66667 9.01389 6.73056 9.14167 6.85833C9.26944 6.98611 9.33333 7.14444 9.33333 7.33333C9.33333 7.52222 9.26944 7.68056 9.14167 7.80833C9.01389 7.93611 8.85556 8 8.66667 8V8M6 10.6667C5.81111 10.6667 5.65278 10.6028 5.525 10.475C5.39722 10.3472 5.33333 10.1889 5.33333 10C5.33333 9.81111 5.39722 9.65278 5.525 9.525C5.65278 9.39722 5.81111 9.33333 6 9.33333C6.18889 9.33333 6.34722 9.39722 6.475 9.525C6.60278 9.65278 6.66667 9.81111 6.66667 10C6.66667 10.1889 6.60278 10.3472 6.475 10.475C6.34722 10.6028 6.18889 10.6667 6 10.6667V10.6667M3.33333 10.6667C3.14444 10.6667 2.98611 10.6028 2.85833 10.475C2.73056 10.3472 2.66667 10.1889 2.66667 10C2.66667 9.81111 2.73056 9.65278 2.85833 9.525C2.98611 9.39722 3.14444 9.33333 3.33333 9.33333C3.52222 9.33333 3.68056 9.39722 3.80833 9.525C3.93611 9.65278 4 9.81111 4 10C4 10.1889 3.93611 10.3472 3.80833 10.475C3.68056 10.6028 3.52222 10.6667 3.33333 10.6667V10.6667M8.66667 10.6667C8.47778 10.6667 8.31944 10.6028 8.19167 10.475C8.06389 10.3472 8 10.1889 8 10C8 9.81111 8.06389 9.65278 8.19167 9.525C8.31944 9.39722 8.47778 9.33333 8.66667 9.33333C8.85556 9.33333 9.01389 9.39722 9.14167 9.525C9.26944 9.65278 9.33333 9.81111 9.33333 10C9.33333 10.1889 9.26944 10.3472 9.14167 10.475C9.01389 10.6028 8.85556 10.6667 8.66667 10.6667V10.6667"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-center w-fit">
                        <p className="text-[#0A1E28] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                          SCHEDULE A SITE VISIT
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex pt-2 flex-col items-start gap-2 w-full">
                    <div className="flex items-center gap-2 w-full">
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
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#4E463B] font-manrope text-xs font-semibold leading-4 w-fit">
                          100% Verified Documentation • Clear Title
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <svg
                        width="11"
                        height="14"
                        viewBox="0 0 11 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M1.33333 14C0.966667 14 0.652778 13.8694 0.391667 13.6083C0.130556 13.3472 0 13.0333 0 12.6667V6C0 5.63333 0.130556 5.31944 0.391667 5.05833C0.652778 4.79722 0.966667 4.66667 1.33333 4.66667H2V3.33333C2 2.41111 2.325 1.625 2.975 0.975C3.625 0.325 4.41111 0 5.33333 0C6.25556 0 7.04167 0.325 7.69167 0.975C8.34167 1.625 8.66667 2.41111 8.66667 3.33333V4.66667H9.33333C9.7 4.66667 10.0139 4.79722 10.275 5.05833C10.5361 5.31944 10.6667 5.63333 10.6667 6V12.6667C10.6667 13.0333 10.5361 13.3472 10.275 13.6083C10.0139 13.8694 9.7 14 9.33333 14H1.33333V14M1.33333 12.6667H9.33333V12.6667V12.6667V6V6V6H1.33333V6V6V12.6667V12.6667V12.6667V12.6667M5.33333 10.6667C5.7 10.6667 6.01389 10.5361 6.275 10.275C6.53611 10.0139 6.66667 9.7 6.66667 9.33333C6.66667 8.96667 6.53611 8.65278 6.275 8.39167C6.01389 8.13056 5.7 8 5.33333 8C4.96667 8 4.65278 8.13056 4.39167 8.39167C4.13056 8.65278 4 8.96667 4 9.33333C4 9.7 4.13056 10.0139 4.39167 10.275C4.65278 10.5361 4.96667 10.6667 5.33333 10.6667V10.6667M3.33333 4.66667H7.33333V3.33333C7.33333 2.77778 7.13889 2.30556 6.75 1.91667C6.36111 1.52778 5.88889 1.33333 5.33333 1.33333C4.77778 1.33333 4.30556 1.52778 3.91667 1.91667C3.52778 2.30556 3.33333 2.77778 3.33333 3.33333V4.66667V4.66667M1.33333 12.6667V12.6667V12.6667V6V6V6V6V6V6V12.6667V12.6667V12.6667V12.6667V12.6667"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#4E463B] font-manrope text-xs font-semibold leading-4 w-fit">
                          Strict Zero-Spam Confidentiality Protocol
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M0 12.6667V11.3333H8V12.6667H0V12.6667M3.76667 9.43333L0 5.66667L1.4 4.23333L5.2 8L3.76667 9.43333V9.43333M8 5.2L4.23333 1.4L5.66667 0L9.43333 3.76667L8 5.2V5.2M11.0667 12L2.36667 3.3L3.3 2.36667L12 11.0667L11.0667 12V12"
                          fill="#735A35"
                        />
                      </svg>
                      <div className="flex flex-col items-start w-fit">
                        <p className="text-[#4E463B] font-manrope text-xs font-semibold leading-4 w-fit">
                          RERA Compliant Advisory:
                          TN&#x2F;CB&#x2F;2024&#x2F;0842
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex p-3 flex-col items-start gap-[3px] rounded-lg bg-[#F0EEEA] w-full">
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#7F766A] font-manrope text-[10px] leading-[15px] w-fit tracking-[0.05em]">
                        DIRECT ADVISORY DESK
                      </p>
                    </div>
                    <div className="flex pt-px flex-col items-center w-full">
                      <p className="text-[#1B1C1A] font-dMSans text-base font-bold leading-6 w-fit">
                        +91 98765 43210
                      </p>
                    </div>
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#7F766A] font-manrope text-[11px] leading-[16.5px] w-fit">
                        Mon–Sat 9:00 AM – 7:30 PM IST
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex p-4 justify-between items-center rounded-xl bg-[#F5F3EF] w-full">
                  <div className="flex items-center gap-2.5 w-fit">
                    <div className="flex justify-center items-center rounded bg-[#FFF] w-8 h-8">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M5.25 7.875H6V6.375H6.75C6.9625 6.375 7.14062 6.30313 7.28438 6.15938C7.42813 6.01562 7.5 5.8375 7.5 5.625V4.875C7.5 4.6625 7.42813 4.48438 7.28438 4.34062C7.14062 4.19687 6.9625 4.125 6.75 4.125H5.25V7.875V7.875M6 5.625V4.875H6.75V5.625H6V5.625M8.25 7.875H9.75C9.9625 7.875 10.1406 7.80313 10.2844 7.65938C10.4281 7.51562 10.5 7.3375 10.5 7.125V4.875C10.5 4.6625 10.4281 4.48438 10.2844 4.34062C10.1406 4.19687 9.9625 4.125 9.75 4.125H8.25V7.875V7.875M9 7.125V4.875H9.75V7.125H9V7.125M11.25 7.875H12V6.375H12.75V5.625H12V4.875H12.75V4.125H11.25V7.875V7.875M4.5 12C4.0875 12 3.73438 11.8531 3.44062 11.5594C3.14687 11.2656 3 10.9125 3 10.5V1.5C3 1.0875 3.14687 0.734375 3.44062 0.440625C3.73438 0.146875 4.0875 0 4.5 0H13.5C13.9125 0 14.2656 0.146875 14.5594 0.440625C14.8531 0.734375 15 1.0875 15 1.5V10.5C15 10.9125 14.8531 11.2656 14.5594 11.5594C14.2656 11.8531 13.9125 12 13.5 12H4.5V12M4.5 10.5H13.5V10.5V10.5V1.5V1.5V1.5H4.5V1.5V1.5V10.5V10.5V10.5V10.5M1.5 15C1.0875 15 0.734375 14.8531 0.440625 14.5594C0.146875 14.2656 0 13.9125 0 13.5V3H1.5V13.5V13.5V13.5H12V15H1.5V15M4.5 1.5V1.5V1.5V1.5V10.5V10.5V10.5V10.5V10.5V10.5V1.5V1.5V1.5V1.5"
                          fill="#735A35"
                        />
                      </svg>
                    </div>
                    <div className="flex pb-[5px] flex-col items-start gap-[5px] w-fit">
                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#1B1C1A] font-manrope text-xs font-semibold leading-4 w-fit">
                          Property Dossier PDF
                        </p>
                      </div>
                      <p className="text-[#7F766A] font-manrope text-[10px] leading-[15px] w-fit">
                        12 Pages • High Resolution &#40;4.8 MB&#41;
                      </p>
                    </div>
                  </div>
                  <button className="cursor-pointer text-nowrap flex py-1.5 px-3 flex-col justify-center items-center rounded bg-[#FFF] w-fit">
                    <p className="text-[#1B1C1A] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.14em]">
                      DOWNLOAD
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex py-20 px-0 flex-col items-start bg-[#172A35] w-full overflow-hidden relative">
            <div className="absolute -right-32 -bottom-32 rounded-full bg-[rgba(115,90,53,0.20)] w-96 h-96"></div>
            <div className="absolute -left-32 -top-32 rounded-full bg-[rgba(198,167,123,0.10)] w-96 h-96"></div>
            <div className="flex max-w-[1440px] py-0 px-20 flex-col items-start gap-7 w-full">
              <div className="flex justify-between items-center w-full">
                <div className="flex max-w-[672px] pt-[5px] flex-col items-start gap-1 w-fit">
                  <div className="flex items-center gap-2 w-fit">
                    <div className="rounded-full bg-[#FFDDAF] w-1.5 h-1.5"></div>
                    <p className="text-[#FFDDAF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.1em]">
                      PRIVATE PROPERTY ACQUISITION
                    </p>
                  </div>
                  <div className="flex pt-[3px] flex-col items-start w-full">
                    <p className="text-[#FFF] font-dMSans text-[40px] font-bold leading-[48px] w-fit tracking-[-0.025em]">
                      Could This Be Your Next Home?
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C0C8CC] font-bodoniModa text-lg leading-[29.25px] w-fit">
                      The right property deserves a closer look. Share your
                      details, and we'll help you take the next step with
                      complete transparency and dedicated private guidance.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 w-fit">
                  <div className="flex py-4 px-8 justify-center items-center gap-2 rounded-lg bg-[#FFDDAF] w-fit relative">
                    <div className="absolute right-0 rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[010px15px-3pxrgba(0,0,0,0.10),04px6px-4pxrgba(0,0,0,0.10)] w-[175px] h-12"></div>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#281800] font-manrope text-[11px] font-bold leading-4 w-fit tracking-[0.05em]">
                        I'M INTERESTED
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
                        fill="#281800"
                      />
                    </svg>
                  </div>
                  <div className="flex py-4 px-6 justify-center items-center gap-2 rounded-lg bg-[rgba(255,255,255,0.10)] w-fit">
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
                        fill="#FFDDAF"
                      />
                    </svg>
                    <div className="flex flex-col items-start w-fit">
                      <p className="text-[#FFF] font-manrope text-[11px] font-semibold leading-4 w-fit tracking-[0.05em]">
                        CALL PRIVATE DESK
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex pt-4 justify-between items-center flex-wrap w-full">
                <div className="flex items-center gap-2 w-fit">
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
                    <p className="text-[#C0C8CC] font-manrope text-xs font-semibold leading-4 w-fit">
                      TN RERA Registered Concierge •
                      TN&#x2F;CB&#x2F;2024&#x2F;0842
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#C0C8CC] font-manrope text-xs font-semibold leading-4 w-fit">
                    Haven Pavilion, 44 Race Course, Coimbatore
                  </p>
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
                © 2025 Haven Estates Private Office LLP. All rights reserved.
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
                  •
                </p>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#C0C8CC] font-manrope text-[10px] font-semibold leading-4 w-fit tracking-[0.1em]">
                  TERMS OF ACQUISITION
                </p>
              </div>
              <div className="flex flex-col items-start w-fit">
                <p className="text-[#586063] font-manrope text-[10px] font-semibold leading-4 w-fit tracking-[0.1em]">
                  •
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
    </div>
    </div>
  );
}
