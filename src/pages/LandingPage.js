import heroImage from "../img/LandingPage/HeroBackgroundImageWithSubtleControlledGradientOverlay.png";
import willowResidenceImage from "../img/LandingPage/TheWillowResidenceInCoimbatore.png";
import urbanHeightsImage from "../img/LandingPage/TheUrbanHeightsLuxuryApartment.png";
import greenfieldHomesImage from "../img/LandingPage/TheGreenfieldHomesPeelamedu.png";
import grandBusinessHubImage from "../img/LandingPage/TheGrandBusinessHubAvinashiRoad.png";
import livingRoomImage from "../img/LandingPage/ArchitecturalLivingRoomHavenEstates.png";
import arjunKumarImage from "../img/LandingPage/ArjunKumarSeniorPropertyConsultant.png";
import priyaSharmaImage from "../img/LandingPage/PriyaSharmaResidentialSpecialist.png";
import rahulMenonImage from "../img/LandingPage/RahulMenonCommercialPropertyAdvisor.png";
import visualBackgroundImage from "../img/LandingPage/VisualBackgroundWithControlledNavyVignette.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { properties } from "../data/properties";

export default function LandingPage() {
  const navigate = useNavigate();
  const [showAllProperties, setShowAllProperties] = useState(false);
  const [likedProperties, setLikedProperties] = useState(() => {
    try { return JSON.parse(window.localStorage.getItem('haven-liked-properties') || '[]'); }
    catch { return []; }
  });
  const toggleLike = (id) => setLikedProperties((liked) => {
    const next = liked.includes(id) ? liked.filter((likedId) => likedId !== id) : [...liked, id];
    window.localStorage.setItem('haven-liked-properties', JSON.stringify(next));
    return next;
  });
  return (
    <div className="landing-page pt-20 bg-[#FFF] w-full min-h-screen overflow-x-hidden">
      <div className="flex pb-4 flex-col items-center -space-y-20 bg-[#172A35] w-full relative overflow-hidden">
        <img
          src={heroImage}
          className="hero-image flex h-[620px] md:h-[720px] py-[21px] px-0 items-center w-full max-w-none object-cover"
          alt="Haven Estates property search hero"
        />
        <div className="flex p-4 sm:p-8 flex-col items-start gap-6 rounded-lg border border-[#E8E5DF] bg-[#FFF] shadow-[012px32px0rgba(23,42,53,0.08)] w-full max-w-[1152px] mx-auto">
          <div className="flex pb-4 justify-between items-center border-b border-b-[#E8E5DF] w-full">
            <div className="flex p-1 items-start gap-1 rounded-lg bg-[#F5F3EF] w-fit">
              <button className="cursor-pointer text-nowrap flex py-2 px-5 flex-col justify-center items-center rounded-lg bg-[#172A35] w-fit">
                <p className="text-[#FFF] font-inter text-[13px] font-medium leading-[19.5px] w-fit">
                  Buy Properties
                </p>
              </button>
              <button className="cursor-pointer text-nowrap flex py-2 px-5 flex-col justify-center items-center rounded-lg w-fit">
                <p className="text-[#777F83] font-inter text-[13px] font-medium leading-[19.5px] w-fit">
                  Rentals
                </p>
              </button>
            </div>
            <div className="flex items-center gap-1.5 w-fit">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M5.2 11.2V7.2H6.4V8.6H11.2V9.8H6.4V11.2H5.2V11.2M0 9.8V8.6H4V9.8H0V9.8M2.4 7.6V6.2H0V5H2.4V3.6H3.6V7.6H2.4V7.6M4.8 6.2V5H11.2V6.2H4.8V6.2M7.2 4V0H8.4V1.4H11.2V2.6H8.4V4H7.2V4M0 2.6V1.4H6.4V2.6H0V2.6"
                  fill="#C6A77B"
                />
              </svg>
              
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-[repeat(3,minmax(0,1fr))_auto] items-end gap-4 md:gap-5 w-full">
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-1.5 w-full">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M4.875 6C5.1875 6 5.45312 5.89062 5.67188 5.67188C5.89062 5.45312 6 5.1875 6 4.875C6 4.5625 5.89062 4.29688 5.67188 4.07812C5.45312 3.85938 5.1875 3.75 4.875 3.75C4.5625 3.75 4.29688 3.85938 4.07812 4.07812C3.85938 4.29688 3.75 4.5625 3.75 4.875C3.75 5.1875 3.85938 5.45312 4.07812 5.67188C4.29688 5.89062 4.5625 6 4.875 6V6M4.875 10.5156C6.11458 9.40104 7.04948 8.375 7.67969 7.4375C8.3099 6.5 8.625 5.66146 8.625 4.92188C8.625 3.82812 8.26823 2.92188 7.55469 2.20312C6.84115 1.48438 5.94792 1.125 4.875 1.125C3.80208 1.125 2.90885 1.48438 2.19531 2.20312C1.48177 2.92188 1.125 3.82812 1.125 4.92188C1.125 5.66146 1.4401 6.5 2.07031 7.4375C2.70052 8.375 3.63542 9.40104 4.875 10.5156V10.5156M4.875 12C3.23958 10.6354 2.01823 9.36719 1.21094 8.19531C0.403646 7.02344 0 5.93229 0 4.92188C0 3.52604 0.463542 2.35677 1.39062 1.41406C2.31771 0.471354 3.47917 0 4.875 0C6.26042 0 7.41927 0.471354 8.35156 1.41406C9.28385 2.35677 9.75 3.52604 9.75 4.92188C9.75 5.93229 9.34896 7.02083 8.54688 8.1875C7.74479 9.35417 6.52083 10.625 4.875 12V12M4.875 4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875"
                    fill="#C6A77B"
                  />
                </svg>
                <p className="text-[#777F83] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
                  LOCATION
                </p>
              </div>
              <div className="flex flex-col items-start w-full relative">
                <div className="flex pt-2 pr-10 pb-2 pl-4 justify-center items-center rounded-lg border border-[#E8E5DF] bg-[rgba(245,243,239,0.60)] w-full h-12 relative">
                  <div className="flex justify-center items-center absolute right-8 top-0 w-10 h-12 overflow-hidden">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-[21px] h-[21px] overflow-hidden relative "
                    >
                      <path
                        d="M6.29999 8.40002L10.5 12.6L14.7 8.40002"
                        strokeWidth="1.575"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#6B7280"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#202B32] font-inter text-sm leading-6 w-full">
                      All Coimbatore Precincts
                    </p>
                  </div>
                </div>
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute right-3.5 top-[15px] w-fit h-[18px] "
                >
                  <path
                    d="M4.5 5.45625L0 0.95625L0.95625 0L4.5 3.54375L8.04375 0L9 0.95625L4.5 5.45625V5.45625"
                    fill="#777F83"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-1.5 w-full">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M0 10.5V2.91667L7.5 0V5.25H8.25C8.25 4.94062 8.36048 4.67578 8.58144 4.45547C8.80241 4.23516 9.06803 4.125 9.37832 4.125C9.68861 4.125 9.95312 4.23516 10.1719 4.45547C10.3906 4.67578 10.5 4.94062 10.5 5.25V10.5H0V10.5M1.125 9.375H2.39062V9.375H3.375V5.25H6.375V4.15625V4.15625V1.64062L1.125 3.6923V9.375V9.375M4.5 9.375H6.375V7.5H7.5V9.375H9.375V6.375H4.5V9.375V9.375M2.39062 4.15625V4.15625V4.15625V4.15625V4.15625V4.15625V4.15625V4.15625M7 9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375V9.375M7 9.0625V9.0625V9.0625V9.0625V9.0625V9.0625"
                    fill="#C6A77B"
                  />
                </svg>
                <p className="text-[#777F83] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
                  PROPERTY TYPE
                </p>
              </div>
              <div className="flex flex-col items-start w-full relative">
                <div className="flex pt-2 pr-10 pb-2 pl-4 justify-center items-center rounded-lg border border-[#E8E5DF] bg-[rgba(245,243,239,0.60)] w-full h-12 relative">
                  <div className="flex justify-center items-center absolute right-8 top-0 w-10 h-12 overflow-hidden">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-[21px] h-[21px] overflow-hidden relative "
                    >
                      <path
                        d="M6.29999 8.40002L10.5 12.6L14.7 8.40002"
                        strokeWidth="1.575"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#6B7280"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#202B32] font-inter text-sm leading-6 w-full">
                      All Property Typologies
                    </p>
                  </div>
                </div>
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute right-3.5 top-[15px] w-fit h-[18px] "
                >
                  <path
                    d="M4.5 5.45625L0 0.95625L0.95625 0L4.5 3.54375L8.04375 0L9 0.95625L4.5 5.45625V5.45625"
                    fill="#777F83"
                  />
                </svg>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
              <div className="flex items-center gap-1.5 w-full">
                <svg
                  width="14"
                  height="9"
                  viewBox="0 0 14 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start w-fit "
                >
                  <path
                    d="M7.875 5.25C7.35417 5.25 6.91146 5.06771 6.54688 4.70312C6.18229 4.33854 6 3.89583 6 3.375C6 2.85417 6.18229 2.41146 6.54688 2.04688C6.91146 1.68229 7.35417 1.5 7.875 1.5C8.39583 1.5 8.83854 1.68229 9.20312 2.04688C9.56771 2.41146 9.75 2.85417 9.75 3.375C9.75 3.89583 9.56771 4.33854 9.20312 4.70312C8.83854 5.06771 8.39583 5.25 7.875 5.25V5.25M3.375 6.75C3.06562 6.75 2.80078 6.63976 2.58047 6.41928C2.36016 6.19879 2.25 5.93375 2.25 5.62413V1.12067C2.25 0.811056 2.36016 0.546875 2.58047 0.328125C2.80078 0.109375 3.06562 0 3.375 0H12.375C12.6844 0 12.9492 0.110241 13.1695 0.330723C13.3898 0.551205 13.5 0.816253 13.5 1.12587V5.62933C13.5 5.93894 13.3898 6.20312 13.1695 6.42188C12.9492 6.64062 12.6844 6.75 12.375 6.75H3.375V6.75M4.5 5.625H11.25C11.25 5.3125 11.3602 5.04627 11.5805 4.82631C11.8008 4.60636 12.0656 4.49638 12.375 4.49638V2.25C12.0656 2.25 11.8008 2.13984 11.5805 1.91953C11.3602 1.69922 11.25 1.43438 11.25 1.125H4.5C4.5 1.4375 4.38984 1.70373 4.16953 1.92369C3.94922 2.14364 3.68438 2.25362 3.375 2.25362V4.5C3.68438 4.5 3.94922 4.61016 4.16953 4.83047C4.38984 5.05078 4.5 5.31562 4.5 5.625V5.625M11.625 9H1.125C0.815625 9 0.550781 8.88984 0.330469 8.66953C0.110156 8.44922 0 8.18437 0 7.875V1.5H1.125V7.875V7.875V7.875H11.625V9V9M3.375 5.625V5.625V5.625V5.625V1.125V1.125V1.125V1.125V1.125V1.125V5.625V5.625V5.625V5.625"
                    fill="#C6A77B"
                  />
                </svg>
                <p className="text-[#777F83] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
                  BUDGET BRACKET
                </p>
              </div>
              <div className="flex flex-col items-start w-full relative">
                <div className="flex pt-2 pr-10 pb-2 pl-4 justify-center items-center rounded-lg border border-[#E8E5DF] bg-[rgba(245,243,239,0.60)] w-full h-12 relative">
                  <div className="flex justify-center items-center absolute right-8 top-0 w-10 h-12 overflow-hidden">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="shrink-0 w-[21px] h-[21px] overflow-hidden relative "
                    >
                      <path
                        d="M6.29999 8.40002L10.5 12.6L14.7 8.40002"
                        strokeWidth="1.575"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        stroke="#6B7280"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#202B32] font-inter text-sm leading-6 w-full">
                      Any Investment Range
                    </p>
                  </div>
                </div>
                <svg
                  width="9"
                  height="18"
                  viewBox="0 0 9 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col items-start absolute right-3.5 top-[15px] w-fit h-[18px] "
                >
                  <path
                    d="M4.5 5.45625L0 0.95625L0.95625 0L4.5 3.54375L8.04375 0L9 0.95625L4.5 5.45625V5.45625"
                    fill="#777F83"
                  />
                </svg>
              </div>
            </div>
            <div className="flex justify-center items-center gap-2 rounded-lg bg-[#172A35] w-full h-12 p-3">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-center w-fit "
              >
                <path
                  d="M11.6438 12.6L7.1625 8.11875C6.7875 8.39375 6.3763 8.60938 5.9289 8.76562C5.48149 8.92188 5.00541 9 4.50065 9C3.25022 9 2.1875 8.5625 1.3125 7.6875C0.4375 6.8125 0 5.75 0 4.5C0 3.25 0.4375 2.1875 1.3125 1.3125C2.1875 0.4375 3.25 0 4.5 0C5.75 0 6.8125 0.4375 7.6875 1.3125C8.5625 2.1875 9 3.25022 9 4.50065C9 5.00541 8.92188 5.48149 8.76562 5.9289C8.60938 6.3763 8.39375 6.7875 8.11875 7.1625L12.6 11.6438L11.6438 12.6V12.6M4.5 7.65C5.375 7.65 6.11875 7.34375 6.73125 6.73125C7.34375 6.11875 7.65 5.375 7.65 4.5C7.65 3.625 7.34375 2.88125 6.73125 2.26875C6.11875 1.65625 5.375 1.35 4.5 1.35C3.625 1.35 2.88125 1.65625 2.26875 2.26875C1.65625 2.88125 1.35 3.625 1.35 4.5C1.35 5.375 1.65625 6.11875 2.26875 6.73125C2.88125 7.34375 3.625 7.65 4.5 7.65V7.65"
                  fill="white"
                />
              </svg>
              <div className="flex flex-col items-center w-fit">
                <p className="text-[#FFF] font-inter text-sm font-medium leading-[21px] w-fit">
                  Find
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="properties" className="flex py-16 lg:py-28 px-0 flex-col items-start bg-[#F5F3EF] w-full relative">
        <div className="flex w-full max-w-[1280px] mx-auto py-0 px-4 sm:px-8 lg:px-16 flex-col items-start gap-14 w-full">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-5 w-full">
            <div className="flex max-w-full pt-2 flex-col items-start gap-3 w-fit">
              <div className="flex items-center gap-2 w-fit">
                <div className="bg-[#C6A77B] w-5 h-0.5"></div>
                <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
                  EXPLORE OUR COLLECTION
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#172A35] font-manrope text-[42px] font-bold leading-[50.4px] w-fit">
                  Find Your Perfect Property
                </p>
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="text-[#777F83] font-inter text-base leading-[26px] w-fit">
                  From modern residences to tranquil family estates and prime
                  commercial holdings, explore spaces selected to meet
                  distinguished standards.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-fit">
              <button className="cursor-pointer text-nowrap flex justify-center items-center w-[163px] h-5">
                <p className="text-[#777F83] font-inter text-[13px] font-medium leading-[19.5px] w-[163px] h-5">
                  Displaying verified listings
                </p>
              </button>
              <div className="rounded-full bg-[#C6A77B] w-2 h-2"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-start gap-6 w-full">
            <div role="link" tabIndex={0} onClick={() => navigate('/property/willow-residence')} onKeyDown={(event) => event.key === 'Enter' && navigate('/property/willow-residence')} aria-label="View The Willow Residence" className="property-card flex flex-col items-start rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full overflow-hidden">
              <div className="flex flex-col justify-center items-start bg-[#F5F3EF] w-full overflow-hidden relative">
                <img
                  src={willowResidenceImage}
                  className="w-full h-[168px] overflow-hidden max-w-none"
                  alt="The Willow Residence in Coimbatore"
                />
                <button type="button" aria-label={likedProperties.includes('willow-residence') ? 'Unlike The Willow Residence' : 'Like The Willow Residence'} aria-pressed={likedProperties.includes('willow-residence')} onClick={(event) => { event.stopPropagation(); toggleLike('willow-residence'); }} className={`absolute right-3 top-3 rounded-full bg-white/95 px-3 py-2 text-lg shadow ${likedProperties.includes('willow-residence') ? 'text-red-600' : 'text-[#735A35]'}`}>{likedProperties.includes('willow-residence') ? '♥' : '♡'}</button>
                <div className="flex py-1 px-2.5 flex-col items-start absolute left-3 top-3 rounded-lg bg-[#172A35] w-fit">
                  <p className="text-[#FFF] font-inter text-[11px] font-medium leading-[16.5px] w-fit tracking-[0.05em]">
                    FOR SALE
                  </p>
                </div>
              </div>
              <div className="flex p-6 flex-col justify-between items-start w-full">
                <div className="flex pb-1 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-full tracking-[0.05em]">
                      INDEPENDENT VILLA
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-full">
                    The Willow Residence
                  </p>
                </div>
                <div className="flex pt-1 pr-0 pb-4 pl-0 flex-col items-start w-full">
                  <div className="flex items-center gap-1 w-full">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M4.875 6C5.1875 6 5.45312 5.89062 5.67188 5.67188C5.89062 5.45312 6 5.1875 6 4.875C6 4.5625 5.89062 4.29688 5.67188 4.07812C5.45312 3.85938 5.1875 3.75 4.875 3.75C4.5625 3.75 4.29688 3.85938 4.07812 4.07812C3.85938 4.29688 3.75 4.5625 3.75 4.875C3.75 5.1875 3.85938 5.45312 4.07812 5.67188C4.29688 5.89062 4.5625 6 4.875 6V6M4.875 10.5156C6.11458 9.40104 7.04948 8.375 7.67969 7.4375C8.3099 6.5 8.625 5.66146 8.625 4.92188C8.625 3.82812 8.26823 2.92188 7.55469 2.20312C6.84115 1.48438 5.94792 1.125 4.875 1.125C3.80208 1.125 2.90885 1.48438 2.19531 2.20312C1.48177 2.92188 1.125 3.82812 1.125 4.92188C1.125 5.66146 1.4401 6.5 2.07031 7.4375C2.70052 8.375 3.63542 9.40104 4.875 10.5156V10.5156M4.875 12C3.23958 10.6354 2.01823 9.36719 1.21094 8.19531C0.403646 7.02344 0 5.93229 0 4.92188C0 3.52604 0.463542 2.35677 1.39062 1.41406C2.31771 0.471354 3.47917 0 4.875 0C6.26042 0 7.41927 0.471354 8.35156 1.41406C9.28385 2.35677 9.75 3.52604 9.75 4.92188C9.75 5.93229 9.34896 7.02083 8.54688 8.1875C7.74479 9.35417 6.52083 10.625 4.875 12V12M4.875 4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875"
                        fill="#C6A77B"
                      />
                    </svg>
                    <p className="text-[#777F83] font-inter text-sm leading-[21px] w-fit">
                      Race Course, Coimbatore
                    </p>
                  </div>
                </div>
                <div className="flex pb-5 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#172A35] font-manrope text-xl font-bold leading-7 w-full">
                      &#8377;1.25 Crore
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[81.5px] pt-[30px] flex-col justify-end items-start w-full h-28">
                  <div className="flex pt-4 justify-center items-start border-t border-t-[#E8E5DF] w-full">
                    <div className="flex pb-[25px] flex-col items-center gap-0.5 w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          BEDS
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        4
                      </p>
                    </div>
                    <div className="flex pb-[25px] flex-col items-center gap-0.5 border-r border-r-[#E8E5DF] border-l border-l-[#E8E5DF] w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          BATHS
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        3
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-center gap-0.5 w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          AREA
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        2,400
                      </p>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="link" tabIndex={0} onClick={() => navigate('/property/urban-heights')} onKeyDown={(event) => event.key === 'Enter' && navigate('/property/urban-heights')} aria-label="View The Urban Heights" className="property-card flex flex-col items-start rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full overflow-hidden">
              <div className="flex flex-col justify-center items-start bg-[#F5F3EF] w-full overflow-hidden relative">
                <img
                  src={urbanHeightsImage}
                  className="w-full h-[168px] overflow-hidden max-w-none"
                  alt="The Urban Heights Luxury Apartment"
                />
                <button type="button" aria-label={likedProperties.includes('urban-heights') ? 'Unlike The Urban Heights' : 'Like The Urban Heights'} aria-pressed={likedProperties.includes('urban-heights')} onClick={(event) => { event.stopPropagation(); toggleLike('urban-heights'); }} className={`absolute right-3 top-3 rounded-full bg-white/95 px-3 py-2 text-lg shadow ${likedProperties.includes('urban-heights') ? 'text-red-600' : 'text-[#735A35]'}`}>{likedProperties.includes('urban-heights') ? '♥' : '♡'}</button>
                <div className="flex py-1 px-2.5 flex-col items-start absolute left-3 top-3 rounded-lg bg-[#172A35] w-fit">
                  <p className="text-[#FFF] font-inter text-[11px] font-medium leading-[16.5px] w-fit tracking-[0.05em]">
                    FOR SALE
                  </p>
                </div>
              </div>
              <div className="flex p-6 flex-col justify-between items-start w-full">
                <div className="flex pb-1 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-full tracking-[0.05em]">
                      LUXURY APARTMENT
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-full">
                    The Urban Heights
                  </p>
                </div>
                <div className="flex pt-1 pr-0 pb-4 pl-0 flex-col items-start w-full">
                  <div className="flex items-center gap-1 w-full">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M4.875 6C5.1875 6 5.45312 5.89062 5.67188 5.67188C5.89062 5.45312 6 5.1875 6 4.875C6 4.5625 5.89062 4.29688 5.67188 4.07812C5.45312 3.85938 5.1875 3.75 4.875 3.75C4.5625 3.75 4.29688 3.85938 4.07812 4.07812C3.85938 4.29688 3.75 4.5625 3.75 4.875C3.75 5.1875 3.85938 5.45312 4.07812 5.67188C4.29688 5.89062 4.5625 6 4.875 6V6M4.875 10.5156C6.11458 9.40104 7.04948 8.375 7.67969 7.4375C8.3099 6.5 8.625 5.66146 8.625 4.92188C8.625 3.82812 8.26823 2.92188 7.55469 2.20312C6.84115 1.48438 5.94792 1.125 4.875 1.125C3.80208 1.125 2.90885 1.48438 2.19531 2.20312C1.48177 2.92188 1.125 3.82812 1.125 4.92188C1.125 5.66146 1.4401 6.5 2.07031 7.4375C2.70052 8.375 3.63542 9.40104 4.875 10.5156V10.5156M4.875 12C3.23958 10.6354 2.01823 9.36719 1.21094 8.19531C0.403646 7.02344 0 5.93229 0 4.92188C0 3.52604 0.463542 2.35677 1.39062 1.41406C2.31771 0.471354 3.47917 0 4.875 0C6.26042 0 7.41927 0.471354 8.35156 1.41406C9.28385 2.35677 9.75 3.52604 9.75 4.92188C9.75 5.93229 9.34896 7.02083 8.54688 8.1875C7.74479 9.35417 6.52083 10.625 4.875 12V12M4.875 4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875"
                        fill="#C6A77B"
                      />
                    </svg>
                    <p className="text-[#777F83] font-inter text-sm leading-[21px] w-fit">
                      Saravanampatti, Coimbatore
                    </p>
                  </div>
                </div>
                <div className="flex pb-5 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#172A35] font-manrope text-xl font-bold leading-7 w-full">
                      &#8377;78 Lakhs
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[57.5px] pt-[54px] flex-col justify-end items-start w-full h-28">
                  <div className="flex pt-4 justify-center items-start border-t border-t-[#E8E5DF] w-full">
                    <div className="flex pb-px flex-col items-center gap-0.5 w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          BEDS
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        3
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-center gap-0.5 border-r border-r-[#E8E5DF] border-l border-l-[#E8E5DF] w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          BATHS
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        2
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-center gap-0.5 w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          AREA
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        1,650 sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="link" tabIndex={0} onClick={() => navigate('/property/greenfield-homes')} onKeyDown={(event) => event.key === 'Enter' && navigate('/property/greenfield-homes')} aria-label="View The Greenfield Homes" className="property-card flex flex-col items-start rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full overflow-hidden">
              <div className="flex flex-col justify-center items-start bg-[#F5F3EF] w-full overflow-hidden relative">
                <img
                  src={greenfieldHomesImage}
                  className="w-full h-[168px] overflow-hidden max-w-none"
                  alt="The Greenfield Homes Peelamedu"
                />
                <button type="button" aria-label={likedProperties.includes('greenfield-homes') ? 'Unlike The Greenfield Homes' : 'Like The Greenfield Homes'} aria-pressed={likedProperties.includes('greenfield-homes')} onClick={(event) => { event.stopPropagation(); toggleLike('greenfield-homes'); }} className={`absolute right-3 top-3 rounded-full bg-white/95 px-3 py-2 text-lg shadow ${likedProperties.includes('greenfield-homes') ? 'text-red-600' : 'text-[#735A35]'}`}>{likedProperties.includes('greenfield-homes') ? '♥' : '♡'}</button>
                <div className="flex py-1 px-2.5 flex-col items-start absolute left-3 top-3 rounded-lg bg-[#C6A77B] w-fit">
                  <p className="text-[#172A35] font-inter text-[11px] font-semibold leading-[16.5px] w-fit tracking-[0.05em]">
                    FOR RENT
                  </p>
                </div>
              </div>
              <div className="flex p-6 flex-col justify-between items-start w-full">
                <div className="flex pb-1 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-full tracking-[0.05em]">
                      RESIDENTIAL HOUSE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-full">
                    The Greenfield Homes
                  </p>
                </div>
                <div className="flex pt-1 pr-0 pb-4 pl-0 flex-col items-start w-full">
                  <div className="flex items-center gap-1 w-full">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M4.875 6C5.1875 6 5.45312 5.89062 5.67188 5.67188C5.89062 5.45312 6 5.1875 6 4.875C6 4.5625 5.89062 4.29688 5.67188 4.07812C5.45312 3.85938 5.1875 3.75 4.875 3.75C4.5625 3.75 4.29688 3.85938 4.07812 4.07812C3.85938 4.29688 3.75 4.5625 3.75 4.875C3.75 5.1875 3.85938 5.45312 4.07812 5.67188C4.29688 5.89062 4.5625 6 4.875 6V6M4.875 10.5156C6.11458 9.40104 7.04948 8.375 7.67969 7.4375C8.3099 6.5 8.625 5.66146 8.625 4.92188C8.625 3.82812 8.26823 2.92188 7.55469 2.20312C6.84115 1.48438 5.94792 1.125 4.875 1.125C3.80208 1.125 2.90885 1.48438 2.19531 2.20312C1.48177 2.92188 1.125 3.82812 1.125 4.92188C1.125 5.66146 1.4401 6.5 2.07031 7.4375C2.70052 8.375 3.63542 9.40104 4.875 10.5156V10.5156M4.875 12C3.23958 10.6354 2.01823 9.36719 1.21094 8.19531C0.403646 7.02344 0 5.93229 0 4.92188C0 3.52604 0.463542 2.35677 1.39062 1.41406C2.31771 0.471354 3.47917 0 4.875 0C6.26042 0 7.41927 0.471354 8.35156 1.41406C9.28385 2.35677 9.75 3.52604 9.75 4.92188C9.75 5.93229 9.34896 7.02083 8.54688 8.1875C7.74479 9.35417 6.52083 10.625 4.875 12V12M4.875 4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875"
                        fill="#C6A77B"
                      />
                    </svg>
                    <p className="text-[#777F83] font-inter text-sm leading-[21px] w-fit">
                      Peelamedu, Coimbatore
                    </p>
                  </div>
                </div>
                <div className="flex pb-5 flex-col items-start w-full">
                  <div className="w-full h-[30px] relative">
                    <p className="text-[#172A35] font-manrope text-xl font-bold leading-7 w-[86px] h-7 absolute left-0 -top-px">
                      &#8377;25,000{" "}
                    </p>
                    <p className="text-[#777F83] font-manrope text-[13px] font-medium leading-7 w-12 h-7 absolute left-[86px] top-0.5">
                      &#x2F; month
                    </p>
                  </div>
                </div>
                <div className="flex min-h-[57.5px] pt-[52px] flex-col justify-end items-start w-full h-[110px]">
                  <div className="flex pt-4 justify-center items-start border-t border-t-[#E8E5DF] w-full">
                    <div className="flex pb-px flex-col items-center gap-0.5 w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          BEDS
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        2
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-center gap-0.5 border-r border-r-[#E8E5DF] border-l border-l-[#E8E5DF] w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          BATHS
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        2
                      </p>
                    </div>
                    <div className="flex pb-px flex-col items-center gap-0.5 w-full">
                      <div className="flex flex-col items-center w-full">
                        <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                          AREA
                        </p>
                      </div>
                      <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                        1,200 sq.ft
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div role="link" tabIndex={0} onClick={() => navigate('/property/grand-business-hub')} onKeyDown={(event) => event.key === 'Enter' && navigate('/property/grand-business-hub')} aria-label="View The Grand Business Hub" className="property-card flex flex-col items-start rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full overflow-hidden">
              <div className="flex flex-col justify-center items-start bg-[#F5F3EF] w-full overflow-hidden relative">
                <img
                  src={grandBusinessHubImage}
                  className="w-full h-[168px] overflow-hidden max-w-none"
                  alt="The Grand Business Hub Avinashi Road"
                />
                <button type="button" aria-label={likedProperties.includes('grand-business-hub') ? 'Unlike The Grand Business Hub' : 'Like The Grand Business Hub'} aria-pressed={likedProperties.includes('grand-business-hub')} onClick={(event) => { event.stopPropagation(); toggleLike('grand-business-hub'); }} className={`absolute right-3 top-3 rounded-full bg-white/95 px-3 py-2 text-lg shadow ${likedProperties.includes('grand-business-hub') ? 'text-red-600' : 'text-[#735A35]'}`}>{likedProperties.includes('grand-business-hub') ? '♥' : '♡'}</button>
                <div className="flex py-1 px-2.5 flex-col items-start absolute left-3 top-3 rounded-lg bg-[#172A35] w-fit">
                  <p className="text-[#FFF] font-inter text-[11px] font-medium leading-[16.5px] w-fit tracking-[0.05em]">
                    COMMERCIAL
                  </p>
                </div>
              </div>
              <div className="flex p-6 flex-col justify-between items-start w-full">
                <div className="flex pb-1 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-full tracking-[0.05em]">
                      COMMERCIAL SPACE
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-full">
                    The Grand Business Hub
                  </p>
                </div>
                <div className="flex pt-1 pr-0 pb-4 pl-0 flex-col items-start w-full">
                  <div className="flex items-center gap-1 w-full">
                    <svg
                      width="10"
                      height="12"
                      viewBox="0 0 10 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M4.875 6C5.1875 6 5.45312 5.89062 5.67188 5.67188C5.89062 5.45312 6 5.1875 6 4.875C6 4.5625 5.89062 4.29688 5.67188 4.07812C5.45312 3.85938 5.1875 3.75 4.875 3.75C4.5625 3.75 4.29688 3.85938 4.07812 4.07812C3.85938 4.29688 3.75 4.5625 3.75 4.875C3.75 5.1875 3.85938 5.45312 4.07812 5.67188C4.29688 5.89062 4.5625 6 4.875 6V6M4.875 10.5156C6.11458 9.40104 7.04948 8.375 7.67969 7.4375C8.3099 6.5 8.625 5.66146 8.625 4.92188C8.625 3.82812 8.26823 2.92188 7.55469 2.20312C6.84115 1.48438 5.94792 1.125 4.875 1.125C3.80208 1.125 2.90885 1.48438 2.19531 2.20312C1.48177 2.92188 1.125 3.82812 1.125 4.92188C1.125 5.66146 1.4401 6.5 2.07031 7.4375C2.70052 8.375 3.63542 9.40104 4.875 10.5156V10.5156M4.875 12C3.23958 10.6354 2.01823 9.36719 1.21094 8.19531C0.403646 7.02344 0 5.93229 0 4.92188C0 3.52604 0.463542 2.35677 1.39062 1.41406C2.31771 0.471354 3.47917 0 4.875 0C6.26042 0 7.41927 0.471354 8.35156 1.41406C9.28385 2.35677 9.75 3.52604 9.75 4.92188C9.75 5.93229 9.34896 7.02083 8.54688 8.1875C7.74479 9.35417 6.52083 10.625 4.875 12V12M4.875 4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875V4.875"
                        fill="#C6A77B"
                      />
                    </svg>
                    <p className="text-[#777F83] font-inter text-sm leading-[21px] w-fit">
                      Avinashi Road, Coimbatore
                    </p>
                  </div>
                </div>
                <div className="flex pb-5 flex-col items-start w-full">
                  <div className="flex flex-col items-start w-full">
                    <p className="text-[#172A35] font-manrope text-xl font-bold leading-7 w-full">
                      &#8377;2.80 Crore
                    </p>
                  </div>
                </div>
                <div className="flex pt-4 justify-center items-start border-t border-t-[#E8E5DF] w-full">
                  <div className="flex pb-[25px] flex-col items-center gap-0.5 w-full">
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                        TYPE
                      </p>
                    </div>
                    <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                      Office
                    </p>
                  </div>
                  <div className="flex pb-[25px] flex-col items-center gap-0.5 border-r border-r-[#E8E5DF] border-l border-l-[#E8E5DF] w-full">
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                        BATHS
                      </p>
                    </div>
                    <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                      2
                    </p>
                  </div>
                  <div className="flex pb-px flex-col items-center gap-0.5 w-full">
                    <div className="flex flex-col items-center w-full">
                      <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-fit">
                        AREA
                      </p>
                    </div>
                    <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                      3,500
                    </p>
                    <p className="text-[#202B32] font-inter text-sm font-semibold leading-[21px] w-fit">
                      sq.ft
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {showAllProperties && <div className="grid w-full grid-cols-1 items-start gap-6 sm:grid-cols-2 xl:grid-cols-4" aria-live="polite">
            {properties.slice(5).map((property) => <article key={property.id} role="link" tabIndex={0} aria-label={`View ${property.name}`} onClick={() => navigate(`/property/${property.id}`)} onKeyDown={(event) => event.key === 'Enter' && navigate(`/property/${property.id}`)} className="property-card flex w-full flex-col items-start overflow-hidden rounded-lg border border-[#E8E5DF] bg-white">
              <div className="relative flex w-full flex-col items-start justify-center overflow-hidden bg-[#F5F3EF]"><img src={property.image} alt={property.name} className="h-[168px] w-full max-w-none object-cover" />
                <button type="button" aria-label={`${likedProperties.includes(property.id) ? 'Unlike' : 'Like'} ${property.name}`} aria-pressed={likedProperties.includes(property.id)} onClick={(event) => { event.stopPropagation(); toggleLike(property.id); }} className={`absolute right-3 top-3 rounded-full bg-white/95 px-3 py-2 text-lg shadow ${likedProperties.includes(property.id) ? 'text-red-600' : 'text-[#735A35]'}`}>{likedProperties.includes(property.id) ? '\u2665' : '\u2661'}</button>
                <span className="absolute left-3 top-3 rounded-lg bg-[#172A35] px-2.5 py-1 text-[11px] font-medium tracking-wide text-white">{property.status.toUpperCase()}</span>
              </div>
              <div className="flex w-full flex-col items-start justify-between p-6"><p className="pb-1 text-xs font-medium tracking-wide text-[#C6A77B]">{property.type.toUpperCase()}</p><h3 className="w-full font-manrope text-xl font-semibold leading-[30px] text-[#172A35]">{property.name}</h3>
                <p className="w-full pb-4 pt-1 text-sm text-[#777F83]">{property.location}</p><p className="w-full pb-5 font-manrope text-xl font-bold text-[#172A35]">{property.price}</p>
                <div className="flex min-h-[81px] w-full items-center border-t border-[#E8E5DF] pt-4 text-center text-sm font-semibold text-[#202B32]">
                  <div className="w-full"><span className="block text-[11px] font-medium text-[#777F83]">BEDS</span>{property.beds}</div><div className="w-full border-x border-[#E8E5DF]"><span className="block text-[11px] font-medium text-[#777F83]">BATHS</span>{property.baths}</div><div className="w-full"><span className="block text-[11px] font-medium text-[#777F83]">AREA</span>{property.area}</div>
                </div>
              </div>
            </article>)}
          </div>}
          <div className="flex justify-center items-start w-full">
            <button type="button" onClick={() => setShowAllProperties((visible) => !visible)} aria-expanded={showAllProperties} className="cursor-pointer text-nowrap flex py-0 px-8 justify-center items-center gap-2 rounded-lg border border-[#172A35] bg-[#FFF] w-fit h-12">
              <p className="text-[#172A35] font-inter text-sm font-medium leading-[21px] w-fit">
                {showAllProperties ? 'Show Featured Properties' : 'View All Properties'}
              </p>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M8.2125 6.075H0V4.725H8.2125L4.44375 0.95625L5.4 0L10.8 5.4L5.4 10.8L4.44375 9.84375L8.2125 6.075V6.075"
                  fill="#172A35"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex p-4 sm:p-8 lg:p-16 flex-col items-start border-b border-b-[#E8E5DF] bg-[#FFF] w-full relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-start gap-8 lg:gap-12 w-full">
          <div className="flex flex-col items-start w-full">
            <div className="w-full h-11 relative">
              <p className="text-[#172A35] font-manrope text-[44px] font-bold leading-10 w-[81px] h-10 absolute left-0 top-0">
                250
              </p>
              <p className="text-[#C6A77B] font-manrope text-2xl font-semibold leading-8 w-3.5 h-8 absolute left-[85px] top-3">
                +
              </p>
            </div>
            <div className="flex pt-[3px] flex-col items-start w-full">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#172A35] font-inter text-[13px] font-medium leading-[19.5px] w-full tracking-[0.12em]">
                  PROPERTIES LISTED
                </p>
              </div>
            </div>
            <div className="flex pt-[5px] flex-col items-start w-full">
              <div className="flex pb-px flex-col items-start w-full">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] w-full">
                  Vetted for clean titles, RERA compliance &amp; prime zoning
                </p>
              </div>
            </div>
          </div>
          <div className="flex py-0 px-4 flex-col items-start border-l border-l-[#E8E5DF] w-full">
            <div className="w-full h-11 relative">
              <p className="text-[#172A35] font-manrope text-[44px] font-bold leading-10 w-[75px] h-10 absolute left-0 top-0">
                180
              </p>
              <p className="text-[#C6A77B] font-manrope text-2xl font-semibold leading-8 w-3.5 h-8 absolute left-[79px] top-3">
                +
              </p>
            </div>
            <div className="flex pt-[3px] flex-col items-start w-full">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#172A35] font-inter text-[13px] font-medium leading-[19.5px] w-full tracking-[0.12em]">
                  HAPPY CLIENTS
                </p>
              </div>
            </div>
            <div className="flex pt-[5px] flex-col items-start w-full">
              <div className="flex pb-px flex-col items-start w-full">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] w-full">
                  Families and institutional funds placed in dream homes
                </p>
              </div>
            </div>
          </div>
          <div className="flex py-0 px-4 flex-col items-start border-l border-l-[#E8E5DF] w-full">
            <div className="w-full h-11 relative">
              <p className="text-[#172A35] font-manrope text-[44px] font-bold leading-10 w-[52px] h-10 absolute left-0 top-0">
                25
              </p>
              <p className="text-[#C6A77B] font-manrope text-2xl font-semibold leading-8 w-3.5 h-8 absolute left-14 top-3">
                +
              </p>
            </div>
            <div className="flex pt-[3px] flex-col items-start w-full">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#172A35] font-inter text-[13px] font-medium leading-[19.5px] w-full tracking-[0.12em]">
                  EXPERT AGENTS
                </p>
              </div>
            </div>
            <div className="flex pt-[5px] flex-col items-start w-full">
              <div className="flex pb-px flex-col items-start w-full">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] w-full">
                  Specialists in high-net-worth portfolio property advisory
                </p>
              </div>
            </div>
          </div>
          <div className="flex py-0 px-4 flex-col items-start border-l border-l-[#E8E5DF] w-full">
            <div className="w-full h-11 relative">
              <p className="text-[#172A35] font-manrope text-[44px] font-bold leading-10 w-[45px] h-10 absolute left-0 top-0">
                12
              </p>
              <p className="text-[#C6A77B] font-manrope text-2xl font-semibold leading-8 w-3.5 h-8 absolute left-[49px] top-3">
                +
              </p>
            </div>
            <div className="flex pt-[3px] flex-col items-start w-full">
              <div className="flex flex-col items-start w-full">
                <p className="text-[#172A35] font-inter text-[13px] font-medium leading-[19.5px] w-full tracking-[0.12em]">
                  YEARS EXPERIENCE
                </p>
              </div>
            </div>
            <div className="flex pt-[5px] flex-col items-start w-full">
              <div className="flex pb-px flex-col items-start w-full">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] w-full">
                  Continuous market leadership in Western Tamil Nadu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-16 lg:py-28 px-4 sm:px-8 lg:px-16 flex-col items-start border-t border-t-[#E8E5DF] bg-[#F5F3EF] w-full relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full">
          <div className="flex flex-col items-start w-full relative lg:col-start-2 lg:row-start-1">
            <div className="flex pb-3 flex-col items-start w-fit">
              <div className="flex items-center gap-2 w-fit">
                <div className="bg-[#C6A77B] w-5 h-0.5"></div>
                <div className="flex flex-col items-start w-fit">
                  <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
                    WHO WE ARE
                  </p>
                </div>
              </div>
            </div>
            <div className="flex pt-0 pr-9 pb-6 pl-0 flex-col items-start w-fit">
              <p className="text-[#172A35] font-manrope text-[42px] font-bold leading-[50.4px] w-fit">
                Real Estate Built on Trust &amp; Relationships
              </p>
            </div>
            <div className="flex pt-0 pr-[7px] pb-8 pl-0 flex-col items-start w-fit">
              <p className="text-[#777F83] font-inter text-base leading-[26.4px] w-fit">
                We believe finding the right property should be an exciting
                experience, not a complicated one. Our team brings together
                local market knowledge, deep legal diligence, and a genuine
                commitment to helping clients make confident property decisions.
              </p>
            </div>
            <div className="flex pb-8 flex-col items-start w-full">
              <div className="flex flex-col items-start gap-5 w-full">
                <div className="flex items-start gap-4 w-full">
                  <div className="flex pt-0.5 flex-col items-start w-7 h-[30px]">
                    <div className="flex justify-center items-center shrink-0 rounded-full bg-[rgba(198,167,123,0.15)] w-7 h-7">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M3.23333 7.1L0 3.88333L0.85 3.01667L3.23333 5.4L8.65 0L9.5 0.85L3.23333 7.1V7.1"
                          fill="#172A35"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#172A35] font-manrope text-base font-semibold leading-6 w-fit">
                        Local Market Expertise
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#777F83] font-inter text-sm leading-[21px] w-fit">
                        Deep familiarity with municipal zoning, road expansions,
                        and key investment corridors.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 w-full">
                  <div className="flex pt-0.5 flex-col items-start w-7 h-[30px]">
                    <div className="flex justify-center items-center shrink-0 rounded-full bg-[rgba(198,167,123,0.15)] w-7 h-7">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M3.23333 7.1L0 3.88333L0.85 3.01667L3.23333 5.4L8.65 0L9.5 0.85L3.23333 7.1V7.1"
                          fill="#172A35"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#172A35] font-manrope text-base font-semibold leading-6 w-fit">
                        Personalised Property Guidance
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#777F83] font-inter text-sm leading-[21px] w-fit">
                        Shortlists matched strictly to your family priorities,
                        timeline, and investment profile.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-4 w-full">
                  <div className="flex pt-0.5 flex-col items-start w-7 h-[30px]">
                    <div className="flex justify-center items-center shrink-0 rounded-full bg-[rgba(198,167,123,0.15)] w-7 h-7">
                      <svg
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex flex-col items-start w-fit "
                      >
                        <path
                          d="M3.23333 7.1L0 3.88333L0.85 3.01667L3.23333 5.4L8.65 0L9.5 0.85L3.23333 7.1V7.1"
                          fill="#172A35"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-1 w-fit">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#172A35] font-manrope text-base font-semibold leading-6 w-fit">
                        Transparent Communication
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#777F83] font-inter text-sm leading-[21px] w-fit">
                        Clear legal scrutiny, verified encumbrance records, and
                        complete transaction transparency.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/about" className="cursor-pointer text-nowrap flex py-0 px-7 justify-center items-center gap-2 rounded-lg bg-[#172A35] w-fit h-12">
              <p className="text-[#FFF] font-inter text-sm font-medium leading-[21px] w-fit">
                Discover Our Story
              </p>
              <svg
                width="11"
                height="11"
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M8.2125 6.075H0V4.725H8.2125L4.44375 0.95625L5.4 0L10.8 5.4L5.4 10.8L4.44375 9.84375L8.2125 6.075V6.075"
                  fill="white"
                />
              </svg>
            </Link>
          </div>
          <div className="flex flex-col justify-center items-start rounded-lg bg-[rgba(255,255,255,0.00)] shadow-[01px2px0rgba(0,0,0,0.05)] w-full relative lg:col-start-1 lg:row-start-1 overflow-hidden">
            <img
              src={livingRoomImage}
              className="w-full h-72 lg:h-[408px] object-cover overflow-hidden max-w-none"
              alt="Architectural living room Haven Estates"
            />
          </div>
        </div>
      </div>
      <div className="flex py-16 lg:py-28 px-0 flex-col items-start border-t border-t-[#E8E5DF] bg-[#FFF] w-full relative">
        <div className="flex w-full max-w-[1280px] mx-auto py-0 px-4 sm:px-8 lg:px-16 flex-col items-center gap-16 w-full">
          <div className="flex max-w-full pt-[5px] flex-col items-center gap-3 w-full">
            <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
              THE HAVEN ADVANTAGE
            </p>
            <div className="flex pt-0.5 flex-col items-center w-full">
              <p className="text-[#172A35] font-manrope text-[42px] font-bold leading-[50.4px] w-fit">
                Why Clients Choose to Work With Us
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              <p className="text-[#777F83] font-inter text-base leading-[26px] w-fit">
                Property decisions deserve more than a standard pitch. They
                deserve honest advice, verified information, and a team focused
                entirely on your satisfaction.
              </p>
            </div>
          </div>
          <div id="service-cards" className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-start gap-6 w-full">
            <div className="service-card rounded-lg border border-[#E8E5DF] bg-[#F5F3EF] w-full h-[342px] relative">
              <div className="flex pb-6 flex-col items-start w-12 h-[72px] absolute left-[33px] top-[33px]">
                <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M5.5 14.5L12.5 12.5L14.5 5.5L7.5 7.5L5.5 14.5V14.5M10 11.5C9.58333 11.5 9.22917 11.3542 8.9375 11.0625C8.64583 10.7708 8.5 10.4167 8.5 10C8.5 9.58333 8.64583 9.22917 8.9375 8.9375C9.22917 8.64583 9.58333 8.5 10 8.5C10.4167 8.5 10.7708 8.64583 11.0625 8.9375C11.3542 9.22917 11.5 9.58333 11.5 10C11.5 10.4167 11.3542 10.7708 11.0625 11.0625C10.7708 11.3542 10.4167 11.5 10 11.5V11.5M10 20C8.61667 20 7.31667 19.7375 6.1 19.2125C4.88333 18.6875 3.825 17.975 2.925 17.075C2.025 16.175 1.3125 15.1167 0.7875 13.9C0.2625 12.6833 0 11.3833 0 10C0 8.61667 0.2625 7.31667 0.7875 6.1C1.3125 4.88333 2.025 3.825 2.925 2.925C3.825 2.025 4.88333 1.3125 6.1 0.7875C7.31667 0.2625 8.61667 0 10 0C11.3833 0 12.6833 0.2625 13.9 0.7875C15.1167 1.3125 16.175 2.025 17.075 2.925C17.975 3.825 18.6875 4.88333 19.2125 6.1C19.7375 7.31667 20 8.61667 20 10C20 11.3833 19.7375 12.6833 19.2125 13.9C18.6875 15.1167 17.975 16.175 17.075 17.075C16.175 17.975 15.1167 18.6875 13.9 19.2125C12.6833 19.7375 11.3833 20 10 20V20M10 18C12.2167 18 14.1042 17.2208 15.6625 15.6625C17.2208 14.1042 18 12.2167 18 10C18 7.78333 17.2208 5.89583 15.6625 4.3375C14.1042 2.77917 12.2167 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 12.2167 2.77917 14.1042 4.3375 15.6625C5.89583 17.2208 7.78333 18 10 18V18M10 10V10V10V10V10V10V10V10V10V10"
                      fill="#C6A77B"
                    />
                  </svg>
                </div>
              </div>
              <div className="inline-flex pb-1 flex-col items-start absolute left-[33px] top-[105px]">
                <p className="text-[#777F83] font-inter text-xs font-medium leading-[18px] absolute left-0 top-0 tracking-[0.12em]">
                  01 &#x2F; ADVISORY
                </p>
              </div>
              <div className="inline-flex pt-0 pr-[83px] pb-2 pl-0 flex-col items-start absolute left-[33px] top-[127px]">
                <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] absolute left-0 top-0">
                  Local Market Knowledge
                </p>
              </div>
              <div className="inline-flex pt-0 pr-[13px] pb-px pl-0 flex-col items-start absolute left-[33px] top-[194px]">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] absolute left-0 top-0">
                  We understand neighbourhood trends, municipal zoning laws, and
                  infrastructure plans affecting future valuations.
                </p>
              </div>
            </div>
            <div className="service-card flex pt-[33px] pr-[33px] pb-14 pl-[33px] flex-col items-start rounded-lg border border-[#E8E5DF] bg-[#F5F3EF] w-full h-[342px]">
              <div className="flex pb-6 flex-col items-start w-12 h-[72px]">
                <div className="flex justify-center items-center rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
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
                      fill="#C6A77B"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex pb-1 flex-col items-start w-fit">
                <p className="text-[#777F83] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
                  02 &#x2F; CURATION
                </p>
              </div>
              <div className="flex pt-0 pr-20 pb-2 pl-0 flex-col items-start w-fit">
                <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-fit">
                  Personalised Guidance
                </p>
              </div>
              <div className="flex pt-0 pr-1.5 pb-px pl-0 flex-col items-start w-fit">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] w-fit">
                  Every client has distinct preferences. We take the time to
                  listen and curate properties that meet your specific brief.
                </p>
              </div>
            </div>
            <div className="service-card rounded-lg border border-[#E8E5DF] bg-[#F5F3EF] w-full h-[342px] relative">
              <div className="flex pb-6 flex-col items-start w-12 h-[72px] absolute left-[33px] top-[33px]">
                <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
                  <svg
                    width="16"
                    height="20"
                    viewBox="0 0 16 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M6.95 13.55L12.6 7.9L11.175 6.475L6.95 10.7L4.85 8.6L3.425 10.025L6.95 13.55V13.55M8 20C5.68333 19.4167 3.77083 18.0875 2.2625 16.0125C0.754167 13.9375 0 11.6333 0 9.1V3L8 0L16 3V9.1C16 11.6333 15.2458 13.9375 13.7375 16.0125C12.2292 18.0875 10.3167 19.4167 8 20V20M8 17.9C9.73333 17.35 11.1667 16.25 12.3 14.6C13.4333 12.95 14 11.1167 14 9.1V4.375L8 2.125L2 4.375V9.1C2 11.1167 2.56667 12.95 3.7 14.6C4.83333 16.25 6.26667 17.35 8 17.9V17.9M8 10V10V10V10V10V10V10V10V10V10"
                      fill="#C6A77B"
                    />
                  </svg>
                </div>
              </div>
              <div className="inline-flex pb-1 flex-col items-start absolute left-[33px] top-[105px]">
                <p className="text-[#777F83] font-inter text-xs font-medium leading-[18px] absolute left-0 top-0 tracking-[0.12em]">
                  03 &#x2F; DUE DILIGENCE
                </p>
              </div>
              <div className="inline-flex pb-2 flex-col items-start absolute left-[33px] top-[127px]">
                <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] absolute left-0 top-0">
                  Verified Listings
                </p>
              </div>
              <div className="inline-flex pt-0 pr-[13px] pb-px pl-0 flex-col items-start absolute left-[33px] top-[164px]">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] absolute left-0 top-0">
                  Every property undergoes strict title checks, RERA validation,
                  and verification of legal compliance prior to presentation.
                </p>
              </div>
            </div>
            <div className="service-card rounded-lg border border-[#E8E5DF] bg-[#F5F3EF] w-full h-[342px] relative">
              <div className="flex pb-6 flex-col items-start w-12 h-[72px] absolute left-[33px] top-[33px]">
                <div className="flex justify-center items-center shrink-0 rounded-lg bg-[#FFF] shadow-[01px2px0rgba(0,0,0,0.05)] w-12 h-12">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M9 18V16H17V16V16V8.9C17 6.95 16.3208 5.29583 14.9625 3.9375C13.6042 2.57917 11.95 1.9 10 1.9C8.05 1.9 6.39583 2.57917 5.0375 3.9375C3.67917 5.29583 3 6.95 3 8.9V15H2C1.45 15 0.979167 14.8042 0.5875 14.4125C0.195833 14.0208 0 13.55 0 13V11C0 10.65 0.0875 10.3208 0.2625 10.0125C0.4375 9.70417 0.683333 9.45833 1 9.275L1.075 7.95C1.20833 6.81667 1.5375 5.76667 2.0625 4.8C2.5875 3.83333 3.24583 2.99167 4.0375 2.275C4.82917 1.55833 5.7375 1 6.7625 0.6C7.7875 0.2 8.86667 0 10 0C11.1333 0 12.2083 0.2 13.225 0.6C14.2417 1 15.15 1.55417 15.95 2.2625C16.75 2.97083 17.4083 3.80833 17.925 4.775C18.4417 5.74167 18.775 6.79167 18.925 7.925L19 9.225C19.3167 9.375 19.5625 9.6 19.7375 9.9C19.9125 10.2 20 10.5167 20 10.85V13.15C20 13.4833 19.9125 13.8 19.7375 14.1C19.5625 14.4 19.3167 14.625 19 14.775V16C19 16.55 18.8042 17.0208 18.4125 17.4125C18.0208 17.8042 17.55 18 17 18H9V18M7 11C6.71667 11 6.47917 10.9042 6.2875 10.7125C6.09583 10.5208 6 10.2833 6 10C6 9.71667 6.09583 9.47917 6.2875 9.2875C6.47917 9.09583 6.71667 9 7 9C7.28333 9 7.52083 9.09583 7.7125 9.2875C7.90417 9.47917 8 9.71667 8 10C8 10.2833 7.90417 10.5208 7.7125 10.7125C7.52083 10.9042 7.28333 11 7 11V11M13 11C12.7167 11 12.4792 10.9042 12.2875 10.7125C12.0958 10.5208 12 10.2833 12 10C12 9.71667 12.0958 9.47917 12.2875 9.2875C12.4792 9.09583 12.7167 9 13 9C13.2833 9 13.5208 9.09583 13.7125 9.2875C13.9042 9.47917 14 9.71667 14 10C14 10.2833 13.9042 10.5208 13.7125 10.7125C13.5208 10.9042 13.2833 11 13 11V11M4.025 9.45C3.90833 7.68333 4.44167 6.16667 5.625 4.9C6.80833 3.63333 8.28333 3 10.05 3C11.5333 3 12.8375 3.47083 13.9625 4.4125C15.0875 5.35417 15.7667 6.55833 16 8.025C14.4833 8.00833 13.0875 7.6 11.8125 6.8C10.5375 6 9.55833 4.91667 8.875 3.55C8.60833 4.88333 8.04583 6.07083 7.1875 7.1125C6.32917 8.15417 5.275 8.93333 4.025 9.45V9.45"
                      fill="#C6A77B"
                    />
                  </svg>
                </div>
              </div>
              <div className="inline-flex pb-1 flex-col items-start absolute left-[33px] top-[105px]">
                <p className="text-[#777F83] font-inter text-xs font-medium leading-[18px] absolute left-0 top-0 tracking-[0.12em]">
                  04 &#x2F; LIFECYCLE
                </p>
              </div>
              <div className="inline-flex pb-2 flex-col items-start absolute left-[33px] top-[127px]">
                <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] absolute left-0 top-0">
                  Dedicated Support
                </p>
              </div>
              <div className="inline-flex pt-0 pr-2.5 pb-px pl-0 flex-col items-start absolute left-[33px] top-[164px]">
                <p className="text-[#777F83] font-inter text-sm leading-[22.75px] absolute left-0 top-0">
                  Our consultants stand alongside you from property tours to
                  documentation, bank financing, and final possession.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-16 lg:py-28 px-0 flex-col items-start border-t border-t-[#E8E5DF] bg-[#FFF] w-full relative">
        <div className="flex w-full max-w-[1280px] mx-auto py-0 px-4 sm:px-8 lg:px-16 flex-col items-center gap-16 w-full">
          <div className="flex max-w-full pt-[5px] flex-col items-center gap-3 w-full">
            <p id="agents" className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
              MEET THE EXPERTS
            </p>
            <div className="flex pt-0.5 flex-col items-center w-full">
              <p className="text-[#172A35] font-manrope text-[42px] font-bold leading-[50.4px] w-fit">
                The People Behind Your Journey
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              <p className="text-[#777F83] font-inter text-base leading-[26px] w-fit">
                Having the right person guide you makes all the difference. Our
                licensed professionals bring integrity, regional expertise, and
                dedicated client service.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-start gap-8 w-full">
            <div className="flex flex-col items-start gap-0 rounded-lg border border-[#E8E5DF] bg-[#F5F3EF] w-full overflow-hidden">
              <div className="flex flex-col justify-center items-start bg-[#E5E7EB] w-full overflow-hidden">
                <img
                  src={arjunKumarImage}
                  className="w-full h-[451px] overflow-hidden max-w-none"
                  alt="Arjun Kumar - Senior Property Consultant"
                />
              </div>
              <div className="flex pt-6 pr-6 pb-[45px] pl-6 flex-col items-start w-full">
                <div className="flex pb-1 flex-col items-start w-full">
                  <div className="flex justify-between items-baseline w-full">
                    <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-fit">
                      Arjun Kumar
                    </p>
                    <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit">
                      8 Yrs Exp
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#777F83] font-inter text-sm font-medium leading-[21px] w-full">
                    Senior Property Consultant
                  </p>
                </div>
                <div className="flex pt-4 flex-col items-start w-full">
                  <div className="flex pt-4 flex-col items-start gap-1 border-t border-t-[#E8E5DF] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-full tracking-[0.05em]">
                        SPECIALITY
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#202B32] font-inter text-sm leading-[21px] w-full">
                        Premium Residential Villas &amp; Gated Enclaves
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-8 flex-col items-start w-full">
                  <button className="cursor-pointer text-nowrap flex pt-2.5 pr-0 pb-3 pl-0 justify-center items-center rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full h-11">
                    <p className="text-[#172A35] font-inter text-[13px] font-medium leading-[19.5px] w-fit">
                      Contact Agent
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start rounded-lg border border-[#E8E5DF] bg-[#F5F3EF] w-full overflow-hidden">
              <div className="flex flex-col justify-center items-start bg-[#E5E7EB] w-full overflow-hidden">
                <img
                  src={priyaSharmaImage}
                  className="w-full h-[451px] overflow-hidden max-w-none"
                  alt="Priya Sharma - Residential Specialist"
                />
              </div>
              <div className="flex p-6 flex-col items-start w-full">
                <div className="flex pb-1 flex-col items-start w-full">
                  <div className="flex justify-between items-baseline w-full">
                    <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-fit">
                      Priya Sharma
                    </p>
                    <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit">
                      5 Yrs Exp
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#777F83] font-inter text-sm font-medium leading-[21px] w-full">
                    Residential Property Specialist
                  </p>
                </div>
                <div className="flex pt-4 flex-col items-start w-full">
                  <div className="flex pt-4 flex-col items-start gap-1 border-t border-t-[#E8E5DF] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-full tracking-[0.05em]">
                        SPECIALITY
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#202B32] font-inter text-sm leading-[21px] w-full">
                        Family Homes, High-Rise Penthouses &amp; Rentals
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-8 flex-col items-start w-full">
                  <button className="cursor-pointer text-nowrap flex pt-2.5 pr-0 pb-3 pl-0 justify-center items-center rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full h-11">
                    <p className="text-[#172A35] font-inter text-[13px] font-medium leading-[19.5px] w-fit">
                      Contact Agent
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-0 rounded-lg border border-[#E8E5DF] bg-[#F5F3EF] w-full overflow-hidden">
              <div className="flex flex-col justify-center items-start bg-[#E5E7EB] w-full overflow-hidden">
                <img
                  src={rahulMenonImage}
                  className="w-full h-[451px] overflow-hidden max-w-none"
                  alt="Rahul Menon - Commercial Property Advisor"
                />
              </div>
              <div className="flex pt-6 pr-6 pb-[45px] pl-6 flex-col items-start w-full">
                <div className="flex pb-1 flex-col items-start w-full">
                  <div className="flex justify-between items-baseline w-full">
                    <p className="text-[#172A35] font-manrope text-xl font-semibold leading-[30px] w-fit">
                      Rahul Menon
                    </p>
                    <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit">
                      6 Yrs Exp
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#777F83] font-inter text-sm font-medium leading-[21px] w-full">
                    Commercial Property Advisor
                  </p>
                </div>
                <div className="flex pt-4 flex-col items-start w-full">
                  <div className="flex pt-4 flex-col items-start gap-1 border-t border-t-[#E8E5DF] w-full">
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#777F83] font-inter text-[11px] font-medium leading-[16.5px] w-full tracking-[0.05em]">
                        SPECIALITY
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-full">
                      <p className="text-[#202B32] font-inter text-sm leading-[21px] w-full">
                        Commercial Offices, IT Parks &amp; Land Parcels
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex pt-8 flex-col items-start w-full">
                  <button className="cursor-pointer text-nowrap flex pt-2.5 pr-0 pb-3 pl-0 justify-center items-center rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full h-11">
                    <p className="text-[#172A35] font-inter text-[13px] font-medium leading-[19.5px] w-fit">
                      Contact Agent
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-16 lg:py-28 px-0 flex-col items-start border-t border-t-[#E8E5DF] bg-[#F5F3EF] w-full relative">
        <div className="flex w-full max-w-[1280px] mx-auto py-0 px-4 sm:px-8 lg:px-16 flex-col items-center gap-16 w-full">
          <div className="flex max-w-full pt-[5px] flex-col items-center gap-3 w-full">
            <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
              CLIENT STORIES
            </p>
            <div className="flex pt-0.5 flex-col items-center w-full">
              <p className="text-[#172A35] font-manrope text-[42px] font-bold leading-[50.4px] w-fit">
                Stories From People We've Helped
              </p>
            </div>
            <div className="flex flex-col items-center w-full">
              <p className="text-[#777F83] font-inter text-base leading-[26px] w-fit">
                A property acquisition is a meaningful milestone. We take pride
                in building genuine relationships that continue well past
                handover.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-6 w-full">
            <div className="flex p-8 flex-col justify-between items-start rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full">
              <div className="flex flex-col items-start gap-[19px] w-full">
                <div className="flex items-center gap-1 w-full">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                </div>
                <div className="flex pb-px flex-col items-start w-full">
                  <p className="text-[#202B32] font-inter text-[15px] leading-[24.75px] w-full">
                    The entire experience was smooth from the initial property
                    viewings to the final documentation. The team understood our
                    lifestyle needs and found a home that truly feels right.
                  </p>
                </div>
              </div>
              <div className="flex pt-8 flex-col items-start w-full">
                <div className="flex pt-6 items-center gap-3 border-t border-t-[#E8E5DF] w-full">
                  <button className="cursor-pointer text-nowrap flex pt-2.5 pr-0 pb-[11px] pl-0 justify-center items-center rounded-full bg-[#F5F3EF] w-10 h-10">
                    <p className="text-[#172A35] font-manrope text-sm font-semibold leading-5 w-fit">
                      KD
                    </p>
                  </button>
                  <div className="flex flex-col justify-center items-start -space-y-px w-[165px] h-[42px]">
                    <div className="flex flex-col items-start w-[165px]">
                      <p className="text-[#172A35] font-manrope text-[15px] font-semibold leading-[22.5px] w-fit">
                        Karthik &amp; Divya
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[165px]">
                      <p className="text-[#777F83] font-inter text-[13px] leading-[19.5px] w-fit">
                        Home Buyers· Coimbatore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-8 flex-col justify-between items-start rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full">
              <div className="flex flex-col items-start gap-[19px] w-full">
                <div className="flex items-center gap-1 w-full">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                </div>
                <div className="flex pb-px flex-col items-start w-full">
                  <p className="text-[#202B32] font-inter text-[15px] leading-[24.75px] w-full">
                    What impressed me most was the legal transparency. Every
                    title question was handled thoroughly, and I never felt
                    pressured into making a decision. Exceptional advisory.
                  </p>
                </div>
              </div>
              <div className="flex pt-8 flex-col items-start w-full">
                <div className="flex pt-6 items-center gap-3 border-t border-t-[#E8E5DF] w-full">
                  <button className="cursor-pointer text-nowrap flex pt-2.5 pr-0 pb-[11px] pl-0 justify-center items-center rounded-full bg-[#F5F3EF] w-10 h-10">
                    <p className="text-[#172A35] font-manrope text-sm font-semibold leading-5 w-fit">
                      SR
                    </p>
                  </button>
                  <div className="flex flex-col justify-center items-start -space-y-px w-[175px] h-[42px]">
                    <div className="flex flex-col items-start w-[175px]">
                      <p className="text-[#172A35] font-manrope text-[15px] font-semibold leading-[22.5px] w-fit">
                        Sneha R.
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[175px]">
                      <p className="text-[#777F83] font-inter text-[13px] leading-[19.5px] w-fit">
                        Property Buyer· Coimbatore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex p-8 flex-col justify-between items-start rounded-lg border border-[#E8E5DF] bg-[#FFF] w-full">
              <div className="flex flex-col items-start gap-[19px] w-full">
                <div className="flex items-center gap-1 w-full">
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <svg
                    width="15"
                    height="14"
                    viewBox="0 0 15 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M2.75625 13.5L3.9375 8.5125L0 5.15625L5.175 4.70625L7.2 0L9.225 4.725L14.4 5.15625L10.4625 8.5125L11.6438 13.5L7.2 10.8562L2.75625 13.5V13.5"
                      fill="#C6A77B"
                    />
                  </svg>
                </div>
                <div className="flex pb-px flex-col items-start w-full">
                  <p className="text-[#202B32] font-inter text-[15px] leading-[24.75px] w-full">
                    I needed prime commercial premises along Avinashi Road.
                    Haven Estates presented vetted choices quickly and
                    negotiated fair terms on our corporate agreement.
                  </p>
                </div>
              </div>
              <div className="flex pt-8 flex-col items-start w-full">
                <div className="flex pt-6 items-center gap-3 border-t border-t-[#E8E5DF] w-full">
                  <button className="cursor-pointer text-nowrap flex pt-2.5 pr-0 pb-[11px] pl-0 justify-center items-center rounded-full bg-[#F5F3EF] w-10 h-10">
                    <p className="text-[#172A35] font-manrope text-sm font-semibold leading-5 w-fit">
                      AK
                    </p>
                  </button>
                  <div className="flex flex-col justify-center items-start -space-y-px w-[195px] h-[42px]">
                    <div className="flex flex-col items-start w-[195px]">
                      <p className="text-[#172A35] font-manrope text-[15px] font-semibold leading-[22.5px] w-fit">
                        Arun Kumar
                      </p>
                    </div>
                    <div className="flex flex-col items-start w-[195px]">
                      <p className="text-[#777F83] font-inter text-[13px] leading-[19.5px] w-fit">
                        Commercial Client· Coimbatore
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-16 lg:py-28 px-4 sm:px-8 lg:px-16 flex-col items-start bg-[#172A35] w-full relative overflow-hidden">
        <img
          src={visualBackgroundImage}
          className="absolute -bottom-px opacity-20 w-full h-[529px] max-w-none"
          alt="Visual background with controlled navy vignette"
        />
        <div className="absolute -bottom-px bg-linear-[90deg,#172A350%,rgba(23,42,53,0.95)50%,rgba(23,42,53,0.90)100%] w-full h-[529px]"></div>
        <div className="flex max-w-[680px] flex-col items-start gap-6 w-full">
          <div className="flex py-1.5 px-3 items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.10)] w-fit">
            <div className="rounded-full bg-[#C6A77B] w-1.5 h-1.5"></div>
            <p className="text-[#C6A77B] font-inter text-xs font-medium leading-[18px] w-fit tracking-[0.12em]">
              START YOUR CONVERSATION
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <p className="text-[#FFF] font-manrope text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight w-full">
              Your Next Move Starts Here.
            </p>
          </div>
          <div className="flex flex-col items-start w-full">
            <p className="text-[#D1D5DB] font-inter text-base leading-[26.4px] w-full">
              The right property is waiting. Speak directly with our advisory
              desk and take the first step towards your next investment, home,
              or commercial acquisition.
            </p>
          </div>
          <div className="flex pt-2 items-center gap-4 flex-wrap w-full">
            <a href="#properties" className="cursor-pointer text-nowrap flex py-0 px-8 justify-center items-center rounded-lg bg-[#C6A77B] w-fit h-12">
              <p className="text-[#172A35] font-inter text-sm font-medium leading-[21px] w-fit">
                Explore Properties
              </p>
            </a>
            <Link to="/contact" className="cursor-pointer text-nowrap flex py-0 px-8 justify-center items-center rounded-lg border border-[rgba(255,255,255,0.40)] w-fit h-12">
              <p className="text-[#FFF] font-inter text-sm font-medium leading-[21px] w-fit">
                Talk to Our Team
              </p>
            </Link>
          </div>
          <div className="flex pt-2 items-center gap-6 flex-wrap w-full">
            <div className="flex items-center gap-2 w-fit">
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M11.2546 6.3C11.2546 4.9375 10.7702 3.77187 9.80148 2.80312C8.83273 1.83437 7.66711 1.35 6.30461 1.35V0C7.17961 0 7.99919 0.16625 8.76335 0.49875C9.52752 0.83125 10.1925 1.28042 10.7584 1.84625C11.3242 2.41208 11.7734 3.07708 12.1059 3.84125C12.4384 4.60542 12.6046 5.425 12.6046 6.3H11.2546V6.3M8.55461 6.3C8.55461 5.675 8.33586 5.14375 7.89836 4.70625C7.46086 4.26875 6.92961 4.05 6.30461 4.05V2.7C7.30461 2.7 8.15461 3.051 8.85461 3.753C9.55461 4.455 9.9046 5.304 9.9046 6.3H8.55461V6.3M11.6109 12.6C10.0984 12.4875 8.66398 12.1156 7.30773 11.4844C5.95148 10.8531 4.73586 10 3.66086 8.925C2.58586 7.85 1.73586 6.63437 1.11086 5.27812C0.485855 3.92187 0.117105 2.4875 0.00460527 0.975C-0.0203947 0.7125 0.0563909 0.484375 0.234962 0.290625C0.413534 0.096875 0.636748 0 0.904605 0H3.45461C3.66711 0 3.85148 0.065625 4.00773 0.196875C4.16398 0.328125 4.26711 0.49375 4.31711 0.69375L4.76711 2.7C4.79211 2.8625 4.78273 3.01875 4.73898 3.16875C4.69523 3.31875 4.62336 3.44375 4.52336 3.54375L2.70461 5.38125C2.95461 5.85625 3.24211 6.3125 3.56711 6.75C3.89211 7.1875 4.25441 7.5999 4.65402 7.9872C5.02941 8.3624 5.42961 8.70937 5.85461 9.02812C6.27961 9.34688 6.72961 9.63125 7.20461 9.88125L9.06085 8.08125C9.16086 7.98125 9.28586 7.90937 9.43585 7.86562C9.58585 7.82188 9.7421 7.8125 9.9046 7.8375L11.9109 8.26875C12.1234 8.33125 12.2921 8.44063 12.4171 8.59688C12.5421 8.75313 12.6046 8.9375 12.6046 9.15V11.7C12.6046 11.9679 12.5046 12.1911 12.3046 12.3696C12.1046 12.5482 11.8734 12.625 11.6109 12.6V12.6M2.08586 4.06875L3.39836 2.75625V2.75625V2.75625L3.0766 1.35V1.35V1.35H1.39211V1.35V1.35C1.45461 1.825 1.54211 2.2875 1.65461 2.7375C1.76711 3.1875 1.91086 3.63125 2.08586 4.06875V4.06875M8.53586 10.5188C8.9746 10.6968 9.42179 10.8382 9.87742 10.9429C10.333 11.0476 10.7921 11.1313 11.2546 11.1938V11.1938V11.1938V9.50625V9.50625V9.50625L9.84836 9.20625V9.20625V9.20625L8.53586 10.5188V10.5188M2.08586 4.06875V4.06875V4.06875V4.06875V4.06875V4.06875V4.06875V4.06875V4.06875V4.06875V4.06875V4.06875V4.06875M8.53586 10.5188V10.5188V10.5188V10.5188V10.5188V10.5188V10.5188V10.5188V10.5188V10.5188V10.5188V10.5188V10.5188"
                  fill="#C6A77B"
                />
              </svg>
              <button className="cursor-pointer text-nowrap flex justify-center items-center w-[185px] h-5">
                <p className="text-[#D1D5DB] font-inter text-[13px] leading-[19.5px] w-[185px] h-5">
                  Direct Desk: +91 98765 43210
                </p>
              </button>
            </div>
            <div className="flex items-center gap-2 w-fit">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex flex-col items-start w-fit "
              >
                <path
                  d="M9.7125 10.3875L10.6687 9.43125L7.875 6.6375V2.7H6.525V7.2L9.7125 10.3875V10.3875M7.2 14.4C6.20781 14.4 5.27538 14.2125 4.40273 13.8375C3.53008 13.4625 2.76562 12.9469 2.10938 12.2906C1.45312 11.6344 0.9375 10.869 0.5625 9.99453C0.1875 9.12005 0 8.18568 0 7.19141C0 6.19714 0.1875 5.2625 0.5625 4.3875C0.9375 3.5125 1.45312 2.75 2.10938 2.1C2.76562 1.45 3.53099 0.9375 4.40547 0.5625C5.27995 0.1875 6.21432 0 7.20859 0C8.20286 0 9.13754 0.189 10.0126 0.567C10.8877 0.945 11.6489 1.458 12.2962 2.106C12.9435 2.754 13.456 3.516 13.8336 4.392C14.2112 5.268 14.4 6.204 14.4 7.2C14.4 8.19219 14.2125 9.12462 13.8375 9.99727C13.4625 10.8699 12.95 11.6344 12.3 12.2906C11.65 12.9469 10.8867 13.4625 10.01 13.8375C9.13341 14.2125 8.19672 14.4 7.2 14.4V14.4M7.2 7.2V7.2V7.2V7.2V7.2V7.2V7.2V7.2V7.2V7.2M7.20894 13.05C8.8274 13.05 10.2055 12.4781 11.3433 11.3344C12.4811 10.1906 13.05 8.80952 13.05 7.19106C13.05 5.5726 12.4811 4.19448 11.3433 3.05668C10.2055 1.9189 8.8274 1.35 7.20894 1.35C5.59048 1.35 4.20937 1.9189 3.06562 3.05668C1.92188 4.19448 1.35 5.5726 1.35 7.19106C1.35 8.80952 1.92188 10.1906 3.06562 11.3344C4.20937 12.4781 5.59048 13.05 7.20894 13.05V13.05"
                  fill="#C6A77B"
                />
              </svg>
              <button className="cursor-pointer text-nowrap flex justify-center items-center w-[189px] h-5">
                <p className="text-[#D1D5DB] font-inter text-[13px] leading-[19.5px] w-[189px] h-5">
                  Mon - Sat @ 9:00 AM - 7:30 PM
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pt-16 lg:pt-20 pr-0 pb-12 pl-0 flex-col items-start border-t border-t-[rgba(255,255,255,0.10)] bg-[#0F1C23] w-full relative">
        <div className="flex w-full max-w-[1280px] mx-auto py-0 px-4 sm:px-8 lg:px-16 flex-col items-start w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pb-10 lg:pb-16 items-start gap-8 lg:gap-12 border-b border-b-[rgba(255,255,255,0.10)] w-full">
            <div className="flex flex-col items-start w-full">
              <div className="flex pb-5 flex-col items-start w-full">
                <div className="flex items-center gap-3 w-full">
                  <div className="flex justify-center items-center rounded-lg border border-[rgba(255,255,255,0.15)] bg-[#172A35] w-8 h-8">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 13 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex flex-col items-start w-fit "
                    >
                      <path
                        d="M0 12.6V2.7H2.7V0H9.45V5.4H12.6V12.6H7.2V9.9H5.4V12.6H0V12.6M1.35 11.25H2.7V9.9H1.35V11.25V11.25M1.35 8.325H2.7V6.975H1.35V8.325V8.325M1.35 5.4H2.7V4.05H1.35V5.4V5.4M4.05 8.325H5.4V6.975H4.05V8.325V8.325M4.05 5.4H5.4V4.05H4.05V5.4V5.4M4.05 2.7H5.4V1.35H4.05V2.7V2.7M6.75 8.325H8.1V6.975H6.75V8.325V8.325M6.75 5.4H8.1V4.05H6.75V5.4V5.4M6.75 2.7H8.1V1.35H6.75V2.7V2.7M9.9 11.25H11.25V9.9H9.9V11.25V11.25M9.9 8.325H11.25V6.975H9.9V8.325V8.325"
                        fill="#C6A77B"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#FFF] font-manrope text-lg font-bold leading-7 w-fit tracking-[0.05em]">
                      HAVEN ESTATES
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex pb-6 justify-center items-center w-full h-[115px]">
                <div className="flex pb-px flex-col items-start w-[252px]">
                  <p className="text-[#9CA3AF] font-inter text-sm leading-[22.75px] w-fit">
                    Curators of bespoke estates, architectural sanctuaries, and
                    prime residential acquisitions across Coimbatore and
                    Southern India.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full">
                <div className="flex justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-8 h-8">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M6.4 9.2C7.2 9.2 7.86667 8.92778 8.4 8.38333C8.93333 7.83889 9.2 7.17778 9.2 6.4C9.2 5.63333 8.93333 4.975 8.4 4.425C7.86667 3.875 7.2 3.6 6.4 3.6C5.6 3.6 4.93333 3.875 4.4 4.425C3.86667 4.975 3.6 5.63611 3.6 6.40833C3.6 7.18056 3.86667 7.83889 4.4 8.38333C4.93333 8.92778 5.6 9.2 6.4 9.2V9.2M6.4 8C5.93333 8 5.55 7.84372 5.25 7.53117C4.95 7.21861 4.8 6.836 4.8 6.38333C4.8 5.94 4.95 5.56528 5.25 5.25917C5.55 4.95306 5.93333 4.8 6.4 4.8C6.86667 4.8 7.25 4.95306 7.55 5.25917C7.85 5.56528 8 5.94 8 6.38333C8 6.836 7.85 7.21861 7.55 7.53117C7.25 7.84372 6.86667 8 6.4 8V8M1.2 11.2C0.877778 11.2 0.597222 11.0806 0.358333 10.8417C0.119444 10.6028 0 10.3222 0 10V2.8C0 2.47778 0.119444 2.19722 0.358333 1.95833C0.597222 1.71944 0.877778 1.6 1.2 1.6H3.2L4.4 0H8.4L9.6 1.6H11.6C11.93 1.6 12.2125 1.71944 12.4475 1.95833C12.6825 2.19722 12.8 2.47778 12.8 2.8V10C12.8 10.3222 12.6825 10.6028 12.4475 10.8417C12.2125 11.0806 11.93 11.2 11.6 11.2H1.2V11.2M1.2 10H11.6V10V10V2.8V2.8V2.8H9L7.79835 1.2H5L3.8 2.8H1.2V2.8V2.8V10V10V10V10M6.4 6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333V6.38333"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-8 h-8">
                  <svg
                    width="12"
                    height="13"
                    viewBox="0 0 12 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M9.2 12.8C8.64444 12.8 8.17222 12.6056 7.78333 12.2167C7.39444 11.8278 7.2 11.3556 7.2 10.8C7.2 10.7 7.22222 10.5389 7.26667 10.3167L3.31667 7.9C3.13889 8.05556 2.93864 8.17778 2.71591 8.26667C2.49318 8.35556 2.25455 8.4 2 8.4C1.44444 8.4 0.972222 8.20556 0.583333 7.81667C0.194444 7.42778 0 6.95556 0 6.4C0 5.84444 0.194444 5.37222 0.583333 4.98333C0.972222 4.59444 1.44444 4.4 2 4.4C2.25556 4.4 2.49444 4.44444 2.71667 4.53333C2.93889 4.62222 3.13889 4.74444 3.31667 4.9L7.26667 2.48333C7.24444 2.40556 7.22778 2.32884 7.21667 2.25317C7.20556 2.17751 7.2 2.09312 7.2 2C7.2 1.44444 7.39444 0.972222 7.78333 0.583333C8.17222 0.194444 8.64444 0 9.2 0C9.75556 0 10.2278 0.194444 10.6167 0.583333C11.0056 0.972222 11.2 1.44444 11.2 2C11.2 2.55556 11.0056 3.02778 10.6167 3.41667C10.2278 3.80556 9.75556 4 9.2 4C8.94444 4 8.70556 3.95556 8.48333 3.86667C8.26111 3.77778 8.06111 3.65556 7.88333 3.5L3.93333 5.91667C3.95556 5.99444 3.97222 6.07116 3.98333 6.14683C3.99444 6.22249 4 6.30688 4 6.4C4 6.49312 3.99444 6.57751 3.98333 6.65317C3.97222 6.72884 3.95556 6.80556 3.93333 6.88333L7.88333 9.3C8.06111 9.14444 8.26136 9.02222 8.48409 8.93333C8.70682 8.84444 8.94545 8.8 9.2 8.8C9.75556 8.8 10.2278 8.99444 10.6167 9.38333C11.0056 9.77222 11.2 10.2444 11.2 10.8C11.2 11.3556 11.0056 11.8278 10.6167 12.2167C10.2278 12.6056 9.75556 12.8 9.2 12.8V12.8M9.2 11.6C9.42667 11.6 9.61667 11.5233 9.77 11.37C9.92333 11.2167 10 11.0267 10 10.8C10 10.5733 9.92333 10.3833 9.77 10.23C9.61667 10.0767 9.42667 10 9.2 10C8.97333 10 8.78333 10.0767 8.63 10.23C8.47667 10.3833 8.4 10.5733 8.4 10.8C8.4 11.0267 8.47667 11.2167 8.63 11.37C8.78333 11.5233 8.97333 11.6 9.2 11.6V11.6M2 7.2C2.22667 7.2 2.41667 7.12222 2.57 6.96667C2.72333 6.81111 2.8 6.62222 2.8 6.4C2.8 6.17778 2.72333 5.98889 2.57 5.83333C2.41667 5.67778 2.22667 5.6 2 5.6C1.77333 5.6 1.58333 5.67778 1.43 5.83333C1.27667 5.98889 1.2 6.17778 1.2 6.4C1.2 6.62222 1.27667 6.81111 1.43 6.96667C1.58333 7.12222 1.77333 7.2 2 7.2V7.2M9.2 2.8C9.42222 2.8 9.61111 2.72333 9.76667 2.57C9.92222 2.41667 10 2.22667 10 2C10 1.77333 9.92333 1.58333 9.77 1.43C9.61667 1.27667 9.42667 1.2 9.2 1.2C8.97333 1.2 8.78333 1.27667 8.63 1.43C8.47667 1.58333 8.4 1.77333 8.4 2C8.4 2.22667 8.47778 2.41667 8.63333 2.57C8.78889 2.72333 8.97778 2.8 9.2 2.8V2.8M9.2 10.8V10.8V10.8V10.8V10.8V10.8V10.8V10.8V10.8V10.8M2 6.4V6.4V6.4V6.4V6.4V6.4V6.4V6.4V6.4V6.4M9.2 2V2V2V2V2V2V2V2V2V2"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="flex justify-center items-center rounded-lg bg-[rgba(255,255,255,0.05)] w-8 h-8">
                  <svg
                    width="13"
                    height="12"
                    viewBox="0 0 13 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M1.2 12C0.87 12 0.5875 11.8825 0.3525 11.6475C0.1175 11.4125 0 11.13 0 10.8V3.6C0 3.27 0.1175 2.9875 0.3525 2.7525C0.5875 2.5175 0.87 2.4 1.2 2.4H4V1.19646C4 0.865487 4.11764 0.583333 4.35293 0.35C4.58822 0.116667 4.87106 0 5.20147 0H7.6044C7.9348 0 8.21667 0.1175 8.45 0.3525C8.68333 0.5875 8.8 0.87 8.8 1.2V2.4H11.6C11.93 2.4 12.2125 2.5175 12.4475 2.7525C12.6825 2.9875 12.8 3.27 12.8 3.6V10.8C12.8 11.13 12.6825 11.4125 12.4475 11.6475C12.2125 11.8825 11.93 12 11.6 12H1.2V12M1.2 10.8H11.6V10.8V10.8V3.6V3.6V3.6H1.2V3.6V3.6V10.8V10.8V10.8V10.8M5.2 2.4H7.6V1.2V1.2V1.2H5.2V1.2V1.2V2.4V2.4M1.2 10.8V10.8V10.8V3.6V3.6V3.6V3.6V3.6V3.6V10.8V10.8V10.8V10.8V10.8"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex pb-[7px] flex-col items-start w-full">
              <div className="flex pb-[21px] justify-center items-center w-full h-10">
                <div className="flex flex-col items-start w-[252px]">
                  <p className="text-[#FFF] font-manrope text-[13px] font-semibold leading-[19.5px] w-fit tracking-[0.12em]">
                    QUICK LINKS
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-start w-full">
                  <Link to="/" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">Home</Link>
                </div>
                <div className="flex flex-col items-start w-full">
                  <a href="#properties" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">Featured Properties</a>
                </div>
                <div className="flex flex-col items-start w-full">
                  <Link to="/about" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">About Our Firm</Link>
                </div>
                <div className="flex flex-col items-start w-full">
                  <a href="#agents" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">Our Advisory Agents</a>
                </div>
                <div className="flex flex-col items-start w-full">
                  <Link to="/contact" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">Contact Us</Link>
                </div>
              </div>
            </div>
            <div className="flex pb-[7px] flex-col items-start w-full">
              <div className="flex pb-[21px] justify-center items-center w-full h-10">
                <div className="flex flex-col items-start w-[252px]">
                  <p className="text-[#FFF] font-manrope text-[13px] font-semibold leading-[19.5px] w-fit tracking-[0.12em]">
                    PROPERTY TYPES
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex flex-col items-start w-full">
                  <a href="#properties" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">Buy a property · Independent Villas</a>
                </div>
                <div className="flex flex-col items-start w-full">
                  <a href="#properties" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">Buy · Luxury Apartments</a>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#9CA3AF] font-inter text-sm leading-[21px] w-full">
                    Residential Enclaves
                  </p>
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-[#9CA3AF] font-inter text-sm leading-[21px] w-full">
                    Commercial Space
                  </p>
                </div>
                <div className="flex flex-col items-start w-full">
                  <a href="#properties" className="footer-link text-[#9CA3AF] font-inter text-sm leading-[21px]">Rent · Rental Residences</a>
                </div>
              </div>
            </div>
            <div className="flex pb-[52px] flex-col items-start w-full">
              <div className="flex pb-[21px] justify-center items-center w-full h-10">
                <div className="flex flex-col items-start w-[252px]">
                  <p className="text-[#FFF] font-manrope text-[13px] font-semibold leading-[19.5px] w-fit tracking-[0.12em]">
                    PRIVATE OFFICE
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-3 w-full">
                <div className="flex items-start gap-2.5 w-full">
                  <svg
                    width="12"
                    height="17"
                    viewBox="0 0 12 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex pt-0.5 flex-col items-start w-fit "
                  >
                    <path
                      d="M5.85 9.2C6.225 9.2 6.54375 9.06875 6.80625 8.80625C7.06875 8.54375 7.2 8.225 7.2 7.85C7.2 7.475 7.06875 7.15625 6.80625 6.89375C6.54375 6.63125 6.225 6.5 5.85 6.5C5.475 6.5 5.15625 6.63125 4.89375 6.89375C4.63125 7.15625 4.5 7.475 4.5 7.85C4.5 8.225 4.63125 8.54375 4.89375 8.80625C5.15625 9.06875 5.475 9.2 5.85 9.2V9.2M5.85 14.6187C7.3375 13.2812 8.45937 12.05 9.21562 10.925C9.97188 9.8 10.35 8.79375 10.35 7.90625C10.35 6.59375 9.92188 5.50625 9.06563 4.64375C8.20938 3.78125 7.1375 3.35 5.85 3.35C4.5625 3.35 3.49063 3.78125 2.63438 4.64375C1.77813 5.50625 1.35 6.59375 1.35 7.90625C1.35 8.79375 1.72812 9.8 2.48438 10.925C3.24062 12.05 4.3625 13.2812 5.85 14.6187V14.6187M5.85 16.4C3.8875 14.7625 2.42188 13.2406 1.45312 11.8344C0.484375 10.4281 0 9.11875 0 7.90625C0 6.23125 0.55625 4.82812 1.66875 3.69687C2.78125 2.56562 4.175 2 5.85 2C7.5125 2 8.90313 2.56562 10.0219 3.69687C11.1406 4.82812 11.7 6.23125 11.7 7.90625C11.7 9.11875 11.2188 10.425 10.2563 11.825C9.29375 13.225 7.825 14.75 5.85 16.4V16.4M5.85 7.85V7.85V7.85V7.85V7.85V7.85V7.85V7.85V7.85V7.85"
                      fill="#C6A77B"
                    />
                  </svg>
                  <div className="flex pr-[13px] flex-col items-start w-fit">
                    <p className="text-[#9CA3AF] font-inter text-sm leading-[21px] w-fit">
                      Race Course Road, Coimbatore, Tamil Nadu 641018, India
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 w-full">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M11.6109 12.5813C10.0984 12.4688 8.66398 12.0969 7.30773 11.4656C5.95148 10.8344 4.73586 9.98125 3.66086 8.90625C2.58586 7.83125 1.73898 6.61875 1.12023 5.26875C0.50148 3.91875 0.129605 2.4875 0.00460527 0.975C-0.0203947 0.7125 0.0563909 0.484375 0.234962 0.290625C0.413534 0.096875 0.636748 0 0.904605 0H3.45461C3.66711 0 3.85148 0.065625 4.00773 0.196875C4.16398 0.328125 4.26711 0.49375 4.31711 0.69375L4.76711 2.68125C4.79211 2.84375 4.78273 3 4.73898 3.15C4.69523 3.3 4.62336 3.425 4.52336 3.525L2.70461 5.3625C2.95461 5.8375 3.24211 6.29375 3.56711 6.73125C3.89211 7.16875 4.25441 7.58115 4.65402 7.96845C5.02941 8.34365 5.42961 8.69062 5.85461 9.00937C6.27961 9.32812 6.72961 9.6125 7.20461 9.8625L9.06085 8.0625C9.16086 7.9625 9.28586 7.89062 9.43585 7.84688C9.58585 7.80313 9.7421 7.79375 9.9046 7.81875L11.9109 8.25C12.1234 8.3125 12.2921 8.42188 12.4171 8.57812C12.5421 8.73438 12.6046 8.91875 12.6046 9.13125V11.6812C12.6046 11.9491 12.5046 12.1723 12.3046 12.3509C12.1046 12.5295 11.8734 12.6062 11.6109 12.5813V12.5813M2.08586 4.05L3.39836 2.7375V2.7375V2.7375L3.0766 1.35V1.35V1.35H1.39211V1.35V1.35C1.45461 1.825 1.54211 2.28438 1.65461 2.72813C1.76711 3.17188 1.91086 3.6125 2.08586 4.05V4.05M8.53586 10.5C8.9746 10.678 9.42179 10.8194 9.87742 10.9242C10.333 11.0289 10.7921 11.1125 11.2546 11.175V11.175V11.175V9.4875V9.4875V9.4875L9.84836 9.1875V9.1875V9.1875L8.53586 10.5V10.5M2.08586 4.05V4.05V4.05V4.05V4.05V4.05V4.05V4.05V4.05V4.05V4.05V4.05V4.05M8.53586 10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5V10.5"
                      fill="#C6A77B"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#9CA3AF] font-inter text-sm leading-[21px] w-fit">
                      +91 98765 43210
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 w-full">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex flex-col items-start w-fit "
                  >
                    <path
                      d="M1.35 10.8C0.97875 10.8 0.660938 10.6677 0.396563 10.4032C0.132187 10.1387 0 9.8207 0 9.44924V1.34469C0 0.973229 0.132187 0.65625 0.396563 0.39375C0.660938 0.13125 0.97875 0 1.35 0H13.05C13.4213 0 13.7391 0.132262 14.0034 0.396785C14.2678 0.661309 14.4 0.9793 14.4 1.35076V9.45531C14.4 9.82677 14.2678 10.1438 14.0034 10.4062C13.7391 10.6687 13.4213 10.8 13.05 10.8H1.35V10.8M7.2 6.3L1.35 2.94375V9.45V9.45V9.45H13.05V9.45V9.45V2.94375L7.2 6.3V6.3M7.2 4.70625L13.05 1.35H1.35L7.2 4.70625V4.70625M1.35 2.94375V1.35V1.35V2.94375V9.45V9.45V9.45V9.45V9.45V9.45V2.94375V2.94375"
                      fill="#C6A77B"
                    />
                  </svg>
                  <div className="flex flex-col items-start w-fit">
                    <p className="text-[#9CA3AF] font-inter text-sm leading-[21px] w-fit">
                      hello@havenestates.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row pt-8 justify-between items-start sm:items-center gap-4 w-full">
            <button className="cursor-pointer flex justify-start items-center w-full max-w-[372px] min-h-5">
              <p className="text-[#9CA3AF] font-inter text-[13px] leading-[19.5px] w-full">
                © 2026 Haven Estates. All rights reserved. RERA Registered.
              </p>
            </button>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 w-fit">
              <span className="text-nowrap text-[#9CA3AF] font-inter text-[13px]">Privacy Policy</span>
              <span className="text-nowrap text-[#9CA3AF] font-inter text-[13px]">Terms of Service</span>
              <span className="text-nowrap text-[#9CA3AF] font-inter text-[13px]">Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
