import Navbar from "@/components/Navbar";

import Main from "./Main";

const page = ({ params }: { params: { id: number } }) => {
  return (
    <div>
      <Main id={params.id} />
    </div>
  );
};

export default page;
