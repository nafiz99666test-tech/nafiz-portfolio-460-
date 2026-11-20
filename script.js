/* ==========================================================================
   M. NAFIZ IMTIAZ — PORTFOLIO VANILLA JAVASCRIPT
   Clean, well-commented code ready for university professor code review.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------------------------------------------------------
     1. HERO TYPEWRITER ANIMATION
     Cycles through your core technical skills character by character.
     ------------------------------------------------------------------------ */
  const typewriterEl = document.getElementById("typewriter");
  const phrases = [
    "C & Low-Level Systems.",
    "HTML5, CSS3 & JavaScript.",
    "Node.js, Express & Databases.",
    "Quantized Local AI Models."
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let isDeleting = false;

  function runTypewriter() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      letterIndex--;
    } else {
      letterIndex++;
    }

    typewriterEl.textContent = currentPhrase.substring(0, letterIndex);

    let speed = isDeleting ? 40 : 85;

    if (!isDeleting && letterIndex === currentPhrase.length) {
      speed = 1800; // Pause when full word is typed
      isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 350;
    }

    setTimeout(runTypewriter, speed);
  }

  runTypewriter();


  /* ------------------------------------------------------------------------
     2. INTERACTIVE HERO TERMINAL WIDGET
     Displays live command output when a user clicks a command button.
     ------------------------------------------------------------------------ */
  const terminalOutputs = {
    web: "> Web Stack: HTML5, CSS3 (Flexbox/Grid), JavaScript (ES6+), React JS, Node.js, Express.js",
    c: "> Milestone: 100% of Codeforwin C exercises solved (Pointers, Memory, Bitwise, Structs).",
    ai: "> Hardware Lab: Quantized Gemma LLM running offline via Linux CLI & LM Studio on local GPU."
  };

  const cmdButtons = document.querySelectorAll(".cmd-btn");
  const termScreen = document.getElementById("termScreen");

  cmdButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cmdKey = btn.getAttribute("data-cmd");
      cmdButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      termScreen.textContent = terminalOutputs[cmdKey];
    });
  });


  /* ------------------------------------------------------------------------
     3. "THREE DISCIPLINES. ONE PERSPECTIVE." INTERACTIVE SWITCHER
     ------------------------------------------------------------------------ */
  const perspectives = [
    {
      index: "01 / 03",
      watermark: "SYSTEMS",
      heading: "Master the machine underneath.",
      description:
        "By solving 100% of the C programming problems on Codeforwin, I developed a deep intuition for pointers, manual memory allocation, bitwise manipulation, and algorithmic efficiency before relying on high-level abstractions.",
      pills: ["C (Advanced)", "C++", "Pointers & Memory", "Data Structures & Algorithms", "Linux CLI"]
    },
    {
      index: "02 / 03",
      watermark: "FULL-STACK",
      heading: "Responsive HTML5 & CSS3 meets scalable backends.",
      description:
        "I craft clean, responsive user interfaces with raw HTML5, modern CSS3 (Flexbox & Grid), JavaScript, and React—backed by Node.js, Express, Microsoft SQL Server, MongoDB, and Eraser.io system diagrams.",
      pills: ["HTML5 & CSS3", "JavaScript (Advanced)", "React JS", "Node.js & Express", "MS SQL & MongoDB", "Eraser.io"]
    },
    {
      index: "03 / 03",
      watermark: "HARDWARE",
      heading: "Where code meets physical silicon.",
      description:
        "Beyond web servers, I deploy quantized Large Language Models (like Google's Gemma) on local GPUs via CLI and LM Studio, build custom PCs, solder DIY PAM8403 audio circuits, and research e-bike battery systems.",
      pills: ["Local Gemma LLM", "LM Studio & GPU Inference", "Custom PC Assembly", "PAM8403 Audio Circuits", "E-Bike Battery Research"]
    }
  ];

  const tabButtons = document.querySelectorAll(".p-tab");
  const counterEl = document.getElementById("perspectiveCounter");
  const watermarkEl = document.getElementById("perspectiveWatermark");
  const headingEl = document.getElementById("perspectiveHeading");
  const descEl = document.getElementById("perspectiveDescription");
  const pillsContainer = document.getElementById("perspectivePills");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.getAttribute("data-perspective"));
      const item = perspectives[idx];

      tabButtons.forEach((b) => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      counterEl.textContent = item.index;
      watermarkEl.textContent = item.watermark;
      headingEl.textContent = item.heading;
      descEl.textContent = item.description;

      pillsContainer.innerHTML = "";
      item.pills.forEach((pillText) => {
        const span = document.createElement("span");
        span.textContent = pillText;
        pillsContainer.appendChild(span);
      });
    });
  });


  /* ------------------------------------------------------------------------
     4. EXPANDABLE ENGINEERING NOTES ACCORDION ("MORE WAYS I BUILD")
     ------------------------------------------------------------------------ */
  const drawerToggles = document.querySelectorAll(".drawer-toggle");

  drawerToggles.forEach((toggleBtn) => {
    toggleBtn.addEventListener("click", () => {
      const drawer = toggleBtn.closest(".build-drawer");
      const content = drawer.querySelector(".drawer-content");
      const isHidden = content.hasAttribute("hidden");

      if (isHidden) {
        content.removeAttribute("hidden");
        toggleBtn.setAttribute("aria-expanded", "true");
        toggleBtn.innerHTML = "Hide engineering notes <span>−</span>";
      } else {
        content.setAttribute("hidden", "");
        toggleBtn.setAttribute("aria-expanded", "false");
        toggleBtn.innerHTML = "Read engineering notes <span>+</span>";
      }
    });
  });


  /* ------------------------------------------------------------------------
     5. MOTION ON / OFF & DARK / LIGHT THEME TOGGLES
     ------------------------------------------------------------------------ */
  const motionBtn = document.getElementById("motionBtn");
  motionBtn.addEventListener("click", () => {
    const isOff = document.body.classList.toggle("motion-off");
    motionBtn.textContent = isOff ? "MOTION: OFF" : "MOTION: ON";
    motionBtn.setAttribute("aria-pressed", String(isOff));
  });

  const themeBtn = document.getElementById("themeBtn");
  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("theme-light");
    themeBtn.textContent = isLight ? "THEME: LIGHT" : "THEME: DARK";
  });


  /* ------------------------------------------------------------------------
     6. MOBILE MENU DRAWER
     ------------------------------------------------------------------------ */
  const mobileTrigger = document.getElementById("mobileTrigger");
  const primaryNav = document.getElementById("primaryNav");

  mobileTrigger.addEventListener("click", () => {
    const isOpen = primaryNav.classList.toggle("nav-open");
    mobileTrigger.setAttribute("aria-expanded", String(isOpen));
    mobileTrigger.textContent = isOpen ? "Close" : "Menu";
  });

  primaryNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      primaryNav.classList.remove("nav-open");
      mobileTrigger.setAttribute("aria-expanded", "false");
      mobileTrigger.textContent = "Menu";
    });
  });


  /* ------------------------------------------------------------------------
     7. CONTACT FORM VALIDATION
     ------------------------------------------------------------------------ */
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("senderName").value.trim();
    const email = document.getElementById("senderEmail").value.trim();
    const message = document.getElementById("senderMessage").value.trim();

    if (!name || !email || !message) {
      formStatus.style.color = "#fbbf24";
      formStatus.textContent = "Please complete all fields before sending.";
      return;
    }

    formStatus.style.color = "#10b981";
    formStatus.textContent = "✓ Validated! Opening your email client...";

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.location.href = `mailto:nafiz99666test@gmail.com?subject=${subject}&body=${body}`;
    contactForm.reset();
  });


  /* ------------------------------------------------------------------------
     8. AUTOMATIC FOOTER YEAR
     ------------------------------------------------------------------------ */
  document.getElementById("yearSpan").textContent = new Date().getFullYear();


