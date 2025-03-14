import SectionHeader from "shared-components/SectionHeader";
import { comments } from "@/constants/data";
import Carousel from "shared-components/Carousel";
import CommentsCard from "./CommentCard";

const CommentsSection = () => {
  const renderCard = (item) => (
    <CommentsCard
      key={item.id}
      comment={item.comment}
      avatar={item.avatar}
      name={item.name}
      role={item.role}
    />
  );
  return (
    <div className="mb-20">
      <SectionHeader title="نظرات کاربران ما" viewAllLink="/comments" />
      <div className="px-8 rounded-xl">
        <Carousel
          items={comments}
          renderItem={renderCard}
          slidesPerView={4}
          options={{ slidesPerView: 5 }} // Customize options for this section
        />
      </div>
    </div>
  );
};

export default CommentsSection;
