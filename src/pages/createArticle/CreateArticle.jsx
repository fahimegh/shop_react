import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import Textarea from "../../components/textarea/Textarea";
import axios from "axios";
import Footer from "../../components/footer/Footer";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    athor: "",
    imageURL: "",
    message: "",
  });

  //  a={1, 2, 3}
  // b={...a} ba gazashtane ... dar posht a maghadire dakhele object a dar b gharar dade mishavad va b={1, 2, 3} mishavad
  const handelChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handelChangeArticleMessage = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  };

  const handelCreateNewArticle = (e) => {
    axios.post("http://localhost:8000/articles", {
      id: 9,
      imageUrl:article.imageURL,
      title:article.title ,
      imageURL:article.imageURL,
      readingTime : article.readingTime,
      author:article.athor,
      date: article.date,
      content:article.message
    });
  };
  // console.log(article);

  return (
    <div>
      <Navbar title="  فهیمه بلاگ" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>ساخت مقاله جدید</h1>
          <Input
            label="عنوان"
            name="title"
            handleChange={handelChangeArticle}
            type="text"
          />
          <Input
            label="تاریخ"
            name="date"
            handleChange={handelChangeArticle}
            type="text"
          />
          <Input
            label="زمان خواندن"
            name="readingTime"
            handleChange={handelChangeArticle}
            type="text"
          />
          <Input
            label="نویسنده"
            name="athor"
            handleChange={handelChangeArticle}
            type="text"
          />
          <Input
            label="آدرس عکس"
            name="imageURL"
            handleChange={handelChangeArticle}
            type="text"
          />

          <Textarea label="متن" handelChange={handelChangeArticleMessage} />
          <div className={styled.buttonWrapper}>
            <button onClick={handelCreateNewArticle}>ساخت مقاله</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default CreateArticle;
