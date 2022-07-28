import { useState, useEffect } from "react";
import {TABLET_WIDTH, MOBILE_WIDTH, DESKTOP_WIDTH} from '../common/constants';

export const useDetectDeviceSize = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const [isWideTabletView, setIsWideTabletView] = useState(false);

  useEffect(() => {
    const handleResise = () => {
      if((window.innerWidth <= TABLET_WIDTH)) {
        setIsTabletView(true);
      }
      else {
        setIsTabletView(false);
      }

      if((window.innerWidth <= MOBILE_WIDTH)) {
        setIsMobileView(true);
      }
      else {
        setIsMobileView(false);
      }

      if(window.innerWidth <= DESKTOP_WIDTH && window.innerWidth > TABLET_WIDTH) {
        setIsWideTabletView(true);
      }
      else {
        setIsWideTabletView(false);
      }
      
    }

    handleResise();

    window.addEventListener('resize', handleResise);

    return () => {
      window.removeEventListener('resize', handleResise);
    }

  }, [])


  return {isMobileView, isTabletView, isWideTabletView}
}
