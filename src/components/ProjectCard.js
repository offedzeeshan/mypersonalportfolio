import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
     <img src={imgUrl} />
        <div className="proj-txtx">
        <a target="_blank" href={href}><h4>{title}</h4></a>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
