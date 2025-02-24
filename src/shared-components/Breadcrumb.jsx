import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Breadcrumb = ({ pageName, description }) => {
  return (
    <>
      <section className=" pb-10 ">
      {/* <section className="relative z-10 overflow-hidden pb-10 lg:pt-[150px]"> */}
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 md:w-8/12 lg:w-7/12">
              <div className="mb-8 max-w-[570px] md:mb-0 lg:mb-12">
                <h1 className="mb-5 text-2xl font-bold text-primary-600  sm:text-3xl">
                  {pageName}
                </h1>
                <p className="text-base font-medium leading-relaxed text-secondary-600">
                  {description}
                </p>
              </div>
            </div>
            <div className="w-full px-4 md:w-4/12 lg:w-5/12">
              <div className="text-start">
                <ul className="flex  items-center md:justify-end">
                  <li className="text-base font-medium text-primary-600">
                    {pageName}
                  </li>
                  {/* <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span> */}
                  <ChevronRightIcon/>
                  <li className="flex items-center  text-secondary-600">
                    <Link
                      href="/"
                      className="pr-1 text-base font-medium text-body-color hover:text-primary"
                    >
                      صفحه اصلی
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breadcrumb;
