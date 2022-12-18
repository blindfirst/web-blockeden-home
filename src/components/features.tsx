import React from "react"
import {beConfig} from "@site/src/config";
import Link from "@docusaurus/Link";

export const Features = () => {
  return (
    <section>
      <div className="container">
        <div className="row justify-content-center text-center mb-6">
          <div className="col-xl-8 col-lg-9">
            <h2 className="display-4 mx-xl-6">API with high availability</h2>
            <p className="lead">
              BlockEden.xyz scales with dedicated distributed systems, and maintains data correctness in real-time.
            </p>
          </div>
        </div>
        <div className="row text-center">
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            <img src="/img/aptos-pure-logo.svg" alt="Image" className="mb-4" />
            <h4>Aptos service infra</h4>
            <p className="px-xl-4">
              Connect your dApp to Aptos blockchain RPC, GraphQL. Get coin and NFT data analytics in 3 minutes. Scale with your users.
            </p>
            <Link href="/aptos" className="hover-arrow">
              Learn more
            </Link>
          </div>
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <img src="/assets/img/saas-sketch-3.svg" alt="Image" className="mb-4" />
            <h4>Developers first</h4>
            <p className="px-xl-4">
              Scalable REST and GraphQL APIs ready for you in a few clicks away. Here is how it works -
            </p>
            <Link href="/docs/intro/" className="hover-arrow">
              Documentation
            </Link>
          </div>
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <img src="/img/discord.svg" alt="Image" className="mb-4" />
            <h4>Hands-on support</h4>
            <p className="px-xl-4">
              Partner engineers at your service now. Singapore Time (SGT) Mon - Fri 7am - 3pm.
            </p>
            <a href={beConfig.supportUrl} className="hover-arrow">
              Join Discord
            </a>
          </div>
          <div
            className="col-md-6 col-lg-3 mb-4 mb-lg-0"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <img src="/assets/img/saas-sketch-5.svg" alt="Image" className="mb-4" />
            <h4>Product Roadmap</h4>
            <p className="px-xl-4">
              Quality product delivered to you by a group of engineers from Google, Meta, Uber, and IoTeX.
            </p>
            <Link className="hover-arrow" href="/about-us/">
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>

  )
}
