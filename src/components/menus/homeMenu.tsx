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

//  ============================================
//  Utils
//  ============================================
import { useTranslation } from 'react-i18next';

export default (props: any) => {
  const { t } = useTranslation();

  return(
    <HomeNav>
      <ul>
        <li>
          <Link to="/archive">
            <div>            
              <PhotoArch />
              <span>{t('Arquivo Fotográfico do Corvo')}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/videos">
            <div>
              <VideoArch />
              <span>{t('Vivências Corvinas')}</span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/visit">
            <div>
              <WebsiteVisit />
              <span dangerouslySetInnerHTML={{ __html: t('Uma visita ao Corvo a<br/>1 de janeiro de 1937')}}></span>
            </div>
          </Link>
        </li>
      </ul>
    </HomeNav>
  )
}