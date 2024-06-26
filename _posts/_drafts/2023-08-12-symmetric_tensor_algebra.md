---
layout: post
title: Symmetric algebra or symmetric tensors?
date: 2099-08-12 00:00:00+0200
description: (Why) can we identify symmetric tensors with the symmetric algebra?
tags: [linear algebra, tensors]
categories: [commutative algebra]
related_posts: false
---

To start, we recall the defining universal property of the tensor product of $$K$$-vector spaces $$V_1 \otimes \dotsm \otimes V_d$$. We have a multilinear map $$\otimes\colon (v_1,\dots,v_d) \mapsto v_1\otimes\dotsm\otimes v_d$$ with the following property: _For every multilinear map $$f \colon V_1\times \dots \times V_d \to W$$ there is a unique linear map $$\tilde{f} \colon V_1\otimes \dots \otimes V_d \to W$$ such that $$f = \tilde{f} \circ \otimes$$_. In symbols:

$$
\operatorname{Lin}(V_1\otimes\dotsm\otimes V_d,W) = \operatorname{Lin}_d(V_1\times\dotsm\times V_d,W)
$$

The tensor product is associative in the sense that we have natural (= functorial) isomorphisms $$(V_1\otimes V_2) \otimes V_3 \cong V_1 \otimes V_2 \otimes V_3 \cong V_1 \otimes (V_2 \otimes V_3)$$ induced by $$(v_1\otimes v_2) \otimes v_3 \leftrightarrow v_1 \otimes v_2 \otimes v_3 \leftrightarrow v_1 \otimes (v_2 \otimes v_3)$$. The base ring $$K$$ is a neutral element in the sense that $$K\otimes V \cong V \cong V \otimes K$$. In the sequel we will denote these canonical identifications with an equality sign.

Now fix a vector space $$V$$ and denote by $$\mathrm{T}^dV \coloneqq V^{\otimes d}$$ the $$d$$-th tensor power of $$V$$. By convention $$\mathrm{T}^0V \coloneqq K$$, we then have

$$
\operatorname{T}(V) \coloneqq \bigoplus_{d \in \mathbb N} \mathrm{T}^dV = K \, \oplus \, V \, \oplus \, (V\otimes V) \, \oplus \, (V\otimes V \otimes V) \, \oplus \, \dots
$$

The tensor product induces bilinear maps

$$\mathrm{T}^dV \times \mathrm{T}^{e}V \to \mathrm{T}^{d+e}V = \mathrm{T}^dV \otimes \mathrm{T}^{e}V, \qquad (t,t') \mapsto t \otimes t',$$

which extends via the graded structure to a product $$\mathrm{T}(V) \times \mathrm{T}(V) \to \mathrm{T}(V)$$. This turns $$\mathrm{T}(V)$$ into an (associative) graded $$K$$-algebra, the _tensor algebra_. By construction, $$\mathrm{T}(V)$$ is generated as a vector space by finite products of vectors $$v_1\otimes\dots\otimes v_d$$ (as the $$V^{\otimes d}$$ are), and hence by $$V$$ as a $$K$$-algebra.
Together with the inclusion $$\iota \colon V \overset{\sim}{\to} \mathrm{T}^1V \subseteq \mathrm{T}(V)$$, the tensor algebra is the _universal_ way to build an algebra from a vector space!

**Theorem 1.** Let $$A$$ be a $$K$$-algebra and $$f\colon V \to A$$ a linear map. Then there exists a unique $$K$$-algebra homomorphism $$\tilde{f}\colon \mathrm{T}(V) \to A$$ with $$f = \tilde{f} \circ \iota$$.

_Proof._ **Uniqueness:** By construction, the algebra $$\mathrm{T}(V)$$ is generated by $$V$$. Any algebra map $$\tilde{f}\colon \mathrm{T}(V) \to A$$ is therefore determined by its restruction to $$V$$, which is prescribed by $$f = \tilde{f} \circ \iota$$.

**Existence:** Define $$\tilde{f}_d \colon \mathrm{T}^dV \to A$$ via the map obtained from the universal property of $$\mathrm{T}^dV = V^{\otimes d}$$ applied to the multilinear map

$$V\times \dots \times V \to A, \qquad (v_1,\dots,v_d) \mapsto f(v_1)\dotsm f(v_d),$$

and let $$\tilde{f}\colon \mathrm{T}(V)\to A$$ be the $$K$$-linear map assembled on graded pieces. By construction for $$d=1$$ we have $$f = \tilde{f} \circ \iota$$, we only need to show that $$\tilde f$$ is a ring homomorphism, i.e. compatible with products. We need to show that the following is a :sparkles:_commuting quadrangle_:sparkles::

$$
\begin{align*}\mathrm{T}(V) &\times \mathrm{T}(V) &&\overset{\tilde f \times \tilde f}{\longrightarrow} & A &\times A \\
&\downarrow &&& &\downarrow \\
\mathrm{T}&(V) && \overset{\tilde f}\longrightarrow &&A\end{align*}
$$

But this is easy to check on the vector space generators $$(v_1\otimes\dots\otimes v_d, v'_1\otimes\dots\otimes v'_e)$$, for which we know (using associativity!)

$$
\begin{align*}\tilde f(v_1\otimes\dots\otimes v_d)\cdot\tilde f(v'_1\otimes\dots\otimes v'_e) &= f(v_1)\dotsm f(v_d)\cdot f(v'_1)\dotsm f(v'_e)\\
&= \tilde f(v_1\otimes\dots\otimes v_d\otimes v'_1\otimes\dots\otimes v'_e). \tag*{$\square$}
\end{align*}
$$
