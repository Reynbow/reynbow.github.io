---
layout: page
permalink: /org-chart
css:
  - "/css/custom.css"
---

<center><a href="https://idleanimation.com/"><img src="/img/banner_main.png" alt="Idle Animation"></a></center>

<style>
/* Org chart modern styles - scoped to this page */
.org-section { margin-top: 24px; }
.org-title { font-size: 26px; font-weight: 800; margin: 8px 0 16px; }
.org-sub { color: #a8aecb; font-size: 14px; margin-bottom: 20px; }

.org-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}

.org-card {
  background: #1f2332;
  border: 1px solid #2b2f44;
  border-radius: 8px;
  padding: 18px 16px;
  text-align: center;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}
.org-card:hover {
  transform: translateY(-2px);
  border-color: #3a4161;
  box-shadow: 0 6px 16px rgba(0,0,0,0.35);
}

.org-avatar {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #2b2f44;
  background: #262a3e;
}

.org-role {
  margin-top: 12px;
  font-size: 12px;
  letter-spacing: .6px;
  text-transform: uppercase;
  color: #EC466E; /* hot pink accent */
  font-weight: 700;
}

.org-name {
  margin-top: 6px;
  font-size: 18px;
  font-weight: 700;
}
</style>

<section class="org-section">
  <div class="org-title">Org Chart</div>
  <div class="org-sub">Core crew keeping Idle Animation running.</div>

  <div class="org-grid">
    <div class="org-card">
      <img class="org-avatar" src="/img/photos/reynbow.png" alt="Reynbow">
      <div class="org-role">CEO</div>
      <div class="org-name">REYNBOW</div>
    </div>

    <div class="org-card">
      <img class="org-avatar" src="/img/photos/brenton.png" alt="Brenton">
      <div class="org-role">COO</div>
      <div class="org-name">BRENTON</div>
    </div>

    <div class="org-card">
      <img class="org-avatar" src="/img/photos/pac.png" alt="PAC">
      <div class="org-role">CFO</div>
      <div class="org-name">PAC</div>
    </div>

    <div class="org-card">
      <img class="org-avatar" src="/img/photos/jon.png" alt="Jon">
      <div class="org-role">GM of People & Culture</div>
      <div class="org-name">JON</div>
    </div>

    <div class="org-card">
      <img class="org-avatar" src="/img/photos/keegan.png" alt="Keegan">
      <div class="org-role">Custodian</div>
      <div class="org-name">KEEGAN</div>
    </div>
  </div>
</section>