---
layout: post
title: How to hide a body in the acknowledgements
date: 2026-02-05 16:20:00+0200
description: "Have you ever written the 'Acknowledgements' section of a project and wanted to thank many people, but worried that you would forget someone? Here's how I solved this problem in my PhD thesis."
tags: [latex]
categories: [latex]
giscus_comments: true
related_posts: false
---

So I recently submitted my PhD thesis, and as one of the final steps in the writing process, I wrote the acknowledgements section. 

```latex
\documentclass[12pt, border=0.5pt]{standalone}

\newcommand{\name}[1]{\unskip\makebox[0em][l]{#1}}

\begin{document}
\name{Henri} \name{Claude} \name{Jean} \name{André} \name{Paul}
\name{Charles} \name{Szolem} \name{René} \name{Jacques} \name{Samuel}
\name{Roger} \name{Jean-Louis} \name{Pierre} \name{Laurent} \name{Jean-Pierre}
\name{Armand} \name{François} \name{Alexander} \name{Serge} \name{John}
\hspace{5em}
\end{document}
```


<p align="center">
  <img src="/assets/img/blog/NameStack1.jpg" alt="Stacking names using the first method" width="500"/>
</p>


```latex
\documentclass[12pt, border=0.5pt]{standalone}

\usepackage{tokcycle}

\newcommand\spread[2]{
  \tokcycle
  {\addcytoks{##1\hfill}}
  {\processtoks{##1}}
  {\addcytoks{##1}}
  {\addcytoks{##1\hfill}}{#2}
  \makebox[#1]{\the\cytoks\unskip}
}

\usepackage{calc}
\newlength{\mywidth}
\setlength{\mywidth}{\widthof{Anna-Laura}}

\newcommand{\strl}[1]{\unskip\makebox[0em][l]{\spread{\mywidth}{#1}}}

\setlength{\parindent}{0em}

\begin{document}

\end{document}
```