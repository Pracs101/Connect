import React, { Component } from 'react';

import Postt from '../../components/Postt/Postt';

class Home extends Component {
  render() {
    let posts = [
      { title: "ICIMA 2018", date: new Date().getDate(), body: "ICIMA 2018 is being organized with a view to foster research in the field of Advances in Manufacturing and Automation. The conference will bring in eminent personalities (academicians and industry practitioners) from various areas of manufacturing and automation on a common platform."},
      { title: "DJ TRINITY", date: new Date().getTime(), body: "DJ TRINITY Trinity introduces the spirit of D.J.Sanghvi as the most anticipated and cherished annual socio-cultural, sports festival. Trinity is coalescence of innovation and technology, festivities and social responsibilities and competitive streak of sports." }
    ]
    return (
      <div>
        {posts.map(post => {
          return <Postt title={post.title} date={post.date} key={post.title + post.date}> {post.body}</Postt>
        })}   
      </div>
    );
  }
}

export default Home;