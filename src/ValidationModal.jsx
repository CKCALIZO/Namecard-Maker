import { motion } from 'framer-motion';

function ValidationModal({ message, onClose }) {
    
    const handleBackdropClick = (e) => {
        if (e.target.classList.contains('modal-backdrop')) {
            onClose();
        }
    };

    return (
        <>
            <motion.div
                className="modal-backdrop fade show"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={handleBackdropClick}
            ></motion.div>

            <motion.div
                className="modal fade show"
                style={{ display: 'block' }}
                tabIndex="-1"
                aria-labelledby="validationModalLabel"
                aria-modal="true"
                role="dialog"
                initial={{ y: '-100vh' }}
                animate={{ y: 0 }}
                exit={{ y: '100vh' }}
                transition={{ duration: 0.5 }}
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="validationModalLabel">Invalid Input</h5>
                            <button type="button" className="btn-close" onClick={onClose} aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {message}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
}

export default ValidationModal;
