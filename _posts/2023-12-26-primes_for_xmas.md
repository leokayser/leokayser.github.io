---
layout: post
title: Infinitely many primes for Christmas
date: 2023-12-26 20:00:00+0100
description: Tis the season, and as a special gift I have infinitely many prime numbers for you using commutative algebra!
tags: [commutative algebra, number theory]
categories: [commutative algebra]
giscus_comments: true
related_posts: false
---

As my first _ever_ blog post on here and also as a mathematical Christmas gift, I wanted to share my favorite proof of the infinitude of prime numbers, only using commutative algebra (in the guise of the theory of Dedekind domains).

> **Euclid's theorem.** There are infinitely many prime numbers $p \in \ZZ$.

Before showing you the proof, I recall some basic results from algebraic number theory.

A Dedekind domain $A$ is an integral domain that has well-behaved factorization properties. One definition is that every nonzero ideal $\mathfrak a \subseteq A$ is the product of maximal ideals $\mathfrak a = \mathfrak p_1 \dotsm \mathfrak p_s$; this decomposition is then unique (up to permutation). In Dedekind domains the containment relation is the divisibility relation, i.e. $\mathfrak b \supseteq \mathfrak a$ if and only if there is an ideal $\mathfrak c$ with $\mathfrak a = \mathfrak b \mathfrak c$.

> **Fact 1.** The integral closure of $\ZZ$ in a finite field extension $K / \QQ$ (that is, all elements $\alpha \in K$ satisfying a monic polynomial equation $\alpha^n + a_{n-1}\alpha^{n-1} + \dots + a_1\alpha + a_0 = 0$, $a_i \in \ZZ$) is a Dedekind domain.

In fact, we need this result only for a particular quadratic extension of the rationals.

> **Fact 2.** The integral closure of $\ZZ$ in $\QQ(\sqrt{-5})$ is $\ZZ[\sqrt{-5}]$.

This is not hard to see, for example by examining the minimal polynomial of a general element $\alpha = a+b \sqrt{-5}$, which is monic if and only if $\alpha$ is integral over $\ZZ$.

Dedekind domains need not be unique factorization domains, in fact **Dedekind + UFD = PID**. But we have the following result:

> **Fact 3.** A Dedekind domain $A$ with finitely many maximal ideals is a principal ideal domain.

_Proof._ By the prime factorization it suffices that each of the finitely many maximal ideals $\mathfrak p_1,\dots,\mathfrak p_m$ is principal, let's show this for $\mathfrak q = \mathfrak p_1$. By the Chinese Remainder Theorem applied to the comaximal ideals $\mathfrak q^2, \mathfrak p_2, \dots, \mathfrak p_m$, the map

$$
A \to A/\mathfrak q^2 \times A/\mathfrak p_2 \times \dotsm \times A/\mathfrak p_m
$$

is surjective. Pick $a \in \mathfrak q \setminus \mathfrak q^2$ and let $q \in A$ be any preimage of $(a,1,\dots,1)$. The prime factorization of $qA \subseteq \mathfrak q$ can not involve any of $\mathfrak p_2, \dots, \mathfrak p_m$ and also not $\mathfrak q^2$ by construction, hence $qA = \mathfrak q$. $\square$

Finally, we need the following easy fact

> **Fact 4.** If $A \subseteq B$ is an integral extension and $\mathfrak M \subseteq B$ is a maximal ideal, then so is $\mathfrak m \coloneqq \mathfrak M \cap A \subseteq A$.

_Proof._ If $A \subseteq B$ is integral, then so is $A' \coloneqq A/ \mathfrak m \subseteq B / \mathfrak M \eqqcolon K$. Thus it suffices to show that if $A' \subseteq K$ is an integral extension with $K$ a field, then $A'$ is a field too. Let $0 \neq x \in A$, then $x^{-1} \in K$ is integral over $A'$, i.e. $x^{-n} + a_{n-1}x^{-(n-1)} + \dots + a_1x^{-1} + a_0 = 0$. Multiply by $x^{n-1}$ and rearrange to see

$$
x^{-1} = -a_{n-1} - a_{n-2}x - \dots - a_1 x^{n-2} - a_0 x^{n-1} \in A'. \tag*{$\square$}
$$

This implies that all maximal ideals in a finite extension $B \supseteq A$ of Dedekind domains are factors of $\mathfrak p B$ for $\mathfrak p \subseteq A$ maximal (Proof: $\mathfrak M \supseteq (\mathfrak M \cap A)B$).

We are ready to prove the infinitude of prime numbers!

_Proof of Euclid's theorem._ Assume that $\ZZ$ has only finitely prime numbers. Then the Dedekind domain $\ZZ[\sqrt{-5}]$ (**Fact 1+2**) also has only finitely maximal ideals (**Fact 4** + remark after) and hence is a principal ideal domain (**Fact 3**). But the decomposition

$$
2\cdot 3 = 6 = (1+\sqrt{-5}) \cdot (1-\sqrt{-5})
$$

shows that $\ZZ[\sqrt{-5}]$ is _not_ an unique factorization domain! It is easy to see that $2$ is irreducible by considering the multiplicative norm $N(x) = \lvert x \rvert^2$, but $2$ does _not_ divide $1\pm \sqrt{-5}$, so it is not prime. :zap:

Merry Christmas and happy holidays! :christmas_tree:
