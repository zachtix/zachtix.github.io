import { useState, useEffect } from 'react';
import '../css/projectitem.css'

function Projectitem(props) {
  const { project, onProjectClick } = props;


  // บัคเมื่อกดเปลี่ยน tag รูป Thumbnail ไม่เปลี่ยนตาม
  // const [ thumImg, setThumImg ] = useState(
  //   () => {
  //     if (project.thumbnailUrl == null) {
  //       return "https://placehold.co/600x400?text="+project.title.toString("utf8")
  //     } else if (project.typeContent == 'video') {
  //       return "https://img.youtube.com/vi/"+project.images+"/0.jpg"
  //     } else {
  //       return project.thumbnailUrl
  //     }
  //   }
  // )

  const [ thumImg, setThumImg ] = useState('')
  useEffect(() => {
    if (project.typeContent == 'video') {
      setThumImg ("https://img.youtube.com/vi/"+project.contents+"/0.jpg")
    } else if (project.thumbnailUrl == null) {
      setThumImg ("https://placehold.co/600x400?text=No+Image")
    } else {
      setThumImg (project.thumbnailUrl)
    }
  });

  return (
    <div className="project__Item shadow-lg rounded" onClick={() => onProjectClick(project)}>
      <div className="project__Title">
        <h4>{project.title}</h4>
      </div>
      <img src={thumImg} alt="" />
    </div>
  );
}

export default Projectitem