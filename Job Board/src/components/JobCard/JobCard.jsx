import dayjs from "dayjs";
// import { Link } from "react-router-dom";
function JobCard({
  skills,
  location,
  title,
  experience,
  type,
  link,
  postedOn,
  company,
}) {
  // const skills = ["js", "react", "Node js"];
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(postedOn, "day");
  return (
    <div className="mx-40 mb-4">
      <div className="flex justify-between items-center px-6 py-4 bg-zinc-200 rounded-md border border-black shadow-lg hover:border-blue-500 hover:translate-y-1 hover:scale-103">
        <div className="flex flex-col items-start gap-3">
          <h1 className="text-lg font-semibold">
            {title} -{company}
          </h1>
          <p>
            {type} - {experience} -{location}
          </p>
          <div className="flex items-center gap-2 ">
            {skills.map((skill, i) => {
              return (
                <p
                  className="text-gray-500 py-1 px-2 rounded-md border border-black"
                  key={i}
                >
                  {skill}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-gray-500">
            {" "}
            Posted {diffInDays > 1
              ? `${diffInDays} Days`
              : `${diffInDays} Day`}{" "}
            ago
          </p>
          <a href={link}>
            <button className="text-blue-500 border border-blue-500 px-10 py-2 rounded">
              Apply
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default JobCard;
