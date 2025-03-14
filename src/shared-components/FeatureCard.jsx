const FeatureCard = ({ title, description, icon }) => (
  <div className="bg-secondary-100 shadow-lg hover:shadow-2xl transition-shadow p-6 rounded-xl flex flex-col items-center">
    <div className="text-5xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-secondary-700 mb-3">{title}</h3>
    <p className="text-secondary-600 leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;
