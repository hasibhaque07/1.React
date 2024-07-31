import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import defaultImg from "../assets/news.png";

type NewsItemProps = {
  news: any;
};

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  //console.log(news);
  const { title, description, urlToImage, url } = news;
  const defaultDescription =
    "Et sed justo ut erat lorem, Et sed justo ut erat lo ";
  //console.log(title);
  return (
    <>
      <Card
        style={{ maxWidth: "345px" }}
        className="bg-dark text-light my-3 mx-3 py-2 px-2 d-inline-block"
      >
        <Card.Img
          variant="top"
          src={urlToImage ? urlToImage : defaultImg}
          style={{ height: "200px", width: "330px" }}
        />
        <Card.Body>
          <Card.Title>{title.slice(0, 40)}</Card.Title>
          <Card.Text>
            {description ? description.slice(0, 50) : defaultDescription}
          </Card.Text>
          <a href={url}>
            <Button variant="primary">Read More</Button>
          </a>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsItem;
