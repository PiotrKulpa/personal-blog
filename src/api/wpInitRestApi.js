const host = 'http://localhost/jsykut/wp/wp-json/wp/v2';
export default (path, id) => fetch(`${host}${path}${id}`)
.then(res => res.json().then(data => ({posts: data, pagination: res.headers.get( 'x-wp-totalpages' )})))
.then(obj => obj);
