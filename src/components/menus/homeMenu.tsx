import React from 'react';

//  ============================================
//  Images
//  ============================================
import PhotoArch from 'assets/img/icons/gallerySVG';
import VideoArch from 'assets/img/icons/videoSVG';
import WebsiteVisit from 'assets/img/icons/familySVG';

//  ============================================
//  Styles
//  ============================================
import { HomeNav } from 'assets/theme/components/menus/homeMenuStyle';

//  ============================================
//  Components
//  ============================================
import {Link} from 'react-router-dom';

export default (props: any) => (
  <HomeNav>
    <ul>
      <li>
        <Link to="/archive">
          <div>            
            <PhotoArch />
            <span>Arquivo Fotográfico do Corvo</span>
          </div>
        </Link>
      </li>
      <li>
        <a href="">
          <div>
            <VideoArch />
            <span>Vivências Corvinas</span>
          </div>
        </a>
      </li>
      <li>
      <a href="">
        <div>
            <WebsiteVisit />
            <span>Uma visita ao Corvo a<br/>1 de janeiro de 1973</span>
          </div>
        </a>
      </li>
    </ul>
  </HomeNav>
)