const jobLoader = async ()=>{
    const jobInfo = await fetch('job-info.json');
    const job = jobInfo.json();
    return job;
}
export default jobLoader;