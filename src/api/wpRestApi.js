const host = 'http://localhost/jsykut/wp/wp-json/wp/v2';
export default (path, id) => fetch(`${host}${path}${id}`)
.then(res => res.json())
.then(res => res);
