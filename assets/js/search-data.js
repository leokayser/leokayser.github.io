// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "talks",
          description: "Talks and posters I&#39;ve presented over the years. Mostly with PDF&#39;s.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/talks/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "This is the place where I&#39;ll present some of the stuff I&#39;ve been working on. Stay tuned!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-git-amp-nahc",
          title: "git &amp; nahc",
          description: "This is where Enya Hsiao and I organise the Geometric Invariant Theory &amp; Non-abelian Hodge Correspondence Reading Seminar.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/nahc/";
          },
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-infinitely-many-primes-for-christmas",
      
        title: "Infinitely many primes for Christmas",
      
      description: "Tis the season, and as a special gift I have infinitely many prime numbers for you using commutative algebra!",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/primes_for_xmas/";
        
      },
    },{id: "news-hello-world-this-website-just-launched-sparkles",
          title: 'Hello world. This website just launched! :sparkles:',
          description: "",
          section: "News",},{id: "news-i-am-the-first-face-of-the-math-planck-people-series-check-out-the-article-here",
          title: 'I am the first face of the Math Planck People series! Check out...',
          description: "",
          section: "News",},{id: "news-i-became-a-maintainer-of-the-mathrepo-what-is-mathrepo",
          title: 'I became a maintainer of the MathRepo! What is MathRepo?',
          description: "",
          section: "News",},{id: "news-my-first-preprint-just-went-online-check-it-out-on-arxiv-2307-02560",
          title: 'My first preprint just went online! Check it out on arXiv:2307.02560.',
          description: "",
          section: "News",},{id: "news-together-with-yannik-mahlau-and-lukas-berg-we-won-an-outstanding-paper-award-in-the-ml-reproducibility-challenge-2022-for-an-overview-check-out-the-kaggle-notebook",
          title: 'Together with Yannik Mahlau and Lukas Berg we won an Outstanding Paper Award...',
          description: "",
          section: "News",},{id: "news-the-max-planck-institutes-of-leipzig-are-celebrating-the-science-and-music-open-air-quantum-entanglement-festival-come-and-play-mathematical-dominoes-at-my-demo-booth",
          title: 'The Max Planck Institutes of Leipzig are celebrating the science and music open...',
          description: "",
          section: "News",},{id: "news-my-page-was-awarded-by-mathrepo-as-the-fairest-page-of-the-year",
          title: 'My page was awarded by MathRepo as the FAIRest page of the year!...',
          description: "",
          section: "News",},{id: "news-enya-hsiao-and-i-are-organising-a-reading-group-on-geometric-invariant-theory-and-the-non-abelian-hodge-correspondence-check-out-the-schedule-here",
          title: 'Enya Hsiao and I are organising a reading group on Geometric Invariant Theory...',
          description: "",
          section: "News",},{id: "news-happy-holidays-to-celebrate-the-season-i-published-my-first-small-blog-post-gift",
          title: 'Happy holidays! To celebrate the season I published my first small blog post!...',
          description: "",
          section: "News",},{id: "news-this-may-we-are-organizing-the-imprs-combo-ii-workshop-be-sure-to-check-out-the-speakers-and-to-register",
          title: 'This May we are organizing the IMPRS Combo II workshop. Be sure to...',
          description: "",
          section: "News",},{id: "news-this-june-we-are-organizing-the-first-queer-in-math-day-at-mpi-mis-rainbow-flag-be-gay-do-math-heavy-heart-exclamation-slides",
          title: 'This June we are organizing the first Queer in Math Day at MPI...',
          description: "",
          section: "News",},{id: "news-logarithmic-discriminants-of-hyperplane-arrangements-are-on-the-arxiv-now-it-s-my-favorite-preprint-yet-relaxed",
          title: 'Logarithmic Discriminants of Hyperplane Arrangements are on the arXiv now! It’s my favorite...',
          description: "",
          section: "News",},{id: "news-hilbert-functions-of-chopped-ideals-just-got-accepted-by-the-journal-of-algebra-tada",
          title: 'Hilbert Functions of Chopped Ideals just got accepted by the Journal of Algebra!...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
