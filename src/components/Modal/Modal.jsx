import './Modal.scss'

/*  import material */
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ title, close, children }) => {
    return(
        <div className="backshadow">
            <div className='custom-modal'>
                <CloseIcon onClick={() => close(false)}/>
                <h2>{title}</h2>
                {children}
            </div>
        </div>
    )
}

export default Modal