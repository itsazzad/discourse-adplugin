# name: discourse-adplugin
# about: Ad Plugin for Discourse
# version: 1.0.2
# authors: Vi and Sarah (@ladydanger and @cyberkoi)
# developer: Sazzad Tushar Khan (itsazzad@gmail.com)

register_css <<CSS

.google-dfp-ad {
  padding: 3px 0;
  margin-bottom: 10px;
  clear: both;
}

.google-dfp-ad  .dfp-ad-unit {
  margin: 0 auto;
}

.google-adsense {
  padding: 3px 0;
  margin-bottom: 10px;
  clear: both;
  background: #eee;
}

.google-adsense.adsense-post-before {
  width: 180px;
  float: left;
}

#post_2 .topic-body {
  width: 390px;
  float: left;
}

.google-adsense.adsense-responsive {
  width: 100%;
}

.google-adsense .google-adsense-label {
  width: auto;
  margin: 0 auto;
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

.google-adsense.adsense-above-footer {
  position: fixed;
  top: 60px;
  bottom: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 0;
  overflow-x: hidden;
  overflow-y: auto;
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

.google-dfp-ad.dfp-ad-post-bottom {
  .google-dfp-ad-label, .dfp-ad-unit {
    margin: 0 0 0 52px;
  }
}

CSS
