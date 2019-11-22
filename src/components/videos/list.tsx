import React, { Component } from "react";

//  ============================================
//  Utils
//  ============================================
import { youTubeGetID } from 'utils/youtube';

//  ============================================
//  Styles
//  ============================================
import VideoContainerStyled, { VideosListStyled, VideoImageWrapper } from 'assets/theme/components/videos/videosStyled';

//  ============================================
//  Components
//  ============================================
import ModalVideo from 'components/common/videos/videoModal';

//  ============================================
//  Types
//  ============================================
import { INITIAL_TYPE } from 'reducers/videos';

//  ============================================
//  Interface
//  ============================================
interface VideosListProps{
  fetchVideos: () => void;
  resetVideos: () => void;
  videos: INITIAL_TYPE
}

interface VideosListState {
  selectedVideo: string;
  openVideo: boolean;
}


export default class VideosListComp extends Component<VideosListProps, VideosListState>{
  initialState: VideosListState;

  constructor(props: VideosListProps) {
    super(props);

    this.initialState = {
      selectedVideo: '',
      openVideo: false
    }
    
    this.state = this.initialState;
  }

  componentDidMount() {
    !this.props.videos.data && this.props.fetchVideos();
  }
  
  componentWillUnmount() {
    this.props.resetVideos();
  }
  
  componentDidUpdate(prevProps:VideosListProps, prevState:VideosListState) {
    console.log("UPDATED");
    console.log(this.state);
  }
  

  openVideo(videoId: string) {
    this.setState({
      selectedVideo: videoId,
      openVideo: true
    });
  }

  closedVideo = () => {
    this.setState(this.initialState);
  }

  getSources = () => {
    return this.props.videos.data && this.props.videos.data.length>0 && this.props.videos.data.reduce((acc: Array<string>, cur: { youtube_url: string }) => [...acc, cur.youtube_url], []);
  }

  renderList = () => {
    return this.props.videos.data.map((video: any, idx: number) => {
      const videoId = youTubeGetID(video.youtube_url) || '';
      const thumb = `https://img.youtube.com/vi/${youTubeGetID(video.youtube_url)}/mqdefault.jpg`;

      return (
        <article onClick={this.openVideo.bind(this, videoId)} key={video.id}>
          <VideoImageWrapper bgimage={thumb} className="thumb-wrapper"/>
          <div className="video-trigger">
            <i className="fa fa-play"></i>
          </div>
        </article>
      )
    });
  }

  render(){
    const sources = this.getSources();
    if(!this.props.videos.data || sources.length===0){
      return null
    }
    
    return(
      <VideoContainerStyled>
        <h1>Vivências Corvinas</h1>
        <h2>Pressione sobre um vídeo para visualizar o testemunho da vida na ilha do Corvo</h2>
        <VideosListStyled>
          {this.renderList()}          
        </VideosListStyled>

        <ModalVideo
          isOpen={this.state.openVideo}
          videoUrl={`https://www.youtube.com/embed/${this.state.selectedVideo}?autoplay=1`}
          onClose={this.closedVideo}
          /*youtube={{
            autoplay: 1,
            modestbranding: 1,
            fs: 0,
            enablejsapi: 1
          }} */
        />
      </VideoContainerStyled>
    )
  }
}