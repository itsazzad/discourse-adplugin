import PostModel from 'discourse/models/post';
import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'initialize-ad-plugin',
  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');

    PostModel.reopen({
      postFixedCountAdsense: function() {
        return this.isOnlyNthPost(parseInt(siteSettings.adsense_only_nth_reply_code));
      }.property('post_number'),

      postSpecificCountDFP: function() {
        return this.isNthPost(parseInt(siteSettings.dfp_nth_post_code));
      }.property('post_number'),

      postSpecificCountAdsense: function() {
        return this.isNthPost(parseInt(siteSettings.adsense_nth_post_code));
      }.property('post_number'),

      postSpecificCountAmazon: function() {
        return this.isNthPost(parseInt(siteSettings.amazon_nth_post_code));
      }.property('post_number'),

      isNthPost: function(n) {
        if (n && n > 0) {
          return (this.get('post_number') % n) === 0;
        } else {
          return false;
        }
      },

      isOnlyNthPost: function(n) {
        if (n && n > 0) {
          return this.get('post_number') === n;
        } else {
          return false;
        }
      }
    });

    withPluginApi('0.1', api => {
      api.decorateWidget('post-contents:before', dec => {

        if (dec.canConnectComponent) {
          return dec.connect({ component: 'adplugin-nth-container', context: 'model' });
        }

        // Old way for backwards compatibility
        return dec.connect({
          templateName: 'connectors/post-before/discourse-adplugin',
          context: 'model'
        });
      });

      api.decorateWidget('post:after', dec => {

        if (dec.canConnectComponent) {
          return dec.connect({ component: 'adplugin-container', context: 'model' });
        }

        // Old way for backwards compatibility
        return dec.connect({
          templateName: 'connectors/post-bottom/discourse-adplugin',
          context: 'model'
        });
      });
    });

    $(document).ready(function(){
      var ads = {
          // 'body.search-page .google-adsense.adsense-discovery-list-container-top': {
          //     base: '.search-title',
          //     defaultPositionTop: 134,
          //     defaultOffsetTop: undefined,
          //     havingClosest: undefined,
          // },
          '.google-adsense.adsense-discovery-list-container-top': {
            base: '.topic-list tbody',
            defaultPositionTop: 132,
            defaultOffsetTop: 250,
            havingClosest: 'body.search-page',
          },
          '.google-adsense.adsense-discovery-list-container-left': {
            base: '.topic-list tbody',
            defaultPositionTop: 132,
            defaultOffsetTop: 250,
            havingClosest: undefined,
          },
          '.google-adsense.adsense-topic-above-posts': {
            base: '.post-stream',
            defaultPositionTop: 0,
            defaultOffsetTop: 240,
            havingClosest: undefined,
          },
      };
      $.each( ads, function( adKey, adValue ) {
          $( window ).scroll(function() {
              var ad$ = $(adKey);
              if(ad$.length){
                  // if(!adValue.havingClosest || !$(adKey).closest(adValue.havingClosest).length){
                  if(!adValue.havingClosest || !$(adKey).closest(adValue.havingClosest).length){
                      var windowScrollTop = $(window).scrollTop();
                      var defaultOffsetTop = adValue.defaultOffsetTop;
                      if(!defaultOffsetTop) defaultOffsetTop = ad$.offset().top;
                      console.error(adKey, defaultOffsetTop);
                      if(windowScrollTop >= defaultOffsetTop){
                          var top = windowScrollTop - defaultOffsetTop + adValue.defaultPositionTop;
                          var adHeight = ad$.outerHeight();
                          var baseWrapperHeight = $(adValue.base).outerHeight();
                          var maxTop = ((baseWrapperHeight + adValue.defaultPositionTop) - adHeight);
                          if(top <= maxTop){
                              ad$.css({ top });
                          }else{
                              ad$.css({ top: maxTop });
                          }
                      }else{
                          ad$.css({ top: adValue.defaultPositionTop });
                      }
                  }
              }
          });
      });

    });

  }
};
