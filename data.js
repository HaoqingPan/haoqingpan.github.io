/* ============================================================
   Site content. Edit this file to change text, contact info
   or projects. Images live in assets/img/.
   Each text field has an English (en) and Chinese (zh) version.
   ============================================================ */

window.SITE = {
  name: { en: "Haoqing (Justin) Pan", zh: "潘昊卿 Haoqing (Justin) Pan" },
  owner: "Haoqing (Justin) Pan",
  contact: {
    email: "1425632349phq@gmail.com",
    phone: "+1 614-282-1568",
    // Paste your LinkedIn profile URL and WeChat ID here.
    // Empty values are hidden on the site.
    linkedin: "",
    wechat: ""
  },
  modes: {
    industrial: {
      label: { en: "Industrial Designer", zh: "工业设计师" },
      short: { en: "Industrial", zh: "工业设计" },
      tagline: {
        en: "Collectible, playable toys and products, from research and sketches to 3D models and prototypes.",
        zh: "设计可收藏、好玩的玩具与产品，从调研、草图一路做到 3D 建模和实物原型。"
      }
    },
    game: {
      label: { en: "Game Designer", zh: "游戏设计师" },
      short: { en: "Game", zh: "游戏设计" },
      tagline: {
        en: "Game environments, 3D assets and playable prototypes.",
        zh: "游戏场景、3D 资产与可玩的游戏原型。"
      }
    },
    art: {
      label: { en: "Artist", zh: "绘画" },
      short: { en: "Art", zh: "绘画" },
      tagline: {
        en: "Watercolor, ink and pen drawings made in my free time.",
        zh: "业余时间创作的水彩、水墨和钢笔画。"
      }
    }
  },
  about: {
    en: [
      "I design collectible, playable toys, backed by a complete industrial design process. I've loved monsters since I was a kid, and creating my own is the reason I chose industrial design.",
      "I find opportunities through user research such as surveys, interviews and observation, develop them through sketching, 3D modeling and physical prototyping, and deliver designs with materials, processes and cost in mind. 3D modeling is my strongest skill, from hard-surface modeling and engineering drawings to final renders.",
      "I'm now a graduate student at SCAD, studying industrial design alongside game development to learn character design and player psychology for building better articulated toys."
    ],
    zh: [
      "我专注于设计可收藏、可玩性强的玩具，并以完整的工业设计流程作为支撑。我从小就喜欢怪兽，创造属于自己的怪兽，正是我选择工业设计的原因。",
      "我通过问卷、访谈和观察等用户调研发现机会，再经过草图、3D 建模和实物原型来推进设计，最终交付考虑了材料、工艺和成本的方案。3D 建模是我最擅长的部分，从硬表面建模、工程图到最终渲染都能完成。",
      "我目前在 SCAD 读研究生，同时学习工业设计和游戏开发，希望借助角色设计和玩家心理的知识，做出更好的可动玩具。"
    ]
  },
  education: [
    { school: { en: "Savannah College of Art and Design (SCAD)", zh: "萨凡纳艺术与设计学院（SCAD）" },
      degree: { en: "M.A. Industrial Design · M.A. Game Development", zh: "工业设计硕士 · 游戏开发硕士" },
      years: { en: "2024 – 2027 (expected)", zh: "2024 – 2027（预计）" } },
    { school: { en: "Columbus College of Art & Design (CCAD)", zh: "哥伦布艺术与设计学院（CCAD）" },
      degree: { en: "B.F.A. Industrial Design, cum laude", zh: "工业设计学士，优等毕业（Cum Laude）" },
      years: { en: "2020 – 2024", zh: "2020 – 2024" } }
  ],
  skills: [
    { h: { en: "3D and visualization", zh: "3D 与可视化" }, v: "SolidWorks · Rhino · Maya · KeyShot · Substance 3D Painter · Unreal Engine 5" },
    { h: { en: "Prototyping", zh: "原型制作" }, v: { en: "Cardboard mockups · 3D printing · CNC · physical models and finishing", zh: "纸板模型 · 3D 打印 · CNC · 实物模型与表面处理" } },
    { h: { en: "Design process", zh: "设计流程" }, v: { en: "User research · market analysis · concept development · sketching", zh: "用户调研 · 市场分析 · 概念发展 · 草图" } },
    { h: { en: "Languages", zh: "语言" }, v: { en: "Chinese (native) · English · Japanese (conversational)", zh: "中文（母语）· 英语 · 日语（日常会话）" } }
  ]
};

