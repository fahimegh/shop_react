   
import AboutUs from "./pages/aboutUs/AboutUs";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/articlePage/ArticlePage"
import CreateArticle from "./pages/createArticle/CreateArticle";
import NotFound from "./pages/notFound/NotFound";
function App() {

  return (
    <div> 
     <Routes>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<AboutUs/>}/>
      <Route path="/article/:id"  element={<ArticlePage/>}/>
      <Route path="/create-article" element={<CreateArticle/>}/>
      

      
     </Routes>
      
      
    </div>
  );
}

export default App;
