import SearchForm from "./SearchForm";
import ViewAllLink from "../../../../shared-components/ViewAllLink";

const SearchAds = () => {
  return (
    <section className="w-full mx-auto p-4 bg-gradient-to-t from-secondary-700 to-secondary-300 py-12">
      <div className="flex flex-col items-center justify-center gap-4 pt-10">
        <p className="text-2xl font-bold text-secondary-600">
          سامانه آنلاین تبلیغات
        </p>
        <h2 className="text-xl font-bold text-secondary-700">
          ۲۲,۰۲۷ آگهی فعال
        </h2>

        <SearchForm />
        <div className="flex justify-center items-center gap-2 mt-4">
          <ViewAllLink src="/ads"/>
        </div>
      </div>
    </section>
  );
};

export default SearchAds;
