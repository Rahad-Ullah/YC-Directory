import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { IPost } from "@/interfaces/IPost";

const StartupCard = ({ post }: {post: IPost}) => {
  const {
    _createdAt,
    views,
    author: { _id: authorId, name },
    title,
    description,
    category,
    image,
    _id,
  } = post;

  return (
    <li className="startup-card group">
      {/* date and views */}
      <div className="flex-between">
        <p className="startup_card_date">{formatDate(_createdAt)}</p>
        <div className="flex gap-1.5">
          <EyeIcon className="size-6 text-primary" />
          <span className="text-16-medium">{views}</span>
        </div>
      </div>

      {/* title and author */}
      <div className="flex-between mt-5 gap-5">
        <div className="flex-1">
          <Link href={`/user/${authorId}`}>
            <p className="text-16-medium line-clamp-1">{name}</p>
          </Link>
          <Link href={`/startup/${_id}`}>
            <h3 className="text-26-semibold line-clamp-1">{title}</h3>
          </Link>
        </div>
        <Link href={`/user/${authorId}`}>
          <Image
            alt="author-img"
            src={`https://avatar.iran.liara.run/public/35`}
            width={48}
            height={48}
            className="rounded-full"
          />
        </Link>
      </div>

      {/* image and description */}
      <Link href={`/startup/${_id}`}>
        <p className="startup-card_desc">{description}</p>
        <img src={image} alt="startup-img" className="startup-card_img" />
      </Link>

      {/* category and details button */}
      <div className="flex-between gap-3 mt-5">
        <Link href={`/?query=${category.toLowerCase()}`}>
          <p className="text-16-medium">{category}</p>
        </Link>
        <Link href={`/startup/${_id}`}>
          <Button className="startup-card_btn">Details</Button>
        </Link>
      </div>
    </li>
  );
};

export default StartupCard;
