import React, {useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useAos} from "@site/src/components/use-aos";
import {SeoHead} from "@site/src/components/seo-head";
import CountUp from 'react-countup';
import Link from "@docusaurus/Link";
import styles from "./aptos.module.css";
import clsx from "clsx";

export default function Aptos(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  useAos();
  useEffect(() => {
    const SVGInject = require("@iconfu/svg-inject");
    SVGInject(document.querySelectorAll('[data-inject-svg]'));
  }, []);
  return (
    <Layout
      title={"Aptos Node and Data Analytics"}
      description={siteConfig.tagline}>
      <SeoHead/>

      <main>
          <section>
            <div className="container">
              <div className="row justify-content-center text-center mb-6">
                <div className="col-xl-8 col-lg-9 col-md-10">
                  <h1 className="display-5">Connect to Aptos and inspect its coin, NFT, contract call in minutes</h1>
                  <p className="lead">BlockEden.xyz provides Standard Aptos RPC, indexer GraphQL API and data analytics web portal</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-5">
                    <div className="d-flex flex-column mx-1 text-center">
                      <a href="/dash/sign-up/" className="btn btn-lg btn-primary mb-2 d-flex align-items-center">
                        <span>Get started for free</span>
                      </a>
                      <Link href="/docs/aptos/" className="text-small hover-arrow">View Documentation</Link>
                    </div>
                    <a href="/pricing" className="mx-1 btn btn-lg btn-primary-3 mt-3 mt-sm-0">Pricing plans</a>
                  </div>
                </div>
              </div>
              {/*<div className="row justify-content-center">*/}
              {/*  <div className="col-xl-8 col-lg-9">*/}
              {/*    <div className="rounded bg-primary-3 p-4 text-light text-monospace shadow layer-2">*/}
              {/*      <div>*/}
              {/*        <span className="text-primary-2">$</span>*/}
              {/*        <span data-typed-text data-type-speed={80} data-strings="[&quot;npm install leap.js&quot;]" data-loop="true" data-back-delay={2000} />*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*    <div className="decoration bottom right" data-aos="fade-up">*/}
              {/*      <img className="bg-primary-2" src="/assets/img/decorations/deco-blob-2.svg" alt="deco-blob-2 decoration" data-inject-svg />*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
            </div>
          </section>

        <section className="pt-0">
          <div className="container">
            <div className="row text-center mb-5">
              <div className="col">
                <small className="text-uppercase">Trusted by companies like</small>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <ul className="d-flex flex-wrap justify-content-center list-unstyled">
                  <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={100}>
                    <img  style={{width: "140px"}} className="icon-md " src="https://tp-misc.b-cdn.net/blockeden/secure3.svg" alt="icon"  />
                  </li>
                  <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={200}>
                    <img style={{width: "150px", height: "48px"}} className="icon icon-md" src="https://tp-misc.b-cdn.net/blockeden/iotex-logo.png" alt="icon" />
                  </li>
                  <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={300}>
                    <img style={{width: "140px"}} className="icon-md" src="https://tp-misc.b-cdn.net/blockeden/aptos-logo.svg" alt="icon"  />
                  </li>


                  <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={400}>
                    <img style={{width: "160px"}} className=" icon-md " src="https://tp-misc.b-cdn.net/blockeden/aptos-eden-hei-heng.png" alt="icon"  />
                  </li>
                  <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={500}>
                    <img style={{width: "160px"}} className=" icon-md" src="https://tp-misc.b-cdn.net/blockeden/aptos-global-1.png" alt="icon"  />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        <section className="pt-0">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-11">
                  <div className="row">
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={100}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/general/shield-protected.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className={clsx("mb-2", styles.h4)}>Chain RPC and GraphQL API</h4>
                        <p className="lead pr-xl-4">More than standard RPC, connect your DApp to NFT, coin, events, and more in 3 mins.</p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={200}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/code/code.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className={clsx("mb-2", styles.h4)}>Data Analytics</h4>
                        <p className="lead pr-xl-4">Inspect data, write SQL, and build data visualization dashboards with our web portal.</p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={300}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/shopping/box-2.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className={clsx("mb-2", styles.h4)}>High Reliability</h4>
                        <p className="lead pr-xl-4">99.9% SLA uptime API over HTTPs, hosted on AWS's quality servers.</p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={400}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/weather/cloudy-night.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className={clsx("mb-2", styles.h4)}>Hands-on Support</h4>
                        <p className="lead pr-xl-4">We work with Aptos developers daily and build the future together with the community.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <Link href="/docs/aptos/analytics-and-graphql/" className="lead hover-arrow">Explore data analytics</Link>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-primary-alt has-divider">
            <div className="container pb-0">
              <div className="row justify-content-center text-center mb-6">
                <div className="col-xl-8 col-lg-9">
                  <h2 className="display-4 mx-xl-6">Serve Aptos developers since mainnet day-one</h2>
                  <p className="lead">
                    We are a fully-committed team striving to bringing web3 to everyone on the planet, together with powerful developers and businesses.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <div className="col-md-4 mb-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
                  <CountUp
                    className="display-4 text-primary-2 d-block"
                    start={1}
                    decimals={2}
                    end={4.87}
                    duration={3}
                    suffix={"/5"}
                  />
                  <span className="h6">Average User Rating</span>
                </div>
                <div className="col-md-4 mb-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay={200}>
                  <CountUp
                    className="display-4 text-primary-2 d-block"
                    start={0}
                    end={400}
                    duration={3}
                    suffix={"+"}
                  />
                  <span className="h6">Teams' Choice</span>
                </div>
                <div className="col-md-4 mb-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay={300}>
                  <CountUp
                    className="display-4 text-primary-2 d-block"
                    start={0}
                    end={100}
                    suffix={"%"}
                    duration={3}
                  />
                  <span className="h6">Uptime since day-one</span>
                </div>
              </div>
              <div className="row justify-content-center mt-6 mb-lg-n7">
                <div className="col-xl-8 col-lg-9 layer-1">
                  <div className="video-poster shadow-lg rounded mb-3">
                    <a href={"https://blockeden.xyz/analytics/public/dashboard/8aebd278-8f33-43ea-95f3-8baf3ecab5cf"}>
                      <img src="https://tp-misc.b-cdn.net/blockeden/BlockEden-xyz-analytics-share-dashboard.png" alt="Image" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="divider">
              <img className="bg-primary-3" src="/assets/img/dividers/divider-1.svg" alt="divider graphic" data-inject-svg />
            </div>
          </section>
          <section className="bg-primary-3 text-light mb-lg-n7">
            <div className="container pb-md-6">
              <div className="row mb-4">
                <div className="col">
                  <h2 className="h1">FAQ</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={100}>
                  <img className="icon" src="/assets/img/icons/theme/shopping/wallet.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>What is Aptos?</h5>
                    <p>
                      Aptos is a layer one proof-of-stake blockchain that uses key elements of Diem, the former Meta blockchain, and Move, a programming language developed by Meta using the Rust language.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={200}>
                  <img className="icon" src="/assets/img/icons/theme/general/settings-1.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>What is Move?</h5>
                    <p>
                      Move is a smart contract language built by engineers at Meta and intended to be more secure and efficient than Solidity. Those engineers left Meta and built their own blockchain businesses - Aptos Labs and Mysten Labs.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={300}>
                  <img className="icon" src="/assets/img/icons/theme/files/cloud-upload.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>Is Aptos blockchain a good place to build?</h5>
                    <p>
                      There are hundreds of projects built on Aptos ecosystem, and the number is still growing. The blockchain could undertake 100,000 transactions per second. Thus, there is still great potential for builders.
                    </p>
                  </div>
                </div>
                {/*<div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={400}>*/}
                {/*  <img className="icon" src="/assets/img/icons/theme/communication/group.svg" alt="icon" data-inject-svg />*/}
                {/*  <div className="ml-3">*/}
                {/*    <h5>Unlimited Collaborators</h5>*/}
                {/*    <p>*/}
                {/*      Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={500}>*/}
                {/*  <img className="icon" src="/assets/img/icons/theme/shopping/chart-line-1.svg" alt="icon" data-inject-svg />*/}
                {/*  <div className="ml-3">*/}
                {/*    <h5>Analytics API</h5>*/}
                {/*    <p>*/}
                {/*      Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*<div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={600}>*/}
                {/*  <img className="icon" src="/assets/img/icons/theme/tools/pantone.svg" alt="icon" data-inject-svg />*/}
                {/*  <div className="ml-3">*/}
                {/*    <h5>White Labelable</h5>*/}
                {/*    <p>*/}
                {/*      Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.*/}
                {/*    </p>*/}
                {/*  </div>*/}
                {/*</div>*/}
              </div>
            </div>
          </section>
          <section className="pt-md-0">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card1 card-body border-0 o-hidden mb-0 shadow-3d text-light bg-primary">
                    <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
                      <h3 className={clsx("h3 text-center mb-md-0", styles.h3)}>Start building on Aptos</h3>
                      <a href="/dash/sign-up" className="btn btn-lg btn-white">
                        Sign up now
                      </a>
                    </div>
                    <div className="decoration layer-0">
                      <img className="bg-primary-2" src="/assets/img/decorations/deco-blob-1.svg" alt="deco-blob-1 decoration" data-inject-svg />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*<section className="pt-0">*/}
          {/*  <div className="container">*/}
              {/*<div className="row justify-content-center text-center">*/}
              {/*  <div className="col">*/}
              {/*    <h3 className="h1">Developers love BlockEden.xyz</h3>*/}
              {/*    <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>*/}
              {/*  </div>*/}
              {/*</div>*/}
              {/*<div className="row justify-content-center mt-6">*/}
              {/*  <div className="col-xl-7 col-lg-8 col-md-10">*/}
              {/*    <div data-flickity="{ &quot;imagesLoaded&quot;: true, &quot;wrapAround&quot;: true }">*/}
              {/*      <div className="carousel-cell mx-md-4">*/}
              {/*        <div className="card card-body flex-row py-4">*/}
              {/*          <img src="/assets/img/avatars/male-2.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
              {/*          <div className="ml-3">*/}
              {/*            <h4>*/}
              {/*              “The team were only too happy to help me getting started.”*/}
              {/*            </h4>*/}
              {/*            <div className="avatar-author d-block">*/}
              {/*              <h6>Anil Kumar</h6>*/}
              {/*              <span>Designer</span>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="carousel-cell mx-md-4">*/}
              {/*        <div className="card card-body flex-row py-4">*/}
              {/*          <img src="/assets/img/avatars/male-1.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
              {/*          <div className="ml-3">*/}
              {/*            <h4>*/}
              {/*              “Once again, my expectations have been surpassed – Bravo!”*/}
              {/*            </h4>*/}
              {/*            <div className="avatar-author d-block">*/}
              {/*              <h6>Benjamin Cameronr</h6>*/}
              {/*              <span>Designer</span>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*      <div className="carousel-cell mx-md-4">*/}
              {/*        <div className="card card-body flex-row py-4">*/}
              {/*          <img src="/assets/img/avatars/female-4.jpg" alt="Avatar" className="avatar avatar-lg" />*/}
              {/*          <div className="ml-3">*/}
              {/*            <h4>*/}
              {/*              “What usually takes at least 2 or 3 weeks was reduced to 4 days.”*/}
              {/*            </h4>*/}
              {/*            <div className="avatar-author d-block">*/}
              {/*              <h6>Annabelle Porter</h6>*/}
              {/*              <span>Designer</span>*/}
              {/*            </div>*/}
              {/*          </div>*/}
              {/*        </div>*/}
              {/*      </div>*/}
              {/*    </div>*/}
              {/*  </div>*/}
              {/*</div>*/}
          {/*  </div>*/}
          {/*</section>*/}

      </main>
    </Layout>
  );
}
