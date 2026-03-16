---
layout: post
title: How to hide a body in the acknowledgements
date: 2026-02-05 16:20:00+0200
description: I describe how to make a
tags: [latex]
categories: [latex]
giscus_comments: true
related_posts: false
---

```latex
\documentclass[12pt, border=0.5pt]{standalone}

\usepackage{calc}

\usepackage{tokcycle}
\newcommand\spaceouttext[2]{
  \tokcycle{\addcytoks{##1\nobreak\hspace{#1}}}
  {\processtoks{##1}}{\addcytoks{##1}}
  {\addcytoks{##1\hspace{#1}}}{#2}
  \the\cytoks\unskip}
\newcommand\spread[2]{
  \tokcycle
  {\addcytoks{##1\hfill}}
  {\processtoks{##1}}
  {\addcytoks{##1}}
  {\addcytoks{##1\hfill}}{#2}
  \makebox[#1]{\the\cytoks\unskip}
}

\newlength{\mywidth}
\setlength{\mywidth}{\widthof{Anna-Laura}}

\newcommand{\strl}[1]{\unskip\makebox[0em][l]{\spread{\mywidth}{#1}}}

\setlength{\parindent}{0em}

\begin{document}

\end{document}
```