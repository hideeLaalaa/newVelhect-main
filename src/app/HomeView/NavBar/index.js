'use client';
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './styles.module.scss'
import { AiOutlineMenu } from 'react-icons/ai'
import { motion } from "framer-motion"
import { useRouter } from 'next/navigation'

function Nav() {

  const router = useRouter()
  const [viewNav, setViewNav] = useState(false)


  const navigateTo = (param) => {
    router.push(param)
    setViewNav(false)
  }

  return (
    <>
      <div className={styles.nav_container}>
        <Image  onClick={() => navigateTo('/')} style={{cursor: 'pointer'}} src={'/images/logo.png'} height={32} width={169} />

        <div className={styles.links__group} >
          <div className={styles.link__container}>
            <p  onClick={() => navigateTo('/')} className={styles.link} >Shop</p>
          </div>
          <div className={styles.link__container}>
            <p  onClick={() => navigateTo('/')} className={styles.link} >About Us</p>
          </div>
          <div className={styles.link__container}>
            <p  onClick={() => navigateTo('/contactus')} className={styles.link} >Contact Us</p>
          </div>
        </div>
      </div>

      <div className={styles.mobilenav_container}>
        <AiOutlineMenu onClick={() => setViewNav(prev => !prev)} className={styles.hamburger} />
        <Image onClick={() => navigateTo('/')} src={'/images/logo.png'} height={20} width={106} />
      </div>
      {
        viewNav &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.5 }}
          className={styles.flow__container}>
          <div className={styles.url__container} >
            <p onClick={() => navigateTo('/')}>Shop</p>
          </div>
          <div className={styles.url__container}>
            <p onClick={() => navigateTo('/')}>About Us</p>
          </div>
          <div className={styles.url__container}>
            <p onClick={() => navigateTo('/contactus')}>Contact Us</p>
          </div>
        </motion.div>
      }
    </>
  )
}

export default Nav