export const PAGE1_SVG = `<svg class="page-svg" viewBox="0 0 360 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="wc-filter" x="-25%" y="-25%" width="150%" height="150%">
      <feTurbulence type="fractalNoise" baseFrequency="0.032" numOctaves="3" result="noise" seed="5"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- Sky -->
  <rect id="sky" x="0" y="0" width="360" height="295" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Sun -->
  <circle id="sun" cx="305" cy="58" r="32" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <g stroke="#2A1A1A" stroke-width="2.5" stroke-linecap="round" pointer-events="none">
    <line x1="305" y1="15" x2="305" y2="6"/>
    <line x1="328" y1="22" x2="335" y2="15"/>
    <line x1="340" y1="46" x2="349" y2="42"/>
    <line x1="340" y1="70" x2="349" y2="74"/>
    <line x1="282" y1="22" x2="275" y2="15"/>
    <line x1="270" y1="46" x2="261" y2="42"/>
    <line x1="270" y1="70" x2="261" y2="74"/>
  </g>

  <!-- Far mountain -->
  <polygon id="mtn-far" points="180,22 352,272 8,272" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <polygon id="snow-far" points="180,22 216,88 144,88" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Left mountain -->
  <polygon id="mtn-l" points="75,62 210,272 0,272" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <polygon id="snow-l" points="75,62 104,118 46,118" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Right mountain -->
  <polygon id="mtn-r" points="288,62 360,210 360,272 150,272" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <polygon id="snow-r" points="288,62 318,118 258,118" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Clouds -->
  <path id="cloud1" d="M48,86 Q52,68 72,70 Q74,56 96,58 Q118,50 122,68 Q138,64 138,80 Q134,94 112,92 Q106,100 84,98 Q60,102 48,90 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="cloud2" d="M188,58 Q192,46 206,48 Q210,38 224,40 Q238,34 240,48 Q250,46 252,56 Q250,66 236,65 Q232,72 216,70 Q200,73 188,64 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Ground -->
  <rect id="ground" x="0" y="272" width="360" height="248" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Road -->
  <path id="road" d="M166,288 Q161,370 156,520 L204,520 Q202,370 194,288 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Kulla crenellations -->
  <rect id="cr1" x="138" y="142" width="17" height="17" rx="2" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <rect id="cr2" x="160" y="142" width="17" height="17" rx="2" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <rect id="cr3" x="182" y="142" width="17" height="17" rx="2" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <rect id="cr4" x="204" y="142" width="17" height="17" rx="2" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <!-- Kulla top floor -->
  <rect id="kul-top" x="138" y="156" width="84" height="22" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <!-- Kulla wall -->
  <rect id="kul-wall" x="148" y="175" width="64" height="98" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <!-- Windows -->
  <path id="win1" d="M155,196 L155,222 Q163,234 171,222 L171,196 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="win2" d="M189,196 L189,222 Q197,234 205,222 L205,196 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <!-- Door -->
  <path id="door1" d="M164,273 L164,248 Q180,236 196,248 L196,273 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Left tree -->
  <polygon id="tr1a" points="56,272 70,228 84,272" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <polygon id="tr1b" points="52,256 70,206 88,256" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <rect id="tr1t" x="67" y="260" width="7" height="24" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Right tree -->
  <polygon id="tr2a" points="280,272 294,228 308,272" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <polygon id="tr2b" points="276,256 294,206 312,256" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <rect id="tr2t" x="291" y="260" width="7" height="24" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Flowers left -->
  <line x1="100" y1="292" x2="100" y2="316" stroke="#2A1A1A" stroke-width="1.5" pointer-events="none"/>
  <circle id="fl1p1" cx="100" cy="278" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl1p2" cx="110" cy="284" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl1p3" cx="110" cy="296" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl1p4" cx="100" cy="302" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl1p5" cx="90" cy="296" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl1p6" cx="90" cy="284" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl1" cx="100" cy="290" r="9" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Flowers right -->
  <line x1="262" y1="292" x2="262" y2="316" stroke="#2A1A1A" stroke-width="1.5" pointer-events="none"/>
  <circle id="fl2p1" cx="262" cy="278" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl2p2" cx="272" cy="284" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl2p3" cx="272" cy="296" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl2p4" cx="262" cy="302" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl2p5" cx="252" cy="296" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl2p6" cx="252" cy="284" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="fl2" cx="262" cy="290" r="9" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Folk border strip -->
  <rect id="bstrip" x="0" y="490" width="360" height="30" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1"/>
  <polygon id="bd1" points="18,505 30,493 42,505 30,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd2" points="54,505 66,493 78,505 66,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd3" points="90,505 102,493 114,505 102,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd4" points="126,505 138,493 150,505 138,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd5" points="162,505 174,493 186,505 174,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd6" points="198,505 210,493 222,505 210,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd7" points="234,505 246,493 258,505 246,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd8" points="270,505 282,493 294,505 282,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="bd9" points="306,505 318,493 330,505 318,517" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <text x="180" y="20" font-family="Georgia,serif" font-size="10" fill="#2A1A1A" text-anchor="middle" opacity="0.3" pointer-events="none">· FAQE 1 ·</text>
</svg>`;

