import React, { useState, useEffect, useRef  } from "react";
import './Contents.css'
import jsonData from './linkname_src.json'
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const linknames_1 = jsonData.linknames_1;
const linknames_2 = jsonData.linknames_2;
const topicname_1 = jsonData.topicname_1;
const topicname_2 = jsonData.topicname_2;
const covername_1 = jsonData.covername_1;
const covername_2 = jsonData.covername_2;

let youtubescreenX = screen.width * 0.6;
let youtubescreenY = screen.height * 0.6;

function Contents() {
    const [isOpen, setIsOpen] = useState(false);
    const [nameLink, setLink] = useState("");
    const youtubePlayerRef = useRef(null);

    const openModal = (n, index) => {
        if(n === 1){
            setLink(linknames_1[index])
        }
        if(n === 2){
            setLink(linknames_2[index])
        }
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        if (youtubePlayerRef.current) {
            youtubePlayerRef.current.internalPlayer.stopVideo(); // Stop the YouTube video
        }
    };
    const handleOverlayClick = (event) => {
        if (
            youtubePlayerRef.current &&
            !youtubePlayerRef.current.container.contains(event.target) &&
            !document.querySelector('.modal').contains(event.target)
        ) {
            closeModal();
        }
    };

    useEffect(() => {
        Modal.setAppElement('#root'); // Set the appElement
    }, []);

    return (
        <div className="Contents">
            <div className="c1" style={{display: 'none'}}>
                <div className="chead">รีวิว และรถบ้านของลูกค้า</div>
                <div className="videogroup">
                    {topicname_1.map((topicname, index) => (
                        <div key={index} className="videobox" onClick={() => {
                            if(screen.width > 1100){
                                openModal(1, index);
                            }else{
                                window.open("https://www.youtube.com/watch?v=" + linknames_1[index], '_blank');
                            }
                            }}>
                            <div className="coverbox">
                                <img className="setcoverpicture" src={`/img_videopage/${covername_1[index]}`} alt="" />
                                <div className="icon_play fa fa-play-circle"></div>
                            </div>
                            <p>{topicname}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="c2">
                <div className="chead">สาธิตการใช้งาน</div>
                <div className="videogroup">
                    {topicname_2.map((topicname, index) => (
                        <div key={index} className="videobox" onClick={() => {
                            if(screen.width > 1100){
                                openModal(2, index);
                            }else{
                                window.open("https://www.youtube.com/watch?v=" + linknames_2[index], '_blank');
                            }
                            }}>
                            <div className="coverbox">
                                <img className="setcoverpicture" src={`/img_videopage/${covername_2[index]}`} alt="" />
                                <div className="icon_play fa fa-play-circle"></div>
                            </div>
                            <p>{topicname}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Modal isOpen={isOpen} onRequestClose={closeModal} className="modal" onClick={handleOverlayClick}>
                <button onClick={closeModal} className="buttonclose_videopage fa fa-close"></button>
                <YouTube
                    videoId={nameLink}
                    opts={{ width: youtubescreenX, height: youtubescreenY }}
                    ref={youtubePlayerRef}
                    style={{background: '#FF3333', zIndex: '2'}}
                />
                <div className="backclose" onClick={closeModal}></div>
            </Modal>
        </div>
    )
}

export default Contents