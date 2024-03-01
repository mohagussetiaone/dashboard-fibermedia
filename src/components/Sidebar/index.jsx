import { useState } from 'react';
import { HiX, HiOutlineChevronLeft, HiChevronRight } from 'react-icons/hi';
import { RxHamburgerMenu } from 'react-icons/rx';
import SidebarLinks from './components/Links';
import useToggleSidebar from 'store/ToggleSidebar';
import { routes, Protectedroutes } from 'routes';
import { AnimatePresence, motion } from 'framer-motion';
import logofmi from '../../assets/logo/logofmi.png';
import iconfmi from '../../assets/logo/iconfmi.png';

const determineInitialSidebarState = () => {
  return window.innerWidth > 1024;
};

const Sidebar = ({ open, onClose }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(
    determineInitialSidebarState(),
  );
  const { setSidebarOpen } = useToggleSidebar();
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setSidebarOpen(isSidebarOpen);
  };
  const combinedRoutes = [...routes, ...Protectedroutes];

  const sidebarVariants = {
    open: { width: '355px' },
    closed: { width: '64px' },
  };

  return (
    <>
      <motion.div
        className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all md:!z-50 md:hidden lg:!z-50 xl:!z-0 dark:!bg-navy-800 dark:text-white ${
          open ? 'translate-x-0' : '-translate-x-96'
        }`}
      >
        <span
          className="absolute right-4 top-4 block cursor-pointer md:hidden"
          onClick={onClose}
        >
          <HiX className="w-7 h-7" />
        </span>
        <div className={`mx-[56px] mb-3 flex items-center`}>
          <div className="ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
            <img src={logofmi} alt="logo.png" className="max-w-[190px]" />
          </div>
        </div>
        <div className="mb-7 mt-[58px] h-px bg-gray-300 dark:bg-white/30" />
        <ul className="mb-auto pt-1">
          <SidebarLinks routes={routes} toggleSidebar={toggleSidebar} />
        </ul>
      </motion.div>
      <motion.div
        className={`relative hidden z-70 min-h-full flex-col bg-white shadow-2xl shadow-white/5 md:relative md:flex dark:bg-navy-800  dark:text-white`}
        initial={false}
        animate={isSidebarOpen ? 'open' : 'closed'}
        variants={sidebarVariants}
        transition={{ duration: 0.225, ease: 'linear' }}
      >
        <div className="sticky top-0 -ml-1">
          <div className="flex flex-col min-h-screen justify-between">
            <div>
              <div className="ml-9 md:ml-7  xl:ml-10 flex items-center justify-between">
                <AnimatePresence>
                  {isSidebarOpen ? (
                    <img
                      src={logofmi}
                      alt="logonethome.jpg"
                      className="w-44 -mt-2"
                    />
                  ) : (
                    <img
                      src={iconfmi}
                      alt="iconnethome"
                      className="my-8 -ml-2 md:-ml-2 xl:-ml-4 object-contain"
                      onClick={toggleSidebar}
                    />
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  <span className="cursor-pointer" onClick={toggleSidebar}>
                    {isSidebarOpen && (
                      <RxHamburgerMenu className="mr-4 h-6 w-6 md:mr-3" />
                    )}
                  </span>
                </AnimatePresence>
              </div>
              <hr className="mb-4 dark:border-brand-500" />
              <ul className={`mb-auto pt-1 ${isSidebarOpen && 'mr-45'}`}>
                <SidebarLinks
                  routes={routes}
                  isSidebarOpen={isSidebarOpen}
                  toggleSidebar={toggleSidebar}
                />
              </ul>
            </div>
            <div className={`ml-6 mb-5`}>
              <AnimatePresence>
                <span className="cursor-pointer" onClick={toggleSidebar}>
                  {!isSidebarOpen && <HiChevronRight className="h-7 w-7" />}
                </span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
