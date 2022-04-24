import React, {useContext} from "react";
import bin from "./../../resources/assets/images/bin.png";
import myComputer from "./../../resources/assets/images/desktop-computer.png";
import folder from "./../../resources/assets/images/empty-folder.png";
import txtFile from "./../../resources/assets/images/txt-file.png";
import Icon from "../components/icon";
import { windowContext } from "./UserPage";


export default function DesktopIcons(props) {

    const { state, actions } = useContext(windowContext);


    // Icons info
    const database = [
        {
            
            type: 'folder',
            img: bin,
            alt: "alt-text",
            text: "Recycle bin"
        },
        {
            
            type: 'folder',
            img: myComputer,
            alt: "alt-text",
            text: "This PC"
        },
        {
            
            type: 'folder',
            img: folder,
            alt: "alt-text",
            text: "My Docs"
        },
        {
            
            type: 'text',
            img: txtFile,
            alt: "alt-text",
            text: "txt-file.txt"
        },
       
    ];


    return (
        <>
            <div className="v-desktopIcons">

                {database.map(item => {
                    return (
                        <>
                            <Icon type={item.type} icon={item.img} alt={item.alt} text={item.text} />
                        </>
                    );
                })}

            </div>
        </>
    );
}