const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    sectionHeading: "font-ibmPlexMono font-medium text-[32px] xs:text-[38px] text-white",
    heading2: "font-ibmPlexMono font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-ibmPlexMono font-normal text-white text-[18px] leading-[30.8px]",
    subHeading: "font-ibmPlexMono font-normal text-[#3E3C3C] text-[18px] leading-[30.8px]",
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    imgFit: "w-[150px] object-cover",
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",
    button: "text-white border border-solid py-1 px-3 rounded-lg border-white border-s-white"
  };

  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;