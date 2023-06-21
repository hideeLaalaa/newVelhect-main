import React from 'react'
import { ContactUsInstagramIcon, ContactUsMessageIcon, ContactUsTwitterIcon, ContactUsLinkedinIcon, ContactUsFacebookIcon, ContactusCallIcon } from '../../../components/Svgs'
import styles from './styles.module.scss'
import Image from 'next/image'
import { Facebook, Instagram, Twitter } from '../../../components/Svgs'

function ContactUs() {
  return (
    <>
      <div style={{ backgroundColor: "rgba(250, 75, 20, 0.1)", minHeight: "100vh" }}>
        <div className="row">
          <div className={`col-lg-7 offset-lg-1 pe-5 col-md-8 col-sm-12 col-xs-12 ${styles.left__container}`}>
            <div className={styles.under__line__container} >
              <p>CONTACT US </p>
              <div className={styles.under__line} ></div>
            </div>

          </div>
          <div className='col-lg-4 col-md-4'>

          </div>
        </div>

        <div className="row">
          <div className={`col-lg-7 offset-lg-1 pe-lg-5 pe-md-5 px-4 col-md-8 col-sm-12 col-xs-12 ${styles.left__container}`}>

            <div>
              <p className={styles.left__container__text}>Share the details of your project (e.g scope of project, timeframe) Our team would carefully study them and we will figure out something together</p>
            </div>

            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <input placeholder='Full Name' className={styles.input} />
              </div>
              <div className='col-lg-6 col-md-6'>
                <input placeholder='Email Address' className={styles.input} />
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <input placeholder='Company Name' className={styles.input} />
              </div>
              <div className='col-lg-6 col-md-6'>
                <input placeholder='Phone Number' className={styles.input} />
              </div>
            </div>

            <div className='row'>
              <div className='col-lg-12'>
                <input placeholder='About Project' className={styles.input} />
              </div>
            </div>

            <div className={styles.send__message} >
              <p>SEND MESSAGE</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12">
            <div className={`${styles.contacts__container} ps-4`}>
              <div>
                <ContactUsMessageIcon />
                <ContactUsInstagramIcon />
                <ContactUsTwitterIcon />
                <ContactUsLinkedinIcon />
                <ContactUsFacebookIcon />
                <ContactusCallIcon />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.desktop__view} >
        <div className={styles.bottom__container} >

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
        <div className={styles.bottom__container} >

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
    </>
  )
}

export default ContactUs