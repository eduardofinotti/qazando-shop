import React from 'react'
import Swal from 'sweetalert2';

const CommentForm = () => {
  return (
    <>
      <div className="comment_replay_box">
        <div className="content_title">
          <h3>Write a comment</h3>
        </div>
        <form className="field_form" onSubmit={(e)=> {e.preventDefault(); Swal.fire('Success', 'Thank you for your Comment', 'success');document.querySelector("input").value = ""}}>
          <div className="row">
            <div className="form-group col-md-4">
              <input name="name" className="form-control" placeholder="Your Name" required="required" type="text" />
            </div>
            <div className="form-group col-md-4">
              <input name="email" className="form-control" placeholder="Your Email" required="required"
                type="email" />
            </div>
            <div className="form-group col-md-4">
              <input name="website" className="form-control" placeholder="Your Website" required="required"
                type="text" />
            </div>
            <div className="form-group col-md-12">
              <textarea rows="3" name="message" className="form-control" placeholder="Your Comment"
                required="required"></textarea>
            </div>
            <div className="form-group col-md-12">
              <button value="Submit" name="submit" className="theme-btn-one btn_md btn-black-overlay"
                title="Submit Your Message!" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default CommentForm
