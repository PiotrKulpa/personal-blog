import React, { memo, useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../api/posts';

const Post = (props) => {
  const dispatch = useDispatch();
  const match = useRouteMatch();
  const { params: { id = '' } } = match;
  const post = useSelector(({ blogReducer }) => blogReducer.singlePost);

  const getPostOnLoad = async (pageId) => {
    dispatch({ type: 'UPDATE_LOADER', payload: true });
    const result = await getPost(pageId);
    console.log(result);

    dispatch({ type: 'UPDATE_LOADER', payload: false });
    const { data = {}, headers = {} } = result || {};
    const totalPages = headers['x-wp-totalpages'] || '1';
    dispatch({ type: 'UPDATE_POST', payload: data });
    dispatch({ type: 'UPDATE_TOTAL_PAGES', payload: totalPages });
  }

  useEffect(() => {
    getPostOnLoad(id);
  }, [getPost, id]);

  const goBack = () => {
    props.history.goBack();
  };

  // if (loading) return (<Preloader />);
  // if (error) return (<p>Spróbuj ponownie.</p>);
  // console.log(data);
  return (
    <>
      <Breadcrumbs />
      <section className="single-blog-wrap-layout1">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-8">
              {post ? post.map(({
                id = 0,
                date = '',
                title = {},
                content = {},
                _embedded = {},
                slug = '',
              }, index) => {
                const photo = _embedded['wp:featuredmedia'] &&
                  _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
                const tags = _embedded['wp:term'] && _embedded['wp:term'];
                return (
                  <div className="single-blog-box-layout1">
                    <div className="blog-img">
                      {photo && <img src={photo} alt="blog" />}
                    </div>
                    <div className="blog-content">
                      <ul className="entry-meta">
                        <li>
                          {tags && tags.map((el, i) => <a key={i} href={el.link}>{el[0] && el[0].name}</a>)}
                        </li>
                      </ul>
                      <h2 className="blog-title">{title.rendered}</h2>
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
                      <p dangerouslySetInnerHTML={{ __html: content.rendered }} />
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
                )
              }) :
              <>
                <p>Nie ma takiego wpisu</p>
                <div className="pagination-layout1 margin-b-30">
                  <button className="item-back-btn" onClick={goBack}><i className="flaticon-back"></i> Wróć do wpisów</button>
                </div>
              </>
              }
            </div>
            <Sidebar></Sidebar>
          </div>
        </div>
      </section>
    </>
  )
}

export default memo(Post);
