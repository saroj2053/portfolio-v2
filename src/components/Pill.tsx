
import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
const Pill = ({ text }: { text: string}) => {
  return (
    <div className="bg-primary text-[#FAF7F2] px-6 py-3 inline-flex items-center gap-2 rounded-full">
      {text === "Developer" && <FaCode />}
      {text === "Student" && <PiStudentFill />}
        <span className="font-['Ovo']  font-bold tracking-wider">
            {text}
        </span>
    </div>
  );
};

export default Pill;
