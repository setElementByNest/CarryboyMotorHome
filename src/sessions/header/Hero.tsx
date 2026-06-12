"use client";
import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import img1 from "./img/image-11.jpg";

interface NavLink {
  href: string;
  label: string;
}

const HeroSection: React.FC = () => {
  const sectionsWrap = useRef<HTMLDivElement | null>(null);
  const [score, setScore] = useState<number>(0);
  const goals = useRef<Set<HTMLElement>>(new Set());

  const navLinksData: NavLink[] = [
    { href: "#1960-1980", label: "1960–1980" },
    { href: "#1984-2004", label: "1984–2004" },
    { href: "#2008-2028", label: "2008–2028" },
  ];

  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".nav-link");
    const items = document.querySelectorAll<HTMLElement>(".item");
    const sections = document.querySelectorAll<HTMLElement>(".section");
    let activeItem: HTMLElement | null = null;

    const updateActiveLink = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(sections).indexOf(
            entry.target as HTMLElement
          );
          navLinks.forEach((link) => link.classList.remove("active"));
          navLinks[index]?.classList.add("active");
        }
      });
    };

    const observer = new IntersectionObserver(updateActiveLink, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });

    sections.forEach((section) => observer.observe(section));

    navLinks.forEach((link, idx) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        sections[idx].scrollIntoView({ behavior: "smooth" });
        navLinks.forEach((l) => l.classList.remove("active"));
        link.classList.add("active");
      });
    });

    items.forEach((item) => {
      const trigger = item.querySelector<HTMLElement>(".item-trigger");
      trigger?.addEventListener("click", () => {
        if (trigger && !goals.current.has(trigger)) {
          setScore((prevScore) => prevScore + 1);
          goals.current.add(trigger);
          item.setAttribute("data-scored", "true");
        }
        if (activeItem === item) {
          activeItem.classList.remove("active");
          activeItem = null;
        } else {
          activeItem?.classList.remove("active");
          item.classList.add("active");
          activeItem = item;
        }
      });
    });

    sectionsWrap.current?.addEventListener("scroll", () => {
      if (activeItem) activeItem.classList.remove("active");
      activeItem = null;
    });

    return () => observer.disconnect();
  }, [score]);

  return (
    <>
      <header className="HeaderH">
        {/* <div className="page-info mt-32">
          <small>#cpc-horizontal-scrolling</small>
          <h1>UEFA EURO challenge</h1>
          <h3>
            <span className="emoji">👆</span> scroll left/right + intercept the
            balls <span className="emoji">⚽</span>
          </h3>
          <div className="score" aria-label="score">
            <span id="scoreVal">{score}/18</span>
          </div>
          <small className="warn">[please adjust screen height]</small>
        </div> */}
        <div className="NavH relative">
          <svg
            version="1.1"
            id="svg-nav"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 500 120"
            preserveAspectRatio="xMidYMid slice"
            className="relative w-full h-full"
          >
            {/* กำหนดคลิปสำหรับเส้นโค้ง */}
            <defs>
              <clipPath id="curveClip">
                <path d="M0,0c59.914,71.192,149.668,116.439,250,116.439c100.332,0,190.086-45.246,250-116.439" />
              </clipPath>
            </defs>

            {/* วิดีโอพื้นหลังถูกคลิปตามเส้นโค้ง */}
            <foreignObject width="500" height="120" clipPath="url(#curveClip)">
              <video
                src="/video/carservice-background.mp4" // URL ของวิดีโอของคุณ
                width="250"
                height="120"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </foreignObject>

            {/* เส้นโค้ง */}
            <path
              id="curve"
              d="M0,0c59.914,71.192,149.668,116.439,250,116.439c100.332,0,190.086-45.246,250-116.439"
              fill="none"
              stroke="white"
            />

            {/* ข้อความที่อยู่บนเส้นโค้ง */}
            {navLinksData.map((link, index) => (
              <text key={index}>
                <textPath href="#curve" startOffset={`${18 + index * 25}%`}>
                  <a className="nav-link" href={link.href}>
                    {link.label}
                  </a>
                </textPath>
              </text>
            ))}
          </svg>
        </div>
      </header>
      <main>
        <div id="sections" ref={sectionsWrap}>
          <div id="1960-1980" className="section">
            <div
              id="1960"
              className="item"
              style={{ backgroundImage: "url(/img/image-11.jpg)" }}
            >
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1960</h2>
                <p>The first-ever edition of the UEFA European Championship.</p>
              </div>
            </div>
            <div id="1964" className="item red" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1964</h2>
                <p>
                  Spain wins on home soil in 1964 in duel of political
                  perspectives.
                </p>
              </div>
            </div>
            <div id="1968" className="item blue" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1968</h2>
                <p>
                  Italy wins the tournament with a 2-0 replay victory over
                  Yugoslavia.
                </p>
              </div>
            </div>
            <div id="1972" className="item green" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1972</h2>
                <p>
                  West Germany wins and dominates the European Player of the
                  Year poll.
                </p>
              </div>
            </div>
            <div id="1976" className="item yellow" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1976</h2>
                <p>
                  Panenka scores the famous penalty technique that bears his
                  name.
                </p>
              </div>
            </div>
            <div id="1980" className="item black" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1980</h2>
                <p>
                  For the first time, the finals feature eight teams instead of
                  four.
                </p>
              </div>
            </div>
          </div>
          <div id="1984–2004" className="section">
            <div id="1960" className="item white" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1960</h2>
                <p>The first-ever edition of the UEFA European Championship.</p>
              </div>
            </div>
            <div id="1964" className="item red" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1964</h2>
                <p>
                  Spain wins on home soil in 1964 in duel of political
                  perspectives.
                </p>
              </div>
            </div>
            <div id="1968" className="item blue" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1968</h2>
                <p>
                  Italy wins the tournament with a 2-0 replay victory over
                  Yugoslavia.
                </p>
              </div>
            </div>
            <div id="1972" className="item green" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1972</h2>
                <p>
                  West Germany wins and dominates the European Player of the
                  Year poll.
                </p>
              </div>
            </div>
            <div id="1976" className="item yellow" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1976</h2>
                <p>
                  Panenka scores the famous penalty technique that bears his
                  name.
                </p>
              </div>
            </div>
            <div id="1980" className="item black" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1980</h2>
                <p>
                  For the first time, the finals feature eight teams instead of
                  four.
                </p>
              </div>
            </div>
          </div>
          <div id="2008–2028" className="section">
            <div id="1960" className="item white" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1960</h2>
                <p>The first-ever edition of the UEFA European Championship.</p>
              </div>
            </div>
            <div id="1964" className="item red" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1964</h2>
                <p>
                  Spain wins on home soil in 1964 in duel of political
                  perspectives.
                </p>
              </div>
            </div>
            <div id="1968" className="item blue" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1968</h2>
                <p>
                  Italy wins the tournament with a 2-0 replay victory over
                  Yugoslavia.
                </p>
              </div>
            </div>
            <div id="1972" className="item green" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1972</h2>
                <p>
                  West Germany wins and dominates the European Player of the
                  Year poll.
                </p>
              </div>
            </div>
            <div id="1976" className="item yellow" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1976</h2>
                <p>
                  Panenka scores the famous penalty technique that bears his
                  name.
                </p>
              </div>
            </div>
            <div id="1980" className="item black" data-scored="false">
              <button type="button" className="item-trigger">
                ⚽
              </button>
              <div className="item-info">
                <h2>1980</h2>
                <p>
                  For the first time, the finals feature eight teams instead of
                  four.
                </p>
              </div>
            </div>
          </div>
          {/* ส่วน sections อื่นๆ ที่เหลือ */}
        </div>
      </main>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default HeroSection;
