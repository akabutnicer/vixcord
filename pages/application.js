  import { useRouter } from "next/router";
  import { useEffect, useState, useRef } from "react";
  import * as sdk from "matrix-js-sdk";
  import { motion } from "framer-motion";
  import { Head } from "next/head";
  import Script from 'next/script'
  import TextTransition, { presets } from "react-text-transition";
  import dynamic from 'next/dynamic'

  const Scrollable = dynamic(
    () => import('scrollable-component'),
    { ssr: false }
  )
  const content = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
        staggerChildren: 0.2
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const title = {
    initial: { y: -20, opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const fromLeft = {
    initial: { x: -20, opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  const fade = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const Title = ({ navSelected }) => {
    const [contentTitle, setTitle] = useState("Home");
    const isFirstRender = useRef(true)

    useEffect(() => {
      isFirstRender.current = false;
    })

    useEffect(() => {
      if (!isFirstRender.current) {
        switch (navSelected) {
          case 1:
            setTitle("Home");
            break;

          case 2:
            setTitle("Social");
            break;

          case 3:
            setTitle("Mail");
            break;
        }
      }
    }, [navSelected])

    return (
      <TextTransition>
        <h1 className="text-gray-400 transition-all duration-500 ml-10 font-boldroboto">{contentTitle}</h1>
      </TextTransition>
    )
  }

  const User = (props) => {
    const {
      selected = false,
      username,
      status = null
    } = props;

    let statusType;

    switch (status.type) {
      case null:
        statusType = "offline-status";
        break;

      case "online":
        statusType = "online-status";
        break;

      case "dnd":
        statusType = "dnd-status";
        break;

      case "offline":
        statusType = "offline-status";
        break;
    }

    return (
      <div className={`${selected ? "selected-user" : ""} mt-1 rounded-md w-[95%] min-h-[56px] flex items-center`}>
        <div className={`userpfp w-10 h-10 ml-3 ${statusType}`} />
        <div className={`ml-2.5 font-robotoregular ${selected ? "selected-user-text" : "unselected-user-text"}`}>
          <h1 className="text-base">{username}</h1>
          {status.text !== null && <p className="text-xxs">{status.text}</p>}
        </div>
      </div>
    )
  }

  export default function HomePage() {
    const router = useRouter();

    const [authToken, setAuthToken] = useState(null);
    const [deviceID, setDeviceID] = useState(null);
    const [userID, setUserID] = useState(null);
    const [username, setUserName] = useState(null);

    let users = [
      {
        username: "gigachadcoolguy",
        selected: true,
        status: {
          type: "dnd",
          text: null
        }
      },
      {
        username: "sigmamale",
        selected: false,
        status: {
          type: "online",
          text: "im so cool"
        }
      }
    ];

    for (let i = 0; i < 30; i++) {
      users.push({
        username: "sigmamale",
        selected: false,
        status: {
          type: "online",
          text: "im so cool"
        }
      })
    }

    // ui stuff
    const [navOpen, setNavOpen] = useState(false);
    const [navSelected, setNavSelected] = useState(1);

    useEffect(() => {
      setAuthToken(localStorage.getItem("accessToken"));
      setDeviceID(localStorage.getItem("deviceID"));
      setUserID(localStorage.getItem("userID"));

      if (localStorage.getItem("userID") !== null) {
        setUserName(localStorage.getItem("userID").slice(1, localStorage.getItem("userID").slice(1).search(":") + 1));
      }

      if (localStorage.getItem("accessToken") === null || localStorage.getItem("deviceID") === null || localStorage.getItem("userID") === null) {
        // router.push("/login");
      }
    }, [authToken, deviceID, router, userID]);



    return (
      <motion.div variants={content} initial="initial" animate="animate" exit="exit" className="flex main bg-[url('/bgidk.png')] bg-cover">
        <Script src="https://code.iconify.design/iconify-icon/1.0.2/iconify-icon.min.js" />
        <motion.div variants={fromLeft} className={`flex left-0 w-24  bg-trsansparent items-center flex-col h-screen`}>
          <motion.button onClick={(e) => setNavSelected(1)} className={`h-12 mb-5 mt-5 ${navSelected == 1 && "selectedBtn side-item-overlay"}`}>
            <iconify-icon icon="material-symbols:home-outline" class="iconBtn fg-grey" width="23" height="23"></iconify-icon>
          </motion.button>
          <hr className="w-full border-solid border linegrey" />



          <motion.button onClick={(e) => setNavSelected(2)} className={`mt-5 h-12 ${navSelected == 2 && "selectedBtn"}`}>
            <iconify-icon icon="ph:users-four-bold" class="iconBtn fg-grey" width="23" height="23"></iconify-icon>
          </motion.button>

          <motion.button onClick={(e) => setNavSelected(3)} className={`mt-5 h-12 ${navSelected == 3 && "selectedBtn"}`}>
            <iconify-icon icon="material-symbols:mail-outline" class="iconBtn fg-grey" width="23" height="23"></iconify-icon>
          </motion.button>
          <hr className="w-full border-solid border linegrey" />


          <button varaints={fade} className="bottom-0 absolute mb-4 pfp w-11 h-11">
          </button>
        </motion.div>

        <motion.div style={{ width: navOpen ? 320 : 0, overflow: "hidden" }} className={`flex mt-20 flex-col transition-width duration-500 left-0 graygray leftMenu`}>
          <hr className="w-full border-solid z-0 border linegrey" />

          <div className="flex text-white z-0 ml-2 mt-5 fg-grey items-center h-12">
            <h1 className="h-6 font-roboto">Friends</h1>
          </div>

          <div className="flex text-white z-0 ml-2 mt-5 fg-grey items-center h-12">
            <h1 className="h-6 font-roboto z-0">Mail</h1>
          </div>

          

          <div className="bottom-0 absolute z-0 mb-4 flex flex-col text-white ml-2 fg-grey h-11">
            <h1 className="h-6 font-boldroboto">{username}</h1>
            <p>* Online</p>
          </div>
        </motion.div>

        <motion.div variants={fade} className="flex flex-col px-3 items-center w-96 h-screen acrylic">
          <motion.div className="w-full mt-4 h-11 rounded-lg acrylic searchBg flex flex-row items-center">
            <iconify-icon icon="material-symbols:search-rounded" class="fg-grey relative left-3 mr-5" width="23" height="23"></iconify-icon>
            <input className="font-roboto placeHolderText graygray focus:outline-none focus:border-0" />
            <div className="keybindBlock w-14 h-6 items-center ml-auto justify-center flex rounded mr-3">
              <p className="text-sm font-boldroboto">Ctrl K</p>
            </div>
          </motion.div>

          <hr className="w-80 mt-4 border-solid border linegrey relative" />

          <div className="w-full flex px-2 items-center mt-5">
            <h1 className="font-boldroboto text-sm darkgrey">DIRECT MESSAGES</h1>
            <h1 className="font-boldroboto darkgrey right-0 absolute mr-7 cursor-pointer text-lg">+</h1>
          </div>

          <div className="overflow-x-hidden overflow-scroll h-full w-full flex mt-2 flex-col items-center">
            {users.map((user) => {
              return (
                <User key={user.username} username={user.username} selected={user.selected} status={user.status} />
              )
            })}
          </div>
        </motion.div>

        <motion.div className="flex flex-col items-center w-full h-full">
          <motion.div variants={fade} className="w-full flex items-center h-11 acrylic">
            <Title navSelected={navSelected} />
          </motion.div>
          <p className="text-white font-roboto my-auto text-center">
            Nahhh. jit really thought that this is done? <br />
            Nope. This is all you get mf. Ill finish this maybe tmmrw.<br /><br />

          </p>
        </motion.div>
      </motion.div>
    )
  }
