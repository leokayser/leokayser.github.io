---
layout: post
title: Thinking about Porteous formula in a homogeneous way
date: 2024-09-24 17:00:00+0100
description: 
tags: [algebraic geometry, intersection theory, symmetric polynomials]
categories: [algebraic geometry]
giscus_comments: true
related_posts: false
---

When I first learned about Porteous formula, I was amazed by both its usefulness (computing degrees, explicit formulae, showing niceness properties, ...) and its generality, way beyond matrices of homogeneous polynomials on $\PP^n$. On the other hand, it can be quite difficult to evaluate the determinant appearing in its statement, so in this post I want to offer an elementary but useful way of working with this formula.

Let's start by giving a precise statement. Let $X$ be a variety, let $\mathcal{E}$, $\mathcal{F}$ be vector bundles of rank $e,f$ on $X$, and let $\sigma \colon \mathcal{E} \to \mathcal{F}$ be a morphism of vector bundles. The $k$-th degeneracy locus of $\sigma$ is the subset

$$
D_k(\sigma) = \Set{ x \in X | \rank \sigma(x) \leq k}, \qquad k \leq \min\{e,f\},
$$

which we endow with a scheme structure by taking the $k+1$-minors of the entries $\sigma|_U \colon \mathcal{E}(U) \cong \mathcal{O}_X(U)^e \to \mathcal{O}_X(U)^f \cong \mathcal{F}(U)$ on open sets $U \subseteq X$ where the bundles trivialize. As an example, take $X = \PP^{ef-1}$ and

$$
\sigma = \begin{bmatrix}
x_{11} & \cdots & x_{1e} \\
\vdots & \ddots & \vdots \\
x_{f1} & \cdots & x_{fe}
\end{bmatrix} \colon \mathcal{O}_{\PP^n}^e \to \mathcal{O}_{\PP^n}(1)^f.
$$

Then $D_k(\sigma)$ is defined by the homogeneous equations given by the $k-1$-minors. The determinantal variety $Y_r$ of matrices in $K^{f\times e} of rank $\leq k$ has dimension $k(e+f-k)$; to see this note that it is the image of the multiplication map $K^{f\times k} \times K^{k \times e}$. Such a decomposition of a rank $k$ matrix $M = AB$ is unique up to the action of $\GL(k,K)$ ($M = A'B'$, then there is $T \in \GL(k,K)$ with $A'=AT, B'=T^{-1}B$), hence $\dim Y_r = fk+ke-k^2 = k(e+f-k)$. In other words, the codimension in $K^{e\times f}$ (or $\PP^{ef-1}$) is $ef-k(e+f-k) = (e-k)(f-k)$. This is the \emph{expected} codimension of any degeneracy locus $D_k(\sigma)$ when $k \leq \min\{e,f\}$.

> **Lemma:** Every irreducible component of $D_k(\sigma) \subseteq X$ has codimension at most $(e-k)(f-k)$.

_Proof._ By considering small affine open sets we may assume that $\mathcal{E},\mathcal{F}$ are trivial on $X$ and $\sigma = [\sigma_{ij}] \in \mathcal{O}(X)^{f\times e}$. Then $\sigma$ defines a morphism $f_\sigma \colon X \to K^{f\times e} = \AA^{ef}$, and $D_k(\sigma) = f_\sigma^{-1}(Y_r)$. Preimages can only increase codimension