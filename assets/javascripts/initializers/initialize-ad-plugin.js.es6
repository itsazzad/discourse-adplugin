import PostModel from 'discourse/models/post';
import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name: 'initialize-ad-plugin',
  initialize(container) {
    const siteSettings = container.lookup('site-settings:main');

    PostModel.reopen({
      postBeforeFixedCountAdsense: function() {
        return this.isOnlyNthPost(parseInt(siteSettings.adsense_only_nth_post_contents_before_code));
      }.property('post_number'),

      postBefore2FixedCountAdsense: function() {
        return this.isOnlyNthPost(parseInt(siteSettings.adsense_only_nth_post_contents_before_2_code));
      }.property('post_number'),

      postAfterFixedCountAdsense: function() {
        return this.isOnlyNthPost(parseInt(siteSettings.adsense_only_nth_post_menu_before_code));
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

      api.decorateWidget('post-contents:before', dec => {

        if (dec.canConnectComponent) {
          return dec.connect({ component: 'post-contents-before', context: 'model' });
        }

        // Old way for backwards compatibility
        return dec.connect({
          templateName: 'connectors/post-contents-before/discourse-adplugin',
          context: 'model'
        });
      });

      api.decorateWidget('post-menu:before', dec => {

        if (dec.canConnectComponent) {
          return dec.connect({ component: 'post-menu-before', context: 'model' });
        }

        // Old way for backwards compatibility
        return dec.connect({
          templateName: 'connectors/post-menu-before/discourse-adplugin',
          context: 'model'
        });
      });
    });

    $(document).ready(function(){
      var ads = {
          'body.search-page .google-adsense.adsense-discovery-list-container-top': {
            base: '.search-container',
            calculateBaseMargin: true,
            defaultPositionTop: 134,
            defaultOffsetTop: undefined,
            havingClosest: undefined,
          },
          '.google-adsense.adsense-discovery-list-container-right': {
            base: '.topic-list tbody',
            calculateBaseMargin: false,
            defaultPositionTop: 132,
            defaultOffsetTop: 250,
            havingClosest: 'body.search-page',
          },
          '.google-adsense.adsense-discovery-list-container-left': {
            base: '.topic-list tbody',
            calculateBaseMargin: false,
            defaultPositionTop: 132,
            defaultOffsetTop: 250,
            havingClosest: undefined,
          },
          '.google-adsense.adsense-topic-above-posts': {
            base: '.post-stream',
            calculateBaseMargin: false,
            defaultPositionTop: 0,
            defaultOffsetTop: 240,
            havingClosest: undefined,
          },
      };
      $.each( ads, function( adKey, adValue ) {
          $( window ).scroll(function() {
              var ad$ = $(adKey);
              if(ad$.length){
                  if(!adValue.havingClosest || !$(adKey).closest(adValue.havingClosest).length){
                      var windowScrollTop = $(window).scrollTop();
                      var defaultOffsetTop = adValue.defaultOffsetTop;
                      if(!defaultOffsetTop){
                          defaultOffsetTop = ad$.parent().offset().top + adValue.defaultPositionTop - $('.d-header').outerHeight();
                      }
                      if(windowScrollTop >= defaultOffsetTop){
                          var baseWrapperHeight = $(adValue.base).outerHeight();
                          var baseMargin = 0;
                          if(adValue.calculateBaseMargin){
                              baseMargin = ad$.parent().offset().top - $(adValue.base).offset().top;
                          }
                          var top = windowScrollTop - defaultOffsetTop + adValue.defaultPositionTop;
                          var adHeight = 600;
                          var maxTop = ((baseWrapperHeight - baseMargin + adValue.defaultPositionTop) - adHeight);
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
