import React, { useEffect, useState } from "react";
import './Photoset.css'
import jsonData from './filename_img_gallery.json'
import "react-image-gallery/styles/css/image-gallery.css"; // Import the CSS styles
import Gallery from 'react-image-gallery';

const pictureList = jsonData.file_names;
const modifiedFileNames = pictureList.map(pictureList => "/img_gallery/set_group_1/" + pictureList.slice(0));

function Photoset() {
    const [widthSet, setWidthSet] = useState('100%');
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        const nSet = Math.round((screen.width / 300) + 0.05) - 1;
        if(screen.width >= 1100){
            setWidthSet(Math.round(100 / nSet) + '%');
        }else{
            setWidthSet('46%');
        }
    }, []);

    const openImage = (index) => {
        setSelectedImageIndex(index);
    };

    const closeImage = () => {
        setSelectedImageIndex(null);
    };

    const nextImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex < modifiedFileNames.length - 1) {
            setSelectedImageIndex(selectedImageIndex + 1);
        }
    };

    const prevImage = () => {
        if (selectedImageIndex !== null && selectedImageIndex > 0) {
            setSelectedImageIndex(selectedImageIndex - 1);
        }
    };



    return (
        <div className="Photoset">
            {modifiedFileNames.map((picture, index) => (
                <div key={index} className="group_a_img" style={{ width: widthSet }} onClick={() => openImage(index)} >
                    <img className="pht" src={picture} alt={`Image ${index}`}/>
                    <div className="onimg fa fa-share-square-o"></div>
                </div>
            ))}

            {selectedImageIndex !== null && (
                <div className="Gallery_slide">
                    <Gallery items={modiFile} startIndex={selectedImageIndex} />
                    <span className="close-button" onClick={closeImage}>
                        &times;
                    </span>
                </div>
            )}
        </div>
    );
}
let oh, ot, otw;
if(screen.width >= 1100){
    oh = (screen.height * 0.80) + "px"
    ot = (screen.height * 0.06) + "px"
    otw = "100%"
}else{
    oh = "400px"
    ot = "40px"
    otw = "50px"
}
const modiFile = pictureList.map(pictureList => {
    return {
        original: `/img_gallery/set_group_1/${pictureList.slice(0)}`,
        thumbnail: `/img_gallery/set_group_1/${pictureList.slice(0)}`,
        originalHeight: oh,
        thumbnailHeight: ot,
        thumbnailWidth: otw,
        
    };
});
export default Photoset;




/*import React, { useEffect, useState } from "react";
import './Photoset.css'
import jsonData from './filename_img_gallery.json'

const pictureList = jsonData.file_names;
const modifiedFileNames = pictureList.map(pictureList => "/img_gallery/set_group_1/" + pictureList.slice(0));

function Photoset() {
    const [widthSet, setWidthSet] = useState('100%');

    useEffect(() => {
        const nSet = Math.round(screen.width / 300);
        setWidthSet(Math.round(100 / nSet) + '%');
    }, []);

    return (
        <div className="Photoset">
            {modifiedFileNames.map((picture, index) => (
                <div key={index} className="group_a_img" style={{ width: widthSet }} onClick={() => {
                    window.open(modifiedFileNames[`${index}`], '_blank');
                }}>
                    <img className="pht" src={picture} alt={`Image ${index}`} />
                    <div className="onimg fa fa-share-square-o"></div>
                </div>
            ))}
        </div>
    );
}

export default Photoset;
*/