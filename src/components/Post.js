import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Sidebar from './Sidebar';
import { useQuery } from '@apollo/react-hooks';
import GET_POST from '../queries/getPost';


const Post = (props) => {

  
  const{id} = props.match.params;
 
  
  const { loading, error, data } = useQuery(GET_POST, {
    variables: {
      uri: id
    }
  });
  
  const{
    postBy
  } = data || {};
  const{
    treWpisuBloga
  } = postBy || {};
  const{
    title, text, image
  } = treWpisuBloga || {};

  const goBack = () => {

  };

  console.log(image);

  if (loading) return (<p>Loading...</p>);
  if (error) return (<p>Spróbuj ponownie.</p>);

    return ( 
    <>
    <Breadcrumbs />  
    <section className="single-blog-wrap-layout1">
      <div className="container">
          <div className="row">
          
            <div className="col-xl-9 col-lg-8">
              <div className="single-blog-box-layout1">
                <div className="blog-img">
                  <img src={image.sourceUrl} alt="blog" />
                </div>
                <div className="blog-content">
                  {/* <ul className="entry-meta">
                    <li>{el.acf.date}</li>
                    <li>
                      {el.acf.tags.map((tag, i) => <a key={i} href="/">{tag.name}</a>)}
                    </li>
                  </ul> */}
                  <h2 className="blog-title">{title}</h2>
                  <ul className="post-action">
                    <li>
                      <div className="media media-none--xs">
                        <img src="/img/avatar.jpg" alt="Blog" className="media-img-auto" />
                        <div className="media-body space-sm">
                          <h5 className="item-title">Autor <span>J. Sykut</span></h5>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <p dangerouslySetInnerHTML={{__html: text}} />
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <ul className="blog-tag">
                      <li>Tags: <a href="/">Business,</a><a href="/">Trend</a></li>
                    </ul>
                  </div>
                  <div className="col-sm-6">
                    <ul className="blog-social">
                      <li>Share:
                                          <a href="/"><i className="fab fa-facebook-f"></i></a>
                        <a href="/"><i className="fab fa-twitter"></i></a>
                        <a href="/"> <i className="fab fa-linkedin-in"></i></a>
                        <a href="/"><i className="fab fa-google-plus-g"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                
                
                <div className="pagination-layout1 margin-b-30">
                <button className="item-back-btn" onClick={goBack}><i className="flaticon-back"></i> Wróć do wpisów</button>
                </div>
              </div>
            </div>  
           
            <div className="col-xl-9 col-lg-8">Brak wyników</div>
           
            <Sidebar></Sidebar>
            </div>
          </div>
        </section>  
        </>
    )
}

export default memo(Post);