/* team: "solo" or "team".  credit: who did what.
   Every image is shown with the project's copyright line. */
window.PROJECTS = [
  /* ---------------- INDUSTRIAL ---------------- */
  {
    id: "orato", cat: "industrial", year: 2025, team: "team", cover: "orato-01.jpg",
    title: { en: "Orato", zh: "Orato" },
    sub: { en: "Tactile companion for public speaking", zh: "演讲焦虑触感辅助器" },
    context: { en: "SCAD · IDUS 713", zh: "SCAD · IDUS 713" },
    credit: {
      en: "2-person team: Haoqing Pan and Yile Wu. My role: research, concepts, CAD, rendering and physical prototypes.",
      zh: "2 人团队：Haoqing Pan、Yile Wu。我负责：调研、概念、CAD 建模、渲染和实物原型。"
    },
    copyright: "© 2026 Haoqing (Justin) Pan & Yile Wu",
    sections: [
      { h: { en: "The problem", zh: "问题" },
        p: { en: "Right before a talk, one hand holds the clicker and the other has nowhere to go. Speakers manage slides, nerves and the audience at once, but remotes only help with slides. We asked: what does a speaker's hand need to do, and can one object support all of it?",
             zh: "演讲开始前，一只手拿着翻页笔，另一只手无处安放。演讲者要同时应付幻灯片、紧张情绪和观众，但翻页笔只解决了翻页。我们的问题是：演讲者的手需要做什么？能不能用一件产品全部满足？" } },
      { h: { en: "Research", zh: "调研" },
        p: { en: "42 survey responses, 6 classroom participants and 8 public talks. 81% of respondents reported nervousness; observations recorded note-holding, finger-rubbing and pointing. Remotes handle the task and fidget tools handle nerves, but nothing does both. These findings became seven design criteria, from finding controls without looking to discreet, natural handling.",
             zh: "共收集 42 份问卷、观察 6 位课堂参与者和 8 场公开演讲。81% 的受访者表示会紧张；观察中记录到握着笔记、搓手指和指点等动作。翻页笔解决任务，解压玩具缓解紧张，但没有产品能同时做到两点。这些发现最终整理成 7 条设计准则，比如不用看就能找到按键、使用时自然不显眼等。" } },
      { h: { en: "Concepts", zh: "概念发展" },
        p: { en: "Each direction supported one hand action and blocked another: a handle was clear but tool-like, a palm form calmed but blocked gestures, a ring kept the hand free. The answer was to combine rather than choose: a ring for control and a squeezable core, leaving the hand free to gesture.",
             zh: "每个方向都只满足一种手部动作，同时妨碍另一种：手柄形态清晰但像工具，掌握形态能安抚情绪却妨碍手势，戒指形态则让手保持自由。最终方案不是三选一，而是组合：戒指负责操控，可挤压的核心用来缓解紧张，手仍然可以自由做手势。" },
        imgs: ["orato-hd-concept-1.jpg", "orato-hd-concept-2.jpg", "orato-hd-concept-3.jpg", "orato-hd-concept-4.jpg"] },
      { h: { en: "Prototypes and grip checks", zh: "原型与握持测试" },
        p: { en: "Each model answered one question and changed the next step. Form comparisons kept the waisted body, cap top and egg grip; a full-scale model checked thumb reach and control placement; a double-scale model helped examine ring joints and contact points.",
             zh: "每个模型回答一个问题，并决定下一步怎么做。形态对比模型确定了收腰的主体、帽形顶部和蛋形握把；等比例模型检查了拇指够不够得到、按键放在哪里；两倍放大模型用来研究戒指连接处和接触点。" },
        imgs: ["orato-hd-proto-1.jpg", "orato-hd-proto-2.jpg", "orato-hd-proto-3.jpg", "orato-hd-proto-4.jpg", "orato-hd-proto-5.jpg", "orato-hd-proto-6.jpg"] },
      { h: { en: "Final concept", zh: "最终方案" },
        p: { en: "One object for slides, nerves and gestures. The top handles slide control, the middle gives contact and feedback, and the lower part is for grip and squeezing. Materials pair a hard outside with a soft inside: ceramic and silicone, with rubber or leather options. It comes in male and female versions with a charging dock.",
             zh: "一件产品同时照顾翻页、紧张和手势。顶部负责翻页控制，中部提供触感和反馈，下部用来握持和挤压。材料采用外硬内软的组合：陶瓷加硅胶，也可选橡胶或皮革。设计有男款和女款，并配有充电底座。" },
        imgs: ["orato-hd-final-1.jpg", "orato-hd-final-2.jpg", "orato-hd-final-3.jpg", "orato-hd-final-4.jpg", "orato-hd-final-5.jpg", "orato-hd-final-6.jpg", "orato-hd-final-7.jpg"] }
    ]
  },
  {
    id: "orbit-facet", cat: "industrial", year: 2026, team: "solo", cover: "orbit-facet-01.jpg",
    title: { en: "Orbit & Facet", zh: "Orbit & Facet" },
    sub: { en: "Compact single-serve coffee maker", zh: "小型单杯咖啡机" },
    context: { en: "SCAD · IDUS 718", zh: "SCAD · IDUS 718" },
    credit: { en: "Individual project. Design by Haoqing (Justin) Pan.", zh: "个人项目。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Who it's for", zh: "目标用户" },
        p: { en: "The target user is the BOBO (bourgeois bohemian), for whom what they buy is a statement of values. They want natural, handcrafted and flexible; they avoid loud, generic and fake-green. After mapping 20 single-serve machines by price and style, I found a gap: mid-price, design-led and simple to use.",
             zh: "目标用户是 BOBO 族（布尔乔亚波西米亚人），对他们来说，买什么东西就代表自己的价值观。他们喜欢自然、手工感和灵活，不喜欢张扬、千篇一律和假环保。我按价格和风格对比了 20 款单杯咖啡机，发现市场空白：中等价位、注重设计、使用简单。" } },
      { h: { en: "From 40 sketches to 2 directions", zh: "从 40 张草图到 2 个方向" },
        p: { en: "BOBO values became a design language: minimal, function-driven, friendly. I drew 40+ quick sketches, mapped by how the lid, tank and cup are arranged, then scored each option on craftsmanship, simplicity, adaptability, sustainability and artistry. The two strongest became Orbit and Facet.",
             zh: "我把 BOBO 族的价值观转化为设计语言：极简、功能导向、亲切。先画了 40 多张快速草图，按壶盖、水箱和杯子的布局分类，再从工艺感、简洁、适应性、可持续和艺术性五个方面打分，得分最高的两个方案发展成了 Orbit 和 Facet。" },
        imgs: ["orbit-facet-02.jpg", "orbit-facet-hd-sketch-1.jpg", "orbit-facet-hd-sketch-2.jpg", "orbit-facet-hd-sketch-3.jpg"] },
      { h: { en: "Cardboard first, then CAD", zh: "先做纸板模型，再做 CAD" },
        p: { en: "One design language, two expressions: Orbit with connected curves, Facet with organized geometry. Full-size cardboard models came before CAD. The cardboard test showed Orbit's lever hit the round head, so I redesigned the lever before modeling.",
             zh: "同一套设计语言，两种表达：Orbit 用连贯的曲线，Facet 用规整的几何切面。建模之前先做了等大的纸板模型。纸板测试发现 Orbit 的拉杆会撞到圆形的机头，所以我在建模前重新设计了拉杆。" },
        imgs: ["orbit-facet-hd-card-1.jpg", "orbit-facet-hd-card-2.jpg", "orbit-facet-hd-card-3.jpg"] },
      { h: { en: "Final concepts", zh: "最终方案" },
        p: { en: "Calm objects that belong on the counter, not loud appliances. Design intentions: a minimal form, clear interactions, and accessible cleaning and cord storage.",
             zh: "安静地放在台面上的物件，而不是吵闹的家电。设计重点：极简的造型、清晰直观的操作、方便清洁和收纳电线。" },
        imgs: ["orbit-facet-08.jpg", "orbit-facet-09.jpg", "orbit-facet-10.jpg"] },
      { h: { en: "Structure and manufacturing", zh: "结构与制造" },
        p: { en: "From form language to parts, with a material and process for each: ABS housing and spout (injection molding), clear Tritan tank (blow molding), EPDM buttons (compression molding) and a 304 stainless tray (sheet-metal stamping). Both concepts were developed in SolidWorks with dimensioned drawings.",
             zh: "从造型语言落实到每个零件，并确定各自的材料和工艺：ABS 外壳和出水口（注塑）、透明 Tritan 水箱（吹塑）、EPDM 按键（模压）、304 不锈钢接水盘（钣金冲压）。两个方案都在 SolidWorks 中完成建模，并出了带尺寸的工程图。" },
        imgs: ["orbit-facet-11.jpg", "orbit-facet-12.jpg", "orbit-facet-13.jpg", "orbit-facet-hd-drawing-orbit.jpg", "orbit-facet-hd-drawing-facet.jpg"] }
    ]
  },
  {
    id: "twig", cat: "industrial", year: 2026, team: "solo", cover: "twig-hd-01.jpg",
    title: { en: "Twig", zh: "Twig" },
    sub: { en: "Moldable phone stand", zh: "可塑形手机支架" },
    context: { en: "SCAD · IDUS 718", zh: "SCAD · IDUS 718" },
    credit: { en: "Individual project. Design by Haoqing (Justin) Pan.", zh: "个人项目。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Problem and goal", zh: "问题与目标" },
        p: { en: "Commuters use their phones the whole ride home and need something that frees their hands so they can rest. Fixed stands are steady but rigid; flexible ones move but look generic. Goals: hold the phone securely with ports clear, bend by hand and stay in place, fold small enough to carry, and survive repeated bending.",
             zh: "通勤族回家路上一直在用手机，需要一个能解放双手、让人休息的支架。固定式支架稳但死板，软管式支架灵活但外观普通。设计目标：牢牢夹住手机且不挡接口，可以用手掰成任意形状并保持住，折叠后小到能随身带，经得起反复弯折。" } },
      { h: { en: "Concepts", zh: "概念" },
        p: { en: "Three ways to say 'bend me', compared on adjusting, folding and look: continuous arms, twists and loops, and spirals and segments. I chose continuous arms, the simplest of the three: easy to read, bend and fold.",
             zh: "用三种方式表达“掰我”，并从调节、折叠和外观三方面对比：连续手臂、扭转与圈环、螺旋与分节。最终选择了最简单的连续手臂方案：一看就懂，容易弯折，也方便收纳。" },
        imgs: ["twig-02.jpg", "twig-hd-sketch-1.jpg", "twig-hd-sketch-2.jpg", "twig-hd-sketch-3.jpg"] },
      { h: { en: "Models and CAD", zh: "模型与 CAD" },
        p: { en: "Models showed how the arms meet the phone and the desk. The first wrap loosened and caused wobble; the revised wrap improved the fit. CAD then solved the clamp and central joint.",
             zh: "模型展示了手臂如何接触手机和桌面。第一版缠绕方式会松动、导致晃动，改进后的缠绕方式贴合度更好。之后在 CAD 中解决了夹子和中心关节的结构。" },
        imgs: ["twig-hd-proto-1.jpg", "twig-hd-proto-2.jpg", "twig-hd-proto-3.jpg", "twig-05.jpg", "twig-hd-exploded.jpg"] },
      { h: { en: "Structure and testing", zh: "结构与测试" },
        p: { en: "An ABS clamp with a spring, a central joint, steel-wire cores and a PVC coating with rounded tips. It holds the phone, bends by hand and folds to carry. Testing showed it stands steady only within a limited angle range, so the next step is stiffer arms or a wider stance, then durability tests.",
             zh: "结构包括带弹簧的 ABS 夹子、中心关节、钢丝芯和带圆头的 PVC 包覆层。它可以夹住手机、用手塑形并折叠携带。测试发现只有在一定角度范围内才能稳定站立，下一步会加硬手臂或加宽支撑，然后做耐久测试。" },
        imgs: ["twig-hd-04.jpg", "twig-hd-05.jpg", "twig-hd-02.jpg", "twig-hd-03.jpg", "twig-09.jpg"] }
    ]
  },
  {
    id: "cross-black-king", cat: "industrial", year: 2024, team: "solo", cover: "cross-black-king-01.jpg",
    title: { en: "Cross Black King", zh: "Cross Black King" },
    sub: { en: "Collectible kaiju action figure", zh: "可收藏怪兽可动人偶" },
    context: { en: "CCAD · Senior thesis", zh: "CCAD · 本科毕业设计" },
    credit: { en: "Individual project. Design by Haoqing (Justin) Pan.", zh: "个人项目。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Idea", zh: "创意" },
        p: { en: "My senior thesis at CCAD: an action figure based on my own monster design. Cross Black King draws on the classic kaiju Black King and mecha-kaiju such as Mechagodzilla, reimagined as a robot kaiju built with human technology. I simplified parts of the body into a classic kaiju silhouette while keeping plastic-model design details.",
             zh: "这是我在 CCAD 的本科毕业设计：根据我自己设计的怪兽制作一款可动人偶。Cross Black King 参考了经典怪兽黑王（Black King）和机械哥斯拉等机械怪兽，重新设计成一只由人类科技打造的机器人怪兽。我把部分身体简化成经典的怪兽轮廓，同时保留了拼装模型式的设计细节。" },
        imgs: ["cross-black-king-02.jpg"] },
      { h: { en: "Sketches and design ideas", zh: "草图与设计思路" },
        p: { en: "Market research and user surveys defined the direction. The design developed through thumbnails, three directions and refined sketching progress.",
             zh: "通过市场调研和用户问卷确定方向，再经过缩略草图、三个方向的比较和逐步细化的草图来发展设计。" },
        imgs: ["cross-black-king-03.jpg", "cross-black-king-05.jpg", "cross-black-king-04.jpg", "cross-black-king-06.jpg"] },
      { h: { en: "CAD, render and prototype", zh: "建模、渲染与原型" },
        p: { en: "The figure was modeled in CAD with iterative refinement, then 3D-printed as a prototype. Final renders and a product animation were created for the thesis presentation.",
             zh: "人偶在 CAD 中反复迭代建模，然后 3D 打印出原型，并为毕业答辩制作了最终渲染图和产品动画。" },
        imgs: ["cross-black-king-07.jpg", "cross-black-king-01.jpg", "cross-black-king-08.jpg"] }
    ]
  },
  {
    id: "gun-dryer", cat: "industrial", year: 2022, team: "solo", cover: "gun-dryer-01.jpg",
    title: { en: "Gun Dryer", zh: "Gun Dryer" },
    sub: { en: "Hair dryer with a jet-engine character", zh: "喷气引擎风格吹风机" },
    context: { en: "CCAD · Individual assignment", zh: "CCAD · 个人作业" },
    credit: { en: "Individual project. Design by Haoqing (Justin) Pan.", zh: "个人项目。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Problem", zh: "问题" },
        p: { en: "Existing dryers didn't fit the body well, offered no guidance while drying, had limited airflow adjustment and were hard to carry. I designed a hair dryer for a specific user group, inspired by futuristic firearms and dark-toned aesthetics.",
             zh: "现有吹风机握持不贴合身体，吹发时没有任何指引，风力调节有限，也不方便携带。我为特定用户群设计了一款吹风机，灵感来自未来感枪械和暗色调美学。" },
        imgs: ["gun-dryer-02.jpg", "gun-dryer-03.jpg"] },
      { h: { en: "Form", zh: "造型" },
        p: { en: "The form borrows from engine exhaust structures and jet-turbine profiles. A small display on top shows airflow temperature, giving the product a bold, tech-driven character. Air is drawn in from the back, heated, and released through the nozzle, while an integrated exhaust vents excess heat. The handle is shaped around the hand.",
             zh: "造型借鉴了引擎排气结构和喷气涡轮的轮廓。顶部的小屏幕显示风温，让产品充满科技感和力量感。空气从后方吸入，加热后从风嘴吹出，多余的热量通过一体化的排气结构排出。握把根据手型设计。" },
        imgs: ["gun-dryer-04.jpg", "gun-dryer-05.jpg", "gun-dryer-06.jpg", "gun-dryer-07.jpg", "gun-dryer-08.jpg"] },
      { h: { en: "Packaging", zh: "包装设计" },
        p: { en: "The case is inspired by wooden storage crates. It holds extra customizable parts and batteries, a front lock secures everything in transport, and dual side handles make it easy to carry.",
             zh: "包装灵感来自木质储物箱，可以放下额外的可替换配件和电池。正面的锁扣在运输时固定所有部件，两侧的提手方便携带。" },
        imgs: ["gun-dryer-09.jpg", "gun-dryer-10.jpg"] },
      { h: { en: "Final product", zh: "最终成品" },
        p: { en: "Final renders were made in Unreal Engine 5, and a prototype was cut on a CNC machine.",
             zh: "最终渲染在 Unreal Engine 5 中完成，并用 CNC 机床切削出实物原型。" },
        imgs: ["gun-dryer-11.jpg", "gun-dryer-01.jpg", "gun-dryer-12.jpg", "gun-dryer-13.jpg"] }
    ]
  },
  {
    id: "mecha-head-light", cat: "industrial", year: 2023, team: "solo", cover: "mecha-head-light-01.jpg",
    title: { en: "Mechagodzilla Head LED Unit", zh: "机械哥斯拉头部 LED 灯" },
    sub: { en: "Detailed scale model with an LED unit", zh: "高细节比例模型与 LED 灯组" },
    context: { en: "CCAD · Individual assignment", zh: "CCAD · 个人作业" },
    credit: { en: "Individual project, fan-made concept. Design by Haoqing (Justin) Pan.", zh: "个人项目，同人概念设计。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Project", zh: "项目" },
        p: { en: "A scale model of Mechagodzilla's head built in SolidWorks, with an LED unit inspired by its electronic brain. The final model contains over 300 detailed features.",
             zh: "在 SolidWorks 中制作的机械哥斯拉头部比例模型，灵感来自它的电子大脑，并在其中设计了 LED 灯组。最终模型包含 300 多个精细特征。" },
        imgs: ["mecha-head-light-01.jpg", "mecha-head-light-02.jpg", "mecha-head-light-03.jpg", "mecha-head-light-04.jpg"] }
    ]
  },
  {
    id: "ego-flashlight", cat: "industrial", year: 2023, team: "solo", cover: "ego-flashlight-01.jpg",
    title: { en: "EGO Flashlight", zh: "EGO 手电筒" },
    sub: { en: "Flashlight and battery pack concept", zh: "手电筒与电池包概念设计" },
    context: { en: "CCAD · Individual assignment", zh: "CCAD · 个人作业" },
    credit: { en: "Individual student concept, not affiliated with EGO. Design by Haoqing (Justin) Pan.", zh: "个人学生概念设计，与 EGO 品牌无关。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Project", zh: "项目" },
        p: { en: "A product illustration of a flashlight for the EGO brand, made in Photoshop, built around green and black, together with a matching battery pack.",
             zh: "为 EGO 品牌设计的手电筒产品效果图，在 Photoshop 中完成，以绿色和黑色为主色，并配套设计了电池包。" },
        imgs: ["ego-flashlight-01.jpg", "ego-flashlight-02.jpg"] }
    ]
  },
  {
    id: "razer-backpack", cat: "industrial", year: 2023, team: "solo", cover: "razer-backpack-01.jpg",
    title: { en: "Razer Backpack", zh: "Razer 双肩包" },
    sub: { en: "Backpack concept and tech pack", zh: "双肩包概念与技术包" },
    context: { en: "CCAD · Individual assignment", zh: "CCAD · 个人作业" },
    credit: { en: "Individual student concept, not affiliated with Razer. Design by Haoqing (Justin) Pan.", zh: "个人学生概念设计，与 Razer 品牌无关。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Project", zh: "项目" },
        p: { en: "A backpack designed for Razer in Photoshop and InDesign, using the brand's dark gray and green, developed through sketches into a full tech pack.",
             zh: "为 Razer 设计的双肩包，在 Photoshop 和 InDesign 中完成，采用品牌标志性的深灰色和绿色，从草图一直做到完整的技术包（Tech Pack）。" },
        imgs: ["razer-backpack-02.jpg", "razer-backpack-01.jpg"] }
    ]
  },

  /* ---------------- GAME ---------------- */
  {
    id: "coffee-shop", cat: "game", year: null, team: "solo", cover: "coffee-shop-01.jpg",
    title: { en: "The Coffee Shop", zh: "The Coffee Shop 咖啡店" },
    sub: { en: "Desert diorama in Unreal Engine 5", zh: "Unreal Engine 5 沙漠场景" },
    context: { en: "SCAD · GAME 505", zh: "SCAD · GAME 505" },
    credit: { en: "Individual project. Design by Haoqing (Justin) Pan.", zh: "个人项目。设计：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Environment assets", zh: "场景资产" },
        p: { en: "The goal was a diorama scene in Unreal Engine 5. I built the assets in Maya from my own imagination of a classic coffee shop, then textured them in Substance Painter with a shabby, desert-industrial style, using Photoshop for some materials such as the windows and door.",
             zh: "目标是在 Unreal Engine 5 中搭建一个微缩场景。我在 Maya 中根据自己对经典咖啡店的想象制作资产，再在 Substance Painter 中做出破旧的沙漠工业风材质，窗户和门等部分材质用 Photoshop 绘制。" },
        imgs: ["coffee-shop-02.jpg", "coffee-shop-03.jpg", "coffee-shop-04.jpg"] },
      { h: { en: "Final scene", zh: "最终场景" },
        p: { en: "A Texas height map forms the background, with all assets plus a cactus placed in the scene. Time is set to sunset to show the lighting on the coffee shop.",
             zh: "背景使用德州地形的高度图，放入所有资产，并额外制作了仙人掌。时间设定在日落，展示咖啡店的光影效果。" },
        imgs: ["coffee-shop-01.jpg"] }
    ]
  },
  {
    id: "island-escape", cat: "game", year: null, team: "solo", cover: "island-escape-01.jpg",
    title: { en: "The Island Escape", zh: "The Island Escape 逃离小岛" },
    sub: { en: "RPG puzzle game in Processing", zh: "用 Processing 制作的 RPG 解谜游戏" },
    context: { en: "SCAD · ITGM 522", zh: "SCAD · ITGM 522" },
    credit: { en: "Individual project. Design and code by Haoqing (Justin) Pan.", zh: "个人项目。设计与编程：Haoqing (Justin) Pan。" },
    copyright: "© 2026 Haoqing (Justin) Pan",
    sections: [
      { h: { en: "Game", zh: "游戏" },
        p: { en: "An RPG puzzle game where the player collects items in the right order to escape the island. Press 1–5 to travel between the beach, plain, house, volcano and lake scenes, click to move, press E to interact and M to open the treasure map. I wrote the code in Processing and drew the art in Photoshop.",
             zh: "一款 RPG 解谜游戏，玩家需要按正确顺序收集道具才能逃离小岛。按 1–5 键在海滩、平原、房屋、火山和湖泊场景间切换，鼠标点击移动角色，按 E 互动，按 M 打开藏宝图。代码用 Processing 编写，美术用 Photoshop 绘制。" },
        imgs: ["island-escape-01.jpg", "island-escape-02.jpg", "island-escape-03.jpg", "island-escape-04.jpg"] }
    ]
  },

  /* ---------------- ART ---------------- */
  { id: "art-water-town", cat: "art", year: null, team: "solo", cover: "art-02.jpg", single: true,
    title: { en: "Water Town", zh: "水乡" }, sub: { en: "Watercolor · 22 × 10 in", zh: "水彩 · 22 × 10 英寸" },
    copyright: "© 2026 Haoqing (Justin) Pan" },
  { id: "art-aionios", cat: "art", year: null, team: "solo", cover: "art-01.jpg", single: true,
    title: { en: "Xenoblade 3 (Aionios)", zh: "异度神剑 3（Aionios）" }, sub: { en: "Watercolor · 22 × 12 in · fan art", zh: "水彩 · 22 × 12 英寸 · 同人作品" },
    copyright: "© 2026 Haoqing (Justin) Pan" },
  { id: "art-factory", cat: "art", year: null, team: "solo", cover: "art-03.jpg", single: true,
    title: { en: "Factory", zh: "工厂" }, sub: { en: "Watercolor · 22 × 10 in", zh: "水彩 · 22 × 10 英寸" },
    copyright: "© 2026 Haoqing (Justin) Pan" },
  { id: "art-pirate-ship", cat: "art", year: null, team: "solo", cover: "art-07.jpg", single: true,
    title: { en: "Pirate Ship", zh: "海盗船" }, sub: { en: "Watercolor · 10 × 22 in", zh: "水彩 · 10 × 22 英寸" },
    copyright: "© 2026 Haoqing (Justin) Pan" },
  { id: "art-temple", cat: "art", year: null, team: "solo", cover: "art-06.jpg", single: true,
    title: { en: "Temple in Mountain", zh: "山中寺" }, sub: { en: "Black and red brush · 8 × 8 in", zh: "黑、红毛笔 · 8 × 8 英寸" },
    copyright: "© 2026 Haoqing (Justin) Pan" },
  { id: "art-alien", cat: "art", year: null, team: "solo", cover: "art-05.jpg", single: true,
    title: { en: "Unusual Alien", zh: "奇异外星物" }, sub: { en: "Black pen · 32 × 11 in", zh: "黑色钢笔 · 32 × 11 英寸" },
    copyright: "© 2026 Haoqing (Justin) Pan" },
  { id: "art-kiryu", cat: "art", year: null, team: "solo", cover: "art-04.jpg", single: true,
    title: { en: "Mechagodzilla Silhouette (Kiryu)", zh: "机械哥斯拉剪影（机龙）" }, sub: { en: "Ink · 8 × 11 in · fan art", zh: "墨线 · 8 × 11 英寸 · 同人作品" },
    copyright: "© 2026 Haoqing (Justin) Pan" }
];
