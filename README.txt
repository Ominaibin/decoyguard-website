DecoyGuard — Cinematic public website redesign

Open index.html in a browser to preview. All assets are in assets/.

Design: Cloudsurf-inspired spacious vertical sections combined with the user's cinematic navy/yellow/orange visual reference.

This is a public informational website only. No SOC interface links, dashboard login, or authentication secrets are included.

Before publishing:
- Replace team initials with approved portrait photographs.
- Connect the release button only after publishing and verifying the actual installation package.
- Verify installation instructions against the release and provide a full installation guide.
- Replace demonstration-card photography with approved images if desired.

The release button currently opens explanatory installation notes; it does not download an unverified file.

Latest changes: Puteri Nia portrait replaced; right-side collapsible menu added for Test Environments, Download and Get Started.

Commercial integration (28 October 2026):
- About explanation and video sit side by side; stack below 850px.
- Our Team markup and existing styling are unchanged.
- Native controls, inline mobile playback, click-to-play, no autoplay.
- preload=none avoids downloading the MP4 on initial page load.
- MP4 is a compressed H.264/AAC web copy with fast-start metadata.
- Poster is an actual frame from the supplied commercial.
- Upload index.html AND the new MP4/poster in assets to your existing host.
- No new public links to the private SOC interface were added.

About + separate test pages (29 October 2026)
- About heading and introduction now align at the top beside an unboxed film.
- The commercial restores its poster after playback ends.
- Our Team section and existing assets remain byte-for-byte unchanged.
- Test cards link to juice-shop.html and banking.html.
- Public demo gateway addresses are not known yet, so launch buttons show
  unavailable rather than linking to localhost or invented destinations.

CONNECT THE DEMOS
Edit site-config.js and replace the two empty strings with the actual public
protected gateway URLs supplied by your deployed DecoyGuard configuration.
Do not use direct decoy ports or private administration addresses.
Once configured, each page's launch button navigates to its matching gateway
in the same tab. 'Demo link available' means a URL is configured, not a live
health check. No network probe is made by these static pages.

UPDATE YOUR EXISTING HOST
Upload the contents of website/ at the same repository level as the existing
index.html. Include juice-shop.html, banking.html, site-config.js,
demo-launch.js, index.html and the assets directory. Preserve your configured
public gateway URLs when replacing site-config.js in future releases.
This is a source package; no public deployment was performed here.

Validation: relative page/asset/fragment links, script syntax and configured/
unconfigured launch behavior checked. Our Team and original assets compared
against the supplied ZIP. Full browser playback/responsive QA was not performed.

Restyled player: film-player.css and film-player.js are required alongside index.html. Custom controls enhance a native video element; keyboard controls and native fallback retained. Controls/state logic checked; visual browser verification remains.

Download completion / live demo links
- site-config.js now points to juiceshop.decoyguard.com and banking.decoyguard.com.
- download.html offers releases/DecoyGuard-source.zip and its SHA-256 checksum.
- The source package is a fresh install, not a VPS backup. Saved mirrors, accounts,
  evidence logs, databases, image archives and deployment state are excluded.
- Upload download.html, site-config.js, index.html and the complete releases/
  directory to the landing-page repository. Retain the existing other assets/pages.
- Fresh-install Docker validation remains pending; source/config checks passed.
