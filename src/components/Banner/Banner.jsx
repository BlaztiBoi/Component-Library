/* eslint-disable react/prop-types */
import "./Banner.css"
import { FaCheckCircle } from "react-icons/fa";
import { IoWarning } from "react-icons/io5";
import { FaCircleXmark } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";

export default function Banner({children, variant="neutral"}){

    const variantValidation = variant === "neutral" ? true : variant === "sucess" ? true : variant === "warning" ? true : variant === "danger" ? true : false
    variant = !variantValidation ? "neutral" : variant
    return (
        <div className={`banner variant-${variant}`}>
            <div className="banner-icon">
                {variant === "sucess" ? <FaCheckCircle/> : variant === "warning" ? <IoWarning/> : variant === "danger" ?<FaCircleXmark/> : <FaCircleInfo/>}
            </div>
            <div className="banner-text">
            {children}
            </div>
        </div>
    )
   
}