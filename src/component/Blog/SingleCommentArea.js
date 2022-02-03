import React from 'react'
// import Img
import user1 from '../../assets/img/user/user3.png'
import user2 from '../../assets/img/user/user1.png'
import user3 from '../../assets/img/user/user2.png'

const SingleCommentArea = () => {
  return (
    <>
      <div className="single_comment_area">
        <div className="content_title">
          <h3>(03) Comments</h3>
        </div>
        <ul className="list_none comment_list">
          <li className="comment_info">
            <div className="d-flex">
              <div className="comment_user">
                <img src={user1} alt="user3" />
              </div>
              <div className="comment_content">
                <div className="d-flex">
                  <div className="meta_data">
                    <h6><a href="#!">Alden Smith</a></h6>
                    <div className="comment-time">
                      MARCH 5, 2018, 6:05 PM
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a href="#!" className="comment-reply"><i className="ion-reply-all"></i>Reply</a>
                  </div>
                </div>
                <p>
                  We denounce with righteous indignation and dislike men
                  who are so beguiled and demoralized by the charms of
                  pleasure of the moment, so blinded by desire that the
                  cannot foresee the pain and trouble that.
                </p>
              </div>
            </div>
            <ul className="children">
              <li className="comment_info">
                <div className="d-flex">
                  <div className="comment_user">
                    <img src={user2} alt="user1" />
                  </div>
                  <div className="comment_content">
                    <div className="d-flex align-items-md-center">
                      <div className="meta_data">
                        <h6><a href="#!">Daisy Lana</a></h6>
                        <div className="comment-time">
                          april 8, 2018, 5:15 PM
                        </div>
                      </div>
                      <div className="ml-auto">
                        <a href="#!" className="comment-reply"><i className="ion-reply-all"></i>Reply</a>
                      </div>
                    </div>
                    <p>
                      We denounce with righteous indignation and dislike
                      men who are so beguiled and demoralized by the
                      charms of pleasure of the moment, so blinded by
                      desire that the cannot foresee the pain and
                      trouble that.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li className="comment_info">
            <div className="d-flex">
              <div className="comment_user">
                <img src={user3} alt="user2" />
              </div>
              <div className="comment_content">
                <div className="d-flex">
                  <div className="meta_data">
                    <h6><a href="#!">John Becker</a></h6>
                    <div className="comment-time">
                      april 15, 2018, 10:30 PM
                    </div>
                  </div>
                  <div className="ml-auto">
                    <a href="#!" className="comment-reply"><i className="ion-reply-all"></i>Reply</a>
                  </div>
                </div>
                <p>
                  We denounce with righteous indignation and dislike men
                  who are so beguiled and demoralized by the charms of
                  pleasure of the moment, so blinded by desire that the
                  cannot foresee the pain and trouble that.
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}

export default SingleCommentArea