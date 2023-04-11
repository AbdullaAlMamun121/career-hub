const jobLoader = async ()=>{
    const jobInfo = await fetch('../../public/job-info.json');
    const job = jobInfo.json();
    return job;
}
export default jobLoader;