const handleIntersect = (entries) => {
    console.log(entries)
}




const createObserver = () => {
  let observer;
  let options = {
    root: null,
    rootMargin: "20px 0px 200px 0px",
    threshold: 1.0,
  };
  observer = new IntersectionObserver(handleIntersect, options)
  let project = document.querySelectorAll("project")
  observer.observe(project1)

};
