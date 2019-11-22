import React from 'react';
import ReactDOM from 'react-dom';

import ModalVideoStyles from 'assets/theme//components/videos/modalVideo';

export default (props: any) => {
  if(!props.isOpen){
    return null;
  }

  return (
    ReactDOM.createPortal(
      <ModalVideoStyles className="modal-video">
        <div className="modal-video-body">
          <div className="modal-video-inner">
            <div className="modal-video-movie-wrap">
              <button className="modal-video-close-btn" onClick={props.onClose}></button>
              <webview id="youtube_modal_embed" src={props.videoUrl}/>
            </div>
          </div>
        </div>
      </ModalVideoStyles>,
      document.body
    )
  )
}