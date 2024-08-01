export type EventProps = { //NOTE: you can use prisma types only
  id: number;
  name: string;
  slug: string;
  city: string;
  location: string;
  date: string;
  organizerName: string;
  imageUrl: string;
  description: string;
};

