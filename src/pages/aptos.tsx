import React, {useEffect } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useAos} from "@site/src/components/use-aos";
import {SeoHead} from "@site/src/components/seo-head";
import CountUp from 'react-countup';
import Link from "@docusaurus/Link";

export default function Aptos(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  useAos();
  useEffect(() => {
    const SVGInject = require("@iconfu/svg-inject");
    SVGInject(document.querySelectorAll('[data-inject-svg]'));
  }, []);
  return (
    <Layout
      title={"Aptos - BlockEden.xyz"}
      description={siteConfig.tagline}>
      <SeoHead/>

      <main>
          <section>
            <div className="container">
              <div className="row justify-content-center text-center mb-6">
                <div className="col-xl-8 col-lg-9 col-md-10">
                  <h1 className="display-5">Your One-Stop Infrastructure for Aptos</h1>
                  <p className="lead">BlockEden.xyz provides Standard Aptos API and Aptos GraphQL services and data analytics</p>
                  <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center align-items-sm-start mt-5">
                    <div className="d-flex flex-column mx-1 text-center">
                      <a href="/dash/sign-up/" className="btn btn-lg btn-primary mb-2 d-flex align-items-center">
                        <span>Get started for free</span>
                      </a>
                      <Link href="/docs/aptos/" className="text-small hover-arrow">View Documentation</Link>
                    </div>
                    <a href="/pricing" className="mx-1 btn btn-lg btn-primary-3 mt-3 mt-sm-0">Go Pro</a>
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
              <div className="row justify-content-center">
                <div className="col-xl-11">
                  <div className="row">
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={100}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/general/shield-protected.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className="mb-2">Authentication</h4>
                        <p className="lead pr-xl-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={200}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/code/code.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className="mb-2">Developer First</h4>
                        <p className="lead pr-xl-4">Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={300}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/shopping/box-2.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className="mb-2">NPM Package</h4>
                        <p className="lead pr-xl-4">Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                    <div className="col-md-6 d-flex mb-4" data-aos="fade-up" data-aos-delay={400}>
                      <div className="icon-round bg-primary mr-3">
                        <img className="icon bg-primary" src="/assets/img/icons/theme/weather/cloudy-night.svg" alt="icon" data-inject-svg />
                      </div>
                      <div>
                        <h4 className="mb-2">Nightly Releases</h4>
                        <p className="lead pr-xl-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col text-center">
                  <a href="#" className="lead hover-arrow">Explore all features</a>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-primary-alt has-divider">
            <div className="container pb-0">
              <div className="row justify-content-center text-center mb-6">
                <div className="col-xl-8 col-lg-9">
                  <h2 className="display-4 mx-xl-6"> since day-one</h2>
                  <p className="lead">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
                  </p>
                </div>
              </div>
              <div className="row justify-content-center text-center">
                <div className="col-md-4 mb-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay={100}>
                  <CountUp
                    className="display-4 text-primary-2 d-block"
                    start={1}
                    decimals={2}
                    end={4.89}
                    duration={3}
                    suffix={"/5"}
                  />
                  <span className="h6">Average User Rating</span>
                </div>
                <div className="col-md-4 mb-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay={200}>
                  <CountUp
                    className="display-4 text-primary-2 d-block"
                    start={100000}
                    end={200000}
                    duration={3}
                    suffix={"+"}
                  />
                  <span className="h6">Monthly Installs</span>
                </div>
                <div className="col-md-4 mb-3 mb-4 mb-md-0" data-aos="fade-up" data-aos-delay={300}>
                  <CountUp
                    className="display-4 text-primary-2 d-block"
                    start={1000000}
                    end={2394421}
                    duration={3}
                  />
                  <span className="h6">Total Downloads</span>
                </div>
              </div>
              <div className="row justify-content-center mt-6 mb-lg-n7">
                <div className="col-xl-8 col-lg-9 layer-1">
                  <div className="video-poster shadow-lg rounded mb-3">
                    <a data-fancybox href="https://vimeo.com/40842620" className="btn btn-lg btn-primary btn-round">
                      <img className="icon" src="/assets/img/icons/theme/media/play.svg" alt="play icon" data-inject-svg />
                    </a>
                    <img src="/assets/img/software-library-1.jpg" alt="Image" />
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
                  <h2 className="h1">Premium Features</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={100}>
                  <img className="icon" src="/assets/img/icons/theme/shopping/wallet.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>Payment Processing</h5>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={200}>
                  <img className="icon" src="/assets/img/icons/theme/general/settings-1.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>Advanced API</h5>
                    <p>
                      Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={300}>
                  <img className="icon" src="/assets/img/icons/theme/files/cloud-upload.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>Cloud Storage</h5>
                    <p>
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={400}>
                  <img className="icon" src="/assets/img/icons/theme/communication/group.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>Unlimited Collaborators</h5>
                    <p>
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={500}>
                  <img className="icon" src="/assets/img/icons/theme/shopping/chart-line-1.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>Analytics API</h5>
                    <p>
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="col-md-4 d-flex mb-4" data-aos="fade-up" data-aos-delay={600}>
                  <img className="icon" src="/assets/img/icons/theme/tools/pantone.svg" alt="icon" data-inject-svg />
                  <div className="ml-3">
                    <h5>White Labelable</h5>
                    <p>
                      Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="pt-md-0">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card1 card-body border-0 o-hidden mb-0 shadow-3d text-light bg-primary">
                    <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center">
                      <div className="h3 text-center mb-md-0">Start building beautiful websites</div>
                      <a href="#" className="btn btn-lg btn-white">
                        Purchase Now
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
          <section className="pt-0">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col">
                  <h3 className="h1">Developers love Leap</h3>
                  <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                </div>
              </div>
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
                      <img className="bg-primary-3 icon icon-md opacity-20" src="/assets/img/logos/brand/apple.svg" alt="icon" data-inject-svg />
                    </li>
                    <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={200}>
                      <img className="bg-primary-3 icon icon-md opacity-20" src="/assets/img/logos/brand/buzzfeed.svg" alt="icon" data-inject-svg />
                    </li>
                    <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={300}>
                      <img className="bg-primary-3 icon icon-md opacity-20" src="/assets/img/logos/brand/intercom.svg" alt="icon" data-inject-svg />
                    </li>
                    <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={400}>
                      <img className="bg-primary-3 icon icon-md opacity-20" src="/assets/img/logos/brand/slack.svg" alt="icon" data-inject-svg />
                    </li>
                    <li className="mx-4 mb-md-5" data-aos="fade-up" data-aos-delay={500}>
                      <img className="bg-primary-3 icon icon-md opacity-20" src="/assets/img/logos/brand/spotify.svg" alt="icon" data-inject-svg />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

      </main>
    </Layout>
  );
}