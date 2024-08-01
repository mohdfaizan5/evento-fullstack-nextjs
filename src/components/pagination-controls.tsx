import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
type Props = {
  previousPath: string;
  nextPath: string;
};

const btnStyles =
  "bg-white/5 mx-2 px-3 py-2 rounded-md flex items-center hover:bg-white/45 active:scale-[1.02]";

const PaginationControls = ({ previousPath, nextPath }: Props) => {
  return (
    <section className="flex justify-between my-10 w-full">
      {previousPath ? (
        <Link href={previousPath} className={btnStyles}>
          <ArrowLeftIcon /> Previous
        </Link>
      ) : (
        <div />
      )}
      {nextPath && (
        <Link href={nextPath} className={btnStyles}>
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
