import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import SearchBar from "./components/Searchbar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import JobData from "./JobData";
import { useEffect, useState } from "react";
import { collection, orderBy, where, getDocs, query } from "firebase/firestore";
import { db } from "./firebase.config";
function App() {
  console.log(JobData);
  const [jobs, setJobs] = useState([]);
  const [customSearch, setCustomSearch] = useState(false);
  const fetchJobs = async () => {
    setCustomSearch(false);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(jobsRef, orderBy("postedOn", "desc"));
    const req = await getDocs(q);
    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
      setJobs(tempJobs);
    });
  };
  const fetchJobsCustom = async (jobCriteria) => {
    setCustomSearch(true);
    const tempJobs = [];
    const jobsRef = query(collection(db, "jobs"));
    const q = query(
      jobsRef,
      where("type", "==", jobCriteria.type),
      where("title", "==", jobCriteria.title),
      where("experience", "==", jobCriteria.experience),
      where("location", "==", jobCriteria.location),
      orderBy("postedOn", "desc")
    );
    const req = await getDocs(q);
    req.forEach((job) => {
      // doc.data() is never undefined for query doc snapshots
      tempJobs.push({
        ...job.data(),
        id: job.id,
        postedOn: job.data().postedOn.toDate(),
      });
      setJobs(tempJobs);
    });
  };
  useEffect(() => {
    fetchJobs();
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <SearchBar fetchJobsCustom={fetchJobsCustom} />
      {customSearch && (
        <button onClick={fetchJobs} className="flex pl-[100px] mb-2">
          <p className="bg-blue-500 px-10 py-2 text-white rounded-md">
            Clear Filters
          </p>
        </button>
      )}
      {jobs.map((job) => {
        return (
          <JobCard
            key={job.id}
            location={job.location}
            experience={job.experience}
            link={job.job_link}
            postedOn={job.postedOn}
            skills={job.skills}
            type={job.type}
            company={job.company}
            title={job.title}
          />
        );
      })}
    </div>
  );
}

export default App;
