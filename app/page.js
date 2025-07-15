"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ReactLenis } from "lenis/react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);

  // Cool hover effect
  const coolHover = {
    whileHover: {
      scale: 1.08,
      rotate: [0, 2, -2, 0],
      boxShadow: "0 8px 32px 0 rgba(80, 80, 255, 0.25)",
      background: "linear-gradient(135deg, #232136 60%, #18181b 100%)",
      transition: { duration: 0.2 },
    },
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
    hover: { scale: 1.03 },
  };
  return (
    <>
      <ReactLenis root>
        <div
          ref={containerRef}
          className="font-[var(--font-prompt)] bg-black text-white min-h-screen overflow-x-hidden"
        >
          {/* Animated Minimalist Background */}
          <motion.div
            style={{ y: backgroundY }}
            className="fixed inset-0 -z-10"
          >
            {/* Animated gradient background */}
            <motion.div
              initial={{ opacity: 0.4 }}
              animate={{ opacity: [0.4, 0.5, 0.4] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black opacity-90"
            />
            {/* Animated circles */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0.2 }}
              animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.2, 0.3, 0.2] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/3 w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-purple-900/20 to-cyan-700/10 blur-3xl"
            />
            <motion.div
              initial={{ scale: 1, opacity: 0.4 }}
              animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
              className="absolute bottom-10 right-1/4 w-[14rem] h-[14rem] rounded-full bg-gradient-to-br from-cyan-700/30 to-purple-900/40 blur-2xl"
            />
            {/* Add animated starfield */}
            <motion.div
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, #fff2 1px, transparent 1px), radial-gradient(circle at 80% 70%, #fff2 1px, transparent 1px)",
                backgroundSize: "100px 100px",
                opacity: 0.3,
              }}
            />
          </motion.div>
          {/* Hero Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://scontent.fcnx4-2.fna.fbcdn.net/v/t39.30808-6/507655578_3340545816086142_8386234472740973489_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=QSsb8UWKSUMQ7kNvwEsoLKV&_nc_oc=AdlXJUXu8P54gQU3B0yW5G11sutyBcExoJirD7ezOnepwGo0WzEYuHL1CZstHZ78rp5sjIu9ZZ27If0SPMIgetKQ&_nc_zt=23&_nc_ht=scontent.fcnx4-2.fna&_nc_gid=LFK-erYB6RwI6ap7EghS8A&oh=00_AfTjx1oJAN69vH_gVOhvq7z32xM2pRVcVHNft_vZR2rFpA&oe=687BADC4')",
                filter: "grayscale(0.6) brightness(0.5)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
            <motion.div
              style={{ scale: heroScale, opacity: heroOpacity }}
              className="text-center z-10"
            >
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-7xl md:text-9xl font-extrabold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-lg"
              >
                TAEKWONDO
              </motion.h1>
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-6xl md:text-8xl bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent pt-3 mb-6 tracking-tight drop-shadow-lg"
              >
                เทควันโด
              </motion.h1>
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide"
              >
                The Art of Kicking and Punching
              </motion.p>
            </motion.div>
            {/* Floating minimalist dots */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0px", "180px"]),
              }}
              className="absolute top-24 left-16 w-6 h-6 bg-cyan-400/60 rounded-full blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]),
              }}
              className="absolute top-40 right-32 w-4 h-4 bg-purple-400/60 rounded-full blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0px", "220px"]),
              }}
              className="absolute bottom-32 left-32 w-8 h-8 bg-blue-400/60 rounded-full blur-sm"
            />
          </section>
          {/* Personal Bio Section */}
          <section className="relative py-16 px-4 md:px-8">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#232136]/60 to-[#18181b]/80 rounded-3xl shadow-xl p-6">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/image/IMG_3958.JPG"
                  alt="Profile Picture"
                  width={320}
                  height={320}
                  className="rounded-2xl object-cover border-4 border-cyan-400 shadow-lg"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-cyan-300 mb-4 drop-shadow">
                  ประวัติส่วนตัว
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                  สวัสดีครับ ผมชื่อลีโอ (Leo) อายุปัจจุบัน 17 ปี
                  เกิดที่เชียงใหม่ ปัจจุบันกำลังศึกษาอยู่ที่
                  วิทยาลัยเทคนิคเชียงใหม่ ผมเริ่มฝึกเทควันโดตั้งแต่อายุ 6
                  ขวบเล่นมาเรื่อยๆจนได้สายดำแดง (คือสายดำ
                  แต่อายุไม่ถึง15เลยยังไม่ได้สายดำครับ) แต่เลิกเล่นตอนอายุ11ปี
                  เพราะต้องเข้าเรียนยุพราชวิทยาลัย ซึ่งมีการแข่งขันสูง
                  อย่างไรก็ตาม เทควันโดก็กลายเป็นส่วนหนึ่งในชีวิตของผมเสมอมา
                  ผมมีความมุ่งมั่นในการนำทักษะและไหวพริบที่ได้จากการฝึกเทควันโด
                  มาประยุกต์ใช้ในชีวิตประจำวัน
                  และยังคงรักและชื่นชอบกีฬานี้อย่างมาก
                  ถ้ามีโอกาสผมยังจะกลับไปเล่นแน่นอน และทุกคนก็ควรลองเล่นดูนะครับ
                </p>
              </motion.div>
            </div>
          </section>
          {/* history Section */}
          <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage:
                  "url('https://1xmatch.com/wp-content/uploads/2022/08/thekvondo-kratkoe-opisanie-i-istoriya-vedeniya-boya-1.jpg')",
                filter: "grayscale(0.6) brightness(.2)",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>
            <motion.div
              style={{ scale: heroScale, opacity: heroOpacity }}
              className="text-center z-10"
            >
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-3xl md:text-5xl font-semibold bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-3 tracking-tight drop-shadow-lg py-3"
              >
                ประวัติเทควันโด
              </motion.h1>

              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-base md:text-lg text-gray-300 font-normal tracking-wide max-w-2xl mx-auto"
              >
                เทควันโดเป็นศิลปะการต่อสู้ที่มีรากฐานจากเกาหลี
                โดยมีต้นกำเนิดย้อนกลับไปถึงสมัยโบราณราว 50
                ปีก่อนคริสตกาลในยุคอาณาจักรโคกุรยอ
                ซึ่งพัฒนามาจากศิลปะการต่อสู้ดั้งเดิม เช่น แทกคยอน และ ซูบัก
                หลักฐานจากภาพเขียนในหลุมฝังศพมุยองชองแสดงให้เห็นเทคนิคที่คล้ายกับเทควันโดในปัจจุบัน
                ในสมัยอาณาจักรซิลลา นักรบชั้นยอดที่เรียกว่า ฮวารัง
                ได้ฝึกฝนแทกคยอน
                ซึ่งเป็นส่วนสำคัญในการพัฒนาทักษะการต่อสู้และกลายมาเป็นรากฐานของเทควันโด
                หลังสงครามโลกครั้งที่ 2 (ค.ศ. 1945)
                เทควันโดในยุคใหม่เริ่มก่อตัวขึ้น
                โดยได้รับอิทธิพลจากศิลปะการต่อสู้ของญี่ปุ่น เช่น คาราเต้
                และของจีน เช่น กังฟู โรงเรียนสอนศิลปะการต่อสู้ หรือ "kwans"
                เริ่มก่อตั้งในเกาหลี และในปี 1955 สไตล์ต่างๆ
                ถูกรวมเป็นหนึ่งภายใต้ชื่อ เทควันโด
                เทควันโดได้รับการยอมรับในระดับสากลเมื่อกลายเป็นกีฬาโอลิมปิกอย่างเป็นทางการในปี
                2000 และในปี 2018 ได้รับการยกย่องให้เป็น
                ศิลปะการต่อสู้ประจำชาติเกาหลี ปัจจุบันมีผู้ฝึกฝนเทควันโดกว่า 30
                ล้านคนใน 156 ประเทศทั่วโลก
              </motion.p>
            </motion.div>
            {/* Floating minimalist dots */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0px", "180px"]),
              }}
              className="absolute top-24 left-16 w-6 h-6 bg-cyan-400/60 rounded-full blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]),
              }}
              className="absolute top-40 right-32 w-4 h-4 bg-purple-400/60 rounded-full blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              style={{
                y: useTransform(scrollYProgress, [0, 1], ["0px", "220px"]),
              }}
              className="absolute bottom-32 left-32 w-8 h-8 bg-blue-400/60 rounded-full blur-sm"
            />
          </section>
          {/* Why I Love Taekwondo Section */}
          <section className="relative py-20 px-4 md:px-8">
            <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#232136]/60 to-[#18181b]/80 rounded-3xl shadow-xl p-8">
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent pt-3 mb-8 drop-shadow">
                  ทำไมถึงชอบเทควันโด
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-tight">
                  ทำไมผมถึงชอบกีฬานี้ เพราะว่าเป็นการฝึกความอดทน ทักษะการต่อสู้
                  และการพัฒนาไหวพริบ กีฬาเทควันโด
                  ยังสอนให้เรามีระเบียบวินัยและเคารพในตัวเองและผู้อื่น
                  การฝึกเทควันโดไม่เพียงแต่ช่วยให้ ร่างกายแข็งแรง
                  แต่ยังช่วยให้จิตใจสงบและมีสมาธิ
                  นอกจากนี้ยังเป็นการสร้างความสัมพันธ์ที่ดีกับเพื่อนร่วมฝึกและครูผู้สอน
                  การได้เห็นความก้าวหน้าในทักษะการต่อสู้และการพัฒนาตนเอง
                  ทำให้ผมรู้สึกภูมิใจและมีความสุขทุกครั้งที่ได้ฝึกซ้อม
                  เทควันโดไม่ใช่แค่กีฬา
                  แต่เป็นวิถีชีวิตที่สอนให้เราเคารพในตัวเองและผู้อื่น
                  และเป็นการฝึกฝึกที่ทำให้เรามีความมั่นใจในตัวเอง
                  และสามารถเผชิญหน้ากับความท้าทายต่างๆ ได้อย่างมั่นใจ
                </p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl p-8 shadow-lg">
                    <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                      TAEKWONDO PRECEPTS <br />
                      บทบัญญัติเทควันโด
                    </h3>
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        <span>จงรักภักดีต่อชาติ ศาสนา พระมหากษิติย์</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span>เคารพพ่อแม่ ครูอาจารย์และผู้มีพระคุณ</span>
                      </li>

                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span>ซื่อตรง จริงใจต่อผู้อื่น</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-pink-400 rounded-full"></span>
                        <span>อย่าทำร้ายผู้อื่น โดยไม่จำเป็น</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                        <span>อย่าท้อถอยต่อเหตุการณ์ทั้งปวง</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                        <span>ให้ความเคารพผู้อาวุโส</span>
                      </li>
                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span>กระทำตนให้ดีที่สุดอย่างสม่ำเสมอ</span>
                      </li>

                      <li className="flex items-center space-x-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span>ตัดสินเหตุการณ์ด้วยความระมัดระวังและถูกต้อง</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="w-100 h-100 bg-gradient-to-br from-cyan-400/60 to-purple-500/80 rounded-4xl mx-auto flex items-center justify-center shadow-lg">
                    <motion.div
                      initial={{ scale: 1, opacity: 0.9 }}
                      animate={{
                        scale: [0.95, 1, 0.95],
                        opacity: [0.95, 1, 0.95],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 6,
                        ease: "easeInOut",
                      }}
                      className="text-6xl text-center justify-content-center font-light text-white/80"
                    >
                      태권도 교훈 <br />& <br />
                      학생의 규칙
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/** Techniques Section with Parallax Cards **/}
          <section className="relative py-20 px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.15 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl font-bold text-center bg-gradient-to-r from-cyan-400 via-purple-500 to-blue-400 bg-clip-text text-transparent mb-16 drop-shadow py-3"
              >
                ทักษะที่ใช้ในการต่อสู้
              </motion.h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "การแตะ & Kicks",
                    subtitle: "발차기",
                    description:
                      "Front kick, Side kick, High kick, Double kick, Jump kick, Back kick, Hook kick",
                    gradient: "from-cyan-400 to-blue-400",
                  },
                  {
                    title: "การชก & Punches",
                    subtitle: "주먹",
                    description:
                      "การJab (ชกหลอกๆเพื่อเอาพื้นที่) การชกขึ้นจากล่าง การชกด้วยหลังมือ หรือหมุนตัวแล้วชกด้วยหลังมือ การชกด้วยแขนหลัง",
                    gradient: "from-purple-400 to-pink-400",
                  },
                  {
                    title: "การบล็อก & Blocks",
                    subtitle: "막기",
                    description:
                      "การบล็อกด้วยมือมีด การบล็อกด้วยกำปั้น การบล็อกด้วยแขนด้านนอก/ใน การบล็อกต่ำ/สูง",
                    gradient: "from-blue-400 to-cyan-400",
                  },
                ].map((technique, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.05, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.03,
                      backgroundColor: "rgba(255,255,255,0.05)",
                      transition: { duration: 0.2 },
                    }}
                    className="backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 transition-all shadow-xl hover:shadow-2xl"
                  >
                    <div
                      className={`text-3xl font-bold text-center mb-4 bg-gradient-to-r ${technique.gradient} bg-clip-text text-transparent`}
                    >
                      {technique.subtitle}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-4 text-white/90">
                      {technique.title}
                    </h3>
                    <p className="text-gray-300 text-center leading-relaxed">
                      {technique.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative border-t border-white/10 bg-gradient-to-br from-[#232136]/70 to-[#18181b]/90 backdrop-blur-sm">
            <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
              >
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 drop-shadow">
                    TAEKWONDO
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md">
                    Website
                    นี้จัดขึ้นขึ้นเป็นส่วนนึงของงานรายวิชาคอมพิวเตอร์กราฟิกและการออกแบบ
                    31905-2002 วิทยาลัยเทคนิคเชียงใหม่
                  </p>
                </div>
                <div className="flex space-x-3">
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 16px 0 rgba(80, 255, 255, 0.3)",
                      background:
                        "linear-gradient(135deg, #22d3ee 60%, #2563eb 100%)",
                    }}
                    className="w-8 h-8 bg-gradient-to-br from-cyan-400/50 to-blue-500/50 rounded-full flex items-center justify-center shadow transition-all"
                  >
                    <a
                      href="https://www.facebook.com/vactuz/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white text-xs font-bold">FB</span>
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{
                      scale: 1.15,
                      boxShadow: "0 0 16px 0 rgba(192, 64, 255, 0.3)",
                      background:
                        "linear-gradient(135deg, #a78bfa 60%, #f472b6 100%)",
                    }}
                    className="w-8 h-8 bg-gradient-to-br from-purple-400/50 to-pink-500/50 rounded-full flex items-center justify-center shadow transition-all"
                  >
                    <a
                      href="https://www.instagram.com/v4lk.yrieq_1sf3sb.o8lixw/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-white text-xs font-bold">IG</span>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-t border-white/10 mt-6 pt-4 flex justify-center"
              >
                <p className="text-gray-500 text-xs md:text-sm text-center">
                  © 2025 Taweesak Numma
                </p>
              </motion.div>
            </div>
          </footer>
        </div>
      </ReactLenis>
    </>
  );
}
