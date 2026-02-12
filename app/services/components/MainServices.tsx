"use client";

import { useRouter } from "next/navigation";
import React from "react";
import styled from "styled-components";

export default function MainServices() {
  const router = useRouter();
  const items = [
    {
        title: "Web Design & Development",
        description: "We create stunning, user-friendly websites that are optimized for performance and conversions.",
        svg: () => (
          <svg
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 9V5H4V9H20ZM20 11H4V19H20V11ZM3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM5 12H8V17H5V12ZM5 6H7V8H5V6ZM9 6H11V8H9V6Z" />
          </svg>
        ),
        link: "/services/web-design-development"
    },
    {
        title: "Search Engine Optimization",
        description: "We help your website rank higher in search engine results, driving more organic traffic.",
        svg: () => (
          <svg
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.5 1h-8C6.12 1 5 2.12 5 3.5v17C5 21.88 6.12 23 7.5 23h8c1.38 0 2.5-1.12 2.5-2.5v-17C18 2.12 16.88 1 15.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H7V4h9v14z" />
          </svg>
        ),
        link: "/services/search-engine-optimization"
    },
    {
        title: "Performance Marketing",
        description: "We drive targeted traffic and conversions through strategic digital advertising campaigns.",
        svg: () => (
          <svg
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M5 9.2h3V19H5zM10.6 5h2.9v14h-2.9zm5.6 8H19v6h-2.8z" />
          </svg>
        ),
        link: "/services/performance-marketing"
    },
    {
        title: "Logo Design & Branding",
        description: "We create memorable logos and brand identities that represent your business values.",
        svg: () => (
          <svg
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" />
          </svg>
        ),
        link: "/services/logo-design-branding"
    },
    {
        title: "Social Media Marketing & Management",
        description: "We manage your social media presence to engage with your audience and grow your brand.",
        svg: () => (
          <svg
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-1.3-1.54c-.2-.24-.58-.27-.85-.07-.27.2-.3.58-.1.85l1.48 1.76c.2.24.58.27.85.07L16.6 9.5c.27-.2.3-.58.1-.85-.27-.2-.61-.17-.85.05z" />
          </svg>
        ),
        link: "/services/social-media-marketing-management"
    },
    {
        title: "Content Marketing",
        description: "We create valuable content that attracts and retains customers for long-term growth.",
        svg: () => (
          <svg
            fill="white"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm0-4H8V8h8v2z" />
          </svg>
        ),
        link: "/services/content-marketing"
    },
    
  
];

  return (
    <section className="flex justify-center w-full py-10 px-4">
      <StyledWrapper>
        <div className="grid">
          {items.map((item, index) => (
            <div
              key={index}
              className="card"
              onClick={() => router.push(item.link)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  router.push(item.link);
                }
              }}
            >
              <div className="content">
                <div className="svg-wrapper">
                  {item.svg()}
                </div>
                <h3 className="title">{item.title}</h3>
                <p className="para">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </StyledWrapper>
    </section>
  );
}

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
  }

  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      max-width: 700px;
    }
  }

  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      padding: 0 16px;
    }
  }

  @media (max-width: 640px) {
    .grid {
      grid-template-columns: 1fr;
      gap: 16px;
      padding: 0 12px;
    }
  }

  .card {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 320px;
    border-radius: 24px;
    line-height: 1.6;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .card {
      width: 100%;
      max-width: 300px;
      height: 300px;
    }
  }

  @media (max-width: 640px) {
    .card {
      width: 100%;
      max-width: none;
      height: 280px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
    padding: 36px;
    border-radius: 22px;
    color: #fff700;
    overflow: hidden;
    background: #2d2e30;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    .content {
      gap: 16px;
      padding: 28px;
    }
  }

  @media (max-width: 640px) {
    .content {
      gap: 12px;
      padding: 20px;
    }
  }

  .content::before {
    position: absolute;
    content: "";
    top: -4%;
    left: 50%;
    width: 90%;
    height: 90%;
    transform: translate(-50%);
    background: #4c4e56;
    z-index: -1;
    transform-origin: bottom;

    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content::after {
    position: absolute;
    content: "";
    top: -8%;
    left: 50%;
    width: 80%;
    height: 80%;
    transform: translate(-50%);
    background: #686a71;
    z-index: -2;
    transform-origin: bottom;
    border-radius: inherit;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content svg {
    width: 48px;
    height: 48px;
  }

  .content .para {
    z-index: 1;
    opacity: 1;
    font-size: 15px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    word-wrap: break-word;
    overflow-wrap: break-word;
    word-break: break-word;
    max-width: 100%;
    flex: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (max-width: 768px) {
    .content .para {
      font-size: 13px;
    }
  }

  @media (max-width: 640px) {
    .content .para {
      font-size: 12px;
    }
  }

  .svg-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #4C8C74 0%, #2d5a4a 100%);
    border-radius: 16px;
    z-index: 1;
    box-shadow: 0 8px 24px rgba(76, 140, 116, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2);
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    position: relative;
    overflow: hidden;
  }

  @media (max-width: 768px) {
    .svg-wrapper {
      width: 70px;
      height: 70px;
    }
  }

  @media (max-width: 640px) {
    .svg-wrapper {
      width: 60px;
      height: 60px;
    }
  }

  .svg-wrapper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  .card:hover .svg-wrapper::before {
    transform: translateX(100%);
  }

  .card:hover .svg-wrapper {
    transform: scale(1.1) rotate(5deg);
    box-shadow: 0 12px 32px rgba(76, 140, 116, 0.4);
  }

  .svg-wrapper svg {
    width: 48px;
    height: 48px;
    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  @media (max-width: 768px) {
    .svg-wrapper svg {
      width: 40px;
      height: 40px;
    }
  }

  @media (max-width: 640px) {
    .svg-wrapper svg {
      width: 32px;
      height: 32px;
    }
  }

  .card:hover .svg-wrapper svg {
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3)) brightness(1.2);
  }

  .title {
    z-index: 1;
    color: #ffffff;
    font-size: 18px;
    font-weight: 700;
    margin: 0;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  @media (max-width: 768px) {
    .title {
      font-size: 16px;
    }
  }

  @media (max-width: 640px) {
    .title {
      font-size: 14px;
    }
  }

  .content .link {
    z-index: 1;
    color: #fea000;
    text-decoration: none;
    font-family: inherit;
    font-size: 16px;
    transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
  }

  .content .link:hover {
    text-decoration: underline;
  }

  .card:hover {
    transform: translate(0px, -16px);
  }

  .card:hover .content::before {
    rotate: -8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }

  .card:hover .content::after {
    rotate: 8deg;
    top: 0;
    width: 100%;
    height: 100%;
  }
`;
