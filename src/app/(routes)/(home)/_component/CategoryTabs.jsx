const CategoryTabs = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <div className="border-t border-secondary-300">
      <nav className="-mb-px flex justify-center gap-32" aria-label="Tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategoryClick(category.name)}
            className={`shrink-1 border-t-2 px-4 py-2 text-xs font-medium cursor-pointer hover:text-secondary-700 hover:border-secondary-300 ${
              activeCategory === category.name
                ? "border-primary-500 text-primary-600"
                : "border-transparent text-secondary-500"
            }`}
          >
            <span className="text-sm font-bold">
              {category.icon} {category.name}
            </span>
            <span className="flex text-right mt-8">{category.description}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CategoryTabs;
