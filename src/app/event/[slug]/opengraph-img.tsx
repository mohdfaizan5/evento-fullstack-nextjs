import { ImageResponse } from "next/og";

type Props = {
  params: { slug: string };
};

export const alt = "bg-img";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function generateOpenGraphImage({ params }: Props) {
  return new ImageResponse(
    (
      <section>
        <h1>{params.slug}</h1>
        <p>Browse event around you...</p>
      </section>
    )
  );
}