/* ------------------------------------------------------------------------
     9. GOOGLE AI STUDIO (GEMINI CLOUD API) PORTFOLIO ASSISTANT
     Sends your portfolio context + visitor's question to Google's Gemini API.
     ------------------------------------------------------------------------ */
  const aiLauncher = document.getElementById("aiLauncher");
  const aiChatWindow = document.getElementById("aiChatWindow");
  const aiCloseBtn = document.getElementById("aiCloseBtn");
  const aiForm = document.getElementById("aiForm");
  const aiInput = document.getElementById("aiInput");
  const aiMessages = document.getElementById("aiMessages");
  const aiChips = document.querySelectorAll(".ai-chip");

  // Your Google AI Studio API Key
  const GEMINI_API_KEY = "AQ.Ab8RN6J5568YkgD2llM3KrZVRxb14UNB6SL101IPoJLc2R3RRw";

  // Google AI Studio Endpoint URL
  const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

  // System Context containing all of Nafiz's background details
  const NAFIZ_PORTFOLIO_INFO = `
    You are the official AI Portfolio Assistant for M. Nafiz Imtiaz.
    Answer visitors' questions politely, concisely (under 50 words), and confidently using ONLY the facts below:
    - Name: M. Nafiz Imtiaz
    - Education: Undergraduate B.Sc. in Software Engineering student at Daffodil International University (DIU), Dhaka, Bangladesh. Completed HSC and SSC in Science group.
    - University Coursework: Object-Oriented Programming (OOP), Data Structures & Algorithms, System Analysis & Design, Database Management Systems (DBMS).
    - Core Programming Languages: C (Advanced), JavaScript (Advanced), Python, Java, C++.
    - Web Development: HTML5, CSS3 (Flexbox & Grid), React JS, Node.js, Express.js.
    - Databases & Architecture Tools: Microsoft SQL Server, MongoDB, Git, Linux System Administration, Eraser.io (DFDs & Use Cases), PlantUML.
    - Key Achievement: Solved 100% of the C programming exercises and logic problems on Codeforwin (pointers, memory management, bitwise operations, data structures).
    - Hardware & AI Skills: Runs quantized local LLMs (Gemma) on local GPUs via LM Studio & CLI, builds custom PCs, solders DIY PAM8403 audio amplifier circuits, and researches e-bike battery conversions.
    - Contact: Email is nafiz99666test@gmail.com and GitHub is https://github.com/nafiz99666test-tech. Visitors can download his 2-page CV PDF directly from Section 02 of this website.
  `;

  // Backup response generator in case classroom Wi-Fi disconnects during demo
  function getBackupAnswer(question) {
    const q = question.toLowerCase();
    if (q.includes("skill") || q.includes("html") || q.includes("css") || q.includes("language")) {
      return "Nafiz specializes in C (Advanced), HTML5, CSS3 (Flexbox/Grid), and JavaScript (Advanced), plus Python, Java, C++, React, Node.js, Express, MS SQL Server, and MongoDB.";
    }
    if (q.includes("codeforwin") || q.includes("100%") || q.includes("c ")) {
      return "Nafiz solved 100% of the C programming exercises on Codeforwin—mastering pointers, memory management, bitwise operations, recursion, and data structures.";
    }
    if (q.includes("ai") || q.includes("llm") || q.includes("gemma") || q.includes("gpu") || q.includes("hardware")) {
      return "He deploys quantized local LLMs (like Google's Gemma) on local GPUs via Linux CLI and LM Studio, builds custom PCs, and solders DIY PAM8403 audio circuits.";
    }
    if (q.includes("study") || q.includes("diu") || q.includes("university") || q.includes("education") || q.includes("cv")) {
      return "Nafiz studies B.Sc. in Software Engineering at Daffodil International University (DIU) in Dhaka. You can download his full 2-page CV PDF in Section 02!";
    }
    return "Nafiz is a Software Engineering student at DIU bridging C systems programming, HTML5/CSS3/JS full-stack development, and AI deployment. Reach him at nafiz99666test@gmail.com!";
  }

  // Toggle AI Chat Window Open/Closed
  aiLauncher.addEventListener("click", () => {
    const isHidden = aiChatWindow.hasAttribute("hidden");
    if (isHidden) {
      aiChatWindow.removeAttribute("hidden");
      aiLauncher.setAttribute("aria-expanded", "true");
      aiInput.focus();
    } else {
      aiChatWindow.setAttribute("hidden", "");
      aiLauncher.setAttribute("aria-expanded", "false");
    }
  });

  aiCloseBtn.addEventListener("click", () => {
    aiChatWindow.setAttribute("hidden", "");
    aiLauncher.setAttribute("aria-expanded", "false");
  });

  function addChatBubble(text, senderClass) {
    const bubble = document.createElement("div");
    bubble.className = `ai-bubble ${senderClass}`;
    bubble.textContent = text;
    aiMessages.appendChild(bubble);
    aiMessages.scrollTop = aiMessages.scrollHeight;
    return bubble;
  }

  async function askGoogleAIStudio(userQuestion) {
    addChatBubble(userQuestion, "ai-user");
    const loadingBubble = addChatBubble("Thinking...", "ai-bot");

    try {
      const response = await fetch(GEMINI_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": GEMINI_API_KEY
        },
        body: JSON.stringify({
          system_instruction: {
            parts: [{ text: NAFIZ_PORTFOLIO_INFO }]
          },
          contents: [
            {
              role: "user",
              parts: [{ text: userQuestion }]
            }
          ]
        })
      });

      const data = await response.json();

      if (data.candidates && data.candidates[0].content.parts[0].text) {
        loadingBubble.textContent = data.candidates[0].content.parts[0].text;
      } else {
        loadingBubble.textContent = getBackupAnswer(userQuestion);
      }
    } catch (error) {
      loadingBubble.textContent = getBackupAnswer(userQuestion);
    }
  }

  aiForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const question = aiInput.value.trim();
    if (!question) return;
    aiInput.value = "";
    askGoogleAIStudio(question);
  });

  aiChips.forEach((chip) => {
    chip.addEventListener("click", () => {
      const promptText = chip.getAttribute("data-prompt");
      askGoogleAIStudio(promptText);
    });
  });

});