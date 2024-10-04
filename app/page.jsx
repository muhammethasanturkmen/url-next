"use client"
import Image from "next/image";
import styles from "./page.module.css";
import data from "./data.json"
import { supabase } from "./supabaseClient";
import { useState } from "react";

export default function Home() {





  return (
    <>
      <div className="container">
        <Header />
        <Content />
        <Input />
        <Advanced />
        <Footer />
        <FooterEnd />
      </div>
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <div className="list">
          <h2>Shortly</h2>
          <ul>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="btn">
          <button>Login</button>
          <button>Sign Up</button>
        </div>
      </header>
    </>
  )
}

function Content() {
  return (
    <>
      <main>
        <div className="content">
          <h1>More than just shorter links</h1>
          <p>Build your brand’s recognition and get detailed insights on how your links are performing.</p>
          <button>Get Started</button>
        </div>
        <div className="img">
          <img src="/pc.png" alt="" />
        </div>
      </main>
    </>
  )
}

function Input() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const generateShortUrl = async () => {
    setLoading(true);

    const shortCode = Math.random().toString(36).substring(2, 8);

    const { data, error } = await supabase
      .from('urls')
      .insert([{ long_url: originalUrl, short_url: shortCode }]);

    if (error) {
      console.error(error);
      setLoading(false);
      return;
    }

    setShortUrl(`${window.location.origin}/${shortCode}`);
    setLoading(false);
  };
  return (
    <>
      <div className="long-url">
        <div className="input">
          <input value={originalUrl}
            onChange={(e) => setOriginalUrl(e.target.value)} placeholder="Shorten a link here..." type="text" />
          <button onClick={generateShortUrl}>Shorten It!</button>
        </div>
        <div className="short-url">
          {shortUrl && (
            <div className="url">
              <a href={shortUrl} target="_blank" rel="noopener noreferrer">
                <p>{shortUrl}</p> <p>{originalUrl}</p>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

function Advanced() {
  return (
    <>
      <div className="advanced">
        <div className="advance-hader">
          <h1>Advanced Statistics</h1>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        <div className="grup">
          <div className="brad">
            <div className="imge"><img className="icon" src="/brand.png" alt="" /></div>
            <div className="text">
              <h6>Brand Recognition</h6>
              <p>Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
            </div>
          </div>
          <div className="brad, bard-two">
            <div className="imge"><img className="icon" src="/detail.png" alt="" /></div>
            <div className="text">
              <h6>Detailed Records</h6>
              <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
            </div>
          </div>
          <div className="brad, brand-three">
            <div className="imge"><img className="icon" src="/fully.png" alt="" /></div>
            <div className="text">
              <h6>Fully Customizable</h6>
              <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <div className="footer">
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>
    </>
  )
}

function FooterEnd() {
  return (
    <>
      <div className="footer-end">
        <h1>Shortly</h1>
        <div className="contact">
          <div className="footer-link">
            <div className="link">
              <h6>Features</h6>
              <p>Link Shortening</p>
              <p>Branded Links</p>
              <p>Analytics</p>
            </div>
            <div className="link">
              <h6>Resources</h6>
              <p>Blog</p>
              <p>Developers</p>
              <p>Support</p>
            </div>
            <div className="link">
              <h6>Company</h6>
              <p>About</p>
              <p>Our Team</p>
              <p>Careers</p>
              <p>Contact</p>
            </div>
          </div>
          <div className="social">
            <img src="/face.png" alt="" />
            <img src="/twit.png" alt="" />
            <img src="/pin.png" alt="" />
            <img src="/insta.png" alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
