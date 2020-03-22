import React, { memo } from 'react';
import { NavLink, Link  } from 'react-router-dom';
import stringSlicer from '../helpers/stringSlicer';

import Preloader from './Preloader';
import Pagination from './Pagination';
import Blog from './Blog';

const PostList = (props) => {
  const { data, loading, url } = props

  if (loading) return (<Preloader />);

  return (
    <Blog>
      {data && data.length > 0 ?
        data.map(({
          id = 0,
          date = '',
          title = {},
          content = {},
          _embedded = {},
          slug = '',
          tags = [],
        }, index) => {
          const photo = _embedded['wp:featuredmedia'] &&
            _embedded['wp:featuredmedia'][0].media_details.sizes.medium.source_url;
          const embedTags = _embedded['wp:term'] && _embedded['wp:term'];
          return (
            <div key={index} className="col-xl-12 col-lg-6 col-md-6 col-12">
              <div className="blog-box-layout5">
                <div className="media media-none--lg">
                  <div className="item-img">
                    <NavLink to={`/blog/${slug}`}><img src={photo || '/img/placeholder.jpg'} alt="Blog" /></NavLink>
                  </div>
                  <div className="media-body">
                    <ul className="entry-meta">
                      {tags && tags.map((el, i) => {
                        const filteredTag = embedTags.filter((filterEl) => filterEl[0].id === el);
                        console.log(filteredTag);
                        return (
                        filteredTag.length > 0 && filteredTag.map((ell) => (<li key={i}><a href={`/tagi/${ell[0].id}/1`}>{ell[0].name}</a></li>))
                        )
                      }
                      )}
                    </ul>
                    <h3 className="item-title"><Link to={`/blog/${slug}`}>{title.rendered}</Link></h3>
                    <p dangerouslySetInnerHTML={{ __html: stringSlicer(content.rendered, 0, 107).replace(/<[^>]+>/g, '') }} />
                    <NavLink activeClassName="active-menu temp-logo" className="item-btn" to={`/blog/${slug}`}>
                      Czytaj dalej <i className="flaticon-next"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          )
        }
        )
        :
        <p>Nie znaleziono wpisów.</p>}
      <Pagination url={url} />
    </Blog>
  )
}

export default memo(PostList);
