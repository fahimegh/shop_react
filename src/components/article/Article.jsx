import styled from "./article.module.css" 
import javascript from "./../../assets/images/javascript.png"
function Article (props){

    return (
        <div className={styled.articleWrapper}>
            <img src={props.article.imageUrl} />
            <h3>{props.article.title}</h3>
            <p>خواندن {props.article.readingTime} دقیقه ای</p>
            
        </div>

    )
}


export default Article;