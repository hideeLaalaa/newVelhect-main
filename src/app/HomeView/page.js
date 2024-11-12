"use client"
import React, { useState, useRef } from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'
import { Facebook, MessageIcon, Instagram, Twitter, Cancel, MobileMessage } from '../../../components/Svgs'

function HomeView() {

  const modalRef = useRef(null)
  const [whatWeDo1, setWhatWeDo1] = useState([
    {
      image: 'windmill.png',
      title: 'Renewable Energy and Power Management'
    },
    {
      image: 'world.png',
      title: 'Smart Technology (IoT)'
    },
    {
      image: 'motherboard.png',
      title: 'Embedded Systems'
    }
  ])

  const [mobileWhatWeDo1, setMobileWhatWeDo1] = useState([
    {
      image: 'windmill.png',
      title: 'Renewable Energy and Power Management'
    },
    {
      image: 'world.png',
      title: 'Smart Technology (IoT)'
    }
  ])

  const [mobileWhatWeDo2, setMobileWhatWeDo2] = useState([
    {
      image: 'motherboard.png',
      title: 'Embedded Systems'
    },
    {
      image: 'computers.png',
      title: 'Software Development'
    }
  ])

  const [mobileWhatWeDo3, setMobileWhatWeDo3] = useState([
    {
      image: 'engineer.png',
      title: 'Consumer Electronics'
    },
    {
      image: 'study.png',
      title: 'Research and Development'
    }
  ])

  const [whatWeDo2, setWhatWeDo2] = useState([
    {
      image: 'computers.png',
      title: 'Software Development'
    },
    {
      image: 'engineer.png',
      title: 'Consumer Electronics'
    },
    {
      image: 'study.png',
      title: 'Research and Development'
    }
  ])

  const openModalFunc = () => {
    console.log("alright")
    modalRef.current.click()
  }

  return (
    <>
      <div>
        <div className={styles.experiment__background}>
          <p className={styles.title}>Building a great future <br /> for technology </p>
          <p className={styles.subheader}>We deal in production of power management <br /> technologies, smart technologies, software <br /> development, consumer electronics and research <br /> and development.</p>

          <div className={styles.contact__button} >
            CONTACT US NOW
          </div>
        </div>

        {/* What do we do */}
        <div className={styles.content__container} >
          <div className={styles.content__subcontainer} >
            <p className={styles.content__title}>WHAT DO WE DO?</p>
            <div className={styles.content__startunderline} ></div>
          </div>
        </div>

        <div className={styles.content__body__container} >
          <p className={styles.content__body} >
            Everyday, we work to improve people's lives and environment by making power management technologies using natural resources like sun, win and natural grid that are more reliable, efficient, safe and sustainable. We create environment where creativity, invention and discovery become reality
          </p>
        </div>
        <div className={styles.content__body__container} >
          <p className={styles.content__body} >
            We focus on product development and installation of the following:
          </p>
        </div>

        <div className={styles.desktop__view} >
          <div className={styles.content__body__container}>
            <div className={styles.row} >
              {
                whatWeDo1.map(data => (
                  <div style={{ position: 'relative' }} className={styles.title__container2}>
                    <img alt="content_img" src={`./images/${data.image}`} className={styles.images} />
                    <div className={styles.title__container} >
                      <div>
                        <p>{data.title}</p>
                        <div className={styles.content__startunderline} ></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className={styles.row} >
              {
                whatWeDo2.map(data => (
                  <div style={{ position: 'relative' }} className={styles.title__container2}>
                    <img alt="content_img" src={`./images/${data.image}`} className={styles.images} />
                    <div className={styles.title__container} >
                      <div>
                        <p>{data.title}</p>
                        <div className={styles.content__startunderline} ></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className={styles.mobile__view} >
          <div className={styles.content__body__container}>
            <div className={styles.row} >
              {
                mobileWhatWeDo1.map((data, index) => (
                  <div style={{ position: 'relative' }} className={styles.title__container2}>
                    <img alt="content_img" src={`./images/${data.image}`} className={styles.images} />
                    <div className={styles.title__container} >
                      <div>
                        <p>{data.title}</p>
                        <div className={styles.content__startunderline} ></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className={styles.row} >
              {
                mobileWhatWeDo2.map(data => (
                  <div style={{ position: 'relative' }} className={styles.title__container2}>
                    <img alt="content_img" src={`./images/${data.image}`} className={styles.images} />
                    <div className={styles.title__container} >
                      <div>
                        <p>{data.title}</p>
                        <div className={styles.content__startunderline} ></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className={styles.row} >
              {
                mobileWhatWeDo3.map(data => (
                  <div style={{ position: 'relative' }} className={styles.title__container2}>
                    <img alt="content_img" src={`./images/${data.image}`} className={styles.images} />
                    <div className={styles.title__container} >
                      <div>
                        <p>{data.title}</p>
                        <div className={styles.content__startunderline} ></div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>


        {/* WHY CHOOSE US */}
        <div className={styles.content__container} >
          <div className={styles.content__subcontainer2} >
            <p className={styles.content__title2}> WHY CHOOSE US?</p>
            <div className={styles.content__middleunderline} ></div>
          </div>
        </div>

        <div className={styles.content__body__container} >
          <p className={styles.content__body} >
            Velhect has a team of brilliant minds that innovate the technology of future, and also creating smart and affordable consumer electronics to help businesses and individual to thrive. We strive to give our clients the best experience and results when we work together.
          </p>
        </div>

        <div className={styles.desktop__view} >
          <div className={[styles.row2, styles.adjustable].join(" ")} >
            <div className={styles.characteristics__container} >
              <Image src={'/images/fast-time.png'} style={{ alignSelf: "center" }} width={90} height={90} alt='logo' />

              <p>Timely Delivery</p>

              <p>We stick to stipulated time fixed for the delivery of products.</p>
            </div>

            <div className={styles.characteristics__container} >
              <Image src={'/images/team.png'} width={90} height={90} style={{ alignSelf: "center" }} alt='logo' />
              <p>Expert Team</p>

              <p>We consist of individuals that are expert in various fields to ensure quality products.</p>
            </div>

            <div className={styles.characteristics__container} >
              <Image src={'/images/save-money.png'} width={90} height={90} style={{ alignSelf: "center" }} alt='logo' />
              <p>Affordable Services</p>

              <p>Our charges can be pocket-friendly.</p>
            </div>

            <div className={styles.characteristics__container} >
              <Image src={'/images/quality-assurance.png'} width={90} height={90} style={{ alignSelf: "center" }} alt='logo' />
              <p>Quality Assurance</p>

              <p>We pay attention to every stage of the process of delivery or production.</p>
            </div>

          </div>
        </div>

        <div className={styles.mobile__view} >
          <div className={[styles.row2, styles.adjustable].join(" ")} >
            <div className={styles.characteristics__container} >
              <Image src={'/images/fast-time.png'} style={{ alignSelf: "center" }} width={60} height={60} alt='logo' />

              <p>Timely Delivery</p>

              <p>We stick to stipulated time fixed for the delivery of products.</p>
            </div>

            <div className={styles.characteristics__container} >
              <Image src={'/images/team.png'} width={60} height={60} style={{ alignSelf: "center" }} alt='logo' />
              <p>Expert Team</p>

              <p>We consist of individuals that are expert in various fields to ensure quality products.</p>
            </div>
          </div>

          <div className={[styles.row2, styles.adjustable].join(" ")} >
            <div className={styles.characteristics__container} >
              <Image src={'/images/save-money.png'} width={60} height={60} style={{ alignSelf: "center" }} />
              <p>Affordable Services</p>

              <p>Our charges can be pocket-friendly.</p>
            </div>

            <div className={styles.characteristics__container} >
              <Image src={'/images/quality-assurance.png'} width={60} height={60} style={{ alignSelf: "center" }} alt='logo' />
              <p>Quality Assurance</p>

              <p>We pay attention to every stage of the process of delivery or production.</p>
            </div>

          </div>
        </div>

        <div className={styles.desktop__view} >
          <div className={styles.mission__background}>
            <div className={styles.mission__container} >
              <div className={styles.mission__subcontainer} >
                <p className={styles.mission__title}>OUR MISSION <br /> AND VISION</p>
                <div className={styles.content__startunderline} ></div>
              </div>

              <div className={styles.mission__subcontainer2} >
                <p className={styles.mission__text}> Our mission is to improve the quality of life and the environment through smart technologies and services. Our solutions help our customer to effectively manage electrical power more effectively and reliably. </p>

                <p className={styles.mission__text}> We undertake and provide internet related services, systems, technology, information and software development services and products, including hardwares, to any person through agents, franchise, by any available means, in Nigeria and internationally including value added services such as E-Commerce, Games, Data Transmission, Computer networking, Video conferencing, Internet of Things, embedded systems and so on. </p>
              </div>
            </div>

          </div>
        </div>

        <div className={styles.desktop__view} >
          {/* <div className={styles.products__container}>

            <div className={styles.content__subcontainer2} >
              <p className={[styles.content__title2, styles.products__header].join(" ")}> PRODUCTS</p>
              <div className={styles.content__middleunderline} ></div>
            </div>

            <div className={styles.solar} >
              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={226} height={222} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>

              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={226} height={222} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>

              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={226} height={222} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.solar2} >
              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={226} height={222} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>

              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={226} height={222} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>

              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={226} height={222} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}

          {/* Partners */}
          <div className={styles.content__container} >
            <div className={styles.content__subcontainer} >
              <p className={styles.content__title}>OUR PARTNERS</p>
              <div className={styles.content__startunderline} ></div>
            </div>
          </div>

          <div className={styles.partners__container} >

          </div>

          <button style={{ display: 'none' }} ref={modalRef} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>

          <div className={styles.bottom__container} >

            <div className={styles.feedback__container}>
              <MessageIcon />
              <p>Feel free to write us feedbacks on our products</p>

              <div onClick={openModalFunc} >
                <p>WRITE A FEEDBACK</p>
              </div>
            </div>

            <div className={styles.image__container} >
              <Image src={'/images/logo.png'} width={169} height={32} alt='logo' />
            </div>

            <div className={styles.underline__bottom}>
              <div className={styles.row} >
                <p>Privacy Policy</p>
                <p>FAQs</p>
                <p>Contact Us</p>
              </div>
              <div className={styles.row} >
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
            </div>
            <div className={styles.copyright__bottom} >
              <p> &#169; {new Date().getFullYear()} Velhect All rights reserved</p>
            </div>
          </div>
        </div>

        <div className={styles.mobile__view} >
          <div className={styles.products__container}>

            <div className={styles.content__subcontainer2} >
              <p className={[styles.content__title2, styles.products__header].join(" ")}> PRODUCTS</p>
              <div className={styles.content__middleunderline} ></div>
            </div>

            <div className={styles.solar} >
              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={136} height={156} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>

              <div className={styles.solar__container}>
                <div className={styles.solar__subcontainer} >
                  <Image src={'/images/solar_panel.png'} style={{ borderRadius: 8 }} width={136} height={156} alt='logo' />

                  <div className={styles.solar__info} >
                    <p>Lorem ipsum dolor</p>
                    <p>N 15,000</p>
                    <p>N 25,000</p>
                    <p>5 items remaining</p>
                  </div>
                </div>
              </div>

            </div>

            <div className={styles.view__all} >
              <p>View all our products</p>
            </div>

          </div>

          <div className={styles.mission__background}>
            <div className={styles.mission__container} >
              <div className={styles.mission__subcontainer} >
                <p className={styles.mission__title}>OUR MISSION <br /> AND VISION</p>
                <div className={styles.content__startunderline} ></div>
              </div>

              <div className={styles.mission__subcontainer2} >
                <p className={styles.mission__text}> Our mission is to improve the quality of life and the environment through smart technologies and services. Our solutions help our customer to effectively manage electrical power more effectively and reliably. </p>

                <p className={styles.mission__text}> We undertake and provide internet related services, systems, technology, information and software development services and products, including hardwares, to any person through agents, franchise, by any available means, in Nigeria and internationally including value added services such as E-Commerce, Games, Data Transmission, Computer networking, Video conferencing, Internet of Things, embedded systems and so on. </p>
              </div>
            </div>

          </div>

          {/* Partners */}
          <div className={styles.content__container} >
            <div className={styles.content__subcontainer} >
              <p className={styles.content__title}>OUR PARTNERS</p>
              <div className={styles.content__startunderline} ></div>
            </div>
          </div>

          <div className={styles.partners__container} >

          </div>

          <button style={{ display: 'none' }} ref={modalRef} type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>

          <div className={styles.bottom__container} >

            <div className={styles.feedback2__container}>
              <MobileMessage />
              <div  >
                <p>Feel free to write us feedbacks on our products</p>
                <div onClick={openModalFunc} >
                  <p>WRITE A FEEDBACK</p>
                </div>
              </div>

            </div>

            <div className={styles.image__container} >
              <Image src={'/images/logo.png'} width={169} height={32} alt='logo' />
            </div>

            <div className={styles.underline__bottom2}>
              <div >
                <p>Privacy Policy</p>
                <p>FAQs</p>
                <p>Contact Us</p>
              </div>
            </div>
            <div className={styles.underline__bottom3}>
              <div className={styles.row} >
                <Facebook />
                <Instagram />
                <Twitter />
              </div>
            </div>
            <div className={styles.copyright__bottom} >
              <p> &#169; {new Date().getFullYear()} Velhect All rights reserved</p>
            </div>
          </div>
        </div>

      </div>

      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">

              <div className={styles.modal__container} >
                <div className={styles.modal__subcontainer} >
                  <p className={styles.modal__title}>FEEDBACKS AND REVIEWS</p>
                  <div className={styles.modal__startunderline} ></div>
                </div>

                <Cancel data-bs-dismiss="modal" style={{ position: 'absolute', right: 10, cursor: 'pointer' }} />
              </div>

              <div className={styles.modal__message}>
                <p>We're constantly working to provide the best products and service for our customers. We would love to get a feedback or review from you.</p>
              </div>

              <div>
                <input className={styles.modal__input} placeholder="Write something..." />
              </div>

              <div className={styles.modal__submit} >
                <div>
                  <p >SEND MESSAGE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeView