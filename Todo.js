import {useState} from 'react';
import Modal from './Modal';

function Todo(props){
    const[showModal,setShowModal]=useState(false);

    function showModalHandler(){
        setShowModal(true);
    }

    function closeModalHandler(){
        setShowModal(false);
    }

    return(


        <div className='card'>
        <h2>{props.text}</h2>
        <div className="actions">
        <button className='btn' onClick={showModalHandler} >
            show
            </button>
            <button className='btn' onClick={closeModalHandler} >
            Hide
            </button>
            </div>
            {showModal && <Modal id="demo" closeModalHandler={closeModalHandler} />}
            </div>
    );
}
export default Todo;