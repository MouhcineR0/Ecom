import React, { useRef, useState } from 'react';
import { Button } from 'antd';
import Ajouter from './Ajouter';
import CardCat from './CardCat';

function Category() {
    const [open, setOpen] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [bounds, setBounds] = useState({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    });
    const draggleRef = useRef(null);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };

    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };

    const onStart = (_event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement;
        const targetRect = draggleRef.current?.getBoundingClientRect();
        if (!targetRect) {
            return;
        }
        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y),
        });
    };

    return (
        <div className='w-full h-[100vh] bg-gray-100'>
            <h1 className='text-primary font-poppins font-bold text-2xl mb-4'>Gestionne des categories :</h1>
            <span className='w-full flex justify-end'>
                <Button
                    onClick={showModal}
                    className='bg-blue-500 text-white hover:bg-blue-700'
                >
                    Ajouter une nouvelle categorie
                </Button>
            </span>
            <Ajouter
                open={open}
                handleOk={handleOk}
                handleCancel={handleCancel}
                disabled={disabled}
                setDisabled={setDisabled}
                bounds={bounds}
                onStart={onStart}
                draggleRef={draggleRef}
            />
            <CardCat/>
        </div>
    );
}

export default Category;
