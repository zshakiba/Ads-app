"use client";

import Avatar from "shared-components/Avatar";
import Badge from "shared-components/Badge";
import { Card, CardContent } from "shared-components/Cards";

const CommentsCard = ({ comment, avatar, name, role }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardContent className="flex flex-col items-center text-center p-6">
        <p className="text-start text-secondary-600 leading-relaxed text-xs italic mb-8 h-3/4">
          "{comment}"
        </p>
        <div className="flex justify-center items-start gap-8">
          <Avatar src={avatar} width={60} height={60} className="mb-2" />
          <div className="flex flex-col justify-center items-start gap-y-1">
            <h3 className="text-sm font-bold text-secondary-500">{name}</h3>
            <Badge variant="secondary" size="sm">
              {role}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CommentsCard;
