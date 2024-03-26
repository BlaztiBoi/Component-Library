
import { BsBack } from "react-icons/bs"
import "./Badge.css"
import classnames from "classnames"

export default function Badge({children ,type , color}) {

    const availableColors = {
    
        default:{
            color:"black",
            background:"white"
        },
        red:{
            color:"#991B1B",
            background:"#FEE2E2"
        },
        yellow:{
            color:"#92400E",
            background:"#FEF3C7"
        },
        green:{
            color:"#065F46",
            background:"#D1FAE5"
        },
        blue:{
            color:"#1E40AF",
            background:"#DBEAFE"
        },
        indigo:{
            color:"#3730A3",
            background:"#E0E7FF"
        },
        purple:{
            color:"#5B21B6",
            background:"#EDE9FE"
        },
        pink:{
            color:"#9D174D",
            background:"#FCE7F3"
        }
    }

    let typeClass =`badge-type-${type ==="square" || type === "pill" ? type : "square"}`
    let colorClass = color
    const allClasses = classnames('badge',typeClass,colorClass)

    const styles = color && availableColors[color]


    return (
        <div className={allClasses} style={styles}>
            {children}

        </div>
    )
}