export const PAGE2_SVG = `<svg class="page-svg" viewBox="0 0 360 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="wc-filter" x="-25%" y="-25%" width="150%" height="150%">
      <feTurbulence type="fractalNoise" baseFrequency="0.032" numOctaves="3" result="noise" seed="5"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect id="p2bg" x="0" y="0" width="360" height="520" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Border -->
  <rect x="14" y="14" width="332" height="492" fill="none" stroke="#2A1A1A" stroke-width="2" rx="10" pointer-events="none"/>

  <!-- Border diamonds top -->
  <polygon id="e-bt1" points="40,27 52,15 64,27 52,39" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bt2" points="82,27 94,15 106,27 94,39" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bt3" points="124,27 136,15 148,27 136,39" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bt4" points="166,27 178,15 190,27 178,39" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bt5" points="208,27 220,15 232,27 220,39" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bt6" points="250,27 262,15 274,27 262,39" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bt7" points="292,27 304,15 316,27 304,39" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Wings upper left -->
  <path id="e-wlu" d="M158,242 Q118,202 52,186 Q42,212 68,238 Q100,258 150,260 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <!-- Wings lower left -->
  <path id="e-wll" d="M146,268 Q88,278 38,308 Q55,344 97,328 Q128,312 150,290 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <path id="e-wlf1" d="M82,230 Q60,222 38,232 Q50,248 74,240 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="e-wlf2" d="M76,278 Q50,280 34,298 Q48,312 72,300 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Wings upper right -->
  <path id="e-wru" d="M202,242 Q242,202 308,186 Q318,212 292,238 Q260,258 210,260 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <!-- Wings lower right -->
  <path id="e-wrl" d="M214,268 Q272,278 322,308 Q305,344 263,328 Q232,312 210,290 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <path id="e-wrf1" d="M278,230 Q300,222 322,232 Q310,248 286,240 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="e-wrf2" d="M284,278 Q310,280 326,298 Q312,312 288,300 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Body -->
  <ellipse id="e-body" cx="180" cy="296" rx="38" ry="68" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Necks -->
  <path id="e-nl" d="M163,240 Q144,216 120,200 Q134,182 153,210 Q170,196 172,238 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <path id="e-nr" d="M197,240 Q216,216 240,200 Q226,182 207,210 Q190,196 188,238 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Heads -->
  <circle id="e-hl" cx="105" cy="182" r="40" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <circle id="e-hr" cx="255" cy="182" r="40" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Eyes -->
  <circle id="e-el" cx="96" cy="174" r="10" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="e-er" cx="264" cy="174" r="10" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle cx="96" cy="174" r="5" fill="#1A1A1A" pointer-events="none"/>
  <circle cx="264" cy="174" r="5" fill="#1A1A1A" pointer-events="none"/>
  <circle cx="98" cy="172" r="2" fill="white" pointer-events="none"/>
  <circle cx="266" cy="172" r="2" fill="white" pointer-events="none"/>

  <!-- Beaks -->
  <path id="e-bl" d="M72,172 L54,183 L72,194 Q80,190 82,183 Q80,176 72,172 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="e-br" d="M288,172 L306,183 L288,194 Q280,190 278,183 Q280,176 288,172 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Crowns -->
  <path id="e-cl" d="M74,148 L74,160 L85,152 L91,160 L97,152 L103,160 L109,152 L120,160 L120,148 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="e-cjl" cx="97" cy="145" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="e-cr2" d="M224,148 L224,160 L235,152 L241,160 L247,152 L253,160 L259,152 L270,160 L270,148 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="e-cjr" cx="247" cy="145" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Shield -->
  <path id="e-shield" d="M162,258 Q180,250 198,258 L196,314 Q188,332 180,336 Q172,332 164,314 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Tail -->
  <path id="e-tail" d="M156,352 Q180,415 204,352 Q196,390 188,406 Q184,414 180,416 Q176,414 172,406 Q164,390 156,352 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Legs -->
  <rect id="e-ll" x="158" y="352" width="14" height="38" rx="4" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <rect id="e-rl" x="188" y="352" width="14" height="38" rx="4" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Talons (deco) -->
  <path d="M158,388 Q146,396 140,406" fill="none" stroke="#2A1A1A" stroke-width="3" stroke-linecap="round" pointer-events="none"/>
  <path d="M162,392 Q156,404 154,412" fill="none" stroke="#2A1A1A" stroke-width="3" stroke-linecap="round" pointer-events="none"/>
  <path d="M168,392 Q168,406 168,414" fill="none" stroke="#2A1A1A" stroke-width="3" stroke-linecap="round" pointer-events="none"/>
  <path d="M202,388 Q214,396 220,406" fill="none" stroke="#2A1A1A" stroke-width="3" stroke-linecap="round" pointer-events="none"/>
  <path d="M198,392 Q204,404 206,412" fill="none" stroke="#2A1A1A" stroke-width="3" stroke-linecap="round" pointer-events="none"/>
  <path d="M192,392 Q192,406 192,414" fill="none" stroke="#2A1A1A" stroke-width="3" stroke-linecap="round" pointer-events="none"/>

  <!-- Border diamonds bottom -->
  <polygon id="e-bb1" points="40,493 52,481 64,493 52,505" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bb2" points="82,493 94,481 106,493 94,505" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bb3" points="124,493 136,481 148,493 136,505" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bb4" points="166,493 178,481 190,493 178,505" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bb5" points="208,493 220,481 232,493 220,505" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bb6" points="250,493 262,481 274,493 262,505" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="e-bb7" points="292,493 304,481 316,493 304,505" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <text x="180" y="476" font-family="Georgia,serif" font-size="11" fill="#2A1A1A" text-anchor="middle" opacity="0.3" pointer-events="none">· SHQIPONJA ·</text>
</svg>`;

