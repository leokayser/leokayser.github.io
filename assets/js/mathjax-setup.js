window.MathJax = {
  loader: { load: ["[tex]/mathtools", "[tex]/braket"] },
  tex: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    tags: "ams",
    packages: { "[+]": ["mathtools", "braket"] },
    macros: {
      NN: "{\\mathbb N}",
      ZZ: "{\\mathbb Z}",
      QQ: "{\\mathbb Q}",
      RR: "{\\mathbb R}",
      CC: "{\\mathbb C}",
      PP: "{\\mathbb P}",
      AA: "{\\mathbb A}",
      OO: "{\\mathcal O}",
      aa: "{\\mathfrak a}",
      bb: "{\\mathfrak b}",
      cc: "{\\mathfrak c}",
      mm: "{\\mathfrak m}",
      pp: "{\\mathfrak p}",
      divides: "\\mid",
      dividesnot: "\\nmid",
      eps: "\\varepsilon",
      Proj: "\\operatorname{Proj}",
      Spec: "\\operatorname{Spec}",
      Cl: "\\operatorname{Cl}",
      Sym: "\\operatorname{Sym}",
    },
  },
  options: {
    renderActions: {
      addCss: [
        200,
        function (doc) {
          const style = document.createElement("style");
          style.innerHTML = `
          .mjx-container {
            color: inherit;
          }
        `;
          document.head.appendChild(style);
        },
        "",
      ],
    },
  },
};
