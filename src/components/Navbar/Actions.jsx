import React from "react";
import { FaRandom, FaComments, FaBroadcastTower } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Actions({ isInSidebar }) {
  return (
    <div
      className="nav-actions f-poppins text-light trans-c-03"
      style={
        isInSidebar
          ? {
              display: "flex",
              background: "var(--dark)",
              marginInline: "0px",
              borderRadius: "0px",
            }
          : {}
      }
    >
      <span>
        <a
          href="https://ab-anime-streamer.pages.dev"
          target="_blank"
          rel="noreferrer"
        >
          <FaBroadcastTower size={20} />
          <p>Watch Together</p>
        </a>
      </span>
      <span>
        <Link to="/details/random" href="ab-web.vercel.app">
          <FaRandom size={20} />
          <p>Random</p>
        </Link>
      </span>
      {!isInSidebar && (
        <span>
          <a
            href="https://ab-web.vercel.app"
            target="_blank"
            rel="noreferrer"
          >
            <FaComments size={20} />
            <p>Community</p>
          </a>
        </span>
      )}
      {/* New button */}
      <button>
        <a
          href="https://animetopic786.blogspot.com/?m=0"
          target="_blank"
          rel="noopener noreferrer"
        >
          BLOG
        </a>
      </button>
    </div>
  );
          }
    </div>
  );
}%
