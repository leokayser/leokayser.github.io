---
layout: post
title: Let's value the ring
date: 2099-12-29 20:00:00+0100
description: This is a quick introduction to valuation rings and the "spectrum" of a field extension.
tags: [commutative algebra]
categories: [commutative algebra]
giscus_comments: true
related_posts: true
---

I always found the topic of _valuation rings_ quite nice

> **Definition.** Let $R$ be a ring and $(\Gamma,\geq)$ a totally ordered abelian group (that is, $a \geq b \implies a+c \geq b+c$). A _valuation_ on $R$ is a map $v \colon R \to\Gamma \cup \{\infty\}$ such that
>
> - (V0) $\nu(0) = \infty$ and $v(x) \in \Gamma$ for $x \neq 0$.
> - (V1) $\nu(xy) = \nu(x) + \nu(y)$ (with the convention $a+\infty = \infty$) and
> - (V2) $\nu(x+y) \geq \min\{\nu(x),\nu(y)\}$ for $x,y \in K$.
>
> If $R$ is a field, then the image $\nu(R^\times) \subseteq \Gamma$ is the _value group_.

Note that a ring with a valuation is necessarily an integral domain (V0+V1), and that a valuation on $R$ can always be uniquely extended to a valuation on the field of fractions $K = \operatorname{Frac}(R)$ via $\nu(x/y) = \nu(x)-\nu(y)$. The set of elements of $K$ of non-negative valuation form a ring $\OO_\nu = \set{x \in K : \nu(x) \geq 0}$ with unique maximal ideal $\mm_\nu = \set{x \in K : \nu(x) > 0}$, the _valuation ring_ of $\nu$. What kind of rings are valuation rings?

> **Lemma/Definition.** Let $R$ be an integral domain with field of fractions $K$. The following are equivalent:
>
> 1. For $0 \neq x \in K$ either $x \in R$ or $x^{-1} \in R$;
> 2. For all $a,b \in R$ either $a \divides b$ or $b \divides a$, or generally for $x,y \in K$ either $y \in Rx$ or $x \in Ry$;
> 3. The set of ideals, or more generally the set of $R$-submodules of $K$, is totally ordered by inclusion;
> 4. There exists a valuation $\nu$ on $K$ with $R = \OO_\nu$.
>
> We define a _valuation ring_ to be a ring satisfying these properties. $\nu \colon K^\times \to \nu(K^\times)$ is unique up to isomorphism.

_Proof._ (1.⇔2.) The "more generally" in 2. is evidently equivalent to 1.. Conversely, if $x = a/b \notin R$, then $a \nmid b$, so $a \mid b$ and $x^{-1} = b/a \in R$.

(2.⇔3.) Let $M, N \subseteq K$ be submodules and $x \in N \setminus M$. Let $y \in M$, then $x \notin Ry$ and hence $y \in Rx \subseteq N$. The converse is clear.

(1.&2.⇒4.) Consider the (by 1. totally) ordered abelian group
\[
\Gamma \coloneqq K^\times / R^\times, \qquad x\geq y \text{ iff } x/y \in R
\]
We verify that the natural map $v_R \colon K^\times \twoheadrightarrow \Gamma$ defines a valuation on $K$. Let $x,y \in K$, then by 2. we may assume $y = cx$ and hence $v(x+y) = v(x(1+c)) = v(x) + v(1+c) \geq v(x)$. Thus $v_R$ is a valuation on $K$, and by definition of the order on $\Gamma$, $R = \set{ x \in K : v_R(x) \geq 0_\Gamma}$.

(4.⇒1.) is immediate, since either $v(x)\geq 0$ or $v(x^{-1}) = -v(x) \geq 0$.

Finally, the valuation is unique up to isomorphism, since the map to the value group $\nu \colon K^\times \to \Gamma$ is surjective with kernel $\set{x \in K : \nu(x) = 0} = R^\times$ and hence $\Gamma \cong K^\times/R^\times$ with $\Gamma_{\geq 0} = \nu(R)$. $\square$

These equivalent characterizations hint at a particularly simple ideal theory of valuation rings, which should be related to the value group $\Gamma$. Let $M \subseteq K$ be an $R$-submodule, then $\Gamma_M \coloneqq \nu(M \setminus 0)$ has is an order

> _Theorem._

There is another important characterization of valuation rings: they are maximal subrings of their fraction field without

(1.+3.⇒5.) 3. easily implies that there is a unique maximal ideal $\mathfrak m_R$, so $R$ is local. Moreover, any overring $R \subseteq R \subseteq K$ also satisfies 1.. If $S$ dominates $R$ and $x \notin R$, then $x^{-1} \in R \setminus R^\times = \mathfrak m_R \subseteq \mathfrak m_S = S \setminus S^\times$, so $s \notin S$, hence $S=R$.

> **Lemma.** $R$ is maximal among local rings $\subseteq K$ with respect to _domination_, that is, $(R, \mathfrak m_R) \leq_{\text{dom}} (S, \mathfrak m_S)$ iff $R \subseteq S$ and $\mathfrak m_R = \mathfrak m_S \cap R$.
> Then there exists a valuation ring $A \subseteq S \subseteq K$ dominating $R$.

_Proof._ The set $\set{S \subseteq K : S \geq_{\text{dom}} R}$ is nonempty and closed under taking ascending chains (the condition $\mathfrak m_S \cap R = \mathfrak m_R$ is equivalent to $1 \notin \mathfrak m_RS$). By Zorn's lemma there is a maximal element $S$. $S$ is integrally closed;