export const PAGE3_SVG = `<svg class="page-svg" viewBox="0 0 360 520" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
  <defs>
    <filter id="wc-filter" x="-25%" y="-25%" width="150%" height="150%">
      <feTurbulence type="fractalNoise" baseFrequency="0.032" numOctaves="3" result="noise" seed="5"/>
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="9" xChannelSelector="R" yChannelSelector="G"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect id="p3bg" x="0" y="0" width="360" height="520" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <!-- Stage -->
  <rect id="p3stage" x="0" y="438" width="360" height="82" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Border -->
  <rect x="10" y="10" width="340" height="505" fill="none" stroke="#2A1A1A" stroke-width="2" rx="10" pointer-events="none"/>
  <circle id="p3c1" cx="18" cy="18" r="7" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3c2" cx="342" cy="18" r="7" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3c3" cx="18" cy="502" r="7" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3c4" cx="342" cy="502" r="7" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Left arm -->
  <path id="p3al" d="M128,198 Q103,172 82,140 Q93,130 98,140 Q120,168 136,202 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <circle id="p3hl" cx="78" cy="132" r="13" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Right arm -->
  <path id="p3ar" d="M232,198 Q257,172 278,140 Q267,130 262,140 Q240,168 224,202 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <circle id="p3hr" cx="282" cy="132" r="13" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Flower -->
  <circle id="p3fp1" cx="78" cy="100" r="8" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3fp2" cx="91" cy="107" r="8" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3fp3" cx="91" cy="123" r="8" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3fp4" cx="78" cy="130" r="8" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3fp5" cx="65" cy="123" r="8" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3fp6" cx="65" cy="107" r="8" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3fc" cx="78" cy="115" r="11" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Head -->
  <circle id="p3head" cx="180" cy="108" r="50" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <!-- Hair & braids -->
  <path id="p3hair" d="M136,90 Q140,62 180,57 Q220,62 224,90 Q212,72 180,68 Q148,72 136,90 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="p3braL" d="M136,98 Q118,126 114,166 Q125,168 130,142 Q142,114 148,100 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="p3braR" d="M224,98 Q242,126 246,166 Q235,168 230,142 Q218,114 212,100 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Headpiece -->
  <path id="p3hpiece" d="M146,74 Q180,54 214,74 Q208,62 180,57 Q152,62 146,74 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3g1" cx="162" cy="64" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3g2" cx="180" cy="59" r="7" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <circle id="p3g3" cx="198" cy="64" r="6" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Face (deco only) -->
  <circle cx="165" cy="103" r="8" fill="white" stroke="#2A1A1A" stroke-width="1.5" pointer-events="none"/>
  <circle cx="195" cy="103" r="8" fill="white" stroke="#2A1A1A" stroke-width="1.5" pointer-events="none"/>
  <circle cx="165" cy="105" r="4" fill="#1A1A1A" pointer-events="none"/>
  <circle cx="195" cy="105" r="4" fill="#1A1A1A" pointer-events="none"/>
  <circle cx="167" cy="103" r="1.8" fill="white" pointer-events="none"/>
  <circle cx="197" cy="103" r="1.8" fill="white" pointer-events="none"/>
  <path d="M168,122 Q180,132 192,122" fill="none" stroke="#2A1A1A" stroke-width="2.5" stroke-linecap="round" pointer-events="none"/>
  <circle cx="177" cy="115" r="1.5" fill="#2A1A1A" pointer-events="none"/>
  <circle cx="183" cy="115" r="1.5" fill="#2A1A1A" pointer-events="none"/>

  <!-- Cheeks -->
  <circle id="p3ckL" cx="150" cy="116" r="14" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1"/>
  <circle id="p3ckR" cx="210" cy="116" r="14" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1"/>

  <!-- Neck -->
  <rect id="p3neck" x="168" y="153" width="24" height="28" rx="5" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Blouse -->
  <path id="p3blouse" d="M148,176 Q122,182 115,222 L245,222 Q238,182 212,176 L196,168 Q180,163 164,168 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <path id="p3btrim" d="M115,214 Q180,226 245,214 L245,224 Q180,236 115,224 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <rect id="p3emb1" x="152" y="180" width="14" height="14" rx="3" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <rect id="p3emb2" x="173" y="180" width="14" height="14" rx="3" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <rect id="p3emb3" x="194" y="180" width="14" height="14" rx="3" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Skirt -->
  <path id="p3skirt" d="M115,222 L78,420 L282,420 L245,222 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <path id="p3sband" d="M97,315 Q180,326 263,315 L261,336 Q180,347 99,336 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <path id="p3ruffle" d="M76,415 Q180,430 284,415 L284,436 Q180,452 76,436 Z" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polyline points="79,418 92,404 105,418 118,404 131,418 144,404 157,418 170,404 183,418 196,404 209,418 222,404 235,418 248,404 261,418 274,404 281,414" fill="none" stroke="#2A1A1A" stroke-width="2" pointer-events="none"/>
  <polygon id="p3sd1" points="130,344 140,334 150,344 140,354" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="p3sd2" points="157,344 167,334 177,344 167,354" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="p3sd3" points="183,344 193,334 203,344 193,354" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>
  <polygon id="p3sd4" points="210,344 220,334 230,344 220,354" data-c style="fill:white;stroke:#2A1A1A;stroke-width:1.5"/>

  <!-- Legs & shoes -->
  <rect id="p3legL" x="148" y="420" width="28" height="58" rx="5" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <rect id="p3legR" x="184" y="420" width="28" height="58" rx="5" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <ellipse id="p3shL" cx="162" cy="480" rx="24" ry="11" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>
  <ellipse id="p3shR" cx="198" cy="480" rx="24" ry="11" data-c style="fill:white;stroke:#2A1A1A;stroke-width:2"/>

  <text x="180" y="510" font-family="Georgia,serif" font-size="11" fill="#2A1A1A" text-anchor="middle" opacity="0.3" pointer-events="none">· VAJZA SHQIPTARE ·</text>
</svg>`;
