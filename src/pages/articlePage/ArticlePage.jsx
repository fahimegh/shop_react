import Navbar from "../../components/navbar/Navbar";
import pic from "../../assets/images/javascript.png";
import styled from "./articlePage.module.css";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../../components/spinner/Spinner";
function ArticlePage() {
  const [article, setArticle] = useState({});
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  // console.log(params.id)
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(` http://localhost:8000/articles/${params.id}`)
      .then((result) => {
        setArticle(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);
  return (
    <div>
      <Navbar title="فهیمه بلاگ" />
      <div className={styled.articleWrapper}>
        <div className="container">
          {isLoading ? (
            <Spinner/>
          ) : (
            <div>
              <h1>{article.title}</h1>
              <div className={styled.articleInfo}>
                <span>{article.date}:تاریخ</span>
                <span>نام نویسنده:{article.athor} </span>
                <span>مدت زمان خواندن :{article.readingTime} دقیقه</span>
              </div>
              <img src={article.imageUrl} />
              <p>{article.content}</p>
            </div>
          )}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default ArticlePage;
