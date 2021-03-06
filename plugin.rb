# name: discourse-adplugin
# about: Ad Plugin for Discourse
# version: 2.0.1
# authors: Vi and Sarah (@ladydanger and @cyberkoi)
# developer: Sazzad Tushar Khan (itsazzad@gmail.com)
# url: https://github.com/itsazzad/discourse-adplugin
# forked from: https://github.com/discourse/discourse-adplugin

register_css <<CSS

.cooked ins {
  background-color: transparent;
}

.google-dfp-ad {
  padding: 3px 0;
  margin-bottom: 10px;
  clear: both;
}

.google-dfp-ad  .dfp-ad-unit {
  margin: 0 auto;
}

.google-adsense {
  padding: 0 0;
  margin-bottom: 0;
  clear: both;
  z-index: 9;
}
.google-adsense ins {
    min-width: 120px;
    min-height: 50px;
}

.google-adsense.adsense-topic-above-posts {
  left: 765px;
}
.google-adsense.adsense-topic-above-posts,
.google-adsense.adsense-discovery-list-container-right,
.google-adsense.adsense-discovery-list-container-left {
  position: absolute;
}
.google-adsense.adsense-discovery-list-container-right,
.google-adsense.adsense-discovery-list-container-left {
  top: 132px;
}
body.search-page .google-adsense.adsense-discovery-list-container-top {
  top: 134px;
}
.google-adsense.adsense-discovery-list-container-left {
  left: -165px;
}
.google-adsense.adsense-discovery-list-container-right {
  left: 1115px;
}
body.search-page .google-adsense.adsense-discovery-list-container-right {
  left: 785px;
}
body.search-page .google-adsense.adsense-discovery-list-container-left {
  display: none;
}
.google-adsense.adsense-post-contents-before,
.google-adsense.adsense-post-contents-before-2{
  float: left;
  padding: 0 25px 10px 0;
  height: 250px;
}
html.mobile-view .google-adsense.adsense-post-contents-before,
html.mobile-view .google-adsense.adsense-post-contents-before-2{
  float: none;
  padding: 0;
  height: auto;
}
.discovery-list-container-top-outlet.discourse-adplugin {
  position: relative;
}
html.mobile-view body.search-page .discovery-list-container-top-outlet.discourse-adplugin {
  display: none;
}
html.mobile-view .navigation-topics .discovery-list-container-top-outlet.discourse-adplugin {
  display: block;
  border-top: 3px solid #e9e9e9;
  padding-top: 5px;
}
html.mobile-view .full-page-search-result-outlet{
  padding-bottom: 5px;
}
html.mobile-view .topic-list>tbody>tr:first-of-type{
  border-top: none;
}

.google-adsense.adsense-responsive {
  width: 100%;
}

.google-adsense .google-adsense-label {
  width: 728px;
  margin: 0 auto;
  display: none;
}

.google-adsense.adsense-responsive .google-adsense-label {
  width: 100%;
  text-align: center;
}

.google-adsense .adsense-unit {
  margin: 0 auto;
}

.google-adsense .google-adsense-label h2 {
  margin: 4px 0 !important;
  color: #858a8c;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
}

.google-adsense .google-adsense-content {
  margin: 0 auto;
}
.archetype-regular .google-adsense .google-adsense-content,
.search-page .google-adsense .google-adsense-content {
  margin: 0;
}
html.mobile-view .google-adsense .google-adsense-content {
  margin: 0 auto;
}

.google-adsense.adsense-above-footer {
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;

  display: none;
}
.topic-body .contents .cooked {
  overflow: visible;
}
.cooked ul, .cooked ol, .cooked dd {
    clear: none;
}

.google-adsense.adsense-post-bottom {
  max-width: 735px;
  padding: 0 11px;
}

@media all
and (max-width : 775px) {
  .google-adsense.adsense-post-bottom {
    box-sizing: border-box;
    width: 100%;
  }
}

#list-area google-adsense-label{
  display: none;
}
.discourse-adplugin.search-advanced-sidebar-end-outlet{
  background: #f8f8f8;
  padding: 1em;
}

.amazon-product-links {
  padding: 3px;
  margin-bottom: 10px;
  clear: both;
}

.amazon-product-links  .amazon-unit {
  margin: 0 auto;
}

.amazon-product-links .amazon-product-links-label {
  width: 728px;
  margin: 0 auto;
}

.amazon-product-links .amazon-product-links-label h2 {
  margin: 4px 0 !important;
  color: #858a8c;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
}

.google-dfp-ad .google-dfp-ad-label {
  width: 728px;
  margin: 0 auto;
}

.google-dfp-ad .google-dfp-ad-label h2 {
  margin: 4px 0 !important;
  color: #858a8c;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: normal;
}

.google-dfp-ad.dfp-ad-post-after {
  .google-dfp-ad-label, .dfp-ad-unit {
    margin: 0 0 0 52px;
  }
}
CSS
