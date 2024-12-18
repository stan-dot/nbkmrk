import { ProviderDictionary } from "./types";

export const providersDictionary: ProviderDictionary = {
  "amazon": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}",
    "completeProvider": false,
    "rules": [
      "p[fd]_rd_[a-z]*",
      "qid",
      "srs?",
      "__mk_[a-z]{1,3}_[a-z]{1,3}",
      "spIA",
      "ms3_c",
      "[a-z%0-9]*ie",
      "refRID",
      "colii?d",
      "[^a-z%0-9]adId",
      "qualifier",
      "_encoding",
      "smid",
      "field-lbr_brands_browse-bin",
      "ref_?",
      "th",
      "sprefix",
      "crid",
      "keywords",
      "cv_ct_[a-z]+",
      "linkCode",
      "creativeASIN",
      "ascsubtag",
      "aaxitk",
      "hsa_cr_id",
      "sb-ci-[a-z]+",
      "rnid",
      "dchild",
      "camp",
      "creative",
      "s",
      "content-id",
      "dib",
      "dib_tag"
    ],
    "referralMarketing": [
      "tag",
      "ascsubtag"
    ],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/gp\\/.*?(?:redirector.html|cart\\/ajax-update.html|video\\/api\\/)",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/(?:hz\\/reviews-render\\/ajax\\/|message-us\\?|s\\?)"
    ],
    "rawRules": [
      "\\/ref=[^/?]*"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "msn": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?msn\\.com",
    "completeProvider": false,
    "rules": [
      "cvid",
      "ocid"
    ],
    "rawRules": [],
    "referralMarketing": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "amazon search": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/s\\?",
    "completeProvider": false,
    "rules": [
      "p[fd]_rd_[a-z]*",
      "qid",
      "srs?",
      "__mk_[a-z]{1,3}_[a-z]{1,3}",
      "spIA",
      "ms3_c",
      "[a-z%0-9]*ie",
      "refRID",
      "colii?d",
      "[^a-z%0-9]adId",
      "qualifier",
      "_encoding",
      "smid",
      "field-lbr_brands_browse-bin",
      "ref_?",
      "th",
      "sprefix",
      "crid",
      "cv_ct_[a-z]+",
      "linkCode",
      "creativeASIN",
      "ascsubtag",
      "aaxitk",
      "hsa_cr_id",
      "sb-ci-[a-z]+",
      "rnid",
      "dchild",
      "camp",
      "creative"
    ],
    "referralMarketing": [
      "tag"
    ],
    "rawRules": [
      "\\/ref=[^/?]*"
    ],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "fls-na.amazon": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?fls-na\\.amazon(?:\\.[a-z]{2,}){1,}",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "google": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}",
    "completeProvider": false,
    "rules": [
      "ved",
      "bi[a-z]*",
      "gfe_[a-z]*",
      "ei",
      "source",
      "gs_[a-z]*",
      "site",
      "oq",
      "esrc",
      "uact",
      "cd",
      "cad",
      "gws_[a-z]*",
      "atyp",
      "vet",
      "_u",
      "je",
      "dcr",
      "ie",
      "sei",
      "sa",
      "dpr",
      "btn[a-z]*",
      "usg",
      "cd",
      "cad",
      "uact",
      "aqs",
      "sourceid",
      "sxsrf",
      "rlz",
      "i-would-rather-use-firefox",
      "pcampaignid",
      "sca_esv"
    ],
    "referralMarketing": [
      "referrer"
    ],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/mail\\.google\\.com\\/mail\\/u\\/",
      "^https?:\\/\\/accounts\\.google\\.com\\/o\\/oauth2\\/",
      "^https?:\\/\\/accounts\\.google\\.com\\/signin\\/oauth\\/",
      "^https?:\\/\\/(?:docs|accounts)\\.google(?:\\.[a-z]{2,}){1,}",
      "^https?:\\/\\/([a-z0-9-\\.])*(chat|drive)\\.google\\.com\\/videoplayback",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}(?:\\/upload)?\\/drive\\/",
      "^https?:\\/\\/news\\.google\\.com.*\\?hl=.",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/s\\?tbm=map.*?gs_[a-z]*=.",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/(?:complete\\/search|setprefs|searchbyimage)",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/(?:appsactivity|aclk\\?)",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/safe[-]?browsing\\/([^&]+)"
    ],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/url\\?.*?(?:url|q)=(https?[^&]+)",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/.*?adurl=([^&]+)",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/amp\\/s\\/([^&]+)"
    ],
    "forceRedirection": true
  },
  "googleSearch": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?google(?:\\.[a-z]{2,}){1,}\\/search\\?",
    "completeProvider": false,
    "rules": [
      "client",
      "sclient"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "googlesyndication": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googlesyndication\\.com",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "doubleclick": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?doubleclick(?:\\.[a-z]{2,}){1,}",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?doubleclick(?:\\.[a-z]{2,}){1,}\\/.*?tag_for_child_directed_treatment=;%3F([^&]*)"
    ],
    "forceRedirection": false
  },
  "googleadservices": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googleadservices\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?googleadservices\\.com\\/.*?adurl=([^&]*)"
    ],
    "forceRedirection": false
  },
  "globalRules": {
    "urlPattern": ".*",
    "completeProvider": false,
    "rules": [
      "(?:%3F)?utm(?:_[a-z_]*)?",
      "(?:%3F)?ga_[a-z_]+",
      "(?:%3F)?yclid",
      "(?:%3F)?_openstat",
      "(?:%3F)?fb_action_(?:types|ids)",
      "(?:%3F)?fb_(?:source|ref)",
      "(?:%3F)?fbclid",
      "(?:%3F)?action_(?:object|type|ref)_map",
      "(?:%3F)?gs_l",
      "(?:%3F)?mkt_tok",
      "(?:%3F)?hmb_(?:campaign|medium|source)",
      "(?:%3F)?gclid",
      "(?:%3F)?otm_[a-z_]*",
      "(?:%3F)?cmpid",
      "(?:%3F)?os_ehash",
      "(?:%3F)?_ga",
      "(?:%3F)?_gl",
      "(?:%3F)?__twitter_impression",
      "(?:%3F)?wt_?z?mc",
      "(?:%3F)?wtrid",
      "(?:%3F)?[a-z]?mc",
      "(?:%3F)?dclid",
      "Echobox",
      "(?:%3F)?spm",
      "(?:%3F)?vn(?:_[a-z]*)+",
      "(?:%3F)?tracking_source",
      "(?:%3F)?ceneo_spo",
      "(?:%3F)?itm_(?:campaign|medium|source)",
      "(?:%3F)?__hsfp",
      "(?:%3F)?__hssc",
      "(?:%3F)?__hstc",
      "(?:%3F)?_hsenc",
      "(?:%3F)?__s",
      "(?:%3F)?hsCtaTracking",
      "(?:%3F)?mc_(?:eid|cid|tc)",
      "(?:%3F)?ml_subscriber",
      "(?:%3F)?ml_subscriber_hash",
      "(?:%3F)?msclkid",
      "(?:%3F)?oly_anon_id",
      "(?:%3F)?oly_enc_id",
      "(?:%3F)?rb_clickid",
      "(?:%3F)?s_cid",
      "(?:%3F)?vero_conv",
      "(?:%3F)?vero_id",
      "(?:%3F)?wickedid",
      "(?:%3F)?twclid"
    ],
    "referralMarketing": [
      "(?:%3F)?ref_?",
      "(?:%3F)?referrer"
    ],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?matrix\\.org\\/_matrix\\/",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?(?:cloudflare\\.com|prismic\\.io|tangerine\\.ca|gitlab\\.com)",
      "^https?:\\/\\/myaccount.google(?:\\.[a-z]{2,}){1,}",
      "^https?:\\/\\/accounts.google(?:\\.[a-z]{2,}){1,}",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gcsip\\.(?:com|nl)[^?]*\\?.*?&?ref_?=.",
      "^https?:\\/\\/[^/]+/[^/]+/[^/]+\\/-\\/refs\\/switch[^?]*\\?.*?&?ref_?=.",
      "^https?:\\/\\/bugtracker\\.[^/]*\\/[^?]+\\?.*?&?ref_?=[^/?&]*",
      "^https?:\\/\\/comment-cdn\\.9gag\\.com\\/.*?comment-list.json\\?",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?battle\\.net\\/login",
      "^https?:\\/\\/blizzard\\.com\\/oauth2",
      "^https?:\\/\\/kreditkarten-banking\\.lbb\\.de",
      "^https?:\\/\\/www\\.tinkoff\\.ru",
      "^https?:\\/\\/www\\.cyberport\\.de\\/adscript\\.php",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tweakers\\.net\\/ext\\/lt\\.dsp\\?.*?(?:%3F)?&?ref_?=.",
      "^https?:\\/\\/git(lab)?\\.[^/]*\\/[^?]+\\?.*?&?ref_?=[^/?&]*",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon(?:\\.[a-z]{2,}){1,}\\/message-us\\?",
      "^https?:\\/\\/authorization\\.td\\.com",
      "^https?:\\/\\/support\\.steampowered\\.com",
      "^https?:\\/\\/privacy\\.vakmedianet\\.nl\\/.*?ref=",
      "^https?:\\/\\/sso\\.serverplan\\.com\\/manage2fa\\/check\\?ref=",
      "^https?:\\/\\/login\\.meijer\\.com\\/.*?\\?ref=",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/(?:login_alerts|ajax|should_add_browser)/",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/groups\\/member_bio\\/bio_dialog\\/",
      "^https?:\\/\\/api\\.taiga\\.io",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gog\\.com\\/click\\.html",
      "^https?:\\/\\/login\\.progressive\\.com",
      "^https?:\\/\\/www\\.sephora\\.com\\/api\\/",
      "^https?:\\/\\/www\\.contestgirl\\.com",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?agenciatributaria\\.gob\\.es",
      "^https?:\\/\\/login\\.ingbank\\.pl",
      "^wss?:\\/\\/(?:[a-z0-9-]+\\.)*?zoom\\.us",
      "^https?:\\/\\/api\\.bilibili\\.com",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?onet\\.pl\\/[^?]*\\?.*?utm_campaign=.",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?stripe\\.com\\/[^?]+.*?&?referrer=[^/?&]*",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?lichess\\.org\\/login.*?&?referrer=.*?",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?microsoft\\.com\\/.*?research\\/redirect",
      "^https?:\\/\\/like.co\\/api\\/like\\/likebutton\\/[^?]+.*?&?referrer=[^/?&]*",
      "^https?:\\/\\/button.like.co\\/in\\/.*?&?referrer=[^/?&]*",
      "^https?:\\/\\/www\\.mma\\.go\\.kr",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?github\\.com",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?billiger\\.de\\/.*?mc=",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?\\.youtrack\\.cloud",
      "^https?:\\/\\/cu\\.bankid\\.com"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "adtech": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?adtech(?:\\.[a-z]{2,}){1,}",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "contentpass": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?contentpass\\.(?:net|de)",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "bf-ad": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bf-ad(?:\\.[a-z]{2,}){1,}",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "amazon-adsystem": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon-adsystem(?:\\.[a-z]{2,}){1,}",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon-adsystem(?:\\.[a-z]{2,}){1,}\\/v3\\/oor\\?"
    ],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?amazon-adsystem(?:\\.[a-z]{2,}){1,}\\/x\\/c\\/.+?\\/([^&]+)"
    ],
    "forceRedirection": false
  },
  "adsensecustomsearchads": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?adsensecustomsearchads(?:\\.[a-z]{2,}){1,}",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "youtube": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?(youtube\\.com|youtu\\.be)",
    "completeProvider": false,
    "rules": [
      "feature",
      "gclid",
      "kw",
      "si"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/signin\\?.*?"
    ],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/redirect?.*?q=([^&]*)"
    ],
    "forceRedirection": false
  },
  "youtube_pagead": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/pagead",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "youtube_apiads": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youtube\\.com\\/api\\/stats\\/ads",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "facebook": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com",
    "completeProvider": false,
    "rules": [
      "hc_[a-z_%\\[\\]0-9]*",
      "[a-z]*ref[a-z]*",
      "__tn__",
      "eid",
      "__(?:xts|cft)__(?:\\[|%5B)\\d(?:\\]|%5D)",
      "comment_tracking",
      "dti",
      "app",
      "video_source",
      "ftentidentifier",
      "pageid",
      "padding",
      "ls_ref",
      "action_history",
      "tracking",
      "referral_code",
      "referral_story_type",
      "mibextid"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/.*?(plugins|ajax)\\/",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/dialog\\/(?:share|send)",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/groups\\/member_bio\\/bio_dialog\\/",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/photo\\.php\\?",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/privacy\\/specific_audience_selector_dialog\\/",
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?facebook\\.com\\/photo\\/download\\/"
    ],
    "redirections": [
      "^https?:\\/\\/l[a-z]?\\.facebook\\.com/l\\.php\\?.*?u=(https?%3A%2F%2F[^&]*)"
    ],
    "forceRedirection": false
  },
  "twitter": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?twitter.com",
    "completeProvider": false,
    "rules": [
      "(?:ref_?)?src",
      "s",
      "cn",
      "ref_url",
      "t"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/twitter.com\\/i\\/redirect"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "x": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?x.com",
    "completeProvider": false,
    "rules": [
      "(?:ref_?)?src",
      "s",
      "cn",
      "ref_url",
      "t"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/x.com\\/i\\/redirect"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "reddit": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?reddit.com",
    "completeProvider": false,
    "rules": [
      "%24deep_link",
      "\\$deep_link",
      "correlation_id",
      "ref_campaign",
      "ref_source",
      "%243p",
      "rdt",
      "\\$3p",
      "%24original_url",
      "\\$original_url",
      "_branch_match_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/out\\.reddit\\.com\\/.*?url=([^&]*)",
      "^https?:\\/\\/click\\.redditmail\\.com\\/.*?url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "netflix": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?netflix.com",
    "completeProvider": false,
    "rules": [
      "trackId",
      "tctx",
      "jb[a-z]*?"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "techcrunch": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?techcrunch\\.com",
    "completeProvider": false,
    "rules": [
      "ncid",
      "sr",
      "sr_share"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "bing": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bing(?:\\.[a-z]{2,}){1,}",
    "completeProvider": false,
    "rules": [
      "cvid",
      "form",
      "sk",
      "sp",
      "sc",
      "qs",
      "qp"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bing(?:\\.[a-z]{2,}){1,}\\/WS\\/redirect\\/"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "tweakers": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tweakers\\.net",
    "completeProvider": false,
    "rules": [
      "nb",
      "u"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "twitch": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?twitch\\.com",
    "completeProvider": false,
    "rules": [
      "tt_medium",
      "tt_content"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "vivaldi": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?vivaldi\\.com",
    "completeProvider": false,
    "rules": [
      "pk_campaign",
      "pk_kwd"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "indeed": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?indeed\\.com",
    "completeProvider": false,
    "rules": [
      "from",
      "alid",
      "[a-z]*tk"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?indeed\\.com\\/rc\\/clk"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "hhdotru": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hh\\.ru",
    "completeProvider": false,
    "rules": [
      "vss",
      "t",
      "swnt",
      "grpos",
      "ptl",
      "stl",
      "exp",
      "plim"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "ebay": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?ebay(?:\\.[a-z]{2,}){1,}",
    "completeProvider": false,
    "rules": [
      "_trkparms",
      "_trksid",
      "_from",
      "hash"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?rover\\.ebay(?:\\.[a-z]{2,}){1,}\\/rover.*mpre=([^&]*)"
    ],
    "forceRedirection": false
  },
  "cnet": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cnet\\.com",
    "completeProvider": false,
    "rules": [
      "ftag"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "imdb.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?imdb\\.com",
    "completeProvider": false,
    "rules": [
      "ref_",
      "pf_rd_[a-z]*"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "govdelivery.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?govdelivery\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?links\\.govdelivery\\.com.*\\/track\\?.*(https?:\\/\\/.*)"
    ],
    "forceRedirection": false
  },
  "walmart.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?walmart\\.com",
    "completeProvider": false,
    "rules": [
      "u1",
      "ath[a-z]*"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "net-parade.it": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?net\\-parade\\.it",
    "completeProvider": false,
    "rules": [
      "pl"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "prvnizpravy.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?prvnizpravy\\.cz",
    "completeProvider": false,
    "rules": [
      "xid"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "youku.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?youku\\.com",
    "completeProvider": false,
    "rules": [
      "tpa"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "nytimes.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?nytimes\\.com",
    "completeProvider": false,
    "rules": [
      "smid"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "tchibo.de": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tchibo\\.de",
    "completeProvider": false,
    "rules": [
      "wbdcd"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "steampowered": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?steampowered\\.com",
    "completeProvider": false,
    "rules": [
      "snr"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "steamcommunity": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?steamcommunity\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?steamcommunity\\.com\\/linkfilter\\/\\?url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "mozaws.net": {
    "urlPattern": "https?:\\/\\/outgoing\\.prod\\.mozaws\\.net\\/",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "https?:\\/\\/[^/]+\\/v1\\/[0-9a-f]{64}\\/(.*)"
    ],
    "forceRedirection": false
  },
  "shutterstock.com": {
    "urlPattern": "https?:\\/\\/([a-z0-9-.]*\\.)shutterstock\\.com",
    "completeProvider": false,
    "rules": [
      "src"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "mozilla.org": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mozilla\\.org",
    "completeProvider": false,
    "rules": [
      "src",
      "platform",
      "redirect_source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mozilla.org\\/api"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "readdc.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?readdc\\.com",
    "completeProvider": false,
    "rules": [
      "ref"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "dailycodingproblem.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dailycodingproblem\\.com",
    "completeProvider": false,
    "rules": [
      "email"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "github.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?github\\.com",
    "completeProvider": false,
    "rules": [
      "email_token",
      "email_source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "deviantart.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?deviantart\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?deviantart\\.com\\/.*?\\/outgoing\\?(.*)"
    ],
    "forceRedirection": false
  },
  "site2.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site2\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site2\\.com.*?\\?.*=(.*)"
    ],
    "forceRedirection": false
  },
  "site.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site\\.com.*?\\?to=([^&]*)"
    ],
    "forceRedirection": false
  },
  "site3.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site3\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?site3\\.com.*?\\?r=([^&]*)"
    ],
    "forceRedirection": false
  },
  "aliexpress": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?aliexpress(?:\\.[a-z]{2,}){1,}",
    "completeProvider": false,
    "rules": [
      "ws_ab_test",
      "btsid",
      "algo_expid",
      "algo_pvid",
      "gps-id",
      "scm[_a-z-]*",
      "cv",
      "af",
      "mall_affr",
      "sk",
      "dp",
      "terminal_id",
      "aff_request_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "mozillazine.org": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mozillazine\\.org",
    "completeProvider": false,
    "rules": [
      "sid"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "9gag.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?9gag\\.com",
    "completeProvider": false,
    "rules": [
      "ref"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/comment-cdn\\.9gag\\.com\\/.*?comment-list.json\\?"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "linksynergy.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linksynergy\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linksynergy\\.com\\/.*?murl=([^&]*)"
    ],
    "forceRedirection": false
  },
  "giphy.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?giphy\\.com",
    "completeProvider": false,
    "rules": [
      "ref"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "gate.sc": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gate\\.sc",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gate\\.sc\\/.*?url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "vk.com": {
    "urlPattern": "^https?:\\/\\/vk\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/vk\\.com\\/away\\.php\\?to=([^&]*)"
    ],
    "forceRedirection": false
  },
  "woot.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?woot\\.com",
    "completeProvider": false,
    "rules": [
      "ref_?"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "vitamix.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?vitamix\\.com",
    "completeProvider": false,
    "rules": [
      "_requestid",
      "cid",
      "dl",
      "di",
      "sd",
      "bi"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "curseforge.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?curseforge\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?curseforge\\.com\\/linkout\\?remoteUrl=([^&]*)"
    ],
    "forceRedirection": false
  },
  "messenger.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?messenger\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/l\\.messenger\\.com\\/l\\.php\\?u=([^&]*)"
    ],
    "forceRedirection": false
  },
  "nypost.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?nypost\\.com",
    "completeProvider": false,
    "rules": [
      "__twitter_impression"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "ozon.ru": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?ozon\\.ru",
    "completeProvider": false,
    "rules": [
      "partner"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "norml.org": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?norml\\.org",
    "completeProvider": false,
    "rules": [
      "link_id",
      "can_id",
      "source",
      "email_referrer",
      "email_subject"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "LinkedIn": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linkedin\\.com",
    "completeProvider": false,
    "rules": [
      "refId",
      "trk",
      "li[a-z]{2}",
      "trackingId"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "LinkedIn Learning": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?linkedin\\.com\\/learning",
    "completeProvider": false,
    "rules": [
      "u"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "smartredirect.de": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?smartredirect\\.de",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?smartredirect\\.de.*?url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "SPIEGEL ONLINE": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?spiegel\\.de",
    "completeProvider": false,
    "rules": [
      "b"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "rutracker.org": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?rutracker\\.org",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      ".*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "instagram": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?instagram\\.com",
    "completeProvider": false,
    "rules": [
      "igshid",
      "igsh"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      ".*u=([^&]*)"
    ],
    "forceRedirection": false
  },
  "lazada.com.my": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?lazada\\.com\\.my",
    "completeProvider": false,
    "rules": [
      "ad_src",
      "did",
      "pa",
      "mp",
      "impsrc",
      "cid",
      "pos"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "imgsrc.ru": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?imgsrc\\.ru",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dlp\\.imgsrc\\.ru\\/go\\/\\d+\\/\\d+\\/\\d+\\/([^&]*)"
    ],
    "forceRedirection": false
  },
  "boredpanda.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?boredpanda\\.com",
    "completeProvider": false,
    "rules": [
      "h"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "awstrack.me": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?awstrack\\.me",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?awstrack\\.me\\/.*\\/(https?.*?)\\/"
    ],
    "forceRedirection": false
  },
  "exactag.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?exactag\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?exactag\\.com.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "bahn.de": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bahn\\.de",
    "completeProvider": false,
    "rules": [
      "dbkanal_[0-9]{3}"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "disq.us": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?disq\\.us",
    "completeProvider": false,
    "rules": [
      "cuid"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?disq\\.us\\/.*?url=([^&]*)%3A"
    ],
    "forceRedirection": false
  },
  "anonym.to": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?anonym\\.to",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?anonym\\.to.*\\?([^&]*)"
    ],
    "forceRedirection": false
  },
  "moosejaw.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?moosejaw\\.com",
    "completeProvider": false,
    "rules": [
      "cm_lm",
      "cm_mmc",
      "webUserId",
      "spMailingID",
      "spUserID",
      "spJobID",
      "spReportId"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "spotify.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?spotify\\.com",
    "completeProvider": false,
    "rules": [
      "si"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "yandex": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?(?:yandex(?:\\.[a-z]{2,}){1,}|ya\\.ru)",
    "completeProvider": false,
    "rules": [
      "lr",
      "redircnt"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "healio.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?healio\\.com",
    "completeProvider": false,
    "rules": [
      "ecp",
      "m_bt"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "zoho.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?zoho\\.com",
    "completeProvider": false,
    "rules": [
      "iref"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "snapchat.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?snapchat\\.com",
    "completeProvider": false,
    "rules": [
      "sc_referrer",
      "sc_ua"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "medium.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?medium\\.com",
    "completeProvider": false,
    "rules": [
      "source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "swp.de": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?swp\\.de",
    "completeProvider": false,
    "rules": [
      "source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "wps.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?wps\\.com",
    "completeProvider": false,
    "rules": [
      "from"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "accounts.firefox.com": {
    "urlPattern": "^https?:\\/\\/(?:accounts\\.)?firefox\\.com",
    "completeProvider": false,
    "rules": [
      "context",
      "entrypoint",
      "form_type"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "support.mozilla.org": {
    "urlPattern": "^https?:\\/\\/(?:support\\.)?mozilla\\.org",
    "completeProvider": false,
    "rules": [
      "as"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "ClearURLsTest": {
    "urlPattern": "^https?:\\/\\/kevinroebert\\.gitlab\\.io\\/ClearUrls\\/void\\/index\\.html",
    "completeProvider": false,
    "rules": [
      "test"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/kevinroebert\\.gitlab\\.io\\/ClearUrls\\/void\\/index\\.html\\?url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "ClearURLsTestBlock": {
    "urlPattern": "^https?:\\/\\/kevinroebert\\.gitlab\\.io\\/ClearUrls\\/void\\/block\\.svg",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "ClearURLsTest2": {
    "urlPattern": "^https?:\\/\\/test\\.clearurls\\.xyz\\/void\\/index\\.html",
    "completeProvider": false,
    "rules": [
      "test"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/test\\.clearurls\\.xyz\\/void\\/index\\.html\\?url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "ClearURLsTestBlock2": {
    "urlPattern": "^https?:\\/\\/test\\.clearurls\\.xyz\\/void\\/block\\.svg",
    "completeProvider": true,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "diepresse.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?diepresse\\.com",
    "completeProvider": false,
    "rules": [
      "from",
      "xtor",
      "xt_at"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "newsletter.lidl.com": {
    "urlPattern": "^https?:\\/\\/newsletter\\.lidl(?:\\.[a-z]{2,}){1,}",
    "completeProvider": false,
    "rules": [
      "x"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "allegro.pl": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?allegro\\.pl",
    "completeProvider": false,
    "rules": [
      "reco_id",
      "sid"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "backcountry.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?backcountry\\.com",
    "completeProvider": false,
    "rules": [
      "CMP_SKU",
      "MER",
      "mr:trackingCode",
      "mr:device",
      "mr:adType",
      "iv_",
      "CMP_ID",
      "k_clickid",
      "rmatt",
      "INT_ID",
      "ti",
      "fl"
    ],
    "referralMarketing": [
      "mr:referralID"
    ],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "meetup.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?meetup\\.com",
    "completeProvider": false,
    "rules": [
      "rv",
      "_xtd"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "apple.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?apple\\.com",
    "completeProvider": false,
    "rules": [
      "app",
      "ign-itsc[a-z]+"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "alabout.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?alabout\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?alabout\\.com.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "newyorker.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?newyorker\\.com",
    "completeProvider": false,
    "rules": [
      "source",
      "bxid",
      "cndid",
      "esrc",
      "mbid"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "gog.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gog\\.com",
    "completeProvider": false,
    "rules": [
      "track_click",
      "link_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "tradedoubler.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tradedoubler\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tradedoubler\\.com.*(?:url|_td_deeplink)=([^&]*)"
    ],
    "forceRedirection": false
  },
  "theguardian.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?theguardian\\.com",
    "completeProvider": false,
    "rules": [
      "CMP"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "srvtrck.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?srvtrck\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?srvtrck\\.com.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "mysku.ru": {
    "urlPattern": "^https?:\\/\\/mysku\\.ru",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/mysku\\.ru.*r=([^&]*)"
    ],
    "forceRedirection": false
  },
  "admitad.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?admitad\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?admitad\\.com.*ulp=([^&]*)"
    ],
    "forceRedirection": false
  },
  "taobao.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?taobao\\.com",
    "completeProvider": false,
    "rules": [
      "price",
      "sourceType",
      "suid",
      "ut_sk",
      "un",
      "share_crt_v",
      "sp_tk",
      "cpp",
      "shareurl",
      "short_name",
      "app",
      "scm[_a-z-]*",
      "pvid",
      "algo_expid",
      "algo_pvid",
      "ns",
      "abbucket",
      "ali_refid",
      "ali_trackid",
      "acm",
      "utparam",
      "pos",
      "abtest",
      "trackInfo",
      "utkn",
      "scene",
      "mytmenu",
      "turing_bucket",
      "lygClk",
      "impid",
      "bftTag",
      "bftRwd",
      "spm",
      "_u"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "tmall.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tmall\\.com",
    "completeProvider": false,
    "rules": [
      "price",
      "sourceType",
      "suid",
      "ut_sk",
      "un",
      "share_crt_v",
      "sp_tk",
      "cpp",
      "shareurl",
      "short_name",
      "app",
      "scm[_a-z-]*",
      "pvid",
      "algo_expid",
      "algo_pvid",
      "ns",
      "abbucket",
      "ali_refid",
      "ali_trackid",
      "acm",
      "utparam",
      "pos",
      "abtest",
      "trackInfo",
      "user_number_id",
      "utkn",
      "scene",
      "mytmenu",
      "turing_bucket",
      "lygClk",
      "impid",
      "bftTag",
      "bftRwd",
      "activity_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "tb.cn": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tb\\.cn",
    "completeProvider": false,
    "rules": [
      "sm"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "bilibili.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bilibili\\.com",
    "completeProvider": false,
    "rules": [
      "callback",
      "spm_id_from",
      "from_source",
      "from",
      "seid",
      "mid",
      "share_source",
      "msource",
      "refer_from",
      "share_from",
      "share_medium",
      "share_source",
      "share_plat",
      "share_tag",
      "share_session_id",
      "timestamp",
      "unique_k",
      "vd_source",
      "plat_id",
      "buvid",
      "is_story_h5",
      "up_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/api\\.bilibili\\.com",
      "^https?:\\/\\/space\\.bilibili\\.com"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "m.bilibili.com": {
    "urlPattern": "^https?:\\/\\/m\\.bilibili\\.com",
    "completeProvider": false,
    "rules": [
      "bbid",
      "ts"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "live.bilibili.com": {
    "urlPattern": "^https?:\\/\\/live\\.bilibili\\.com",
    "completeProvider": false,
    "rules": [
      "visit_id",
      "session_id",
      "broadcast_type",
      "is_room_feed"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "marketscreener.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?marketscreener\\.com",
    "completeProvider": false,
    "rules": [
      "type_recherche",
      "mots",
      "noredirect",
      "RewriteLast",
      "lien",
      "aComposeInputSearch",
      "type_recherche_forum",
      "add_mots",
      "countview"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?marketscreener\\.com\\/search\\/\\?"
    ],
    "redirections": [],
    "forceRedirection": false
  },
  "marketscreener.com search": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?marketscreener\\.com\\/search\\/\\?",
    "completeProvider": false,
    "rules": [
      "type_recherche",
      "noredirect",
      "RewriteLast",
      "lien",
      "aComposeInputSearch",
      "type_recherche_forum",
      "countview"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "bestbuy.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bestbuy\\.com",
    "completeProvider": false,
    "rules": [
      "irclickid",
      "irgwc",
      "loc",
      "acampID",
      "mpid",
      "intl"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "digidip.net": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?digidip\\.net",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?digidip\\.net.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "tiktok.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tiktok\\.com",
    "completeProvider": false,
    "rules": [
      "u_code",
      "preview_pb",
      "_d",
      "timestamp",
      "user_id",
      "share_app_name",
      "share_iid",
      "source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "autoplus.fr": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?autoplus\\.fr",
    "completeProvider": false,
    "rules": [
      "idprob",
      "hash",
      "sending_id",
      "site_id",
      "dr_tracker"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "bigfishgames.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bigfishgames\\.com",
    "completeProvider": false,
    "rules": [
      "pc",
      "npc",
      "npv[0-9]+",
      "npi"
    ],
    "referralMarketing": [],
    "rawRules": [
      "\\?pc$"
    ],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "dpbolvw.net": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dpbolvw\\.net",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?dpbolvw\\.net.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "humblebundle.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?humblebundle\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [
      "partner"
    ],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "cafepedagogique.net": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cafepedagogique\\.net",
    "completeProvider": false,
    "rules": [
      "actId",
      "actCampaignType",
      "actSource"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "bloculus.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bloculus\\.com",
    "completeProvider": false,
    "rules": [
      "tl_[a-z_]+"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "mailpanion.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailpanion\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailpanion\\.com.*destination=([^&]*)"
    ],
    "forceRedirection": false
  },
  "signtr.website": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?signtr\\.website",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?signtr\\.website.*redirect=([^&]*)"
    ],
    "forceRedirection": false
  },
  "mailtrack.io": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailtrack\\.io",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mailtrack\\.io.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "zillow.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?zillow\\.com",
    "completeProvider": false,
    "rules": [
      "rtoken"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "realtor.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?realtor\\.com",
    "completeProvider": false,
    "rules": [
      "ex",
      "identityID",
      "MID",
      "RID"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "redfin.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?redfin\\.com",
    "completeProvider": false,
    "rules": [
      "riftinfo"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "epicgames.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?epicgames\\.com",
    "completeProvider": false,
    "rules": [
      "epic_affiliate",
      "epic_gameId"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "onet.pl": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?onet\\.pl",
    "completeProvider": false,
    "rules": [
      "srcc",
      "utm_v",
      "utm_medium",
      "utm_source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "allrecipes.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?allrecipes\\.com",
    "completeProvider": false,
    "rules": [
      "internalSource",
      "referringId",
      "referringContentType",
      "clickId"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "europe1.fr": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?europe1\\.fr",
    "completeProvider": false,
    "rules": [
      "xtor"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "effiliation.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?effiliation\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?effiliation\\.com.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "argos.co.uk": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?argos\\.co\\.uk",
    "completeProvider": false,
    "rules": [
      "istCompanyId",
      "istFeedId",
      "istItemId",
      "istBid",
      "clickOrigin"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "hlserve.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hlserve\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hlserve\\.com.*dest=([^&]*)"
    ],
    "forceRedirection": false
  },
  "thunderbird.net": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?thunderbird\\.net",
    "completeProvider": false,
    "rules": [
      "src"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "cnbc.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cnbc\\.com",
    "completeProvider": false,
    "rules": [
      "__source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "roblox.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?roblox\\.com",
    "completeProvider": false,
    "rules": [
      "refPageId"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "cell.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?cell\\.com",
    "completeProvider": false,
    "rules": [
      "_returnURL"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "academic.oup.com": {
    "urlPattern": "^https?:\\/\\/academic\\.oup\\.com",
    "completeProvider": false,
    "rules": [
      "redirectedFrom"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "flexlinkspro.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?flexlinkspro\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?flexlinkspro\\.com.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "agata88.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?agata88\\.com",
    "completeProvider": false,
    "rules": [
      "source"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "hs.fi": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?hs\\.fi",
    "completeProvider": false,
    "rules": [
      "share"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "yle.fi": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?yle\\.fi",
    "completeProvider": false,
    "rules": [
      "origin"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "ccbill.com": {
    "urlPattern": "^https?:\\/\\/refer\\.ccbill\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/refer\\.ccbill\\.com.*HTML=([^&]*)"
    ],
    "forceRedirection": false
  },
  "flipkart": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?flipkart\\.com",
    "completeProvider": false,
    "rules": [
      "otracker.?",
      "ssid",
      "[cilp]id",
      "marketplace",
      "store",
      "srno",
      "store",
      "ppn",
      "ppt",
      "fm",
      "collection-tab-name",
      "sattr\\[\\]",
      "p\\[\\]",
      "st"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "idealo.de": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?idealo\\.de",
    "completeProvider": false,
    "rules": [
      "sid",
      "src",
      "siteId",
      "lcb",
      "leadOutUrl",
      "offerListId",
      "osId",
      "cancelUrl",
      "disc"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "idealo-partner.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?idealo-partner\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?idealo-partner\\.com.*trg=([^&]*)"
    ],
    "forceRedirection": false
  },
  "teletrader.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?teletrader\\.com",
    "completeProvider": false,
    "rules": [
      "internal"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "webgains.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?webgains\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?webgains\\.com.*wgtarget=([^&]*)"
    ],
    "forceRedirection": false
  },
  "deeplearning.ai": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?deeplearning\\.ai",
    "completeProvider": false,
    "rules": [
      "ecid",
      "_hsmi",
      "_hsenc"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "getpocket.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?getpocket\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?getpocket\\.com.*url=([^&]*)"
    ],
    "forceRedirection": false
  },
  "gamespot.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?gamespot\\.com",
    "completeProvider": false,
    "rules": [
      "PostType",
      "ServiceType",
      "ftag",
      "UniqueID",
      "TheTime"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "tokopedia.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tokopedia\\.com",
    "completeProvider": false,
    "rules": [
      "src",
      "trkid",
      "whid"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [
      "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?tokopedia\\.com\\/promo.*r=([^&]*)"
    ],
    "forceRedirection": false
  },
  "wkorea.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?wkorea\\.com",
    "completeProvider": false,
    "rules": [
      "ddw",
      "ds_ch"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "eonline.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?eonline\\.com",
    "completeProvider": false,
    "rules": [
      "source",
      "medium",
      "content"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "reuters.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?reuters\\.com",
    "completeProvider": false,
    "rules": [
      "taid"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "app.adjust.com": {
    "urlPattern": "^https?:\\/\\/app\\.adjust\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [
      "^https?:\\/\\/app\\.adjust\\.com.*redirect=([^&]*)"
    ],
    "forceRedirection": false
  },
  "change.org": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?change\\.org",
    "completeProvider": false,
    "rules": [
      "source_location",
      "psf_variant",
      "share_intent"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "ceneo.pl": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?ceneo\\.pl",
    "completeProvider": false,
    "rules": [
      "tag"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "wired.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?wired\\.com",
    "completeProvider": false,
    "rules": [
      "intcid"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "alibaba cloud arms": {
    "urlPattern": "^https?:\\/\\/arms-retcode\\.aliyuncs\\.com",
    "completeProvider": false,
    "rules": [
      "pid",
      "uid",
      "tag",
      "release",
      "environment",
      "sample",
      "behavior",
      "enableSPA",
      "enableLinkTrace",
      "page",
      "begin",
      "c2",
      "c3",
      "success",
      "code",
      "msg",
      "api",
      "traceId",
      "pv_id",
      "flag",
      "sr",
      "vp",
      "ct",
      "_v",
      "sampling",
      "dl",
      "post_res"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "nikkei": {
    "urlPattern": "^https?://(?:[a-z0-9-]+\\.)*?nikkei\\.co(?:m|\\.jp)",
    "completeProvider": false,
    "rules": [
      "adid",
      "i_cid",
      "n_cid",
      "waad"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "weibo": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?weibo\\.(cn|com)",
    "completeProvider": false,
    "rules": [
      "weibo_id",
      "dt_dapp"
    ],
    "referralMarketing": [],
    "exceptions": [],
    "rawRules": [],
    "redirections": [],
    "forceRedirection": false
  },
  "fiverr.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?fiverr\\.com",
    "completeProvider": false,
    "rules": [
      "context_referrer",
      "source",
      "ref_ctx_id",
      "funnel"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "etsy.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?etsy\\.com",
    "completeProvider": false,
    "rules": [
      "click_key",
      "click_sum",
      "organic_search_click"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "magento.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?magento\\.com",
    "completeProvider": false,
    "rules": [
      "itm_campaign",
      "itm_medium",
      "itm_source",
      "itm_term"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "novinky.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?novinky\\.cz",
    "completeProvider": false,
    "rules": [
      "dop_ab_variant",
      "dop_source_zone_name",
      "dop_req_id",
      "dop_id",
      "source",
      "seq_no"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "aktualne.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?aktualne\\.cz",
    "completeProvider": false,
    "rules": [
      "dop_ab_variant",
      "dop_source_zone_name",
      "dop_req_id",
      "dop_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "seznamzpravy.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?seznamzpravy\\.cz",
    "completeProvider": false,
    "rules": [
      "dop_ab_variant",
      "dop_source_zone_name",
      "dop_req_id",
      "dop_id",
      "source",
      "seq_no"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "billiger.de": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?billiger\\.de",
    "completeProvider": false,
    "rules": [
      "log",
      "p"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "respekt.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?respekt\\.cz",
    "completeProvider": false,
    "rules": [
      "sznclid",
      "dop_ab_variant",
      "dop_source_zone_name",
      "dop_req_id",
      "dop_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "faei.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?faei\\.cz",
    "completeProvider": false,
    "rules": [
      "sznclid",
      "dop_ab_variant",
      "dop_source_zone_name",
      "dop_req_id",
      "dop_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "iprima.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?iprima\\.cz",
    "completeProvider": false,
    "rules": [
      "sznclid",
      "dop_ab_variant",
      "dop_source_zone_name",
      "dop_req_id",
      "dop_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "nova.cz": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?nova\\.cz",
    "completeProvider": false,
    "rules": [
      "sznclid",
      "dop_ab_variant",
      "dop_source_zone_name",
      "dop_req_id",
      "dop_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "duckduckgo": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?duckduckgo\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/duckduckgo\\.com\\/l\\/.*?uddg=([^&]+)"
    ],
    "forceRedirection": false
  },
  "mercadolibre": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?mercadolibre\\.com",
    "completeProvider": false,
    "rules": [
      "DEAL_ID",
      "L",
      "S",
      "T",
      "V",
      "pdp_filters",
      "position",
      "search_layout",
      "tracking_id",
      "type",
      "c_[_a-zA-Z]+",
      "me\\.[_a-zA-Z]+",
      "reco_[_a-zA-Z]+"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "quizlet": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?quizlet\\.com",
    "completeProvider": false,
    "rules": [
      "funnelUUID"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "bbc": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?bbc\\.com",
    "completeProvider": false,
    "rules": [
      "xtor",
      "at_[a-z_]+"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "airbnb": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?airbnb\\.(com|ae|ca|co\\.in|co\\.nz|co\\.uk|co\\.za|com\\.au|com\\.mt|com\\.sg|de|gy|ie)",
    "completeProvider": false,
    "rules": [
      "federated_search_id",
      "search_type",
      "source",
      "source_impression_id"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "partner-ads.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?partner-ads\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/.*?partner-ads\\.com\\/.*?htmlurl=([^&]+)"
    ],
    "forceRedirection": false
  },
  "kahoot.it": {
    "urlPattern": "^https?://(?:[a-z0-9-]+\\.)*?kahoot\\.it",
    "completeProvider": false,
    "rules": [
      "refer_method"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "href.li": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?href\\.li",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/href\\.li\\/\\?(http.+)"
    ],
    "forceRedirection": false
  },
  "adform.net": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?adform\\.net",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/track\\.adform\\.net\\/C\\/.*?ckurl=([^&]+)"
    ],
    "forceRedirection": false
  },
  "artefact.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?artefact\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/.*?artefact\\.com\\/trck\\/.*?deeplinkurl=([^&]+)"
    ],
    "forceRedirection": false
  },
  "awin1.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?awin1\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/.*?awin1\\.com\\/.*?ued=([^&]+)"
    ],
    "forceRedirection": false
  },
  "telekom.de": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?telekom\\.de",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/aaa\\.telekom\\.de\\/trck\\/.*?deeplinkurl=([^&]+)"
    ],
    "forceRedirection": false
  },
  "cc.loginfra.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?loginfra\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/cc\\.loginfra\\.com\\/.*?u=([^&]+)"
    ],
    "forceRedirection": false
  },
  "t.umblr.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?umblr\\.com",
    "completeProvider": false,
    "rules": [],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [
      "^https?:\\/\\/t\\.umblr\\.com\\/redirect\\?z=([^&]+)"
    ],
    "forceRedirection": false
  },
  "goodreads.com": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?goodreads\\.com",
    "completeProvider": false,
    "rules": [
      "from_search",
      "from_srp",
      "qid",
      "rank",
      "ac"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  },
  "sohu": {
    "urlPattern": "^https?:\\/\\/(?:[a-z0-9-]+\\.)*?sohu\\.com",
    "completeProvider": false,
    "rules": [
      "pvid",
      "scm"
    ],
    "referralMarketing": [],
    "rawRules": [],
    "exceptions": [],
    "redirections": [],
    "forceRedirection": false
  }
}

