import { motion } from "framer-motion";
import { useState } from "react";

function NameCard(props) {
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = () => {
        setIsClosing(true);
    };

    return (
        <motion.div
            className="card my-4"
            style={{ width: "18rem" }}
            initial={{ scale: 0 }}
            animate={isClosing ? { scale: 0 } : { scale: 1 }}
            onAnimationComplete={() => {
                if (isClosing) {
                    props.onRemove();
                }
            }}
        >
            <div className="card-body">
                <div className="card-title-container d-flex justify-content-between">
                    <h2 className="card-title">{props.name}</h2>
                    <button className="btn btn-close" onClick={handleClose}></button>
                </div>
                <p className="card-text">
                    Hello, my name is {props.name}. I am {props.age}.
                    You can contact me through {props.email}.
                </p>
            </div>
        </motion.div>
    );
}

export default NameCard;
