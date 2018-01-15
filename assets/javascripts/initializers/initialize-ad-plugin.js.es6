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
  }
};
