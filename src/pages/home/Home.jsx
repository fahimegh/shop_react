import { useEffect, useState } from "react";
import Article from "../../components/article/Article";
import Navbar from "../../components/navbar/Navbar";
import styled from "./home.module.css";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import Spinner from "../../components/spinner/Spinner";

function Home() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    // API call
    axios
      .get(" http://localhost:8000/articles")
      .then((result) => {
        // console.log(result)
        setArticles(result.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className={styled.homeWrapper}>
      <Navbar title="  فهیمه بلاگ" />
      <div style={{ background: "#444" }}>
        
      </div>

      <div className="container">
        <h2>مقالات جدید</h2>
        {/* shart ?dorost:ghalat */}
        {isLoading ? (
          <Spinner />
        ) : (
          <div className={styled.aticles}>
            {articles.map((article) => (
              <Link to={`/article/${article.id}`}>
                <Article key={article.id} article={article} />
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
